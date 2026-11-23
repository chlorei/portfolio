import { NextResponse } from "next/server"
import { z } from "zod"
import { isLocale, type Locale } from "@/lib/i18n"

// 4xx messages are shown to the visitor in the form, so they are written for people
const messages = {
  en: {
    name: "Enter your name.",
    nameLong: "Name is too long (max 100 characters).",
    email: "Enter a valid email address.",
    emailLong: "Email is too long.",
    message: "Enter a message.",
    messageLong: "Message is too long (max 3000 characters).",
    invalid: "Invalid request.",
    unavailable: "Contact form is temporarily unavailable.",
    notSent: "Message not sent.",
    tooMany: "Too many messages right now. Wait a minute.",
  },
  de: {
    name: "Bitte geben Sie Ihren Namen ein.",
    nameLong: "Der Name ist zu lang (max. 100 Zeichen).",
    email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    emailLong: "Die E-Mail-Adresse ist zu lang.",
    message: "Bitte geben Sie eine Nachricht ein.",
    messageLong: "Die Nachricht ist zu lang (max. 3000 Zeichen).",
    invalid: "Ungültige Anfrage.",
    unavailable: "Das Kontaktformular ist vorübergehend nicht verfügbar.",
    notSent: "Nachricht nicht gesendet.",
    tooMany: "Gerade zu viele Nachrichten. Bitte warten Sie eine Minute.",
  },
} satisfies Record<Locale, Record<string, string>>

function contactSchema(m: (typeof messages)[Locale]) {
  return z.object({
    name: z.string().trim().min(1, m.name).max(100, m.nameLong),
    email: z.string().trim().email(m.email).max(200, m.emailLong),
    message: z.string().trim().min(1, m.message).max(3000, m.messageLong),
    // Honeypot field: real users never fill it in
    website: z.string().optional(),
  })
}

function requestLocale(body: unknown): Locale {
  const lang = typeof body === "object" && body !== null ? (body as { lang?: unknown }).lang : undefined
  return typeof lang === "string" && isLocale(lang) ? lang : "en"
}

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: messages.en.invalid }, { status: 400 })
  }
  const m = messages[requestLocale(body)]

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  if (!token || !chatId) {
    console.error("[contact] TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not configured")
    return NextResponse.json({ error: m.unavailable }, { status: 503 })
  }

  const parsed = contactSchema(m).safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? m.invalid }, { status: 400 })
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
    return NextResponse.json({ error: m.notSent }, { status: 502 })
  }

  if (!res.ok) {
    const detail = await res.text().catch(() => "<unreadable>")
    console.error("[contact] Telegram sendMessage failed", res.status, detail)
    if (res.status === 429) {
      return NextResponse.json({ error: m.tooMany }, { status: 429 })
    }
    return NextResponse.json({ error: m.notSent }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
