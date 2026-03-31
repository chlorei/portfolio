"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/CV.pdf"
    link.download = "CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance-pretty">
                Aleksandr Alekseev
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground font-medium">Computer Science Student & Full-Stack Developer</p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Currently studying at TUHH and looking for a Werkstudent position to bring value and grow as a developer.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/projects" className="w-full sm:w-auto">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg h-11 px-6 font-medium">
                  View Projects
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full border-border text-foreground hover:white rounded-lg h-11 px-6 bg-transparent font-medium"
                >
                  Contact Me
                </Button>
              </Link>
              <button
                onClick={handleDownloadCV}
                className="w-full sm:w-auto px-6 h-11 rounded-lg font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-200"
              >
                Download CV
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex items-center justify-center lg:justify-end order-first lg:order-last">
            <div className="w-full max-w-sm aspect-square rounded-lg border border-border bg-card overflow-hidden shadow-premium">
              <Image
                src="/myPhoto.png"
                alt="Developer Photo Placeholder"
                width={400}
                height={400}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border">
       <div className="grid grid-cols-2 gap-8 sm:gap-12"> {/* Сделал 2 колонки, так как у тебя 2 элемента */}
  <div className="space-y-2">
    <p className="text-2xl sm:text-3xl font-bold text-primary">3+</p>
    <p className="text-sm text-muted-foreground">Years of Freelance Experience</p>
  </div>
  <div className="space-y-2">
    <p className="text-2xl sm:text-3xl font-bold text-primary">5+</p>
    <p className="text-sm text-muted-foreground">Commercial Projects Contributed/Built</p> 
    {/* Contributed означает, что ты внес свой вклад (верстал, делал фичи), а не делал всё один */}
  </div>
</div>
      </section>
    </main>
  )
}
