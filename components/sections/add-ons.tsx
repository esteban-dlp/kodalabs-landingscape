"use client"

import { useState, useEffect } from "react"
import { useI18n } from "@/lib/i18n"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { pricingConfig, type Currency } from "@/config/pricing.config"

export function AddOns() {
  const { t } = useI18n()
  const [currency, setCurrency] = useState<Currency>("usd")
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })
  const { ref: listRef, isVisible: listVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  useEffect(() => {
    const checkCurrency = () => {
      const saved = localStorage.getItem("koda-currency") as Currency | null
      if (saved && (saved === "usd" || saved === "gtq")) {
        setCurrency(saved)
      }
    }
    checkCurrency()
    window.addEventListener("storage", checkCurrency)
    const interval = setInterval(checkCurrency, 500)
    return () => {
      window.removeEventListener("storage", checkCurrency)
      clearInterval(interval)
    }
  }, [])

  const formatPrice = (priceUsd: number, addonId: string) => {
    if (currency === "gtq") {
      let priceGtq: number
      if (addonId === "extraLanguage") priceGtq = pricingConfig.pricesGtq.addons.extraLanguage
      else if (addonId === "menuPdf") priceGtq = pricingConfig.pricesGtq.addons.menuPdf
      else if (addonId === "customSection") priceGtq = pricingConfig.pricesGtq.addons.customSection
      else if (addonId === "seoOptimization") priceGtq = pricingConfig.pricesGtq.addons.seoOptimization
      else if (addonId === "analyticsSetup") priceGtq = pricingConfig.pricesGtq.addons.analyticsSetup
      else priceGtq = Math.round(priceUsd * pricingConfig.exchangeRate)
      return `+Q${priceGtq.toLocaleString()}`
    }
    return `+$${priceUsd}`
  }

  return (
    <section id="addons" className="py-28 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`grid lg:grid-cols-12 gap-8 mb-14 lg:mb-20 transition-all duration-1000 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="lg:col-span-6">
            <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-5">
              <span className="inline-block w-6 h-px bg-accent align-middle mr-3" />
              {t("addons.label")}
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.08] text-balance">
              {t("addons.headline")}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              {t("addons.description")}
            </p>
          </div>
        </div>

        {/* Editorial list */}
        <div
          ref={listRef}
          className={`border-t border-border transition-all duration-1000 ease-out delay-200 ${
            listVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {pricingConfig.addons.map((addon, index) => (
            <div
              key={addon.id}
              style={{ transitionDelay: `${index * 80}ms` }}
              className="group grid grid-cols-12 gap-4 items-baseline py-6 lg:py-7 border-b border-border transition-colors hover:bg-secondary/40"
            >
              <div className="col-span-1 text-xs font-mono text-muted-foreground/60 tabular">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="col-span-11 sm:col-span-5">
                <h3 className="text-lg lg:text-xl font-semibold text-foreground tracking-tight">
                  <span className="relative inline-block">
                    {t(`addons.items.${addon.id}.title`)}
                    <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-accent group-hover:w-full transition-all duration-500" />
                  </span>
                </h3>
              </div>
              <div className="col-span-8 sm:col-span-4 text-sm text-muted-foreground leading-relaxed">
                {t(`addons.items.${addon.id}.description`)}
              </div>
              <div className="col-span-4 sm:col-span-2 text-right">
                <span className="text-base lg:text-lg font-semibold text-foreground tabular">
                  {formatPrice(addon.price, addon.id)}
                </span>
                <span className="text-xs text-muted-foreground block">{t("addons.each")}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
