import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";
import { Callout } from "@/components/Callout";
import { SourceBar } from "@/components/SourceBar";
import { ImpactBlock } from "@/components/ImpactBlock";

export const metadata = {
  title: "Participatory Data Estate",
  description:
    "A new framework for digital data governance. Submit → Moderate → Thin → Crystallize, over pgvector + GIN FTS hybrid retrieval, with a publicly-readable approval ledger and federal-hardening controls. SGUNCCH is the first live deployment — a full-platform UNC student-government stack running the framework end-to-end.",
};

export default function PdePage() {
  return (
    <>
      <ChapterHeader
        number="VI"
        label="Inversion · Governance corpora by construction"
        title="Participatory Data Estate."
        kicker="Most data-governance stacks treat ingestion as a one-time batch, moderation as a private workflow, and the audit trail as a compliance tax paid to a regulator. All three assumptions fail the moment a governance corpus is amended, contested, or audited in public. The Participatory Data Estate inverts them: ingestion is continuous (Submit → Moderate → Thin → Crystallize), every moderation transition is a row in a publicly-readable approval ledger, and retrieval runs over hybrid pgvector + GIN full-text with graceful FTS-only fallback. Security is drawn from federal-agency guidance — time-constant auth, row-level security on every table, rate limiting by action class, CSP/HSTS/X-Frame, XSS detection. SGUNCCH is the first live deployment."
        prev={{ href: "/niv", label: "NIV — Read capital formation" }}
        next={{ href: "/convergence", label: "Convergence" }}
      />

      <SourceBar
        resources={[
          { kind: "repo", label: "github.com/direncode/sguncch", href: "https://github.com/direncode/sguncch" },
        ]}
      />

      <Essay>
        <ImpactBlock
          ifRight={
            <>
              Governance corpora become continuously ingested and publicly
              auditable by construction.
            </>
          }
          mattersTo={<>Municipal, regulatory, NGO, scholarly bodies.</>}
          notEstablished={<>One live deployment.</>}
        />

        <h2>The Participatory Data Estate — what the framework is.</h2>
        <p>
          Standard data-governance architectures assume three things
          that modern governance environments can no longer afford:
          that data ingestion is a <em>batch</em> (scrape, chunk,
          embed, freeze), that moderation is a <em>private</em>{" "}
          workflow, and that the audit trail is a{" "}
          <em>compliance artifact</em> collected for regulators rather
          than shared with constituents. Each of those assumptions
          fails the moment the governance substrate is amended, contested,
          reorganized, or audited in public.
        </p>
        <p>
          The Participatory Data Estate inverts all three. Ingestion is
          a <em>continuous pipeline</em> — Submit → Moderate → Thin →
          Crystallize — in which raw human submissions are accepted
          without being trusted, moderated through an explicit approval
          surface, chunked into independently-retrievable units, and
          embedded into a hybrid vector + full-text index. Moderation
          is a <em>public transition</em>: every state change is a row
          in a{" "}
          <code>approval_log</code> table with a public-read RLS policy,
          so the full provenance chain of any document — who submitted,
          when it was approved, by whom, with what notes — is queryable
          by anyone with SQL. Retrieval never sees pending or rejected
          content. Security is federal-agency-derived, not
          student-gov-derived: time-constant auth, RLS on every table,
          rate limits on four action classes, CSP/HSTS/X-Frame, XSS
          detection. That combination — participatory ingestion +
          public audit ledger + federal-hardening controls — does not
          exist in the dominant data-governance stacks. It is what the
          framework proposes: a new shape for digital data governance.
        </p>
        <p>
          The framework generalizes. Any organization whose
          knowledge-corpus is amended through human submissions (a
          municipal agency, an NGO, a standards body, a scholarly
          society, a regulator, a policy platform) needs exactly this
          shape. SGUNCCH, below, is the <strong>first live
          deployment</strong> — a full-platform UNC student-government
          stack running the framework end-to-end. It exists because
          student governance is an unusually severe test: amendments
          are frequent, contests are real, the electorate is the same
          size as a small city, and the platform must degrade
          gracefully when a central service is unreachable. If the
          framework runs here, it runs elsewhere.
        </p>

        <h2>SGUNCCH — the first live deployment.</h2>
        <p>
          Most student-government platforms ship as a WordPress site
          with a public feedback form. SGUNCCH ships with every element
          of the Participatory Data Estate framework, hardened with
          patterns drawn from federal-agency security guidance (NIST
          800-53 / OWASP ASVS families). Every item below is implemented
          in the repository — not aspirational, not planned — and I do
          not believe any other student-government platform currently
          in production runs this stack:
        </p>
        <table>
          <thead>
            <tr><th>Control</th><th>Implementation</th></tr>
          </thead>
          <tbody>
            <tr><td>Admin authentication</td><td>Environment-variable secret, <strong>time-constant comparison</strong> to prevent timing attacks.</td></tr>
            <tr><td>Session management</td><td>4-hour inactivity expiry, rotating tokens.</td></tr>
            <tr><td>Rate limiting</td><td>API 100 / min · Login 5 / 15 min · Forms 10 / min · Feedback 5 / hour.</td></tr>
            <tr><td>Input sanitization</td><td><code>sanitizeText</code>, <code>sanitizeEmail</code>, <code>sanitizeURL</code>, <code>sanitizePhone</code>, <code>sanitizeObject</code>, schema-based <code>validateFormData</code>.</td></tr>
            <tr><td>XSS defense</td><td>Content Security Policy + <code>containsXSS</code> detector + HTML-encoded text inputs.</td></tr>
            <tr><td>HTTP headers</td><td><code>X-Frame-Options: DENY</code>, <code>X-Content-Type-Options: nosniff</code>, <code>X-XSS-Protection</code>, <code>Referrer-Policy</code>, <code>Permissions-Policy</code>, <code>Strict-Transport-Security</code>.</td></tr>
            <tr><td>Row-level security</td><td>Enabled on <em>every</em> Supabase table. Public-read policies only on explicitly-approved content.</td></tr>
            <tr><td>API hardening</td><td>HTTP method allowlist on all routes, rate-limit middleware, error messages sanitized in production, no sensitive data in error responses.</td></tr>
            <tr><td>Audit trail</td><td><code>approval_log</code> table, publicly-readable RLS policy, indexed by document and by time.</td></tr>
          </tbody>
        </table>
        <Callout label="Honest framing">
          There is no FedRAMP authorization, no FISMA control mapping,
          no STIG audit. What the stack has is the <em>posture</em>{" "}
          those frameworks try to produce — time-constant auth, RLS on
          every table, rate limiting by action class, a public audit
          ledger — implemented because the primitive is built to that
          bar, not because compliance required it. That is the honest
          form of the &ldquo;federal-hardening&rdquo; claim.
        </Callout>

        <h2>Platform scope.</h2>
        <p>
          SGUNCCH is not one feature. It is four composable surfaces
          shipped in one hardened codebase:
        </p>
        <ol>
          <li>
            <strong>The Scroll</strong> — governance-document RAG.
            Submit → Moderate → Thin → Crystallize, hybrid pgvector +
            GIN full-text retrieval, hash-deduplicated submissions, 15
            seed documents (constitution, statutes, policies, conduct
            code), public approval log.
          </li>
          <li>
            <strong>The Budget Engine</strong> — AI-scored funding
            allocation. 10 category classes (events, travel, merch,
            supplies, wellness, food, marketing, technology, emergency,
            other), 5 request statuses (pending, approved, denied,
            reallocated, spent), SG-priority alignment scoring across 5
            priority categories (wellness, basic-needs, academic-support,
            safety, sustainability), price-check calls to Groq for
            reality-checking line items.
          </li>
          <li>
            <strong>The Knowledge Base + Chat Layer</strong> — a Groq-backed
            chat interface grounded in the RAG corpus, with 1536-dim
            embeddings, an active message history table, and transparent
            source citation.
          </li>
          <li>
            <strong>The Policy Platform</strong> — 40 policies across 8
            departments (Student Wellness, Basic Needs, Academic Affairs,
            Civic Engagement, Communications, DEI, Environmental, State &amp;
            External), real-time progress tracking, mobile-first responsive
            design.
          </li>
        </ol>
        <p>
          Each surface shares the same security posture, the same audit
          trail, and the same RLS discipline. The platform degrades
          gracefully: if Supabase is unreachable, a committed{" "}
          <code>codex-seed.json</code> file-based fallback takes over so
          the governance corpus remains queryable. Graceful degradation
          of this shape is standard in hardened SaaS and uncommon in
          student-gov infrastructure.
        </p>

        <h2>The substrate has to stay alive.</h2>
        <p>
          Static knowledge bases rot. The dominant RAG pipelines treat
          documents as a one-time batch: scrape, chunk, embed, freeze. Real
          organizations do not work that way. Governance is amended. Policies
          are drafted, contested, approved, superseded. A platform that
          pretends otherwise is inaccurate by construction.
        </p>
        <p>
          The Participatory Data Estate (PDE) is the ingestion primitive. It
          is currently instantiated as <strong>The Scroll</strong> — the
          governance-document RAG layer of a UNC-scale student-government
          policy platform. Its job is to keep the substrate honest: to accept
          arbitrary human submissions, moderate them, chunk them, embed them,
          and expose the full provenance chain through an auditable ledger.
        </p>

        <h2>The pipeline.</h2>

        <h3>1 · Submit.</h3>
        <p>
          A <code>governance_documents</code> row is created with raw content,
          metadata, and a status of <code>pending</code>. The submission is
          content-addressable by hash; duplicates are rejected at the index
          layer (<code>idx_gov_docs_hash</code>).
        </p>

        <h3>2 · Moderate.</h3>
        <p>
          An approval workflow transitions status to{" "}
          <code>approved</code> or <code>rejected</code>. Row-level security
          policies ensure that only approved documents are readable by the
          public RLS policy, while admins retain full management rights. Every
          state transition is captured as a row in <code>approval_log</code>:
          timestamp, actor, document id, outcome. That table is the audit
          trail.
        </p>

        <h3>3 · Thin.</h3>
        <p>
          Approved documents are broken into <code>document_chunks</code> —
          paragraph- or section-sized units sized for retrieval, each linked
          back to its parent by <code>document_id</code> with{" "}
          <code>ON DELETE CASCADE</code>. A generated{" "}
          <code>search_vector</code> column (GIN-indexed) powers full-text
          search on the chunk body. Thinning is where a blob of prose becomes
          a set of addressable units.
        </p>

        <h3>4 · Crystallize.</h3>
        <p>
          Each chunk is embedded into a 1536-dimensional vector and stored via
          pgvector. The retrieval function{" "}
          <code>match_document_chunks(query_embedding, …)</code> performs
          cosine similarity over <code>embedding &lt;=&gt; query_embedding</code>
          . The hybrid layer fuses vector similarity with the GIN full-text
          index — semantic retrieval plus exact keyword grounding, in a
          single query. If pgvector is unavailable, the pipeline falls back
          to FTS-only gracefully.
        </p>

        <h2>The transparent allocation ledger.</h2>
        <p>
          The ledger is not a conceptual pattern — it is a Postgres table:
        </p>
        <pre>{`CREATE TABLE approval_log (
  id            UUID PRIMARY KEY,
  document_id   UUID REFERENCES governance_documents(id) ON DELETE CASCADE,
  action        TEXT NOT NULL,
  actor         TEXT,
  performed_at  TIMESTAMPTZ NOT NULL,
  notes         TEXT
);

CREATE INDEX idx_approval_log_doc  ON approval_log(document_id);
CREATE INDEX idx_approval_log_time ON approval_log(performed_at DESC);

CREATE POLICY "Anyone can read approval log"
  ON approval_log FOR SELECT USING (true);`}</pre>
        <p>
          Publicly readable, time-indexed, document-indexed. You can walk the
          full provenance of any document — who submitted it, when it was
          approved, by whom, with what notes — as a SQL query. The RLS policy
          explicitly makes the log transparent to the world. That is the
          &ldquo;allocation&rdquo; in participatory: the chain from a
          constituent&rsquo;s submission to an answer is readable, not
          laundered through an opaque moderator.
        </p>

        <Callout label="Seed corpus">
          The production system ships with 15 seed governance documents —
          constitution, statutes, policies, conduct code — all ingested
          through the same Submit → Moderate → Thin → Crystallize pipeline
          that a new submission would follow. The seed is not a privileged
          path.
        </Callout>

        <h2>The retrieval contract.</h2>
        <pre>{`-- Given a 1536-dim query vector q and a threshold t:

SELECT
  dc.id,
  dc.document_id,
  dc.content,
  1 - (dc.embedding <=> q) AS similarity
FROM   document_chunks dc
JOIN   governance_documents gd ON gd.id = dc.document_id
WHERE  gd.status = 'approved'
  AND  1 - (dc.embedding <=> q) > t
ORDER  BY dc.embedding <=> q
LIMIT  10;`}</pre>
        <p>
          The contract is narrow and auditable. Retrieval never sees pending
          or rejected content. Every result carries a{" "}
          <code>document_id</code> that resolves — through a public foreign
          key — into the approval log. An answer that cites{" "}
          <em>document X, chunk 3</em> can be walked back to the moment of
          approval, by whom, and the full original text, without leaving the
          database.
        </p>

        <h2>Why this is the ingestion primitive.</h2>
        <p>
          Coordination (BTUT) is linear-time. Structure discovery (Crystara)
          is runtime. Signal (NIV) is transparent and validated. The fourth
          primitive has to make the whole thing <em>continuously feedable</em>
          . PDE does that:
        </p>
        <ul>
          <li>
            <strong>It accepts arbitrary submissions</strong> without treating
            them as trusted.
          </li>
          <li>
            <strong>It has an explicit approval surface</strong> — not a
            hidden moderation queue.
          </li>
          <li>
            <strong>It thins before it embeds</strong> — every chunk is an
            independently retrievable, independently citable unit.
          </li>
          <li>
            <strong>It crystallizes to a hybrid index</strong> — vector +
            full-text, with graceful degradation.
          </li>
          <li>
            <strong>It logs every state transition</strong> publicly, so the
            provenance chain is queryable by anyone.
          </li>
        </ul>

        <p>
          The Latent Ocean needs a substrate that can absorb the world as the
          world changes. A model that cannot ingest new governance in the
          same week that the governance was amended is not a substrate — it
          is a snapshot. PDE is the primitive that keeps the snapshot from
          being the final word.
        </p>

        <Callout label="Source">
          Pipeline and schema are implemented in the open. Core tables —{" "}
          <code>governance_documents</code>, <code>document_chunks</code>,{" "}
          <code>approval_log</code> — and the{" "}
          <code>match_document_chunks</code> retrieval function are defined
          in <code>supabase-schema.sql</code> of the Project Bold
          repository.
        </Callout>

        <ChapterFooter
          prev={{ href: "/niv", label: "NIV — Read capital formation" }}
          next={{ href: "/convergence", label: "Convergence" }}
        />
      </Essay>
    </>
  );
}
