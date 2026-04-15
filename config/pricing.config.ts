export const pricingConfig = {
  currency: {
    usd: "USD",
    gtq: "GTQ",
  },
  exchangeRate: 7.8, // 1 USD = 7.8 GTQ
  pricesGtq: {
    // Main plans with psychological pricing
    plans: {
      starter: 1199,    // 149 USD × 7.8 = 1162.2 → 1199 Q
      business: 2399,   // 299 USD × 7.8 = 2332.2 → 2399 Q
      pro: 4799,        // 599 USD × 7.8 = 4672.2 → 4799 Q
    },
    // Add-ons with psychological pricing
    addons: {
      extraLanguage: 389,       // 49 USD × 7.8 = 382.2 → 389 Q
      menuPdf: 229,             // 29 USD × 7.8 = 226.2 → 229 Q
      customSection: 389,       // 49 USD × 7.8 = 382.2 → 389 Q
      seoOptimization: 619,     // 79 USD × 7.8 = 616.2 → 619 Q
      analyticsSetup: 389,      // 49 USD × 7.8 = 382.2 → 389 Q
    },
  },
  plans: [
    {
      id: "starter",
      price: 149,
      popular: false,
    },
    {
      id: "business",
      price: 299,
      popular: true,
    },
    {
      id: "pro",
      price: 599,
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