import Link from "next/link";

export type Instance = {
  /** The scaling answer. */
  scale: string;
  /** The representation answer. */
  representation: string;
  system: string;
  href: string;
};

export const INSTANCES: Instance[] = [
  {
    scale: "More data, more retrieval",
    representation: "A representation that can prove absence",
    system: "Latent Ocean",
    href: "/latent-ocean",
  },
  {
    scale: "More machines",
    representation: "An O(N) representation of the same phase transition",
    system: "BTUT",
    href: "/btut",
  },
  {
    scale: "More parameters",
    representation: "An architecture grown to the shape of the data",
    system: "Crystara",
    href: "/crystara",
  },
  {
    scale: "More indicators",
    representation: "A representation of capital formation itself",
    system: "NIV",
    href: "/niv",
  },
  {
    scale: "A bigger corpus",
    representation: "A corpus whose changes are legible",
    system: "Participatory Data Estate",
    href: "/participatory-data-estate",
  },
];

export function Thesis({ className = "" }: { className?: string }) {
  return (
    <div className={`border-y border-ink-800 ${className}`}>
      <div className="hidden md:grid grid-cols-[1fr_auto_1fr_auto] gap-6 py-2 border-b border-ink-800/60 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
        <span>Scale says</span>
        <span aria-hidden="true" className="w-4" />
        <span>Representation does</span>
        <span className="text-right w-40">System</span>
      </div>
      <ul className="divide-y divide-ink-800">
        {INSTANCES.map((row, i) => (
          <li key={i}>
            <Link
              href={row.href}
              className="group grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto] gap-1 md:gap-6 items-baseline py-4 -mx-5 md:-mx-8 px-5 md:px-8 hover:bg-ink-900/40 transition-colors"
            >
              <span className="text-ink-400 text-[15px] leading-snug">
                {row.scale}
              </span>
              <span className="hidden md:block text-accent/70 font-mono text-sm w-4">
                →
              </span>
              <span className="text-ink-50 text-[15px] leading-snug group-hover:text-accent transition-colors">
                <span className="md:hidden text-accent/70 font-mono mr-2">→</span>
                {row.representation}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-500 group-hover:text-accent transition-colors md:text-right md:w-40">
                {row.system}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
