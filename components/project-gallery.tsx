"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Reveal from "@/components/reveal"
import { cn } from "@/lib/utils"

type Shot = { src: string; alt: string }

/**
 * The main screenshot plus the extra ones in a grid. Clicking any of them opens
 * a full-screen viewer (native <dialog>: Esc closes it, focus stays inside) with
 * arrow keys, buttons and swipe to move between shots.
 */
export default function ProjectGallery({ cover, shots }: { cover?: Shot; shots: Shot[] }) {
  const all = cover ? [cover, ...shots] : shots
  const dialogRef = useRef<HTMLDialogElement>(null)
  const touchX = useRef<number | null>(null)
  const [index, setIndex] = useState<number | null>(null)

  const open = (i: number) => {
    setIndex(i)
    dialogRef.current?.showModal()
  }
  const close = () => dialogRef.current?.close()
  const step = useCallback(
    (delta: number) => setIndex((i) => (i === null ? i : (i + delta + all.length) % all.length)),
    [all.length],
  )

  // Arrow keys while the viewer is open; lock page scroll behind it.
  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1)
      if (e.key === "ArrowLeft") step(-1)
    }
    document.addEventListener("keydown", onKey)
    document.documentElement.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.documentElement.style.overflow = ""
    }
  }, [index, step])

  const current = index === null ? null : all[index]
  const many = all.length > 1

  return (
    <>
      {cover && (
        <Reveal delay={100} className="mt-10">
          <button
            type="button"
            onClick={() => open(0)}
            aria-label={`Open screenshot: ${cover.alt}`}
            className="group relative block aspect-[16/10] w-full cursor-zoom-in overflow-hidden rounded-xl border border-border bg-muted"
          >
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              priority
              sizes="(min-width: 768px) 720px, 100vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </button>
        </Reveal>
      )}

      {shots.length > 0 && (
        <Reveal className="mt-4">
          <ul className="grid gap-4 sm:grid-cols-2">
            {shots.map((shot, i) => (
              <li key={shot.src}>
                <button
                  type="button"
                  onClick={() => open(cover ? i + 1 : i)}
                  aria-label={`Open screenshot: ${shot.alt}`}
                  className="group relative block aspect-[16/10] w-full cursor-zoom-in overflow-hidden rounded-xl border border-border bg-muted transition-colors hover:border-foreground/20"
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(min-width: 768px) 352px, 100vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </button>
                <p className="mt-2 text-sm text-muted-foreground">{shot.alt}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      )}

      <dialog
        ref={dialogRef}
        onClose={() => setIndex(null)}
        aria-label="Screenshot viewer"
        className={cn(
          "fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 text-foreground backdrop:bg-transparent",
          "opacity-0 transition-opacity duration-200 open:opacity-100 starting:open:opacity-0",
        )}
      >
        <div
          className="flex h-full flex-col bg-background/95 backdrop-blur-md"
          onClick={(e) => {
            // Any click outside the image and the controls closes the viewer.
            if (!(e.target as HTMLElement).closest("img, button")) close()
          }}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null || !many) return
            const dx = e.changedTouches[0].clientX - touchX.current
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1)
            touchX.current = null
          }}
        >
          <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
            <span className="text-sm tabular-nums text-muted-foreground">
              {many && index !== null && `${index + 1} / ${all.length}`}
            </span>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="size-5" />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20">
            {current && (
              <div className="relative h-full w-full max-w-6xl">
                <Image
                  key={current.src}
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            )}

            {many && (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous screenshot"
                  className="absolute top-1/2 left-3 hidden -translate-y-1/2 rounded-full border border-border bg-card p-2.5 shadow-sm transition-colors hover:border-foreground/20 sm:block"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next screenshot"
                  className="absolute top-1/2 right-3 hidden -translate-y-1/2 rounded-full border border-border bg-card p-2.5 shadow-sm transition-colors hover:border-foreground/20 sm:block"
                >
                  <ChevronRight className="size-5" />
                </button>
              </>
            )}
          </div>

          <p className="px-4 py-4 text-center text-sm text-muted-foreground sm:px-6">
            {current?.alt}
          </p>
        </div>
      </dialog>
    </>
  )
}
