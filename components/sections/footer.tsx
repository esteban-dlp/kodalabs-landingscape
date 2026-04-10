"use client"

import Image from "next/image"
import Link from "next/link"
import { useI18n } from "@/lib/i18n"

export function Footer() {
  const { t } = useI18n()
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { href: "#perfect-for", label: t("nav.perfectFor") },
    { href: "#process", label: t("nav.process") },
    { href: "#pricing", label: t("nav.pricing") },
    { href: "#contact", label: t("nav.contact") },
  ]

  return (
    <footer className="py-12 lg:py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Logo and Tagline */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.svg"
                alt="Koda Labs"
                width={32}
                height={32}
                className="w-8 h-8 drop-shadow-md"
              />
              <span className="font-semibold text-lg text-foreground">
                Koda Labs
              </span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {t("footer.navigation")}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {t("footer.connect")}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@usekodalabs.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  hello@usekodalabs.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/kodalabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/kodalabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Koda Labs. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}
