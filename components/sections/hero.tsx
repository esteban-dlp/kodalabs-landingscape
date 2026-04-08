"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const { t } = useI18n()
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 lg:pt-24 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div 
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 text-center transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Tagline */}
        <p className="text-sm lg:text-base font-medium tracking-widest text-muted-foreground uppercase mb-6 lg:mb-8">
          {t("hero.tagline")}
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 lg:mb-8 text-balance">
          {t("hero.headline")}
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10 lg:mb-12 text-pretty">
          {t("hero.description")}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="text-base px-8 group">
            <Link href="#contact">
              {t("hero.cta")}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base px-8">
            <Link href="#services">
              {t("hero.secondaryCta")}
            </Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-muted-foreground to-transparent" />
      </div>
    </section>
  )
}
