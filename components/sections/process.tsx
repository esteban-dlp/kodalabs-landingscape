"use client"

import { useI18n } from "@/lib/i18n"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const processKeys = ["understand", "design", "build", "improve"] as const

export function Process() {
  const { t } = useI18n()
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.25 })

  return (
    <section id="process" className="py-28 lg:py-36 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`grid lg:grid-cols-12 gap-8 mb-16 lg:mb-24 transition-all duration-1000 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="lg:col-span-7">
            <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-5">
              <span className="inline-block w-6 h-px bg-accent align-middle mr-3" />
              {t("process.label")}
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.08] text-balance">
              {t("process.headline")}
            </h2>
          </div>
        </div>

        {/* Process Steps with rail */}
        <div ref={stepsRef} className="relative">
          {/* Horizontal rail (desktop) */}
          <div aria-hidden className="hidden lg:block absolute left-0 right-0 top-[1.25rem] h-px bg-border" />
          <div
            aria-hidden
            className="hidden lg:block absolute left-0 top-[1.25rem] h-px bg-accent origin-left transition-transform duration-[1800ms] ease-out"
            style={{ width: "100%", transform: stepsVisible ? "scaleX(1)" : "scaleX(0)" }}
          />
          {/* Slow shimmer traveling along the rail */}
          <div
            aria-hidden
            className="hidden lg:block absolute left-0 right-0 top-[1.25rem] h-px overflow-hidden pointer-events-none"
            style={{ opacity: stepsVisible ? 1 : 0, transition: "opacity 1200ms ease-out 1400ms" }}
          >
            <div
              className="h-full w-[28%] animate-rail-shimmer"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, color-mix(in oklch, var(--accent) 70%, transparent) 50%, transparent 100%)",
              }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {processKeys.map((key, index) => (
              <div
                key={key}
                className={`relative transition-all duration-700 ease-out ${
                  stepsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
              >
                {/* Rail node */}
                <div className="hidden lg:block relative h-10 mb-2">
                  <div className="absolute top-[0.375rem] left-0 w-5 h-5 rounded-full bg-background border-2 border-accent flex items-center justify-center">
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-accent/40 animate-node-halo"
                      style={{ animationDelay: `${index * 0.8}s` }}
                    />
                    <div className="relative w-1.5 h-1.5 rounded-full bg-accent" />
                  </div>
                </div>

                {/* Step number */}
                <div
                  className="font-serif italic text-5xl lg:text-6xl text-accent/80 leading-none mb-4 tabular animate-number-breathe"
                  style={{ animationDelay: `${index * 1.2}s` }}
                >
                  {t(`process.steps.${key}.number`)}
                </div>

                {/* Title */}
                <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-3 tracking-tight">
                  {t(`process.steps.${key}.title`)}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                  {t(`process.steps.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
