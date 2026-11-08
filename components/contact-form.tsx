"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

const fieldClass =
  "w-full rounded-md border border-input bg-card px-3.5 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string }

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", website: "" })
  const [status, setStatus] = useState<Status>({ kind: "idle" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (status.kind === "sent" || status.kind === "error") setStatus({ kind: "idle" })
  }

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus({ kind: "sending" })

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        const serverMessage = typeof data?.error === "string" ? data.error : null
        throw new Error(res.status < 500 && serverMessage ? serverMessage : "Message not sent.")
      }

      setFormData({ name: "", email: "", message: "", website: "" })
      setStatus({ kind: "sent" })
    } catch (err) {
      const message = err instanceof Error && err.message !== "Failed to fetch" ? err.message : "Message not sent."
      setStatus({ kind: "error", message })
    }
  }

  const sending = status.kind === "sending"

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={100}
            value={formData.name}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={200}
            value={formData.email}
            onChange={handleChange}
            className={fieldClass}
          />
        </div>
      </div>

      {/* Honeypot: hidden from people, filled in by bots */}
      <div className="hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={formData.website} onChange={handleChange} />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={3000}
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className={`${fieldClass} resize-y`}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={sending}>
          {sending ? "Sending…" : "Send message"}
        </Button>
        <p aria-live="polite" className="text-sm">
          {status.kind === "sent" && <span className="text-muted-foreground">Message sent. I’ll reply by email.</span>}
          {status.kind === "error" && (
            <span role="alert" className="text-destructive">
              {status.message} Try again or email{" "}
              <a href={`mailto:${site.email}`} className="underline underline-offset-4">
                {site.email}
              </a>
              .
            </span>
          )}
        </p>
      </div>
    </form>
  )
}
