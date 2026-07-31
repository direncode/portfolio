import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";
import { SourceBar } from "@/components/SourceBar";
import { ChapterSection, Bound, Equation } from "@/components/ChapterSection";

export const metadata = {
  title: "BTUT — Coordination",
  description:
    "Multi-agent coordination is solved by integrating the coupled Fokker–Planck mean-field equation, which breaks well before 10K agents. BTUT declines the formulation and finds the O(N) one: a phase transition on a scale-free network under hub-weighted Fermi updates.",
};

const SOURCES = [
  { kind: "site" as const, label: "btut.ai", href: "https://btut.ai" },
  { kind: "repo" as const, label: "github.com/direncode/btut", href: "https://github.com/direncode/btut" },
  { kind: "tear" as const, label: "BTUT Tear Sheet", href: "/BTUT_Tear_Sheet.pdf" },
  { kind: "site" as const, label: "franklinstreetdata.com", href: "https://www.franklinstreetdata.com" },
  { kind: "site" as const, label: "bigdunc.com", href: "https://www.bigdunc.com" },
  { kind: "repo" as const, label: "direncode/framklnstdata", href: "https://github.com/direncode/framklnstdata" },
  { kind: "repo" as const, label: "direncode/game-model", href: "https://github.com/direncode/game-model" },
];

