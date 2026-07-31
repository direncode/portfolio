import { Inversion } from "@/components/Inversion";

const DOCS = [
  {
    label: "The network-cut gate",
    href: "https://latentocean.com/spacex/off-earth",
  },
  { label: "NIV paper", href: "/NIV_Paper.pdf" },
  {
    label: "SSRN 6664138",
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6664138",
  },
  { label: "NIV tear sheet", href: "/NIV_TearSheet.pdf" },
  { label: "BTUT tear sheet", href: "/BTUT_Tear_Sheet.pdf" },
];

const STATS = [
  { v: "19", l: "Years old" },
  { v: "7–9", l: "Months building" },
  { v: "604", l: "Latent Ocean tests" },
  { v: "5", l: "Deployed estates" },
  { v: "504", l: "Months walk-forward" },
  { v: "6", l: "Live BTUT domains" },
  { v: "0", l: "Co-authors" },
];

export default function HomePage() {
  return (
    <section className="pt-16 md:pt-24 pb-16">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="flex items-center gap-3 text-accent">
          <span className="h-px w-8 bg-accent/60" />
          <span className="uppercase tracking-[0.22em] text-[11px]">
            Dubai · Nineteen · Solo
          </span>
        </div>

        <h1 className="font-serif text-4xl md:text-6xl tracking-tightish leading-[1.0] mt-5 text-ink-50">
          Diren Kumaratilleke
        </h1>

        <p className="mt-6 font-serif text-2xl md:text-[2.1rem] text-accent leading-[1.2] tracking-tightish text-balance">
          I invert the primitive everyone takes as given.
        </p>

        <p className="mt-5 text-[17px] md:text-lg text-ink-200 max-w-3xl leading-relaxed">
          Each system below starts the same way. Find the assumption its
          field treats as settled — the one so foundational nobody reopens
          it — and refuse it. Then build what follows. This is not a
          résumé. It is the tape.
        </p>

        <Inversion className="mt-9" />

        <div className="mt-9 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 border border-ink-800 divide-x divide-y md:divide-y-0 divide-ink-800">
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
      </div>
    </section>
  );
}
