import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/projects"
import StatusBadge from "@/components/status-badge"
import { cn } from "@/lib/utils"

export default function ProjectCard({
  project,
  featured = false,
  priority = false,
}: {
  project: Project
  /** Wide layout: image beside the text on medium screens and up */
  featured?: boolean
  priority?: boolean
}) {
  const tags = project.tags ?? project.stack.flatMap((group) => group.items).slice(0, 4)

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/40",
        featured && "lg:flex-row",
      )}
    >
      <div
        className={cn(
          "relative aspect-[16/10] shrink-0 overflow-hidden border-b border-border bg-muted",
          featured && "lg:aspect-auto lg:min-h-80 lg:w-3/5 lg:border-r lg:border-b-0",
        )}
      >
        {project.image && (
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            priority={priority}
            sizes={featured ? "(min-width: 1024px) 600px, 100vw" : "(min-width: 768px) 480px, 100vw"}
            className={cn(
              "object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]",
              featured ? "object-left-top" : "object-top",
            )}
          />
        )}
      </div>
      <div className={cn("flex flex-1 flex-col gap-3 p-5 sm:p-6", featured && "lg:justify-center lg:p-8")}>
        <div className="flex items-start justify-between gap-3">
          <h2 className={cn("text-xl font-semibold tracking-tight", featured && "lg:text-2xl")}>{project.title}</h2>
          <StatusBadge status={project.status} />
        </div>
        <p className="leading-relaxed text-muted-foreground">{project.summary}</p>
        <ul className={cn("flex flex-wrap gap-1.5 pt-2", !featured && "mt-auto")}>
          {tags.map((tag) => (
            <li key={tag} className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              {tag}
            </li>
          ))}
        </ul>
        <span className="flex items-center gap-1 pt-1 text-sm font-medium">
          View project
          <ArrowUpRight
            aria-hidden
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  )
}
