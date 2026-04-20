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
        kicker="Four primitives, each with a measurable edge on a specific incumbent, and each stated at the level the evidence supports. BTUT is a new approach to DARPA Mathematical Challenge 13, shipped end-to-end across simulators, robotics, and cloud surfaces. NIV adds 41.71% orthogonal variance to the Fed yield curve on recession benchmarks, with the decomposition published. Crystara adds +20 to +36.6 AUC points to baseline JEPA across three real heterogeneous graphs, beats supervised GAT / GCN on Georgetown CSET's semiconductor supply chain, and discovers 16 interpretable modules that map 1-to-1 to real industry clusters. SGUNCCH is a participatory data estate hardened to federal-agency security patterns and shipped as working student-government infrastructure."
        prev={{ href: "/", label: "Manifesto" }}
        next={{ href: "/btut", label: "BTUT — Coordination" }}
      />

      <Essay>
        <h2>Why four, and why these four.</h2>
        <p>
          A horizontal intelligence platform needs four operations, and only
          four. It has to <strong>reduce</strong> — turn an exponential
          coordination problem into a tractable one. It has to{" "}
          <strong>crystallize</strong> — grow the right predictor instead of
          being handed one. It has to <strong>signal</strong> — compress the
          state of an enormous external system into a decision-useful scalar.
          And it has to <strong>ingest</strong> — turn a living stream of
          human input into an auditable, queryable structure.
        </p>
        <p>
          I started with the hardest of these — coordination — because if
          that is not solvable, nothing else matters. BTUT is a new
          approach to DARPA Mathematical Challenge&nbsp;13, shipped
          end-to-end across Eclipse SUMO, ROS, drone swarms, and a
          Python / REST / Lambda / WASM surface. Crystara (TCD-JEPA) is
          the structure primitive: it grows the predictor at runtime and{" "}
          <em>adds +20 to +36.6 AUC points to baseline JEPA across three
          real heterogeneous graphs</em>, with 16 discovered semiconductor
          modules validated 1-to-1 against industry clusters. NIV is
          the signal primitive: a single scalar that adds <em>41.71%
          orthogonal variance</em> beyond the Fed yield curve on
          out-of-sample recession benchmarks, with the mechanism
          decomposed and published. SGUNCCH is the ingestion primitive
          shipped as a live platform with a <em>federal-hardening
          security posture</em> — unusually hardened for a student-facing
          stack, though not independently certified against any federal
          compliance framework.
        </p>

        <h2>The four beats, stated plainly.</h2>
        <ol>
          <li>
            <strong>BTUT — DARPA Challenge 13.</strong> A new mathematical
            object (phase transition on a scale-free network, mean-field
            universality class, β ≈ 0.5) replacing the O(N³) PDE default.
            Shipped across SUMO traffic, ROS robotics, 50 – 200 drone
            swarms, Python SDK, REST API, Lambda, WASM, and a proofs
            corpus — an unusual breadth of surfaces for a
            still-young primitive.
          </li>
          <li>
            <strong>NIV — beat the Fed.</strong> Ensemble ROC-AUC{" "}
            <strong>0.8538</strong> at the 18-month horizon across a
            504-month (1970 – 2024) walk-forward with six OOS validation
            tests. <strong>98.5%</strong> false-alarm suppression — 7
            critical alerts in 42 years. Orthogonal variance versus the
            Fed 10Y – 3M spread measured at <strong>41.71%</strong>,
            mechanistically explained (capital efficiency dominates
            feature importance at Gini 0.9328; the spread scores 0.0298).
          </li>
          <li>
            <strong>Crystara — beat JEPA, across three real graphs.</strong>{" "}
            <strong>+36.6</strong> AUC pts over baseline JEPA on Georgetown
            CSET&rsquo;s 519-entity semiconductor supply chain (Crystara
            82.7% vs JEPA 46.1%); also beats supervised GAT (70.3%), GCN
            (63.9%), GraphSAGE (33.8%). +22.1 pts over JEPA on GDELT
            (Crystara 69.1%, behind GAT / GCN). +20.0 pts over JEPA on SEC
            EDGAR where GAT runs out of memory (9,725 entities, ~3.9M
            edges). <strong>16 interpretable modules</strong> discovered
            from persistent homology on Langevin trajectories, validated
            1-to-1 against real semiconductor clusters — no labels, no
            prompting.
          </li>
          <li>
            <strong>SGUNCCH — hardened student-government infrastructure.</strong>{" "}
            Time-constant admin auth, Supabase RLS on every surface,
            CSP/HSTS/X-Frame headers, rate limiting on four action
            classes, XSS detection, pgvector + FTS hybrid retrieval, and
            a publicly-readable approval ledger — patterns drawn from
            federal-agency security guidance, with no compliance
            authorization claimed. 40 policies across 8 departments. The
            Scroll, the Budget Engine, the Knowledge Base, the Chat
            layer — one hardened codebase.
          </li>
        </ol>

        <p>
          Every &ldquo;beat&rdquo; cited is a measurement from a live
          deployment or an open repository. The deep-dive chapters below
          give the numbers in full, with the mechanism alongside.
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
          beat="+36.6 AUC pts over baseline JEPA on CSET's 519-entity semiconductor supply chain; also beats supervised GAT / GCN / GraphSAGE. 16 modules 1-to-1 with real industry clusters. Scales to 9,725 entities on SEC EDGAR where GAT OOMs."
          href="/crystara"
        />
        <PrimitiveCard
          number="03"
          subtitle="Signal"
          title="NIV"
          one_liner="National Impact Velocity — a single-scalar macro-stress signal composed of thrust, efficiency, slack, and drag, built entirely from 8 public FRED series with published weights."
          beat="Ensemble ROC-AUC 0.8538 @ 18 mo across 504 months (1970–2024) and six walk-forward OOS tests. 98.5% false-alarm filter; 41.71% orthogonal variance beyond the Fed 10Y – 3M spread."
          href="/niv"
        />
        <PrimitiveCard
          number="04"
          subtitle="Ingestion"
          title="SGUNCCH"
          one_liner="Submit → Moderate → Thin → Crystallize pipeline plus a budget engine, a knowledge base, and a chat layer. Hybrid pgvector + GIN FTS retrieval. Every state transition logged in a publicly-readable approval table."
          beat="Security posture drawn from federal-agency hardening patterns: time-constant auth, Supabase RLS on every table, CSP/HSTS, rate limiting on 4 action classes, public approval ledger. Unusually hardened for a student-facing stack; no federal compliance authorization claimed."
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
