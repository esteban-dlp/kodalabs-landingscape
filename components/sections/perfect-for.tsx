"use client"

import { useI18n } from "@/lib/i18n"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { 
  UtensilsCrossed, 
  Coffee, 
  Scissors, 
  Wrench, 
  User, 
  Building2 
} from "lucide-react"

const perfectForKeys = [
  "restaurants",
  "cafes", 
  "barbershops",
  "localServices",
  "personalBrands",
  "smallBusinesses"
] as const

const icons = {
  restaurants: UtensilsCrossed,
  cafes: Coffee,
  barbershops: Scissors,
  localServices: Wrench,
  personalBrands: User,
  smallBusinesses: Building2,
}

export function PerfectFor() {
  const { t } = useI18n()
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section id="perfect-for" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`max-w-3xl mb-16 lg:mb-20 transition-all duration-1000 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-4">
            {t("perfectFor.label")}
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
            {t("perfectFor.headline")}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t("perfectFor.description")}
          </p>
        </div>

        {/* Grid */}
        <div 
          ref={gridRef}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ease-out delay-200 ${
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {perfectForKeys.map((key, index) => {
            const Icon = icons[key]
            return (
              <div
                key={key}
                className="group p-6 lg:p-8 rounded-xl border border-border bg-card hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors group-hover:scale-110">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {t(`perfectFor.items.${key}.title`)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(`perfectFor.items.${key}.description`)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
