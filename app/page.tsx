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
            intelligence</em> primitives as a solo freshman. Four systems —
            coordination, structure, signal, ingestion — converging into one
            inference-time substrate.
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

      {/* Intro paragraph */}
      <section className="py-20 md:py-28 border-b border-ink-800">
        <div className="mx-auto max-w-measure px-5 md:px-8 prose-essay">
          <p className="text-ink-200 text-xl md:text-[1.35rem] leading-[1.65] font-serif italic text-balance">
            The frontier labs are scaling vertically — more parameters, more
            compute, more of the same. I am building horizontally: composable
            primitives that reduce, crystallize, signal, and ingest. Each one
            earns its place by beating a specific incumbent. Together, they
            form the <strong className="not-italic text-accent">Latent
            Ocean</strong> — a single engine that coordinates agents, grows its
            own predictor, detects macro stress, and turns raw submissions into
            living knowledge.
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
                Ingestion (PDE) makes the knowledge base a living,
                auditable structure. Latent Ocean is the composition.
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
              { n: "II", t: "BTUT — Coordination", href: "/btut", d: "O(N), N-invariant convergence. 1M agents in 9.5s." },
              { n: "III", t: "Crystara — Structure", href: "/crystara", d: "Three-system loop. Runtime-crystallized H₀/H₁/H₂ modules." },
              { n: "IV", t: "NIV — Signal", href: "/niv", d: "OOS AUC 0.854 at 18 months. Orthogonal to the Fed spread." },
              { n: "V", t: "Participatory Data Estate — Ingestion", href: "/participatory-data-estate", d: "Submit → Moderate → Thin → Crystallize, with a transparent ledger." },
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
              one_liner="Linear-time multi-agent coordination. Kernel-weighted mean-field dynamics converge in ~20 iterations — independent of N."
              beat="Beat MASON by 20×, Mesa by 105×. NetLogo crashed at 100K. Addresses DARPA Mathematical Challenge 13."
              href="/btut"
            />
            <PrimitiveCard
              number="02"
              subtitle="Structure"
              title="Crystara"
              one_liner="Topological crystallization engine. A three-system loop that grows its own predictor and emits H₀/H₁/H₂ modules from persistent homology."
              beat="Beat vanilla JEPA by +42.3% relative k-NN on Two Rooms. Built on a 111K-node citation manifold."
              href="/crystara"
            />
            <PrimitiveCard
              number="03"
              subtitle="Signal"
              title="NIV"
              one_liner="Macro-stress scalar. A transparent, economically interpretable signal compressing thrust, efficiency, slack, and drag."
              beat="OOS AUC 0.854 at 18 months. Provides orthogonal information the Fed yield curve alone cannot capture."
              href="/niv"
            />
            <PrimitiveCard
              number="04"
              subtitle="Ingestion"
              title="Participatory Data Estate"
              one_liner="Submit → Moderate → Thin → Crystallize. Raw human submissions become a living, auditable, vector-retrievable knowledge base."
              beat="Shipped as the governance layer of a real UNC-scale policy platform, with a transparent approval ledger."
              href="/participatory-data-estate"
            />
          </div>
        </div>
      </section>
    </>
  );
}
