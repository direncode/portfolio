import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";
import { StatBlock } from "@/components/StatBlock";
import { Callout } from "@/components/Callout";

export const metadata = {
  title: "BTUT — Coordination",
  description:
    "Bivariate Trajectory-Undercurrent Theory: a linear-time, PDE-free primitive for multi-agent coordination.",
};

export default function BtutPage() {
  return (
    <>
      <ChapterHeader
        number="II"
        label="Primitive · Coordination"
        title="BTUT."
        kicker="Bivariate Trajectory-Undercurrent Theory. A PDE-free, kernel-weighted mean-field primitive for multi-agent coordination — linear in N, N-invariant in iteration count, and empirically O(N) up to one million agents."
        prev={{ href: "/primitives", label: "The Four Primitives" }}
        next={{ href: "/crystara", label: "Crystara — Structure" }}
      />

      <Essay>
        <h2>The reduction.</h2>
        <p>
          The classical approach to multi-agent coordination solves a PDE on
          the space of agent densities. It works — on paper. In practice the
          cost scales like O(N³) and the simulation crashes at ten thousand
          agents. NetLogo does this; MASON and Mesa dodge the PDE with explicit
          agent lists, but they still pay a coupling cost that is at best
          O(N log N) and in practice far worse. The field&rsquo;s default
          assumption is that coordination is expensive.
        </p>
        <p>
          BTUT refuses the PDE. Each agent plays a binary strategy game — A or
          B — and updates via a kernel-weighted mean-field contraction. There
          is no explicit interaction graph stored. Virtual topology is sampled,
          hub influence is compressed into a scalar <code>τ</code>, and a
          single payoff parameter <code>γ</code> controls the cooperation
          bonus. The update is a contraction mapping; the fixed point is
          unique and globally attracting.
        </p>

        <h3>The dynamics.</h3>
        <pre>{`U_A^i = γ · p_eff · (1 - c_A) - k_i^τ
U_B^i =      p_eff · (1 - c_B) - k_i^τ

p_eff = (1 - τ)·p + τ·p_hub

p(t+1) = λ·p(t) + (1 - λ)·𝟙[ Σ_i w_i · (U_A^i - U_B^i) > 0 ]`}</pre>
        <p>
          Momentum <code>λ = 0.5</code>. Adaptation rate <code>α = 0.1</code>.
          The strategy update is a softmax-style aggregate over
          kernel-weighted utilities; the hub-fraction <code>p_hub</code>
          captures degree-weighted influence. The theorem below says the rest.
        </p>

        <h3>Theorem 2.1 — Contraction, exponential rate.</h3>
        <blockquote>
          The kernel-weighted update is a contraction mapping with exponential
          convergence rate <code>λ_rate = α(1 − τ)(1 + γ)</code>. The system
          admits a unique Nash equilibrium{" "}
          <code>p* = [γ/(1+γ) − τ·p_hub] / (1 − τ)</code>, globally attracting
          under the Lyapunov function{" "}
          <code>V(p) = −∫ [U_A(x) − U_B(x)] dx</code>.
        </blockquote>
        <p>
          Empirically, convergence lands in <strong>19.7 ± 2.4 iterations</strong>{" "}
          at N = 100,000, <code>γ = 1.5</code>. Iteration count does not grow
          with N. That is the N-invariance claim, and it is what makes the
          reduction real.
        </p>

        <h3>Theorem 3.1 — Per-iteration O(N).</h3>
        <p>
          The per-iteration cost decomposes as: Barabási–Albert degree sampling{" "}
          <code>O(N)</code>, PageRank centrality via sparse power iteration{" "}
          <code>O(N)</code>, hub identification <code>O(N)</code>, per-agent
          utility + strategy update <code>O(1)</code>. Total per iteration:{" "}
          <code>O(N)</code>. Total run: <code>O(N · T)</code> with{" "}
          <code>T ≈ 20–30</code> constant. A separate martingale decomposition
          bounds the mean-field approximation error at{" "}
          <code>O(1 / √N)</code>.
        </p>

        <Callout label="Empirical validation">
          Linear regression of runtime against N from 10³ to 10⁶ fits with{" "}
          <strong>R² &gt; 0.98</strong>. Variance of the equilibrium fraction
          falls from 0.012 at N=1,000 to 1.8 × 10⁻⁵ at N=1,000,000 — the Law
          of Large Numbers, confirmed four orders of magnitude out.
        </Callout>

        <h2>Scaling, in absolute numbers.</h2>

        <StatBlock
          stats={[
            { value: "0.4s", label: "100K agents", note: "Single core, 20 iterations." },
            { value: "9.5s", label: "1M agents", note: "Fly.io API node, end-to-end." },
            { value: "20×", label: "MASON speedup", note: "Java, same 100K test." },
            { value: "105×", label: "Mesa speedup", note: "Python, same 100K test." },
          ]}
        />

        <h3>Scaling table.</h3>
        <table>
          <thead>
            <tr>
              <th>Agents</th>
              <th>Runtime</th>
              <th>Throughput</th>
              <th>Memory</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1,000</td><td>0.02s</td><td>1.0M agent-steps/s</td><td>5 MB</td></tr>
            <tr><td>10,000</td><td>0.15s</td><td>1.33M agent-steps/s</td><td>15 MB</td></tr>
            <tr><td>100,000</td><td>1.8s</td><td>1.11M agent-steps/s</td><td>80 MB</td></tr>
            <tr><td>1,000,000</td><td>9.5s</td><td>2.1M agent-steps/s</td><td>600 MB</td></tr>
          </tbody>
        </table>
        <p className="text-ink-500 text-[13px]">
          Measured from the production Fly.io deployment. NetLogo crashes
          before it reaches the first row at this scale.
        </p>

        <h2>Phase transition at γ<sub>c</sub> = 1.33.</h2>
        <p>
          In the SUMO traffic validation, the cooperation bonus{" "}
          <code>γ</code> exhibits a sharp phase transition at the critical
          value <code>γ_c = 1.33</code>. Below it, the system collapses to
          all-defect (0% cooperation). Above it, it snaps to all-cooperate
          (100% cooperation). The transition is <strong>scale-invariant</strong>{" "}
          from N = 500 up through N = 10,000 — the same critical point, the
          same binary flip.
        </p>
        <p>
          This is the cheap-to-read version of Theorem 2.1. The Lyapunov
          function has two regimes, not a continuum, and the crossing is at a
          single payoff ratio.
        </p>

        <h2>Real-world integrations.</h2>

        <h3>SUMO — urban traffic.</h3>
        <p>
          With BTUT coordinating a 1,000+ vehicle intersection, above-critical{" "}
          <code>γ</code> yields a 14 m/s average speed and 10-second average
          wait — a <strong>+40% speed improvement</strong> and a{" "}
          <strong>−53% wait-time reduction</strong> against an uncoordinated
          baseline. Sustained throughput sits at{" "}
          <strong>1,800 vehicles/hour</strong>. The optimal hub-weight{" "}
          <code>τ</code> window is 0.4–0.8; <code>τ = 0.8</code> gives a
          22.6% wait-time reduction.
        </p>

        <h3>ROS — physical swarms.</h3>
        <p>
          BTUT ships as a <code>btut_node</code> ROS service exposing{" "}
          <code>RunSimulation</code> and <code>GetStrategy</code>.{" "}
          <strong>Coordination latency is &lt; 100 ms for 100 agents</strong>{" "}
          and the primitive is real-time capable up to 10,000 agents. The
          example launch file coordinates a 5-robot Turtlebot3 swarm with{" "}
          <code>γ = 1.8</code>, <code>τ = 0.4</code>.
        </p>

        <h2>Why this matters.</h2>
        <p>
          DARPA Mathematical Challenge 13 asks how to coordinate millions of
          autonomous agents efficiently, in real time. The conventional
          assumption is that &ldquo;efficiently&rdquo; implies a cluster.
          BTUT&rsquo;s answer is that efficiently implies a different
          mathematical object: a kernel-weighted contraction, not a PDE. On a
          single Fly.io node, one million agents converge to equilibrium in
          under ten seconds. That is not an engineering optimization. That is
          a reduction.
        </p>

        <Callout label="Source">
          All claims above are verifiable from the open-source BTUT
          repository: proofs are in <code>docs/mathematics/proofs.md</code>,
          benchmarks in <code>benchmarks/benchmark_suite.py</code>, SUMO
          validation in <code>docs/validation/VALIDATION_RESULTS.md</code>.
        </Callout>

        <ChapterFooter
          prev={{ href: "/primitives", label: "The Four Primitives" }}
          next={{ href: "/crystara", label: "Crystara — Structure" }}
        />
      </Essay>
    </>
  );
}
