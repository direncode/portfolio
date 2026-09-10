# Diren Kumaratilleke — direncode.com

> **The binding constraint is not the magnitude of the input. It is the
> representation the field committed to early and stopped questioning.**

Three results, three fields, one move. Each recovers something a field made
unavailable to itself. The discard was correct when made; it became the
constraint later. Recovering it requires inverting the primitive, not adding
capacity.

| System | Discarded | Recovered |
| --- | --- | --- |
| **NIV** | Bond sentiment | Physical capital formation |
| **Crystara** | Architecture specified | Structure discovered |
| **BTUT** | The coupled equation | The O(N) formulation |

**[Representation, not scale](https://direncode.com/thesis)** — the argument
in full: the historical sequence from writing to sovereign debt, what none of
it encoded, and a criterion for granting a system authority.

**Papers:** [SSRN 6664138](./public/NIV_SSRN_6664138.pdf) ·
[NIV tear sheet](./public/NIV_TearSheet.pdf) ·
[BTUT tear sheet](./public/BTUT_Tear_Sheet.pdf)

[![Open-graph preview](https://direncode.com/opengraph-image)](https://direncode.com)

Nineteen. Dubai. Gap semester from UNC, building full time. Seven to nine
months, zero co-authors.

## The three results

- **[BTUT](https://btut.ai)** — coordination without a coordinator, at
  scale. Spontaneous order at a threshold, where the coupled mean-field
  formulation breaks.
- **[Crystara](https://github.com/direncode/tcd-jepa)** — finding emergent
  structure from latent embeddings. The architecture discovered at runtime
  rather than specified in advance.
- **[NIV](https://regenerationism.ai)** — thrust as the foundation for
  regenerative economies. Regenerative capital formation measured against
  cumulative friction.

## Every chapter, four sections

1. **What I inverted** — the assumption stated fairly, then the flip, then
   what changes if right
2. **What it shows** — numbers with method beside them
3. **What it doesn't show** — never softened, never merged, never below the
   fold
4. **Sources** — repo, paper, tear sheet, live site

Seven hundred words each. Anyone wanting more clicks the paper.

## Evidence

- **BTUT** — constant 12-iteration convergence from 500 to 10,000 agents.
  20–105× existing mean-field-game solver frameworks. γ_c ≈ 1.33, β ≈ 0.5.
  Six live domains.
- **Crystara** — +36.6 AUC over baseline JEPA on CSET semiconductor (519
  entities), +22.1 GDELT, +20.0 SEC EDGAR at 9,725 entities where GAT OOMs.
  Sixteen discovered modules map 1-to-1 to real industry clusters with no
  labels.
- **NIV** — ROC-AUC 0.8538 at 18 months across 504 months (1970–2024) against
  ~0.72 for the 10Y/3M spread. 98.5% false-alarm filter. 41.71% orthogonal
  variance. Gini 0.9328 vs 0.0298.
  [SSRN 6664138](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6664138).

## Repositories

| System | Public repos |
| --- | --- |
| **BTUT** | [btut](https://github.com/direncode/btut) · [flux-btut](https://github.com/direncode/flux-btut) · [framklnstdata](https://github.com/direncode/framklnstdata) · [game-model](https://github.com/direncode/game-model) · [flux-thebigdunc](https://github.com/direncode/flux-thebigdunc) |
| **Crystara** | [tcd-jepa](https://github.com/direncode/tcd-jepa) · [tests](https://github.com/direncode/tests) · [jumpbenchmark](https://github.com/direncode/jumpbenchmark) |
| **NIV** | [niv-engine](https://github.com/direncode/niv-engine) · [regenerationism](https://github.com/direncode/regenerationism) · [flux-regenerationism](https://github.com/direncode/flux-regenerationism) |
| **Governance lineage** | [sguncch](https://github.com/direncode/sguncch) · [flux-sguncch](https://github.com/direncode/flux-sguncch) |

All repos: [github.com/direncode](https://github.com/direncode)

## Stack

Next.js 14 App Router · TypeScript · Tailwind · next/og. Statically
renderable, no runtime services.

```
app/
  page.tsx            homepage — one screen
  thesis/             Representation, not scale
  btut/               I    Coordination
  crystara/           II   Structure
  niv/                III  Signal
components/
  Thesis.tsx          the three inversions and the three results
  ChapterSection.tsx  section headers, Bound, Equation
public/
  NIV_SSRN_6664138.pdf · NIV_Paper.pdf · NIV_TearSheet.pdf
  BTUT_Tear_Sheet.pdf
```

```bash
npm install && npm run dev
```

## Editorial policy

Every number in section 2 of a chapter resolves to something clickable in
section 4. If it does not, the number comes out or the source gets published.

Section 3 states what is not established. It is never softened, never merged
into the evidence, and never below the fold. It is the reason the rest is
credible.
