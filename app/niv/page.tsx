import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";
import { SourceBar } from "@/components/SourceBar";
import { ChapterSection, Bound, Equation } from "@/components/ChapterSection";

export const metadata = {
  title: "NIV — Regenerationism",
  description:
    "Recession indicators read bond-market sentiment. NIV reads the physical mechanics instead: regenerative capital formation against cumulative friction. ROC-AUC 0.8538 at 18 months over 504 months of expanding-window walk-forward, against 0.72 for the 10Y/3M spread.",
};

const SOURCES = [
  { kind: "site" as const, label: "regenerationism.ai", href: "https://regenerationism.ai" },
  { kind: "repo" as const, label: "github.com/direncode/regenerationism", href: "https://github.com/direncode/regenerationism" },
  { kind: "paper" as const, label: "SSRN 6664138", href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6664138" },
  { kind: "tear" as const, label: "NIV Tear Sheet", href: "/NIV_TearSheet.pdf" },
  { kind: "paper" as const, label: "NIV — Full Paper", href: "/NIV_Paper.pdf" },
];

export default function NivPage() {
  return (
    <>
      <ChapterHeader
        number="V"
        label="Inversion · Signal"
        title="NIV."
        kicker="Every mainstream recession indicator reads sentiment — the yield curve reads what bond traders expect the Fed to do. Regenerationism reads the physical mechanics instead: the velocity of capital formation with compounding margins, against the friction that impedes its circulation. NIV is that philosophy written as a scalar."
        prev={{ href: "/crystara", label: "Crystara — Grow the architecture" }}
        next={{ href: "/participatory-data-estate", label: "Participatory Data Estate" }}
      />

      <SourceBar resources={SOURCES} />

      <Essay>
        <ChapterSection numeral="I" />
        <p>
          The canonical recession signal is the 10Y/3M Treasury spread, and
          the reason it is canonical is sound: the bond market aggregates
          the expectations of participants with capital at risk, it prices
          continuously, and its inversions have preceded most post-war US
          recessions. The Conference Board LEI takes a different route to
          the same kind of object, averaging ten component series. Both
          read <em>expectations</em>. DSGE models read a third thing —
          optimising agents returning to equilibrium.
        </p>
        <p>
          The inversion is to stop reading expectations and read the
          physical mechanics. Regenerationism holds that macroeconomic
          regime health is the velocity at which capital forms in places
          with compounding margins — plant, equipment, R&amp;D, capacity
          that produces further capacity — measured against the cumulative
          friction impeding its circulation. Sentiment is downstream of that
          process and is reflexive to policy in a way the process is not:
          quantitative easing and forward guidance move the spread directly,
          and move investment only through the real economy. If the physical
          quantity is what matters, measure it and stop asking the bond
          market what it thinks.
        </p>

        <ChapterSection numeral="II" />
        <p>
          Four terms, all from public data, combined multiplicatively so
          that thrust is discounted by friction rather than added to it.
        </p>
        <Equation note="u is bounded [−1,+1] by tanh, preventing exogenous liquidity shocks from dominating. P is squared to reward productive allocation nonlinearly. η ∈ [1.0, 2.5] sets how steeply friction discounts thrust; default 1.5.">
          {`NIV_t  =  ( u_t · P_t² ) / ( X_t + F_t )^η

u  =  tanh( 1.0·ΔG  +  1.0·ΔA  −  0.7·Δr )         Thrust
P  =  ( Investment × 1.15 ) / GDP                   Efficiency
X  =  1  −  ( TCU / 100 )                           Slack
F  =  0.4·s  +  0.4·max(0, r − π)  +  0.2·σ         Drag`}
        </Equation>
        <p>
          <strong>Thrust</strong> is the kinetic impulse mobilising capital:
          investment YoY growth (ΔG), M2 growth (ΔA), and Fed Funds change
          (Δr, entering negatively — hikes subtract thrust).{" "}
          <strong>Efficiency</strong> is the regenerative-capital kernel —
          real private domestic investment as a share of GDP, scaled by a
          1.15 R&amp;D/education multiplier and squared.{" "}
          <strong>Slack</strong> is capacity headroom.{" "}
          <strong>Drag</strong> is a weighted penalty over yield-inversion
          magnitude (s), positive real rate (r − π, with the max ensuring
          negative real rates do not subtract from drag), and 12-month
          rolling rate volatility (σ).
        </p>
        <p>
          <strong>Eight FRED series, and nothing else.</strong>{" "}
          <code>GPDIC1</code> (real private domestic investment) →
          thrust, efficiency. <code>M2SL</code> (M2 money stock) → thrust.{" "}
          <code>FEDFUNDS</code> → thrust, drag. <code>GDPC1</code> (real
          GDP) → efficiency. <code>TCU</code> (capacity utilisation) →
          slack. <code>T10Y3M</code> (10Y–3M spread) → drag.{" "}
          <code>CPIAUCSL</code> (CPI) → drag. <code>USREC</code> (NBER
          recession indicator) → validation labels only, never an input.
          Every weight above is published and adjustable in the live
          simulator. A macro researcher with a free FRED key can rebuild
          the series from this section alone.
        </p>
        <p>
          The scalar feeds an L2-regularised ensemble — logistic regression,
          AdaBoost over 15 depth-1 stumps at learning rate 0.1, and a small
          tanh network — whose disagreement generates the confidence band.
        </p>

        <ChapterSection numeral="III" />
        <p>
          <strong>Protocol first, because it is what a reviewer checks.</strong>{" "}
          Expanding-window walk-forward over 504 months (1970–2024). The
          model is retrained every 5 months. Warm-up runs through 1983 so
          the first predictions have accumulated history. At every step only
          data up to <code>t</code> is used to predict the label at{" "}
          <code>t + h</code>; the target is never visible to the fit that
          predicts it. A 15-year rolling window was tested as an alternative
          and rejected — it produces zero-probability output 78.2% of the
          time and had no precedent for 5% rates in 2023, where the
          expanding window flagged 37.5%.
        </p>
        <table>
          <thead>
            <tr><th>Horizon</th><th>Ensemble AUC</th><th>Logistic AUC</th><th>Brier</th><th>Opt. F1</th></tr>
          </thead>
          <tbody>
            <tr><td>3 mo</td><td>0.7702</td><td>0.7434</td><td>0.0949</td><td>0.3471</td></tr>
            <tr><td>6 mo</td><td>0.7444</td><td>0.7283</td><td>0.1160</td><td>0.2875</td></tr>
            <tr><td>12 mo</td><td>0.8243</td><td>0.7835</td><td>0.0972</td><td>0.3590</td></tr>
            <tr><td><strong>18 mo</strong></td><td><strong>0.8538</strong></td><td>0.8229</td><td><strong>0.0891</strong></td><td><strong>0.4545</strong></td></tr>
          </tbody>
        </table>
        <p>
          At the 18-month horizon NIV reaches <strong>ROC-AUC 0.8538</strong>{" "}
          against approximately <strong>0.72</strong> for the 10Y/3M spread
          on the same window and the same NBER labels. Accuracy{" "}
          <em>improves</em> with horizon rather than decaying, which is the
          signature the thesis predicts: it takes roughly eighteen months
          for a contraction in regenerative capital formation to reach
          headline output.
        </p>
        <p>
          <strong>False-alarm suppression.</strong> Individually the layers
          are unusable — the neural net crosses the 35% threshold in 474 of
          504 months, logistic in 230, boosted stumps in 50. The ensemble
          crosses in <strong>7</strong>, a 98.5% reduction, and all seven
          are nameable macro events (Jan 1984 post-Volcker; Oct–Dec 1994 the
          bond massacre and the 75bp hike; Jan–Feb 1995 soft-landing
          friction; Nov 2007 GFC onset).
        </p>
        <p>
          <strong>Orthogonality.</strong> Smoothed correlation against the
          Fed spread is ρ = 0.7635, giving R² = 58.29% and{" "}
          <strong>41.71% orthogonal variance</strong>. The mechanism is
          visible in Gini feature importance: the regenerative-capital term{" "}
          <code>efficiency_sq</code> scores <strong>0.9328</strong>, the
          highest in the framework, while the Fed spread scores{" "}
          <strong>0.0298</strong> — a factor of 31.2. The model was asked
          which feature predicts regime shifts and selected the thesis
          without being told to.
        </p>
        <p>
          <strong>GDP forecasting.</strong> Over a 20-configuration grid,
          NIV wins at 0-lag (RMSE 0.1511 vs 0.1594) and 3-lag; the spread
          wins at 6 and 12 months. NIV&rsquo;s RMSE standard deviation
          across configurations is 0.0023 against the spread&rsquo;s 0.0061
          — 2.7× more stable to tuning. An optimiser blending the two lands
          at 60% Fed / 40% NIV.
        </p>

        <ChapterSection numeral="IV" />
        <Bound>
          <p>
            <strong>The effective sample is about eight, not 504.</strong>{" "}
            The window contains 504 months but only around eight US
            recessions. Every confidence interval, every AUC, every
            comparison against the spread rests on that number of
            independent events. Month count is not sample size when the
            events are what you are predicting, and no amount of monthly
            resolution changes it. This is the single most important
            limitation on the page.
          </p>
          <p>
            <strong>Out-of-sample but historical.</strong> The walk-forward
            protocol prevents lookahead within the window. It does not make
            the result a live one. Every number here was produced by
            re-running history under discipline, and the entire history was
            known to me when the framework was designed. There is no
            forward track record.
          </p>
          <p>
            <strong>Confidence bands widen to (0, 1) at the GFC peak.</strong>{" "}
            When the three ensemble members disagreed most — logistic
            0.5052, stumps 0.5915, network 0.6642 — the reported band went
            to its maximum. The model flags its own instability rather than
            averaging it away, which is correct behaviour and also an
            admission that at the moment of greatest interest it was least
            certain.
          </p>
          <p>
            <strong>Methodological feedback, not endorsement.</strong> The
            framework has received methodological feedback from Ben
            Bernanke. That is feedback on method received during
            development. It is <em>not</em> an endorsement of the
            framework, the results, or the conclusions, it does not imply
            review or approval, and it should not be read or cited as any
            of those things.
          </p>
          <p>
            <strong>What would falsify it:</strong> forward emissions that
            fail to lead the next contraction, or an orthogonality result
            that collapses once the 2020s are included as they resolve. Both
            are checkable and neither has been checked.
          </p>
        </Bound>

        <ChapterSection numeral="V" />
        <p>
          If it holds, central banks and allocators gain an 18-month stress
          signal that is 41.71% orthogonal to the yield curve — variance the
          spread cannot see by construction, because the spread prices
          expectations and this measures formation. The practical form is
          not replacement but addition: the optimiser&rsquo;s 60/40 blend is
          the honest recommendation, and the value of the 40% is that it
          does not move when the Fed moves the curve.
        </p>
        <p>
          The institutions this matters to are central bank research
          departments, sovereign wealth funds and public pension allocators
          setting multi-year risk postures, and macro research desks. What
          changes for them is a channel that is immune to the specific
          failure mode that has degraded the yield curve since 2008 —
          reflexivity to the central bank&rsquo;s own operations. A signal
          built from investment, capacity and money supply does not become
          less informative because the Fed is buying duration.
        </p>

        <ChapterSection numeral="VI" />
        <ul>
          <li>
            <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6664138" target="_blank" rel="noopener noreferrer">
              SSRN 6664138
            </a>{" "}
            — the paper.
          </li>
          <li>
            <a href="/NIV_Paper.pdf" target="_blank" rel="noopener noreferrer">
              Full paper (PDF)
            </a>{" "}
            — six validation tests, all tables, the walk-forward protocol,
            and the fair comparison to the yield curve, LEI and DSGE.
          </li>
          <li>
            <a href="/NIV_TearSheet.pdf" target="_blank" rel="noopener noreferrer">
              Tear sheet (PDF)
            </a>{" "}
            — multi-horizon matrix, feature importance, ensemble
            suppression, structural onset diagnostics for six contraction
            cycles.
          </li>
          <li>
            <a href="https://regenerationism.ai" target="_blank" rel="noopener noreferrer">
              regenerationism.ai
            </a>{" "}
            — live dashboard, parameter simulator, Monte Carlo and
            sensitivity analysis, CSV export.
          </li>
          <li>
            <a href="https://github.com/direncode/regenerationism" target="_blank" rel="noopener noreferrer">
              github.com/direncode/regenerationism
            </a>{" "}
            — FRED pipeline, ensemble, walk-forward harness, notebooks.
          </li>
        </ul>

        <ChapterFooter
          prev={{ href: "/crystara", label: "Crystara — Grow the architecture" }}
          next={{ href: "/participatory-data-estate", label: "Participatory Data Estate" }}
        />
      </Essay>
    </>
  );
}
