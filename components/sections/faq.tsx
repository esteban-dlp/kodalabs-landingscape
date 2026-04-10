"use client"

import { useState } from "react"
import { useI18n } from "@/lib/i18n"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ChevronDown } from "lucide-react"

const faqKeys = ["speed", "domain", "changes", "languages", "hosting"] as const

export function FAQ() {
  const { t } = useI18n()
  const [openItem, setOpenItem] = useState<string | null>(null)
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })
  const { ref: listRef, isVisible: listVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  const toggleItem = (key: string) => {
    setOpenItem(openItem === key ? null : key)
  }

  return (
    <section id="faq" className="py-24 lg:py-32 bg-secondary/50 border-t border-border">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-4">
            {t("faq.label")}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance">
            {t("faq.headline")}
          </h2>
        </div>

        {/* FAQ List */}
        <div 
          ref={listRef}
          className={`space-y-3 transition-all duration-1000 ease-out delay-200 ${
            listVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {faqKeys.map((key, index) => {
            const isOpen = openItem === key
            return (
              <div
                key={key}
                className="border border-border rounded-lg bg-card overflow-hidden"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleItem(key)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors"
                >
                  <span className="font-medium text-foreground pr-4">
                    {t(`faq.items.${key}.question`)}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {t(`faq.items.${key}.answer`)}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
