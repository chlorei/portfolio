"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface Project {
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
  image?: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Relinxr",
      description:
        "A comprehensive SaaS link analytics platform enabling users to track, analyze, and optimize their URLs with real-time analytics and detailed insights.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "React", "React Bits", "Shadcn UI", "JWT", "Recharts"],
      github: "https://github.com/chlorei/https---github.com-chlorei-linklab",
      demo: "https://rld.bio",
      image: "/relinxr.png",
    },
    {
      title: "Pokerocheck",
      description:
        "Migration of a legacy React SPA to a modern Next.js SSR application, dramatically improving performance, SEO, and user experience with server-side rendering.",
      tech: ["Next.js", "React", "TypeScript", "Styled Components",],
      github: "https://github.com",
      demo: "https://pokerocheck.ru",
      image: "/pokerocheck.png",
    },
    {
      title: "d1lemma",
      description:
        "A sophisticated task management application featuring an integrated rich-text editor, real-time collaboration, and intuitive task organization with markdown support.",
      tech: ["React", "Node.js", "Redux"],
      github: "https://github.com",
      demo: "https://d1lemma.example.com",
      image: "/dilemma.png",
    },
  ]

  return (
    <main className="min-h-screen bg-background pt-32">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <div className="space-y-2 mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">Showcasing my featured work and technical expertise.</p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border border-border rounded-lg bg-card/30 overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:bg-card/50"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Image */}
                {project.image && (
                  <div className="lg:col-span-1 h-64 lg:h-auto overflow-hidden bg-muted">
                    <Image
                      loading="eager"
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="lg:col-span-2 p-6 sm:p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-6">
                    {project.github && (
                      <Link href={project.github}>
                        <Button
                          variant="outline"
                          className="w-full sm:w-auto border-border text-foreground hover:bg-muted/50 bg-transparent"
                        >
                          GitHub
                        </Button>
                      </Link>
                    )}
                    {project.demo && (
                      <Link href={project.demo}>
                        <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
                          Live Demo
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
