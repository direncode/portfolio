import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";
import { ChapterSection, Bound, Equation } from "@/components/ChapterSection";

export const metadata = {
  title: "Crystara",
  description:
    "Finding emergent structure from latent embeddings. Architectures are specified in advance and scaled; Crystara discovers structure at runtime — persistent homology over Langevin trajectories, crystallised into typed modules.",
};

export default function CrystaraPage() {
  return (
    <>
      <ChapterHeader
        number="III"
        label="Structure"
        title="Crystara."
        kicker="Finding emergent structure from latent embeddings — the architecture discovered at runtime rather than specified in advance."
        prev={{ href: "/btut", label: "BTUT" }}
        next={{ href: "/niv", label: "NIV" }}
      />

      <Essay>
        <ChapterSection n={1} />
        <p>
          If this holds, capability moves along an axis that is not
          parameter count — which matters wherever compute binds and data
          does not.
        </p>
        <p>
          Architectures are specified in advance and then scaled. Fix
          self-attention, hold depth and width, and vary parameters, tokens
          and steps. The reasons are good: a fixed architecture is
          analysable, reproducible and schedulable. Nobody reopens it
          because it has not needed reopening.
        </p>
        <p>
          I made the architecture an output. A predictor fails in structured
          ways — differently on clusters, on cycles, and on the boundaries
          between them — and one fixed head must span all of it with a
          single inductive bias.
        </p>
        <p>
          Three systems run in a loop. A ViT backbone with an EMA target
          publishes the energy surface. An explorer walks the regions where
          the predictor has no strong opinion, under Langevin dynamics
          preconditioned by the Fisher information metric, so exploration is
          isotropic in distribution space rather than in coordinate space.
        </p>
        <Equation>{`z_{t+1}  =  z_t  −  η · G(z_t)⁻¹ ∇E(z_t)  +  √(2η / β) · ε_t`}</Equation>
        <p>
          A crystallizer runs Vietoris–Rips persistent homology over those
          trajectories and turns stable features into typed modules — H₀
          into attractors, H₁ into cycles, H₂ into boundaries.
        </p>
        <p>
          Persistence is the right selection criterion because of the
          stability theorem: the bottleneck distance between two persistence
          diagrams is bounded by the sup-norm distance between the functions
          generating them. Perturb the trajectories slightly and the diagram
          moves slightly, with a proven bound rather than an empirical hope.
          Langevin trajectories are stochastic by construction, so that
          guarantee is exactly what a selection rule needs. Clustering at a
          chosen k gives none.
        </p>

        <ChapterSection n={2} />
        <p>
          Self-supervised link prediction, AUC, on three real heterogeneous
          entity graphs against baseline JEPA and three supervised GNNs.
        </p>
        <table>
          <thead>
            <tr><th>Graph</th><th>Crystara</th><th>JEPA</th><th>Δ</th><th>Supervised</th></tr>
          </thead>
          <tbody>
            <tr><td>CSET semiconductor (519)</td><td><strong>82.7%</strong></td><td>46.1%</td><td>+36.6</td><td>GAT 70.3 · GCN 63.9 · SAGE 33.8</td></tr>
            <tr><td>GDELT news (380)</td><td>69.1%</td><td>47.0%</td><td>+22.1</td><td>GAT 92.1 · GCN 85.2 · SAGE 59.9</td></tr>
            <tr><td>SEC EDGAR (9,725)</td><td>66.4%</td><td>46.4%</td><td>+20.0</td><td>GAT OOM · GCN ~7% cls</td></tr>
          </tbody>
        </table>
        <p>
          On the semiconductor graph the crystallizer produced sixteen
          modules mapping one-to-one onto real supply-chain structures,
          validated against CSET and industry trade data. No labels, no
          prompting, no supply-chain prior.
        </p>
        <table>
          <thead>
            <tr><th>Module</th><th>Type</th><th>Structure recovered</th></tr>
          </thead>
          <tbody>
            <tr><td>CMP pipeline</td><td>H₀</td><td>Chemical-mechanical polishing suppliers</td></tr>
            <tr><td>ASML ecosystem</td><td>H₀</td><td>Netherlands lithography dependency cluster</td></tr>
            <tr><td>Singapore ATP</td><td>H₀</td><td>Assembly–test–packaging corridor</td></tr>
            <tr><td>China packaging</td><td>H₀</td><td>Back-end packaging cluster</td></tr>
            <tr><td>Specialty chemicals</td><td>H₀</td><td>Precursor and etchant suppliers</td></tr>
            <tr><td>Design-to-fab</td><td>H₁</td><td>Cyclic design → foundry → validation loop</td></tr>
            <tr><td>EUV ↔ etch/clean</td><td>H₁</td><td>Litho–etch feedback coupling</td></tr>
            <tr><td>AI ASICs ↔ Hitachi</td><td>H₁</td><td>Non-obvious equipment dependency</td></tr>
            <tr><td>Lithography ↔ CMP</td><td>H₂</td><td>Process-stage handoff boundary</td></tr>
          </tbody>
        </table>
        <p>
          Nine are shown; the remaining seven, with persistence scores and
          the full validation mapping, are in the repository. The H₁ and H₂
          modules are the point — cyclic dependencies and stage boundaries
          are precisely what a single head averages away, and they are
          recovered here as typed objects rather than diffuse geometry.
        </p>
        <p>
          On the controlled Two Rooms environment the same mechanism shows
          in the embedding: k-NN improves at every k (+23.0% at k=1, +13.8%
          at k=5, +42.3% at k=20) while the linear probe is unchanged, and
          cross-seed variance halves from 15.73% to 7.60%.
        </p>

        <ChapterSection n={3} />
        <Bound>
          <p>
            Three graphs, all heterogeneous entity networks. That is one
            modality, not a survey.
          </p>
          <p>
            Not demonstrated on images, text, or time series. The Two Rooms
            result is a diagnostic on a 64×64 gridworld, not a vision
            benchmark. Any claim of generalisation to those modalities is
            unsupported by anything here.
          </p>
          <p>
            Not a general claim about post-transformer training. This is one
            instance of growing an architecture rather than scaling one,
            evaluated on one modality at small scale, with no
            compute-matched scaled baseline for comparison.
          </p>
          <p>
            It loses on GDELT. GAT beats it by 23 points. Event graphs
            appear to carry less persistent topological structure than
            physical supply chains — a real limit on where the method
            applies, not a tuning gap.
          </p>
          <p>
            The SEC EDGAR result is about scale, not accuracy. 66.4% is not
            a strong absolute number; it is the only model that completes at
            9,725 entities.
          </p>
        </Bound>

        <ChapterSection n={4} />
        <ul>
          <li>
            <a href="https://github.com/direncode/tcd-jepa" target="_blank" rel="noopener noreferrer">
              github.com/direncode/tcd-jepa
            </a>{" "}
            — the three-system loop, persistent-homology backends
            (giotto-tda → ripser → scipy), the <code>DynamicPredictor</code>{" "}
            and router, all sixteen modules with persistence scores and the
            CSET validation mapping, the three-graph benchmark
            configurations, nine data adapters, 186 tests.
          </li>
        </ul>

        <ChapterFooter
          prev={{ href: "/btut", label: "BTUT" }}
          next={{ href: "/niv", label: "NIV" }}
        />
      </Essay>
    </>
  );
}
