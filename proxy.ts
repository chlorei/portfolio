import { NextResponse, type NextRequest } from "next/server"
import { defaultLocale, isLocale, localeCookie, localePath, type Locale } from "@/lib/i18n"

// English is served at unprefixed URLs and German under /de. Pages live in app/[lang],
// so an unprefixed path is rewritten to /en internally, and a visible /en prefix redirects away.
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl

  if (pathname === "/de" || pathname.startsWith("/de/")) return NextResponse.next()

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return NextResponse.redirect(new URL((pathname.slice(3) || "/") + search, request.url), 308)
  }

  // A visitor who never picked a language gets the one their browser prefers
  const lang = preferredLocale(request)
  if (lang !== defaultLocale) {
    return NextResponse.redirect(new URL(localePath(lang, pathname) + search, request.url))
  }

  return NextResponse.rewrite(new URL(`/${defaultLocale}${pathname === "/" ? "" : pathname}${search}`, request.url))
}

function preferredLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(localeCookie)?.value
  if (saved && isLocale(saved)) return saved

  // "de-DE,de;q=0.9,en;q=0.8" -> the highest-ranked language we have
  const ranked = (request.headers.get("accept-language") ?? "")
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=")
      return { lang: tag.split("-")[0].toLowerCase(), q: q ? Number(q) : 1 }
    })
    .sort((a, b) => b.q - a.q)
  return ranked.map((r) => r.lang).find(isLocale) ?? defaultLocale
}

export const config = {
  // Skip API routes, Next.js internals and files (CV.pdf, images, robots.txt, sitemap.xml, icon.svg)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}
