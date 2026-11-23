import type { Metadata } from "next"
import { getDictionary } from "@/lib/dictionary"
import { localePath, locales, type Locale } from "@/lib/i18n"
import { site } from "@/lib/site"

/** hreflang links for a locale-free path, e.g. "/projects" */
export function languageAlternates(path: string) {
  return {
    ...Object.fromEntries(locales.map((lang) => [lang, localePath(lang, path)])),
    "x-default": path,
  }
}

// Per-page metadata with its own canonical URL, language alternates and Open Graph tags.
// Next.js replaces the layout's openGraph object instead of merging it, so every page sets the full set.
export function pageMetadata({
  lang,
  title,
  description,
  path,
}: {
  lang: Locale
  title?: string
  description: string
  /** Locale-free path, e.g. "/projects" */
  path: string
}): Metadata {
  const t = getDictionary(lang)
  const url = localePath(lang, path)
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | ${t.meta.role}`
  return {
    ...(title && { title }),
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: t.meta.ogLocale,
      url,
      title: fullTitle,
      description,
      images: [{ url: "/og.png", width: 1200, height: 750, alt: site.name }],
    },
  }
}
