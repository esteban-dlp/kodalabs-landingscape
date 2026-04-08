"use client"

import { useI18n } from "@/lib/i18n"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const processKeys = ["understand", "design", "build", "improve"] as const

export function Process() {
  const { t } = useI18n()
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section id="process" className="py-24 lg:py-32 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`max-w-3xl mb-16 lg:mb-20 transition-all duration-1000 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-4">
            {t("process.label")}
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            {t("process.headline")}
          </h2>
        </div>

        {/* Process Steps */}
        <div 
          ref={stepsRef}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 transition-all duration-1000 ease-out delay-200 ${
            stepsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {processKeys.map((key, index) => (
            <div
              key={key}
              className="relative"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Connector line for desktop */}
              {index < processKeys.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-y-1/2 z-0" />
              )}
              
              <div className="relative z-10">
                {/* Step Number */}
                <div className="text-5xl lg:text-6xl font-bold text-secondary mb-4">
                  {t(`process.steps.${key}.number`)}
                </div>
                
                {/* Step Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t(`process.steps.${key}.title`)}
                </h3>
                
                {/* Step Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {t(`process.steps.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
