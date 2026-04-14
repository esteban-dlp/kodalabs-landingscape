"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import { pricingConfig, type Currency } from "@/config/pricing.config"
import { Check, ArrowRight, Sparkles } from "lucide-react"

export function Pricing() {
  const { t, tArray } = useI18n()
  const [currency, setCurrency] = useState<Currency>("usd")
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  useEffect(() => {
    const saved = localStorage.getItem("koda-currency") as Currency | null
    if (saved && (saved === "usd" || saved === "gtq")) {
      setCurrency(saved)
    }
  }, [])

  const handleCurrencyChange = (newCurrency: Currency) => {
    setCurrency(newCurrency)
    localStorage.setItem("koda-currency", newCurrency)
  }

  const formatPrice = (priceUsd: number, planId?: string) => {
    if (currency === "gtq") {
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
    <section id="pricing" className="py-28 lg:py-36 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 lg:mb-20 transition-all duration-1000 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-5">
              <span className="inline-block w-6 h-px bg-accent align-middle mr-3" />
              {t("pricing.label")}
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.08] text-balance mb-5">
              {t("pricing.headline")}
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              {t("pricing.description")}
            </p>
          </div>

          {/* Currency Toggle - floating pill */}
          <div className="inline-flex items-center gap-1 p-1 bg-card rounded-full border border-border shadow-sm self-start lg:self-end">
            <button
              onClick={() => handleCurrencyChange("usd")}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${
                currency === "usd"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              USD
            </button>
            <button
              onClick={() => handleCurrencyChange("gtq")}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${
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
          className={`grid md:grid-cols-3 gap-4 lg:gap-5 transition-all duration-1000 ease-out delay-200 ${
            cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {pricingConfig.plans.map((plan, index) => {
            const isPopular = plan.popular
            const features = tArray(`pricing.plans.${plan.id}.features`)
            return (
              <div
                key={plan.id}
                style={{ transitionDelay: `${index * 120}ms` }}
                className={`relative flex flex-col rounded-2xl p-7 lg:p-8 transition-all duration-300 ${
                  isPopular
                    ? "bg-foreground text-background lg:-my-4 lg:py-12 shadow-2xl shadow-foreground/20 ring-1 ring-accent/40"
                    : "bg-card border border-border hover:border-foreground/20"
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 bg-accent text-background text-[11px] font-semibold rounded-full shadow-lg shadow-accent/30 uppercase tracking-wider">
                    <Sparkles className="w-3 h-3" />
                    {t("pricing.plans.business.popular")}
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className={`text-xl font-semibold mb-2 tracking-tight ${isPopular ? "text-background" : "text-foreground"}`}>
                    {t(`pricing.plans.${plan.id}.name`)}
                  </h3>
                  <p className={`text-sm ${isPopular ? "text-background/70" : "text-muted-foreground"}`}>
                    {t(`pricing.plans.${plan.id}.description`)}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8 pb-8 border-b border-dashed"
                  style={{ borderColor: isPopular ? "rgba(255,255,255,0.15)" : undefined }}
                >
                  <div className="flex items-baseline gap-2">
                    <span className={`text-5xl lg:text-6xl font-bold tracking-tight tabular ${isPopular ? "text-background" : "text-foreground"}`}>
                      {formatPrice(plan.price, plan.id)}
                    </span>
                    <span className={`text-sm ${isPopular ? "text-background/60" : "text-muted-foreground"}`}>
                      {t("pricing.perPage")}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {features.map((feature, featureIndex) => {
                    const isFirst = featureIndex === 0
                    return (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check
                          className={`w-4 h-4 mt-1 flex-shrink-0 ${
                            isPopular ? "text-accent" : "text-accent"
                          }`}
                          strokeWidth={2.5}
                        />
                        <span
                          className={`text-sm leading-relaxed ${
                            isFirst
                              ? isPopular
                                ? "text-background font-semibold"
                                : "text-foreground font-semibold"
                              : isPopular
                              ? "text-background/80"
                              : "text-muted-foreground"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    )
                  })}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  className={`w-full group transition-all ${
                    isPopular
                      ? "bg-accent hover:bg-accent/90 text-background shadow-lg shadow-accent/20"
                      : "bg-foreground hover:bg-foreground/90 text-background"
                  }`}
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
