import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";
import { ChapterSection } from "@/components/ChapterSection";

export const metadata = {
  title: "About / Context",
  description:
    "Diren Kumaratilleke. Nineteen, working full time from Dubai on a gap semester from UNC. Five inversions, zero co-authors, roughly seven to nine months.",
};

export default function AboutPage() {
  return (
    <>
      <ChapterHeader
        number="VIII"
        label="Chapter"
        title="About / Context."
        kicker="The facts, and the constraints that shaped the work."
        prev={{ href: "/convergence", label: "Convergence" }}
        next={{ href: "/forward", label: "Forward Direction" }}
      />

      <Essay>
        <ChapterSection numeral="I" title="Who" />
        <p>
          Diren Kumaratilleke. Nineteen. Working full time from Dubai, on a
          gap semester from the University of North Carolina at Chapel Hill,
          where I read Information Science. Latent Ocean, BTUT, Crystara
          (TCD-JEPA), NIV (Regenerationism) and the Participatory Data
          Estate are solo work with zero co-authors, built over roughly
          seven to nine months. No lab, no advisor on the byline, no outside
          funding for the research.
        </p>

        <ChapterSection numeral="II" title="Constraints" />
        <p>
          One person, a single workstation, and a handful of borrowed GPUs.
          These are the shape of the research programme rather than
          obstacles to it: if a direction is not solo-feasible it is not one
          I work on, and that filter is why the output is five narrow
          inversions rather than one large system. Refusing a settled
          primitive is cheap; scaling one is not. The constraint selected
          the method.
        </p>

        <ChapterSection numeral="III" title="Working Method" />
        <p>
          I hold one system at a time, at unreasonable depth, and the moves
          across systems are structural rather than topical — the refusal in
          BTUT is the refusal in Crystara is the refusal in Latent Ocean,
          in different typefaces. Locate the primitive a field stopped
          questioning; question it. These are not five interests. They are
          one move in five fields.
        </p>
        <p>
          Two rules apply everywhere. Every claim resolves to an open
          repository, a published document, or a live system — a reader
          should never have to ask me something they could settle by
          clicking. And every claim carries its bound: section IV of each
          chapter states what is <em>not</em> established, and it is never
          softened, never merged into the evidence, and never placed below
          the fold.
        </p>

        <ChapterSection numeral="IV" title="Where The Work Lives" />
        <ul>
          <li>
            <strong>Latent Ocean</strong> —{" "}
            <a href="https://latentocean.com" target="_blank" rel="noopener noreferrer">
              latentocean.com
            </a>{" "}
            ·{" "}
            <a href="https://latentocean.com/spacex/off-earth" target="_blank" rel="noopener noreferrer">
              the network-cut gate
            </a>
          </li>
          <li>
            <strong>BTUT</strong> —{" "}
            <a href="https://btut.ai" target="_blank" rel="noopener noreferrer">
              btut.ai
            </a>{" "}
            ·{" "}
            <a href="https://github.com/direncode/btut" target="_blank" rel="noopener noreferrer">
              github.com/direncode/btut
            </a>
          </li>
          <li>
            <strong>Crystara</strong> —{" "}
            <a href="https://github.com/direncode/tcd-jepa" target="_blank" rel="noopener noreferrer">
              github.com/direncode/tcd-jepa
            </a>
          </li>
          <li>
            <strong>NIV</strong> —{" "}
            <a href="https://regenerationism.ai" target="_blank" rel="noopener noreferrer">
              regenerationism.ai
            </a>{" "}
            ·{" "}
            <a href="https://github.com/direncode/regenerationism" target="_blank" rel="noopener noreferrer">
              github.com/direncode/regenerationism
            </a>{" "}
            ·{" "}
            <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6664138" target="_blank" rel="noopener noreferrer">
              SSRN 6664138
            </a>
          </li>
          <li>
            <strong>Participatory Data Estate</strong> —{" "}
            <a href="https://github.com/direncode/sguncch" target="_blank" rel="noopener noreferrer">
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
