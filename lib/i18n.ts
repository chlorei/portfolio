// English lives at the unprefixed URLs (/, /projects, ...) so old links keep working;
// German lives under /de. proxy.ts rewrites unprefixed paths to /en internally.
export const locales = ["en", "de"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "en"

// Cookie set by the language switcher; proxy.ts reads it before guessing from Accept-Language
export const localeCookie = "lang"

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

/** Public URL of a path in a locale: localePath("de", "/projects") -> "/de/projects" */
export function localePath(lang: Locale, path: string) {
  if (lang === defaultLocale) return path
  return path === "/" ? `/${lang}` : `/${lang}${path}`
}

/**
 * The locale-free path: "/de/projects" -> "/projects". English pages report their
 * internal "/en/..." path (proxy.ts rewrites to it), so both prefixes are stripped.
 */
export function stripLocale(pathname: string) {
  const match = pathname.match(/^\/(?:en|de)(\/.*)?$/)
  return match ? match[1] || "/" : pathname
}

/** A string in every locale */
export type Localized<T = string> = Record<Locale, T>
