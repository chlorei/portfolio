import { notFound } from "next/navigation"

// Unknown paths render this language's 404 page with the site header
export default function CatchAll() {
  notFound()
}
