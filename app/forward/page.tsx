import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";
import { Callout } from "@/components/Callout";

export const metadata = {
  title: "Forward Direction",
  description:
    "Scaling, sovereign integration potential, and inference-time substrate alignment — what the Latent Ocean becomes next.",
};

export default function ForwardPage() {
  return (
    <>
      <ChapterHeader
        number="VIII"
        label="Chapter"
        title="Forward Direction."
        kicker="Where the four primitives are headed, and what the Latent Ocean becomes once the composition is load-bearing."
        prev={{ href: "/about", label: "About / Context" }}
      />

      <Essay>
        <h2>Scaling, without going vertical.</h2>
        <p>
          The scaling story for this stack is not more parameters. It is
          more primitives. Each new addition has to clear the same bar:
          linear-time or better, composable with the other three,
          transparent, auditable, validated. The roadmap below is the next
          round of primitives and the operations that connect them.
        </p>

        <h3>Near-term — compounding the four.</h3>
        <ul>
          <li>
            <strong>BTUT × Crystara.</strong> Use BTUT-coordinated workers
            as the energy explorers inside Crystara&rsquo;s System 2.
            Linear-time coordination over a fleet of samplers is the
            cheapest way to fill in the blank-space map that the module
            crystallizer reads from.
          </li>
          <li>
            <strong>Crystara × NIV.</strong> NIV is the first emitted
            scalar. The recipe transfers: run Crystara&rsquo;s H₀/H₁/H₂
            pipeline on macro / monetary / energy manifolds, project stable
            features down to named, interpretable scalars. Each scalar
            publishes with its walk-forward validation out of the box.
          </li>
          <li>
            <strong>PDE × everything.</strong> Every primitive produces
            evidence. PDE is the canonical sink: submissions, approvals,
            chunks, embeddings, audit trail. Treating BTUT simulation
            traces and Crystara module genealogies as governance-grade
            documents — ingested through the same pipeline as the
            constitution — is cheap and it makes the whole stack
            walk-backable.
          </li>
        </ul>

        <h3>Mid-term — new primitives.</h3>
        <ul>
          <li>
            <strong>A planner primitive.</strong> Once coordination is
            free, planning over coordinated agents is the next linear-time
            problem. The target is a narrow, transparent planner with the
            same auditability contract as NIV.
          </li>
          <li>
            <strong>A memory primitive.</strong> PDE is stateful at the
            document level. The next layer is stateful at the session level
            — a retrieval substrate that composes cleanly with Crystara
            modules. Still content-addressable, still auditable.
          </li>
          <li>
            <strong>An observer primitive.</strong> Every primitive should
            publish its own diagnostics as a first-class artifact. The
            observer primitive is the one that ingests those diagnostics
            and emits liveness signals across the stack.
          </li>
        </ul>

        <h2>Sovereign integration potential.</h2>
        <p>
          A non-trivial fraction of the customers for a substrate like this
          are governments, regulators, and public institutions — groups
          that cannot use frontier-lab APIs for legal, compliance, or
          sovereignty reasons. The Latent Ocean was designed to meet them
          where they are: open source, auditable, deployable on commodity
          hardware, every scalar signal published with its construction.
          PDE&rsquo;s transparent approval log is, in effect, an
          FOIA-native architecture. A single Fly.io region handles a
          million-agent BTUT simulation. Crystara runs on 3–8 GPUs for
          manifold-scale datasets.
        </p>
        <p>
          This is not a frontier lab in miniature. It is a different shape
          of AI infrastructure — narrow, composable, inspectable — suited
          for contexts where the deciding factor is provenance, not
          benchmark points.
        </p>

        <h2>Inference-time substrate alignment.</h2>
        <p>
          When alignment is framed as a training-time problem, the only
          available levers are RLHF-style. When alignment is framed as an
          inference-time problem — which is what the Latent Ocean
          assumes — the levers multiply: the approval ledger, the typed
          module router, the transparent signal formulas, the hybrid
          vector+FTS retrieval contract with public provenance. None of
          those levers require retraining a frontier model. They require
          primitives that are composable and auditable by construction.
        </p>
        <p>
          This is where I think the serious work is going. The horizontal
          stack is not a personal preference; it is the only stack whose
          alignment surface is <em>readable</em> in the first place.
        </p>

        <Callout label="What I am looking for">
          Collaborators who care about primitives. Reviewers who will read
          proofs at the level of the repo. Institutional partners —
          research groups, student governments, municipal agencies — with a
          real substrate that needs ingestion, coordination, signal, or
          structure. If any of the four primitives fits a problem you are
          holding, I want to hear about it.
        </Callout>

        <ChapterFooter
          prev={{ href: "/about", label: "About / Context" }}
        />
      </Essay>
    </>
  );
}
