"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/chlorei", icon: "↗" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aleksandr-alekseev-715326346/", icon: "↗" },
    { label: "Email", href: "mailto:@example.com", icon: "↗" },
  ]

  return (
    <main className="min-h-screen bg-background pt-32">
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <div className="space-y-2 mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Contact</h1>
          <p className="text-muted-foreground">Let's discuss your project or just say hello.</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 mb-16">
          {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project..."
              rows={6}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
              disabled={submitted}
            >
              {submitted ? "Sent!" : "Send Message"}
            </Button>
            <Link href="/resume.pdf">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-border text-foreground hover:bg-muted/50 bg-transparent"
              >
                Download CV
              </Button>
            </Link>
          </div>
        </form>

        {/* Social Links */}
        <div className="border-t border-border pt-12 space-y-8">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Connect</h2>
            <p className="text-muted-foreground text-sm">Reach out directly through these channels.</p>
          </div>

          <div className="space-y-3">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <span>{link.label}</span>
                <span className="text-xs opacity-50">{link.icon}</span>
              </Link>
            ))}
          </div>

          {/* Email Direct */}
          <div className="space-y-3 pt-4">
            <p className="text-sm text-muted-foreground">
              Or email me directly at{" "}
              <Link href="mailto:aaalekseevhi@gmail.com" className="text-primary hover:underline">
                aaalekseevhi@gmail.com
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
