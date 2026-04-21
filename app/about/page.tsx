import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";

export const metadata = {
  title: "About / Context",
  description:
    "Brief, factual context on the author, the constraints, and the working method behind the four primitives.",
};

export default function AboutPage() {
  return (
    <>
      <ChapterHeader
        number="VII"
        label="Chapter"
        title="About / Context."
        kicker="Nineteen years old. Solo. One calendar year. Four live primitives across four subfields. Every claim on this site has a table, a tear sheet, or a repository directly underneath it. The tape is the argument."
        prev={{ href: "/convergence", label: "Convergence" }}
        next={{ href: "/forward", label: "Forward Direction" }}
      />

      <Essay>
        <h2>Who.</h2>
        <p>
          Diren Kumaratilleke. Nineteen. International freshman at the
          University of North Carolina at Chapel Hill, majoring in
          Information Science. The four projects on this site — BTUT,
          Crystara, NIV, Participatory Data Estate — are solo work, zero
          co-authors, shipped under open-source licenses in the same
          calendar year classes were in session. No lab, no advisor on
          the byline, no outside funding for the research. One desk.
        </p>

        <h2>Working method.</h2>
        <p>
          I am monotropic by disposition and hyper-relational by method. In
          practice that means I hold one system at a time, at unreasonable
          depth, and the moves across systems are structural rather than
          topical — the reduction in BTUT is the same reduction in Crystara
          is the same reduction in NIV, just in different typefaces. The
          four primitives are not four hobbies. They are one shape in four
          domains.
        </p>
        <p>
          Every claim on this site is traceable to an open repository, a
          measured benchmark, or a walk-forward-validated number. Where the
          claim is about a future direction it is labeled as such.
        </p>

        <h3>Principles, explicit.</h3>
        <ul>
          <li>
            <strong>Reductions, not refinements.</strong> A primitive earns
            its place by making a problem cheaper by an order of magnitude,
            not by 10%.
          </li>
          <li>
            <strong>Transparency by construction.</strong> Every weight in
            NIV is named. Every approval in PDE is logged. Every module in
            Crystara is typed. Opacity is a design bug.
          </li>
          <li>
            <strong>Composability over completeness.</strong> Small
            primitives with well-typed interfaces beat monolithic platforms.
            The four primitives are deliberately narrow.
          </li>
          <li>
            <strong>Validation over claim.</strong> Walk-forward OOS on
            NIV. Constant 12-iteration convergence from 500 to 10,000
            agents on BTUT. Persistent-homology diagnostics on Crystara.
            Public approval log on PDE. The numbers are cited from the
            repos, not invented for the deck.
          </li>
        </ul>

        <h2>Constraints.</h2>
        <p>
          One person. A student budget. A single workstation and a handful
          of borrowed GPUs. Teaching load elsewhere (I TA). These are not
          obstacles for this research program; they are <em>the shape</em>{" "}
          of the research program. If a direction is not solo-feasible, it
          is not one I work on. That filter is why the primitives came out
          horizontal.
        </p>

        <h2>What this site is not.</h2>
        <p>
          This is not a résumé. It is a serialized argument for a different
          shape of AI — built out of four primitives that compose into a
          single inference-time substrate. The résumé is downstream of the
          manifesto. The manifesto is what matters.
        </p>

        <h3>Where the work lives.</h3>
        <ul>
          <li>
            <strong>BTUT</strong> —{" "}
            <a
              href="https://github.com/direncode/btut"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/direncode/btut
            </a>
          </li>
          <li>
            <strong>Crystara (tcd-jepa)</strong> —{" "}
            <a
              href="https://github.com/direncode/tcd-jepa"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/direncode/tcd-jepa
            </a>
          </li>
          <li>
            <strong>NIV (regenerationism)</strong> —{" "}
            <a
              href="https://github.com/direncode/regenerationism"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/direncode/regenerationism
            </a>
          </li>
          <li>
            <strong>PDE (sguncch / Project Bold)</strong> —{" "}
            <a
              href="https://github.com/direncode/sguncch"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/direncode/sguncch
            </a>
          </li>
        </ul>

        <ChapterFooter
          prev={{ href: "/convergence", label: "Convergence" }}
          next={{ href: "/forward", label: "Forward Direction" }}
        />
      </Essay>
    </>
  );
}
