import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";
import { PrimitiveCard } from "@/components/PrimitiveCard";

export const metadata = {
  title: "The Four Primitives",
  description:
    "BTUT, Crystara, NIV, and the Participatory Data Estate — four primitives of horizontal intelligence.",
};

export default function PrimitivesPage() {
  return (
    <>
      <ChapterHeader
        number="I"
        label="Chapter"
        title="The Four Primitives"
        kicker="Each primitive earns its place by beating a specific incumbent. Each one names a reduction the rest of the field has not yet made."
        prev={{ href: "/", label: "Manifesto" }}
        next={{ href: "/btut", label: "BTUT — Coordination" }}
      />

      <Essay>
        <h2>Why four, and why these four.</h2>
        <p>
          A horizontal intelligence platform needs four operations, and only
          four. It has to <strong>reduce</strong> — turn an exponential
          coordination problem into a linear one. It has to{" "}
          <strong>crystallize</strong> — grow the right predictor instead of
          being handed one. It has to <strong>signal</strong> — compress the
          state of an enormous external system into a decision-useful scalar.
          And it has to <strong>ingest</strong> — turn a living stream of human
          input into an auditable, queryable structure.
        </p>
        <p>
          I started with the hardest of these — coordination — because if that
          is not O(N), nothing else matters. BTUT is the reduction. Crystara
          showed me that the predictor itself wants to be discovered, not
          designed. NIV showed me that a single scalar, built transparently
          from known macro primitives, can out-decorrelate a Fed-spread
          baseline. The Participatory Data Estate closed the loop: a
          governance-grade pipeline that turns raw submissions into vectorized,
          retrievable, approval-logged knowledge.
        </p>

        <h2>The beats.</h2>
        <p>
          Every primitive below is a one-person project with an open repo and
          published numbers. Every &ldquo;beat&rdquo; cited is a measurement,
          not a claim.
        </p>
      </Essay>

      <div className="mx-auto max-w-5xl px-5 md:px-8 mt-12 grid md:grid-cols-2 gap-5">
        <PrimitiveCard
          number="01"
          subtitle="Coordination"
          title="BTUT"
          one_liner="Phase-transition coordination on scale-free networks. Stag-Hunt + Prisoner's Dilemma under Fermi updates. Critical exponent β ≈ 0.5 (mean-field class). Constant 12-iteration convergence from 500 to 10,000 agents."
          beat="800 vehicles under peak SUMO stress, zero gridlock, 99.99% cooperation. 100% cooperation on 50 – 200 drone swarms."
          href="/btut"
        />
        <PrimitiveCard
          number="02"
          subtitle="Structure"
          title="Crystara"
          one_liner="Topological crystallization engine. Three-system loop — Stream Encoder, Energy Explorer, Module Crystallizer — that grows typed H₀/H₁/H₂ predictors from persistent homology."
          beat="+42.3% relative k-NN (k=20) over vanilla JEPA on Two Rooms; 60.8% loss reduction on CIFAR-10 ablation."
          href="/crystara"
        />
        <PrimitiveCard
          number="03"
          subtitle="Signal"
          title="NIV"
          one_liner="National Impact Velocity — a single-scalar macro-stress signal composed of thrust, efficiency, slack, and drag, built entirely from 8 public FRED series with published weights."
          beat="OOS ROC-AUC 0.847 on 25-year walk-forward (2001–2025). 3/3 recessions detected with 5.3-month average lead; yield curve 0.721, GDP growth 0.634."
          href="/niv"
        />
        <PrimitiveCard
          number="04"
          subtitle="Ingestion"
          title="Participatory Data Estate"
          one_liner="Submit → Moderate → Thin → Crystallize pipeline. Raw submissions become chunked, embedded, retrievable documents with a transparent approval ledger and hybrid pgvector + FTS retrieval."
          beat="Shipped as the governance layer of a live UNC-scale policy platform with a public approval log."
          href="/participatory-data-estate"
        />
      </div>

      <Essay>
        <h2>Reading order.</h2>
        <p>
          The chapters are ordered by the shape of the pipeline, not the
          chronology of the work. Start with <a href="/btut">BTUT</a> to see
          the reduction; read <a href="/crystara">Crystara</a> to see what you
          do with compute once coordination is free; read{" "}
          <a href="/niv">NIV</a> for a worked example of signal compression;
          read <a href="/participatory-data-estate">PDE</a> for how the
          substrate stays alive. Then <a href="/convergence">Convergence</a>{" "}
          fits them together.
        </p>
        <ChapterFooter
          prev={{ href: "/", label: "Manifesto" }}
          next={{ href: "/btut", label: "BTUT — Coordination" }}
        />
      </Essay>
    </>
  );
}
