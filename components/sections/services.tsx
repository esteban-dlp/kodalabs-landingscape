"use client"

import { useI18n } from "@/lib/i18n"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Layers, Cog, Brain, AppWindow, Building2 } from "lucide-react"

const serviceIcons = {
  saas: Layers,
  automation: Cog,
  ai: Brain,
  apps: AppWindow,
  platforms: Building2,
}

const serviceKeys = ["saas", "automation", "ai", "apps", "platforms"] as const

export function Services() {
  const { t } = useI18n()
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section id="services" className="py-24 lg:py-32 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`max-w-3xl mb-16 lg:mb-20 transition-all duration-1000 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-4">
            {t("services.label")}
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            {t("services.headline")}
          </h2>
        </div>

        {/* Services Grid */}
        <div 
          ref={gridRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-1000 ease-out delay-200 ${
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {serviceKeys.map((key, index) => {
            const Icon = serviceIcons[key]
            return (
              <div
                key={key}
                className={`group p-6 lg:p-8 rounded-lg border border-border bg-background hover:bg-secondary/50 transition-all duration-300 ${
                  index === 0 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t(`services.items.${key}.title`)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(`services.items.${key}.description`)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
