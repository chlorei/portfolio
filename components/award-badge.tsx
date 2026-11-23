import { Trophy } from "lucide-react"

export default function AwardBadge({ award }: { award: string }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
      <Trophy aria-hidden className="size-3" />
      {award}
    </span>
  )
}
