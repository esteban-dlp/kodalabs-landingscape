# CLAUDE.md
Read this CLAUDE.md and any relevant local project skills before making changes.
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

## Installed Skills

This repository includes local Claude skills inside `.claude/skills/`.
Before making design or layout changes, check relevant installed skills and use them when helpful.

Currently installed skill:
- UI/UX Pro Max Design

## Skill Usage Rules

Use UI/UX Pro Max Design when working on:
- landing page layout improvements
- visual hierarchy
- spacing and section rhythm
- typography pairing and scale
- CTA clarity and placement
- responsive polish
- premium visual refinement
- conversion-focused UI improvements

Do not use the skill to:
- overwrite the business positioning
- change the offer structure without reason
- introduce trendy but unnecessary visual effects
- make the site feel generic, overdesigned, or template-like
- add complexity that hurts clarity or performance

## Priority Order

When making decisions, follow this order:
1. Explicit user instructions
2. This CLAUDE.md
3. Existing codebase patterns
4. Installed skills recommendations

Skills should support the project, not override it.

## Design Direction

Koda Labs should feel:
- modern
- premium
- clear
- structured
- conversion-focused
- trustworthy

Avoid making it feel:
- too startup-generic
- too futuristic
- overly artistic
- crowded
- flashy
- filled with unnecessary gradients, effects, or motion

## Landing Page Standards

When editing sections of the landing page:
- preserve strong readability
- prioritize clear CTA flow
- keep copy easy to scan
- maintain consistent spacing between sections
- avoid oversized blocks with weak hierarchy
- keep mobile experience as important as desktop
- prefer subtle polish over dramatic redesigns

## Visual Rules

- Use neutral tones first
- Accent colors should be minimal and intentional
- Keep shadows subtle
- Use rounded corners consistently, not excessively
- Maintain a clean and balanced layout
- Animations should support hierarchy, never distract
- Every section should feel purposeful, not decorative

## Implementation Rules for Design Changes

When applying design improvements:
- prefer small targeted edits over full rewrites
- preserve reusable structure
- avoid unnecessary dependencies
- do not break i18n
- do not hardcode copy that belongs in locale files
- keep performance in mind, especially for static export