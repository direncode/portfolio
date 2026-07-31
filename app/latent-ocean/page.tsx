import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";
import { ChapterSection, Bound, Equation } from "@/components/ChapterSection";

export const metadata = {
  title: "Latent Ocean",
  description:
    "The world's first AI systems IDE. Provenance as the composing primitive rather than an annotation; the third state made epistemic. A system that can prove a record is absent rather than merely not found.",
};

export default function LatentOceanPage() {
  return (
    <>
      <ChapterHeader
        number="I"
        label="Grounding"
        title="Latent Ocean."
        kicker="The world's first AI systems IDE — a model proposes, the estate grounds or refuses with a named reason, a steward promotes. Nothing generated, written, or evaluated."
        prev={{ href: "/thesis", label: "Representation, not scale" }}
        next={{ href: "/btut", label: "BTUT" }}
      />

      <Essay>
        <ChapterSection n={1} />
        <p>
          If this holds, an agent can be granted authority over government
          and enterprise data — because it can prove a record is{" "}
          <em>absent</em> rather than merely not found, and the refusal
          reaches the actuator.
        </p>
        <p>
          <strong>Codd&rsquo;s tuple was provenance-free.</strong> Correct
          for one trusted data bank: strip origin, gain data independence. It
          becomes a liability
          across parties that do not trust each other, because provenance
          then sits beside the data and any query skipping the join proceeds
          without it. I made provenance the composing unit — a fact as a
          rate over its lineage.
        </p>
        <Equation>{`Σ  =  fold( gate, Λ )        variance  =  ∂Base / ∂Provenance`}</Equation>
        <p>
          The algebra is closed with proven equivalence laws; variance
          composition is the set-union law. Relations are
          discovered as inclusion dependencies over shared values rather
          than declared by name, so a join nobody wrote down is still
          visible.
        </p>
        <p>
          <strong>Setun&rsquo;s third state was arithmetic.</strong> The
          1958 machine had three states per digit; the third was a number.
          SQL repeats the shape of it: NULL collapses unknown, inapplicable
          and absent into one silent token. I made the third state
          epistemic — refusal, carrying a named reason. Under Kleene
          conjunction <code>min(0,+1) = 0</code>, abstention survives
          composition instead of being swallowed.
        </p>
        <p>
          Absences are not one object. Three shrink with data and effort.
          Two do not.
        </p>
        <table>
          <thead>
            <tr><th>Class</th><th>Condition</th><th>Remedy</th></tr>
          </thead>
          <tbody>
            <tr><td>Structural</td><td>No path</td><td>Acquire a ledger</td></tr>
            <tr><td>Referential</td><td>No parent</td><td>Reconciliation</td></tr>
            <tr><td>Contradictory</td><td>Two present values</td><td>Adjudication</td></tr>
            <tr><td>Observational</td><td>Value void</td><td><strong>No remedy</strong></td></tr>
            <tr><td>Categorical</td><td>Path to a set</td><td><strong>No remedy</strong></td></tr>
          </tbody>
        </table>
        <p>
          The first three recede under investment. The last two do not move
          at any price: a value void by another party&rsquo;s legal right is
          not obtainable on this side of that boundary, and a contract funding a{" "}
          <em>programme</em> cannot be attributed to a specific{" "}
          <em>flight</em> — that link was never in the record. The
          signed proof of the irreducible residual is the durable claim.
        </p>

        <ChapterSection n={2} />
        <p>
          554 tests cover the relational successor — equivalence laws, the
          set-union composition law, lossless reform as a total partition.
          50 cover the ternary successor across two independent
          implementations, so the suite tests the specification, not one
          codebase. The energy factor of 6.99 is pinned by a zero-dependency
          golden test that fails if it moves.
        </p>
        <p>
          Absence is proven by a <strong>sorted Merkle non-membership
          proof</strong>: bracketing neighbours, an inclusion proof for each,
          the committed root, the set size, one signature. It re-derives
          offline, and a present key cannot be dressed as absent: the
          neighbours must be adjacent in the committed set and the key must
          fall strictly between them.
        </p>
        <p>
          Five estates: a refinery, an offshore field, an industrial group with an export-controlled programme provably
          sealed from the rest, aerospace on public data, and an
          energy/maritime corridor.
        </p>
        <p>
          <strong>The IDE.</strong> A model proposes a declarative spec. The
          estate grounds each element or refuses it with a named reason. A
          steward promotes what survives; that promotion is the write.
          Nothing is generated, written, or evaluated by the model. The
          surface is 11 governed MCP tools, each under the same grounding
          contract as any query.
        </p>
        <p>
          <strong>Governance lineage.</strong> The same discipline first ran
          as a participatory data estate — SGUNCCH, live UNC
          student-government infrastructure, 40 policies across 8
          departments. Retrieval there is relevance-gated: a chunk is
          admitted only if it clears a similarity threshold, otherwise the
          system returns nothing rather than the nearest text. Every
          moderation transition writes to a publicly-readable approval ledger.
        </p>

        <ChapterSection n={3} />
        <Bound>
          <p>
            No external user has run it. Five estates, all built by me.
          </p>
          <p>
            Ternary retains about 40% of full-precision accuracy on hard
            continuous data. The win is energy, not capability.
          </p>
          <p>
            The composition law is measured over 10 corpora — few domains. The
            1,404,816 triads measure sampling depth, not breadth.
          </p>
          <p>
            Not a replacement where the relational model is optimal. For
            uncontested facts in a trusted store, Codd&rsquo;s design is
            correct and this machinery is overhead.
          </p>
          <p>
            Absence is proven relative to the commitment, not absolutely.
          </p>
        </Bound>

        <ChapterSection n={4} />
        <ul>
          <li>
            <a href="https://latentocean.com/spacex/off-earth" target="_blank" rel="noopener noreferrer">
              latentocean.com/spacex/off-earth
            </a>{" "}
            — the network-cut gate. The estate refuses and names the reason
            instead of answering from cache.
          </li>
          <li>
            <a href="https://latentocean.com" target="_blank" rel="noopener noreferrer">
              latentocean.com
            </a>{" "}
            — the estate. The 11 governed MCP tools, the five estates and
            the 10 corpora behind the composition law are enumerated there.
          </li>
          <li>
            <a href="https://github.com/direncode/sguncch" target="_blank" rel="noopener noreferrer">
              github.com/direncode/sguncch
            </a>{" "}
            — the governance lineage: approval ledger, RLS policies,
            relevance-gated retrieval.
          </li>
          <li>
            Departs from Green, Karvounarakis &amp; Tannen,{" "}
            <em>Provenance Semirings</em>, PODS 2007 — there provenance
            annotates a tuple; here the composing quotient is the primitive.
          </li>
        </ul>

        <ChapterFooter
          prev={{ href: "/thesis", label: "Representation, not scale" }}
          next={{ href: "/btut", label: "BTUT" }}
        />
      </Essay>
    </>
  );
}
