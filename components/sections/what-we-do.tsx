"use client"

import { useI18n } from "@/lib/i18n"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function WhatWeDo() {
  const { t } = useI18n()
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section id="about" className="py-24 lg:py-32 border-t border-border">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Label and Headline */}
          <div>
            <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-4">
              {t("whatWeDo.label")}
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              {t("whatWeDo.headline")}
            </h2>
          </div>

          {/* Right Column - Description */}
          <div>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
              {t("whatWeDo.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