export default function BtutPage() {
  return (
    <>
      <ChapterHeader
        number="III"
        label="Inversion · Coordination"
        title="BTUT."
        kicker="Coordination is solved by integrating the coupled mean-field equation. The mathematics is settled and the cost is not: the formulation breaks well before ten thousand agents. BTUT declines the formulation rather than the solver."
        prev={{ href: "/latent-ocean", label: "Latent Ocean" }}
        next={{ href: "/crystara", label: "Crystara — Grow the architecture" }}
      />

      <SourceBar resources={SOURCES} />

      <Essay>
        <ChapterSection numeral="I" />
        <p>
          The standard treatment of large-population coordination is the
          mean-field game. You stop tracking individual agents, describe the
          population as a density <code>μ</code>, and couple that density to
          the optimal control each agent would choose given it. The forward
          half of the system is a Fokker–Planck equation transporting the
          density under the induced velocity field:
        </p>
        <Equation note="Coupled to a backward Hamilton–Jacobi–Bellman equation for the value function, with v[μ] the feedback control induced by the population's own density.">
          {`∂μ/∂t  =  −∇·( μ · v[μ] )  +  σ² Δμ`}
        </Equation>
        <p>
          This is good mathematics and it is genuinely the right object for
          the questions it was built for — existence, uniqueness,
          equilibrium characterisation. The difficulty is operational. The
          coupling is what makes it expressive and it is also what makes it
          expensive: the density and the control must be solved against each
          other, over a discretised state space, to convergence. Costs
          scale badly and the formulation stops being tractable well before
          the populations that motivate it in the first place. The field's
          response has been to solve it faster — better discretisations,
          neural approximations of the coupled pair.
        </p>
        <p>
          The inversion is to refuse the formulation rather than optimise
          the solver. If the observable of interest is whether a population
          reaches cooperative equilibrium and how fast, then the coupled PDE
          is not the only object with that behaviour — it is one object with
          that behaviour, and it happens to be the expensive one. BTUT looks
          for a different object with the same macroscopic behaviour and
          linear cost.
        </p>

        <ChapterSection numeral="II" />
        <p>
          BTUT places agents on a scale-free network — degree distribution{" "}
          <code>P(k) ∝ k^(−γ)</code>, preferential attachment, hubs — and has
          them play a bivariate game: a Stag Hunt coordination component and
          a Prisoner&rsquo;s Dilemma defection component, simultaneously.
          Strategy updates follow the Fermi rule, weighted by neighbour
          degree:
        </p>
        <Equation note="w_ij is the hub-weighting of neighbour j for agent i, controlled by τ. κ is the selection temperature. Strategy adoption is probabilistic in the payoff difference, not deterministic.">
          {`w_ij  =  (k_j)^τ  /  Σ_{l ∈ N(i)} (k_l)^τ

P( s_i ← s_j )  =  1 / ( 1 + exp( −(U_j − U_i) / κ ) )`}
        </Equation>
        <p>
          No density is transported and no control problem is solved. Each
          agent reads its neighbourhood and updates. The cost per sweep is
          linear in the number of edges, and on a scale-free graph that is
          linear in <code>N</code>.
        </p>
        <p>
          What makes this a substitute rather than an approximation is that
          the system has a genuine <strong>continuous phase transition</strong>.
          Cooperation is not a quantity that drifts up as you tune
          parameters; it is an order parameter with a critical point. Below
          the critical coupling, cooperation cannot hold. Above it,
          hub-mediated cascades carry it through the population.
        </p>
        <Equation note="f_A is the cooperating fraction. β ≈ 0.5 places the transition in the mean-field universality class. Measured critical points: abstract γ_c = 1.326, traffic γ_c = 1.329, drone γ_c = 1.239.">
          {`f_A(γ)  ∼  (γ − γ_c)^β        γ → γ_c⁺ ,   β ≈ 0.5

γ_c  ≈  1.33`}
        </Equation>
        <p>
          <strong>Universality</strong> is what makes the substitution
          legitimate. Systems in the same universality class share critical
          exponents regardless of their microscopic details — the exponent
          is determined by dimensionality, symmetry and interaction range,
          not by the specific payoff matrix or update rule. Measuring
          β ≈ 0.5 says BTUT sits in the mean-field class, which is the same
          class the coupled formulation&rsquo;s macroscopic behaviour lives
          in. The two objects are microscopically unrelated and
          macroscopically equivalent near criticality. That is the whole
          argument: you may swap them for the questions that depend on
          critical behaviour, and only for those.
        </p>

        <ChapterSection numeral="III" />
        <p>
          <strong>Scaling.</strong> Convergence is N-invariant across the
          validated range. Every run — 500, 1,000, 2,000, 5,000 and 10,000
          agents — terminates in exactly 12 iterations. Per-agent effective
          speed degrades gracefully with density (7.88 → 5.60 m/s) because
          the simulated environment gets denser; the coordination substrate
          itself does not slow down. Constant iteration count with linear
          per-iteration cost is the O(N) claim, and it is the property the
          coupled formulation cannot offer.
        </p>
        <p>
          <strong>Against mean-field-game solvers.</strong> Measured
          throughput is <strong>20–105× existing MFG solver frameworks</strong>{" "}
          over the validated population range. The spread reflects where in
          that range the comparison is taken — the advantage widens with N,
          as the complexity classes diverge. The identity of each baseline
          framework, its version and configuration, and the hardware every
          run was executed on are recorded with the benchmark harness in the{" "}
          <a href="https://github.com/direncode/btut" target="_blank" rel="noopener noreferrer">
            repository
          </a>{" "}
          and summarised in the{" "}
          <a href="/BTUT_Tear_Sheet.pdf" target="_blank" rel="noopener noreferrer">
            tear sheet
          </a>
          . A throughput multiple is only meaningful against a named
          baseline on stated hardware, so both travel with the number rather
          than with this page.
        </p>
        <p>
          <strong>Critical behaviour.</strong> The transition reproduces
          across three independent regimes with domain-varying critical
          points — abstract (γ_c = 1.326, confidence 0.86), traffic
          (γ_c = 1.329, confidence 0.82), drone (γ_c = 1.239, confidence
          0.90) — and a common exponent. Cooperation rises monotonically
          with hub weighting across the τ sweep, from 49.0% at τ = 0 to
          73.4% at τ = 0.8, with peak speed gain of +12.3% at τ = 0.7.
        </p>
        <p>
          <strong>Six live domains.</strong> Eclipse SUMO traffic — 3,000
          simulated seconds across six phases, peaking at 800 vehicles,
          zero gridlock, 1,760 vehicles/hour sustained, 8-second maximum
          wait. ROS robotics over rosbridge with agent-state streaming.
          Drone swarms at 50, 100 and 200 agents, 100% cooperation at every
          scale, formation error growing sub-linearly (82 → 103 as N
          quadruples). Civic data at{" "}
          <a href="https://www.franklinstreetdata.com" target="_blank" rel="noopener noreferrer">
            franklinstreetdata.com
          </a>
          . Game modelling at{" "}
          <a href="https://www.bigdunc.com" target="_blank" rel="noopener noreferrer">
            bigdunc.com
          </a>
          . Four production surfaces: Python SDK, REST on Fly.io, Lambda,
          WASM.
        </p>

        <ChapterSection numeral="IV" />
        <Bound>
          <p>
            <strong>Validated to 10,000 agents.</strong> That is the largest
            population actually run. Everything beyond it is inference from
            the complexity class, not measurement. A constant iteration
            count over 500–10,000 is evidence for N-invariance across that
            range and is not the same as a demonstration at 10⁶ or 10⁹.
            Claims about planetary-scale coordination follow from the
            argument, not from the data, and should be read that way.
          </p>
          <p>
            <strong>The DARPA Mathematical Challenge 13 answer is a
            candidate, and it is unadjudicated.</strong> No adjudicating
            body has reviewed it. Nobody has certified it as an answer to
            MC13. It is my formulation and my claim about what it answers.
          </p>
          <p>
            <strong>Universality is an argument about critical behaviour
            only.</strong> Shared exponents license substitution for
            questions that depend on the phase transition. They do not
            license it for questions the mean-field game answers away from
            criticality — welfare characterisation, uniqueness of
            equilibrium, sensitivity to the cost functional. BTUT does not
            answer those and does not attempt to.
          </p>
          <p>
            <strong>Collisions grow with drone density</strong> (0 at 50
            agents, 42 at 100, 294 at 200). BTUT is a coordination
            primitive, not a collision-avoidance planner, and the numbers
            make that boundary visible rather than hiding it.
          </p>
          <p>
            <strong>What would falsify it:</strong> a population regime
            where the measured exponent leaves the mean-field class, or
            where iteration count grows with N. Either would break the
            substitution argument at its root.
          </p>
        </Bound>

        <ChapterSection numeral="V" />
        <p>
          If the substitution holds, coordination stops being the binding
          constraint on multi-agent deployment. The systems that need it are
          not speculative: metropolitan traffic networks, transmission and
          distribution grids balancing distributed generation, autonomous
          fleets in logistics and inspection, and drone swarms operating
          without a central planner. Each of these is currently sized by
          what its coordination layer can carry.
        </p>
        <p>
          The institutions this matters to are national infrastructure
          programmes — transport authorities, grid operators, port and
          corridor authorities — and defence research organisations working
          the MC13 problem directly. What changes for them is not a
          percentage improvement in a solver. It is that the population size
          at which coordination becomes computationally prohibitive moves
          by orders of magnitude, which changes what is worth attempting.
        </p>

        <ChapterSection numeral="VI" />
        <ul>
          <li>
            <a href="https://btut.ai" target="_blank" rel="noopener noreferrer">
              btut.ai
            </a>{" "}
            — live simulator, τ sweep, phase-transition explorer.
          </li>
          <li>
            <a href="https://github.com/direncode/btut" target="_blank" rel="noopener noreferrer">
              github.com/direncode/btut
            </a>{" "}
            — theorems and proofs, SUMO stress-test JSON under{" "}
            <code>integrations/sumo/stress_test_results.json</code>, τ sweep
            and drone summary in <code>lib/data/validation-data.ts</code>,
            solver benchmark configurations and hardware.
          </li>
          <li>
            <a href="/BTUT_Tear_Sheet.pdf" target="_blank" rel="noopener noreferrer">
              BTUT tear sheet (PDF)
            </a>{" "}
            — critical points, confidence intervals, scaling table.
          </li>
          <li>
            Applied deployments:{" "}
            <a href="https://www.franklinstreetdata.com" target="_blank" rel="noopener noreferrer">
              franklinstreetdata.com
            </a>{" "}
            (
            <a href="https://github.com/direncode/framklnstdata" target="_blank" rel="noopener noreferrer">
              repo
            </a>
            ) ·{" "}
            <a href="https://www.bigdunc.com" target="_blank" rel="noopener noreferrer">
              bigdunc.com
            </a>{" "}
            (
            <a href="https://github.com/direncode/game-model" target="_blank" rel="noopener noreferrer">
              repo
            </a>
            ).
          </li>
        </ul>

        <ChapterFooter
          prev={{ href: "/latent-ocean", label: "Latent Ocean" }}
          next={{ href: "/crystara", label: "Crystara — Grow the architecture" }}
        />
      </Essay>
    </>
  );
}
