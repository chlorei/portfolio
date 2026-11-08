import type { Metadata } from "next"
import Link from "next/link"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Reveal from "@/components/reveal"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "About",
  description: "Background, skills, experience and education of Aleksandr Alekseev.",
}

const timeline = [
  {
    period: "2025 – 2028",
    title: "B.Sc. Computer Science",
    place: "TUHH, Technische Universität Hamburg",
    points: [],
  },
  {
    period: "2023 – present",
    title: "Full-stack developer, freelance",
    place: "Remote",
    points: [
      "Build web apps for clients end to end, from first requirements to deployment, mostly in React, Next.js and TypeScript.",
      "Move existing React apps to Next.js with server-side rendering, rewriting components, routing and Redux state along the way, so pages load faster and get indexed by search engines.",
      "Improve performance and accessibility, checked with Lighthouse and Core Web Vitals.",
      "Work with clients directly: turn their requests into concrete tasks, agree on scope and deliver on time.",
    ],
  },
  {
    period: "2024 – 2025",
    title: "Studienkolleg, T-Kurs",
    place: "Studienkolleg Hamburg",
    points: ["Mathematics, physics and computer science."],
  },
]

const skills = [
  { area: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { area: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "Zustand", "Redux"] },
  { area: "Backend", items: ["FastAPI", "Node.js", "NestJS", "REST APIs", "WebSockets", "BullMQ"] },
  { area: "Data", items: ["PostgreSQL", "pgvector", "SQLAlchemy", "Alembic", "MongoDB", "Redis"] },
  { area: "Infrastructure", items: ["Docker", "Docker Compose", "Caddy", "Vercel", "Git"] },
]

const languages = [
  { name: "German", level: "C1" },
  { name: "English", level: "C1" },
  { name: "Russian", level: "Native" },
]

export default function About() {
  return (
    <main className="mx-auto max-w-3xl px-4 pt-14 pb-24 sm:px-6 sm:pt-20">
      <Reveal>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">About me</h1>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
          <p>
            I’m Aleksandr, 20, a Computer Science student at TUHH in Hamburg. I’ve been building for the web since
            2023, first as a freelance frontend developer and now across the whole stack.
          </p>
          <p>
            I build web apps end to end: interfaces in React and Next.js, APIs in FastAPI or Node.js, data in
            PostgreSQL, MongoDB and Redis, and deployment with Docker. I care about pages that load fast, work for
            everyone and stay easy to change.
          </p>
          <p>
            My latest product is{" "}
            <Link href="/projects/incamp" className="font-medium text-foreground underline underline-offset-4">
              inCamp
            </Link>
            . I’m looking for a Werkstudent position, up to 20 hours a week, where I can work on a real product
            alongside my studies.
          </p>
        </div>
        <Button asChild variant="outline" className="mt-6">
          <a href={site.cv} download={site.cvFileName}>
            <Download aria-hidden />
            Download CV
          </a>
        </Button>
      </Reveal>

      <section aria-labelledby="timeline-heading" className="mt-20">
        <Reveal>
          <h2 id="timeline-heading" className="text-2xl font-semibold tracking-tight">
            Experience and education
          </h2>
        </Reveal>
        <ol className="relative mt-8 space-y-6 border-l border-border pl-6 sm:pl-8">
          {timeline.map((item, i) => (
            <li key={item.title} className="relative">
              <span
                aria-hidden
                className="absolute top-6 -left-[calc(1.5rem+5px)] size-2.5 rounded-full border-2 border-background bg-foreground sm:-left-[calc(2rem+5px)]"
              />
              <Reveal delay={i * 80}>
                <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                  <p className="text-sm text-muted-foreground tabular-nums">{item.period}</p>
                  <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.place}</p>
                  {item.points.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3 leading-relaxed">
                          <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-foreground/40" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="skills-heading" className="mt-20">
        <Reveal>
          <h2 id="skills-heading" className="text-2xl font-semibold tracking-tight">
            Skills
          </h2>
        </Reveal>
        <div className="mt-8 space-y-6">
          {skills.map((group, i) => (
            <Reveal key={group.area} delay={i * 60}>
              <h3 className="text-sm text-muted-foreground">{group.area}</h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-md border border-border bg-card px-2.5 py-1 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="languages-heading" className="mt-20">
        <Reveal>
          <h2 id="languages-heading" className="text-2xl font-semibold tracking-tight">
            Languages
          </h2>
        </Reveal>
        <ul className="mt-8 grid grid-cols-3 gap-3">
          {languages.map((lang, i) => (
            <li key={lang.name}>
              <Reveal delay={i * 80}>
                <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
                  <p className="text-2xl font-semibold tracking-tight">{lang.level}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{lang.name}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
