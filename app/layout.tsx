import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import FloatingNav from "@/components/floating-nav"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aleksandr Alekseev - Developer Portfolio",
  description: "Developer Portfolio.",
  icons: {
    icon: [
      
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${_geist.className} antialiased bg-background text-foreground`}>
        <FloatingNav />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
