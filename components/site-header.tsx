"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { localeCookie, localePath, locales, stripLocale, type Locale } from "@/lib/i18n"
import { site } from "@/lib/site"

export default function SiteHeader({
  lang,
  items,
  labels,
}: {
  lang: Locale
  items: { href: string; label: string }[]
  labels: { main: string; language: string }
}) {
  const pathname = usePathname()
  const path = stripLocale(pathname)

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-2 px-4 sm:gap-4 sm:px-6">
        <Link href={localePath(lang, "/")} className="shrink-0 text-sm font-semibold tracking-tight whitespace-nowrap">
          <span className="sm:hidden">A. Alekseev</span>
          <span className="hidden sm:inline">{site.name}</span>
        </Link>
        <div className="flex items-center gap-0.5 sm:gap-3">
          <nav aria-label={labels.main}>
            <ul className="flex items-center sm:gap-2">
              {items.map((item) => {
                const itemPath = stripLocale(item.href)
                const active = path === itemPath || path.startsWith(`${itemPath}/`)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "rounded-md px-1.5 py-1.5 text-sm whitespace-nowrap transition-colors sm:px-2.5",
                        active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <ul aria-label={labels.language} className="flex items-center border-l border-border pl-0.5 text-xs sm:pl-3">
            {locales.map((locale) => (
              <li key={locale}>
                {/* A full page load, not <Link>: the cookie must be set before the server sees the request */}
                <a
                  href={localePath(locale, path)}
                  hrefLang={locale}
                  lang={locale}
                  aria-current={locale === lang ? "true" : undefined}
                  onClick={() => {
                    document.cookie = `${localeCookie}=${locale}; path=/; max-age=31536000; samesite=lax`
                  }}
                  className={cn(
                    "rounded-md px-1 py-1.5 font-medium uppercase transition-colors sm:px-1.5",
                    locale === lang ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {locale}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
