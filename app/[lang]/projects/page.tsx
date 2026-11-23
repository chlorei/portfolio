import type { Metadata } from "next"
import { pageMetadata } from "@/lib/metadata"
import ProjectCard from "@/components/project-card"
import Reveal from "@/components/reveal"
import { getDictionary } from "@/lib/dictionary"
import { isLocale, type Locale } from "@/lib/i18n"
import { getProjects } from "@/lib/projects"

export async function generateMetadata({ params }: PageProps<"/[lang]/projects">): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const t = getDictionary(lang).projects
  return pageMetadata({ lang, title: t.title, description: t.description, path: "/projects" })
}

export default async function Projects({ params }: PageProps<"/[lang]/projects">) {
  const lang = (await params).lang as Locale
  const t = getDictionary(lang).projects
  const projects = getProjects(lang)

  return (
    <main className="mx-auto max-w-5xl px-4 pt-14 pb-20 sm:px-6 sm:pt-20">
      <Reveal>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{t.title}</h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">{t.intro}</p>
      </Reveal>
      <ul className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <li key={project.slug} className={i === 0 ? "md:col-span-2" : undefined}>
            <Reveal delay={i === 0 ? 0 : ((i - 1) % 2) * 100} className="h-full">
              <ProjectCard project={project} lang={lang} featured={i === 0} priority={i < 3} />
            </Reveal>
          </li>
        ))}
      </ul>
    </main>
  )
}
