import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col items-start px-4 py-24 sm:px-6 sm:py-32">
      <p className="text-sm text-muted-foreground">404</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-md text-lg text-muted-foreground">
        This page doesn’t exist or was moved. Try the projects page instead.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild size="lg">
          <Link href="/projects">View projects</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/">Go to home page</Link>
        </Button>
      </div>
    </main>
  )
}
