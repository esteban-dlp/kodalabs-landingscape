"use client"

import { useState } from "react"
import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Plus, ArrowRight } from "lucide-react"

const faqKeys = ["speed", "domain", "changes", "languages", "hosting"] as const

export function FAQ() {
  const { t } = useI18n()
  const [openItem, setOpenItem] = useState<string | null>("speed")
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })
  const { ref: listRef, isVisible: listVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  const toggleItem = (key: string) => {
    setOpenItem(openItem === key ? null : key)
  }

  return (
    <section id="faq" className="py-28 lg:py-36 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left - sticky header */}
          <div
            ref={headerRef}
            className={`lg:col-span-5 transition-all duration-1000 ease-out ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-5">
                <span className="inline-block w-6 h-px bg-accent align-middle mr-3" />
                {t("faq.label")}
              </p>
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.08] text-balance mb-6">
                {t("faq.headline")}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed max-w-sm mb-8">
                {t("faq.subCopy")}
              </p>
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <span className="relative">
                  {t("faq.contactCta")}
                  <span className="absolute left-0 -bottom-0.5 h-px w-full bg-foreground/30 group-hover:bg-accent transition-colors" />
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right - accordion */}
          <div
            ref={listRef}
            className={`lg:col-span-7 transition-all duration-1000 ease-out delay-200 ${
              listVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="border-t border-border">
              {faqKeys.map((key, index) => {
                const isOpen = openItem === key
                return (
                  <div
                    key={key}
                    className="border-b border-border"
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <button
                      onClick={() => toggleItem(key)}
                      className="w-full flex items-start justify-between gap-6 py-6 lg:py-7 text-left group"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base lg:text-lg font-medium text-foreground leading-snug tracking-tight group-hover:text-accent transition-colors">
                        {t(`faq.items.${key}.question`)}
                      </span>
                      <span
                        className={`flex-shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-accent border-accent rotate-45 text-background"
                            : "text-muted-foreground group-hover:border-foreground/40"
                        }`}
                      >
                        <Plus className="w-4 h-4" strokeWidth={2.5} />
                      </span>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                        isOpen ? "grid-rows-[1fr] pb-7" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-muted-foreground leading-relaxed max-w-xl text-pretty">
                          {t(`faq.items.${key}.answer`)}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
