# CLAUDE.md
Read CLAUDE.md and the project skills before making any changes.
This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Token Efficient Rules

1. Think before acting. Read existing files before writing code.
2. Be concise in output but thorough in reasoning.
3. Prefer editing over rewriting whole files.
4. Do not re-read files you have already read unless the file may have changed.
5. Test your code before declaring done.
6. No sycophantic openers or closing fluff.
7. Keep solutions simple and direct.
8. User instructions always override this file.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production (static export)
npm run start    # Start production server
npm run lint     # Run ESLint
```

The project builds to a **static export** (`output: "export"` in `next.config.mjs`), so it generates pure HTML/CSS/JS with no server-side rendering. TypeScript build errors are suppressed (`ignoreBuildErrors: true`) — lint manually for type issues.

## Architecture

**Single-page marketing site** for Koda Labs — a landing page service for local businesses.

### Page Structure

`app/page.tsx` composes the page from sequential section components:
```
Header → Hero → WhatWeDo → PerfectFor → Process → Pricing → AddOns → FAQ → CTA → Footer
```

All sections live in `components/sections/`. They are client components (`"use client"`) that consume the i18n context.

### Configuration (`config/`)

Three typed config files drive content and behavior:
- `site.config.ts` — site metadata, URL, social links, nav items
- `pricing.config.ts` — plan/add-on IDs, USD prices, GTQ exchange rate and psychological pricing
- `theme.config.ts` — color palette and font families

Pricing sections read from `pricingConfig` and translate IDs to display text via i18n keys. Currency toggle (USD ↔ GTQ) is handled inside the Pricing section component.

### Internationalization (`lib/i18n.tsx`)

Custom React context with no external library. `I18nProvider` wraps the app in `layout.tsx`. Components consume it via `useI18n()`:
- `t(key)` — dot-notation lookup returning a string
- `tArray(key)` — dot-notation lookup returning a string array

Translation files are in `locales/en.json` and `locales/es.json`. When adding copy, always add the key to **both** locale files.

### Animations

`hooks/use-scroll-animation.ts` — wraps `IntersectionObserver` to return `{ ref, isVisible }`. Sections attach `ref` to their container and toggle Tailwind opacity/translate classes based on `isVisible`. Triggers once by default.

### UI Components (`components/ui/`)

Shadcn/ui components with Radix UI primitives and Tailwind. Do not edit these unless necessary — they are standard shadcn scaffolding. Custom visuals (dashboard mockup) live in `components/ui/product-visuals.tsx`.

### Styling

Tailwind CSS v4 with CSS variables for theming. Global CSS is in `app/globals.css` and `styles/globals.css`. Fonts: Inter (`--font-inter`) and Playfair Display (`--font-playfair`), loaded via `next/font/google` in `layout.tsx`.
