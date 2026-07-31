import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";
import { SourceBar } from "@/components/SourceBar";
import { ChapterSection, Bound, Equation } from "@/components/ChapterSection";

export const metadata = {
  title: "Participatory Data Estate",
  description:
    "A governance corpus is published, then goes stale. The Participatory Data Estate makes ingestion continuous and moderation a public state transition, over hybrid pgvector + GIN FTS retrieval with a relevance gate. SGUNCCH is the first live deployment.",
};

const SOURCES = [
  {
    kind: "repo" as const,
    label: "github.com/direncode/sguncch",
    href: "https://github.com/direncode/sguncch",
  },
];

export default function PdePage() {
  return (
    <>
      <ChapterHeader
        number="VI"
        label="Inversion · Ingestion"
        title="Participatory Data Estate."
        kicker="A governance corpus is published and then goes stale, because publication is treated as an event and moderation as a private workflow. The inversion makes ingestion continuous and moderation a public state transition — the approval log is the product, not the exhaust."
        prev={{ href: "/niv", label: "NIV — Read capital formation" }}
        next={{ href: "/convergence", label: "Convergence" }}
      />

      <SourceBar resources={SOURCES} />

      <Essay>
        <ChapterSection numeral="I" />
        <p>
          The standard shape for a governance corpus is a publication event.
          Documents are drafted, approved somewhere out of view, and posted.
          The retrieval layer, if there is one, scrapes and embeds them
          once. This is a reasonable design when the corpus is stable and
          the authority behind it is uncontested, and it is how almost every
          policy platform, statute repository and institutional knowledge
          base is built.
        </p>
        <p>
          It fails on both counts for live governance. Corpora are amended
          continuously, so a one-time index is wrong shortly after it is
          built and gets more wrong over time. And the interesting question
          for a constituent is rarely <em>what does the policy say</em> — it
          is <em>who approved this, when, and over what objection</em>,
          which the publication model discards. The inversion: make
          ingestion continuous, and make every moderation decision a public
          state transition rather than a private one.
        </p>

        <ChapterSection numeral="II" />
        <p>
          Four stages, each of which is a state a document is <em>in</em>{" "}
          rather than a step it passed through.
        </p>
        <p>
          <strong>Submit.</strong> A row in <code>governance_documents</code>{" "}
          with raw content, metadata, and status <code>pending</code>.
          Content-addressed by hash; duplicates rejected at the index
          (<code>idx_gov_docs_hash</code>). Submissions are accepted without
          being trusted.
        </p>
        <p>
          <strong>Moderate.</strong> Status moves to <code>approved</code> or{" "}
          <code>rejected</code>, and every transition writes a row to{" "}
          <code>approval_log</code>: timestamp, actor, document, outcome,
          notes. That table carries a public-read RLS policy — the ledger is
          readable by anyone, not exported on request.
        </p>
        <Equation note="The public-read policy on the ledger is the inversion expressed in SQL. Moderation is a transition anyone can observe, not a workflow the platform reports on.">
          {`CREATE POLICY "Anyone can read approval log"
  ON approval_log FOR SELECT USING (true);`}
        </Equation>
        <p>
          <strong>Thin.</strong> Approved documents are decomposed into{" "}
          <code>document_chunks</code> — paragraph- or section-sized,
          linked to the parent with <code>ON DELETE CASCADE</code>, each
          carrying a generated GIN-indexed <code>search_vector</code>.
          Thinning is where prose becomes independently citable units.
        </p>
        <p>
          <strong>Crystallize.</strong> Each chunk is embedded to 1536
          dimensions in pgvector. Retrieval is hybrid — cosine similarity
          over <code>embedding &lt;=&gt; query</code> fused with the GIN
          full-text index, so semantic recall and exact keyword grounding
          resolve in one query, degrading to FTS-only if pgvector is
          unavailable.
        </p>
        <p>
          <strong>The retrieval is relevance-gated.</strong> A chunk is only
          admitted to the answer if it clears a similarity threshold; below
          it, the system returns nothing rather than the nearest available
          text. This is the same discipline as{" "}
          <a href="/latent-ocean">Latent Ocean</a>&rsquo;s refusal, applied
          at the RAG layer: a governance question with no covering passage
          should produce an absence, not a plausible paragraph from an
          adjacent policy. The retrieval contract also filters on{" "}
          <code>gd.status = &apos;approved&apos;</code>, so pending and
          rejected content is unreachable by construction rather than by
          convention.
        </p>

        <ChapterSection numeral="III" />
        <p>
          <strong>SGUNCCH is live</strong> and runs the full framework as
          UNC student-government infrastructure: 40 policies across 8
          departments (Student Wellness, Basic Needs, Academic Affairs,
          Civic Engagement, Communications, DEI, Environmental, State &amp;
          External), a 15-document seed corpus — constitution, statutes,
          policies, conduct code — ingested through the same pipeline a new
          submission follows, with no privileged path.
        </p>
        <p>
          Beyond the corpus it carries three further surfaces on the same
          substrate: a budget engine with 10 request categories, 5 statuses
          and alignment scoring across 5 priority classes; a knowledge base
          and chat layer grounded in the approved corpus with source
          citation; and the policy platform with progress tracking.
        </p>
        <p>
          <strong>Security controls, all implemented.</strong> Admin
          authentication by environment secret with{" "}
          <strong>time-constant comparison</strong> against timing attacks.
          Sessions expire on 4-hour inactivity with rotating tokens. Rate
          limiting by action class — API 100/min, login 5/15min, forms
          10/min, feedback 5/hour. Row-level security on{" "}
          <em>every</em> table, with public-read policies only on explicitly
          approved content. <code>X-Frame-Options: DENY</code>,{" "}
          <code>X-Content-Type-Options: nosniff</code>,{" "}
          <code>Referrer-Policy</code>, <code>Permissions-Policy</code>,{" "}
          <code>Strict-Transport-Security</code>. Input sanitisation and an
          XSS detector on top of CSP. HTTP method allowlists on all routes;
          error messages sanitised in production. If Supabase is
          unreachable, a committed <code>codex-seed.json</code> fallback
          keeps the corpus queryable.
        </p>

        <ChapterSection numeral="IV" />
        <Bound>
          <p>
            <strong>One deployment, at student-government scale.</strong>{" "}
            Forty policies and eight departments is a small corpus. The
            framework has not been run at municipal, regulatory or
            national volume, and nothing here establishes that it holds
            there. Corpus size, submission rate, moderator count and
            adversarial pressure are all orders of magnitude different at
            those scales.
          </p>
          <p>
            <strong>Not tested under contested moderation.</strong> The
            public ledger is designed for the case where approval decisions
            are disputed. That case has not occurred at volume here, so the
            design is unvalidated in the situation that most motivates it.
          </p>
          <p>
            <strong>No compliance authorisation is claimed.</strong> The
            controls are drawn from federal-agency guidance patterns. There
            is no FedRAMP authorisation, no FISMA control mapping, no STIG
            audit, and no external penetration test. &ldquo;Hardened to
            those patterns&rdquo; is the claim; &ldquo;accredited&rdquo; is
            not.
          </p>
          <p>
            <strong>Portability is asserted, not demonstrated.</strong> The
            argument that this generalises to municipal or regulatory
            bodies rests on the shape of their problem resembling this one.
            A second deployment in a different organisation is what would
            establish it.
          </p>
        </Bound>

        <ChapterSection numeral="V" />
        <p>
          If it holds, governance corpora become continuously ingested and
          publicly auditable by construction rather than by request. The
          provenance chain from a constituent&rsquo;s submission to the
          answer a system gives is walkable in SQL by anyone, which changes
          what an FOIA-style request is <em>for</em> — the ledger is already
          public, so the question moves from disclosure to interpretation.
        </p>
        <p>
          This matters to municipal agencies and city councils, regulators
          publishing rules that are amended continuously, NGOs and standards
          bodies whose authority rests on their process being visible, and
          scholarly societies maintaining contested reference corpora. The
          common property is that the legitimacy of the corpus depends on
          the legibility of how it changed, and that is exactly what the
          publication model discards.
        </p>

        <ChapterSection numeral="VI" />
        <ul>
          <li>
            <a href="https://github.com/direncode/sguncch" target="_blank" rel="noopener noreferrer">
              github.com/direncode/sguncch
            </a>{" "}
            — the live deployment. Core tables{" "}
            <code>governance_documents</code>, <code>document_chunks</code>,{" "}
            <code>approval_log</code> and the{" "}
            <code>match_document_chunks</code> retrieval function are in{" "}
            <code>supabase-schema.sql</code>; the security controls listed
            in section III are in the middleware and RLS policies.
          </li>
        </ul>

        <ChapterFooter
          prev={{ href: "/niv", label: "NIV — Read capital formation" }}
          next={{ href: "/convergence", label: "Convergence" }}
        />
      </Essay>
    </>
  );
}
