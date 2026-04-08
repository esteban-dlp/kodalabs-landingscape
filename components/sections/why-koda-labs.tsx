"use client"

import { useI18n } from "@/lib/i18n"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Target, TrendingUp, Minimize2, Clock } from "lucide-react"

const whyIcons = {
  problemSolving: Target,
  scalable: TrendingUp,
  simplicity: Minimize2,
  efficiency: Clock,
}

const whyKeys = ["problemSolving", "scalable", "simplicity", "efficiency"] as const

export function WhyKodaLabs() {
  const { t } = useI18n()
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`max-w-3xl mx-auto text-center mb-16 lg:mb-20 transition-all duration-1000 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-4">
            {t("why.label")}
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            {t("why.headline")}
          </h2>
        </div>

        {/* Why Grid */}
        <div 
          ref={gridRef}
          className={`grid md:grid-cols-2 gap-8 lg:gap-12 transition-all duration-1000 ease-out delay-200 ${
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {whyKeys.map((key, index) => {
            const Icon = whyIcons[key]
            return (
              <div
                key={key}
                className="flex gap-5"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="shrink-0 w-12 h-12 rounded-lg border border-border flex items-center justify-center">
                  <Icon className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {t(`why.items.${key}.title`)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`why.items.${key}.description`)}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
