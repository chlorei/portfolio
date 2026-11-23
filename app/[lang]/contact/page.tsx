import type { Metadata } from "next"
import { pageMetadata } from "@/lib/metadata"
import ContactForm from "@/components/contact-form"
import { OtherCvLink } from "@/components/cv-links"
import Reveal from "@/components/reveal"
import { getDictionary } from "@/lib/dictionary"
import { isLocale, type Locale } from "@/lib/i18n"
import { site } from "@/lib/site"

export async function generateMetadata({ params }: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const t = getDictionary(lang).contact
  return pageMetadata({ lang, title: t.title, description: t.description, path: "/contact" })
}

export default async function Contact({ params }: PageProps<"/[lang]/contact">) {
  const lang = (await params).lang as Locale
  const dict = getDictionary(lang)
  const t = dict.contact
  const channels = [
    { label: t.email, value: site.email, href: `mailto:${site.email}`, external: false },
    { label: "LinkedIn", value: "aleksandr-alekseev", href: site.linkedin, external: true },
    { label: "GitHub", value: "chlorei", href: site.github, external: true },
  ]
  const linkClass = "text-sm font-medium underline decoration-border underline-offset-4 hover:decoration-foreground"

  return (
    <main className="mx-auto grid max-w-5xl gap-14 px-4 pt-14 pb-20 sm:px-6 sm:pt-20 lg:grid-cols-[1fr_18rem]">
      <Reveal>
        <h1 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">{t.title}</h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">{t.intro}</p>
        <div className="mt-10">
          <ContactForm lang={lang} labels={t.form} />
        </div>
      </Reveal>

      <Reveal delay={120} className="lg:pt-24">
        <aside>
          <h2 className="text-sm text-muted-foreground">{t.direct}</h2>
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
          <ul className="mt-6 space-y-2">
            <li>
              <a href={site.cv[lang].href} download={site.cv[lang].fileName} className={linkClass}>
                {dict.cv.downloadPdf}
              </a>
            </li>
            <li>
              <OtherCvLink lang={lang} className={linkClass} />
            </li>
          </ul>
        </aside>
      </Reveal>
    </main>
  )
}
