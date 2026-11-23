import type { Locale } from "@/lib/i18n"

export const site = {
  url: process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000",
  name: "Aleksandr Alekseev",
  email: "aaalekseevhi@gmail.com",
  github: "https://github.com/chlorei",
  linkedin: "https://www.linkedin.com/in/aleksandr-alekseev-715326346/",
  // The CV in each language: the file in public/ and the name it downloads as
  cv: {
    en: { href: "/CV.pdf", fileName: "Aleksandr_Alekseev_CV.pdf" },
    de: { href: "/Lebenslauf.pdf", fileName: "Lebenslauf_Aleksandr_Alekseev.pdf" },
  } satisfies Record<Locale, { href: string; fileName: string }>,
}
