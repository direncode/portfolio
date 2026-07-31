/**
 * Four sections. Same order, same names, every chapter.
 */

export const SECTION_NAMES = {
  1: "What I Inverted",
  2: "What It Shows",
  3: "What It Doesn't Show",
  4: "Sources",
} as const;

export type SectionNumber = keyof typeof SECTION_NAMES;

export function ChapterSection({ n }: { n: SectionNumber }) {
  return (
    <div className="mt-14 mb-5 first:mt-0">
      <div className="flex items-baseline gap-3 border-b border-ink-800 pb-2">
        <span className="font-mono text-[11px] tracking-[0.2em] text-accent w-4 shrink-0">
          {n}
        </span>
        <h2 className="font-serif text-2xl md:text-[1.75rem] tracking-tightish text-ink-50 leading-tight !mt-0 !mb-0">
          {SECTION_NAMES[n]}
        </h2>
      </div>
    </div>
  );
}

/** Generic numbered section, for /thesis. */
export function Section({
  numeral,
  title,
}: {
  numeral: string;
  title: string;
}) {
  return (
    <div className="mt-14 mb-5 first:mt-0">
      <div className="flex items-baseline gap-3 border-b border-ink-800 pb-2">
        <span className="font-mono text-[11px] tracking-[0.2em] text-accent w-8 shrink-0">
          {numeral}
        </span>
        <h2 className="font-serif text-2xl md:text-[1.75rem] tracking-tightish text-ink-50 leading-tight !mt-0 !mb-0">
          {title}
        </h2>
      </div>
    </div>
  );
}

/** Section 3. Framed so it cannot be skimmed past. Never softened. */
export function Bound({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-ink-500 bg-ink-900/40 pl-5 pr-5 py-4 my-6 text-ink-200">
      {children}
    </div>
  );
}

/** Display maths. Text, never an image. */
export function Equation({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-5 overflow-x-auto border border-ink-700/60 bg-ink-900/90 rounded-md px-5 py-4">
      <div className="font-mono text-[0.92em] text-ink-100 whitespace-pre leading-relaxed">
        {children}
      </div>
    </div>
  );
}
