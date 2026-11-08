import { NextResponse } from "next/server"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().trim().min(1, "Enter your name.").max(100, "Name is too long (max 100 characters)."),
  email: z.string().trim().email("Enter a valid email address.").max(200, "Email is too long."),
  message: z.string().trim().min(1, "Enter a message.").max(3000, "Message is too long (max 3000 characters)."),
  // Honeypot field: real users never fill it in
  website: z.string().optional(),
})

export async function POST(req: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  if (!token || !chatId) {
    console.error("[contact] TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not configured")
    return NextResponse.json({ error: "Contact form is temporarily unavailable." }, { status: 503 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid input." }, { status: 400 })
  }

  const { name, email, message, website } = parsed.data

  // Pretend success so bots don't retry
  if (website) {
    return NextResponse.json({ ok: true })
  }

  // No parse_mode is set, so user input is sent as plain text and needs no escaping
  const text = `📩 New message from portfolio\n\n👤 Name: ${name}\n📧 Email: ${email}\n\n💬 Message:\n${message}`

  let res: Response
  try {
    res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
      signal: AbortSignal.timeout(10_000),
    })
  } catch (e) {
    console.error("[contact] Telegram request failed", e)
    return NextResponse.json({ error: "Message not sent." }, { status: 502 })
  }

  if (!res.ok) {
    const detail = await res.text().catch(() => "<unreadable>")
    console.error("[contact] Telegram sendMessage failed", res.status, detail)
    if (res.status === 429) {
      return NextResponse.json({ error: "Too many messages right now. Wait a minute." }, { status: 429 })
    }
    return NextResponse.json({ error: "Message not sent." }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
