import Link from "next/link";
import { ConvergenceDiagram } from "@/components/ConvergenceDiagram";
import { PrimitiveCard } from "@/components/PrimitiveCard";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 md:pt-32 pb-24 border-b border-ink-800">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="flex items-center gap-3 text-accent">
            <span className="font-mono text-xs tracking-wider">00</span>
            <span className="h-px w-8 bg-accent/60" />
            <span className="uppercase tracking-[0.22em] text-[11px]">
              Four paradigms · Four fields · Nineteen · Solo · One year
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.25rem] tracking-tightish leading-[0.98] mt-6 text-ink-50 text-balance">
            Diren Kumaratilleke
          </h1>
          <p className="mt-8 text-lg md:text-2xl text-ink-200 max-w-3xl leading-relaxed text-pretty">
            Four paradigms, four different fields.{" "}
            <em className="text-accent not-italic">BTUT</em> — a new
            substrate for complex multi-agent systems, shipped across six
            live domains.{" "}
            <em className="text-accent not-italic">TCD-JEPA / Crystara</em> —
            a new AI training paradigm past transformers, beating
            vanilla JEPA and supervised GAT (DeepMind) / GCN (Google
            Brain) on real heterogeneous graphs.{" "}
            <em className="text-accent not-italic">Regenerationism</em> —
            a new economic philosophy, its first operational instrument
            (NIV) beating the Fed yield curve with 41.71% orthogonal
            variance.{" "}
            <em className="text-accent not-italic">Participatory Data
            Estate</em> — a new framework for digital data governance,
            running in production. The tape is the argument.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3 text-[13px]">
            <Link
              href="/primitives"
              className="inline-flex items-center gap-2 border border-accent text-accent px-5 py-2.5 hover:bg-accent hover:text-ink-950 transition-colors uppercase tracking-[0.18em] text-[11px]"
            >
              Explore the Primitives →
            </Link>
            <Link
              href="/convergence"
              className="inline-flex items-center gap-2 border border-ink-700 text-ink-200 px-5 py-2.5 hover:border-ink-400 transition-colors uppercase tracking-[0.18em] text-[11px]"
            >
              Convergence Architecture
            </Link>
          </div>

          {/* Delta strip — the age-and-rate context, stated directly */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 border border-ink-800 divide-x divide-y md:divide-y-0 divide-ink-800">
            {[
              { v: "19", l: "Years old" },
              { v: "1", l: "Calendar year" },
              { v: "4", l: "Subfields" },
              { v: "4", l: "Live primitives" },
              { v: "504", l: "Months OOS" },
              { v: "3", l: "Real graphs beaten" },
              { v: "0", l: "Co-authors" },
            ].map((d, i) => (
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

      {/* Sources — front-and-center: every external site, repo, and PDF */}
      <section className="py-16 md:py-20 border-b border-ink-800 bg-ink-900/30">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <div className="chapter-label">Sources</div>
              <h2 className="font-serif text-2xl md:text-3xl tracking-tightish text-ink-50 mt-2 leading-tight">
                Live sites, repositories, raw documents.
              </h2>
              <p className="mt-3 text-ink-400 text-[15px] max-w-measure">
                Every claim on this site is traceable to the four open
                repositories below — and, for NIV, to the published tear sheet
                and the full paper. Click anything.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                id: "btut",
                title: "BTUT",
                role: "Multi-agent systems · Coordination",
                href: "/btut",
                links: [
                  { k: "Live site", label: "btut.ai", href: "https://btut.ai", ext: true },
                  { k: "Repository", label: "direncode/btut", href: "https://github.com/direncode/btut", ext: true },
                  { k: "Tear sheet", label: "BTUT_Tear_Sheet.pdf", href: "/BTUT_Tear_Sheet.pdf", ext: true },
                  { k: "Applied · Civic data", label: "franklinstreetdata.com", href: "https://www.franklinstreetdata.com", ext: true },
                  { k: "Applied · Game model", label: "bigdunc.com", href: "https://www.bigdunc.com", ext: true },
                  { k: "Applied repo", label: "direncode/framklnstdata", href: "https://github.com/direncode/framklnstdata", ext: true },
                  { k: "Applied repo", label: "direncode/game-model", href: "https://github.com/direncode/game-model", ext: true },
                ],
              },
              {
                id: "crystara",
                title: "Crystara",
                role: "Post-transformer AI paradigm · TCD-JEPA",
                href: "/crystara",
                links: [
                  { k: "Repository", label: "direncode/tcd-jepa", href: "https://github.com/direncode/tcd-jepa", ext: true },
                ],
              },
              {
                id: "niv",
                title: "NIV",
                role: "Regenerationism · New economic school",
                href: "/niv",
                links: [
                  { k: "Live site", label: "regenerationism.ai", href: "https://regenerationism.ai", ext: true },
                  { k: "Repository", label: "direncode/regenerationism", href: "https://github.com/direncode/regenerationism", ext: true },
                  { k: "Tear sheet", label: "NIV_TearSheet.pdf", href: "/NIV_TearSheet.pdf", ext: true },
                  { k: "Paper", label: "NIV_Paper.pdf", href: "/NIV_Paper.pdf", ext: true },
                ],
              },
              {
                id: "pde",
                title: "Participatory Data Estate",
                role: "Digital data governance · SGUNCCH is the first live deployment",
                href: "/participatory-data-estate",
                links: [
                  { k: "Repository", label: "direncode/sguncch", href: "https://github.com/direncode/sguncch", ext: true },
                ],
              },
            ].map((g) => (
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
                        target={l.ext ? "_blank" : undefined}
                        rel={l.ext ? "noopener noreferrer" : undefined}
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

      {/* Intro paragraph */}
      <section className="py-20 md:py-28 border-b border-ink-800">
        <div className="mx-auto max-w-measure px-5 md:px-8 prose-essay">
          <p className="text-ink-200 text-xl md:text-[1.35rem] leading-[1.65] font-serif italic text-balance">
            The frontier labs are scaling vertically — more parameters,
            more compute, more of the same. I am building horizontally:
            four <em>paradigms</em>, each one naming a field and proposing
            a new shape for it. A new substrate for complex multi-agent
            systems (BTUT), shipped across six live domains and
            answering DARPA Mathematical Challenge 13. A new AI training
            paradigm past transformers (TCD-JEPA / Crystara), beating
            vanilla JEPA <em>everywhere it has been tested</em> —
            three real heterogeneous graphs, +20 to +36.6 AUC points —
            and also beats supervised GAT / GCN / GraphSAGE on a
            Georgetown CSET semiconductor supply chain. A new economic
            philosophy named Regenerationism, with NIV as its first
            operational instrument (a macro-stress scalar beating the
            Fed yield curve on several recession benchmarks). A new
            framework for digital data governance — the Participatory
            Data Estate — with SGUNCCH as its first live deployment.
            Together the four paradigms converge into the{" "}
            <strong className="not-italic text-accent">Latent Ocean</strong>.
          </p>
          <p className="mt-6 text-ink-400 text-[15px]">
            What follows is not a résumé. It is the tape. Nineteen
            years old. Solo. One calendar year. Four paradigms across
            four fields — multi-agent coordination, post-transformer AI
            training, a new economic school, digital data governance —
            each proposed as a shape, each tested against a named
            incumbent, each traceable to an open repository or a public
            document. The hard part is the paradigm, not the scale.
          </p>
        </div>
      </section>

      {/* Convergence diagram */}
      <section className="py-20 md:py-28 border-b border-ink-800">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
            <div>
              <div className="chapter-label">Figure 00 · Convergence</div>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tightish text-ink-50 mt-3 leading-tight">
                Four primitives feed one engine.
              </h2>
              <p className="mt-4 text-ink-300 leading-relaxed text-[15px]">
                Reduction (BTUT) collapses coordination to linear time.
                Crystallization (Crystara) grows the predictor at runtime.
                Signal (NIV) compresses macro stress into a single scalar.
                Ingestion (PDE — Participatory Data Estate) makes the
                knowledge base a living, auditable structure. Latent
                Ocean is the composition. Each node in the diagram links
                to its external site or repository.
              </p>
            </div>
            <ConvergenceDiagram />
          </div>
        </div>
      </section>

      {/* Table of contents */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="chapter-label">Contents</div>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tightish text-ink-50 mt-3 mb-10">
            Chapters, in order.
          </h2>
          <ol className="divide-y divide-ink-800 border-y border-ink-800">
            {[
              { n: "I", t: "The Four Primitives", href: "/primitives", d: "An overview of what each primitive beats, and why." },
              { n: "II", t: "BTUT — a new substrate for complex multi-agent systems", href: "/btut", d: "Answers DARPA Mathematical Challenge 13. Shipped across six live domains: traffic, robotics, drones, civic data, game modeling, cloud." },
              { n: "III", t: "Crystara (TCD-JEPA) — a new AI training paradigm past transformers", href: "/crystara", d: "Grow the predictor instead of scaling attention. Beats vanilla JEPA + supervised GAT/GCN on three real graphs. 16 modules 1-to-1 with real industry clusters." },
              { n: "IV", t: "NIV — Regenerationism, a new economic school", href: "/niv", d: "First operational instrument of Regenerationism. Beats the Fed yield curve. ROC-AUC 0.8538 @ 18 mo; 41.71% orthogonal; Gini 0.9328." },
              { n: "V", t: "Participatory Data Estate — a new framework for digital data governance", href: "/participatory-data-estate", d: "Submit→Moderate→Thin→Crystallize + public approval ledger + federal-hardening. SGUNCCH is the first live deployment." },
              { n: "VI", t: "Convergence & Architecture", href: "/convergence", d: "How the four feed the Latent Ocean." },
              { n: "VII", t: "About / Context", href: "/about", d: "Who is building this, and under what constraints." },
              { n: "VIII", t: "Forward Direction", href: "/forward", d: "Scaling, sovereign integrations, inference-time substrate." },
            ].map((c) => (
              <li key={c.n}>
                <Link
                  href={c.href}
                  className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_auto] gap-5 md:gap-8 py-5 items-baseline hover:bg-ink-900/40 -mx-5 md:-mx-8 px-5 md:px-8 transition-colors"
                >
                  <span className="font-mono text-[11px] text-ink-500 tracking-wider w-6">
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

      {/* Quick primitive grid */}
      <section className="pt-8 pb-28">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="chapter-label">Preview</div>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tightish text-ink-50 mt-3 mb-10">
            The four beats.
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            <PrimitiveCard
              number="01"
              subtitle="Multi-agent systems · Coordination"
              title="BTUT"
              one_liner="A new substrate for complex multi-agent systems — the class of systems (traffic, grids, drones, logistics, markets, civic coordination) the 21st century cannot run without. Phase transition on a scale-free network, hub-weighted Fermi updates, mean-field universality class."
              beat="A new approach to DARPA Mathematical Challenge 13, shipped across six live applied domains: traffic (SUMO, 800 vehicles, zero gridlock), robotics (ROS), drone swarms (100% cooperation at 200 agents), civic data (franklinstreetdata.com), game modeling (bigdunc.com), and four production cloud surfaces."
              href="/btut"
            />
            <PrimitiveCard
              number="02"
              subtitle="Post-transformer AI paradigm · TCD-JEPA"
              title="Crystara"
              one_liner="A new AI training paradigm past transformers. Instead of scaling a fixed architecture, grow the architecture: a recursive loop explores the energy landscape with Fisher-information Langevin dynamics, runs persistent homology on the trajectories, and crystallizes stable features into typed H₀/H₁/H₂ predictor modules at runtime."
              beat="Beats vanilla JEPA everywhere tested: +36.6 AUC on CSET semiconductor (519 entities) — also beats supervised GAT (DeepMind), GCN (Google Brain), GraphSAGE. +22.1 on GDELT. +20.0 at 9,725-entity SEC EDGAR scale where GAT OOMs. 16 discovered modules 1-to-1 with real industry clusters, no labels."
              href="/crystara"
            />
            <PrimitiveCard
              number="03"
              subtitle="Regenerationism · New economic school"
              title="NIV"
              one_liner="Regenerationism is a new economic philosophy: the leading indicator of regime health is the velocity of compounding-margin capital formation against cumulative friction, not bond-market sentiment. NIV is its first operational instrument — Thrust · Efficiency (P²) · Slack · Drag, from 8 public FRED series."
              beat="Beats the Fed yield curve on several recession benchmarks — conclusively: ROC-AUC 0.8538 @ 18 mo across 504 months (1970 – 2024), 98.5% false-alarm filter, 41.71% orthogonal variance the spread cannot see. Under Gini importance the regenerative-capital term scores 0.9328; the spread scores 0.0298. The model picked the school unprompted."
              href="/niv"
            />
            <PrimitiveCard
              number="04"
              subtitle="Digital data governance · New framework"
              title="Participatory Data Estate"
              one_liner="A new framework for digital data governance. Continuous ingestion (Submit → Moderate → Thin → Crystallize), moderation as a public transition (publicly-readable approval ledger via RLS), hybrid pgvector + GIN FTS retrieval, federal-hardening controls. Any governance corpus — municipal, NGO, regulatory, scholarly — needs exactly this shape."
              beat="First live deployment: SGUNCCH, a full UNC student-government stack running the framework end-to-end. Time-constant auth, RLS on every table, rate limiting by action class, CSP/HSTS, public approval ledger. A security posture student government has never needed and has never had."
              href="/participatory-data-estate"
            />
          </div>
        </div>
      </section>
    </>
  );
}
