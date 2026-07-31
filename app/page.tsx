import Link from "next/link";
import { ConvergenceDiagram } from "@/components/ConvergenceDiagram";
import { PrimitiveCard } from "@/components/PrimitiveCard";
import { Inversion } from "@/components/Inversion";
import { ImpactBlock } from "@/components/ImpactBlock";

const CHAPTERS = [
  {
    n: "I",
    t: "The Inversion",
    href: "/primitives",
    d: "The method, and the five instances of it.",
  },
  {
    n: "II",
    t: "Latent Ocean — a successor to Codd and to Setun",
    href: "/latent-ocean",
    d: "Provenance as the primitive; refusal as the third state. 554 + 50 tests, five deployed estates, an agentic systems IDE that writes nothing.",
  },
  {
    n: "III",
    t: "BTUT — coordination without the coupled equation",
    href: "/btut",
    d: "O(N) formulation for multi-agent systems. Six live applied domains. DARPA Mathematical Challenge 13.",
  },
  {
    n: "IV",
    t: "Crystara (TCD-JEPA) — grow the architecture at runtime",
    href: "/crystara",
    d: "Topological crystallization instead of scaling a fixed predictor. Three real heterogeneous graphs.",
  },
  {
    n: "V",
    t: "NIV — read capital formation, not bond sentiment",
    href: "/niv",
    d: "Regenerationism, operationalised. 504 months walk-forward; 41.71% orthogonal to the yield spread.",
  },
  {
    n: "VI",
    t: "Participatory Data Estate — governance corpora by construction",
    href: "/participatory-data-estate",
    d: "Continuous ingestion, public moderation ledger, federal-hardening controls. SGUNCCH is the first live deployment.",
  },
  {
    n: "VII",
    t: "Convergence & Architecture",
    href: "/convergence",
    d: "How the four primitives feed the estate.",
  },
  { n: "VIII", t: "About / Context", href: "/about", d: "Who is building this, and under what constraints." },
  { n: "IX", t: "Forward Direction", href: "/forward", d: "What comes next, and what would have to be true." },
];

const STATS = [
  { v: "19", l: "Years old" },
  { v: "7–9", l: "Months building" },
  { v: "604", l: "Latent Ocean tests" },
  { v: "5", l: "Deployed estates" },
  { v: "504", l: "Months walk-forward" },
  { v: "6", l: "Live BTUT domains" },
  { v: "0", l: "Co-authors" },
];

const SOURCES = [
  {
    id: "latent-ocean",
    title: "Latent Ocean",
    role: "Grounding · Successor to Codd and Setun",
    href: "/latent-ocean",
    links: [
      { k: "Live demo", label: "latentocean.com/spacex/off-earth", href: "https://latentocean.com/spacex/off-earth" },
      { k: "Live site", label: "latentocean.com", href: "https://latentocean.com" },
    ],
  },
  {
    id: "btut",
    title: "BTUT",
    role: "Multi-agent systems · Coordination",
    href: "/btut",
    links: [
      { k: "Live site", label: "btut.ai", href: "https://btut.ai" },
      { k: "Repository", label: "direncode/btut", href: "https://github.com/direncode/btut" },
      { k: "Tear sheet", label: "BTUT_Tear_Sheet.pdf", href: "/BTUT_Tear_Sheet.pdf" },
      { k: "Applied", label: "franklinstreetdata.com", href: "https://www.franklinstreetdata.com" },
      { k: "Applied", label: "bigdunc.com", href: "https://www.bigdunc.com" },
      { k: "Applied repo", label: "direncode/framklnstdata", href: "https://github.com/direncode/framklnstdata" },
      { k: "Applied repo", label: "direncode/game-model", href: "https://github.com/direncode/game-model" },
    ],
  },
  {
    id: "crystara",
    title: "Crystara",
    role: "Post-transformer AI training · TCD-JEPA",
    href: "/crystara",
    links: [
      { k: "Repository", label: "direncode/tcd-jepa", href: "https://github.com/direncode/tcd-jepa" },
    ],
  },
  {
    id: "niv",
    title: "NIV",
    role: "Regenerationism · Macro signal",
    href: "/niv",
    links: [
      { k: "Live site", label: "regenerationism.ai", href: "https://regenerationism.ai" },
      { k: "Repository", label: "direncode/regenerationism", href: "https://github.com/direncode/regenerationism" },
      { k: "Tear sheet", label: "NIV_TearSheet.pdf", href: "/NIV_TearSheet.pdf" },
      { k: "Paper", label: "NIV_Paper.pdf", href: "/NIV_Paper.pdf" },
    ],
  },
  {
    id: "pde",
    title: "Participatory Data Estate",
    role: "Digital data governance",
    href: "/participatory-data-estate",
    links: [
      { k: "Repository", label: "direncode/sguncch", href: "https://github.com/direncode/sguncch" },
    ],
  },
];

