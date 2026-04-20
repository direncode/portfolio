import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";
import { StatBlock } from "@/components/StatBlock";
import { Callout } from "@/components/Callout";

export const metadata = {
  title: "Crystara — Structure",
  description:
    "Topological crystallization engine: a self-organizing extension of JEPA that grows its own predictor at training time and emits typed, routable modules at inference time. +20 to +36.6 AUC points over baseline JEPA across three real heterogeneous graphs.",
};

export default function CrystaraPage() {
  return (
    <>
      <ChapterHeader
        number="III"
        label="Primitive · Structure"
        title="Crystara."
        kicker="Crystara beats vanilla JEPA everywhere it has been tested — and on the Georgetown CSET semiconductor supply chain it also beats supervised GAT (DeepMind), GCN (Google Brain), and GraphSAGE. Across three real heterogeneous graphs — CSET semiconductor (519 entities), GDELT global news (380 entities), SEC EDGAR filings (9,725 entities, ~3.9M edges) — Crystara adds +20 to +36.6 AUC points to baseline JEPA on self-supervised link prediction, and scales to entity counts where GAT runs out of memory. On the semiconductor graph, the pipeline crystallizes 16 interpretable modules that map 1-to-1 to real industry clusters — with no labels, no prompting. To my knowledge, the first runtime-discovered predictor for the JEPA family."
        prev={{ href: "/btut", label: "BTUT — Coordination" }}
        next={{ href: "/niv", label: "NIV — Signal" }}
      />

      <Essay>
        <h2>The problem with JEPA.</h2>
        <p>
          Joint Embedding Predictive Architectures are the right shape for
          self-supervised representation learning. They are also static: a
          single predictor head tries to span the entire structure of the
          input distribution. When that distribution is geometrically
          rich — clusters, loops, voids, room transitions, citation
          communities, supply-chain hierarchies — one head is wrong on
          average in more than one way, and you can see it in the k-NN
          quality of the embeddings and in link-prediction AUC.
        </p>
        <p>
          Crystara (implemented as <code>tcd-jepa</code>) keeps the JEPA
          backbone and replaces the single predictor with a runtime-grown
          family. The family is not designed. It is <em>crystallized</em>{" "}
          — in the literal topological sense — out of where the model is
          currently most wrong. To my knowledge it is the first
          runtime-discovered predictor architecture for the JEPA family.
        </p>

        <h2>The three-system loop.</h2>

        <h3>System 1 — Stream Encoder.</h3>
        <p>
          A ViT backbone with EMA target network, instrumentation hooks
          (per-layer statistics, representation diversity), and the energy
          surface <code>E(z) = ‖p(s_θ(x)) − sg(s_ξ(y))‖²</code>. System 1
          never stops; it publishes the current landscape.
        </p>

        <h3>System 2 — Recursive Manifold Explorer.</h3>
        <p>
          Reads the landscape and detects &ldquo;blank spaces&rdquo; —
          regions of low Hessian eigenvalue or high predictor variance. It
          then walks them via Langevin dynamics on a Fisher-information
          metric, biased toward uncertain regions:
        </p>
        <pre>{`z_{t+1} = z_t − η G(z_t)⁻¹ ∇E(z_t) + √(2η / β) · ε_t`}</pre>
        <p>
          Temperature <code>β</code> is spatially biased toward the blank
          regions. The explorer&rsquo;s job is to leave trails — not to
          fit, not to predict, just to walk where the predictor currently
          has no opinion.
        </p>

        <h3>System 3 — Module Crystallizer.</h3>
        <p>
          Runs <strong>Vietoris–Rips persistent homology</strong> on the
          exploration trajectories. Stable topological features become
          predictor modules, typed by the homology group they were born
          from:
        </p>
        <ul>
          <li>
            <strong>H₀ (connected components) → AttractorModule.</strong>{" "}
            A local predictor centered on the cluster centroid. Gaussian
            attention weight <code>exp(−d² / 2r²)</code> multiplied by an
            MLP <code>(embed_dim → 2·embed_dim → embed_dim)</code>.
            Discovers dense regions — e.g. visual categories, industry
            clusters, citation communities.
          </li>
          <li>
            <strong>H₁ (loops) → CycleModule.</strong> A periodic
            predictor: projection onto <code>num_frequencies = 8</code>,
            then <code>sin(·f + φ) + cos(·f + φ)</code>, then{" "}
            <code>Linear(2·f, embed_dim)</code>. Captures oscillatory
            structure — cyclic transitions, feedback loops in supply
            chains.
          </li>
          <li>
            <strong>H₂ (voids / cavities) → BoundaryModule.</strong> A
            boundary-interpolated predictor with a learned gate{" "}
            <code>α = σ(MLP(z))</code> blending two sub-predictors:{" "}
            <code>α · p_a(z) + (1 − α) · p_b(z)</code>. Discovers
            interfaces — handoff regions between stages of a pipeline,
            doorways between rooms.
          </li>
        </ul>

        <p>
          The loop is closed: new modules feed back into the predictor,
          reshaping the energy surface for the next exploration pass.
          Convergence is monitored via module count <code>M(t)</code>,
          representation distribution <code>R(t)</code>, and
          energy-landscape smoothness <code>S(t)</code>:
        </p>
        <pre>{`C(t) = |M(t) − M(t−1)| / M(t)
      + KL( R(t) ‖ R(t−1) )
      + |S(t) − S(t−1)|`}</pre>

        <h2>Empirical benchmark — three real heterogeneous graphs.</h2>

        <p>
          The authoritative benchmark runs self-supervised link prediction
          (AUC) across three real-world graphs spanning four orders of
          magnitude in edge count, against baseline JEPA and three
          supervised GNN baselines — GAT (DeepMind), GCN (Google Brain),
          GraphSAGE.
        </p>

        <StatBlock
          stats={[
            { value: "+36.6", label: "AUC pts vs JEPA", note: "CSET semiconductor graph, 519 entities." },
            { value: "+22.1", label: "AUC pts vs JEPA", note: "GDELT global news, 380 entities." },
            { value: "+20.0", label: "AUC pts vs JEPA", note: "SEC EDGAR, 9,725 entities / ~3.9M edges." },
            { value: "16", label: "Modules discovered", note: "1-to-1 with real industry clusters." },
          ]}
        />

        <h3>Semiconductor supply chain — CSET, 519 entities.</h3>
        <p>
          Georgetown Center for Security and Emerging Technology data,
          covering the physical semiconductor supply chain (design, fab,
          packaging, specialty chemicals, lithography, and their
          interdependencies). Crystara beats every supervised baseline and
          every self-supervised baseline.
        </p>
        <table>
          <thead>
            <tr><th>Model</th><th>Link-prediction AUC</th><th>Δ vs Crystara</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Crystara</strong></td><td><strong>82.7%</strong></td><td>—</td></tr>
            <tr><td>GAT (DeepMind)</td><td>70.3%</td><td>−12.4 pts</td></tr>
            <tr><td>GCN (Google Brain)</td><td>63.9%</td><td>−18.8 pts</td></tr>
            <tr><td>Baseline JEPA</td><td>46.1%</td><td>−36.6 pts</td></tr>
            <tr><td>GraphSAGE</td><td>33.8%</td><td>−48.9 pts</td></tr>
          </tbody>
        </table>

        <h3>GDELT global news events — 380 entities.</h3>
        <p>
          News-derived event graph. Crystara substantially beats baseline
          JEPA but is behind the supervised GAT and GCN baselines — an
          honest result: the news-event graph has less physical-cluster
          structure than the semiconductor one, and the topological-module
          vocabulary is a weaker match to its geometry.
        </p>
        <table>
          <thead>
            <tr><th>Model</th><th>Link-prediction AUC</th><th>Δ vs Crystara</th></tr>
          </thead>
          <tbody>
            <tr><td>GAT</td><td>92.1%</td><td>+23.0 pts</td></tr>
            <tr><td>GCN</td><td>85.2%</td><td>+16.1 pts</td></tr>
            <tr><td><strong>Crystara</strong></td><td><strong>69.1%</strong></td><td>—</td></tr>
            <tr><td>GraphSAGE</td><td>59.9%</td><td>−9.2 pts</td></tr>
            <tr><td>Baseline JEPA</td><td>47.0%</td><td>−22.1 pts</td></tr>
          </tbody>
        </table>

        <h3>SEC EDGAR financial filings — 9,725 entities, ~3.9M edges.</h3>
        <p>
          The scale test. Crystara completes training; GAT runs out of
          memory and returns no result; GraphSAGE produces no usable
          output; GCN hits 90.8% on edge-reconstruction but only ~7% on
          downstream classification, which is near-random and makes the
          edge number misleading.
        </p>
        <table>
          <thead>
            <tr><th>Model</th><th>Link-prediction AUC</th><th>Note</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Crystara</strong></td><td><strong>66.4%</strong></td><td>Completed at 9,725 entities.</td></tr>
            <tr><td>GCN</td><td>90.8% (edges) / ~7% (cls)</td><td>Near-random on classification.</td></tr>
            <tr><td>Baseline JEPA</td><td>46.4%</td><td>−20.0 pts.</td></tr>
            <tr><td>GraphSAGE</td><td>—</td><td>No usable results.</td></tr>
            <tr><td>GAT</td><td>OOM</td><td>Out of memory.</td></tr>
          </tbody>
        </table>

        <Callout label="Honest assessment">
          The three-graph result is stronger where the graph has
          physical-cluster structure (semiconductor) and weaker where it
          does not (GDELT). GAT and GCN outperform Crystara on GDELT by a
          real margin. The SEC EDGAR story is a <em>scaling</em> story
          more than an accuracy one: Crystara is the only model that
          finishes and produces a usable classification number — but the
          66.4% AUC is not a benchmark-leading number in absolute terms,
          and there is no supervised baseline that both scales and
          classifies to compare against. The headline &ldquo;+20 to +36.6
          AUC pts over baseline JEPA&rdquo; is accurate; &ldquo;beats
          every GNN everywhere&rdquo; would not be.
        </Callout>

        <h2>Qualitative breakthrough — 16 semiconductor modules.</h2>
        <p>
          On the CSET semiconductor graph, Crystara crystallized{" "}
          <strong>16 interpretable modules</strong> that mapped{" "}
          <strong>1-to-1</strong> to real semiconductor supply-chain
          clusters, validated against primary sources (CSET, industry
          trade data). These modules emerged from persistent homology on
          Langevin trajectories — no labels, no prompting.
        </p>
        <ul>
          <li>CMP (chemical-mechanical polishing) pipeline.</li>
          <li>Netherlands / ASML lithography ecosystem.</li>
          <li>Singapore assembly-test-packaging corridor.</li>
          <li>China packaging cluster.</li>
          <li>Design-to-fab chain.</li>
          <li>Specialty chemicals cluster.</li>
          <li>EUV ↔ etch/clean flows.</li>
          <li>AI ASICs ↔ Hitachi dependency.</li>
          <li>Lithography ↔ CMP handoff.</li>
          <li>…and seven more, each independently validated.</li>
        </ul>
        <p>
          The modules capture both obvious clusters (national packaging
          hubs) and hidden dependencies (EUV ↔ etch/clean flows, AI ASIC
          ↔ specialty-equipment relationships). That is the signature of
          a predictor family that has <em>grown into the shape of the
          data</em>: H₀ attractors pulling industry clusters together,
          H₁ cycles linking feedback loops in the manufacturing pipeline,
          H₂ boundary modules handling interfaces between pipeline
          stages.
        </p>

        <h2>Runtime structure discovery &amp; dynamic routing.</h2>
        <p>
          Crystallized modules live inside a <code>DynamicPredictor</code>.
          Each module is typed (H₀ / H₁ / H₂), persistence-scored, and
          lifecycle-managed. A query embedding is routed to modules using
          type-specific geometry:
        </p>
        <ul>
          <li><strong>H₀ modules</strong> — routed by centroid distance.</li>
          <li><strong>H₁ modules</strong> — routed by phase alignment in the learned frequency basis.</li>
          <li><strong>H₂ modules</strong> — routed by distance to the discovered boundary.</li>
        </ul>
        <p>
          A learned gate mixes the module predictions with the base JEPA
          prediction:
        </p>
        <pre>{`combined = base_pred
  + α · token_gate(base_pred)
        · module_norm( Σ_m route[m] · module_m(z) )`}</pre>
        <p>
          <code>α</code> is a conservatively-initialized sigmoid-gated
          scalar (<code>module_weight = 0.05</code>), so modules never
          dominate the base head unless they earn it. A registry tracks
          utilization — low-use modules decay, high-use modules can be
          re-seeded. That lifecycle is what turns &ldquo;a trained
          model&rdquo; into <em>structure-as-artifact at inference
          time</em>: the predictor family is itself an auditable,
          composable object you can inspect, prune, and route against.
        </p>

        <h2>Representation geometry — supporting diagnostics.</h2>
        <p>
          On the controlled Two Rooms environment (64×64 gridworld with a
          doorway), the mechanism is visible in the embedding geometry:
        </p>
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
            <tr><td>Linear probe</td><td>57.93% ± 15.73%</td><td>57.73% ± 7.60%</td><td>−0.3%, variance halved</td></tr>
            <tr><td>k-NN k=1</td><td>24.33% ± 1.07%</td><td>29.93% ± 0.87%</td><td>+23.0%</td></tr>
            <tr><td>k-NN k=5</td><td>26.13% ± 1.80%</td><td>29.73% ± 2.60%</td><td>+13.8%</td></tr>
            <tr><td>k-NN k=20</td><td>24.17% ± 0.50%</td><td>34.40% ± 0.00%</td><td>+42.3%</td></tr>
          </tbody>
        </table>
        <p>
          Linear probe is roughly unchanged — the global class boundary
          was always learnable. Every local-neighborhood metric (k-NN)
          improves, with the biggest gain at the widest neighborhood.
          Variance on the linear probe halves (15.73% → 7.60%), which is
          the clearest evidence that the explorer-crystallizer loop
          converges to roughly the same set of modules from different
          initializations — the persistent-homology features are
          properties of the <em>data</em>, not of the seed.
        </p>

        <h2>Engineering surface.</h2>
        <ul>
          <li>
            <strong>Three orchestrators</strong> (training, distributed,
            manifold) plus the recursive-loop glue.
          </li>
          <li>
            <strong>Persistent-homology backends</strong> with fallback
            chain: giotto-tda → ripser → scipy.
          </li>
          <li>
            <strong>186 tests.</strong> NaN guards, DDP / FSDP
            compatibility, SLURM scripts for multi-node runs.
          </li>
          <li>
            <strong>Nine real-world data adapters.</strong> CSET
            semiconductor, GDELT, SEC EDGAR, USPTO, PubMed, ogbn-arxiv,
            and more — the same three-system loop handles each without
            changing the predictor class.
          </li>
          <li>
            <strong>Typed-module API.</strong> Dynamic loading, runtime
            routing, lifecycle management, and persistence-score-based
            pruning.
          </li>
        </ul>

        <Callout label="Why this is a primitive">
          Crystara is not a model. It is a method for <em>turning compute
          into modules</em> when you do not know ahead of time what
          modules the data wants. Once coordination is linear (BTUT),
          inference-time compute is cheap enough that runtime
          crystallization is the natural next move — and the output is
          not just a prediction but a typed, routable, interpretable
          family of modules that composes cleanly with every other
          primitive in the stack.
        </Callout>

        <ChapterFooter
          prev={{ href: "/btut", label: "BTUT — Coordination" }}
          next={{ href: "/niv", label: "NIV — Signal" }}
        />
      </Essay>
    </>
  );
}
