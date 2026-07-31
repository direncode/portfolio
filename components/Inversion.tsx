import Link from "next/link";

export type InversionRow = {
  /** The assumption the field treats as settled. */
  given: string;
  /** The move. */
  instead: string;
  /** Which system this instance is. */
  system: string;
  href: string;
};

export const INVERSIONS: InversionRow[] = [
  {
    given: "Recession indicators read bond sentiment",
    instead: "Read physical capital formation instead",
    system: "NIV",
    href: "/niv",
  },
  {
    given: "Architectures are fixed and scaled",
    instead: "Grow the architecture at runtime",
    system: "Crystara",
    href: "/crystara",
  },
  {
    given: "Coordination solves the coupled equation",
    instead: "Find the O(N) formulation",
    system: "BTUT",
    href: "/btut",
  },
  {
    given: "Codd's tuple is provenance-free",
    instead: "Make provenance the primitive",
    system: "Latent Ocean",
    href: "/latent-ocean",
  },
  {
    given: "Setun's third state is arithmetic",
    instead: "Make it epistemic: refusal",
    system: "Latent Ocean",
    href: "/latent-ocean",
  },
];

export function Inversion({ className = "" }: { className?: string }) {
  return (
    <div className={`border-y border-ink-800 ${className}`}>
      <ul className="divide-y divide-ink-800">
        {INVERSIONS.map((row, i) => (
          <li key={i}>
            <Link
              href={row.href}
              className="group grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto] gap-2 md:gap-6 items-baseline py-5 -mx-5 md:-mx-8 px-5 md:px-8 hover:bg-ink-900/40 transition-colors"
            >
              <span className="text-ink-400 text-[15px] leading-snug">
                {row.given}
              </span>
              <span className="hidden md:block text-accent/70 font-mono text-sm">
                →
              </span>
              <span className="text-ink-50 text-[15px] leading-snug group-hover:text-accent transition-colors">
                <span className="md:hidden text-accent/70 font-mono mr-2">
                  →
                </span>
                {row.instead}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500 group-hover:text-accent transition-colors md:text-right md:w-28">
                {row.system}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
