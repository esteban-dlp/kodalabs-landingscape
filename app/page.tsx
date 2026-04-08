import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { WhatWeDo } from "@/components/sections/what-we-do"
import { Services } from "@/components/sections/services"
import { WhyKodaLabs } from "@/components/sections/why-koda-labs"
import { Process } from "@/components/sections/process"
import { Vision } from "@/components/sections/vision"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <Services />
        <WhyKodaLabs />
        <Process />
        <Vision />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
