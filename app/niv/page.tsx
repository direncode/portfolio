import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";
import { ChapterSection, Bound, Equation } from "@/components/ChapterSection";

export const metadata = {
  title: "NIV",
  description:
    "Thrust as the foundation for regenerative economies. Recession indicators read bond sentiment; NIV measures regenerative capital formation against cumulative friction. ROC-AUC 0.8538 at 18 months over 504 months, against ~0.72 for the 10Y/3M spread.",
};

export default function NivPage() {
  return (
    <>
      <ChapterHeader
        number="IV"
        label="Signal"
        title="NIV."
        kicker="Thrust as the foundation for regenerative economies — the physical mechanics of capital formation, measured against cumulative friction."
        prev={{ href: "/crystara", label: "Crystara" }}
      />

      <Essay>
        <ChapterSection n={1} />
        <p>
          If this holds, central banks and allocators get an 18-month stress
          signal 41.71% orthogonal to the yield curve.
        </p>
        <p>
          Recession indicators read bond-market sentiment. The 10Y/3M spread
          reads what bond traders expect the Fed to do, and expectations are
          reflexive to policy: quantitative easing moves the spread
          directly, and moves investment only through the real economy.
        </p>
        <p>
          I measure the physical mechanics instead. Regime health is the
          velocity at which capital forms where margins compound —
          regenerative capital formation — against the cumulative friction
          impeding its circulation. Regenerationism is the philosophy; NIV
          is its first instrument.
        </p>
        <Equation>{`NIV_t  =  ( u_t · P_t² ) / ( X_t + F_t )^η

u  =  tanh( 1.0·ΔG + 1.0·ΔA − 0.7·Δr )         Thrust
P  =  ( Investment × 1.15 ) / GDP               Efficiency
X  =  1 − ( TCU / 100 )                         Slack
F  =  0.4·s + 0.4·max(0, r−π) + 0.2·σ           Drag`}</Equation>
        <p>
          Thrust is the kinetic impulse mobilising capital, bounded by tanh.
          Efficiency is the regenerative-capital kernel, squared so that
          productive allocation is rewarded nonlinearly. Slack is capacity
          headroom. Drag is a weighted penalty over yield inversion,
          positive real rate and rate volatility. Thrust is discounted by
          friction rather than added to it.
        </p>

        <ChapterSection n={2} />
        <p>
          <strong>The protocol first, because it is what a reviewer
          checks.</strong> Expanding-window walk-forward over 504 months,
          1970–2024. The model retrains every 5 months. Warm-up runs through
          1983. At every step only data up to <code>t</code> is used to
          predict the label at <code>t + h</code>; the target is never
          visible to the fit that predicts it. A 15-year rolling window was
          tested and rejected — it outputs zero probability 78.2% of the
          time.
        </p>
        <p>
          Eight public FRED series and nothing else. <code>GPDIC1</code>{" "}
          (real private domestic investment) drives thrust and efficiency.{" "}
          <code>M2SL</code> (M2 money stock) drives thrust.{" "}
          <code>FEDFUNDS</code> drives thrust and drag. <code>GDPC1</code>{" "}
          (real GDP) drives efficiency. <code>TCU</code> (capacity
          utilisation) drives slack. <code>T10Y3M</code> and{" "}
          <code>CPIAUCSL</code> drive drag. <code>USREC</code> supplies
          validation labels only and is never an input. Every weight above
          is published, so a macro researcher with a free FRED key can
          rebuild the series from this page.
        </p>
        <table>
          <thead>
            <tr><th>Horizon</th><th>Ensemble AUC</th><th>Brier</th><th>Opt. F1</th></tr>
          </thead>
          <tbody>
            <tr><td>3 mo</td><td>0.7702</td><td>0.0949</td><td>0.3471</td></tr>
            <tr><td>6 mo</td><td>0.7444</td><td>0.1160</td><td>0.2875</td></tr>
            <tr><td>12 mo</td><td>0.8243</td><td>0.0972</td><td>0.3590</td></tr>
            <tr><td><strong>18 mo</strong></td><td><strong>0.8538</strong></td><td><strong>0.0891</strong></td><td><strong>0.4545</strong></td></tr>
          </tbody>
        </table>
        <p>
          At 18 months NIV reaches 0.8538 against roughly 0.72 for the
          10Y/3M spread on the same window and the same NBER labels.
          Accuracy improves with horizon rather than decaying — a
          contraction in regenerative capital formation takes about eighteen
          months to reach headline output.
        </p>
        <p>
          The ensemble crosses its 35% alert threshold 7 times in 504
          months, a 98.5% false-alarm filter; its individual layers cross
          474, 230 and 50 times. All seven survivors are nameable events.
        </p>
        <p>
          Correlation with the Fed spread is 0.7635, leaving{" "}
          <strong>41.71% orthogonal variance</strong>. Gini importance puts
          the regenerative-capital term at 0.9328 and the spread at 0.0298 —
          the model picked the thesis unprompted.
        </p>

        <ChapterSection n={3} />
        <Bound>
          <p>
            The effective sample is about eight, not 504. The window holds
            504 months but only around eight US recessions. Every interval
            here rests on that number, and no amount of monthly resolution
            changes it. This is the most important limitation on the page.
          </p>
          <p>
            Out-of-sample but historical. The protocol prevents lookahead
            within the window, but the whole history was known to me when
            the framework was designed. There is no live forward track
            record.
          </p>
          <p>
            Confidence bands widen to (0, 1) at the GFC peak, when the three
            ensemble members disagreed most. The model flags its own
            instability rather than averaging it away — correct, and an
            admission that at the moment of greatest interest it was least
            certain.
          </p>
          <p>
            Methodological feedback was received from Ben Bernanke during
            development. That is feedback on method received while building
            — not an endorsement of the framework, the results, or the
            conclusions, not a review or an approval, and not to be cited as
            any of those.
          </p>
        </Bound>

        <ChapterSection n={4} />
        <ul>
          <li>
            <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6664138" target="_blank" rel="noopener noreferrer">
              SSRN 6664138
            </a>{" "}
            ·{" "}
            <a href="/NIV_SSRN_6664138.pdf" target="_blank" rel="noopener noreferrer">
              full paper (PDF)
            </a>{" "}
            — six validation tests, all tables, the walk-forward protocol,
            and the comparison to the yield curve, LEI and DSGE.
          </li>
          <li>
            <a href="/NIV_TearSheet.pdf" target="_blank" rel="noopener noreferrer">
              Tear sheet (PDF)
            </a>{" "}
            — multi-horizon matrix, feature importance, ensemble
            suppression, six contraction cycles.
          </li>
          <li>
            <a href="https://regenerationism.ai" target="_blank" rel="noopener noreferrer">
              regenerationism.ai
            </a>{" "}
            — live dashboard, parameter simulator, CSV export.
          </li>
          <li>
            <a href="https://github.com/direncode/niv-engine" target="_blank" rel="noopener noreferrer">
              github.com/direncode/niv-engine
            </a>{" "}
            — the engine: FRED pipeline, ensemble, walk-forward harness.
          </li>
          <li>
            <a href="https://github.com/direncode/regenerationism" target="_blank" rel="noopener noreferrer">
              github.com/direncode/regenerationism
            </a>{" "}
            ·{" "}
            <a href="https://github.com/direncode/flux-regenerationism" target="_blank" rel="noopener noreferrer">
              flux-regenerationism
            </a>{" "}
            — the dashboard and simulator.
          </li>
        </ul>

        <ChapterFooter prev={{ href: "/crystara", label: "Crystara" }} />
      </Essay>
    </>
  );
}
