"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function FloatingNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      {/* Desktop/Tablet: Bottom-centered navbar */}
      <nav className="hidden md:block fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="rounded-full border border-[#1F1F1F] bg-[#111111]/95 backdrop-blur-md shadow-lg px-8 py-3 flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-all duration-200 ${
                isActive(item.href) ? "text-[#B6F2C1]" : "text-[#A1A1A1] hover:text-[#FFFFFF]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile: Floating compact button that expands */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        {/* Expanded navigation window */}
        <div
          className={`absolute bottom-16 right-0 rounded-2xl border border-[#1F1F1F] bg-[#111111]/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-out ${
            isOpen ? "w-48 p-4 opacity-100 visible" : "w-0 p-0 opacity-0 invisible"
          }`}
        >
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? "bg-[#B6F2C1]/10 text-[#B6F2C1]"
                    : "text-[#A1A1A1] hover:text-[#FFFFFF] hover:bg-[#1F1F1F]/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Floating toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-14 h-14 rounded-full border border-[#1F1F1F] bg-[#111111]/95 backdrop-blur-md shadow-lg text-[#A1A1A1] hover:text-[#B6F2C1] hover:border-[#B6F2C1] transition-all duration-200"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </>
  )
}
