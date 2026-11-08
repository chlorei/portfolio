import type { Metadata } from "next"
import { pageMetadata } from "@/lib/metadata"
import ProjectCard from "@/components/project-card"
import Reveal from "@/components/reveal"
import { projects } from "@/lib/projects"

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description: "Products and client work: inCamp, Relinxr, Pokerocheck and more.",
  path: "/projects",
})

export default function Projects() {
  return (
    <main className="mx-auto max-w-5xl px-4 pt-14 pb-20 sm:px-6 sm:pt-20">
      <Reveal>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Projects</h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          Products I built and client work I shipped. Open a project to see what I did and what it runs on.
        </p>
      </Reveal>
      <ul className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <li key={project.slug} className={i === 0 ? "md:col-span-2" : undefined}>
            <Reveal delay={i === 0 ? 0 : ((i - 1) % 2) * 100} className="h-full">
              <ProjectCard project={project} featured={i === 0} priority={i < 3} />
            </Reveal>
          </li>
        ))}
      </ul>
    </main>
  )
}
