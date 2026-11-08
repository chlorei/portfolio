import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Briefcase, Download, GraduationCap, Languages, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Reveal from "@/components/reveal"
import { site } from "@/lib/site"

const facts = [
  { icon: GraduationCap, term: "Studying", detail: "B.Sc. Computer Science, TUHH" },
  { icon: Languages, term: "Languages", detail: "German C1, English C1" },
  { icon: Briefcase, term: "Experience", detail: "Freelance since 2023" },
  { icon: MapPin, term: "Based in", detail: "Hamburg, Germany" },
]

const stack = [
  { area: "Frontend", items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Zustand"] },
  { area: "Backend", items: ["Python", "FastAPI", "Node.js", "NestJS", "REST APIs", "WebSockets"] },
  { area: "Data & infrastructure", items: ["PostgreSQL", "Redis", "MongoDB", "Docker", "Caddy", "Git"] },
]

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6">
      <section className="grid items-center gap-10 py-14 sm:py-20 md:grid-cols-[1fr_auto] md:gap-14 lg:py-24">
        <div className="order-2 md:order-1">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex size-2 rounded-full bg-signal" />
              </span>
              Open to Werkstudent roles
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Aleksandr Alekseev</h1>
            <p className="mt-3 text-xl text-muted-foreground sm:text-2xl">Full-stack developer</p>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Computer Science student at TUHH. I build web apps end to end, from the database and API to the
              interface.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="group">
                <Link href="/projects">
                  View projects
                  <ArrowRight aria-hidden className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={site.cv} download={site.cvFileName}>
                  <Download aria-hidden />
                  Download CV
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
        <Reveal delay={120} className="order-1 md:order-2">
          <div className="w-36 overflow-hidden rounded-2xl border border-border bg-muted sm:w-44 md:w-64">
            <Image
              src="/myPhoto.webp"
              alt="Portrait of Aleksandr Alekseev"
              width={600}
              height={800}
              priority
              sizes="256px"
              className="h-auto w-full"
            />
          </div>
        </Reveal>
      </section>

      <section aria-label="Quick facts" className="pb-16">
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
            What I work with
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {stack.map((group, i) => (
            <Reveal key={group.area} delay={i * 100}>
              <h3 className="text-sm text-muted-foreground">{group.area}</h3>
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
