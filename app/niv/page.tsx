import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";
import { StatBlock } from "@/components/StatBlock";
import { Callout } from "@/components/Callout";
import { SourceBar } from "@/components/SourceBar";
import { ImpactBlock } from "@/components/ImpactBlock";

export const metadata = {
  title: "NIV — Signal",
  description:
    "National Impact Velocity: a macro-stress scalar built on the regenerative-capital thesis — the velocity of capital formation with compounding margins, measured against cumulative friction. OOS ROC-AUC 0.8538 at 18 months across 504 months (1970–2024), 98.5% false-alarm suppression, 41.71% orthogonal variance beyond the Fed yield curve. Under Gini importance the regenerative-capital term scores 0.9328; the yield spread scores 0.0298.",
};

export default function NivPage() {
  return (
    <>
      <ChapterHeader
        number="V"
        label="Inversion · Read capital formation, not sentiment"
        title="NIV."
        kicker="Every mainstream recession indicator reads sentiment. The yield curve reads what bond traders expect the Fed to do; the LEI averages coincident series; DSGE assumes a return to equilibrium. None of them read where capital physically goes. Regenerationism inverts that: regime health is the velocity of capital formation with compounding margins, measured against cumulative friction. NIV is the school's first operational instrument — the philosophy written as a scalar and handed 504 months of walk-forward history. Every weight is published; every input is a public FRED series."
        prev={{ href: "/crystara", label: "Crystara — Grow the architecture" }}
        next={{ href: "/participatory-data-estate", label: "Participatory Data Estate" }}
      />

      <SourceBar
        resources={[
          { kind: "site", label: "regenerationism.ai", href: "https://regenerationism.ai" },
          { kind: "repo", label: "github.com/direncode/regenerationism", href: "https://github.com/direncode/regenerationism" },
          { kind: "tear", label: "NIV Tear Sheet", href: "/NIV_TearSheet.pdf" },
          { kind: "paper", label: "NIV — Full Paper", href: "/NIV_Paper.pdf" },
        ]}
      />

      <Essay>
        <ImpactBlock
          ifRight={
            <>
              Central banks and allocators gain an 18-month stress signal
              orthogonal to the yield curve — 41.71% of variance the spread
              cannot see.
            </>
          }
          mattersTo={
            <>Central banks, sovereign allocators, macro research desks.</>
          }
          notEstablished={
            <>
              Live forward performance. Every number is out-of-sample but
              historical. No real-time track record exists yet.
            </>
          }
        />

        <h2>Regenerationism — a new economic philosophy.</h2>
        <p>
          Regenerationism is the economic school this chapter proposes.
          Its foundational claim is that the leading indicator of
          macroeconomic regime health is the{" "}
          <strong>velocity of regenerative capital formation</strong>{" "}
          — capital flowing into areas of the economy with{" "}
          <em>exponentially compounding margins of value generation</em>{" "}
          (non-residential investment, residential investment, R&amp;D,
          productive-capacity-feeding inventory) — measured against the
          cumulative friction that impedes its circulation (yield
          inversion, positive real rates, rate volatility, idle
          capacity). Regenerative capital is the <em>liberator</em>;
          friction is the <em>drag</em>; the velocity of the first net
          of the second is what the economy actually does.
        </p>
        <p>
          This is a direct challenge to the three dominant frames in
          macroeconomics. The <strong>Fed yield curve</strong> is a{" "}
          <em>sentiment signal</em> — it measures what bond traders
          expect the Fed to do next, and becomes reflexive during QE and
          forward guidance. The <strong>Conference Board LEI</strong>{" "}
          aggregates ten coincident-or-lagging components into a linear
          arithmetic index and cannot detect non-linear regime shifts.{" "}
          <strong>Dynamic Stochastic General Equilibrium</strong> models
          assume an equilibrium return that the credit plumbing of 2008
          showed does not hold. None of these schools measure where the
          money actually <em>goes</em>: into regenerative capital, or
          away from it. Regenerationism measures exactly that, and NIV
          is what happens when the philosophy is written as a scalar and
          handed 504 months of walk-forward history.
        </p>
        <p>
          The repository is named{" "}
          <a
            href="https://github.com/direncode/regenerationism"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>regenerationism</code>
          </a>{" "}
          for exactly this reason — the school precedes the signal. NIV
          is its first emitted instrument; the next instruments will
          follow the same template (thrust · regenerative-capital kernel
          · slack · drag, validated on public data with walk-forward
          discipline) across monetary, energy-grid, and supply-chain
          regimes. The methodology is transferable because the
          philosophy is.
        </p>
        <p>
          The empirical receipt for the thesis comes from the ensemble
          itself. Under Gini-impurity feature importance, the
          regenerative-capital term <code>efficiency_sq</code> scores{" "}
          <strong>0.9328</strong> — the highest in the entire
          framework. The Fed yield spread scores{" "}
          <strong>0.0298</strong>, which is 31.2× smaller. The model was
          not told to prefer regenerative capital. It was asked which
          feature best predicts macroeconomic regime shifts, and it
          picked the school unprompted.
        </p>

        <h2>What a macro primitive looks like.</h2>
        <p>
          The Fed yield-curve spread is the canonical macro stress signal.
          It is also a single number the market has known about for
          decades. The interesting question is not whether you can match
          it, but whether you can add orthogonal information — a scalar
          that captures stress the yield curve misses, without being a
          black box.
        </p>
        <p>
          NIV is built from four primitives that are already, on their
          own, understood by macroeconomists. The work was in composing
          them around the regenerative-capital thesis in a way that
          remains economically interpretable, differentiable, and
          reproducible from public data only — then validating the
          composition across 42 years and six stress tests with strict
          walk-forward discipline.
        </p>

        <h3>The formula.</h3>
        <pre>{`NIV_t  =  ( u_t · P_t² )  /  ( X_t + F_t )^η         η ∈ [1.0, 2.5]

  u = tanh( +1.0 · ΔG  +  1.0 · ΔA  −  0.7 · Δr )          # Thrust
  P = ( Investment · 1.15 ) / GDP                          # Efficiency
  X = 1 − ( TCU / 100 )                                    # Slack
  F = 0.4 · s  +  0.4 · max(0, r − π)  +  0.2 · σ          # Drag`}</pre>
        <p>
          <strong>Thrust</strong> bounds investment YoY growth, M2 money
          growth, and Fed Funds rate change through a tanh. Bounded
          [−1, +1]. Positive = expansion impulse; negative = contraction
          impulse. <strong>Efficiency</strong> is regenerative capital as
          a share of GDP, with a 1.15 R&amp;D/education multiplier,
          squared in the numerator to reward productive allocation.{" "}
          <strong>Slack</strong> is capacity headroom (1 − TCU/100).{" "}
          <strong>Drag</strong> is a weighted penalty over yield
          inversion magnitude, positive real rate, and 12-month rate
          volatility. <strong>Elasticity</strong> η controls how steeply
          friction punishes thrust. All six weights and η are adjustable
          in the live simulator — sliders, not secrets. No proprietary
          data, no hidden parameters.
        </p>

        <h2>Public data — 8 FRED series.</h2>
        <p>
          Every NIV input comes from the Federal Reserve Economic Data
          (FRED) API. You reproduce the entire pipeline with a free API
          key and eight series:
        </p>
        <table>
          <thead>
            <tr><th>Series</th><th>Name</th><th>Component</th></tr>
          </thead>
          <tbody>
            <tr><td>GPDIC1</td><td>Real Private Domestic Investment</td><td>Thrust, Efficiency</td></tr>
            <tr><td>M2SL</td><td>M2 Money Stock</td><td>Thrust</td></tr>
            <tr><td>FEDFUNDS</td><td>Federal Funds Rate</td><td>Thrust, Drag</td></tr>
            <tr><td>GDPC1</td><td>Real GDP</td><td>Efficiency</td></tr>
            <tr><td>TCU</td><td>Capacity Utilization</td><td>Slack</td></tr>
            <tr><td>T10Y3M</td><td>10Y – 3M Yield Spread</td><td>Drag</td></tr>
            <tr><td>CPIAUCSL</td><td>Consumer Price Index</td><td>Drag</td></tr>
            <tr><td>USREC</td><td>NBER Recession Indicator</td><td>Validation</td></tr>
          </tbody>
        </table>

        <h2>Walk-forward out-of-sample.</h2>

        <StatBlock
          stats={[
            { value: "0.8538", label: "ROC-AUC @ 18 mo", note: "Discrimination power, L2 ensemble." },
            { value: "98.5%", label: "False-alarm filter", note: "7 critical alerts in 504 months." },
            { value: "41.71%", label: "Orthogonal variance", note: "Beyond the Fed 10Y – 3M spread." },
            { value: "504 mo", label: "Validation span", note: "1970 → 2024, six OOS tests." },
          ]}
        />

        <p>
          Protocol: expanding-window walk-forward, retrained every 5
          months, warm-up through 1983. No lookahead bias — only data up
          to <code>t</code> is used to predict horizons at{" "}
          <code>t + h</code>. The ensemble is L2 Logistic Regression +
          AdaBoost (15 depth-1 stumps, learning rate 0.1) + a small tanh
          neural network. Probability thresholds: yellow 12 – 35%, red
          &gt; 35%.
        </p>

        <h3>Multi-horizon performance.</h3>
        <p>
          Most economic indicators degrade as the forecast horizon
          lengthens. NIV does the opposite — it sharpens, because the
          destruction of regenerative capital takes roughly eighteen
          months to metastasize into headline GDP. That structural gap is
          exactly what the signal measures.
        </p>
        <table>
          <thead>
            <tr>
              <th>Horizon</th>
              <th>Ensemble AUC</th>
              <th>Logistic AUC</th>
              <th>Ens. α</th>
              <th>Brier</th>
              <th>Opt. F1</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>3 mo</td><td>0.7702</td><td>0.7434</td><td>+0.0268</td><td>0.0949</td><td>0.3471</td></tr>
            <tr><td>6 mo</td><td>0.7444</td><td>0.7283</td><td>+0.0161</td><td>0.1160</td><td>0.2875</td></tr>
            <tr><td>12 mo</td><td>0.8243</td><td>0.7835</td><td>+0.0408</td><td>0.0972</td><td>0.3590</td></tr>
            <tr><td><strong>18 mo</strong></td><td><strong>0.8538</strong></td><td>0.8229</td><td>+0.0309</td><td><strong>0.0891</strong></td><td><strong>0.4545</strong></td></tr>
          </tbody>
        </table>
        <p>
          From 6 months to 18 months: AUC discrimination improves by
          +14.70%, F1 by +58.09%, Brier calibration error falls by
          −23.19%. The optimal classification threshold converges
          empirically to 31 – 33% — which is exactly where the red-alert
          threshold (&gt; 35%) was set.
        </p>

        <h3>Six contraction cycles, forensic breakdown.</h3>
        <p>
          Every major systematic contraction of the modern era is flagged
          by NIV with measurable lead, and the dominant trigger is
          recoverable from the component decomposition:
        </p>
        <table>
          <thead>
            <tr>
              <th>Era</th>
              <th>Lead</th>
              <th>NIV at onset</th>
              <th>Fed spread at onset</th>
              <th>Dominant trigger</th>
              <th>Context</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>~1979</td><td>7 mo</td><td>2.60</td><td>0.57</td><td>Thrust</td><td>Volcker-era shock</td></tr>
            <tr><td>~1980</td><td>17 mo</td><td>−3.08</td><td>0.52</td><td>Thrust</td><td>Double-dip recession</td></tr>
            <tr><td>~1989</td><td>9 mo</td><td>−1.01</td><td>1.89</td><td>Thrust</td><td>S&amp;L / Gulf War cycle</td></tr>
            <tr><td>~2000</td><td>9 mo</td><td>6.75</td><td>0.91</td><td>Thrust</td><td>Dot-Com unwind</td></tr>
            <tr><td>~2006</td><td>19 mo</td><td>−0.31</td><td>1.28</td><td>Thrust</td><td>GFC core onset</td></tr>
            <tr><td>~2019</td><td>3 mo</td><td>2.04</td><td>0.41</td><td>None</td><td>COVID (exogenous)</td></tr>
          </tbody>
        </table>
        <p>
          In 5 out of 6 modern structural crises, the regime shift was
          triggered by <strong>thrust</strong> — the liquidity and
          investment plumbing fracturing long before lagging headline
          metrics register a drop. The 2020 COVID crash is the sole
          exogenous anomaly: NIV correctly diagnoses it as{" "}
          <em>not</em> a structural failure of regenerative capital
          formation, because the pre-shock plumbing was stable.
        </p>

        <h3>Ensemble false-alarm suppression.</h3>
        <p>
          A macro model lives or dies by its false-positive rate. No
          single ML layer is good enough: the neural net, starved of
          compute, flatlines into the baseline; logistic regression
          over-fires during healthy acceleration; boosted stumps are
          hypersensitive. The L2-regularized ensemble enforces
          cross-verification between the three, and the &gt; 35% red
          threshold is only crossed when all three agree.
        </p>
        <table>
          <thead>
            <tr><th>Model</th><th>Months &gt; 35%</th><th>Std. dev.</th></tr>
          </thead>
          <tbody>
            <tr><td>Neural Network</td><td>474</td><td>0.1001</td></tr>
            <tr><td>Logistic Regression</td><td>230</td><td>0.2418</td></tr>
            <tr><td>Boosted Stumps (AdaBoost)</td><td>50</td><td>0.1675</td></tr>
            <tr><td><strong>Final Ensemble</strong></td><td><strong>7</strong></td><td><strong>0.0883</strong></td></tr>
          </tbody>
        </table>
        <p>
          Seven critical alerts in 42 years. The seven months that
          cleared the threshold — Jan 1984 (post-Volcker inflation),
          Oct – Dec 1994 (the Bond Massacre and the 75 bp Fed hike),
          Jan – Feb 1995 (soft-landing friction), and Nov 2007 (GFC core
          onset) — are all genuine macro regime shifts, not noise.
        </p>

        <h2>NIV vs the Fed yield spread.</h2>
        <p>
          The orthogonality question is the most important one: is NIV
          just reverse-engineering the bond market? A correlation audit
          says no.
        </p>
        <table>
          <thead>
            <tr><th>Metric</th><th>Value</th></tr>
          </thead>
          <tbody>
            <tr><td>Smoothed correlation (ρ) vs T10Y3M</td><td>0.7635</td></tr>
            <tr><td>Coefficient of determination (R²)</td><td>58.29%</td></tr>
            <tr><td><strong>Orthogonal variance</strong></td><td><strong>41.71%</strong></td></tr>
          </tbody>
        </table>
        <p>
          NIV shares the macroeconomic baseline priced in by the yield
          curve — that&rsquo;s the 0.76 correlation — but{" "}
          <strong>41.71% of its variance is independent</strong>, and
          that variance is not noise. Under Gini-impurity feature
          importance the ensemble ranks the NIV channels as follows:
        </p>
        <table>
          <thead>
            <tr><th>Feature</th><th>Importance</th></tr>
          </thead>
          <tbody>
            <tr><td><code>efficiency_sq</code></td><td><strong>0.9328</strong></td></tr>
            <tr><td><code>niv_smoothed</code></td><td>0.5560</td></tr>
            <tr><td><code>rate_vol</code></td><td>0.4901</td></tr>
            <tr><td><code>slack</code></td><td>0.4260</td></tr>
            <tr><td><code>niv_acceleration</code></td><td>0.3759</td></tr>
            <tr><td><code>drag</code></td><td>0.1719</td></tr>
            <tr><td><code>thrust</code></td><td>0.1341</td></tr>
            <tr><td><code>spread</code> (Fed 10Y – 3M)</td><td>0.0298</td></tr>
          </tbody>
        </table>
        <p>
          Capital efficiency is <strong>31.2×</strong> more important to
          systematic-risk detection than the yield spread inside a
          multivariate model. NIV front-runs the bond market by tracking
          where the money <em>goes</em> — into regenerative capital, or
          not — rather than the sentiment guiding it.
        </p>

        <h3>GDP forecast benchmark.</h3>
        <p>
          A 20-point grid search over lag (0, 3, 6, 12 months) and
          smoothing window (3 – 18 months) produces an honest
          head-to-head:
        </p>
        <table>
          <thead>
            <tr><th>Lag</th><th>NIV RMSE</th><th>Fed RMSE</th><th>Winner</th></tr>
          </thead>
          <tbody>
            <tr><td>0 mo</td><td><strong>0.1511</strong></td><td>0.1594</td><td>NIV (+0.0083)</td></tr>
            <tr><td>3 mo</td><td><strong>0.1528</strong></td><td>0.1538</td><td>NIV (+0.0010)</td></tr>
            <tr><td>6 mo</td><td>0.1525</td><td><strong>0.1493</strong></td><td>Fed (−0.0032)</td></tr>
            <tr><td>12 mo</td><td>0.1513</td><td><strong>0.1462</strong></td><td>Fed (−0.0050)</td></tr>
          </tbody>
        </table>
        <p>
          NIV dominates at zero lag — it is the better real-time
          snapshot. The yield spread dominates at 12 months, but its
          accuracy across the 20-config grid is{" "}
          <strong>2.7× more volatile</strong> than NIV (RMSE std-dev
          0.0061 vs 0.0023). NIV needs less smoothing to produce a clean
          signal (3 – 9 months) than the Fed spread needs (12 – 18
          months). The two are complements, not substitutes.
        </p>

        <h3>Hybrid allocation.</h3>
        <p>
          An optimization over Fed + NIV weights lands exactly on{" "}
          <strong>60% Fed / 40% NIV</strong>. The hybrid pays a marginal
          +0.0024 RMSE penalty relative to the pure Fed model but buys
          structural diversification — resistance to sentiment
          manipulation through QE and forward guidance, because the 40%
          NIV channel enforces real-world physical investment dynamics as
          a hedge against bond-market reflexivity.
        </p>

        <h2>Six out-of-sample validation tests.</h2>
        <ol>
          <li>
            <strong>Calibrated ensemble performance.</strong> L2 LogReg +
            AdaBoost + NN vote; disagreement widens the confidence
            interval. 98.5% false-alarm filter.
          </li>
          <li>
            <strong>Multi-horizon analysis.</strong> 3, 6, 12, 18 months.
            NIV sharpens with horizon; peak AUC 0.8538 at 18 mo.
          </li>
          <li>
            <strong>Expanding vs fixed window.</strong> The 15-year
            rolling window flatlines 78.2% of the time and missed the
            2023 rate shock entirely (0% vs NIV&rsquo;s 37.5%). Expanding
            window is the clear victor.
          </li>
          <li>
            <strong>Tactical translation benchmark.</strong> NIV vs Fed
            spread RMSE grid search. NIV wins at 0 – 3 mo lag, Fed wins
            at 6 – 12 mo; NIV is 2.7× more stable.
          </li>
          <li>
            <strong>Component analysis.</strong> Gini-ranked feature
            importance; <code>efficiency_sq</code> dominates at 0.9328.
            Black-box resolved.
          </li>
          <li>
            <strong>Forensic orthogonality.</strong> 0.7635 correlation,
            41.71% orthogonal variance, 60/40 hybrid allocation. Proves
            independence from the bond market.
          </li>
        </ol>

        <Callout label="Honest assessment">
          Critical-alert probabilities peak at 40 – 65% during the
          sharpest regime shifts; mid-band yellow alerts sit at 12 – 35%.
          The OOS window carries ~40 strict contraction months across
          504, so confidence intervals are wide by construction — on
          Test 1 the bounds widen to (0, 1) during the peak of the GFC
          because the three underlying models disagree, and the ensemble
          flags that disagreement honestly rather than averaging it
          away. NIV is a useful leading indicator with genuine
          predictive power, not a silver bullet. The strength is
          interpretability, orthogonality, and the transparency of the
          construction. Every number on this page came from walk-forward
          tests with no lookahead, pulled from public FRED data,
          reproducible end-to-end.
        </Callout>

        <h2>Live dashboard — four-regime read-out.</h2>
        <p>
          The dashboard classifies the current NIV score into a
          four-state regime:
        </p>
        <ul>
          <li><strong>Expansion</strong> — score &gt; 5.</li>
          <li><strong>Caution</strong> — score 2 – 5.</li>
          <li><strong>Slowdown</strong> — score 0 – 2.</li>
          <li><strong>Contraction</strong> — score ≤ 0.</li>
        </ul>
        <p>
          Real-time updates from FRED, component breakdown (thrust /
          efficiency / slack / drag), confidence bounds derived from
          inter-model disagreement, and a CSV-export button. Everything
          is derived on the client from public data — there is no
          proprietary backend, no token-gated API.
        </p>

        <h2>Researcher workbench.</h2>
        <ul>
          <li>
            <strong>Scenario simulator.</strong> Adjust every parameter —
            η, investment multiplier, thrust weights, drag weights.
            Project NIV 1 – 5 years forward.
          </li>
          <li>
            <strong>Monte Carlo analysis.</strong> Thousands of
            simulations with uncertainty bands. Quantify confidence
            intervals on the forecast.
          </li>
          <li>
            <strong>Sensitivity analysis.</strong> Tornado plots
            identifying which parameters drive output variance.
          </li>
          <li>
            <strong>Fork &amp; customize.</strong> Clone any model
            configuration, build variants with custom weights.
          </li>
          <li>
            <strong>Reproducibility kit.</strong> Python notebooks,
            Docker containers, full API documentation — reproduce
            everything locally.
          </li>
          <li>
            <strong>Audit log.</strong> Full logging of every
            calculation for governance and peer review.
          </li>
        </ul>

        <h2>Decomposition into primitives.</h2>
        <p>
          NIV is already a composition of four simpler signals. That
          matters because each sub-primitive is independently useful to
          the Latent Ocean:
        </p>
        <ul>
          <li>
            <strong>Thrust (u)</strong> — growth and asset-formation net
            of real-rate drag. Reusable as a &ldquo;direction&rdquo;
            signal for any structural system.
          </li>
          <li>
            <strong>Efficiency (P²) — the regenerative-capital kernel.</strong>{" "}
            Investment-to-output ratio with a 1.15 R&amp;D / education
            multiplier, squared to reward capital flowing into
            compounding-margin formation and punish hollow growth. This
            is where the regenerative-capital thesis lives inside the
            formula; the Gini-importance result (0.9328) is the
            empirical receipt.
          </li>
          <li>
            <strong>Slack (X)</strong> — complement of utilization; how
            much headroom the system has before idle capacity compounds
            into negative margins.
          </li>
          <li>
            <strong>Drag (F)</strong> — weighted penalty composed of
            yield inversion, positive real-rate, and rate volatility.
            Models the credit-circulation inhibitors a DSGE equilibrium
            assumption cannot.
          </li>
        </ul>
        <p>
          Given BTUT for coordination and Crystara for structure
          discovery, NIV is the prototype of a class: small, transparent,
          composable scalar signals the Latent Ocean can emit to external
          systems. One is macro; the next will be monetary; the next
          will be energy-grid. The recipe — known primitives, economic
          interpretation, walk-forward validation, public data, published
          weights — transfers.
        </p>

        <ChapterFooter
          prev={{ href: "/crystara", label: "Crystara — Grow the architecture" }}
          next={{ href: "/participatory-data-estate", label: "Participatory Data Estate" }}
        />
      </Essay>
    </>
  );
}
