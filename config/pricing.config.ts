export const pricingConfig = {
  currency: {
    usd: "USD",
    gtq: "GTQ",
  },
  exchangeRate: 7.8, // 1 USD = 7.8 GTQ
  pricesGtq: {
    // Main plans with psychological pricing (round to next hundred, subtract 1)
    plans: {
      starter: 799,      // 99 USD × 7.8 = 772 → 799 Q
      business: 1599,    // 199 USD × 7.8 = 1552 → 1599 Q
      pro: 3199,         // 399 USD × 7.8 = 3112 → 3199 Q
    },
    // Add-ons with psychological pricing (round to next ten, subtract 1)
    addons: {
      extraLanguage: 389,       // 49 USD × 7.8 = 382 → 389 Q
      menuPdf: 229,             // 29 USD × 7.8 = 226 → 229 Q
      customSection: 389,       // 49 USD × 7.8 = 382 → 389 Q
      seoOptimization: 619,     // 79 USD × 7.8 = 616 → 619 Q
      analyticsSetup: 389,      // 49 USD × 7.8 = 382 → 389 Q
    },
  },
  plans: [
    {
      id: "starter",
      price: 99,
      popular: false,
    },
    {
      id: "business",
      price: 199,
      popular: true,
    },
    {
      id: "pro",
      price: 399,
      popular: false,
    },
  ],
  addons: [
    { id: "extraLanguage", price: 49 },
    { id: "menuPdf", price: 29 },
    { id: "customSection", price: 49 },
    { id: "seoOptimization", price: 79 },
    { id: "analyticsSetup", price: 49 },
  ],
} as const

export type PricingConfig = typeof pricingConfig
export type PlanId = (typeof pricingConfig.plans)[number]["id"]
export type AddonId = (typeof pricingConfig.addons)[number]["id"]
export type Currency = keyof typeof pricingConfig.currency
