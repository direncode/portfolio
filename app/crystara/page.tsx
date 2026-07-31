import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";
import { ChapterSection, Bound, Equation } from "@/components/ChapterSection";

export const metadata = {
  title: "Crystara",
  description:
    "Architectures are fixed and scaled. Crystara grows the predictor at runtime — persistent homology over Langevin trajectories, crystallised into typed modules.",
};

export default function CrystaraPage() {
  return (
    <>
      <ChapterHeader
        number="III"
        label="Structure"
        title="Crystara."
        kicker="Grow the architecture at runtime instead of scaling a fixed one."
        prev={{ href: "/btut", label: "BTUT" }}
        next={{ href: "/niv", label: "NIV" }}
      />

      <Essay>
        <ChapterSection n={1} />
        <p>
          If this holds, capability moves along an axis that is not
          parameter count. That matters wherever compute binds and data
          does not.
        </p>
        <p>
          Architecture is a design-time choice; compute is the run-time
          variable. Fix self-attention, then scale it. Nobody reopens that
          because it has not needed reopening.
        </p>
        <p>
          I made the architecture an output. A predictor fails in structured
          ways — differently on clusters, cycles, and the boundaries
          between them. One fixed head spans all of it with a single
          inductive bias. The return came from the representation, not from
          making the fixed one bigger — the same principle as every other
          system here, in a different field.
        </p>
        <p>
          Three systems run in a loop. A ViT backbone publishes the energy
          surface. An explorer walks regions where the predictor has no strong
          opinion, under Langevin dynamics preconditioned by the Fisher
          information metric.
        </p>
        <Equation>{`z_{t+1}  =  z_t  −  η · G(z_t)⁻¹ ∇E(z_t)  +  √(2η / β) · ε_t`}</Equation>
        <p>
          A crystallizer then runs Vietoris–Rips persistent homology over
          those trajectories and turns stable features into typed modules —
          H₀ into attractors, H₁ into cycles, H₂ into boundaries.
        </p>
        <p>
          Persistence is the right selection criterion because of the
          stability theorem: bottleneck distance between two persistence
          diagrams is bounded by the sup-norm distance between the functions
          generating them. Perturb the trajectories slightly and the diagram
          moves slightly, with a proven bound. Langevin trajectories are
          stochastic by construction, so that guarantee is exactly what a
          selection rule needs. Clustering at a chosen k gives none.
        </p>

        <ChapterSection n={2} />
        <p>
          Link prediction AUC on three real heterogeneous entity graphs.
        </p>
        <table>
          <thead>
            <tr><th>Graph</th><th>Crystara</th><th>JEPA</th><th>Supervised</th></tr>
          </thead>
          <tbody>
            <tr><td>CSET semiconductor (519)</td><td><strong>82.7%</strong></td><td>46.1%</td><td>GAT 70.3 · GCN 63.9 · SAGE 33.8</td></tr>
            <tr><td>GDELT news (380)</td><td>69.1%</td><td>47.0%</td><td>GAT 92.1 · GCN 85.2 · SAGE 59.9</td></tr>
            <tr><td>SEC EDGAR (9,725)</td><td>66.4%</td><td>46.4%</td><td>GAT OOM · GCN ~7% cls</td></tr>
          </tbody>
        </table>
        <p>
          On the semiconductor graph it produced sixteen modules mapping
          one-to-one onto real supply-chain structures, validated against
          CSET and trade data. No labels, no prompting, no prior.
        </p>
        <table>
          <thead>
            <tr><th>Module</th><th>Type</th><th>Structure recovered</th></tr>
          </thead>
          <tbody>
            <tr><td>CMP pipeline</td><td>H₀</td><td>Polishing supplier cluster</td></tr>
            <tr><td>ASML ecosystem</td><td>H₀</td><td>Netherlands lithography cluster</td></tr>
            <tr><td>Singapore ATP</td><td>H₀</td><td>Assembly–test–packaging corridor</td></tr>
            <tr><td>China packaging</td><td>H₀</td><td>Back-end packaging cluster</td></tr>
            <tr><td>Specialty chemicals</td><td>H₀</td><td>Precursor and etchant suppliers</td></tr>
            <tr><td>Design-to-fab</td><td>H₁</td><td>Cyclic design → foundry → validation</td></tr>
            <tr><td>EUV ↔ etch/clean</td><td>H₁</td><td>Litho–etch feedback coupling</td></tr>
            <tr><td>AI ASICs ↔ Hitachi</td><td>H₁</td><td>Non-obvious equipment dependency</td></tr>
            <tr><td>Lithography ↔ CMP</td><td>H₂</td><td>Process-stage handoff boundary</td></tr>
          </tbody>
        </table>
        <p>
          Nine shown; the rest and all persistence scores are in the repo.
          The H₁ and H₂ modules are the point — cyclic dependencies and
          stage boundaries are what one head averages away.
        </p>

        <ChapterSection n={3} />
        <Bound>
          <p>
            Three graphs, all heterogeneous entity networks. That is one
            modality, not a survey.
          </p>
          <p>
            Nothing on images, text, or time series. Any claim that this
            generalises to those is unsupported.
          </p>
          <p>
            It loses on GDELT. GAT beats it by 23 points. Event graphs carry
            less persistent structure than physical supply chains — a real
            limit on where the method applies.
          </p>
          <p>
            The SEC EDGAR result is about scale, not accuracy. 66.4% is not
            strong; it is the only model that completes at 9,725 entities.
          </p>
          <p>
            No comparison to a compute-matched scaled baseline has been
            run. This shows the axis exists, not that it wins.
          </p>
        </Bound>

        <ChapterSection n={4} />
        <ul>
          <li>
            <a href="https://github.com/direncode/tcd-jepa" target="_blank" rel="noopener noreferrer">
              github.com/direncode/tcd-jepa
            </a>{" "}
            — the three-system loop, persistent-homology backends, all
            sixteen modules with the CSET validation mapping, benchmark
            configurations, 186 tests.
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
