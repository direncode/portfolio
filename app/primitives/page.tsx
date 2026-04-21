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
        kicker="Four paradigms, not four projects. BTUT proposes a new substrate for complex multi-agent systems — the class of systems modern civilization cannot run without — and ships one primitive across six live applied domains. TCD-JEPA (Crystara) proposes a new AI training paradigm past transformers: grow the predictor at runtime via topological crystallization instead of scaling a fixed attention architecture. Regenerationism proposes a new economic school — capital with compounding margins measured against cumulative friction — and NIV is its first operational instrument, beating the Fed yield curve on several recession benchmarks. The Participatory Data Estate proposes a new framework for digital data governance — continuous ingestion, public moderation ledger, federal-hardening controls — with SGUNCCH as its first live deployment. Every paradigm below has a table, a tear sheet, or a repo directly underneath it."
        prev={{ href: "/", label: "Manifesto" }}
        next={{ href: "/btut", label: "BTUT — Coordination" }}
      />

      <Essay>
        <h2>Why four, and why these four.</h2>
        <p>
          Each primitive names a field and proposes a new shape for it.
          Reduction — for the mathematics of complex multi-agent
          systems (BTUT). Crystallization — for the training paradigm
          of AI (TCD-JEPA / Crystara). Signal — for the philosophical
          foundation of macroeconomics (Regenerationism, operationalized
          by NIV). Ingestion — for the architecture of digital data
          governance (the Participatory Data Estate). Four fields, four
          paradigm proposals, each with working code and measured
          results.
        </p>
        <p>
          <strong>BTUT</strong> — a new substrate for complex multi-agent
          systems. Multi-agent coordination is the mathematical problem
          underneath traffic networks, power grids, drone fleets,
          logistics, civic coordination, and autonomous vehicles — the
          systems the 21st century depends on. The dominant default is
          a PDE on agent density with O(N³) numerics, which crashes
          before 10,000 agents. BTUT replaces the default with a phase
          transition on a scale-free network under Fermi-rule updates,
          mean-field universality, constant 12-iteration convergence
          from 500 to 10,000 agents, and six live applied domains.
          Along the way it is also a new approach to DARPA Mathematical
          Challenge&nbsp;13.
        </p>
        <p>
          <strong>TCD-JEPA (Crystara)</strong> — a new AI training
          paradigm past transformers. Transformer scaling fixes the
          architecture at self-attention and pours more parameters and
          compute through it. TCD-JEPA refuses the fixed-architecture
          assumption: a recursive three-system loop explores the energy
          landscape with Fisher-information Langevin dynamics, runs
          Vietoris–Rips persistent homology on the trajectories, and
          crystallizes the stable features into typed H₀ / H₁ / H₂
          predictor modules at runtime. <em>The architecture is not
          designed; it is discovered.</em> The first runtime-discovered
          predictor architecture for the JEPA family, and the first
          concrete instance of a post-transformer paradigm on working
          benchmarks: beats vanilla JEPA on three real heterogeneous
          graphs (+20 to +36.6 AUC pts) and beats supervised GAT
          (DeepMind), GCN (Google Brain), and GraphSAGE on a Georgetown
          CSET semiconductor supply chain.
        </p>
        <p>
          <strong>Regenerationism</strong> — a new economic philosophy.
          The claim: the leading indicator of macroeconomic regime
          health is the velocity of capital formation with compounding
          margins, measured against cumulative friction — not
          bond-market sentiment, not linear averages of coincident
          series, not equilibrium-return dynamics. <strong>NIV</strong>{" "}
          is Regenerationism&rsquo;s first operational instrument. It
          beats the Fed yield curve on several recession benchmarks
          (ROC-AUC 0.8538 @ 18 mo, 41.71% orthogonal variance), and the
          ensemble&rsquo;s own Gini importance picks the
          regenerative-capital term unprompted at 0.9328. The repository
          is named{" "}
          <a
            href="https://github.com/direncode/regenerationism"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>regenerationism</code>
          </a>{" "}
          for a reason — the school precedes the signal.
        </p>
        <p>
          <strong>Participatory Data Estate</strong> — a new framework
          for digital data governance. Every governance environment
          whose knowledge corpus is amended through human submissions
          (municipal agencies, NGOs, regulators, standards bodies,
          policy platforms, student governments) needs a data
          architecture that is continuous rather than batched, publicly
          auditable rather than privately moderated, and hardened to
          federal-agency patterns. The Participatory Data Estate
          proposes exactly that: Submit → Moderate → Thin →
          Crystallize, over pgvector + GIN FTS hybrid retrieval, with a
          publicly-readable approval ledger and federal-hardening
          controls. <strong>SGUNCCH</strong> is its first live
          deployment — a full UNC student-government stack running the
          framework end-to-end. A security posture student government
          has never needed, and has never had.
        </p>

        <h2>The four beats, stated plainly.</h2>
        <ol>
          <li>
            <strong>BTUT — a new substrate for complex multi-agent
            systems.</strong> The class that civilization runs on:
            traffic, grids, drones, logistics, civic coordination,
            markets. BTUT replaces the O(N³) PDE default with a phase
            transition on a scale-free network (mean-field universality,
            β ≈ 0.5, constant 12-iteration convergence from 500 to
            10,000 agents). One primitive, six live applied domains:
            traffic (Eclipse SUMO, 800-vehicle peak stress, zero
            gridlock), robotics (ROS / Turtlebot3), drone swarms
            (50 – 200, 100% cooperation), civic data
            (franklinstreetdata.com), game modeling (bigdunc.com), and
            four production cloud surfaces. Also: a new approach to
            DARPA Mathematical Challenge 13.
          </li>
          <li>
            <strong>TCD-JEPA (Crystara) — a new AI training paradigm
            past transformers.</strong> Transformer scaling pours
            compute through a fixed attention architecture. TCD-JEPA
            refuses the fixed-architecture assumption — a recursive
            three-system loop explores the energy landscape with
            Fisher-information Langevin dynamics, runs Vietoris–Rips
            persistent homology on the trajectories, and crystallizes
            stable features into typed H₀ / H₁ / H₂ predictor modules
            at runtime. <strong>+36.6</strong> AUC pts over baseline
            JEPA on Georgetown CSET&rsquo;s 519-entity semiconductor
            supply chain (82.7% vs 46.1%); also beats supervised GAT
            (DeepMind), GCN (Google Brain), GraphSAGE. +22.1 on GDELT;
            +20.0 at SEC EDGAR scale where GAT runs out of memory.{" "}
            <strong>16 interpretable modules</strong> crystallized
            from persistent homology, 1-to-1 with real industry
            clusters — no labels, no prompting. The first
            runtime-discovered predictor architecture for the JEPA
            family.
          </li>
          <li>
            <strong>Regenerationism — a new economic philosophy, with
            NIV as its first operational instrument.</strong> The
            school&rsquo;s claim: the leading indicator of
            macroeconomic regime health is the velocity of capital
            formation with compounding margins, measured against
            cumulative friction — not bond-market sentiment, not
            linear averages of coincident series, not equilibrium-return
            dynamics. NIV writes that school as a scalar. Ensemble
            ROC-AUC <strong>0.8538</strong> at 18 months across 504
            months (1970 – 2024) and six OOS tests.{" "}
            <strong>98.5%</strong> false-alarm suppression — 7 critical
            alerts in 42 years. <strong>41.71%</strong> orthogonal
            variance to the Fed 10Y – 3M spread. Under Gini importance,
            the regenerative-capital term scores{" "}
            <strong>0.9328</strong> and the yield spread scores{" "}
            <strong>0.0298</strong> — the model picked the school
            unprompted.
          </li>
          <li>
            <strong>Participatory Data Estate — a new framework for
            digital data governance.</strong> The dominant data-
            governance stacks treat ingestion as batched, moderation as
            private, and audit trails as compliance tax. The
            Participatory Data Estate inverts all three: continuous
            ingestion (Submit → Moderate → Thin → Crystallize),
            moderation as a public transition (publicly-readable
            approval ledger via RLS), hybrid pgvector + GIN FTS
            retrieval with graceful fallback, federal-hardening
            controls (time-constant auth, RLS on every table, rate
            limiting on four action classes, CSP/HSTS, XSS detection).
            SGUNCCH is the <em>first live deployment</em> — a full UNC
            student-government stack running the framework end-to-end.
            A security posture student government has never needed, and
            has never had.
          </li>
        </ol>

        <p>
          Every &ldquo;paradigm&rdquo; cited above has a working
          implementation, a measured benchmark against a named
          incumbent, and an open repository. The deep-dive chapters
          below give the mathematics, the tables, and the tear sheets
          in full.
        </p>
      </Essay>

      <div className="mx-auto max-w-5xl px-5 md:px-8 mt-12 grid md:grid-cols-2 gap-5">
        <PrimitiveCard
          number="01"
          subtitle="Multi-agent systems · Coordination"
          title="BTUT"
          one_liner="A new substrate for complex multi-agent systems — the class civilization cannot run without (traffic, grids, drones, logistics, markets). Phase transition on a scale-free network, hub-weighted Fermi updates, β ≈ 0.5 (mean-field). Constant 12-iteration convergence from 500 to 10,000 agents."
          beat="Six live applied domains: traffic (SUMO, 800 vehicles, zero gridlock), robotics (ROS), drones (100% cooperation at 200 agents), civic data (franklinstreetdata.com), game modeling (bigdunc.com), cloud surfaces. Also: a new approach to DARPA Mathematical Challenge 13."
          href="/btut"
        />
        <PrimitiveCard
          number="02"
          subtitle="Post-transformer AI paradigm · TCD-JEPA"
          title="Crystara"
          one_liner="A new AI training paradigm past transformers. Instead of scaling a fixed attention architecture, grow the architecture at runtime: Fisher-information Langevin exploration, Vietoris–Rips persistent homology on the trajectories, typed H₀/H₁/H₂ predictor modules crystallized from stable features."
          beat="Beats vanilla JEPA everywhere tested: +36.6 AUC pts on CSET semiconductor (519 entities); also beats supervised GAT (DeepMind), GCN (Google Brain), GraphSAGE. +22.1 on GDELT. +20.0 at 9,725-entity SEC EDGAR scale where GAT OOMs. 16 modules 1-to-1 with real industry clusters, no labels."
          href="/crystara"
        />
        <PrimitiveCard
          number="03"
          subtitle="Regenerationism · New economic school"
          title="NIV"
          one_liner="Regenerationism is a new economic philosophy: the leading indicator of macro regime health is the velocity of compounding-margin capital formation against cumulative friction, not bond-market sentiment. NIV is its first operational instrument — Thrust · Efficiency (P²) · Slack · Drag, from 8 public FRED series."
          beat="Ensemble ROC-AUC 0.8538 @ 18 mo across 504 months (1970 – 2024) and six OOS tests. 98.5% false-alarm filter; 41.71% orthogonal variance beyond the Fed 10Y – 3M spread. Under Gini importance the regenerative-capital term scores 0.9328; the yield spread 0.0298. The model picked the school unprompted."
          href="/niv"
        />
        <PrimitiveCard
          number="04"
          subtitle="Digital data governance · New framework"
          title="Participatory Data Estate"
          one_liner="A new framework for digital data governance. Continuous ingestion (Submit → Moderate → Thin → Crystallize), moderation as a public transition (publicly-readable approval ledger via RLS), hybrid pgvector + GIN FTS, federal-hardening controls. Generalizes to any governance corpus — municipal, NGO, regulatory, scholarly."
          beat="First live deployment — SGUNCCH, a full UNC student-government stack running the framework end-to-end. Time-constant auth, RLS on every table, rate limiting on 4 action classes, CSP/HSTS, XSS detection, public approval ledger. A security posture student government has never needed, and has never had."
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
