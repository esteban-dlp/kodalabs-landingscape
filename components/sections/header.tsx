"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const { locale, setLocale, t } = useI18n()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "#services", label: t("nav.services") },
    { href: "#process", label: t("nav.process") },
    { href: "#about", label: t("nav.about") },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Koda Labs"
              width={36}
              height={36}
              className="w-8 h-8 lg:w-9 lg:h-9"
            />
            <span className="font-semibold text-lg text-foreground">
              Koda Labs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 text-sm">
              <button
                onClick={() => setLocale("en")}
                className={`px-2 py-1 rounded transition-colors ${
                  locale === "en"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </button>
              <span className="text-muted-foreground">/</span>
              <button
                onClick={() => setLocale("es")}
                className={`px-2 py-1 rounded transition-colors ${
                  locale === "es"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                ES
              </button>
            </div>

            <Button asChild size="sm">
              <Link href="#contact">{t("nav.contact")}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-base text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-2 pt-2 border-t border-border">
              <button
                onClick={() => setLocale("en")}
                className={`px-3 py-1.5 rounded text-sm transition-colors ${
                  locale === "en"
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLocale("es")}
                className={`px-3 py-1.5 rounded text-sm transition-colors ${
                  locale === "es"
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                Español
              </button>
            </div>

            <Button asChild className="w-full mt-2">
              <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                {t("nav.contact")}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
