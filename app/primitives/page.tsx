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
        kicker="Four primitives. Four incumbents outmeasured on their own benchmarks. BTUT is a new, cross-domain approach to DARPA Mathematical Challenge 13 — one mathematical object shipped across six live applied domains: traffic simulators, robot fleets, drone swarms, civic data (franklinstreetdata.com), game modeling (bigdunc.com), and four production cloud surfaces. NIV beats the Fed yield curve on several recession benchmarks, with 41.71% orthogonal variance the yield spread cannot see and the full paper published. Crystara beats vanilla JEPA everywhere it has been tested — three real heterogeneous graphs, +20 to +36.6 AUC points — and beats supervised GAT (DeepMind), GCN (Google Brain), and GraphSAGE on Georgetown CSET's semiconductor supply chain; along the way it discovers 16 interpretable modules that map 1-to-1 to real industry clusters, with no labels and no prompting. SGUNCCH is a participatory data estate with a security posture student government has never needed, and has never had. Every claim on this chapter has a table, a tear sheet, or a repo directly underneath it."
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
          approach to DARPA Mathematical Challenge&nbsp;13, and{" "}
          <em>cross-domain-comprehensive</em> in a way no other
          Challenge-13-style attempt I can point to currently is: one
          primitive, shipped across Eclipse SUMO traffic, ROS robot
          fleets, drone swarms, and a Python / REST / Lambda / WASM
          production surface. Crystara (TCD-JEPA) is the structure
          primitive: it grows its own predictor at runtime and{" "}
          <em>beats vanilla JEPA everywhere it has been tested</em> —
          three real heterogeneous graphs, +20 to +36.6 AUC points — and
          also beats supervised GAT, GCN, and GraphSAGE on the CSET
          semiconductor supply chain. NIV is the signal primitive: a
          single scalar that <em>beats the Fed yield curve on several
          recession benchmarks</em>, with 41.71% orthogonal variance
          the spread cannot see and the mechanism decomposed and
          published. SGUNCCH is the ingestion primitive shipped as a
          live platform with a <em>security posture student government
          has never needed — and, I&rsquo;d argue, has never had</em>.
          No FedRAMP claim attached; the posture is simply here.
        </p>

        <h2>The four beats, stated plainly.</h2>
        <ol>
          <li>
            <strong>BTUT — DARPA Challenge 13, cross-domain
            comprehensive.</strong> A new mathematical object (phase
            transition on a scale-free network, mean-field universality
            class, β ≈ 0.5) replacing the O(N³) PDE default. One
            primitive, six live applied domains: traffic (Eclipse SUMO,
            800-vehicle peak stress, zero gridlock), robotics (ROS /
            Turtlebot3), drone swarms (50 – 200 drones, 100%
            cooperation), civic data (franklinstreetdata.com), game
            modeling (bigdunc.com), and four production cloud surfaces
            (Python SDK, REST, Lambda, WASM). Constant 12-iteration
            convergence from 500 to 10,000 agents.
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
            <strong>Crystara — beat JEPA, and supervised GNNs.</strong>{" "}
            <strong>+36.6</strong> AUC pts over baseline JEPA on
            Georgetown CSET&rsquo;s 519-entity semiconductor supply chain
            (Crystara 82.7% vs JEPA 46.1%); also beats supervised GAT
            (DeepMind, 70.3%), GCN (Google Brain, 63.9%), and GraphSAGE
            (33.8%). +22.1 pts over JEPA on GDELT. +20.0 pts over JEPA on
            SEC EDGAR at 9,725 entities / ~3.9M edges, where GAT runs out
            of memory. <strong>16 interpretable modules</strong>{" "}
            crystallized from persistent homology on Langevin
            trajectories, validated 1-to-1 against real semiconductor
            clusters — no labels, no prompting. To my knowledge, the
            first runtime-discovered predictor for the JEPA family.
          </li>
          <li>
            <strong>SGUNCCH — the posture student government has never
            had.</strong>{" "}
            Time-constant admin auth, Supabase RLS on every surface,
            CSP/HSTS/X-Frame headers, rate limiting on four action
            classes, XSS detection, pgvector + FTS hybrid retrieval, and
            a publicly-readable approval ledger — patterns drawn from
            federal-agency security guidance, shipped in live
            student-government infrastructure. No FedRAMP claim
            attached; the point is that the stack is here, in
            production. 40 policies across 8 departments. The Scroll,
            the Budget Engine, the Knowledge Base, the Chat layer — one
            hardened codebase.
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
          beat="Beats vanilla JEPA everywhere tested: +36.6 pts on CSET's 519-entity semiconductor supply chain — also beats supervised GAT (DeepMind), GCN (Google Brain), GraphSAGE. +22.1 pts on GDELT. +20.0 pts at 9,725-entity SEC EDGAR scale where GAT OOMs. 16 modules 1-to-1 with real industry clusters."
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
          beat="A security posture student government has never needed — and, to my knowledge, has never had. Time-constant auth, Supabase RLS on every table, CSP/HSTS, rate limiting on 4 action classes, XSS detection, public approval ledger. No FedRAMP claim attached; the posture is simply here."
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
