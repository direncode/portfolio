import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";
import { PrimitiveCard } from "@/components/PrimitiveCard";
import { Inversion } from "@/components/Inversion";

export const metadata = {
  title: "The Inversion",
  description:
    "One method, five instances. Each system begins by identifying the primitive its field treats as settled and refusing it: bond sentiment, fixed architecture, the coupled equation, the provenance-free tuple, the arithmetic third state.",
};

export default function PrimitivesPage() {
  return (
    <>
      <ChapterHeader
        number="I"
        label="Chapter"
        title="The Inversion."
        kicker="Breadth across five fields reads as unfocused until you see that it is one move applied five times. Each system here begins the same way: locate the primitive its field treats as settled — the assumption so foundational that nobody re-opens it — and refuse it. What follows from the refusal is the work."
        prev={{ href: "/", label: "Manifesto" }}
        next={{ href: "/latent-ocean", label: "Latent Ocean" }}
      />

      <div className="mx-auto max-w-5xl px-5 md:px-8 mt-12">
        <Inversion />
      </div>

      <Essay>
        <h2>Why this is one method and not five projects.</h2>
        <p>
          A portfolio spanning macroeconomics, representation learning,
          multi-agent mathematics, and data governance invites a reasonable
          suspicion: that it is unfocused, or that the breadth is
          compensating for depth. The answer is that these are not five
          interests. They are five applications of a single move, and the
          move is what I actually work on.
        </p>
        <p>
          The move is to find the load-bearing assumption a field has
          stopped examining — not a hard open problem, which everyone is
          already working on, but a <em>settled</em> one — and ask what the
          field would look like if it were false. Settled assumptions are
          where the leverage is, precisely because the effort has moved
          elsewhere. Every system below is the answer to one such question.
        </p>

        <h3>Read capital formation, not bond sentiment.</h3>
        <p>
          Recession forecasting reads the bond market because the bond
          market aggregates expectations. But expectations are sentiment,
          and sentiment is reflexive under quantitative easing and forward
          guidance. The settled assumption is that the best available
          leading signal is a market price.{" "}
          <a href="/niv">Regenerationism</a> refuses it and reads the
          physical thing instead: the velocity of capital formation with
          compounding margins, measured against cumulative friction. NIV is
          that philosophy written as a scalar.
        </p>

        <h3>Grow the architecture at runtime.</h3>
        <p>
          The scaling paradigm holds the architecture fixed and varies the
          compute. Self-attention is the constant; parameters and tokens
          are the dial. The settled assumption is that architecture is
          something you choose before training and hold.{" "}
          <a href="/crystara">Crystara (TCD-JEPA)</a> refuses it: the
          predictor explores its own energy landscape, persistent homology
          runs over the trajectories, and stable topological features
          crystallize into typed modules while training runs. The
          architecture is discovered rather than designed.
        </p>

        <h3>Find the O(N) formulation.</h3>
        <p>
          Multi-agent coordination is approached by writing the coupled
          equation — a PDE on agent density — and solving it. The settled
          assumption is that coordination <em>is</em> that equation, so the
          research question is how to solve it faster.{" "}
          <a href="/btut">BTUT</a> refuses the formulation rather than the
          solver, and looks for a different mathematical object with the
          same behaviour and linear cost: a phase transition on a
          scale-free network under hub-weighted Fermi updates.
        </p>

        <h3>Make provenance the primitive.</h3>
        <p>
          Codd&rsquo;s relational model gives you a tuple — attribute-value
          pairs with no record of origin, authority, or time. Provenance is
          something you add beside the data, which means a query that
          skips the join skips the provenance. The settled assumption is
          that the unit of data is the value.{" "}
          <a href="/latent-ocean">Latent Ocean</a> refuses it and makes
          provenance the unit itself. A value the estate cannot trace is
          not a value with a missing field; it is not a value the estate
          returns.
        </p>

        <h3>Make the third state epistemic.</h3>
        <p>
          Setun, the 1958 ternary machine, had three states per digit — but
          the third state was a <em>number</em>. Ternary hardware, binary
          epistemics. SQL inherited the same limitation in a different
          form: null conflates unknown, inapplicable and absent into one
          silent token. The settled assumption is that the third state is
          arithmetic. <a href="/latent-ocean">Latent Ocean</a> refuses it
          and makes the third state <em>refusal</em> — a positive statement
          that a claim cannot be grounded, with the reason named, carried
          through to the actuator rather than flattened into an empty
          result.
        </p>

        <h2>What the five have in common downstream.</h2>
        <p>
          Refusing a settled primitive has a consistent consequence: the
          resulting system is smaller, more inspectable, and easier to
          falsify than the thing it replaces. A signal whose every weight
          is published. A predictor whose modules are typed by the homology
          group they were born from. A coordination kernel whose critical
          exponent is closed-form. An estate that declines rather than
          guesses. None of these are large systems, and that is the point —
          the leverage came from the inversion, not from the scale.
        </p>
        <p>
          They also compose. Four of the five feed the fifth:{" "}
          <a href="/convergence">Convergence</a> is the argument for how.
        </p>
      </Essay>

      <div className="mx-auto max-w-5xl px-5 md:px-8 mt-12 grid md:grid-cols-2 gap-5">
        <PrimitiveCard
          number="01"
          subtitle="Grounding · Codd & Setun"
          title="Latent Ocean"
          one_liner="Provenance as the unit rather than a column beside it; refusal as a state rather than a null. An estate that can prove a record is absent rather than merely not retrieved, and carry that refusal to the actuator."
          beat="554 tests on the relational successor; 50 on the ternary successor, energy factor 6.99 pinned by a golden test. Five deployed estates including an export-controlled programme provably sealed. An agentic systems IDE in which nothing is generated or written."
          href="/latent-ocean"
        />
        <PrimitiveCard
          number="02"
          subtitle="Multi-agent systems · Coordination"
          title="BTUT"
          one_liner="Decline the coupled equation and find the O(N) formulation. A phase transition on a scale-free network under hub-weighted Fermi updates, β ≈ 0.5 in the mean-field universality class."
          beat="Constant 12-iteration convergence from 500 to 10,000 agents. Six live applied domains: SUMO traffic (800 vehicles, zero gridlock), ROS, drone swarms, civic data, game modeling, four cloud surfaces. DARPA Mathematical Challenge 13."
          href="/btut"
        />
        <PrimitiveCard
          number="03"
          subtitle="AI training · TCD-JEPA"
          title="Crystara"
          one_liner="Grow the architecture instead of scaling it. Fisher-information Langevin exploration, Vietoris–Rips persistent homology over the trajectories, typed H₀/H₁/H₂ predictor modules crystallized at runtime."
          beat="+36.6 AUC over baseline JEPA on Georgetown CSET semiconductor; also beats supervised GAT (DeepMind), GCN (Google Brain), GraphSAGE. +22.1 on GDELT, +20.0 at 9,725-entity SEC EDGAR scale where GAT OOMs. 16 modules 1-to-1 with real industry clusters."
          href="/crystara"
        />
        <PrimitiveCard
          number="04"
          subtitle="Regenerationism · Macro signal"
          title="NIV"
          one_liner="Read physical capital formation, not bond sentiment. Regime health as the velocity of compounding-margin capital formation measured against cumulative friction — the school written as a scalar."
          beat="ROC-AUC 0.8538 at 18 months across 504 months (1970–2024), six OOS tests, 98.5% false-alarm suppression, 41.71% orthogonal variance to the Fed spread. Gini importance picks the regenerative-capital term at 0.9328 against the spread's 0.0298."
          href="/niv"
        />
        <PrimitiveCard
          number="05"
          subtitle="Digital data governance"
          title="Participatory Data Estate"
          one_liner="Continuous ingestion, moderation as a public transition, federal-hardening controls. Submit → Moderate → Thin → Crystallize over hybrid pgvector + GIN FTS with a publicly-readable approval ledger."
          beat="First live deployment: SGUNCCH, a full UNC student-government stack running the framework end-to-end. Time-constant auth, RLS on every table, rate limiting on four action classes, CSP/HSTS, XSS detection."
          href="/participatory-data-estate"
        />
      </div>

      <Essay>
        <h2>Reading order.</h2>
        <p>
          Start with <a href="/latent-ocean">Latent Ocean</a> — it is the
          largest body of work, it carries two of the five inversions, and
          the network-cut gate is the fastest way to see what the grounding
          discipline actually does. Then{" "}
          <a href="/btut">BTUT</a> for the reduction,{" "}
          <a href="/crystara">Crystara</a> for what you do with compute once
          coordination is linear, <a href="/niv">NIV</a> for a worked
          example of a signal published in full, and{" "}
          <a href="/participatory-data-estate">the Participatory Data
          Estate</a> for how a corpus stays current. Then{" "}
          <a href="/convergence">Convergence</a> fits them together.
        </p>
        <ChapterFooter
          prev={{ href: "/", label: "Manifesto" }}
          next={{ href: "/latent-ocean", label: "Latent Ocean" }}
        />
      </Essay>
    </>
  );
}
