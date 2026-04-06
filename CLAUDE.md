# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (default port 3000, may run on 3002)
npm run build    # Production build
npm run lint     # Run ESLint
```

## Architecture

**Next.js 16 App Router** LP site for "IgnAIte" (AI consulting + cognitive science coaching service).

### Scaling System (critical to understand)

`ScaleProvider` (`components/ScaleProvider.tsx`) runs on mount and handles all layout scaling:

- **Desktop**: scales `document.body` via `transform: scale(window.innerWidth / 1600)`. All sections are designed at **1600px wide**. The CSS variable `--section-height` is set to `Math.round(window.innerHeight / scale)` so sections fill exactly one viewport height.
- **Mobile** (`< 768px`): scaling is disabled, body is `width: 100%`, `--section-height` is unset.

All desktop sections must use `width: 1600px` and `height: var(--section-height)`. Never hardcode pixel heights that assume a specific viewport.

### Mobile/Desktop Branching

Every section component uses the `useMobile` hook (`hooks/useMobile.ts`) to conditionally render separate mobile and desktop JSX trees. The mobile breakpoint is `768px`.

```tsx
const isMobile = useMobile()
if (isMobile) { return <MobileLayout /> }
return <DesktopLayout />
```

### Page Structure

`app/page.tsx` renders sections in this order:
1. `HeroSection` — video left / text right diagonal split (desktop), stacked (mobile)
2. `Section2` — pain points with 3 cards
3. `Section5` — 6-step service diagram + description text
4. `Section6` — social proof (testimonial carousel) + CTA

> Note: `Section3.tsx` and `Section4.tsx` exist in components but are **not rendered** in page.tsx.

### Styling Conventions

- All layout is done with **inline styles** (no Tailwind classes except `btn-blue`, `pulse-btn`, `gold-text` from `globals.css`)
- Gold gradient text: `background: 'linear-gradient(90deg, #E7A200, #FEE21C)'` + `-webkit-background-clip: text` + `color: transparent`
- Navy brand color: `#022769`
- Dark background: `#161c2d`
- CTA links point to `https://lin.ee/OatLRGd`
- Animations use Framer Motion `useInView` with `{ once: false, amount: 0.2 }`

### Assets

Public assets in `/public/`:
- `/public/images/` — logos, section backgrounds, testimonial screenshots (`jisseki1-4`)
- `/public/*.mp4` — hero videos (`0330-6.mp4` for desktop, `mobile-hero.mp4` for mobile)
