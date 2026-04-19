import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";
import { ConvergenceDiagram } from "@/components/ConvergenceDiagram";
import { Callout } from "@/components/Callout";

export const metadata = {
  title: "Convergence & Architecture",
  description:
    "How the four primitives feed the single Latent Ocean engine: reduction → crystallization → signal → living ingestion.",
};

export default function ConvergencePage() {
  return (
    <>
      <ChapterHeader
        number="VI"
        label="Chapter"
        title="Convergence &amp; Architecture."
        kicker="Four primitives are interesting on their own. They are only a platform once they compose. This chapter is the composition argument — how reduction, crystallization, signal, and living ingestion become one engine."
        prev={{ href: "/participatory-data-estate", label: "PDE — Ingestion" }}
        next={{ href: "/about", label: "About / Context" }}
      />

      <div className="mx-auto max-w-5xl px-5 md:px-8 mt-10">
        <ConvergenceDiagram />
        <p className="text-[13px] text-ink-500 mt-3 max-w-measure">
          Fig. VI · Four primitives converge into Latent Ocean. Reduction
          (BTUT) and crystallization (Crystara) upstream of a signal (NIV)
          and an ingestion surface (PDE). The engine is the composition,
          not any one node.
        </p>
      </div>

      <Essay>
        <h2>The four operations, in one sentence each.</h2>
        <ul>
          <li>
            <strong>BTUT — reduce.</strong> Turn an O(N³) PDE coordination
            problem into an O(N) kernel-weighted contraction.
          </li>
          <li>
            <strong>Crystara — crystallize.</strong> Turn a fixed JEPA
            predictor into a runtime-grown family of H₀/H₁/H₂ modules, typed
            by persistent homology.
          </li>
          <li>
            <strong>NIV — signal.</strong> Turn dozens of macro variables into
            a single, transparent, economically interpretable, walk-forward
            validated scalar.
          </li>
          <li>
            <strong>PDE — ingest.</strong> Turn arbitrary human submissions
            into an auditable, vector+FTS-retrievable, approval-logged
            knowledge substrate.
          </li>
        </ul>

        <h2>The composition.</h2>
        <p>
          Picture the Latent Ocean as a wide, shallow plane of operations.
          Every primitive is a region of the plane; every edge is a piece of
          data flowing between them.
        </p>
        <ol>
          <li>
            <strong>BTUT lowers the floor.</strong> Coordination is no longer
            a compute bottleneck. One million agents, one node, under ten
            seconds. This is the assumption the rest of the stack depends on.
          </li>
          <li>
            <strong>Crystara spends that surplus.</strong> Because
            coordination is linear, inference-time compute can be used to
            explore blank spaces in the predictor&rsquo;s energy landscape,
            run persistent homology on the trajectories, and grow typed
            modules out of the stable features. The predictor grows into the
            shape of the data.
          </li>
          <li>
            <strong>NIV is what crystallized structure looks like when
            projected to a scalar.</strong> The same logic — known
            primitives, transparent weights, orthogonal information — is the
            recipe for every external signal the Ocean will emit. NIV is the
            first instance; monetary, energy-grid, and supply-chain signals
            follow the same template.
          </li>
          <li>
            <strong>PDE keeps the substrate alive.</strong> Submissions flow
            in through Submit → Moderate → Thin → Crystallize. The approval
            log makes the provenance chain queryable. The knowledge base is
            not a snapshot; it is a living document.
          </li>
        </ol>

        <h2>Data flow.</h2>
        <pre>{`[ submissions ] ─► PDE ─► chunked, embedded,
                         approval-logged corpus
                              │
                              ▼
        [ BTUT-coordinated workers crystallize modules ]
                              │
                              ▼
                  Crystara: H₀ / H₁ / H₂ predictors
                              │
                              ▼
                  projections → scalar signals (NIV class)
                              │
                              ▼
                       external systems
                    (policy, macro, grid, …)`}</pre>

        <h2>Why this is &ldquo;horizontal.&rdquo;</h2>
        <p>
          The dominant scaling story of the last five years is vertical.
          Bigger transformers, more tokens, more chips. That story is real,
          and it works, and it is also overwhelmingly capital-constrained —
          the only people who can play are the people who already have the
          cluster.
        </p>
        <p>
          Horizontal intelligence is the other direction. A primitive earns
          its place by being composable, auditable, and reducible. A stack
          of four such primitives — coordination, structure, signal,
          ingestion — reaches the surface area of a platform without ever
          pretending to reach the scale of a frontier lab. The compute bill
          is small because the primitives do the work.
        </p>

        <Callout label="The reduction argument">
          Vertical scaling assumes the hard part is scale. Horizontal
          scaling assumes the hard part is the primitive. If the primitive
          is right — linear, composable, transparent — a single person can
          build the substrate. That is the bet.
        </Callout>

        <h2>Inference-time substrate.</h2>
        <p>
          Latent Ocean is not a model. It is an inference-time substrate:
          coordination is on demand, module crystallization is on demand,
          signals are emitted on demand, the knowledge base is fed on
          demand. The heavy training runs live inside Crystara and inside
          the NIV walk-forward framework, but every external interface is a
          fast, narrow, well-typed contract.
        </p>
        <p>
          The interesting consequence is that the substrate does not belong
          to any one model class. It is language-model-agnostic, it is
          planner-agnostic, it is observer-agnostic. The four primitives
          are the interface.
        </p>

        <ChapterFooter
          prev={{ href: "/participatory-data-estate", label: "PDE — Ingestion" }}
          next={{ href: "/about", label: "About / Context" }}
        />
      </Essay>
    </>
  );
}
