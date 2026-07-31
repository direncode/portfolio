import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";
import { ChapterSection, Bound, Equation } from "@/components/ChapterSection";

export const metadata = {
  title: "BTUT",
  description:
    "Coordination is solved by integrating the coupled mean-field equation, which breaks before ten thousand agents. BTUT refuses the formulation and finds the O(N) one.",
};

export default function BtutPage() {
  return (
    <>
      <ChapterHeader
        number="II"
        label="Coordination"
        title="BTUT."
        kicker="Refuse the coupled equation. Find the O(N) formulation."
        prev={{ href: "/latent-ocean", label: "Latent Ocean" }}
        next={{ href: "/crystara", label: "Crystara" }}
      />

      <Essay>
        <ChapterSection n={1} />
        <p>
          If this holds, coordination stops setting the ceiling on how many
          agents you can deploy — in traffic networks, grids, swarms and
          logistics.
        </p>
        <p>
          Coordination is solved by integrating the coupled mean-field
          equation. Track a density rather than agents, and couple it to
          the control each agent would choose given that density.
        </p>
        <Equation>{`∂μ/∂t  =  −∇·( μ · v[μ] )  +  σ² Δμ`}</Equation>
        <p>
          Density and control are solved against each other until they
          converge. The mathematics is settled and correct. The cost is
          O(N³), and it breaks before ten thousand agents. The field&rsquo;s
          answer has been to solve it faster.
        </p>
        <p>
          I refused the formulation instead of the solver. Agents sit on a
          scale-free network and play two games at once — Stag Hunt and
          Prisoner&rsquo;s Dilemma — updating by the Fermi rule, weighted
          by neighbour degree. No density is transported. Cost per sweep is
          linear in edges, which on a scale-free graph is linear in N. The
          gain is not more machines. It is a representation of the same
          phase transition that costs linearly instead of cubically.
        </p>
        <p>
          The substitution is legitimate because the system has a real
          phase transition. Cooperation is an order parameter with a
          critical point at γ_c ≈ 1.33, and the critical exponent is
          β ≈ 0.5. That places it in the mean-field universality class.
          Systems in one class share exponents regardless of microscopic
          detail. So the two objects are unrelated microscopically and
          equivalent macroscopically near criticality. That licenses the
          swap for questions about critical behaviour — and only those.
        </p>

        <ChapterSection n={2} />
        <p>
          Convergence is N-invariant. Runs at 500, 1,000, 2,000, 5,000 and
          10,000 agents all terminate in exactly 12 iterations. Constant
          iterations with linear per-iteration cost is the O(N) claim.
        </p>
        <p>
          Throughput is 20–105× existing mean-field-game solver frameworks
          across that range, and the advantage widens with N. Baseline
          identities, versions and hardware travel with the benchmark
          harness in the repository — a throughput multiple means nothing
          without them.
        </p>
        <p>
          The transition reproduces in three independent regimes: abstract
          γ_c = 1.326, traffic 1.329, drone 1.239. Cooperation rises
          monotonically with hub weighting, from 49.0% at τ = 0 to 73.4% at
          τ = 0.8.
        </p>
        <p>
          Six live domains. SUMO traffic: 3,000 simulated seconds, 800
          vehicles at peak, zero gridlock, 8-second maximum wait. ROS
          robotics over rosbridge. Drone swarms at 50, 100 and 200 agents,
          100% cooperation at every scale.{" "}
          <a href="https://www.franklinstreetdata.com" target="_blank" rel="noopener noreferrer">
            franklinstreetdata.com
          </a>{" "}
          for civic data.{" "}
          <a href="https://www.bigdunc.com" target="_blank" rel="noopener noreferrer">
            bigdunc.com
          </a>{" "}
          for game modelling. Four cloud surfaces.
        </p>

        <ChapterSection n={3} />
        <Bound>
          <p>
            Validated to 10,000 agents. That is the largest run. Anything
            beyond it follows from the complexity class, not from
            measurement.
          </p>
          <p>
            The DARPA Mathematical Challenge 13 answer is a candidate. No
            adjudicating body has reviewed it.
          </p>
          <p>
            Universality licenses substitution near criticality only. It
            says nothing about welfare, uniqueness of equilibrium, or
            sensitivity to the cost functional. BTUT does not answer those.
          </p>
          <p>
            Drone collisions grow with density — none at 50 agents, 294 at
            200. This is a coordination primitive, not a collision-avoidance
            planner.
          </p>
        </Bound>

        <ChapterSection n={4} />
        <ul>
          <li>
            <a href="https://btut.ai" target="_blank" rel="noopener noreferrer">
              btut.ai
            </a>{" "}
            — live simulator and phase-transition explorer.
          </li>
          <li>
            <a href="https://github.com/direncode/btut" target="_blank" rel="noopener noreferrer">
              github.com/direncode/btut
            </a>{" "}
            — proofs, SUMO stress-test JSON, τ sweep, benchmark harness with
            baselines and hardware.
          </li>
          <li>
            <a href="/BTUT_Tear_Sheet.pdf" target="_blank" rel="noopener noreferrer">
              Tear sheet (PDF)
            </a>{" "}
            — critical points, confidence intervals, scaling table.
          </li>
          <li>
            Applied:{" "}
            <a href="https://github.com/direncode/framklnstdata" target="_blank" rel="noopener noreferrer">
              framklnstdata
            </a>{" "}
            ·{" "}
            <a href="https://github.com/direncode/game-model" target="_blank" rel="noopener noreferrer">
              game-model
            </a>
          </li>
        </ul>

        <ChapterFooter
          prev={{ href: "/latent-ocean", label: "Latent Ocean" }}
          next={{ href: "/crystara", label: "Crystara" }}
        />
      </Essay>
    </>
  );
}
