# Diren Kumaratilleke — Portfolio

A chapter-serial manifesto site for four converging horizontal-intelligence
primitives: **BTUT** (coordination), **Crystara** (structure), **NIV**
(signal), and the **Participatory Data Estate** (ingestion).

Built as a text-first, long-form essay site modeled after
[situational-awareness.ai](https://situational-awareness.ai) — minimalist
dark theme, clean sans-serif body (Inter), serif headings (Source Serif 4),
generous whitespace, hierarchical chapter structure.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with a custom `prose-essay` typography layer
- **React 18** client components only where navigation state is needed
- Zero external runtime services — pure static pages, Vercel-ready

## Structure

```
app/
  layout.tsx                       Root layout, fonts, metadata
  globals.css                      Tailwind + essay typography
  page.tsx                         Hero, convergence diagram, TOC, preview grid
  primitives/page.tsx              Chapter I — Four Primitives overview
  btut/page.tsx                    Chapter II — BTUT deep dive
  crystara/page.tsx                Chapter III — Crystara deep dive
  niv/page.tsx                     Chapter IV — NIV deep dive
  participatory-data-estate/       Chapter V — PDE deep dive
  convergence/page.tsx             Chapter VI — Architecture
  about/page.tsx                   Chapter VII — About / Context
  forward/page.tsx                 Chapter VIII — Forward Direction
  robots.ts / sitemap.ts           SEO
components/
  SiteNav.tsx / SiteFooter.tsx
  ChapterHeader.tsx / ChapterFooter.tsx
  Essay.tsx / Callout.tsx / StatBlock.tsx
  ConvergenceDiagram.tsx           Inline SVG of the four-primitive convergence
  PrimitiveCard.tsx
tailwind.config.ts
next.config.mjs
postcss.config.mjs
tsconfig.json
```

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run start        # serve prod build
```

## Deployment — Vercel

1. Push this repo to GitHub.
2. In Vercel, **Add New Project → Import Git Repository** and select this
   repo.
3. Framework preset will auto-detect as **Next.js**. Root directory: repo
   root. Build command: `next build`. Output: default.
4. No environment variables are required.
5. Click **Deploy**. First build takes ~1 minute.
6. Assign a custom domain under **Project → Settings → Domains** if desired.

The site is fully static per-route; there is no server runtime dependency.

## Editorial policy

Every quantitative claim on the site is drawn from one of the four
open-source repositories:

- `direncode/btut`
- `direncode/tcd-jepa` (Crystara)
- `direncode/regenerationism` (NIV)
- `direncode/sguncch` (Participatory Data Estate)

Where a specific number was not found in the source repository, the claim
is either omitted or softened with explicit language (e.g. "~24% orthogonal
information" is the verified figure from `NIV_Final_OOS_Report.md`, not a
rounded marketing number).
