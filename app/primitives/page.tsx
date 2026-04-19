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
          one_liner="Linear-time multi-agent coordination primitive. Kernel-weighted mean-field dynamics converge in ~20 iterations regardless of N. 1,000,000 agents in 9.5s on a Fly.io API node."
          beat="20× MASON, 105× Mesa. NetLogo crashes at 100K. Targets DARPA Mathematical Challenge 13."
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
          one_liner="National Impact Velocity — a single-scalar macro-stress signal built transparently from thrust, efficiency, slack, and drag primitives, with walk-forward OOS validation."
          beat="OOS AUC 0.854 at 18 months; orthogonal information vs. Fed yield spread (76% partial correlation)."
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
