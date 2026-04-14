"use client"

import { useI18n } from "@/lib/i18n"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  UtensilsCrossed,
  Coffee,
  Scissors,
  Wrench,
  User,
  Building2,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Item = {
  key: "restaurants" | "cafes" | "barbershops" | "localServices" | "personalBrands" | "smallBusinesses"
  icon: LucideIcon
  span: "wide" | "narrow"
}

const items: Item[] = [
  { key: "restaurants", icon: UtensilsCrossed, span: "wide" },
  { key: "cafes", icon: Coffee, span: "narrow" },
  { key: "barbershops", icon: Scissors, span: "narrow" },
  { key: "localServices", icon: Wrench, span: "narrow" },
  { key: "personalBrands", icon: User, span: "narrow" },
  { key: "smallBusinesses", icon: Building2, span: "wide" },
]

export function PerfectFor() {
  const { t } = useI18n()
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section id="perfect-for" className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header - two columns */}
        <div
          ref={headerRef}
          className={`grid lg:grid-cols-12 gap-8 mb-14 lg:mb-20 transition-all duration-1000 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="lg:col-span-5">
            <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-5">
              <span className="inline-block w-6 h-px bg-accent align-middle mr-3" />
              {t("perfectFor.label")}
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.08] text-balance">
              {t("perfectFor.headline")}
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              {t("perfectFor.description")}
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 transition-all duration-1000 ease-out delay-200 ${
            gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {items.map(({ key, icon: Icon, span }, index) => (
            <div
              key={key}
              style={{ transitionDelay: `${index * 80}ms` }}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-7 lg:p-8 min-h-[14rem] lg:min-h-[16rem] transition-all duration-500 hover:border-accent/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 ${
                span === "wide" ? "lg:col-span-2" : "lg:col-span-1"
              }`}
            >
              {/* Background icon flourish */}
              <Icon
                aria-hidden
                strokeWidth={1.25}
                className={`absolute text-accent/[0.06] group-hover:text-accent/[0.11] transition-all duration-500 ${
                  span === "wide"
                    ? "-right-4 -bottom-6 w-52 h-52 lg:w-64 lg:h-64 group-hover:-rotate-3"
                    : "-right-6 -bottom-6 w-40 h-40 group-hover:-rotate-2"
                }`}
              />

              {/* Small index numeral */}
              <span className="absolute top-5 right-6 text-[10px] font-mono text-muted-foreground/50 tabular">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <div className="inline-flex w-9 h-9 rounded-lg border border-border items-center justify-center mb-5 group-hover:border-accent/40 group-hover:bg-accent/5 transition-colors">
                    <Icon className="w-4 h-4 text-foreground/80" strokeWidth={2} />
                  </div>
                </div>
                <div className="mt-auto">
                  <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-2 tracking-tight">
                    {t(`perfectFor.items.${key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                    {t(`perfectFor.items.${key}.description`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
