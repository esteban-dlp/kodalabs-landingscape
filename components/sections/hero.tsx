"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { HeroDashboardMockup } from "@/components/ui/product-visuals"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const { t } = useI18n()
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 lg:pt-24 overflow-hidden">
      {/* Animated accent gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Grid background - more visible */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4d4d4_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d4_1px,transparent_1px)] bg-[size:48px_48px] opacity-70" />
      
      {/* Enhanced gradient overlay with accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-60" />

      <div 
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 text-center transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Tagline with accent */}
        <div className="flex items-center justify-center gap-2 mb-6 lg:mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <p className="text-sm lg:text-base font-medium tracking-widest text-muted-foreground uppercase">
            {t("hero.tagline")}
          </p>
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
        </div>

        {/* Main Headline with accent gradient */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 lg:mb-8 text-balance">
          {t("hero.headline")}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60 mt-2">
            {t("hero.headlineAccent")}
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10 lg:mb-12 text-pretty">
          {t("hero.description")}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="text-base px-8 group bg-accent hover:bg-accent/90 text-background">
            <Link href="#pricing">
              {t("hero.cta")}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base px-8 border-accent/30 hover:border-accent hover:bg-accent/5">
            <Link href="#process">
              {t("hero.secondaryCta")}
            </Link>
          </Button>
        </div>

        {/* Product Dashboard Mockup */}
        <HeroDashboardMockup />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-foreground/50 to-transparent" />
      </div>
    </section>
  )
}
