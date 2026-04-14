import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { WhatWeDo } from "@/components/sections/what-we-do"
import { PerfectFor } from "@/components/sections/perfect-for"
import { Credibility } from "@/components/sections/credibility"
import { Process } from "@/components/sections/process"
import { Pricing } from "@/components/sections/pricing"
import { AddOns } from "@/components/sections/add-ons"
import { FAQ } from "@/components/sections/faq"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"
import { SectionDivider } from "@/components/ui/section-divider"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionDivider />
        <WhatWeDo />
        <SectionDivider />
        <PerfectFor />
        <SectionDivider />
        <Credibility />
        <SectionDivider />
        <Process />
        <SectionDivider />
        <Pricing />
        <SectionDivider />
        <AddOns />
        <SectionDivider />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
