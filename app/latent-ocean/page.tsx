import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";
import { StatBlock } from "@/components/StatBlock";
import { Callout } from "@/components/Callout";
import { SourceBar } from "@/components/SourceBar";
import { ImpactBlock } from "@/components/ImpactBlock";

export const metadata = {
  title: "Latent Ocean",
  description:
    "A successor to Codd and to Setun. Provenance as a database primitive rather than a column; refusal as a third state rather than a null. 554 tests on the relational successor, 50 on the ternary successor with an energy factor of 6.99 pinned by a golden test. Five deployed estates. An agentic systems IDE in which nothing is generated or written.",
};

export default function LatentOceanPage() {
  return (
    <>
      <ChapterHeader
        number="II"
        label="System · Grounding"
        title="Latent Ocean."
        kicker="An agent cannot be trusted with government or enterprise data while it is unable to distinguish a record that does not exist from a record it failed to retrieve. Latent Ocean makes that distinction a primitive. It is a successor to Codd — provenance is not a column, it is the unit — and a successor to Setun — the third state is not arithmetic, it is refusal. When the estate cannot ground a claim it declines and names the reason, and the refusal survives all the way to the actuator instead of being flattened into an empty result."
        prev={{ href: "/primitives", label: "The Inversion" }}
        next={{ href: "/btut", label: "BTUT — Multi-agent systems" }}
      />

      <SourceBar
        resources={[
          {
            kind: "demo",
            label: "latentocean.com/spacex/off-earth — the network-cut gate",
            href: "https://latentocean.com/spacex/off-earth",
          },
          {
            kind: "site",
            label: "latentocean.com — the estate",
            href: "https://latentocean.com",
          },
        ]}
      />

      <Essay>
        <ImpactBlock
          ifRight={
            <>
              An agent can be permitted to act on enterprise and government
              data, because for the first time it can prove a record is{" "}
              <em>absent</em> rather than merely not retrieved — and the
              refusal survives to the actuator.
            </>
          }
          mattersTo={
            <>
              Any government converting operations to agentic AI; any
              organisation whose compliance layer silently passes cases no
              rule covers.
            </>
          }
          notEstablished={
            <>
              No external user has run it. Five estates, all built by me.
            </>
          }
        />

        <h2>Two inversions.</h2>
        <p>
          Latent Ocean is the only system on this site that inverts two
          settled primitives rather than one. Both inversions are about
          the same thing: what a data system is permitted to say when it
          does not know.
        </p>

        <h3>Codd&rsquo;s tuple is provenance-free.</h3>
        <p>
          The relational model gives you a tuple: a set of attribute-value
          pairs. It does not give you a record of where those values came
          from, under what authority, at what time, or whether their
          absence means anything. Provenance in a Codd-descended system is
          something you bolt on — an audit table, a lineage column, a
          side-channel — and anything bolted on can be bypassed by a query
          that does not join to it.
        </p>
        <p>
          The inversion: <strong>make provenance the primitive.</strong> Not
          a column beside the fact, but the unit the fact is made of. A
          value the estate cannot trace is not a value with a missing
          lineage field — it is not a value the estate will return. The
          relational successor is covered by <strong>554 tests</strong>.
        </p>

        <h3>Setun&rsquo;s third state is arithmetic.</h3>
        <p>
          Setun, built at Moscow State University in 1958, was the
          working ternary computer: balanced ternary, three states per
          digit instead of two. But its third state was a{" "}
          <em>number</em> — a digit value in an arithmetic system. The
          machine was ternary; its logic was still about quantity.
        </p>
        <p>
          The inversion: <strong>make the third state epistemic.</strong>{" "}
          Not a third digit but a third answer — <em>refusal</em>. True,
          false, and <em>I cannot ground this, and here is the named
          reason why</em>. That is a different object from SQL&rsquo;s
          null, which conflates unknown, inapplicable, and absent into a
          single silent token that propagates through joins without
          announcing itself. A refusal is not a missing value. It is a
          positive statement about the limits of what the estate can
          support, and it is carried rather than swallowed. The ternary
          successor is covered by <strong>50 tests</strong>, with an
          energy factor of <strong>6.99</strong> pinned by a golden test —
          the number is not a claim in prose, it is an assertion the suite
          fails on if it moves.
        </p>

        <StatBlock
          stats={[
            { value: "554", label: "Tests", note: "Relational successor." },
            { value: "50", label: "Tests", note: "Ternary successor." },
            { value: "6.99", label: "Energy factor", note: "Pinned by a golden test." },
            { value: "5", label: "Deployed estates", note: "All built in-house." },
          ]}
        />

        <h2>Why absence is the whole problem.</h2>
        <p>
          Retrieval systems answer the question they were asked with the
          documents they happen to hold. When the answer is not in the
          index, a retrieval system does not say so — it returns the
          nearest thing, or nothing, and both are indistinguishable from
          a correct negative. That is tolerable when a human reads the
          output and applies judgement. It stops being tolerable the
          moment the output drives an actuator.
        </p>
        <p>
          The consequential case is not the hallucinated fact. It is the
          silent pass: a compliance layer that returns clean because no
          rule in it covers the case in front of it, and cannot tell the
          difference between <em>this was checked and is fine</em> and{" "}
          <em>nothing here knows how to check this</em>. Every governance
          conversation about agentic AI eventually arrives at this
          distinction, and almost no data substrate can express it.
        </p>
        <p>
          Latent Ocean expresses it as a first-class outcome. The estate
          either grounds a claim in traceable provenance or it refuses and
          names the reason. There is no third path where it quietly
          produces something plausible.
        </p>

        <h2>The network-cut gate.</h2>
        <p>
          The clearest demonstration is live at{" "}
          <a
            href="https://latentocean.com/spacex/off-earth"
            target="_blank"
            rel="noopener noreferrer"
          >
            latentocean.com/spacex/off-earth
          </a>
          . It runs the estate under a cut network — the condition where a
          conventional system degrades most quietly, answering from
          whatever it cached and giving no indication that it has lost
          contact with ground truth.
        </p>
        <p>
          Under the cut, the estate does not degrade to a guess. It
          refuses, names the reason, and the refusal propagates. This is
          the shortest path to understanding the whole system: it takes
          under a minute, and it shows the difference between a system
          that returns nothing and a system that says why it is returning
          nothing.
        </p>

        <h2>Five deployed estates.</h2>
        <p>
          The framework is instantiated five times, across domains chosen
          because their failure modes are unforgiving:
        </p>
        <table>
          <thead>
            <tr>
              <th>Estate</th>
              <th>What it exercises</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Refinery</td>
              <td>Process operations under provenance constraints.</td>
            </tr>
            <tr>
              <td>Offshore field</td>
              <td>Remote operations where the network cut is a real condition, not a test fixture.</td>
            </tr>
            <tr>
              <td>Industrial group</td>
              <td>An export-controlled programme <strong>provably sealed</strong> from the rest of the group&rsquo;s estate.</td>
            </tr>
            <tr>
              <td>Aerospace</td>
              <td>Built on public data, so the reasoning is externally checkable.</td>
            </tr>
            <tr>
              <td>Energy / maritime corridor</td>
              <td>Cross-jurisdiction operations with divergent authorities over the same facts.</td>
            </tr>
          </tbody>
        </table>
        <p>
          The export-controlled case is the sharpest of the five. A
          compartment inside a wider estate is not merely access-filtered
          — the seal is a property the estate can demonstrate, rather than
          a policy the query layer is trusted to have applied. That is the
          practical form of making provenance the primitive: the boundary
          is in the substrate, not in the middleware in front of it.
        </p>

        <h2>The agentic systems IDE.</h2>
        <p>
          The estate is not only a store. It is the adjudicating layer of
          a development loop with a deliberate and unusual property:{" "}
          <strong>nothing is generated or written</strong>.
        </p>
        <ol>
          <li>
            <strong>The model proposes a spec.</strong> It does not write
            code, and it does not write to the estate. It puts forward a
            specification of what it believes should hold.
          </li>
          <li>
            <strong>The estate grounds it, or refuses with a named
            reason.</strong> Every element of the proposed spec is either
            traceable to something the estate can support, or it is
            declined — with the reason attached, not as a generic
            failure.
          </li>
          <li>
            <strong>A steward promotes.</strong> A human moves the
            grounded spec forward. The promotion is the write. The model
            never performs it.
          </li>
        </ol>
        <p>
          The result is a development surface where the model&rsquo;s
          fluency is used for proposal and the estate&rsquo;s provenance
          is used for adjudication, and neither is asked to do the
          other&rsquo;s job. Most agentic tooling inverts this — the model
          both proposes and writes, and the data layer is a passive
          participant that cannot object.
        </p>

        <h2>What the four earlier primitives contribute.</h2>
        <p>
          Latent Ocean is where the other four systems land, and that
          relationship is unchanged from how it was first stated.{" "}
          <a href="/btut">BTUT</a> makes coordination across the estate
          linear rather than coupled. <a href="/crystara">Crystara</a>{" "}
          grows structure over a corpus instead of assuming a fixed
          predictor for it. <a href="/niv">NIV</a> is the worked example
          of a scalar the estate can emit outward with its construction
          fully published. The{" "}
          <a href="/participatory-data-estate">Participatory Data Estate</a>{" "}
          is the ingestion discipline — continuous, publicly auditable —
          that keeps an estate current rather than frozen at the moment it
          was built.
        </p>
        <p>
          What has changed is the weighting. In April the four primitives
          were the work and Latent Ocean was the vanishing point they
          converged toward. It is now the largest body of work here, and
          the one with deployments.
        </p>

        <Callout label="Honest assessment">
          Five estates exist and all five were built by me. No external
          user has run the system. The 554 and 50 test counts describe
          coverage of the two successors, not adoption. The energy factor
          of 6.99 is pinned by a golden test, which means it is stable and
          checkable — it does not mean it has been independently
          reproduced. The network-cut gate is the strongest available
          demonstration and it is a demonstration, not a deployment
          report. What would change this: an external operator running an
          estate on their own data, under their own network conditions,
          with their own stewards doing the promotion.
        </Callout>

        <ChapterFooter
          prev={{ href: "/primitives", label: "The Inversion" }}
          next={{ href: "/btut", label: "BTUT — Multi-agent systems" }}
        />
      </Essay>
    </>
  );
}
