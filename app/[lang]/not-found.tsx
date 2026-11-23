"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { getDictionary } from "@/lib/dictionary"
import { localePath } from "@/lib/i18n"

// not-found gets no params, so the language comes from the URL
export default function NotFound() {
  const lang = usePathname().match(/^\/de(\/|$)/) ? "de" : "en"
  const t = getDictionary(lang).notFound

  return (
    <main className="mx-auto flex max-w-5xl flex-col items-start px-4 py-24 sm:px-6 sm:py-32">
      <p className="text-sm text-muted-foreground">404</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">{t.title}</h1>
      <p className="mt-4 max-w-md text-lg text-muted-foreground">{t.text}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild size="lg">
          <Link href={localePath(lang, "/projects")}>{t.viewProjects}</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href={localePath(lang, "/")}>{t.home}</Link>
        </Button>
      </div>
    </main>
  )
}
