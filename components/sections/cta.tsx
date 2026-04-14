"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  const { t } = useI18n()
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.25 })

  return (
    <section id="contact" className="relative py-24 lg:py-28 overflow-hidden bg-foreground text-background">
      {/* Accent orb */}
      <div aria-hidden className="absolute -top-32 left-1/2 -translate-x-1/2 w-[44rem] h-[44rem] bg-accent/20 rounded-full blur-3xl" />

      {/* Soft grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:48px_48px]"
      />

      <div
        ref={ref}
        className={`relative z-10 max-w-5xl mx-auto px-6 lg:px-8 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-background leading-[1.05] text-balance">
            {t("cta.headlineLead")}{" "}
            <span className="font-serif italic font-normal text-accent">
              {t("cta.headlineAccent")}
            </span>{" "}
            {t("cta.headlineTail")}
          </h2>
          <p className="mt-8 max-w-xl mx-auto text-lg text-background/70 leading-relaxed text-pretty">
            {t("cta.description")}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button
              asChild
              size="lg"
              className="text-base px-8 h-12 group bg-accent hover:bg-accent/90 text-background shadow-xl shadow-accent/30 hover:-translate-y-0.5 transition-all"
            >
              <Link href="mailto:hello@usekodalabs.com">
                {t("cta.button")}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <span className="inline-flex items-center gap-2 text-sm text-background/60">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400/60 animate-[ping-soft_1.8s_ease-out_infinite]" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
              </span>
              {t("cta.sideNote")}
            </span>
          </div>
        </div>

        {/* Sweeping gradient underline */}
        <div aria-hidden className="relative mt-20 lg:mt-24 h-px bg-background/10 overflow-hidden">
          <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-accent to-transparent animate-[gradient-sweep_3.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  )
}
