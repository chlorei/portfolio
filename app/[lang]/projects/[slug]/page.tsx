import type { Metadata } from "next"
import { pageMetadata } from "@/lib/metadata"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectGallery from "@/components/project-gallery"
import Reveal from "@/components/reveal"
import AwardBadge from "@/components/award-badge"
import StatusBadge from "@/components/status-badge"
import { getDictionary } from "@/lib/dictionary"
import { isLocale, localePath, locales, type Locale } from "@/lib/i18n"
import { getProjects, projectSlugs } from "@/lib/projects"

export function generateStaticParams() {
  return locales.flatMap((lang) => projectSlugs.map((slug) => ({ lang, slug })))
}

export async function generateMetadata({ params }: PageProps<"/[lang]/projects/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params
  if (!isLocale(lang)) return {}
  const project = getProjects(lang).find((p) => p.slug === slug)
  return project
    ? pageMetadata({ lang, title: project.title, description: project.summary, path: `/projects/${project.slug}` })
    : {}
}

export default async function ProjectPage({ params }: PageProps<"/[lang]/projects/[slug]">) {
  const { lang: param, slug } = await params
  const lang = param as Locale
  const t = getDictionary(lang).projects
  const projects = getProjects(lang)
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) notFound()
  const project = projects[index]
  const next = projects[(index + 1) % projects.length]
  const cover = project.image ? { src: project.image, alt: t.screenshotOf + project.title } : undefined

  return (
    <main className="mx-auto max-w-3xl px-4 pt-10 pb-20 sm:px-6 sm:pt-14">
      <Link
        href={localePath(lang, "/projects")}
        className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft aria-hidden className="size-4 transition-transform group-hover:-translate-x-0.5" />
        {t.allProjects}
      </Link>

      <Reveal className="mt-8">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{project.title}</h1>
          {project.award ? (
            <AwardBadge award={project.award} />
          ) : (
            <StatusBadge status={project.status} label={t.status[project.status]} />
          )}
        </div>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{project.summary}</p>
        <p className="mt-2 text-sm text-muted-foreground">{project.role}</p>
        {project.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link, i) => (
              <Button key={link.href} asChild variant={i === 0 ? "default" : "outline"}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.source ? t.source : i === 0 ? t.openSite : link.label}
                  <ArrowUpRight aria-hidden />
                </a>
              </Button>
            ))}
          </div>
        )}
      </Reveal>

      <ProjectGallery cover={cover} shots={project.gallery} labels={getDictionary(lang).gallery} />

      <Reveal className="mt-14">
        <h2 className="text-xl font-semibold tracking-tight">{t.whatIBuilt}</h2>
        <ul className="mt-5 space-y-3">
          {project.points.map((point) => (
            <li key={point} className="flex gap-3 leading-relaxed">
              <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-foreground/40" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-14">
        <h2 className="text-xl font-semibold tracking-tight">{t.techStack}</h2>
        <div className="mt-5 space-y-5">
          {project.stack.map((group) => (
            <div key={group.layer}>
              <h3 className="text-sm text-muted-foreground">{t.layers[group.layer] ?? group.layer}</h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-md border border-border bg-card px-2.5 py-1 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>

      {next.slug !== project.slug && (
        <Link
          href={localePath(lang, `/projects/${next.slug}`)}
          className="group mt-16 flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/20"
        >
          <span>
            <span className="block text-sm text-muted-foreground">{t.nextProject}</span>
            <span className="text-lg font-semibold tracking-tight">{next.title}</span>
          </span>
          <ArrowUpRight
            aria-hidden
            className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      )}
    </main>
  )
}
