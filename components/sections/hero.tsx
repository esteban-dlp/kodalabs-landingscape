"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { HeroDashboardMockup } from "@/components/ui/product-visuals"
import { ArrowRight, Zap, Smartphone, Search, Globe } from "lucide-react"

export function Hero() {
  const { t } = useI18n()
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const finePointer = window.matchMedia("(pointer: fine)").matches
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!finePointer || reduced) return

    let frame = 0
    let pendingX = 50
    let pendingY = 30

    const apply = () => {
      frame = 0
      el.style.setProperty("--mx", `${pendingX}%`)
      el.style.setProperty("--my", `${pendingY}%`)
    }

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      pendingX = ((e.clientX - rect.left) / rect.width) * 100
      pendingY = ((e.clientY - rect.top) / rect.height) * 100
      if (!frame) frame = requestAnimationFrame(apply)
    }
    const onLeave = () => {
      pendingX = 50
      pendingY = 30
      if (!frame) frame = requestAnimationFrame(apply)
    }

    el.addEventListener("pointermove", onMove)
    el.addEventListener("pointerleave", onLeave)
    return () => {
      el.removeEventListener("pointermove", onMove)
      el.removeEventListener("pointerleave", onLeave)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])
  const eyebrow = useScrollAnimation<HTMLDivElement>({ threshold: 0.2, delay: 0 })
  const headline = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2, delay: 100 })
  const description = useScrollAnimation<HTMLParagraphElement>({ threshold: 0.2, delay: 220 })
  const ctas = useScrollAnimation<HTMLDivElement>({ threshold: 0.2, delay: 320 })
  const trust = useScrollAnimation<HTMLDivElement>({ threshold: 0.2, delay: 420 })
  const mockup = useScrollAnimation<HTMLDivElement>({ threshold: 0.1, delay: 260 })

  const trustItems = [
    { icon: Zap, key: "speed" },
    { icon: Smartphone, key: "mobile" },
    { icon: Search, key: "seo" },
    { icon: Globe, key: "region" },
  ] as const

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-28 lg:pt-32 pb-20 lg:pb-28 overflow-hidden"
    >
      {/* Soft dotted background */}
      <div className="absolute inset-0 bg-dots opacity-60 [mask-image:radial-gradient(ellipse_at_top,black_40%,transparent_75%)] hero-dots-parallax" />

      {/* Cursor-following ambient light */}
      <div aria-hidden className="absolute inset-0 hero-cursor-glow pointer-events-none" />

      {/* Single accent orb behind mockup */}
      <div className="absolute top-1/3 right-[-10%] w-[40rem] h-[40rem] bg-accent/10 rounded-full blur-3xl hero-orb-parallax" />

      {/* Soft fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left column - editorial text */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Status pill */}
            <div
              ref={eyebrow.ref}
              className={`inline-flex items-center gap-2.5 pl-2 pr-3.5 py-1.5 rounded-full border border-border bg-card/70 backdrop-blur-sm transition-all duration-700 ease-out ${
                eyebrow.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              <span className="relative flex items-center justify-center w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500/60 animate-[ping-soft_1.8s_ease-out_infinite]" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-foreground">{t("hero.status")}</span>
              <span className="w-px h-3 bg-border" />
              <span className="text-xs uppercase tracking-widest text-muted-foreground">{t("hero.tagline")}</span>
            </div>

            {/* Headline */}
            <h1
              ref={headline.ref}
              className={`mt-8 text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-bold tracking-tight text-foreground leading-[1.02] text-balance transition-all duration-1000 ease-out ${
                headline.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {t("hero.headline")}{" "}
              <span className="font-serif italic font-normal text-accent">
                {t("hero.headlineAccent")}
              </span>
              <span className="text-accent">.</span>
            </h1>

            {/* Description */}
            <p
              ref={description.ref}
              className={`mt-6 lg:mt-8 max-w-xl text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty transition-all duration-1000 ease-out ${
                description.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {t("hero.description")}
            </p>

            {/* CTAs */}
            <div
              ref={ctas.ref}
              className={`mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 transition-all duration-1000 ease-out ${
                ctas.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Button
                asChild
                size="lg"
                className="text-base px-8 h-12 group bg-accent hover:bg-accent/90 text-background shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/40 hover:-translate-y-0.5 transition-all"
              >
                <Link href="#pricing">
                  {t("hero.cta")}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Link
                href="#process"
                className="group inline-flex items-center gap-2 text-base font-medium text-foreground"
              >
                <span className="relative">
                  {t("hero.secondaryCta")}
                  <span className="absolute left-0 -bottom-0.5 h-px w-full bg-foreground/30 group-hover:bg-foreground transition-colors" />
                </span>
                <ArrowRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            </div>

            {/* Trust strip */}
            <div
              ref={trust.ref}
              className={`mt-12 lg:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4 max-w-xl transition-all duration-1000 ease-out ${
                trust.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {trustItems.map(({ icon: Icon, key }) => (
                <div key={key} className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-accent flex-shrink-0" strokeWidth={2.2} />
                  <span className="text-xs sm:text-sm text-muted-foreground leading-tight">
                    {t(`hero.trust.${key}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - mockup */}
          <div
            ref={mockup.ref}
            className={`lg:col-span-5 xl:col-span-5 relative transition-all duration-1000 ease-out ${
              mockup.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <HeroDashboardMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
