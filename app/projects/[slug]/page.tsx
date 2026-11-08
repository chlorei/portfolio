import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Reveal from "@/components/reveal"
import StatusBadge from "@/components/status-badge"
import { projects } from "@/lib/projects"

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  return project ? { title: project.title, description: project.summary } : {}
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) notFound()
  const project = projects[index]
  const next = projects[(index + 1) % projects.length]

  return (
    <main className="mx-auto max-w-3xl px-4 pt-10 pb-20 sm:px-6 sm:pt-14">
      <Link
        href="/projects"
        className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft aria-hidden className="size-4 transition-transform group-hover:-translate-x-0.5" />
        All projects
      </Link>

      <Reveal className="mt-8">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{project.title}</h1>
          <StatusBadge status={project.status} />
        </div>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{project.summary}</p>
        <p className="mt-2 text-sm text-muted-foreground">{project.role}</p>
        {project.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link, i) => (
              <Button key={link.href} asChild variant={i === 0 ? "default" : "outline"}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {i === 0 ? "Open site" : link.label}
                  <ArrowUpRight aria-hidden />
                </a>
              </Button>
            ))}
          </div>
        )}
      </Reveal>

      {project.image && (
        <Reveal delay={100} className="mt-10">
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted">
            <Image
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              fill
              priority
              sizes="(min-width: 768px) 720px, 100vw"
              className="object-cover object-top"
            />
          </div>
        </Reveal>
      )}

      <Reveal className="mt-14">
        <h2 className="text-xl font-semibold tracking-tight">What I built</h2>
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
        <h2 className="text-xl font-semibold tracking-tight">Tech stack</h2>
        <div className="mt-5 space-y-5">
          {project.stack.map((group) => (
            <div key={group.layer}>
              <h3 className="text-sm text-muted-foreground">{group.layer}</h3>
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
          href={`/projects/${next.slug}`}
          className="group mt-16 flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/20"
        >
          <span>
            <span className="block text-sm text-muted-foreground">Next project</span>
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
