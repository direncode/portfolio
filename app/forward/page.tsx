import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";
import { ChapterSection, Bound } from "@/components/ChapterSection";

export const metadata = {
  title: "Forward Direction",
  description:
    "What is being built now — the agentic systems IDE, the shell library, sovereign deployment — and what is needed that cannot be self-supplied: accreditation, IdP integration, and authority as system of record.",
};

export default function ForwardPage() {
  return (
    <>
      <ChapterHeader
        number="IX"
        label="Chapter"
        title="Forward Direction."
        kicker="Present tense only. What is under construction now, and — more usefully — what this work requires that I cannot supply for myself."
        prev={{ href: "/about", label: "About / Context" }}
      />

      <Essay>
        <ChapterSection numeral="I" title="What Is Being Built" />
        <p>
          <strong>The agentic systems IDE.</strong> The loop described in{" "}
          <a href="/latent-ocean">Latent Ocean</a> — model proposes a
          declarative spec, estate grounds or refuses with a named reason,
          steward promotes — is the current focus. The property being
          preserved as it grows is that nothing is generated, written, or
          evaluated by the model: proposal and adjudication stay separate,
          and the write stays human. The governed MCP surface is where that
          separation is enforced, so every tool added has to arrive with its
          grounding contract rather than acquire one later.
        </p>
        <p>
          <strong>The shell library.</strong> The estate primitives —
          the closed algebra, the absence classes, the ternary quantiser and
          the non-membership proof — are being factored out of the estates
          that currently carry them into a library that an operator can
          build against directly. This is the work that has to exist before
          the phrase &ldquo;run your own estate&rdquo; means anything.
        </p>
        <p>
          <strong>Sovereign deployment.</strong> Packaging an estate to run
          entirely inside an institution&rsquo;s own boundary — no external
          API dependency in the grounding path, commodity hardware,
          inspectable end to end. The constraint that shapes it is that the
          refusal guarantee must hold under the network conditions the
          institution actually has, which is the same constraint the
          network-cut gate demonstrates.
        </p>

        <ChapterSection numeral="II" title="What Cannot Be Self-Supplied" />
        <p>
          The remaining gaps are not engineering. Each of these is something
          an institution has and an individual does not, and no amount of
          further building substitutes for them.
        </p>
        <p>
          <strong>Accreditation.</strong> The controls are built to
          federal-agency patterns. Turning &ldquo;built to those
          patterns&rdquo; into an authorisation — FedRAMP, FISMA control
          mapping, a STIG audit, an external penetration test — requires a
          sponsoring body and an assessor. I can meet the requirements. I
          cannot certify that I have met them, and the distinction is the
          whole point of accreditation.
        </p>
        <p>
          <strong>Identity-provider integration.</strong> An estate inside a
          real organisation has to bind to that organisation&rsquo;s
          identity: enterprise or government IdP, its group and clearance
          model, its session and revocation semantics. The steward role in
          the promotion loop is only meaningful if the identity behind it is
          the organisation&rsquo;s own. That integration cannot be built
          against a hypothetical directory.
        </p>
        <p>
          <strong>Authority as system of record.</strong> This is the
          largest one. The absence classes distinguish a contradiction
          between sources with standing from a question that is not
          well-formed — and both resolve to an authority decision outside
          the estate. An estate can identify that a decision is required and
          can prove which sources conflict. It cannot make the decision. For
          the grounding guarantee to be load-bearing in production, some
          institution has to designate the estate as the system of record
          for a defined domain and accept that its refusals have standing.
          That is a governance act, not a deployment.
        </p>

        <ChapterSection numeral="III" title="What I Am Looking For" />
        <p>
          An external operator for an estate, on their own data, under their
          own network conditions, with their own stewards performing
          promotion. That single condition would change more on this site
          than any further work I could do alone — it is the stated bound in{" "}
          <a href="/latent-ocean">Latent Ocean</a>&rsquo;s section IV and it
          is the one I cannot remove by building.
        </p>
        <p>
          Beyond it: reviewers who will read the proofs at the level of the
          repository rather than the summary, and institutional partners
          with a substrate that needs grounding, coordination, signal, or
          continuous ingestion. If one of the five fits a problem you are
          holding, the email is in the footer.
        </p>

        <ChapterSection numeral="IV" />
        <Bound>
          <p>
            Everything in section I is under construction, which means it is
            unfinished and none of it has an external user. Nothing on this
            page should be read as available. Nothing on this page carries a
            date, because I do not have a basis for one and a roadmap date I
            cannot support would undermine the rest of the site.
          </p>
          <p>
            Section II is a list of things I have not solved and cannot
            solve alone. It is deliberately the longest section on the page.
          </p>
        </Bound>

        <ChapterFooter prev={{ href: "/about", label: "About / Context" }} />
      </Essay>
    </>
  );
}
