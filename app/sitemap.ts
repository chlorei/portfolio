import type { MetadataRoute } from "next"
import { projects } from "@/lib/projects"
import { site } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/projects", "/about", "/contact"]
  return [
    ...pages.map((path) => ({ url: `${site.url}${path}` })),
    ...projects.map((project) => ({ url: `${site.url}/projects/${project.slug}` })),
  ]
}