const IMPACTS = [
  {
    title: "Latent Ocean",
    field: "Grounding for agentic systems",
    href: "/latent-ocean",
    ifRight: (
      <>
        An agent can be permitted to act on enterprise and government data,
        because for the first time it can prove a record is <em>absent</em>{" "}
        rather than merely not retrieved — and the refusal survives to the
        actuator.
      </>
    ),
    mattersTo: (
      <>
        Any government converting operations to agentic AI; any organisation
        whose compliance layer silently passes cases no rule covers.
      </>
    ),
    notEstablished: <>No external user has run it. Five estates, all built by me.</>,
  },
  {
    title: "NIV",
    field: "Macroeconomic stress signal",
    href: "/niv",
    ifRight: (
      <>
        Central banks and allocators gain an 18-month stress signal
        orthogonal to the yield curve — 41.71% of variance the spread cannot
        see.
      </>
    ),
    mattersTo: <>Central banks, sovereign allocators, macro research desks.</>,
    notEstablished: (
      <>
        Live forward performance. Every number is out-of-sample but
        historical. No real-time track record exists yet.
      </>
    ),
  },
  {
    title: "BTUT",
    field: "Multi-agent coordination",
    href: "/btut",
    ifRight: (
      <>
        Multi-agent coordination becomes tractable at populations where the
        coupled Fokker–Planck formulation breaks — unblocking traffic,
        grids, swarms, logistics.
      </>
    ),
    mattersTo: (
      <>DARPA Mathematical Challenge 13; national infrastructure programmes.</>
    ),
    notEstablished: (
      <>
        Validated to 10K agents. Planetary scale is asserted from the
        complexity class, not demonstrated.
      </>
    ),
  },
  {
    title: "Crystara / TCD-JEPA",
    field: "AI training paradigm",
    href: "/crystara",
    ifRight: (
      <>
        Predictors grow structure at runtime instead of scaling a fixed
        architecture — a different axis from parameter count.
      </>
    ),
    mattersTo: <>Labs constrained by compute rather than data.</>,
    notEstablished: <>Three graphs. Not a general result.</>,
  },
  {
    title: "Participatory Data Estate",
    field: "Digital data governance",
    href: "/participatory-data-estate",
    ifRight: (
      <>
        Governance corpora become continuously ingested and publicly
        auditable by construction.
      </>
    ),
    mattersTo: <>Municipal, regulatory, NGO, scholarly bodies.</>,
    notEstablished: <>One live deployment.</>,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — the method, above everything */}
      <section className="pt-20 md:pt-32 pb-16 border-b border-ink-800">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="flex items-center gap-3 text-accent">
            <span className="font-mono text-xs tracking-wider">00</span>
            <span className="h-px w-8 bg-accent/60" />
            <span className="uppercase tracking-[0.22em] text-[11px]">
              Dubai · Nineteen · Solo · 7–9 months
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.25rem] tracking-tightish leading-[0.98] mt-6 text-ink-50 text-balance">
            Diren Kumaratilleke
          </h1>

          <p className="mt-8 font-serif text-2xl md:text-4xl text-accent leading-[1.2] tracking-tightish text-balance">
            I invert the primitive everyone takes as given.
          </p>
          <p className="mt-6 text-lg md:text-xl text-ink-200 max-w-3xl leading-relaxed text-pretty">
            Every system below starts the same way: find the assumption its
            field treats as settled — the thing so foundational nobody
            re-opens it — and refuse it. Then build what follows. Five
            instances, one move.
          </p>

          <Inversion className="mt-10" />

          <div className="mt-10 flex flex-wrap items-center gap-3 text-[13px]">
            <a
              href="https://latentocean.com/spacex/off-earth"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-accent text-accent px-5 py-2.5 hover:bg-accent hover:text-ink-950 transition-colors uppercase tracking-[0.18em] text-[11px]"
            >
              See the network-cut gate ↗
            </a>
            <Link
              href="/latent-ocean"
              className="inline-flex items-center gap-2 border border-ink-700 text-ink-200 px-5 py-2.5 hover:border-ink-400 transition-colors uppercase tracking-[0.18em] text-[11px]"
            >
              Latent Ocean
            </Link>
            <Link
              href="/primitives"
              className="inline-flex items-center gap-2 border border-ink-700 text-ink-200 px-5 py-2.5 hover:border-ink-400 transition-colors uppercase tracking-[0.18em] text-[11px]"
            >
              The Inversion
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 border border-ink-800 divide-x divide-y md:divide-y-0 divide-ink-800">
            {STATS.map((d, i) => (
              <div key={i} className="p-4">
                <div className="font-serif text-2xl md:text-3xl text-ink-50 tracking-tightish">
                  {d.v}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-ink-400">
                  {d.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact — the centre of the site */}
      <section className="py-20 md:py-28 border-b border-ink-800">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="chapter-label">What changes if this is right</div>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tightish text-ink-50 mt-3 leading-tight">
            Consequence, and the condition it depends on.
          </h2>
          <p className="mt-4 text-ink-300 leading-relaxed text-[15px] max-w-measure">
            Each system below is stated as a consequence rather than a
            benchmark. Every one of them is paired with the condition that
            has <em>not</em> yet been established. A claim that hides its
            bound is not a claim, so the bound is printed beside it.
          </p>

          <div className="mt-10">
            {IMPACTS.map((im) => (
              <div key={im.title} className="mb-2">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <Link
                    href={im.href}
                    className="font-serif text-xl md:text-2xl text-ink-50 hover:text-accent transition-colors tracking-tightish"
                  >
                    {im.title}
                  </Link>
                  <span className="chapter-label">{im.field}</span>
                </div>
                <ImpactBlock
                  className="mt-4 mb-10"
                  ifRight={im.ifRight}
                  mattersTo={im.mattersTo}
                  notEstablished={im.notEstablished}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not a résumé */}
      <section className="py-20 md:py-28 border-b border-ink-800">
        <div className="mx-auto max-w-measure px-5 md:px-8 prose-essay">
          <p className="text-ink-200 text-xl md:text-[1.35rem] leading-[1.65] font-serif italic text-balance">
            The frontier labs are scaling vertically — more parameters, more
            compute, more of the same. I am building horizontally: five
            inversions across five fields, each one re-opening a primitive
            the field stopped questioning. Coordination without the coupled
            equation. Architecture grown rather than scaled. Capital
            formation read instead of bond sentiment. Provenance as the unit
            rather than a column beside it. Refusal as a state rather than a
            null. Together they converge into{" "}
            <strong className="not-italic text-accent">Latent Ocean</strong>.
          </p>
          <p className="mt-6 text-ink-400 text-[15px]">
            What follows is not a résumé. It is the tape. Every claim
            resolves to a repository, a tear sheet, or a live system —
            a skeptic should never have to ask me a question they could
            answer by clicking.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 md:py-20 border-b border-ink-800 bg-ink-900/30">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="chapter-label">Sources</div>
          <h2 className="font-serif text-2xl md:text-3xl tracking-tightish text-ink-50 mt-2 leading-tight">
            Live systems, repositories, raw documents.
          </h2>
          <p className="mt-3 text-ink-400 text-[15px] max-w-measure">
            Resolve any doubt by clicking. Nothing here requires taking my
            word for it.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SOURCES.map((g) => (
              <div
                key={g.id}
                className="group border border-ink-800 bg-ink-950/70 hover:border-accent/50 transition-colors p-5"
              >
                <Link href={g.href} className="block">
                  <div className="font-serif text-xl text-ink-50 group-hover:text-accent transition-colors">
                    {g.title}
                  </div>
                  <div className="chapter-label mt-1">{g.role}</div>
                </Link>
                <ul className="mt-4 space-y-2 border-t border-ink-800 pt-4">
                  {g.links.map((l, i) => (
                    <li key={i}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-baseline justify-between gap-3 text-sm text-ink-200 hover:text-accent transition-colors"
                      >
                        <span className="flex-1 truncate">
                          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent mr-2">
                            {l.k}
                          </span>
                          {l.label}
                        </span>
                        <span className="text-accent text-xs shrink-0">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Convergence diagram */}
      <section className="py-20 md:py-28 border-b border-ink-800">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
            <div>
              <div className="chapter-label">Figure 00 · Convergence</div>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tightish text-ink-50 mt-3 leading-tight">
                Four primitives feed one estate.
              </h2>
              <p className="mt-4 text-ink-300 leading-relaxed text-[15px]">
                BTUT collapses coordination to linear time. Crystara grows
                the predictor at runtime. NIV compresses macro stress into a
                single published scalar. The Participatory Data Estate keeps
                ingestion continuous and auditable. Latent Ocean is where
                they land — and the place the grounding discipline lives.
                Each node in the diagram links to its external site or
                repository.
              </p>
            </div>
            <ConvergenceDiagram />
          </div>
        </div>
      </section>

      {/* Contents */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="chapter-label">Contents</div>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tightish text-ink-50 mt-3 mb-10">
            Chapters, in order.
          </h2>
          <ol className="divide-y divide-ink-800 border-y border-ink-800">
            {CHAPTERS.map((c) => (
              <li key={c.n}>
                <Link
                  href={c.href}
                  className="group grid grid-cols-[auto_1fr_auto] gap-5 md:gap-8 py-5 items-baseline hover:bg-ink-900/40 -mx-5 md:-mx-8 px-5 md:px-8 transition-colors"
                >
                  <span className="font-mono text-[11px] text-ink-500 tracking-wider w-8">
                    {c.n}
                  </span>
                  <div>
                    <div className="font-serif text-xl md:text-2xl text-ink-50 tracking-tightish group-hover:text-accent transition-colors">
                      {c.t}
                    </div>
                    <div className="mt-1 text-[13px] text-ink-400 leading-snug">
                      {c.d}
                    </div>
                  </div>
                  <span className="text-ink-500 group-hover:text-accent transition-colors text-sm">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Preview grid */}
      <section className="pt-8 pb-28">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="chapter-label">Preview</div>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tightish text-ink-50 mt-3 mb-10">
            The five inversions.
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            <PrimitiveCard
              number="01"
              subtitle="Grounding · Codd & Setun"
              title="Latent Ocean"
              one_liner="Provenance is not a column, it is the unit. Refusal is not a null, it is a state. An estate that can prove a record is absent rather than merely not retrieved — and carry that refusal to the actuator."
              beat="554 tests on the relational successor; 50 on the ternary successor, energy factor 6.99 pinned by a golden test. Five deployed estates including an export-controlled programme provably sealed. An agentic systems IDE in which nothing is generated or written."
              href="/latent-ocean"
            />
            <PrimitiveCard
              number="02"
              subtitle="Multi-agent systems · Coordination"
              title="BTUT"
              one_liner="Coordination without solving the coupled equation. A phase transition on a scale-free network under hub-weighted Fermi updates, in the mean-field universality class — where the PDE-on-density default breaks before 10,000 agents."
              beat="Constant 12-iteration convergence from 500 to 10,000 agents. Six live applied domains: SUMO traffic (800 vehicles, zero gridlock), ROS, drone swarms, civic data, game modeling, four cloud surfaces. DARPA Mathematical Challenge 13."
              href="/btut"
            />
            <PrimitiveCard
              number="03"
              subtitle="AI training · TCD-JEPA"
              title="Crystara"
              one_liner="Grow the architecture instead of scaling it. Fisher-information Langevin exploration, Vietoris–Rips persistent homology on the trajectories, typed H₀/H₁/H₂ predictor modules crystallized at runtime."
              beat="+36.6 AUC over baseline JEPA on Georgetown CSET semiconductor; also beats supervised GAT (DeepMind), GCN (Google Brain), GraphSAGE. +22.1 on GDELT, +20.0 at 9,725-entity SEC EDGAR scale where GAT OOMs. 16 modules 1-to-1 with real industry clusters."
              href="/crystara"
            />
            <PrimitiveCard
              number="04"
              subtitle="Regenerationism · Macro signal"
              title="NIV"
              one_liner="Read physical capital formation, not bond sentiment. Regenerationism holds that regime health is the velocity of compounding-margin capital formation measured against cumulative friction; NIV is its first operational instrument."
              beat="ROC-AUC 0.8538 at 18 months across 504 months (1970–2024), six OOS tests, 98.5% false-alarm suppression, 41.71% orthogonal variance to the Fed spread. Gini importance picks the regenerative-capital term at 0.9328 against the spread's 0.0298."
              href="/niv"
            />
            <PrimitiveCard
              number="05"
              subtitle="Digital data governance"
              title="Participatory Data Estate"
              one_liner="Continuous ingestion, moderation as a public transition, federal-hardening controls. Submit → Moderate → Thin → Crystallize, over hybrid pgvector + GIN FTS retrieval with a publicly-readable approval ledger."
              beat="First live deployment: SGUNCCH, a full UNC student-government stack running the framework end-to-end. Time-constant auth, RLS on every table, rate limiting on four action classes, CSP/HSTS, XSS detection."
              href="/participatory-data-estate"
            />
          </div>
        </div>
      </section>
    </>
  );
}
