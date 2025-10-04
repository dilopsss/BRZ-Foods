"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import { useState, useEffect } from "react"
import Image from "next/image"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
]

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  )
}

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) setMobileMenuOpen(false)
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [mobileMenuOpen])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4">
        {/* Aumentamos a altura do header para comportar a logo maior */}
        <div className="flex h-24 md:h-28 items-center justify-between">
          {/* Logo grande e responsiva */}
          <Link href="/" aria-label="BRZ Foods — Início" className="flex items-center">
            <Image
              src="/logos/logo-brzfoods.svg"
              alt="BRZ Foods"
              width={560}     // largura base para cálculo do layout
              height={160}    // altura base para cálculo do layout
              priority
              sizes="(max-width: 768px) 160px, (max-width: 1024px) 200px, 260px"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain"
            />
          </Link>

          {/* Navegação desktop */}
          <nav className="hidden items-center gap-8 md:flex" role="navigation" aria-label="Main menu">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-medium transition-colors hover:text-[#009739] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009739] focus-visible:ring-offset-2 ${
                  pathname === link.href
                    ? "text-[#009739] after:absolute after:bottom-[-8px] after:left-0 after:h-[2px] after:w-full after:bg-[#009739]"
                    : "text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Botão Amazon (desktop) */}
          <div className="hidden md:block">
            <Button
              asChild
              size="lg"
              className="bg-black font-semibold text-white hover:bg-gray-800 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              <a
                href="https://www.amazon.com/s?me=A3RTXQ8YZQG8YH"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Comprar na Amazon (opens in new tab)"
              >
                Comprar na Amazon
              </a>
            </Button>
          </div>

          {/* Botão menu mobile */}
          <button
            className="rounded-md p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009739] md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-gray-200 bg-white md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <nav className="mx-auto max-w-7xl px-4 py-6" role="navigation" aria-label="Mobile navigation">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-md px-3 py-2 font-medium transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009739] ${
                    pathname === link.href ? "text-[#009739]" : "text-gray-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild size="lg" className="mt-2 bg-black font-semibold text-white hover:bg-gray-800">
                <a
                  href="https://www.amazon.com/s?me=A3RTXQ8YZQG8YH"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Comprar na Amazon (opens in new tab)"
                >
                  Comprar na Amazon
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}