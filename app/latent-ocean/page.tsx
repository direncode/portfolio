import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";
import { SourceBar } from "@/components/SourceBar";
import { ChapterSection, Bound, Equation } from "@/components/ChapterSection";

export const metadata = {
  title: "Latent Ocean",
  description:
    "A successor to Codd and to Setun. Provenance as the composing primitive rather than an annotation; refusal as an epistemic third state rather than an arithmetic one. 554 tests on the relational successor, 50 on the ternary successor with an energy factor of 6.99 pinned by a golden test.",
};

const SOURCES = [
  {
    kind: "demo" as const,
    label: "latentocean.com/spacex/off-earth — the network-cut gate",
    href: "https://latentocean.com/spacex/off-earth",
  },
  { kind: "site" as const, label: "latentocean.com — the estate", href: "https://latentocean.com" },
];

export default function LatentOceanPage() {
  return (
    <>
      <ChapterHeader
        number="II"
        label="Inversion · Grounding"
        title="Latent Ocean."
        kicker="An agent cannot be trusted with government or enterprise data while it is unable to distinguish a record that does not exist from a record it failed to retrieve. Two settled primitives stand in the way: Codd's tuple, which is provenance-free by design, and Setun's third state, which is arithmetic. Latent Ocean inverts both."
        prev={{ href: "/primitives", label: "The Inversion" }}
        next={{ href: "/btut", label: "BTUT — Coordination" }}
      />

      <SourceBar resources={SOURCES} />

      <Essay>
        <ChapterSection numeral="I" />
        <p>
          Codd&rsquo;s 1970 relational model is provenance-free{" "}
          <em>deliberately</em>. Data independence was the point: separate
          the logical content of a relation from everything about how it
          came to be, so that queries survive changes in storage, source and
          process. It is one of the most productive abstractions in
          computing and the omission was a design decision, not an
          oversight. The consequence is that provenance is something you add
          beside the data — a lineage column, an audit table — and any query
          that does not join to it proceeds without it.
        </p>
        <p>
          Setun, built at Moscow State University in 1958, was the working
          balanced-ternary computer: three states per digit rather than two.
          But the third state was a <em>number</em>. Ternary hardware,
          binary epistemics. SQL inherited the same limitation differently —{" "}
          <code>NULL</code> collapses unknown, inapplicable and absent into
          one silent token that propagates through joins without announcing
          itself. Both inversions are the same move on two different
          primitives: <strong>make provenance the composing unit</strong>,
          and <strong>make the third state epistemic</strong> — a refusal
          that carries a reason.
        </p>

        <ChapterSection numeral="II" />
        <h3>A successor to Codd.</h3>
        <p>
          The estate composes by folding a gate over a provenance lattice
          rather than by projecting attributes out of tuples. Variance — the
          quantity that says how much a value depends on where it came from
          — is the derivative of the base value with respect to its
          provenance:
        </p>
        <Equation note="Λ is the provenance lattice; gate is the admission predicate. Relations are expressed as inclusion dependencies over shared values rather than as join keys over opaque identifiers.">
          {`Σ        =  fold( gate, Λ )

variance =  ∂Base / ∂Provenance`}
        </Equation>
        <p>
          The algebra is closed, with proven equivalence laws, and variance
          composition is the provenance set-union law — combining two
          derivations unions their provenance, and the laws hold under that
          composition. Closure is what makes this a successor rather than a
          wrapper: expressions can be rewritten and optimised without
          leaving the system or losing the guarantee.
        </p>
        <p>
          The nearest prior work is{" "}
          <strong>Green, Karvounarakis &amp; Tannen (2007)</strong>, which
          modelled provenance as semiring annotations on relational tuples
          and showed positive relational algebra is well-behaved over them —
          the reason this direction is tractable at all.{" "}
          <strong>Where this departs:</strong> in the semiring construction
          the tuple is still the primitive and provenance decorates it. Here
          the composing quotient <em>is</em> the primitive. There is no
          underlying provenance-free value for an annotation to attach to,
          so no query path can drop it and no operator can produce a value
          whose derivation the estate cannot state.
        </p>
        <h3>A successor to Setun.</h3>
        <p>
          The third state is produced by an <strong>open zero band</strong> —
          a region around zero that is not a value but an abstention.
          Quantisation maps a continuous input into the three states with a
          threshold τ that defines the band&rsquo;s width:
        </p>
        <Equation note="Conjunction is Kleene strong three-valued logic: min(0,+1) = 0. An abstention conjoined with a truth yields abstention, so the third state dominates rather than being absorbed — which is what makes it survive composition.">
          {`quantize(x, τ)  =  +1   if  x >  τ
                    0   if |x| ≤ τ        (open zero band)
                   −1   if  x < −τ

min( 0, +1 )  =  0`}
        </Equation>
        <p>
          That last line is the entire epistemic claim in one identity.
          Under Kleene conjunction an abstention combined with a true value
          yields abstention — the uncertainty propagates instead of being
          swallowed, which is precisely the behaviour <code>NULL</code>{" "}
          fails to provide. Composition is implemented as a signed lookup
          over <strong>1,404,816 measured triads</strong> rather than
          derived analytically, so the composition law is an empirical
          object the suite can check.
        </p>
        <p>
          Proving <em>absence</em> requires more than declining to return a
          row. The estate emits a{" "}
          <strong>sorted Merkle non-membership proof</strong>: the two
          bracketing neighbours of the queried key in sorted order, an
          inclusion proof for each, the committed root, the set size, and
          one signature. A verifier checks that the neighbours are adjacent
          in the committed set and that the key falls strictly between them —
          which establishes that the key is not in the set, rather than that
          the search did not find it. That distinction is the whole system.
        </p>
        <h3>The five absence classes.</h3>
        <p>
          Not all absences are the same object, and treating them as one is
          what makes a compliance layer pass silently. The estate
          distinguishes five. Three of them shrink as data and effort are
          applied. <strong>Two do not move at any price.</strong>
        </p>
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Primitive</th>
              <th>Condition</th>
              <th>Remedy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Structural</strong></td>
              <td>Schema / relation shape</td>
              <td>No relation in the estate ranges over this predicate</td>
              <td>Extend the schema</td>
            </tr>
            <tr>
              <td><strong>Referential</strong></td>
              <td>Inclusion dependency</td>
              <td>Referent absent from the target&rsquo;s active domain</td>
              <td>Resolve or retract the reference</td>
            </tr>
            <tr>
              <td><strong>Contradictory</strong></td>
              <td>Variance over provenance</td>
              <td>Sources with standing yield incompatible values under the gate</td>
              <td>Adjudication — a steward decides which source governs, or a rule ranks them</td>
            </tr>
            <tr>
              <td><strong>Observational</strong></td>
              <td>Right / legal standing</td>
              <td>The value is void to this estate by another party&rsquo;s legal right</td>
              <td><strong>None</strong> — no effort on this side obtains it</td>
            </tr>
            <tr>
              <td><strong>Categorical</strong></td>
              <td>Grain / sort</td>
              <td>The path relates to a <em>set</em>; the question asks about an <em>instance</em></td>
              <td><strong>None</strong> — the record never carried an instance-level link</td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>Contradictory absence is carried, not resolved silently.</strong>{" "}
          Where sources with standing disagree, the estate does not pick a
          winner behind the query — it carries the conflict into the answer,
          with both derivations intact, where a steward can adjudicate it or
          a ranking rule can. The coverage act in the{" "}
          <a href="https://latentocean.com/spacex/off-earth" target="_blank" rel="noopener noreferrer">
            SpaceX demonstration
          </a>{" "}
          shows exactly this. Carrying a conflict is not the same as being
          unable to resolve one.
        </p>
        <h3>The irreducible floor.</h3>
        <p>
          The first three recede under investment: extend the schema,
          resolve the referent, put the conflict in front of an authority.
          Spend more, ingest more, decide more, and the answerable set
          grows.
        </p>
        <p>
          The last two do not move. A value void to you by another
          party&rsquo;s legal right is not obtainable by any effort on your
          side of that boundary — not with a larger budget, a better
          pipeline, or more time. And a path relating a contract to a{" "}
          <em>programme</em> cannot be made to relate it to a specific{" "}
          <em>flight</em>: the instance-level link was never in the record,
          and no reconciliation manufactures one. Ever, from that data.
        </p>
        <p>
          That boundary is the <strong>irreducible floor</strong>. Above it,
          everything is a question of investment; the floor itself is a fact
          about the data. Emitting a signed proof of where it sits is the
          durable claim here — it is the one output whose value does not
          decay as an operator&rsquo;s data improves.
        </p>

        <ChapterSection numeral="III" />
        <p>
          <strong>Relational successor — 554 tests.</strong> Coverage
          includes the closed algebra&rsquo;s equivalence laws and the
          provenance set-union composition law. Lossless reform is verified
          as a <strong>total partition</strong>: reforming a relation
          partitions it completely, with every element accounted for in
          exactly one block and nothing created or dropped — the property
          that makes reform safe to apply to a live estate.
        </p>
        <p>
          <strong>Ternary successor — 50 tests, two independent
          implementations.</strong> Running one specification through two
          separately written implementations is what makes the suite
          evidence about the specification rather than about a codebase. The{" "}
          <strong>energy factor of 6.99</strong> is pinned by a{" "}
          <strong>zero-dependency golden test</strong> — no framework, no
          fixtures, nothing that could drift. The suite fails if the number
          moves. Composition rests on 1,404,816 measured triads.
        </p>
        <p>
          <strong>Five deployed estates.</strong> A refinery; an offshore
          field, where the network cut is an operating condition rather than
          a fixture; an industrial group in which an{" "}
          <strong>export-controlled programme is provably sealed</strong>{" "}
          from the rest of the group&rsquo;s estate — a property the estate
          demonstrates, not a policy the query layer is trusted to apply; an
          aerospace estate on public data, so the reasoning is externally
          checkable; and an energy/maritime corridor spanning jurisdictions
          with divergent authorities over the same facts.
        </p>
        <p>
          <strong>The network-cut gate</strong> at{" "}
          <a href="https://latentocean.com/spacex/off-earth" target="_blank" rel="noopener noreferrer">
            latentocean.com/spacex/off-earth
          </a>{" "}
          runs the estate under a severed network — the condition where
          conventional systems degrade most quietly, answering from cache
          with no sign that contact with ground truth is lost. The estate
          refuses and names the reason. Under a minute, and the shortest
          path to the whole argument.
        </p>
        <p>
          <strong>The agentic systems IDE.</strong> Nothing is generated,
          written, or evaluated by the model. It proposes a{" "}
          <em>declarative spec</em>; the estate grounds each element or
          refuses it with a named reason; a human steward promotes what
          survives, and that promotion is the write. The surface is{" "}
          <strong>11 governed MCP tools</strong> — enumerated with their
          individual grounding contracts at{" "}
          <a href="https://latentocean.com" target="_blank" rel="noopener noreferrer">
            latentocean.com
          </a>{" "}
          — each under the same contract as any query: a tool call that
          cannot be grounded returns a refusal, not a best effort.
        </p>

        <ChapterSection numeral="IV" />
        <Bound>
          <p>
            <strong>No external user has run it.</strong> Five estates
            exist and I built all five. Nothing here is a deployment report
            from an operator with their own data, their own network
            conditions and their own stewards performing promotion. That is
            the difference between demonstrated and used, and no additional
            internal work closes it.
          </p>
          <p>
            <strong>Ternary costs accuracy: roughly 40% of full-precision
            performance on hard continuous data.</strong> The win is energy,
            not capability. Anyone reading the 6.99 energy factor as a free
            improvement is reading it wrong — it is a trade, and on
            difficult continuous problems it is a steep one. The regime
            where it makes sense is one where energy or verifiability
            dominates raw accuracy.
          </p>
          <p>
            <strong>The composition law is measured over 10 corpora.</strong>{" "}
            1,404,816 triads is a large number of measurements drawn from a
            small number of corpora — the ten are enumerated with the
            measurement harness at{" "}
            <a href="https://latentocean.com" target="_blank" rel="noopener noreferrer">
              latentocean.com
            </a>
            . Generalisation beyond those domains is not established by the
            triad count, which measures depth of sampling rather than
            breadth of domain.
          </p>
          <p>
            <strong>Not a replacement where the relational model is
            optimal.</strong> For ground-truth facts in a trusted store —
            where the source is single, authoritative and uncontested —
            Codd&rsquo;s design is the correct one and the provenance
            machinery is overhead with no corresponding benefit. This is a
            successor for contested, multi-source, partially-observed
            estates, not a general replacement.
          </p>
          <p>
            <strong>554 and 50 are coverage, not adoption.</strong> They
            describe how thoroughly two successors are exercised by their
            own suites. They say nothing about behaviour under an
            adversary, at scale, or on data I did not choose.
          </p>
          <p>
            <strong>What would falsify it:</strong> a case where the estate
            grounds a claim whose provenance does not in fact support it, or
            a non-membership proof that verifies for a key that is present.
            Either breaks the guarantee at its root.
          </p>
        </Bound>

        <ChapterSection numeral="V" />
        <p>
          If it holds, an agent can be permitted to act on enterprise and
          government data, because for the first time it can prove a record
          is <em>absent</em> rather than merely not retrieved — and the
          refusal survives to the actuator instead of being flattened into
          an empty result somewhere in the middle.
        </p>
        <p>
          The consequential failure in agentic deployment is not the
          hallucinated fact, which is visible and gets caught. It is the
          silent pass: a compliance layer that returns clean because no rule
          in it covers the case in front of it, unable to distinguish{" "}
          <em>this was checked and is fine</em> from{" "}
          <em>nothing here knows how to check this</em>.
        </p>
        <p>
          The commercial form of that is the floor. An organisation that
          cannot separate absence classes cannot tell which of its reporting
          gaps are underfunded and which are impossible, so it funds all of
          them or none. A signed floor turns that into a budget decision —
          and the proof is portable to a regulator or auditor who asks why a
          gap was never closed.
        </p>
        <p>
          This matters to any government converting operations to agentic AI
          — where what an automated system was permitted to conclude
          eventually becomes a legal question — and to any organisation
          whose compliance layer passes silently. Regulators, programmes
          with compartmentalisation requirements, process operators whose
          actuators are physical, and multi-jurisdiction operations where
          two authorities assert different facts about the same object.
        </p>

        <ChapterSection numeral="VI" />
        <ul>
          <li>
            <a href="https://latentocean.com/spacex/off-earth" target="_blank" rel="noopener noreferrer">
              latentocean.com/spacex/off-earth
            </a>{" "}
            — the network-cut gate. Refusal under a severed network,
            propagating with a named reason.
          </li>
          <li>
            <a href="https://latentocean.com" target="_blank" rel="noopener noreferrer">
              latentocean.com
            </a>{" "}
            — the estate: the closed algebra, the absence classes, the
            ternary successor, the governed MCP surface, and the five
            deployed estates.
          </li>
          <li>
            Prior work this departs from: T. J. Green, G. Karvounarakis and
            V. Tannen, <em>Provenance Semirings</em>, PODS 2007 — provenance
            as semiring annotations over relational tuples. The departure is
            stated in section II.
          </li>
        </ul>

        <ChapterFooter
          prev={{ href: "/primitives", label: "The Inversion" }}
          next={{ href: "/btut", label: "BTUT — Coordination" }}
        />
      </Essay>
    </>
  );
}
