import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";
import { ChapterSection, Bound, Equation } from "@/components/ChapterSection";

export const metadata = {
  title: "Participatory Data Estate",
  description:
    "A governance corpus is published, then goes stale. Continuous ingestion with moderation as a public state transition. SGUNCCH is the first live deployment.",
};

export default function PdePage() {
  return (
    <>
      <ChapterHeader
        number="V"
        label="Ingestion"
        title="Participatory Data Estate."
        kicker="Moderation as a public state transition, not a private workflow."
        prev={{ href: "/niv", label: "NIV" }}
      />

      <Essay>
        <ChapterSection n={1} />
        <p>
          If this holds, a governance corpus becomes auditable by
          construction rather than on request.
        </p>
        <p>
          A corpus is published, then goes stale. Documents are drafted,
          approved out of view, and posted. A retrieval layer scrapes them
          once. That works when the corpus is stable and its authority is
          uncontested.
        </p>
        <p>
          Live governance is neither. Corpora are amended continuously, so a
          one-time index is wrong shortly after it is built. And the question
          a constituent has is rarely what the policy says — it is who
          approved it, when, and over what objection.
        </p>
        <p>
          I made ingestion continuous and moderation public. Four stages,
          each a state a document is <em>in</em> rather than a step it
          passed through. <strong>Submit</strong> writes a pending row,
          content-addressed by hash. <strong>Moderate</strong> moves it to
          approved or rejected and writes the transition to an approval
          ledger. <strong>Thin</strong> decomposes it into independently
          citable chunks. <strong>Crystallize</strong> embeds each chunk
          into pgvector alongside a GIN full-text index.
        </p>
        <p>
          The ledger carries a public-read policy. That single line is the
          inversion expressed in SQL.
        </p>
        <Equation>{`CREATE POLICY "Anyone can read approval log"
  ON approval_log FOR SELECT USING (true);`}</Equation>
        <p>
          Retrieval is relevance-gated. A chunk is admitted only if it
          clears a similarity threshold; below it, the system returns
          nothing rather than the nearest available text. A governance
          question with no covering passage should produce an absence, not
          a plausible paragraph from an adjacent policy. A bigger corpus
          does not make governance legible. A representation whose changes
          are public does.
        </p>

        <ChapterSection n={2} />
        <p>
          SGUNCCH is live and runs the full framework as UNC
          student-government infrastructure. 40 policies across 8
          departments. A 15-document seed corpus — constitution, statutes,
          conduct code — ingested through the same pipeline a new
          submission follows, with no privileged path.
        </p>
        <p>
          Three further surfaces sit on the same substrate: a budget engine
          with alignment scoring, a knowledge base and chat layer grounded
          in the approved corpus with citation, and the policy platform.
        </p>
        <p>
          Controls, all implemented. Admin auth by environment secret with
          time-constant comparison. Sessions expire on 4-hour inactivity.
          Rate limiting by action class — API 100/min, login 5/15min, forms
          10/min, feedback 5/hour. Row-level security on every table.
          CSP, HSTS, <code>X-Frame-Options: DENY</code>, nosniff, an XSS
          detector, and HTTP method allowlists on all routes. If Supabase
          is unreachable, a committed seed file keeps the corpus queryable.
        </p>

        <ChapterSection n={3} />
        <Bound>
          <p>
            One deployment, at student-government scale. Forty policies is
            a small corpus. Nothing here establishes that the framework
            holds at municipal or regulatory volume.
          </p>
          <p>
            Untested under contested moderation. The public ledger is
            designed for the case where approval decisions are disputed.
            That case has not occurred at volume, so the design is
            unvalidated in the situation that most motivates it.
          </p>
          <p>
            No compliance authorisation. The controls follow
            federal-agency guidance patterns. There is no FedRAMP
            authorisation, no FISMA mapping, no external penetration test.
          </p>
          <p>
            Portability is asserted, not demonstrated. A second deployment
            in a different organisation is what would establish it.
          </p>
        </Bound>

        <ChapterSection n={4} />
        <ul>
          <li>
            <a href="https://github.com/direncode/sguncch" target="_blank" rel="noopener noreferrer">
              github.com/direncode/sguncch
            </a>{" "}
            — the live deployment. Core tables and the retrieval function
            are in <code>supabase-schema.sql</code>; the controls above are
            in the middleware and RLS policies.
          </li>
        </ul>

        <ChapterFooter prev={{ href: "/niv", label: "NIV" }} />
      </Essay>
    </>
  );
}
