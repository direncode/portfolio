# Diren Kumaratilleke — direncode.com

> **I invert the primitive everyone takes as given.**

Each system below starts the same way: find the assumption its field treats
as settled — the thing so foundational nobody re-opens it — and refuse it.
Then build what follows. Five instances, one move.

| The field takes as given | Instead | System |
| --- | --- | --- |
| Recession indicators read bond sentiment | Read physical capital formation | [NIV](https://regenerationism.ai) |
| Architectures are fixed and scaled | Grow the architecture at runtime | [Crystara](https://github.com/direncode/tcd-jepa) |
| Coordination solves the coupled equation | Find the O(N) formulation | [BTUT](https://btut.ai) |
| Codd's tuple is provenance-free | Make provenance the primitive | [Latent Ocean](https://latentocean.com) |
| Setun's third state is arithmetic | Make it epistemic: refusal | [Latent Ocean](https://latentocean.com) |

> **Live site:** [direncode.com](https://direncode.com)
>
> **Start here:** [latentocean.com/spacex/off-earth](https://latentocean.com/spacex/off-earth)
> — the network-cut gate. Under a cut network the estate refuses and names
> the reason rather than degrading to a guess. Under a minute, and it shows
> the whole discipline.

[![Open-graph preview](https://direncode.com/opengraph-image)](https://direncode.com)

Nineteen. Building full time from Dubai, on a gap semester from UNC.
Roughly seven to nine months of work. Zero co-authors.

---

## What changes if this is right

Every impact claim below is printed beside the condition it has **not** yet
met. A claim that hides its bound is not a claim.

### Latent Ocean — grounding for agentic systems

**If right:** an agent can be permitted to act on enterprise and government
data, because for the first time it can prove a record is *absent* rather
than merely not retrieved — and the refusal survives to the actuator.

**Matters to:** any government converting operations to agentic AI; any
organisation whose compliance layer silently passes cases no rule covers.

**Not yet established:** no external user has run it. Five estates, all
built by me.

### NIV — macroeconomic stress signal

**If right:** central banks and allocators gain an 18-month stress signal
orthogonal to the yield curve — 41.71% of variance the spread cannot see.

**Matters to:** central banks, sovereign allocators, macro research desks.

**Not yet established:** live forward performance. Every number is
out-of-sample but historical. No real-time track record exists yet.

### BTUT — multi-agent coordination

**If right:** multi-agent coordination becomes tractable at populations
where the coupled Fokker–Planck formulation breaks — unblocking traffic,
grids, swarms, logistics.

**Matters to:** DARPA Mathematical Challenge 13; national infrastructure
programmes.

**Not yet established:** validated to 10K agents. Planetary scale is
asserted from the complexity class, not demonstrated.

### Crystara / TCD-JEPA — AI training paradigm

**If right:** predictors grow structure at runtime instead of scaling a
fixed architecture — a different axis from parameter count.

**Matters to:** labs constrained by compute rather than data.

**Not yet established:** three graphs. Not a general result.

### Participatory Data Estate — digital data governance

**If right:** governance corpora become continuously ingested and publicly
auditable by construction.

**Matters to:** municipal, regulatory, NGO, scholarly bodies.

**Not yet established:** one live deployment.

---

## The systems

| System | Field | Live | Repository | Documents |
| --- | --- | --- | --- | --- |
| **Latent Ocean** | Grounding — successor to Codd and Setun | [network-cut gate](https://latentocean.com/spacex/off-earth) · [latentocean.com](https://latentocean.com) | — | — |
| **BTUT** | Complex multi-agent systems | [btut.ai](https://btut.ai) · [franklinstreetdata.com](https://www.franklinstreetdata.com) · [bigdunc.com](https://www.bigdunc.com) | [btut](https://github.com/direncode/btut) · [framklnstdata](https://github.com/direncode/framklnstdata) · [game-model](https://github.com/direncode/game-model) | [Tear sheet](./public/BTUT_Tear_Sheet.pdf) |
| **Crystara (TCD-JEPA)** | AI training paradigm | — | [tcd-jepa](https://github.com/direncode/tcd-jepa) | — |
| **NIV (Regenerationism)** | Macroeconomics | [regenerationism.ai](https://regenerationism.ai) | [regenerationism](https://github.com/direncode/regenerationism) | [Tear sheet](./public/NIV_TearSheet.pdf) · [Paper](./public/NIV_Paper.pdf) |
| **Participatory Data Estate** | Digital data governance | — | [sguncch](https://github.com/direncode/sguncch) *(SGUNCCH — first live deployment)* | — |

## Evidence

Numbers are evidence, not headlines. They sit under the claims they support.

- **Latent Ocean** — 554 tests on the relational successor; 50 on the
  ternary successor, energy factor **6.99** pinned by a golden test. Five
  deployed estates: refinery, offshore field, an industrial group with an
  export-controlled programme provably sealed, aerospace on public data,
  and an energy/maritime corridor. The agentic systems IDE: the model
  proposes a spec, the estate grounds it or refuses with a named reason, a
  steward promotes — nothing is generated or written.
- **BTUT** — constant 12-iteration convergence from 500 to 10,000 agents.
  β ≈ 0.5 (mean-field universality). Six live applied domains: SUMO traffic
  (800 vehicles, zero gridlock), ROS robot fleets, 50–200 drone swarms
  (100% cooperation), civic data, game modeling, four production cloud
  surfaces.
- **Crystara** — +36.6 AUC over baseline JEPA on Georgetown CSET
  semiconductor (519 entities); also beats supervised GAT (DeepMind), GCN
  (Google Brain), GraphSAGE. +22.1 on GDELT. +20.0 at 9,725-entity SEC
  EDGAR scale where GAT runs out of memory. 16 modules discovered 1-to-1
  with real industry clusters — no labels, no prompting.
- **NIV** — ensemble ROC-AUC **0.8538** at 18 months across 504 months
  (1970–2024), six OOS validation tests, 98.5% false-alarm suppression,
  **41.71%** orthogonal variance beyond the Fed 10Y–3M spread. Gini
  importance picks the regenerative-capital term at 0.9328 against the
  spread's 0.0298.
- **Participatory Data Estate** — time-constant auth, RLS on every Supabase
  table, rate limiting on four action classes, CSP/HSTS, XSS detection,
  publicly-readable approval ledger, hybrid pgvector + GIN FTS with
  graceful fallback.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with a custom `prose-essay` typography layer
- **React 18** client components only where navigation state is needed
- **next/og** for dynamic OpenGraph image generation
- Zero external runtime services — statically renderable, Vercel-ready

## Structure

```
app/
  layout.tsx                       Root layout, fonts, metadata
  opengraph-image.tsx              Dynamic OG image (1200×630)
  globals.css                      Tailwind + essay typography + diagram animations
  page.tsx                         Method, five inversions, impact, sources, contents
  primitives/page.tsx              I    — The Inversion
  latent-ocean/page.tsx            II   — Latent Ocean
  btut/page.tsx                    III  — BTUT
  crystara/page.tsx                IV   — Crystara
  niv/page.tsx                     V    — NIV
  participatory-data-estate/       VI   — Participatory Data Estate
  convergence/page.tsx             VII  — Convergence & Architecture
  about/page.tsx                   VIII — About / Context
  forward/page.tsx                 IX   — Forward Direction
  robots.ts / sitemap.ts           SEO
components/
  SiteNav.tsx / SiteFooter.tsx
  ChapterHeader.tsx / ChapterFooter.tsx
  Essay.tsx / Callout.tsx / StatBlock.tsx
  Inversion.tsx                    The five instances of the one move
  ImpactBlock.tsx                  If right / Matters to / Not yet established
  SourceBar.tsx                    Per-chapter link strip
  ConvergenceDiagram.tsx           Animated SVG, every node clickable
  PrimitiveCard.tsx
public/
  BTUT_Tear_Sheet.pdf
  NIV_TearSheet.pdf
  NIV_Paper.pdf
```

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run start        # serve prod build
```

## Editorial policy

Every quantitative claim resolves to an open repository, a PDF in
`public/`, or a live system. A skeptic should be able to settle any doubt
by clicking, never by asking.

Impact claims are stated as consequences and printed beside the condition
they have not yet met. Those conditions are not disclaimers and are not
negotiable — they are what makes the rest readable as claims rather than
marketing.
