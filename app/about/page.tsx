import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";

export const metadata = {
  title: "About / Context",
  description:
    "Brief, factual context on the author, the constraints, and the working method behind the five inversions.",
};

export default function AboutPage() {
  return (
    <>
      <ChapterHeader
        number="VIII"
        label="Chapter"
        title="About / Context."
        kicker="Nineteen years old. Building full time from Dubai, on a gap semester from UNC. Seven to nine months of work. Five inversions across five fields, zero co-authors. Every claim on this site has a table, a tear sheet, or a live system directly underneath it. The tape is the argument."
        prev={{ href: "/convergence", label: "Convergence" }}
        next={{ href: "/forward", label: "Forward Direction" }}
      />

      <Essay>
        <h2>Who.</h2>
        <p>
          Diren Kumaratilleke. Nineteen. Working full time from Dubai, on a
          gap semester from the University of North Carolina at Chapel
          Hill, where I read Information Science. The systems on this site
          — Latent Ocean, BTUT, Crystara (TCD-JEPA), NIV
          (Regenerationism), and the Participatory Data Estate — are solo
          work with zero co-authors, built over roughly seven to nine
          months. No lab, no advisor on the byline, no outside funding for
          the research.
        </p>
        <h3>The five inversions, named.</h3>
        <ul>
          <li>
            <strong>Latent Ocean</strong> — provenance as the primitive
            rather than a column beside the value; and refusal as the third
            state rather than an arithmetic one.
          </li>
          <li>
            <strong>BTUT</strong> — decline the coupled equation, find the
            O(N) formulation for multi-agent coordination.
          </li>
          <li>
            <strong>Crystara (TCD-JEPA)</strong> — grow the architecture at
            runtime rather than scaling a fixed one.
          </li>
          <li>
            <strong>Regenerationism (NIV)</strong> — read physical capital
            formation rather than bond sentiment.
          </li>
          <li>
            <strong>Participatory Data Estate</strong> — governance corpora
            continuously ingested and publicly auditable by construction.
          </li>
        </ul>

        <h2>Working method.</h2>
        <p>
          I am monotropic by disposition and hyper-relational by method. In
          practice that means I hold one system at a time, at unreasonable
          depth, and the moves across systems are structural rather than
          topical. The refusal in BTUT is the same refusal in Crystara is
          the same refusal in Latent Ocean, just in different typefaces:
          locate the primitive the field stopped questioning, and question
          it. These are not five interests. They are one move in five
          fields.
        </p>
        <p>
          Every claim on this site is traceable to an open repository, a
          live system, or a published document. Where a claim is about a
          future direction it is labeled as such, and where it depends on a
          condition that has not been met, that condition is printed beside
          it.
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
            All five are deliberately narrow.
          </li>
          <li>
            <strong>Validation over claim.</strong> Walk-forward OOS on
            NIV. Constant 12-iteration convergence from 500 to 10,000
            agents on BTUT. Persistent-homology diagnostics on Crystara.
            Public approval log on the Participatory Data Estate. 554 and
            50 tests on the two Latent Ocean successors, with the energy
            factor pinned by a golden test. The numbers are cited from the
            repos and the suites, not invented for a deck.
          </li>
          <li>
            <strong>Every claim carries its bound.</strong> A claim that
            hides what has not yet been established is not a claim. The
            impact statements on this site are each printed beside the
            condition they depend on and have not met.
          </li>
        </ul>

        <h2>Constraints.</h2>
        <p>
          One person, zero co-authors, working full time from Dubai on a
          gap semester. A single workstation and a handful of borrowed
          GPUs. These are not obstacles to the research programme; they are{" "}
          <em>the shape</em> of it. If a direction is not solo-feasible, it
          is not one I work on. That filter is why the work came out
          horizontal — five narrow inversions rather than one large system.
        </p>

        <h2>What this site is not.</h2>
        <p>
          This is not a résumé. It is a serialized argument for a different
          shape of AI — five inversions that compose into a single
          grounded, inference-time substrate. The résumé is downstream of
          the argument. The argument is what matters.
        </p>

        <h3>Where the work lives.</h3>
        <ul>
          <li>
            <strong>Latent Ocean</strong> —{" "}
            <a
              href="https://latentocean.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              latentocean.com
            </a>{" "}
            · the network-cut gate at{" "}
            <a
              href="https://latentocean.com/spacex/off-earth"
              target="_blank"
              rel="noopener noreferrer"
            >
              /spacex/off-earth
            </a>
          </li>
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
