import Link from "next/link";
import { Inversions, Results } from "@/components/Thesis";

const DOCS = [
  { label: "Latent Ocean live", href: "https://www.latentocean.com/spacex" },
  { label: "A Successor to Codd", href: "/LatentOcean_SuccessorToCodd.pdf" },
  { label: "A Successor to Setun", href: "/LatentOcean_SuccessorToSetun.pdf" },
  { label: "SSRN 6664138", href: "/NIV_SSRN_6664138.pdf" },
  { label: "NIV tear sheet", href: "/NIV_TearSheet.pdf" },
  { label: "BTUT tear sheet", href: "/BTUT_Tear_Sheet.pdf" },
  { label: "GitHub", href: "https://github.com/direncode" },
];

const STATS = [
  { v: "19", l: "Years old" },
  { v: "7–9", l: "Months building" },
  { v: "4", l: "Fields" },
  { v: "604", l: "Latent Ocean tests" },
  { v: "5", l: "Deployed estates" },
  { v: "504", l: "Months walk-forward" },
  { v: "0", l: "Co-authors" },
];

export default function HomePage() {
  return (
    <section className="pt-16 md:pt-20 pb-14">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="flex items-center gap-3 text-accent">
          <span className="h-px w-8 bg-accent/60" />
          <span className="uppercase tracking-[0.22em] text-[11px]">
            Four results · Four fields · Nineteen · Solo · 7–9 months
          </span>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl tracking-tightish leading-[1.0] mt-4 text-ink-50">
          Diren Kumaratilleke
        </h1>

        <p className="mt-5 text-[17px] md:text-lg text-ink-200 max-w-3xl leading-relaxed">
          The binding constraint is not the magnitude of the input. It is the
          representation the field committed to early and stopped
          questioning. Each result below recovers something a field made
          unavailable to itself. The discard was correct when made; it became
          the constraint later. Recovering it requires inverting the
          primitive, not adding capacity.
        </p>

        <Inversions className="mt-7" />

        <Results className="mt-8" />

        <p className="mt-6 text-[15px] text-ink-400">
          <Link href="/thesis" className="text-ink-100 hover:text-accent transition-colors">
            Representation, not scale
          </Link>{" "}
          — the argument in full: the historical sequence, what none of it
          encoded, and a criterion for granting a system authority.
        </p>

        <p className="mt-6 text-[15px] text-ink-400 italic font-serif">
          What follows is not a résumé. It is the tape.
        </p>

        <div className="mt-6 flex flex-wrap items-baseline gap-x-5 gap-y-2 text-[13px]">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
            Documents
          </span>
          {DOCS.map((d, i) => (
            <a
              key={i}
              href={d.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-300 hover:text-accent transition-colors"
            >
              {d.label}
              <span className="text-accent ml-1">↗</span>
            </a>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 border border-ink-800 divide-x divide-y md:divide-y-0 divide-ink-800">
          {STATS.map((d, i) => (
            <div key={i} className="p-4">
              <div className="font-serif text-2xl text-ink-50 tracking-tightish">
                {d.v}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-ink-400 leading-tight">
                {d.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
