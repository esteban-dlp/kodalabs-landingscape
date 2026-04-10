"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  const { t } = useI18n()
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })

  return (
    <section id="contact" className="py-24 lg:py-32 border-t border-border">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="relative rounded-2xl border border-border bg-background p-8 lg:p-16 overflow-hidden">
          {/* Subtle gradient accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
          
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4 text-balance">
              {t("cta.headline")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              {t("cta.description")}
            </p>
            <Button asChild size="lg" className="text-base px-8 group">
              <Link href="mailto:hello@usekodalabs.com">
                {t("cta.button")}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
