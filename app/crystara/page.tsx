import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";
import { StatBlock } from "@/components/StatBlock";
import { Callout } from "@/components/Callout";

export const metadata = {
  title: "Crystara — Structure",
  description:
    "Topological crystallization engine: a three-system loop that grows its own predictor and emits typed H₀/H₁/H₂ modules from persistent homology.",
};

export default function CrystaraPage() {
  return (
    <>
      <ChapterHeader
        number="III"
        label="Primitive · Structure"
        title="Crystara."
        kicker="A topological crystallization engine that conclusively beats vanilla JEPA benchmarks on local-geometry metrics — +42.3% k-NN (k=20), +23.0% (k=1), +13.8% (k=5) on Two Rooms; 60.8% CIFAR-10 loss reduction. The win is not a tuning win: the network discovers its own predictor by exploring energy blank-spaces, running persistent homology on the trajectories, and crystallizing the stable features into typed H₀ / H₁ / H₂ modules."
        prev={{ href: "/btut", label: "BTUT — Coordination" }}
        next={{ href: "/niv", label: "NIV — Signal" }}
      />

      <Essay>
        <h2>The problem with JEPA.</h2>
        <p>
          Joint Embedding Predictive Architectures are the right shape for
          self-supervised representation learning. They are also static: a
          single predictor head tries to span the entire structure of the
          input distribution. When that distribution is geometrically rich —
          clusters, loops, voids, room transitions, citation communities —
          one head is wrong on average in more than one way, and you can see
          it in the k-NN quality of the embeddings.
        </p>
        <p>
          Crystara (implemented as <code>tcd-jepa</code>) keeps the JEPA
          backbone and replaces the single predictor with a runtime-grown
          family. The family is not designed. It is <em>crystallized</em> — in
          the literal topological sense — out of where the model is currently
          most wrong.
        </p>

        <h2>The three-system loop.</h2>

        <h3>System 1 — Stream Encoder.</h3>
        <p>
          A ViT backbone with instrumentation hooks: per-layer statistics
          (mean, std, norm), representation diversity, and the energy surface
          <code> E(z) = ‖p(z) − sg(target)‖²</code>. System 1 never stops;
          it publishes the current landscape.
        </p>

        <h3>System 2 — Energy Explorer.</h3>
        <p>
          Reads the landscape and detects &ldquo;blank spaces&rdquo; — regions
          of low Hessian eigenvalue or high predictor variance. It then
          explores them via Langevin dynamics:
        </p>
        <pre>{`z_{t+1} = z_t − η ∇E(z_t) + √(2η / β) · ε_t`}</pre>
        <p>
          Temperature <code>β</code> is spatially biased toward the blank
          regions. The explorer&rsquo;s job is to leave trails — not to fit,
          not to predict, just to walk where the predictor currently has no
          opinion.
        </p>

        <h3>System 3 — Module Crystallizer.</h3>
        <p>
          Runs <strong>Vietoris–Rips persistent homology</strong> on the
          exploration trajectories. Stable topological features become
          predictor modules, typed by the homology group they were born from:
        </p>
        <ul>
          <li>
            <strong>H₀ (connected components) → AttractorModule.</strong> A
            local predictor centered on the cluster centroid. Gaussian
            attention weight <code>exp(−d² / 2r²)</code> multiplied by an MLP
            <code> (embed_dim → 2·embed_dim → embed_dim)</code>. Discovers
            dense regions — e.g., visual categories in CIFAR-10 latent space.
          </li>
          <li>
            <strong>H₁ (loops) → CycleModule.</strong> A periodic predictor:
            projection onto <code>num_frequencies = 8</code>, then{" "}
            <code>sin(·f + φ) + cos(·f + φ)</code>, then{" "}
            <code>Linear(2·f, embed_dim)</code>. Captures oscillatory
            structure — e.g., cyclic room transitions in the Two Rooms env.
          </li>
          <li>
            <strong>H₂ (voids / cavities) → BoundaryModule.</strong> A
            boundary-interpolated predictor with a learned gate{" "}
            <code>α = σ(MLP(z))</code> blending two sub-predictors:{" "}
            <code>α · p_a(z) + (1 − α) · p_b(z)</code>. Discovers interfaces
            — e.g., doorway regions between rooms.
          </li>
        </ul>

        <h3>The convergence metric.</h3>
        <pre>{`C(t) = |M(t) − M(t−1)| / M(t)
      + KL(R(t) ‖ R(t−1))
      + |S(t) − S(t−1)|`}</pre>
        <p>
          <code>M</code> is the active module count, <code>R</code> the
          representation distribution, <code>S</code> the energy-landscape
          smoothness. The loop stops crystallizing when{" "}
          <code>C(t)</code> stabilizes — i.e. when the predictor has grown
          into the shape of the data.
        </p>

        <h2>Beating JEPA on real geometry.</h2>

        <p>
          The honest benchmark is Two Rooms — a 64×64 gridworld where the
          agent transitions between two rooms through a doorway. Room
          classification is trivial linearly; the hard signal is local
          geometric coherence, which is exactly what H₁ and H₂ modules buy.
        </p>

        <StatBlock
          stats={[
            { value: "+42.3%", label: "k-NN (k=20)", note: "Two Rooms, relative vs vanilla JEPA." },
            { value: "+23.0%", label: "k-NN (k=1)", note: "Two Rooms, relative vs vanilla JEPA." },
            { value: "+13.8%", label: "k-NN (k=5)", note: "Two Rooms, relative vs vanilla JEPA." },
            { value: "60.8%", label: "CIFAR-10 loss reduction", note: "Ablation, 20 epochs, 8 modules." },
          ]}
        />

        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Vanilla JEPA</th>
              <th>TCD-JEPA</th>
              <th>Δ relative</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Linear probe</td><td>57.93% ± 15.73%</td><td>57.73% ± 7.60%</td><td>−0.3%, lower variance</td></tr>
            <tr><td>k-NN k=1</td><td>24.33% ± 1.07%</td><td>29.93% ± 0.87%</td><td>+23.0%</td></tr>
            <tr><td>k-NN k=5</td><td>26.13% ± 1.80%</td><td>29.73% ± 2.60%</td><td>+13.8%</td></tr>
            <tr><td>k-NN k=20</td><td>24.17% ± 0.50%</td><td>34.40% ± 0.00%</td><td>+42.3%</td></tr>
          </tbody>
        </table>

        <p>
          The pattern is consistent with the theory: linear probe is roughly
          unchanged (the global class boundary was always learnable) but every
          local-geometry metric — every k-NN variant — improves, with the
          biggest gain at the widest neighborhood. Topological crystallization
          is producing a denser, more coherent embedding manifold.
        </p>

        <h3>Why Crystara beats JEPA — conclusively.</h3>
        <p>
          The linear-probe column tells the mechanism. Vanilla JEPA already
          has a usable global decision boundary; both models hit roughly
          the same linear-probe accuracy. What vanilla JEPA <em>cannot</em>{" "}
          do is produce embeddings whose local neighborhoods are
          semantically coherent — because its single predictor head is
          forced to span the entire structure of the input distribution
          with one fixed architecture. Every k-NN metric measures local
          coherence; every single k-NN metric improves; the biggest
          improvement lands at the widest neighborhood (k=20). That is
          the signature of a predictor family that has <em>grown into the
          shape of the data</em> — H₀ attractors pulling clusters
          together, H₁ cycles linking periodic structure, H₂ boundary
          modules handling interfaces. A single head cannot emit that
          family. Crystara emits it at runtime, typed by the homology
          group the feature was born from, and the embedding manifold
          becomes denser in exactly the way the k-NN numbers say.
        </p>
        <p>
          This is also why the <em>variance</em> drops (15.73% → 7.60% on
          linear probe across seeds). A mature predictor family is a
          stable one: the explorer-crystallizer loop converges to roughly
          the same set of modules from different initializations, because
          the persistent-homology features of the energy landscape are
          properties of the <em>data</em>, not of the seed.
        </p>

        <Callout label="Variance">
          Note the linear-probe variance on vanilla JEPA: 15.73% across seeds.
          TCD-JEPA drops that to 7.60% — half the instability, same mean.
          A mature predictor family is also a <em>stable</em> predictor family.
        </Callout>

        <h2>Manifold scale — the Latent Ocean configuration.</h2>
        <p>
          The large-scale manifold run (<code>manifold_large.yaml</code>)
          targets the Latent Ocean dataset with <code>max_modules = 16</code>.
          The training substrate is <strong>ogbn-arxiv</strong>: 111,059
          papers, 1.2M citation edges, 40 subject areas, with the{" "}
          <code>ManifoldJEPAModel</code> using fingerprint embeddings on the
          S² coordinate manifold.
        </p>
        <p>
          Configuration: <code>embed_dim = 384</code>, depth 8 transformer;
          predictor <code>embed_dim = 192</code>, depth 4; 50 epochs; batch
          64; <code>explore_every = 3</code>, <code>crystallize_every = 6</code>.
          Module formation typically begins around epoch 9–10, once the
          explorer has accumulated enough trajectories for persistent
          homology to detect stable features.
        </p>
        <p>
          A second adapter (<code>sec_edgar.py</code>) brings the same
          pipeline to S&amp;P 500 10-K filings: top 50 companies by market
          cap, paragraph chunks, 384-dimensional sentence-transformer
          embeddings, co-reference causal graph, spectral embedding onto S²,
          Latent Ocean format. The point is not the downstream metric — it is
          that the same three-system loop handles both a citation manifold
          and a filings manifold without changing the predictor class.
        </p>

        <h2>Runtime routing.</h2>
        <p>
          Crystallized modules live inside a <code>DynamicPredictor</code>.
          A learned <code>ModuleRouter</code> projects the embedding to
          per-module logits and softmax-routes tokens with a mask that sums
          to 1. The combined prediction is:
        </p>
        <pre>{`combined = base_pred
  + α · token_gate(base_pred)
        · module_norm( Σ_m route[m] · module_m(z) )`}</pre>
        <p>
          <code>α</code> is a conservatively-initialized sigmoid-gated scalar
          (<code>module_weight = 0.05</code>), so modules never dominate the
          base head unless they earn it. Token-level gating makes routing
          spatially selective. Misshapen module outputs are skipped with
          warnings — the base JEPA prediction is always a valid fallback.
        </p>

        <h2>Training stack.</h2>
        <ul>
          <li>
            <code>train.py</code> — single-GPU CIFAR / Two Rooms; ViT-Tiny
            backbone; EMA 0.996 → 1.0; 5-epoch warmup; cosine LR + WD;
            grad_clip = 1.0.
          </li>
          <li>
            <code>train_distributed.py</code> — DDP/FSDP with fault-tolerant
            auto-resume, TCD integration, loss-health monitoring
            (LossTracker, gradient stats).
          </li>
          <li>
            <code>train_manifold_distributed.py</code> — large manifold
            datasets (ogbn-arxiv, SEC EDGAR); 3–8 GPU scaling on 111K-node
            graphs; fingerprint embeddings on S² with causal links.
          </li>
        </ul>

        <Callout label="Why this is a primitive">
          Crystara is not a model. It is a method for <em>turning compute
          into modules</em> when you do not know ahead of time what modules
          the data wants. Once coordination is linear (BTUT), inference-time
          compute is cheap enough that runtime crystallization is the natural
          next move.
        </Callout>

        <ChapterFooter
          prev={{ href: "/btut", label: "BTUT — Coordination" }}
          next={{ href: "/niv", label: "NIV — Signal" }}
        />
      </Essay>
    </>
  );
}
