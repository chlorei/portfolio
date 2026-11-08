import type { Metadata } from "next"
import { pageMetadata } from "@/lib/metadata"
import ContactForm from "@/components/contact-form"
import Reveal from "@/components/reveal"
import { site } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with Aleksandr Alekseev about Werkstudent roles or projects.",
  path: "/contact",
})

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, external: false },
  { label: "LinkedIn", value: "aleksandr-alekseev", href: site.linkedin, external: true },
  { label: "GitHub", value: "chlorei", href: site.github, external: true },
]

export default function Contact() {
  return (
    <main className="mx-auto grid max-w-5xl gap-14 px-4 pt-14 pb-20 sm:px-6 sm:pt-20 lg:grid-cols-[1fr_18rem]">
      <Reveal>
        <h1 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Contact</h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          Hiring a Werkstudent or have a project in mind? Send a message and I’ll reply by email.
          German or English both work.
        </p>
        <div className="mt-10">
          <ContactForm />
        </div>
      </Reveal>

      <Reveal delay={120} className="lg:pt-24">
      <aside>
        <h2 className="text-sm text-muted-foreground">Or reach me directly</h2>
        <dl className="mt-4 divide-y divide-border border-y border-border">
          {channels.map((channel) => (
            <div key={channel.label} className="flex items-baseline justify-between gap-4 py-3">
              <dt className="text-sm text-muted-foreground">{channel.label}</dt>
              <dd className="truncate">
                <a
                  href={channel.href}
                  {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="hover:underline hover:underline-offset-4"
                >
                  {channel.value}
                </a>
              </dd>
            </div>
          ))}
        </dl>
        <a
          href={site.cv}
          download={site.cvFileName}
          className="mt-6 inline-block text-sm font-medium underline decoration-border underline-offset-4 hover:decoration-foreground"
        >
          Download CV (PDF)
        </a>
      </aside>
      </Reveal>
    </main>
  )
}
