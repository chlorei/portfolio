import type React from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Schibsted_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from "@next/third-parties/google"
import "../globals.css"
import SiteHeader from "@/components/site-header"
import { getDictionary } from "@/lib/dictionary"
import { isLocale, locales, localePath } from "@/lib/i18n"
import { site } from "@/lib/site"

const schibsted = Schibsted_Grotesk({ subsets: ["latin"], variable: "--font-schibsted" })

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const t = getDictionary(lang)
  const title = `${site.name} | ${t.meta.role}`
  return {
    metadataBase: new URL(site.url),
    title: { default: title, template: `%s | ${site.name}` },
    description: t.meta.description,
    authors: [{ name: site.name }],
    creator: site.name,
    keywords: ["Aleksandr Alekseev", "Werkstudent", "Hamburg", "Full-Stack Developer", "TUHH", "Next.js", "FastAPI"],
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: t.meta.ogLocale,
      title,
      description: t.meta.description,
      images: ["/og.png"],
    },
    twitter: { card: "summary_large_image" },
  }
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const t = getDictionary(lang)

  return (
    <html lang={lang} className={schibsted.variable} data-scroll-behavior="smooth">
      <body className="flex min-h-dvh flex-col antialiased">
        <SiteHeader
          lang={lang}
          labels={t.nav}
          items={[
            { href: localePath(lang, "/projects"), label: t.nav.projects },
            { href: localePath(lang, "/about"), label: t.nav.about },
            { href: localePath(lang, "/contact"), label: t.nav.contact },
          ]}
        />
        <div className="flex-1">{children}</div>
        <footer className="border-t border-border">
          <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p>{site.name}, Hamburg</p>
            <ul className="flex gap-5">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-foreground">
                  {t.contact.email}
                </a>
              </li>
              <li>
                <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                  GitHub
                </a>
              </li>
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </footer>
        <Analytics />
        <GoogleAnalytics gaId="G-CCJSCZ30GY" />
      </body>
    </html>
  )
}
