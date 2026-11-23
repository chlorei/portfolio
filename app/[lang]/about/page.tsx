import type { Metadata } from "next"
import { pageMetadata } from "@/lib/metadata"
import Link from "next/link"
import { CvButton, OtherCvLink } from "@/components/cv-links"
import Reveal from "@/components/reveal"
import { getDictionary } from "@/lib/dictionary"
import { isLocale, localePath, type Locale } from "@/lib/i18n"

export async function generateMetadata({ params }: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const t = getDictionary(lang).about
  return pageMetadata({ lang, title: t.title, description: t.description, path: "/about" })
}

const skills = [
  { area: "languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { area: "frontend", items: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "Zustand", "Redux"] },
  { area: "backend", items: ["FastAPI", "Node.js", "NestJS", "REST APIs", "WebSockets", "BullMQ"] },
  { area: "data", items: ["PostgreSQL", "pgvector", "SQLAlchemy", "Alembic", "MongoDB", "Redis"] },
  { area: "infrastructure", items: ["Docker", "Docker Compose", "Caddy", "Vercel", "Git"] },
] as const

export default async function About({ params }: PageProps<"/[lang]/about">) {
  const lang = (await params).lang as Locale
  const t = getDictionary(lang).about

  return (
    <main className="mx-auto max-w-3xl px-4 pt-14 pb-24 sm:px-6 sm:pt-20">
      <Reveal>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{t.heading}</h1>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
          {t.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            {t.latest.before}
            <Link
              href={localePath(lang, "/projects/incamp")}
              className="font-medium text-foreground underline underline-offset-4"
            >
              inCamp
            </Link>
            {t.latest.after}
          </p>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
          <CvButton lang={lang} />
          <OtherCvLink lang={lang} />
        </div>
      </Reveal>

      <section aria-labelledby="timeline-heading" className="mt-20">
        <Reveal>
          <h2 id="timeline-heading" className="text-2xl font-semibold tracking-tight">
            {t.timelineHeading}
          </h2>
        </Reveal>
        <ol className="relative mt-8 space-y-6 border-l border-border pl-6 sm:pl-8">
          {t.timeline.map((item, i) => (
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
            {t.skillsHeading}
          </h2>
        </Reveal>
        <div className="mt-8 space-y-6">
          {skills.map((group, i) => (
            <Reveal key={group.area} delay={i * 60}>
              <h3 className="text-sm text-muted-foreground">{t.skillAreas[group.area]}</h3>
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
            {t.languagesHeading}
          </h2>
        </Reveal>
        <ul className="mt-8 grid grid-cols-3 gap-3">
          {t.languages.map((language, i) => (
            <li key={language.name}>
              <Reveal delay={i * 80}>
                <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
                  <p className="text-xl font-semibold tracking-tight sm:text-2xl">{language.level}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{language.name}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
