import type { Metadata } from "next"
import { site } from "@/lib/site"

// Per-page metadata with its own canonical URL and Open Graph tags.
// Next.js replaces the layout's openGraph object instead of merging it, so every page sets the full set.
export function pageMetadata({
  title,
  description,
  path,
}: {
  title?: string
  description: string
  path: string
}): Metadata {
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | Full-Stack Developer`
  return {
    ...(title && { title }),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      url: path,
      title: fullTitle,
      description,
      images: [{ url: "/og.png", width: 1200, height: 750, alt: site.name }],
    },
  }
}
