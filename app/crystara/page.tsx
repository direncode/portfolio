import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";
import { SourceBar } from "@/components/SourceBar";
import { ChapterSection, Bound, Equation } from "@/components/ChapterSection";

export const metadata = {
  title: "Crystara — TCD-JEPA",
  description:
    "Architectures are fixed and scaled. Crystara grows the predictor at runtime: Fisher-information Langevin exploration of the energy landscape, persistent homology over the trajectories, stable features crystallised into typed H₀/H₁/H₂ modules.",
};

const SOURCES = [
  {
    kind: "repo" as const,
    label: "github.com/direncode/tcd-jepa",
    href: "https://github.com/direncode/tcd-jepa",
  },
];

export default function CrystaraPage() {
  return (
    <>
      <ChapterHeader
        number="IV"
        label="Inversion · Structure"
        title="Crystara."
        kicker="The scaling paradigm holds architecture constant and varies compute. Crystara (TCD-JEPA) holds the objective constant and lets the architecture be discovered — the predictor grows modules out of the places it is currently most uncertain."
        prev={{ href: "/btut", label: "BTUT — Coordination" }}
        next={{ href: "/niv", label: "NIV — Read capital formation" }}
      />

      <SourceBar resources={SOURCES} />

      <Essay>
        <ChapterSection numeral="I" />
        <p>
          The prevailing assumption is that architecture is a design-time
          decision and compute is the run-time variable. You choose
          self-attention, fix depth and width, and then vary parameters,
          tokens and steps. This has been extraordinarily productive and the
          reasons are good ones: a fixed architecture is analysable,
          reproducible, and schedulable across a cluster. Nobody re-opens it
          because it has not needed re-opening.
        </p>
        <p>
          The inversion is to let the architecture be an output rather than
          an input. A predictor is wrong in structured, non-uniform ways —
          it fails differently on clustered regions than on cyclic ones than
          on the boundaries between them. A single fixed head must span all
          of that with one inductive bias. If the failure structure is
          non-uniform and discoverable, the predictor can grow a
          corresponding family of specialised modules while it trains, and
          the shape of that family is determined by the data rather than
          chosen in advance.
        </p>

        <ChapterSection numeral="II" />
        <p>
          Crystara keeps the JEPA backbone and objective and replaces the
          single predictor with a runtime-grown family. Three systems run in
          a loop.
        </p>
        <p>
          <strong>System 1 — Stream Encoder.</strong> A ViT backbone with an
          EMA target network, instrumented to publish the energy surface{" "}
          <code>E(z) = ‖p(s_θ(x)) − sg(s_ξ(y))‖²</code> along with per-layer
          statistics and representation diversity.
        </p>
        <p>
          <strong>System 2 — Recursive Manifold Explorer.</strong> Detects
          regions of low Hessian eigenvalue or high predictor variance —
          where the model has no strong opinion — and walks them with
          Langevin dynamics preconditioned by the Fisher information metric:
        </p>
        <Equation note="G(z) is the Fisher information matrix. Preconditioning makes the walk isotropic in distribution space rather than in coordinate space, so exploration is not distorted by arbitrary parameterisation. β is biased spatially toward uncertain regions.">
          {`z_{t+1}  =  z_t  −  η · G(z_t)⁻¹ ∇E(z_t)  +  √(2η / β) · ε_t`}
        </Equation>
        <p>
          <strong>System 3 — Module Crystallizer.</strong> Runs Vietoris–Rips
          persistent homology over the exploration trajectories and turns
          stable topological features into predictor modules, typed by the
          homology group they were born from: H₀ (components) →
          AttractorModule, a local predictor on a cluster centroid with
          Gaussian attention <code>exp(−d²/2r²)</code>; H₁ (loops) →
          CycleModule, a periodic predictor over eight learned frequencies;
          H₂ (voids) → BoundaryModule, an interpolator between two
          sub-predictors under a learned gate <code>α = σ(MLP(z))</code>.
        </p>
        <h3>Why persistence is the right stability criterion.</h3>
        <p>
          The crystallizer must decide which features in a cloud of Langevin
          trajectories are structure and which are sampling noise.
          Persistence answers this without a threshold: build the complex at
          every scale ε at once and record, for each feature, the scale at
          which it is born and the scale at which it dies. Born and dead
          within a narrow band is noise. Surviving a wide band is structure.
        </p>
        <p>
          What makes it the <em>right</em> criterion rather than merely a
          reasonable one is the stability theorem — the bottleneck distance
          between two persistence diagrams is bounded above by the sup-norm
          distance between the functions generating them. Perturb the
          trajectories a little and the diagram moves a little, with a
          proven bound rather than an empirical hope. Langevin trajectories
          are stochastic by construction, so a guarantee against input
          perturbation is precisely what a selection rule needs here.
          Clustering at a chosen k, or thresholding at a chosen density,
          offers no such bound.
        </p>
        <p>
          Modules live in a <code>DynamicPredictor</code>, routed by
          type-specific geometry — centroid distance for H₀, phase alignment
          for H₁, boundary distance for H₂ — and mixed with the base
          prediction under a conservatively initialised gate
          (<code>module_weight = 0.05</code>), so a module earns its
          influence. A registry tracks utilisation; low-use modules decay.
        </p>

        <ChapterSection numeral="III" />
        <p>
          Self-supervised link prediction (AUC) on three real heterogeneous
          entity graphs, against baseline JEPA and three supervised GNN
          baselines.
        </p>
        <table>
          <thead>
            <tr>
              <th>Graph</th>
              <th>Crystara</th>
              <th>JEPA</th>
              <th>Δ</th>
              <th>Supervised baselines</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CSET semiconductor (519)</td>
              <td><strong>82.7%</strong></td>
              <td>46.1%</td>
              <td>+36.6</td>
              <td>GAT 70.3 · GCN 63.9 · SAGE 33.8</td>
            </tr>
            <tr>
              <td>GDELT news (380)</td>
              <td>69.1%</td>
              <td>47.0%</td>
              <td>+22.1</td>
              <td>GAT 92.1 · GCN 85.2 · SAGE 59.9</td>
            </tr>
            <tr>
              <td>SEC EDGAR (9,725 / ~3.9M edges)</td>
              <td>66.4%</td>
              <td>46.4%</td>
              <td>+20.0</td>
              <td>GAT OOM · GCN ~7% cls · SAGE none</td>
            </tr>
          </tbody>
        </table>
        <p>
          Crystara beats baseline JEPA on all three and beats every
          supervised baseline on the semiconductor graph. It loses to GAT
          and GCN on GDELT by a wide margin. On SEC EDGAR it is the only
          model that completes and produces a usable classification number.
        </p>
        <h3>The sixteen discovered modules.</h3>
        <p>
          On the semiconductor graph the crystallizer produced sixteen
          modules that map one-to-one onto real supply-chain structures,
          validated against CSET and industry trade data. No labels, no
          prompting, no supply-chain prior — persistent homology over
          Langevin trajectories in an unsupervised embedding space.
        </p>
        <table>
          <thead>
            <tr>
              <th>Module</th>
              <th>Type</th>
              <th>Structure recovered</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>CMP pipeline</td><td>H₀</td><td>Chemical-mechanical polishing supplier cluster</td></tr>
            <tr><td>ASML ecosystem</td><td>H₀</td><td>Netherlands lithography dependency cluster</td></tr>
            <tr><td>Singapore ATP</td><td>H₀</td><td>Assembly–test–packaging corridor</td></tr>
            <tr><td>China packaging</td><td>H₀</td><td>Back-end packaging cluster</td></tr>
            <tr><td>Specialty chemicals</td><td>H₀</td><td>Precursor and etchant suppliers</td></tr>
            <tr><td>Design-to-fab</td><td>H₁</td><td>Cyclic design → foundry → validation loop</td></tr>
            <tr><td>EUV ↔ etch/clean</td><td>H₁</td><td>Feedback coupling between litho and etch</td></tr>
            <tr><td>AI ASICs ↔ Hitachi</td><td>H₁</td><td>Non-obvious equipment dependency</td></tr>
            <tr><td>Lithography ↔ CMP</td><td>H₂</td><td>Process-stage handoff boundary</td></tr>
          </tbody>
        </table>
        <p>
          Nine are listed; the remaining seven, with persistence scores and
          the validation mapping for all sixteen, are in the repository. The
          H₁ and H₂ modules are the notable ones — cyclic dependencies and
          stage boundaries are precisely what a single predictor head
          averages away, and they are recovered here as typed objects rather
          than diffuse embedding geometry.
        </p>
        <p>
          On the controlled Two Rooms environment the same mechanism shows
          in the embedding: k-NN improves at every k (+23.0% at k=1, +13.8%
          at k=5, +42.3% at k=20) while the linear probe is unchanged, and
          cross-seed variance halves (15.73% → 7.60%) — different
          initialisations converge on the same module set, as expected if
          persistence is finding properties of the data rather than of the
          run.
        </p>

        <ChapterSection numeral="IV" />
        <Bound>
          <p>
            <strong>Three graphs, all heterogeneous entity networks.</strong>{" "}
            Semiconductor supply chain, news events, financial filings. All
            three are graphs of entities and typed relations. That is one
            data modality, not a survey.
          </p>
          <p>
            <strong>Not demonstrated on images, text, or time series.</strong>{" "}
            The Two Rooms result is a diagnostic on a 64×64 gridworld, not a
            vision benchmark. There is no language result. There is no
            sequential or time-series result. Any claim that this
            generalises to those modalities is unsupported by anything here.
          </p>
          <p>
            <strong>Not a general claim about post-transformer
            training.</strong> Crystara is one concrete instance of growing
            an architecture instead of scaling it, evaluated on one modality
            at small scale. It is evidence that the axis exists. It is not
            evidence that the axis beats parameter scaling in general, and
            no comparison to a compute-matched scaled baseline has been run.
          </p>
          <p>
            <strong>It loses on GDELT.</strong> GAT beats Crystara by 23
            points and GCN by 16 on the news-event graph. The most likely
            reading is that event graphs carry less persistent topological
            structure than physical supply chains, so the module vocabulary
            has less to find. That is a real limitation on where the method
            applies, not a tuning gap.
          </p>
          <p>
            <strong>The SEC EDGAR result is about scale, not accuracy.</strong>{" "}
            66.4% is not a strong absolute number. What it demonstrates is
            completion at 9,725 entities where GAT exhausts memory — and
            there is no supervised baseline that both scales and classifies
            to compare against, so the comparison is incomplete by
            construction.
          </p>
          <p>
            <strong>What would falsify it:</strong> a compute-matched fixed
            architecture that recovers the same sixteen structures on the
            semiconductor graph. That would show the modules are a property
            of the representation, not of the crystallisation.
          </p>
        </Bound>

        <ChapterSection numeral="V" />
        <p>
          If it holds, capability moves along an axis that is not parameter
          count. A predictor that grows structure spends compute on
          discovering where it is wrong rather than on making a fixed head
          wider, which matters most where compute is the binding constraint
          and data is not.
        </p>
        <p>
          That describes national and academic labs, publicly funded
          research groups, and teams inside institutions that hold large
          proprietary graphs — supply-chain authorities, financial
          regulators, patent offices — but cannot commission a frontier
          training run. The secondary consequence is interpretability by
          construction: because modules are typed by the homology group they
          were born from, the discovered structure is inspectable rather
          than latent, which is what makes the semiconductor mapping
          checkable against trade data in the first place.
        </p>

        <ChapterSection numeral="VI" />
        <ul>
          <li>
            <a href="https://github.com/direncode/tcd-jepa" target="_blank" rel="noopener noreferrer">
              github.com/direncode/tcd-jepa
            </a>{" "}
            — three-system loop, persistent-homology backends (giotto-tda →
            ripser → scipy fallback), <code>DynamicPredictor</code> and
            router, 186 tests, DDP/FSDP training, SLURM scripts.
          </li>
          <li>
            All sixteen semiconductor modules with persistence scores and
            the CSET validation mapping, plus the three-graph benchmark
            configurations and the nine data adapters, are in the same
            repository.
          </li>
        </ul>

        <ChapterFooter
          prev={{ href: "/btut", label: "BTUT — Coordination" }}
          next={{ href: "/niv", label: "NIV — Read capital formation" }}
        />
      </Essay>
    </>
  );
}
