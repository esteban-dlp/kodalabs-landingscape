"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import { pricingConfig, type Currency } from "@/config/pricing.config"
import { Check, ArrowRight } from "lucide-react"

export function Pricing() {
  const { t, tArray } = useI18n()
  const [currency, setCurrency] = useState<Currency>("usd")
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  // Load saved currency preference
  useEffect(() => {
    const saved = localStorage.getItem("koda-currency") as Currency | null
    if (saved && (saved === "usd" || saved === "gtq")) {
      setCurrency(saved)
    }
  }, [])

  // Save currency preference
  const handleCurrencyChange = (newCurrency: Currency) => {
    setCurrency(newCurrency)
    localStorage.setItem("koda-currency", newCurrency)
  }

  const formatPrice = (priceUsd: number, planId?: string) => {
    if (currency === "gtq") {
      // Use psychological pricing for GTQ
      let priceGtq: number
      if (planId === "starter") priceGtq = pricingConfig.pricesGtq.plans.starter
      else if (planId === "business") priceGtq = pricingConfig.pricesGtq.plans.business
      else if (planId === "pro") priceGtq = pricingConfig.pricesGtq.plans.pro
      else priceGtq = Math.round(priceUsd * pricingConfig.exchangeRate)
      return `Q${priceGtq.toLocaleString()}`
    }
    return `$${priceUsd}`
  }

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`max-w-3xl mx-auto text-center mb-16 lg:mb-20 transition-all duration-1000 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-4">
            {t("pricing.label")}
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
            {t("pricing.headline")}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            {t("pricing.description")}
          </p>

          {/* Currency Toggle */}
          <div className="inline-flex items-center gap-1 p-1 bg-card rounded-lg border border-border">
            <button
              onClick={() => handleCurrencyChange("usd")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                currency === "usd"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              USD
            </button>
            <button
              onClick={() => handleCurrencyChange("gtq")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                currency === "gtq"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              GTQ
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div 
          ref={cardsRef}
          className={`grid md:grid-cols-3 gap-6 lg:gap-8 transition-all duration-1000 ease-out delay-200 ${
            cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {pricingConfig.plans.map((plan, index) => {
            const isPopular = plan.popular
            return (
              <div
                key={plan.id}
                className={`relative p-6 lg:p-8 rounded-xl border bg-card transition-all duration-300 ${
                  isPopular 
                    ? "border-accent shadow-lg shadow-accent/10 scale-[1.03] ring-1 ring-accent/20" 
                    : "border-border hover:border-border/80 hover:shadow-md hover:shadow-foreground/5"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Popular Badge with accent */}
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-accent to-accent/80 text-background text-xs font-semibold rounded-full shadow-md shadow-accent/20">
                    {t("pricing.plans.business.popular")}
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {t(`pricing.plans.${plan.id}.name`)}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t(`pricing.plans.${plan.id}.description`)}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl lg:text-5xl font-bold text-foreground">
                      {formatPrice(plan.price, plan.id)}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {t("pricing.perPage")}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tArray(`pricing.plans.${plan.id}.features`).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  asChild 
                  className={`w-full group transition-all ${isPopular ? "bg-accent hover:bg-accent/90 text-background shadow-lg shadow-accent/30" : ""}`}
                  variant={isPopular ? "default" : "outline"}
                >
                  <Link href="#contact">
                    {t("pricing.cta")}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
