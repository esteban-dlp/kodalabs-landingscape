"use client"

import { useState, useEffect } from "react"
import { useI18n } from "@/lib/i18n"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { pricingConfig, type Currency } from "@/config/pricing.config"
import { Plus } from "lucide-react"

export function AddOns() {
  const { t } = useI18n()
  const [currency, setCurrency] = useState<Currency>("usd")
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })
  const { ref: listRef, isVisible: listVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })

  // Sync with pricing section currency
  useEffect(() => {
    const checkCurrency = () => {
      const saved = localStorage.getItem("koda-currency") as Currency | null
      if (saved && (saved === "usd" || saved === "gtq")) {
        setCurrency(saved)
      }
    }
    
    checkCurrency()
    
    // Listen for storage changes
    window.addEventListener("storage", checkCurrency)
    
    // Also check periodically in case user switches on same page
    const interval = setInterval(checkCurrency, 500)
    
    return () => {
      window.removeEventListener("storage", checkCurrency)
      clearInterval(interval)
    }
  }, [])

  const formatPrice = (priceUsd: number, addonId: string) => {
    if (currency === "gtq") {
      // Use psychological pricing for GTQ
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
    <section id="addons" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`max-w-3xl mb-12 lg:mb-16 transition-all duration-1000 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-4">
            {t("addons.label")}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4 text-balance">
            {t("addons.headline")}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t("addons.description")}
          </p>
        </div>

        {/* Add-ons List */}
        <div 
          ref={listRef}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-1000 ease-out delay-200 ${
            listVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {pricingConfig.addons.map((addon, index) => (
            <div
              key={addon.id}
              className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:border-foreground/20 transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                <Plus className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground truncate">
                  {t(`addons.items.${addon.id}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground truncate">
                  {t(`addons.items.${addon.id}.description`)}
                </p>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="font-semibold text-foreground">{formatPrice(addon.price, addon.id)}</span>
                <span className="text-xs text-muted-foreground block">{t("addons.each")}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
