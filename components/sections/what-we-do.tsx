"use client"

import { useI18n } from "@/lib/i18n"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function WhatWeDo() {
  const { t } = useI18n()
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })
  const stat = useScrollAnimation<HTMLDivElement>({ threshold: 0.3, delay: 200 })

  return (
    <section id="what-we-do" className="py-28 lg:py-36">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left - headline + description (8 cols) */}
          <div className="lg:col-span-8 relative lg:pr-10">
            <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-5">
              <span className="inline-block w-6 h-px bg-accent align-middle mr-3" />
              {t("whatWeDo.label")}
            </p>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.05] text-balance">
              {t("whatWeDo.headlineLead")}{" "}
              <span className="font-serif italic font-normal text-accent">
                {t("whatWeDo.headlineAccent")}
              </span>
            </h2>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed text-pretty">
              {t("whatWeDo.description")}
            </p>

            {/* Vertical accent divider - lg+ only */}
            <div className="hidden lg:block absolute right-0 top-4 bottom-4 w-px bg-border">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent" />
            </div>
          </div>

          {/* Right - oversized numeric statement (4 cols) */}
          <div
            ref={stat.ref}
            className={`lg:col-span-4 lg:pl-4 transition-all duration-1000 ease-out ${
              stat.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="relative">
              <div className="font-serif italic text-foreground text-[8rem] lg:text-[10rem] leading-none tracking-tight tabular">
                {t("whatWeDo.statNumber")}
              </div>
              <div className="mt-4 pl-1">
                <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-2">
                  {t("whatWeDo.statLabel")}
                </p>
                <p className="text-base text-muted-foreground leading-relaxed max-w-xs text-pretty">
                  {t("whatWeDo.statCaption")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
