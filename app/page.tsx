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
              Manifesto · April 2026
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.25rem] tracking-tightish leading-[0.98] mt-6 text-ink-50 text-balance">
            Diren Kumaratilleke
          </h1>
          <p className="mt-8 text-lg md:text-2xl text-ink-200 max-w-3xl leading-relaxed text-pretty">
            Building <em className="text-accent not-italic">horizontal
            intelligence</em> primitives as a solo freshman. Four
            conclusive beats — a new, cross-domain-comprehensive approach
            to DARPA Mathematical Challenge&nbsp;13, a macro-stress scalar
            that beats the Fed yield curve on several recession benchmarks
            with 41.71% orthogonal variance, a topological predictor that
            beats vanilla JEPA across three real heterogeneous graphs (and
            beats supervised GAT / GCN on a semiconductor supply chain),
            and a participatory data estate with a security posture
            student government has never needed — and, I'd argue, has
            never had.
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
                role: "Coordination",
                href: "/btut",
                links: [
                  { k: "Live site", label: "btut.ai", href: "https://btut.ai", ext: true },
                  { k: "Repository", label: "direncode/btut", href: "https://github.com/direncode/btut", ext: true },
                  { k: "Tear sheet", label: "BTUT_Tear_Sheet.pdf", href: "/BTUT_Tear_Sheet.pdf", ext: true },
                ],
              },
              {
                id: "crystara",
                title: "Crystara",
                role: "Structure",
                href: "/crystara",
                links: [
                  { k: "Repository", label: "direncode/tcd-jepa", href: "https://github.com/direncode/tcd-jepa", ext: true },
                ],
              },
              {
                id: "niv",
                title: "NIV",
                role: "Signal",
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
                title: "PDE",
                role: "Participatory Data Estate · Ingestion",
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
            four primitives that each <em>conclusively beat</em> a
            specific incumbent. A new, cross-domain-comprehensive
            approach to DARPA Challenge 13, shipped across traffic,
            robotics, drones, and four production cloud surfaces. A
            recession signal that beats the Fed on several benchmarks,
            with 41.71% of its variance orthogonal to the yield spread —
            variance the spread cannot see. A topological predictor that
            beats vanilla JEPA <em>everywhere it has been tested</em> —
            three real heterogeneous graphs, +20 to +36.6 AUC points —
            and also beats supervised GAT, GCN, and GraphSAGE on a
            Georgetown CSET semiconductor supply chain. A participatory
            data estate hardened well beyond anything student government
            has any business running. Together they form the{" "}
            <strong className="not-italic text-accent">Latent Ocean</strong>.
          </p>
          <p className="mt-6 text-ink-400 text-[15px]">
            What follows is not a résumé. It is a chapter-serial argument for a
            different shape of AI — one that a solo nineteen-year-old can
            actually build, because the hard part is the primitive, not the
            scale.
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
              { n: "II", t: "BTUT — a new, cross-domain approach to DARPA Challenge 13", href: "/btut", d: "Shipped across SUMO traffic, ROS robotics, 50–200 drone swarms, Python SDK, REST, Lambda, WASM. Cross-domain comprehensive." },
              { n: "III", t: "Crystara — beat JEPA, and supervised GNNs on a semiconductor graph", href: "/crystara", d: "+20 to +36.6 AUC pts over baseline JEPA on three real graphs. Beats supervised GAT/GCN/GraphSAGE on CSET semiconductor. 16 validated modules discovered from persistent homology." },
              { n: "IV", t: "NIV — beat the Fed on several recession benchmarks", href: "/niv", d: "ROC-AUC 0.8538 @ 18 mo across 504 months; 98.5% false-alarm filter; 41.71% orthogonal variance the Fed spread cannot see." },
              { n: "V", t: "SGUNCCH — the security posture student government has never had", href: "/participatory-data-estate", d: "Submit→Moderate→Thin→Crystallize. Time-constant auth, RLS on every table, rate limiting by action class, public approval ledger, federal-hardening patterns." },
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
              subtitle="Coordination"
              title="BTUT"
              one_liner="A new mathematical object replacing the O(N³) PDE: a phase transition on a scale-free network with hub-weighted Fermi updates, in the mean-field universality class."
              beat="A new approach to DARPA Mathematical Challenge 13 — and a cross-domain-comprehensive application of it: SUMO traffic (800 vehicles, zero gridlock), ROS robotics, 50 – 200 drone swarms (100% cooperation), Python SDK, REST, Lambda, and WASM surfaces. One primitive, four domains, four production shapes."
              href="/btut"
            />
            <PrimitiveCard
              number="02"
              subtitle="Structure"
              title="Crystara (TCD-JEPA)"
              one_liner="Topological crystallization engine. A three-system loop that grows its own predictor and emits typed H₀/H₁/H₂ modules from persistent homology."
              beat="Beats vanilla JEPA everywhere it's been tested: +36.6 AUC pts on a 519-entity CSET semiconductor supply chain — also beats supervised GAT (70.3%), GCN (63.9%), and GraphSAGE (33.8%). +22.1 pts on GDELT. +20.0 pts at SEC EDGAR scale where GAT runs out of memory. 16 discovered modules map 1-to-1 to real industry clusters with no labels."
              href="/crystara"
            />
            <PrimitiveCard
              number="03"
              subtitle="Signal"
              title="NIV"
              one_liner="Macro-stress scalar built from thrust, efficiency, slack, and drag over 8 public FRED series — economically interpretable, weights published, fully reproducible."
              beat="Beats the Fed yield curve on several recession benchmarks — conclusively: OOS ROC-AUC 0.8538 at 18 months across 504 months of walk-forward, 98.5% false-alarm filter, 41.71% orthogonal variance the spread cannot see. Every weight published, every input from FRED."
              href="/niv"
            />
            <PrimitiveCard
              number="04"
              subtitle="Ingestion"
              title="SGUNCCH"
              one_liner="A participatory data estate: Submit → Moderate → Thin → Crystallize, with a public approval ledger, pgvector + FTS hybrid retrieval, and OWASP-grade security."
              beat="A security posture student government has never needed — and, I'd argue, has never had. Time-constant auth, RLS on every table, rate limiting by action class, CSP/HSTS, XSS detection, public approval ledger. Four composable surfaces — Scroll, Budget Engine, Knowledge Base, Chat — in one hardened codebase."
              href="/participatory-data-estate"
            />
          </div>
        </div>
      </section>
    </>
  );
}
