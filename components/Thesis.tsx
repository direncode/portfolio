import Link from "next/link";

export type Instance = {
  /** What the field discarded. */
  discarded: string;
  /** What recovering it looks like. */
  recovered: string;
  system: string;
  href: string;
};

export const INVERSIONS: Instance[] = [
  {
    discarded: "Bond sentiment",
    recovered: "Physical capital formation",
    system: "NIV",
    href: "/niv",
  },
  {
    discarded: "Architecture specified",
    recovered: "Structure discovered",
    system: "Crystara",
    href: "/crystara",
  },
  {
    discarded: "The coupled equation",
    recovered: "The O(N) formulation",
    system: "BTUT",
    href: "/btut",
  },
];

export const RESULTS = [
  {
    name: "BTUT",
    line: "coordination without a coordinator, at scale",
    href: "/btut",
  },
  {
    name: "Crystara",
    line: "finding emergent structure from latent embeddings",
    href: "/crystara",
  },
  {
    name: "NIV",
    line: "thrust as the foundation for regenerative economies",
    href: "/niv",
  },
];

/** The three inversions, compact — closes the method paragraph. */
export function Inversions({ className = "" }: { className?: string }) {
  return (
    <ul className={`border-y border-ink-800 divide-y divide-ink-800 ${className}`}>
      {INVERSIONS.map((row, i) => (
        <li
          key={i}
          className="grid grid-cols-1 md:grid-cols-[9rem_1fr_auto_1fr] gap-x-5 gap-y-1 py-3 items-baseline"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-500">
            {row.system}
          </span>
          <span className="text-ink-400 text-[15px] leading-snug">
            {row.discarded}
          </span>
          <span className="hidden md:block text-accent/70 font-mono text-sm">
            →
          </span>
          <span className="text-ink-100 text-[15px] leading-snug">
            <span className="md:hidden text-accent/70 font-mono mr-2">→</span>
            {row.recovered}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** The three results, named by what they are. */
export function Results({ className = "" }: { className?: string }) {
  return (
    <ul className={`divide-y divide-ink-800 border-y border-ink-800 ${className}`}>
      {RESULTS.map((r) => (
        <li key={r.href}>
          <Link
            href={r.href}
            className="group flex flex-wrap items-baseline gap-x-3 py-4 -mx-5 md:-mx-8 px-5 md:px-8 hover:bg-ink-900/40 transition-colors"
          >
            <span className="font-serif text-xl text-ink-50 group-hover:text-accent transition-colors">
              {r.name}
            </span>
            <span className="text-ink-400 text-[15px]">— {r.line}</span>
            <span className="ml-auto text-ink-600 group-hover:text-accent transition-colors text-sm">
              →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
