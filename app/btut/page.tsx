import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";
import { ChapterSection, Bound, Equation } from "@/components/ChapterSection";

export const metadata = {
  title: "BTUT",
  description:
    "Coordination without a coordinator. The coupled mean-field formulation breaks well before 10K agents; BTUT finds the O(N) one — spontaneous order at a threshold, validated across six live domains.",
};

export default function BtutPage() {
  return (
    <>
      <ChapterHeader
        number="I"
        label="Coordination"
        title="BTUT."
        kicker="Coordination without a coordinator — spontaneous order at a threshold, where the standard formulation breaks."
        prev={{ href: "/thesis", label: "Representation, not scale" }}
        next={{ href: "/crystara", label: "Crystara" }}
      />

      <Essay>
        <ChapterSection n={1} />
        <p>
          If this holds, coordination stops setting the ceiling on how many
          agents can be deployed — in traffic networks, grids, swarms and
          logistics.
        </p>
        <p>
          Coordination is solved by integrating the coupled Fokker–Planck
          mean-field equation. Stop tracking agents, describe the population
          as a density, and couple that density to the control each agent
          would choose given it.
        </p>
        <Equation>{`∂μ/∂t  =  −∇·( μ · v[μ] )  +  σ² Δμ`}</Equation>
        <p>
          Density and control are solved against each other to convergence.
          The mathematics is settled and correct. The cost is O(N³) and it
          breaks well before ten thousand agents. The field&rsquo;s answer
          has been to solve it faster.
        </p>
        <p>
          I refused the formulation instead of the solver. Agents sit on a
          scale-free network and play two games at once — Stag Hunt and
          Prisoner&rsquo;s Dilemma — updating by the Fermi rule, weighted by
          neighbour degree. No density is transported and no control problem
          is solved. Each agent reads its own neighbourhood. Cost per sweep
          is linear in edges, which on a scale-free graph is linear in N.
        </p>
        <p>
          The result is <strong>coordination without a coordinator</strong>:
          spontaneous order appearing at a threshold rather than being
          computed centrally and distributed. Cooperation is an order
          parameter with a critical point at γ_c ≈ 1.33 and a critical
          exponent β ≈ 0.5, which places it in the mean-field universality
          class. Systems in one class share exponents regardless of
          microscopic detail, so the two objects are unrelated
          microscopically and equivalent macroscopically near criticality.
          That licenses the substitution for questions about critical
          behaviour — and only those.
        </p>
        <p>
          Locomotion under distributed morphological control is one
          application of this, not the name of it.
        </p>

        <ChapterSection n={2} />
        <p>
          Convergence is N-invariant. Runs at 500, 1,000, 2,000, 5,000 and
          10,000 agents all terminate in exactly 12 iterations. Constant
          iterations with linear per-iteration cost is the O(N) claim.
        </p>
        <p>
          Throughput is 20–105× existing mean-field-game solver frameworks
          across that range, and the advantage widens with N as the
          complexity classes diverge. The identity of each baseline
          framework, its version and configuration, and the hardware every
          run executed on travel with the benchmark harness in the
          repository. A throughput multiple means nothing without them, so
          they are published beside the number rather than on this page.
        </p>
        <p>
          The transition reproduces in three independent regimes — abstract
          γ_c = 1.326, traffic 1.329, drone 1.239 — with a common exponent.
          Cooperation rises monotonically with hub weighting, from 49.0% at
          τ = 0 to 73.4% at τ = 0.8, with peak speed gain at τ = 0.7.
        </p>
        <p>
          Six live domains. Eclipse SUMO traffic: 3,000 simulated seconds
          across six phases, 800 vehicles at peak, zero gridlock, 1,760
          vehicles/hour sustained, 8-second maximum wait. ROS robotics over
          rosbridge with agent-state streaming. Drone swarms at 50, 100 and
          200 agents, 100% cooperation at every scale, formation error
          growing sub-linearly. Civic data at{" "}
          <a href="https://www.franklinstreetdata.com" target="_blank" rel="noopener noreferrer">
            franklinstreetdata.com
          </a>
          . Game modelling at{" "}
          <a href="https://www.bigdunc.com" target="_blank" rel="noopener noreferrer">
            bigdunc.com
          </a>
          . Four production surfaces: Python SDK, REST, Lambda, WASM.
        </p>

        <ChapterSection n={3} />
        <Bound>
          <p>
            Validated to 10,000 agents. That is the largest population
            actually run. Everything beyond it follows from the complexity
            class, not from demonstration.
          </p>
          <p>
            The DARPA Mathematical Challenge 13 answer is a candidate, and
            it is unadjudicated. No adjudicating body has reviewed it.
          </p>
          <p>
            Universality licenses substitution near criticality only. It
            says nothing about welfare characterisation, uniqueness of
            equilibrium, or sensitivity to the cost functional. BTUT does
            not answer those and does not attempt to.
          </p>
          <p>
            Drone collisions grow with density — none at 50 agents, 42 at
            100, 294 at 200. This is a coordination primitive, not a
            collision-avoidance planner.
          </p>
          <p>
            What would falsify it: a population regime where the measured
            exponent leaves the mean-field class, or where iteration count
            grows with N.
          </p>
        </Bound>

        <ChapterSection n={4} />
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
            — theorems and proofs, SUMO stress-test JSON, τ sweep and drone
            summary, and the benchmark harness carrying baseline identities,
            versions and hardware.
          </li>
          <li>
            <a href="/BTUT_Tear_Sheet.pdf" target="_blank" rel="noopener noreferrer">
              Tear sheet (PDF)
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
              framklnstdata
            </a>
            ) ·{" "}
            <a href="https://www.bigdunc.com" target="_blank" rel="noopener noreferrer">
              bigdunc.com
            </a>{" "}
            (
            <a href="https://github.com/direncode/game-model" target="_blank" rel="noopener noreferrer">
              game-model
            </a>
            ,{" "}
            <a href="https://github.com/direncode/flux-thebigdunc" target="_blank" rel="noopener noreferrer">
              flux-thebigdunc
            </a>
            )
          </li>
          <li>
            <a href="https://github.com/direncode/flux-btut" target="_blank" rel="noopener noreferrer">
              github.com/direncode/flux-btut
            </a>{" "}
            — the btut.ai frontend.
          </li>
        </ul>

        <ChapterFooter
          prev={{ href: "/thesis", label: "Representation, not scale" }}
          next={{ href: "/crystara", label: "Crystara" }}
        />
      </Essay>
    </>
  );
}
