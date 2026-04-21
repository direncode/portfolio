# Diren Kumaratilleke — Portfolio

**Nineteen years old. Solo. One calendar year. Four live primitives across
four subfields.** A new approach to DARPA Mathematical Challenge 13
(coordination — **BTUT**). A runtime-discovered predictor architecture that
beats JEPA and supervised GNNs (structure — **Crystara**). A macro-stress
scalar that beats the Fed yield curve with 41.71% orthogonal variance
(signal — **NIV**). A participatory data estate federally hardened in
production (ingestion — **SGUNCCH**).

> **Live site:** [diren.vercel.app](https://diren.vercel.app)
>
> The tape is the argument. Every claim below has a repository, a tear
> sheet, or a full paper directly linked.

[![Open-graph preview for the portfolio](https://diren.vercel.app/opengraph-image)](https://diren.vercel.app)

## The four primitives

| Primitive    | Role          | Live site                                            | Repository                                                                  | Tear sheet / paper                                                          |
| ------------ | ------------- | ---------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **BTUT**     | Coordination  | [btut.ai](https://btut.ai)                           | [direncode/btut](https://github.com/direncode/btut)                         | [Tear sheet (PDF)](./public/BTUT_Tear_Sheet.pdf)                            |
| **Crystara** | Structure     | —                                                    | [direncode/tcd-jepa](https://github.com/direncode/tcd-jepa)                 | —                                                                           |
| **NIV**      | Signal        | [regenerationism.ai](https://regenerationism.ai)     | [direncode/regenerationism](https://github.com/direncode/regenerationism)   | [Tear sheet (PDF)](./public/NIV_TearSheet.pdf) · [Paper (PDF)](./public/NIV_Paper.pdf) |
| **SGUNCCH**  | Ingestion (PDE) | —                                                  | [direncode/sguncch](https://github.com/direncode/sguncch)                   | —                                                                           |

## Headlines, stated at evidence density

- **BTUT** — a new approach to DARPA Mathematical Challenge 13. Cross-domain
  comprehensive: one primitive shipped across Eclipse SUMO traffic, ROS robot
  fleets, 50 – 200 drone swarms, Python SDK, REST, Lambda, WASM. 800-vehicle
  SUMO peak stress, zero gridlock. β ≈ 0.5 (mean-field). Constant 12-iteration
  convergence from 500 to 10,000 agents.
- **Crystara** — beats vanilla JEPA everywhere tested. +36.6 AUC pts on a
  519-entity Georgetown CSET semiconductor supply chain; also beats supervised
  GAT (DeepMind), GCN (Google Brain), GraphSAGE. +22.1 pts on GDELT. +20.0 pts
  at 9,725-entity SEC EDGAR scale where GAT runs out of memory. 16 modules
  discovered 1-to-1 with real industry clusters — no labels, no prompting.
- **NIV** — beats the Fed yield curve on several recession benchmarks.
  Ensemble ROC-AUC **0.8538** at 18 months across 504 months (1970–2024), six
  OOS validation tests, 98.5% false-alarm suppression, **41.71%** orthogonal
  variance beyond the Fed 10Y – 3M spread. Every weight published; every input
  from FRED.
- **PDE (SGUNCCH)** — a security posture student government has never
  needed, and has never had. Time-constant auth, RLS on every Supabase
  table, rate limiting by action class, public approval ledger. Submit →
  Moderate → Thin → Crystallize. No FedRAMP claim attached; the repository
  is open. Produce the counter-example.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with a custom `prose-essay` typography layer
- **React 18** client components only where navigation state is needed
- **next/og** for dynamic OpenGraph image generation
- Zero external runtime services — pure static pages, Vercel-ready

## Structure

```
app/
  layout.tsx                       Root layout, fonts, metadata
  opengraph-image.tsx              Dynamic OG image (1200×630)
  globals.css                      Tailwind + essay typography + diagram animations
  page.tsx                         Hero, sources grid, convergence diagram, TOC, preview grid
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
  SourceBar.tsx                    Per-chapter link strip (live site, repo, PDFs)
  ConvergenceDiagram.tsx           Animated SVG of the four-primitive convergence
  PrimitiveCard.tsx
public/
  BTUT_Tear_Sheet.pdf
  NIV_TearSheet.pdf
  NIV_Paper.pdf
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

The site is fully dynamic per-route, but every page is statically renderable;
the only edge-runtime surface is `opengraph-image.tsx`, which generates the
social-share PNG on demand.

## Editorial policy

Every quantitative claim on the site is drawn from one of the four
open-source repositories or the two PDFs in `public/`:

- `direncode/btut` — coordination
- `direncode/tcd-jepa` — Crystara (structure)
- `direncode/regenerationism` — NIV (signal)
- `direncode/sguncch` — Participatory Data Estate (ingestion)

Where a specific number was not found in the source repository, the claim
is either omitted or softened with explicit language (e.g. "41.71%
orthogonal variance" is the verified figure from the NIV paper's Test 6
forensic audit, not a rounded marketing number).
