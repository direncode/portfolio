import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";
import { ConvergenceDiagram } from "@/components/ConvergenceDiagram";
import { ChapterSection, Bound, Equation } from "@/components/ChapterSection";

export const metadata = {
  title: "Convergence & Architecture",
  description:
    "Why five inversions are one system rather than five projects — and an explicit account of which couplings are built and which are proposed.",
};

export default function ConvergencePage() {
  return (
    <>
      <ChapterHeader
        number="VII"
        label="Chapter"
        title="Convergence &amp; Architecture."
        kicker="Five systems across five fields invites the obvious objection: that this is five projects with a narrative laid over them. This chapter is the argument that it is one system — and an explicit account of which couplings are actually wired and which are currently only proposed."
        prev={{ href: "/participatory-data-estate", label: "Participatory Data Estate" }}
        next={{ href: "/about", label: "About / Context" }}
      />

      <div className="mx-auto max-w-5xl px-5 md:px-8 mt-10">
        <ConvergenceDiagram />
        <p className="text-[13px] text-ink-500 mt-3 max-w-measure">
          Fig. VII · Four systems feed the grounding layer. Every node links
          to its live site or repository. The diagram states the intended
          architecture; section IV states how much of it is built.
        </p>
      </div>

      <Essay>
        <ChapterSection numeral="I" />
        <p>
          The assumption worth attacking here is my own. A portfolio
          spanning macroeconomics, representation learning, multi-agent
          mathematics and data governance is presumed to be five separate
          efforts, and the presumption is usually correct — breadth at this
          stage normally means unfinished depth.
        </p>
        <p>
          The claim is that it inverts: these are five applications of one
          move, and the move produces systems that fit together because
          refusing a settled primitive has the same downstream consequence
          every time. Each inversion yields something smaller, more
          inspectable and more falsifiable than the thing it replaced — a
          signal with published weights, a predictor with typed modules, a
          coordination kernel with a closed-form exponent, an estate that
          declines rather than guesses, a corpus whose moderation is public.
          Systems built to that discipline compose; systems built for
          benchmark position generally do not.
        </p>

        <ChapterSection numeral="II" />
        <p>
          Five operations, in dependency order.
        </p>
        <ul>
          <li>
            <strong>Coordination (BTUT)</strong> — turn an O(N³) coupled
            formulation into an O(N) contraction. This sets the floor: it
            decides how much parallel work the rest of the stack can afford
            to spend at inference time.
          </li>
          <li>
            <strong>Structure (Crystara)</strong> — spend that surplus
            discovering where a predictor is wrong and growing typed
            modules there, rather than widening a fixed head.
          </li>
          <li>
            <strong>Signal (NIV)</strong> — project discovered structure
            down to a scalar an external party can consume, with the
            construction published rather than described.
          </li>
          <li>
            <strong>Ingestion (Participatory Data Estate)</strong> — keep
            the corpus current and its moderation public, so the substrate
            is a live document rather than a snapshot.
          </li>
          <li>
            <strong>Grounding (Latent Ocean)</strong> — decide what the
            system is permitted to <em>say</em>: ground a claim in traceable
            provenance, or refuse it with a named reason that survives to
            the actuator.
          </li>
        </ul>
        <p>
          Grounding is last because it is the one that makes the others
          safe to act on. Coordination, structure, signal and ingestion
          together produce a fast, well-organised, current system that still
          cannot distinguish an absent record from an unretrieved one.
          Without the fifth, the first four are a better retrieval stack.
          With it, they are something an operator can attach to an actuator.
        </p>
        <Equation note="The intended data flow. Section III states which of these arrows exist as running code.">
          {`[ submissions ] ─► Participatory Data Estate
                          approval-logged, chunked, embedded
                                    │
                                    ▼
             [ BTUT-coordinated workers crystallise modules ]
                                    │
                                    ▼
                     Crystara: typed H₀ / H₁ / H₂ predictors
                                    │
                                    ▼
                     projections ─► scalar signals (NIV class)
                                    │
                                    ▼
                  Latent Ocean: ground it, or refuse with a reason
                                    │
                                    ▼
                              external systems`}
        </Equation>

        <ChapterSection numeral="III" />
        <p>
          <strong>What is shared and demonstrated.</strong> The design
          discipline is real and visible in each repository: published
          weights and parameters rather than described ones; typed,
          inspectable intermediate objects rather than latent ones; a stated
          bound on every claim; and a refusal-over-guess default, which
          appears independently in Latent Ocean&rsquo;s absence classes and
          in the Participatory Data Estate&rsquo;s relevance gate. That
          convergence was not retrofitted — the two systems were built
          months apart and arrived at the same rule.
        </p>
        <p>
          <strong>What is shared at the data layer.</strong> Crystara and
          Latent Ocean both operate over heterogeneous entity graphs drawn
          from the same public sources — SEC EDGAR appears as a Crystara
          benchmark and as an estate domain. The adapters are common
          infrastructure rather than parallel implementations.
        </p>
        <p>
          <strong>What runs end-to-end today.</strong> Each of the five runs
          as an independent system with its own deployment: five Latent
          Ocean estates, six BTUT applied domains, the Crystara training
          stack, the NIV live dashboard, and SGUNCCH.
        </p>

        <ChapterSection numeral="IV" />
        <Bound>
          <p>
            <strong>Most of the couplings in the diagram are proposed, not
            wired.</strong> Specifically:
          </p>
          <ul>
            <li>
              <strong>BTUT × Crystara</strong> — using BTUT-coordinated
              workers as the energy explorers inside Crystara&rsquo;s
              System 2 is <em>proposed</em>. Crystara&rsquo;s explorer
              currently runs its own sampling. No BTUT code is in that path.
            </li>
            <li>
              <strong>Crystara × NIV</strong> — running the H₀/H₁/H₂
              pipeline over macro manifolds to emit further scalars is{" "}
              <em>proposed</em>. NIV was constructed directly, not
              crystallised out of a Crystara run, and the &ldquo;same
              recipe&rdquo; claim for future signals is an argument rather
              than a demonstration.
            </li>
            <li>
              <strong>Participatory Data Estate × everything</strong> —
              ingesting BTUT simulation traces and Crystara module
              genealogies as governance-grade documents is{" "}
              <em>proposed</em>. Today the estate ingests governance
              documents only.
            </li>
            <li>
              <strong>Four → Latent Ocean</strong> — the estates are built
              on the grounding layer directly. They do not currently consume
              BTUT coordination, Crystara modules, or NIV signals as inputs.
            </li>
          </ul>
          <p>
            <strong>So the honest statement is:</strong> five systems built
            to one discipline, sharing data adapters and design rules,
            converging independently on the same refusal default — and a
            composition argument that is largely unbuilt. The diagram is
            architecture, not a deployment topology. Anyone evaluating this
            should treat &ldquo;Latent Ocean is where the other four
            land&rdquo; as a design intent with two of its arrows
            implemented at the level of shared infrastructure and none at
            the level of runtime data flow.
          </p>
          <p>
            <strong>What would falsify the convergence claim:</strong> if
            wiring any one of these couplings required abandoning a design
            rule in either system — if, say, feeding Crystara modules into
            an estate turned out to require dropping provenance — the claim
            that they are one system would be wrong, and they really would
            be five projects.
          </p>
        </Bound>

        <ChapterSection numeral="V" />
        <p>
          If the composition holds, the result is an inference-time
          substrate rather than a model: coordination on demand, module
          crystallisation on demand, signals emitted on demand, the corpus
          fed continuously, and every output either grounded or refused.
          Nothing in that description requires retraining a frontier model,
          which is what makes it available to institutions that cannot
          commission one.
        </p>
        <p>
          The consequence for alignment is the part I think is
          underappreciated. Framed as a training-time problem, the available
          levers are RLHF-shaped. Framed as an inference-time problem, the
          levers multiply and become inspectable: the approval ledger, the
          typed module router, published signal construction, the retrieval
          contract, and the refusal that survives to the actuator. A stack
          whose alignment surface is readable is a different object from one
          whose alignment is a property of weights.
        </p>

        <ChapterSection numeral="VI" />
        <ul>
          <li>
            Each system&rsquo;s sources are listed in section VI of its own
            chapter: <a href="/latent-ocean">Latent Ocean</a>,{" "}
            <a href="/btut">BTUT</a>, <a href="/crystara">Crystara</a>,{" "}
            <a href="/niv">NIV</a>,{" "}
            <a href="/participatory-data-estate">Participatory Data Estate</a>.
          </li>
          <li>
            The claims in section III about shared adapters and shared
            design rules are checkable in the respective repositories. The
            claims in section IV about unbuilt couplings are checkable by
            their absence from those same repositories.
          </li>
        </ul>

        <ChapterFooter
          prev={{ href: "/participatory-data-estate", label: "Participatory Data Estate" }}
          next={{ href: "/about", label: "About / Context" }}
        />
      </Essay>
    </>
  );
}
