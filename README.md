# Diren Kumaratilleke — Portfolio

**Four paradigms. Four fields. Nineteen years old. Solo. One calendar year.**

- **BTUT** — *a new substrate for complex multi-agent systems* (traffic,
  grids, drones, logistics, markets — the class civilization cannot run
  without). Also: a new approach to DARPA Mathematical Challenge 13.
- **TCD-JEPA (Crystara)** — *a new AI training paradigm past transformers.*
  Grow the predictor at runtime via topological crystallization instead of
  scaling a fixed attention architecture.
- **Regenerationism** — *a new economic philosophy.* NIV is its first
  operational instrument; the Fed yield curve is the first benchmark it
  beats.
- **Participatory Data Estate** — *a new framework for digital data
  governance.* SGUNCCH is the first live deployment.

> **Live site:** [diren.vercel.app](https://diren.vercel.app)
>
> The tape is the argument. Every paradigm below has a repository, a tear
> sheet, or a full paper directly linked.

[![Open-graph preview for the portfolio](https://diren.vercel.app/opengraph-image)](https://diren.vercel.app)

## The four paradigms

| Paradigm                       | Field                                | Live sites                                                                                                                               | Repositories                                                                                                                                                                   | Tear sheet / paper                                                                           |
| ------------------------------ | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| **BTUT**                       | Complex multi-agent systems          | [btut.ai](https://btut.ai) · [franklinstreetdata.com](https://www.franklinstreetdata.com) · [bigdunc.com](https://www.bigdunc.com)       | [direncode/btut](https://github.com/direncode/btut) · [framklnstdata](https://github.com/direncode/framklnstdata) · [game-model](https://github.com/direncode/game-model)      | [Tear sheet (PDF)](./public/BTUT_Tear_Sheet.pdf)                                             |
| **TCD-JEPA (Crystara)**        | Post-transformer AI training         | —                                                                                                                                        | [direncode/tcd-jepa](https://github.com/direncode/tcd-jepa)                                                                                                                    | —                                                                                            |
| **Regenerationism (NIV)**      | New school of economics              | [regenerationism.ai](https://regenerationism.ai)                                                                                         | [direncode/regenerationism](https://github.com/direncode/regenerationism)                                                                                                      | [Tear sheet (PDF)](./public/NIV_TearSheet.pdf) · [Paper (PDF)](./public/NIV_Paper.pdf)       |
| **Participatory Data Estate**  | Digital data governance              | —                                                                                                                                        | [direncode/sguncch](https://github.com/direncode/sguncch) *(SGUNCCH — first live deployment)*                                                                                  | —                                                                                            |

## Headlines, stated at paradigm scale

- **BTUT — a new coordination substrate for complex multi-agent systems.**
  The dominant PDE-on-density approach crashes before 10,000 agents. BTUT
  replaces it with a phase transition on a scale-free network under
  Fermi-rule updates, β ≈ 0.5 (mean-field universality), constant
  12-iteration convergence from 500 to 10,000 agents. **Six live applied
  domains:** Eclipse SUMO traffic (800 vehicles, zero gridlock), ROS robot
  fleets, 50 – 200 drone swarms (100% cooperation), civic data
  ([franklinstreetdata.com](https://www.franklinstreetdata.com)), game
  modeling ([bigdunc.com](https://www.bigdunc.com)), and four production
  cloud surfaces. Also a new approach to DARPA Mathematical Challenge 13.
- **TCD-JEPA (Crystara) — a new AI training paradigm past transformers.**
  Instead of scaling a fixed attention architecture, grow the architecture:
  Fisher-information Langevin exploration, Vietoris–Rips persistent
  homology on the trajectories, typed H₀/H₁/H₂ predictor modules
  crystallized at runtime. The first runtime-discovered predictor
  architecture for the JEPA family. Beats vanilla JEPA everywhere tested:
  **+36.6 AUC** on Georgetown CSET semiconductor (519 entities) — also
  beats supervised GAT (DeepMind), GCN (Google Brain), GraphSAGE. +22.1 on
  GDELT. +20.0 at 9,725-entity SEC EDGAR scale where GAT OOMs. 16 modules
  1-to-1 with real industry clusters — no labels, no prompting.
- **Regenerationism — a new economic philosophy; NIV is its first
  operational instrument.** The school's claim: the leading indicator of
  macroeconomic regime health is the velocity of capital formation with
  compounding margins, measured against cumulative friction — not
  bond-market sentiment, not linear averages of coincident series, not
  equilibrium-return dynamics. NIV writes the school as a scalar.
  Ensemble ROC-AUC **0.8538** at 18 months across 504 months (1970 – 2024),
  six OOS validation tests, 98.5% false-alarm suppression, **41.71%**
  orthogonal variance beyond the Fed 10Y – 3M spread. Under Gini importance
  the regenerative-capital term scores **0.9328**; the yield spread scores
  0.0298 — the model picked the school unprompted. The repository is named
  [`regenerationism`](https://github.com/direncode/regenerationism) for a
  reason — the school precedes the signal.
- **Participatory Data Estate — a new framework for digital data
  governance.** Dominant data-governance stacks treat ingestion as batched,
  moderation as private, and audit trails as compliance tax. The
  Participatory Data Estate inverts all three: continuous ingestion
  (Submit → Moderate → Thin → Crystallize), moderation as a public
  transition (publicly-readable approval ledger via RLS), hybrid pgvector
  + GIN FTS retrieval, federal-hardening controls (time-constant auth,
  RLS on every table, rate limiting on 4 action classes, CSP/HSTS, XSS
  detection). **SGUNCCH** is the first live deployment — a full UNC
  student-government stack running the framework end-to-end. A security
  posture student government has never needed, and has never had.

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
