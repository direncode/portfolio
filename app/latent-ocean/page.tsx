import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";
import { ChapterSection, Bound, Equation } from "@/components/ChapterSection";

export const metadata = {
  title: "Latent Ocean",
  description:
    "The world's first agentic systems IDE. A successor to Codd (554 tests) and to Setun (50 tests, energy factor 6.99). Provenance as the composing primitive; the third state made epistemic. Absence proven, not asserted.",
};

export default function LatentOceanPage() {
  return (
    <>
      <ChapterHeader
        number="I"
        label="Grounding"
        title="Latent Ocean."
        kicker="The world's first agentic systems IDE. A model proposes a declarative spec, the estate grounds or refuses it with a named reason, a steward promotes. Nothing generated, nothing written to disk, nothing evaluated."
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

        <h3>A successor to Codd (1970)</h3>
        <p>
          Codd&rsquo;s relational model is four things, and a successor has
          to answer all four: one uniform data structure, a closed algebra
          with equivalence laws, a decomposition theory, and data
          independence. Its primitive — the tuple — was deliberately
          provenance-free. In 1970 that was correct; it bought data
          independence for a single trusted data bank. Where knowledge is
          derived by machines across parties that do not trust each other,
          a provenance-free fact is the liability.
        </p>
        <p>
          The served state is a signed fold over an ordered provenance log,
          and a fact is a <em>rate</em> over that lineage — the novel signal
          it introduces over the distinct sources that produced it.
        </p>
        <Equation>{`Σ  =  fold( gate, Λ )

variance  =  ∂Base / ∂Provenance`}</Equation>
        <p>
          The state cannot change without a signed log event. Every layer is
          doubly signed and verifies offline, with the derivative bound to
          the live state. Codd assumed a trusted engine around the data;
          this assumes none. Relationships are discovered by the values two
          columns share — inclusion dependencies — not by column name.
        </p>
        <p>
          Three theorems close the gaps on Codd&rsquo;s own ground.{" "}
          <strong>Declarative access:</strong> a submodule is reached by a
          predicate over its fields with its anchor returned as output, path
          independent and invariant under order.{" "}
          <strong>A closed algebra:</strong> join, union, project and select
          closed over the relation, with proven laws — the central one being
          that variance composition is the provenance set-union law.{" "}
          <strong>Lossless reform:</strong> restructuring routes every
          unmatched record to a residual, making reform a total partition.
        </p>

        <h3>A successor to Setun (1958)</h3>
        <p>
          Sobolev and Brusentsov built Setun at Moscow State University;
          fifty were made between 1959 and 1965. Its primitive, the trit,
          was arithmetic — a digit whose third state was the number zero.
          Binary won, and it won fairly: the extra state bought density, and
          density got cheap. Where decisions are derived by machines over
          evidence that is routinely insufficient, the third state has a job
          two values cannot do at all. It carries the refusal to decide.
        </p>
        <Equation>{`quantize(x, τ)  =  +1   if  x >  τ
                    0   if |x| ≤ τ        open zero band
                   −1   if  x < −τ

Kleene conjunction:   min( 0, +1 )  =  0`}</Equation>
        <p>
          τ adapts per attribute, so criticality widens the refusal. The
          neutral absorbs from above: no quantity of conforming evidence
          raises a marginal unit to release. Two-valued logic has no such
          element, so a marginal fact is forced to a side — silently passed
          or falsely failed. The gate is algebraic, not a policy a later
          layer can decline.
        </p>
        <p>
          Five theorems, each with a passing test or a signed artifact.{" "}
          <strong>The neutral is non-erasable.</strong>{" "}
          <strong>The empty conjunction is not vacuously true</strong> —
          Boolean AND over an empty rule set returns true, so every binary
          compliance system silently passes any case no rule covers; here
          the empty aggregate is 0 and routes to a human.{" "}
          <strong>Composition is measured, not assumed.</strong>{" "}
          <strong>The verdict reaches the actuator, or nothing does</strong>{" "}
          — a directive batch actuates only if the signed chain verifies and
          the batch rehashes to what was signed; tamper with one byte and
          the whole batch is refused, never partially applied.{" "}
          <strong>Absence is provable, not asserted.</strong>
        </p>

        <h3>The five absence classes</h3>
        <table>
          <thead>
            <tr><th>Class</th><th>Primitive</th><th>Condition</th><th>Remedy</th></tr>
          </thead>
          <tbody>
            <tr><td>Structural</td><td><code>absences()</code> blind pair</td><td>No value relates two domains</td><td>Acquire a ledger</td></tr>
            <tr><td>Referential</td><td><code>partitionValues().residual</code></td><td>A key with no resolving parent</td><td>Reconciliation</td></tr>
            <tr><td>Contradictory</td><td>Kleene composition → 0</td><td>Two present values, both cannot hold</td><td>Adjudication</td></tr>
            <tr><td>Observational</td><td><code>ABSENT</code> sentinel</td><td>Field present, value void</td><td><strong>Not fixable</strong></td></tr>
            <tr><td>Categorical</td><td>Path to a set, not an instance</td><td>Relates to a cohort, not a record</td><td><strong>Often not fixable</strong></td></tr>
          </tbody>
        </table>
        <p>
          Categorical is the most dangerous, because it is the only class
          that <em>looks like an answer</em>. The first three recede under
          investment; the last two do not. Residual never reaches zero
          across parties who legally cannot share schemas, and the signed
          proof of that irreducible floor is the artifact only this
          substrate produces.
        </p>

        <ChapterSection n={2} />
        <p>
          <strong>554 tests passing, zero regressions</strong> on the
          relational successor; the three theorems contribute 20 of them.
          Against Codd&rsquo;s requirements: one uniform structure{" "}
          <em>holds</em>; set semantics <em>by design</em>, the state being
          an ordered signed fold, proven commutative when no gate binds;
          data independence, closed algebra and lossless decomposition all{" "}
          <em>earned</em>; integrity and provenance <em>exceed</em>.
        </p>
        <p>
          <strong>50 tests green</strong> on the ternary successor — 21 in
          the browser port, 22 in the reference, two independent
          implementations of one algebra and therefore the check on it, plus
          7 over the absence certificate. The energy result is pinned by a
          zero-dependency golden test: <strong>21,528 float energy units
          against 3,078 ternary, a factor of 6.99</strong>, still recovering
          structure at ARI 0.6 or better.
        </p>
        <p>
          Composition is a signed lookup, not a designed truth table. The
          law is <strong>ed25519-signed at τ = 0.2 over 10 corpora and 113
          modules</strong>, and its nine cell counts sum to exactly{" "}
          <strong>1,404,816 triads</strong>. Two cells are states no
          two-valued table can hold: conformance to a contested standard
          composes to <strong>0</strong> at 0.4215 — indeterminate rather
          than passed — and failure against a standard the regulation
          supersedes composes to <strong>+1</strong> at 0.7925, compliant
          rather than failed.
        </p>
        <p>
          For an absent key the estate returns a{" "}
          <strong>sorted Merkle non-membership proof</strong>: the two
          adjacent present neighbours that strictly bracket the query, their
          inclusion proofs, the committed root and the set size, bound under
          one signature against a pinned key. A third party re-derives it
          offline. Adjacency and strict inequality mean a present key cannot
          be dressed as absent, and a routing miss is typed apart from a
          grounded abstention, so the gate never certifies a false absence.
        </p>
        <p>
          <strong>Five acts.</strong> <em>Estate</em> — the signed governed
          corpus, sealed partitions present, counted, withheld.{" "}
          <em>Architect</em> — relations discovered by value overlap, with
          evidence and provenance union printed and refused pairs shown with
          reasons. <em>Corpora</em> — heterogeneous ingest of images,
          technical documents, telemetry and tabular data under one
          commitment. <em>Operate</em> — the MCP agent layer.{" "}
          <em>Coverage</em> — the estate publishes its own blind spots,
          contradictions and bounds.
        </p>
        <p>
          <strong>Eleven governed MCP tools:</strong> <code>overview</code>,{" "}
          <code>connect</code>, <code>relations</code>,{" "}
          <code>coverage</code>, <code>aggregate</code>, <code>rollup</code>,{" "}
          <code>watch</code>, <code>indications</code>, <code>ask</code>,{" "}
          <code>records</code>, <code>verify</code>. The substrate mints
          inside the perimeter and verifies with the network off: zero
          egress, no execution surface, no write path, no code generation.
          The console UI is generated from the estate rather than hand-built
          per domain, so the marginal cost of an additional estate is near
          zero.
        </p>
        <p>
          <strong>Five deployed estates:</strong> an oil refinery, an
          offshore field, a diversified industrial group with an
          export-controlled division provably sealed while the rest stays
          fully queryable, an aerospace programme on public data, and an
          energy/maritime trade corridor. Each seals into a single portable
          file that verifies with no connection.
        </p>
        <p>
          <strong>Governance lineage.</strong> The same discipline first ran
          as a participatory data estate — SGUNCCH, live UNC
          student-government infrastructure, 40 policies across 8
          departments, with relevance-gated retrieval and a publicly
          readable approval ledger.
        </p>

        <ChapterSection n={3} />
        <Bound>
          <p>
            <strong>No external user has run it.</strong> Five estates, all
            built by me. Pre-revenue, no legal entity, no team. That is the
            binding constraint, and no additional building moves it.
          </p>
          <p>
            About <strong>40% of full-precision accuracy</strong> on hard
            continuous data. The win is energy, not capability.
          </p>
          <p>
            The composition law is measured over 10 corpora and 113 modules.
            The 1,404,816 triads are sampling depth, not breadth of domain.
          </p>
          <p>
            Not a replacement where the relational model is optimal, which
            is ground-truth facts in a trusted store. Nor a replacement for
            binary where binary is optimal, which is computation over known
            values. Both claims are narrow on purpose.
          </p>
          <p>
            Absence is proven relative to the commitment — the releasable
            corpus — not absolutely.
          </p>
          <p>
            Needs conferring rather than building: security accreditation,
            IdP integration, and the authority to be the system of record.
          </p>
        </Bound>

        <ChapterSection n={4} />
        <ul>
          <li>
            <a href="https://www.latentocean.com/spacex" target="_blank" rel="noopener noreferrer">
              latentocean.com/spacex
            </a>{" "}
            — the live estate. Under a severed network it refuses and names
            the reason instead of answering from cache.
          </li>
          <li>
            <a href="https://latentocean.com" target="_blank" rel="noopener noreferrer">
              latentocean.com
            </a>{" "}
            — the substrate, the five acts, the deployed estates.
          </li>
          <li>
            <a href="/LatentOcean_SuccessorToCodd.pdf" target="_blank" rel="noopener noreferrer">
              A Successor to Codd (PDF)
            </a>{" "}
            — the four requirements, the verdict table, the three theorems,
            554 tests. Marks the departure from Green, Karvounarakis &amp;
            Tannen, <em>Provenance Semirings</em>, PODS 2007: there
            provenance annotates Codd&rsquo;s relations, here the composing
            quotient is the primitive.
          </li>
          <li>
            <a href="/LatentOcean_SuccessorToSetun.pdf" target="_blank" rel="noopener noreferrer">
              A Successor to Setun (PDF)
            </a>{" "}
            — the open zero band, the five theorems, the measured
            composition law, the energy result. Łukasiewicz 1920 and Kleene
            1938 are the algebra; SQL&rsquo;s NULL its most deployed
            instance.
          </li>
          <li>
            <a href="https://github.com/direncode/sguncch" target="_blank" rel="noopener noreferrer">
              github.com/direncode/sguncch
            </a>{" "}
            — the governance lineage: approval ledger, RLS policies,
            relevance-gated retrieval.
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
