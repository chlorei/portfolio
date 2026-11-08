import type React from "react"
import type { Metadata } from "next"
import { Schibsted_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from "@next/third-parties/google"
import "./globals.css"
import SiteHeader from "@/components/site-header"
import { site } from "@/lib/site"

const schibsted = Schibsted_Grotesk({ subsets: ["latin"], variable: "--font-schibsted" })

const description =
  "Computer Science student at TUHH and full-stack developer in Hamburg. Looking for a Werkstudent position. German C1, English C1."

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Full-Stack Developer`,
    template: `%s | ${site.name}`,
  },
  description,
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | Full-Stack Developer`,
    description,
    images: ["/og.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={schibsted.variable} data-scroll-behavior="smooth">
      <body className="flex min-h-dvh flex-col antialiased">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <footer className="border-t border-border">
          <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p>{site.name}, Hamburg</p>
            <ul className="flex gap-5">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-foreground">
                  Email
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
