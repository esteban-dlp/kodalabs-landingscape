"use client"

import { useI18n } from "@/lib/i18n"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  Zap,
  Sparkles,
  Smartphone,
  Workflow,
  MapPin,
  Target,
  Languages,
  Code2,
  Palette,
  Layers,
  Wrench,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Item = { key: string; icon: LucideIcon }

const foreground: Item[] = [
  { key: "fastDelivery", icon: Zap },
  { key: "customBuilt", icon: Sparkles },
  { key: "mobileFirst", icon: Smartphone },
  { key: "conversionFocused", icon: Target },
  { key: "bilingualReady", icon: Languages },
  { key: "polishedUi", icon: Palette },
]

const background: Item[] = [
  { key: "clearProcess", icon: Workflow },
  { key: "localFriendly", icon: MapPin },
  { key: "modernStack", icon: Code2 },
  { key: "scalableStructure", icon: Layers },
  { key: "easyMaintain", icon: Wrench },
]

const maskStyle = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
  maskImage:
    "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
}

export function Credibility() {
  const { t } = useI18n()
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section className="py-24 lg:py-28 overflow-hidden">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 lg:px-8 mb-10 lg:mb-14 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
          <span className="inline-block w-6 h-px bg-accent align-middle mr-3" />
          {t("credibility.label")}
        </p>
      </div>

      <div className="relative" style={maskStyle}>
        {/* Background row — right to left, recessed, sits above the foreground row */}
        <div
          className="flex whitespace-nowrap animate-[marquee-rtl_70s_linear_infinite] opacity-60"
          style={{ willChange: "transform" }}
          aria-hidden="true"
        >
          {[...background, ...background].map((it, i) => (
            <span
              key={`bg-${i}`}
              className="inline-flex items-center gap-3 rounded-full border border-border/60 px-6 py-3 lg:px-7 lg:py-3.5 mr-4 lg:mr-5 text-base lg:text-lg text-muted-foreground"
            >
              <it.icon className="w-5 h-5 text-accent/60 shrink-0" strokeWidth={2} />
              {t(`credibility.items.${it.key}`)}
            </span>
          ))}
        </div>

        {/* Foreground row — left to right, full contrast, clearly separated below */}
        <div
          className="flex whitespace-nowrap animate-[marquee-ltr_50s_linear_infinite] mt-7 lg:mt-9 relative z-10"
          style={{ willChange: "transform" }}
        >
          {[...foreground, ...foreground].map((it, i) => (
            <span
              key={`fg-${i}`}
              className="inline-flex items-center gap-3.5 rounded-full border border-border bg-card px-8 py-4 lg:px-9 lg:py-5 mr-5 lg:mr-6 text-lg lg:text-xl font-medium tracking-tight text-foreground shadow-sm shadow-black/[0.03]"
            >
              <it.icon className="w-6 h-6 text-accent shrink-0" strokeWidth={2} />
              {t(`credibility.items.${it.key}`)}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
