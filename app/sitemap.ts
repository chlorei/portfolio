import type { MetadataRoute } from "next"
import { localePath, locales } from "@/lib/i18n"
import { languageAlternates } from "@/lib/metadata"
import { projectSlugs } from "@/lib/projects"
import { site } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/projects", "/about", "/contact", ...projectSlugs.map((slug) => `/projects/${slug}`)]
  const absolute = (path: string) => `${site.url}${path === "/" ? "" : path}`
  return paths.flatMap((path) =>
    locales.map((lang) => ({
      url: absolute(localePath(lang, path)),
      alternates: {
        languages: Object.fromEntries(
          Object.entries(languageAlternates(path)).map(([key, href]) => [key, absolute(href)]),
        ),
      },
    })),
  )
}
