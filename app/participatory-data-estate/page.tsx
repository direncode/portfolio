import { ChapterHeader } from "@/components/ChapterHeader";
import { ChapterFooter } from "@/components/ChapterFooter";
import { Essay } from "@/components/Essay";
import { Callout } from "@/components/Callout";

export const metadata = {
  title: "Participatory Data Estate — Ingestion",
  description:
    "A Submit → Moderate → Thin → Crystallize pipeline turning raw human submissions into a living, auditable, vector-retrievable knowledge base.",
};

export default function PdePage() {
  return (
    <>
      <ChapterHeader
        number="V"
        label="Primitive · Ingestion"
        title="Participatory Data Estate."
        kicker="A dynamic ingestion primitive. Raw human submissions — policies, governance documents, constitution text, conduct code — become a living, auditable, hybrid-retrievable knowledge base. Pipeline: Submit → Moderate → Thin → Crystallize. Every approval is logged; every chunk is addressable."
        prev={{ href: "/niv", label: "NIV — Signal" }}
        next={{ href: "/convergence", label: "Convergence" }}
      />

      <Essay>
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
          prev={{ href: "/niv", label: "NIV — Signal" }}
          next={{ href: "/convergence", label: "Convergence" }}
        />
      </Essay>
    </>
  );
}
