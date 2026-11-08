import type { ProjectStatus } from "@/lib/projects"
import { cn } from "@/lib/utils"

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
      <span
        aria-hidden
        className={cn(
          "size-1.5 rounded-full",
          status === "Live" ? "bg-signal" : status === "In progress" ? "bg-amber-500" : "bg-muted-foreground",
        )}
      />
      {status}
    </span>
  )
}
