import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";
import { ChapterSection, Bound, Equation } from "@/components/ChapterSection";

export const metadata = {
  title: "Latent Ocean",
  description:
    "A successor to Codd and to Setun. Provenance as the composing unit; refusal as the third state. An estate that can prove a record is absent rather than unfound.",
};

export default function LatentOceanPage() {
  return (
    <>
      <ChapterHeader
        number="I"
        label="Grounding"
        title="Latent Ocean."
        kicker="Provenance as the composing unit. Refusal as the third state."
        next={{ href: "/btut", label: "BTUT" }}
      />

      <Essay>
        <ChapterSection n={1} />
        <p>
          If this holds, an agent can be trusted with government and
          enterprise data. It can prove a record is <em>absent</em> rather
          than merely unfound, and the refusal reaches the actuator.
        </p>
        <p>
          <strong>Codd&rsquo;s tuple is provenance-free.</strong> That was
          deliberate — data independence was the point. The cost: provenance
          sits beside the data, so any query skipping the join proceeds
          without it. I made provenance the composing unit. A value the
          estate cannot trace is not returned.
        </p>
        <Equation>{`Σ  =  fold( gate, Λ )        variance  =  ∂Base / ∂Provenance`}</Equation>
        <p>
          <strong>Setun&rsquo;s third state was arithmetic.</strong> The
          1958 machine had three states per digit; the third was a number.
          SQL repeats the mistake: NULL collapses unknown, inapplicable and
          absent into one token. I made the third state refusal, with a
          named reason. Under Kleene conjunction{" "}
          <code>min(0,+1) = 0</code>, abstention survives composition
          instead of being swallowed.
        </p>
        <p>
          Proving absence takes more than an empty result. The estate emits
          a sorted Merkle non-membership proof — bracketing neighbours,
          inclusion proofs, committed root, set size, one signature. The
          verifier confirms the key falls between two adjacent committed
          entries.
        </p>
        <p>
          Absences are not one object. Three of five shrink with effort. Two
          never do.
        </p>
        <table>
          <thead>
            <tr><th>Class</th><th>Condition</th><th>Remedy</th></tr>
          </thead>
          <tbody>
            <tr><td>Structural</td><td>No relation covers this predicate</td><td>Extend the schema</td></tr>
            <tr><td>Referential</td><td>Referent absent from target domain</td><td>Resolve the reference</td></tr>
            <tr><td>Contradictory</td><td>Sources with standing disagree</td><td>Adjudication</td></tr>
            <tr><td>Observational</td><td>Void by another party&rsquo;s legal right</td><td><strong>None</strong></td></tr>
            <tr><td>Categorical</td><td>Path relates to a set, not an instance</td><td><strong>None</strong></td></tr>
          </tbody>
        </table>
        <p>
          A contradiction is carried into the answer with both derivations
          intact, never resolved silently. A contract funding a{" "}
          <em>programme</em> cannot be attributed to a specific{" "}
          <em>flight</em> — that link was never in the record. That
          boundary is the irreducible floor. Above it, everything is a
          budget question. Below it, nothing is. A signed proof of where it
          sits does not decay as an operator&rsquo;s data improves.
        </p>

        <ChapterSection n={2} />
        <p>
          554 tests cover the relational successor — equivalence laws, the
          provenance set-union composition law, and lossless reform as a
          total partition.
        </p>
        <p>
          50 tests cover the ternary successor, run through two independent
          implementations — so the suite tests the specification, not one
          codebase. The energy factor of 6.99 is pinned by a
          zero-dependency golden test that fails if it moves. Composition
          rests on 1,404,816 triads across 10 corpora.
        </p>
        <p>
          Five estates are deployed: refinery, offshore field, an industrial
          group with an export-controlled programme provably sealed from
          the rest, aerospace on public data, energy/maritime corridor.
        </p>
        <p>
          The network-cut gate runs the estate under a severed network,
          where conventional systems answer from cache and give no sign
          they have lost ground truth. It refuses and names the reason.
        </p>

        <ChapterSection n={3} />
        <Bound>
          <p>
            No external user has run it. Five estates, all built by me.
          </p>
          <p>
            Ternary costs accuracy — roughly 40% of full precision on hard
            continuous data. The win is energy, not capability.
          </p>
          <p>
            10 corpora is few domains. The triad count measures sampling
            depth, not breadth.
          </p>
          <p>
            Not a replacement where the relational model is optimal. For
            uncontested facts in a trusted store, Codd&rsquo;s design is
            correct and this is overhead.
          </p>
        </Bound>

        <ChapterSection n={4} />
        <ul>
          <li>
            <a href="https://latentocean.com/spacex/off-earth" target="_blank" rel="noopener noreferrer">
              latentocean.com/spacex/off-earth
            </a>{" "}
            — the network-cut gate.
          </li>
          <li>
            <a href="https://latentocean.com" target="_blank" rel="noopener noreferrer">
              latentocean.com
            </a>{" "}
            — the estate. The 11 governed MCP tools and the 10 corpora are
            enumerated there.
          </li>
          <li>
            Departs from Green, Karvounarakis &amp; Tannen,{" "}
            <em>Provenance Semirings</em>, PODS 2007 — there provenance
            annotates a tuple; here the composing quotient is the
            primitive.
          </li>
        </ul>

        <ChapterFooter next={{ href: "/btut", label: "BTUT" }} />
      </Essay>
    </>
  );
}
