export const siteConfig = {
  name: "Koda Labs",
  tagline: "Launch your business landing page in hours, not weeks.",
  description: "Modern landing pages designed to convert visitors into clients.",
  url: "https://www.usekodalabs.com",
  email: "hello@usekodalabs.com",
  social: {
    linkedin: "https://linkedin.com/company/kodalabs",
    twitter: "https://twitter.com/kodalabs",
    instagram: "https://instagram.com/kodalabs",
  },
  nav: ["perfectFor", "process", "pricing", "contact"] as const,
} as const

export type SiteConfig = typeof siteConfig
