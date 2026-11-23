import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getDictionary } from "@/lib/dictionary"
import { locales, type Locale } from "@/lib/i18n"
import { site } from "@/lib/site"

/** The CV in the page's language, plus a small link to the other language's version */
export function OtherCvLink({ lang, className }: { lang: Locale; className?: string }) {
  const other = locales.find((locale) => locale !== lang)!
  return (
    <a
      href={site.cv[other].href}
      download={site.cv[other].fileName}
      hrefLang={other}
      lang={other}
      className={
        className ??
        "text-sm text-muted-foreground underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-foreground"
      }
    >
      {getDictionary(lang).cv.other}
    </a>
  )
}

export function CvButton({
  lang,
  size,
  variant = "outline",
}: {
  lang: Locale
  size?: "default" | "lg"
  variant?: "default" | "outline"
}) {
  return (
    <Button asChild size={size} variant={variant}>
      <a href={site.cv[lang].href} download={site.cv[lang].fileName}>
        <Download aria-hidden />
        {getDictionary(lang).cv.download}
      </a>
    </Button>
  )
}
