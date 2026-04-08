"use client"

import { useI18n } from "@/lib/i18n"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Vision() {
  const { t } = useI18n()
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })

  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-4">
            {t("vision.label")}
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 lg:mb-8 text-balance">
            {t("vision.headline")}
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
            {t("vision.description")}
          </p>
        </div>
      </div>
    </section>
  )
}
