import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Briefcase, GraduationCap, Languages, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CvButton, OtherCvLink } from "@/components/cv-links"
import Reveal from "@/components/reveal"
import { getDictionary } from "@/lib/dictionary"
import { isLocale, localePath, type Locale } from "@/lib/i18n"
import { site } from "@/lib/site"
import { pageMetadata } from "@/lib/metadata"

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  return pageMetadata({ lang, description: getDictionary(lang).meta.description, path: "/" })
}

// Structured data so search engines know this site is about a person
function personJsonLd(lang: Locale) {
  const t = getDictionary(lang)
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: `${site.url}${localePath(lang, "/")}`,
    image: `${site.url}/myPhoto.webp`,
    email: `mailto:${site.email}`,
    jobTitle: t.meta.role,
    description: t.meta.description,
    address: { "@type": "PostalAddress", addressLocality: "Hamburg", addressCountry: "DE" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Technische Universität Hamburg (TUHH)" },
    knowsLanguage: ["de", "en", "ru"],
    sameAs: [site.github, site.linkedin],
  }
}

const stack = [
  { area: "frontend", items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Zustand"] },
  { area: "backend", items: ["Python", "FastAPI", "Node.js", "NestJS", "REST APIs", "WebSockets"] },
  { area: "data", items: ["PostgreSQL", "Redis", "MongoDB", "Docker", "Caddy", "Git"] },
] as const

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang: param } = await params
  const lang = param as Locale
  const t = getDictionary(lang)
  const facts = [
    { icon: GraduationCap, ...t.home.facts.studying },
    { icon: Languages, ...t.home.facts.languages },
    { icon: Briefcase, ...t.home.facts.experience },
    { icon: MapPin, ...t.home.facts.location },
  ]

  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(lang)).replace(/</g, "\\u003c") }}
      />
      <section className="grid items-center gap-10 py-14 sm:py-20 md:grid-cols-[1fr_auto] md:gap-14 lg:py-24">
        <div className="order-2 md:order-1">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex size-2 rounded-full bg-signal" />
              </span>
              {t.home.available}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Aleksandr Alekseev</h1>
            <p className="mt-3 text-xl text-muted-foreground sm:text-2xl">{t.home.role}</p>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">{t.home.intro}</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="group">
                <Link href={localePath(lang, "/projects")}>
                  {t.home.viewProjects}
                  <ArrowRight aria-hidden className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <CvButton lang={lang} size="lg" />
            </div>
            <p className="mt-4">
              <OtherCvLink lang={lang} />
            </p>
          </Reveal>
        </div>
        <Reveal delay={120} className="order-1 md:order-2">
          <div className="w-36 overflow-hidden rounded-2xl border border-border bg-muted sm:w-44 md:w-64">
            <Image
              src="/myPhoto.webp"
              alt={t.home.portraitAlt}
              width={600}
              height={800}
              priority
              sizes="256px"
              className="h-auto w-full"
            />
          </div>
        </Reveal>
      </section>

      <section aria-label={t.home.factsLabel} className="pb-16">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact, i) => (
            <li key={fact.term}>
              <Reveal delay={i * 70} className="h-full">
                <div className="flex h-full items-center gap-4 rounded-xl border border-border bg-card p-4 sm:block sm:p-5">
                  <fact.icon aria-hidden className="size-5 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground sm:mt-3">{fact.term}</p>
                    <p className="mt-0.5 font-medium">{fact.detail}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="stack-heading" className="pb-24">
        <Reveal>
          <h2 id="stack-heading" className="text-2xl font-semibold tracking-tight">
            {t.home.stackHeading}
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {stack.map((group, i) => (
            <Reveal key={group.area} delay={i * 100}>
              <h3 className="text-sm text-muted-foreground">{t.home.stackAreas[group.area]}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-card px-2.5 py-1 text-sm transition-colors hover:border-foreground/30"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  )
}
