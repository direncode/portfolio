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
            a new approach to DARPA Mathematical Challenge&nbsp;13, a
            macro-stress scalar with 41.71% orthogonal variance beyond the
            Fed yield curve, a topological predictor that outperforms
            vanilla JEPA on local-geometry metrics, and a participatory
            data estate hardened to federal-agency security patterns.
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
            compute, more of the same. I am building horizontally: four
            primitives, each with a measurable edge on a specific
            incumbent. A new approach to DARPA Challenge 13. A recession
            signal that adds 41.71% orthogonal variance over the Fed yield
            spread. A topological predictor that outperforms vanilla JEPA
            on every local-geometry metric on Two Rooms. A participatory
            data estate hardened to federal-agency security patterns.
            Together they form the <strong className="not-italic text-accent">Latent
            Ocean</strong>.
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
              { n: "II", t: "BTUT — a new approach to DARPA Challenge 13", href: "/btut", d: "Most comprehensive application ever built — SUMO, ROS, drones, SDK, Lambda, REST." },
              { n: "III", t: "Crystara — beat JEPA, conclusively", href: "/crystara", d: "Three-system loop. Runtime-crystallized H₀/H₁/H₂ modules. +42.3% k-NN (k=20)." },
              { n: "IV", t: "NIV — beat the Fed on recession benchmarks", href: "/niv", d: "ROC-AUC 0.8538 @ 18 mo across 504 months; 98.5% false-alarm filter, 41.71% orthogonal variance." },
              { n: "V", t: "SGUNCCH — hardened student-government infrastructure", href: "/participatory-data-estate", d: "Submit→Moderate→Thin→Crystallize. Time-constant auth, RLS, public audit ledger, federal-hardening patterns." },
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
              beat="A new approach to DARPA Mathematical Challenge 13, shipped end-to-end across SUMO traffic, ROS robotics, 50 – 200 drone swarms, Python SDK, REST API, Lambda, and WASM surfaces."
              href="/btut"
            />
            <PrimitiveCard
              number="02"
              subtitle="Structure"
              title="Crystara (TCD-JEPA)"
              one_liner="Topological crystallization engine. A three-system loop that grows its own predictor and emits typed H₀/H₁/H₂ modules from persistent homology."
              beat="Beat vanilla JEPA benchmarks on Two Rooms — conclusively: +42.3% k-NN (k=20), +23.0% (k=1), +13.8% (k=5), 60.8% CIFAR-10 loss reduction."
              href="/crystara"
            />
            <PrimitiveCard
              number="03"
              subtitle="Signal"
              title="NIV"
              one_liner="Macro-stress scalar built from thrust, efficiency, slack, and drag over 8 public FRED series — economically interpretable, weights published, fully reproducible."
              beat="Beat the Fed yield curve on recession benchmarks — conclusively: OOS ROC-AUC 0.8538 at 18 months across 504 months of walk-forward, 98.5% false-alarm filter, 41.71% orthogonal variance the spread cannot see."
              href="/niv"
            />
            <PrimitiveCard
              number="04"
              subtitle="Ingestion"
              title="SGUNCCH"
              one_liner="A participatory data estate: Submit → Moderate → Thin → Crystallize, with a public approval ledger, pgvector + FTS hybrid retrieval, and OWASP-grade security."
              beat="Security posture drawn from federal-agency hardening patterns (RLS on every table, time-constant auth, CSP/HSTS, rate limiting by action class, public audit ledger). Unusually hardened for a student-facing stack."
              href="/participatory-data-estate"
            />
          </div>
        </div>
      </section>
    </>
  );
}
