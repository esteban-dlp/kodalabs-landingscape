"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import en from "@/locales/en.json"
import es from "@/locales/es.json"

type Locale = "en" | "es"

const translations = { en, es } as const

type TranslationValue = string | { [key: string]: TranslationValue }

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")

  const t = useCallback(
    (key: string): string => {
      const keys = key.split(".")
      let value: TranslationValue = translations[locale]

      for (const k of keys) {
        if (typeof value === "object" && value !== null && k in value) {
          value = value[k as keyof typeof value]
        } else {
          return key
        }
      }

      return typeof value === "string" ? value : key
    },
    [locale]
  )

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
