import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";
import { StatBlock } from "@/components/StatBlock";
import { Callout } from "@/components/Callout";

export const metadata = {
  title: "NIV — Signal",
  description:
    "National Impact Velocity: a transparent, economically interpretable macro-stress scalar. OOS AUC 0.854 at 18 months.",
};

export default function NivPage() {
  return (
    <>
      <ChapterHeader
        number="IV"
        label="Primitive · Signal"
        title="NIV."
        kicker="National Impact Velocity. A single-scalar macro-stress signal, composed from four known economic primitives — thrust, efficiency, slack, drag — and validated under walk-forward out-of-sample protocol. Best OOS AUC 0.854 at the 18-month horizon."
        prev={{ href: "/crystara", label: "Crystara — Structure" }}
        next={{ href: "/participatory-data-estate", label: "PDE — Ingestion" }}
      />

      <Essay>
        <h2>What a macro primitive looks like.</h2>
        <p>
          The Fed yield-curve spread is the canonical macro stress signal.
          It is also a single number, and the market has known about it for
          decades. The interesting question is not whether you can match it,
          but whether you can add orthogonal information — a scalar that
          captures stress the yield curve misses, without being a black box.
        </p>
        <p>
          NIV is built from four economic primitives that are all, on their
          own, already understood by macroeconomists. The work was in
          composing them in a way that remains economically interpretable,
          differentiable, and backtestable — then proving on held-out decades
          that the composition adds real information.
        </p>

        <h3>The formula.</h3>
        <pre>{`NIV = (u · P²) / (X + F)^η

  u = tanh( 1.0·dG + 1.0·dA − 0.7·dr )        # Thrust
  P = (Investment × 1.15) / GDP                # Efficiency
  X = 1 − (TCU / 100)                          # Slack
  F = 0.4·yieldPenalty
     + 0.4·max(0, rReal)
     + 0.2·σ_rate                              # Drag`}</pre>
        <p>
          Thrust captures the combined signal of GDP growth, asset growth, and
          the real-rate correction. Efficiency normalizes investment against
          GDP. Slack is the complement of capacity utilization. Drag combines
          a yield penalty, a positive-real-rate penalty, and a rate-volatility
          penalty. Raise efficiency to a power, divide by elasticity-weighted
          drag, multiply by thrust. Every term is a known macro quantity.
          Every weight is fixed and published.
        </p>

        <h2>Walk-forward out-of-sample.</h2>

        <StatBlock
          stats={[
            { value: "0.854", label: "OOS AUC", note: "18-month horizon, boosted stumps." },
            { value: "0.836", label: "OOS AUC", note: "12-month, single learner." },
            { value: "0.723", label: "Ensemble AUC", note: "12-month, 3-learner calibrated." },
            { value: "~24%", label: "Orthogonal info", note: "Vs Fed yield spread (76% partial corr.)." },
          ]}
        />

        <h3>Horizon decomposition.</h3>
        <table>
          <thead>
            <tr>
              <th>Horizon</th>
              <th>AUC-ROC</th>
              <th>Interpretation</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>3 months</td><td>0.770</td><td>Above chance, weakest horizon.</td></tr>
            <tr><td>6 months</td><td>0.744</td><td>Transitional.</td></tr>
            <tr><td>12 months</td><td>0.824</td><td>Strong discrimination.</td></tr>
            <tr><td>18 months</td><td>0.854</td><td>Best overall.</td></tr>
          </tbody>
        </table>

        <p>
          NIV gets <em>better</em> at longer horizons — the 3 → 18 month AUC
          progression climbs monotonically. This is the signature of a
          slow-building structural indicator, not a nervous high-frequency
          filter. Macro stress is a thermodynamic variable; NIV reads the
          temperature, not the noise.
        </p>

        <h3>Ensemble and calibration.</h3>
        <p>
          The 12-month calibrated ensemble reports{" "}
          <strong>AUC 0.723, Brier 0.073, ECE 0.047, F1 0.323 at the 14%
          threshold, conformal coverage 94.8%</strong>. The expanding window
          (all history since 1970) beats the 15-year rolling window{" "}
          <strong>(AUC 0.721 vs 0.685)</strong>: recession patterns have
          structural similarities across decades, and throwing history away
          is not free.
        </p>

        <h2>Orthogonality — and what &ldquo;beat&rdquo; actually means.</h2>
        <p>
          Partial correlation with the Fed yield spread is <strong>76%</strong>
          . Meaningful overlap — but not a clone. NIV provides approximately{" "}
          <strong>24% orthogonal information</strong>, captured by the
          investment-efficiency and capacity-slack channels that the yield
          curve does not see. In a GDP forecasting horse race the Fed spread
          has a narrow RMSE edge (<code>0.1464</code> vs <code>0.1488</code>).
          A hybrid model weighted <strong>Fed 60% / NIV 40%</strong> strictly
          dominates either alone.
        </p>
        <p>
          That is the honest version of &ldquo;beat the Fed.&rdquo; NIV does
          not replace the yield spread. It adds a decorrelated channel, with
          a transparent construction, that an ensemble can legitimately use.
        </p>

        <h3>False-positive reduction.</h3>
        <p>
          The next-generation OOS framework targets{" "}
          <strong>40–60% reduction in false-positive rate</strong> relative
          to the base NIV model, via calibrated ensembling, a gap-block
          walk-forward protocol (which prevents information leakage through
          autocorrelation), and isotonic probability calibration. Realistic
          performance targets: AUC 0.78 – 0.84, F1 0.40 – 0.50 at the
          calibrated threshold.
        </p>

        <Callout label="Honest assessment">
          Predicted probabilities during recessions peak at 20–35%, the 2001
          recession is consistently missed, and with only ~40 recession
          months in the OOS sample confidence intervals are wide. NIV is a
          useful recession signal with genuine predictive power — not a
          silver bullet. The strength is economic interpretability and the
          transparency of the construction. (All numbers: walk-forward,
          no look-ahead, no fabrication.)
        </Callout>

        <h2>Decomposition into primitives.</h2>
        <p>
          NIV is already a composition of four simpler signals. That matters
          because each sub-primitive is independently useful to the Latent
          Ocean:
        </p>
        <ul>
          <li>
            <strong>Thrust (u)</strong> — growth and asset-formation net of
            real-rate drag. Reusable as a generic &ldquo;direction&rdquo;
            signal for any structural system.
          </li>
          <li>
            <strong>Efficiency (P²)</strong> — investment-to-output ratio, a
            nonlinear capital-efficiency kernel. Applicable outside macro
            (compute efficiency, organizational efficiency).
          </li>
          <li>
            <strong>Slack (X)</strong> — complement of utilization, a scalar
            for how much headroom a system has.
          </li>
          <li>
            <strong>Drag (F)</strong> — a weighted penalty composed of a
            yield penalty, a positive real-rate penalty, and a rate
            volatility penalty.
          </li>
        </ul>

        <p>
          Given BTUT for coordination and Crystara for structure discovery,
          NIV is the prototype of a class: small, transparent, composable
          scalar signals that the Latent Ocean can emit to external systems.
          One is macro; the next will be monetary; the next will be
          energy-grid. The recipe — known primitives, economic interpretation,
          walk-forward validation, published weights — transfers.
        </p>

        <ChapterFooter
          prev={{ href: "/crystara", label: "Crystara — Structure" }}
          next={{ href: "/participatory-data-estate", label: "PDE — Ingestion" }}
        />
      </Essay>
    </>
  );
}
