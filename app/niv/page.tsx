import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";
import { ChapterSection, Bound, Equation } from "@/components/ChapterSection";

export const metadata = {
  title: "NIV",
  description:
    "Recession indicators read bond-market sentiment. NIV reads capital formation against friction. ROC-AUC 0.8538 at 18 months over 504 months of walk-forward, against 0.72 for the 10Y/3M spread.",
};

export default function NivPage() {
  return (
    <>
      <ChapterHeader
        number="IV"
        label="Signal"
        title="NIV."
        kicker="Read physical capital formation, not bond sentiment."
        prev={{ href: "/crystara", label: "Crystara" }}
        next={{ href: "/participatory-data-estate", label: "Participatory Data Estate" }}
      />

      <Essay>
        <ChapterSection n={1} />
        <p>
          If this holds, central banks and allocators get an 18-month
          stress signal that is 41.71% orthogonal to the yield curve.
        </p>
        <p>
          Recession indicators read sentiment. The 10Y/3M spread reads what
          bond traders expect the Fed to do. Expectations are reflexive to
          policy: quantitative easing moves the spread directly, and moves
          investment only through the real economy.
        </p>
        <p>
          I read the physical mechanics instead. Regime health is the
          velocity at which capital forms in places with compounding
          margins, against the friction impeding it. Four terms, combined
          so thrust is discounted by friction rather than added to it.
        </p>
        <Equation>{`NIV_t  =  ( u_t · P_t² ) / ( X_t + F_t )^η

u  =  tanh( 1.0·ΔG + 1.0·ΔA − 0.7·Δr )         Thrust
P  =  ( Investment × 1.15 ) / GDP               Efficiency
X  =  1 − ( TCU / 100 )                         Slack
F  =  0.4·s + 0.4·max(0, r−π) + 0.2·σ           Drag`}</Equation>
        <p>
          Eight FRED series and nothing else. <code>GPDIC1</code>,{" "}
          <code>M2SL</code>, <code>FEDFUNDS</code>, <code>GDPC1</code>,{" "}
          <code>TCU</code>, <code>T10Y3M</code>, <code>CPIAUCSL</code>, and{" "}
          <code>USREC</code> for validation labels only. Every weight above
          is published — a macro researcher with a free FRED key can
          rebuild this from the page.
        </p>

        <ChapterSection n={2} />
        <p>
          The protocol first, because it is what a reviewer checks.
          Expanding-window walk-forward over 504 months, 1970–2024.
          Retrained every 5 months, warm-up through 1983. At every step
          only data up to <code>t</code> predicts the label at{" "}
          <code>t + h</code>. A 15-year rolling window was rejected — it
          outputs zero probability 78.2% of the time.
        </p>
        <table>
          <thead>
            <tr><th>Horizon</th><th>Ensemble AUC</th><th>Brier</th></tr>
          </thead>
          <tbody>
            <tr><td>3 mo</td><td>0.7702</td><td>0.0949</td></tr>
            <tr><td>6 mo</td><td>0.7444</td><td>0.1160</td></tr>
            <tr><td>12 mo</td><td>0.8243</td><td>0.0972</td></tr>
            <tr><td><strong>18 mo</strong></td><td><strong>0.8538</strong></td><td><strong>0.0891</strong></td></tr>
          </tbody>
        </table>
        <p>
          At 18 months NIV reaches 0.8538 against roughly 0.72 for the
          10Y/3M spread on the same window and NBER labels. Accuracy improves
          with horizon rather than decaying — it takes about eighteen
          months for a contraction in capital formation to reach headline
          output.
        </p>
        <p>
          The ensemble crosses its 35% alert threshold 7 times in 504
          months. Its individual layers cross 474, 230 and 50 times. All
          seven are nameable events.
        </p>
        <p>
          Correlation with the Fed spread is 0.7635, leaving 41.71%
          orthogonal variance. Gini importance puts the
          regenerative-capital term at 0.9328 and the spread at 0.0298 —
          the model picked the thesis without being told to.
        </p>

        <ChapterSection n={3} />
        <Bound>
          <p>
            The effective sample is about eight, not 504. The window holds
            504 months but only around eight US recessions. Every interval
            here rests on that number. This is the most important
            limitation on the page.
          </p>
          <p>
            Out-of-sample but historical. The protocol prevents lookahead
            within the window. It does not make the result live — the
            whole history was known to me when the framework was designed.
            No forward track record.
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
            development. That is feedback on method. It is not an
            endorsement of the framework, the results, or the conclusions,
            and should not be cited as one.
          </p>
        </Bound>

        <ChapterSection n={4} />
        <ul>
          <li>
            <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6664138" target="_blank" rel="noopener noreferrer">
              SSRN 6664138
            </a>{" "}
            ·{" "}
            <a href="/NIV_Paper.pdf" target="_blank" rel="noopener noreferrer">
              full paper (PDF)
            </a>{" "}
            — six validation tests, all tables, the fair comparison to the
            yield curve, LEI and DSGE.
          </li>
          <li>
            <a href="/NIV_TearSheet.pdf" target="_blank" rel="noopener noreferrer">
              Tear sheet (PDF)
            </a>{" "}
            — multi-horizon matrix, feature importance, six contraction
            cycles.
          </li>
          <li>
            <a href="https://regenerationism.ai" target="_blank" rel="noopener noreferrer">
              regenerationism.ai
            </a>{" "}
            — live dashboard and parameter simulator.
          </li>
          <li>
            <a href="https://github.com/direncode/regenerationism" target="_blank" rel="noopener noreferrer">
              github.com/direncode/regenerationism
            </a>{" "}
            — FRED pipeline, ensemble, walk-forward harness.
          </li>
        </ul>

        <ChapterFooter
          prev={{ href: "/crystara", label: "Crystara" }}
          next={{ href: "/participatory-data-estate", label: "Participatory Data Estate" }}
        />
      </Essay>
    </>
  );
}
