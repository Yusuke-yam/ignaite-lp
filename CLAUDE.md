# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This workspace contains two related projects for the **IgnAIte** service LP (landing page) — a Japanese AI coaching / consulting service:

1. **`LP(Figma)/index.html`** — Static HTML/CSS prototype, pixel-faithful to the Figma design. Used as the design reference.
2. **`ignite-lp/`** — Next.js 16.1.7 / React 19 implementation of the same LP, the production codebase.

## ignite-lp — Commands

```bash
cd ignite-lp
npm run dev      # Dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint
```

No test suite is configured.

## Architecture — ignite-lp

The entire LP is a single page (`app/page.tsx`) that renders sections in order:

```
HeroSection → Section2 → Section4 → Section3 → Section5 → Section6
```

Note: `Section4` renders before `Section3` in page order (intentional).

### Scaling Strategy

The design is fixed at **1600px wide**. `ScaleProvider` (a client component mounted in `layout.tsx`) applies a CSS `transform: scale()` to `document.body` based on `window.innerWidth / 1600`, making the page look correct at any viewport width. Every section uses inline styles with fixed pixel dimensions (no responsive CSS).

### Component Conventions

- All section components live in `ignite-lp/components/` (sibling to `app/`, not inside it)
- Every section component is `'use client'` (required for framer-motion and `useInView`)
- Sections use **inline styles only** — no Tailwind utility classes on sections. Tailwind is configured in `tailwind.config.ts` but only `globals.css` shared classes are used: `.btn-blue`, `.gold-text`, `.pulse-btn`
- Animations use **framer-motion** with `useInView` — triggered when the section enters the viewport (`once: false`, `amount: 0.2`)
- Images are served from `public/images/`; `next.config.ts` sets `images: { unoptimized: true }`, so use `<img>` tags directly (not `next/image`) to match the prototype

### Design Tokens (from globals.css / Figma)

| Token | Value |
|---|---|
| Primary blue | `#022769` |
| Dark navy | `#161c2d` |
| Deep navy | `#1a2755` |
| Purple accent | `#473bf0` |
| Gold border | `#C9922A` |
| Gold gradient | `linear-gradient(90deg, #E7A200, #FEE21C)` |
| Font | Plus Jakarta Sans (400/500/600/700/800) |

### React Compiler

`babel-plugin-react-compiler` is enabled (version `1.0.0`). Avoid manual `useMemo`/`useCallback` — the compiler handles memoization automatically.

### Static HTML Prototype

`LP(Figma)/index.html` is a self-contained file with all CSS inlined in `<style>`. It references local image assets (Japanese filenames like `セクション2画像.png`). It uses the same `scaleToFit()` JavaScript approach as `ScaleProvider`. Use this file as the visual/layout reference when updating the Next.js implementation.
