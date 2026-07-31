/**
 * Uniform chapter sections. Every chapter carries the same six, in the same
 * order, under the same names. A reader who jumps straight to section IV of
 * any chapter knows what they will find there.
 */

export const SECTION_NAMES = {
  I: "The Inversion",
  II: "The Construction",
  III: "The Evidence",
  IV: "The Bound",
  V: "If This Is Right",
  VI: "Sources",
} as const;

export type SectionNumeral = keyof typeof SECTION_NAMES;

export function ChapterSection({
  numeral,
  title,
}: {
  numeral: SectionNumeral;
  /** Override only where a chapter genuinely splits a section. */
  title?: string;
}) {
  return (
    <div className="mt-16 mb-6 first:mt-0">
      <div className="flex items-baseline gap-3 border-b border-ink-800 pb-2">
        <span className="font-mono text-[11px] tracking-[0.2em] text-accent w-8 shrink-0">
          {numeral}
        </span>
        <h2 className="font-serif text-2xl md:text-[1.9rem] tracking-tightish text-ink-50 leading-tight !mt-0 !mb-0">
          {title ?? SECTION_NAMES[numeral]}
        </h2>
      </div>
    </div>
  );
}

/**
 * Section IV. Rendered with its own frame so it cannot be skimmed past and
 * cannot be mistaken for part of the evidence. Never softened, never merged
 * into III, never below the fold of the chapter.
 */
export function Bound({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-ink-500 bg-ink-900/40 pl-5 pr-5 py-4 my-6 text-ink-200">
      {children}
    </div>
  );
}

/** Display maths. Text, never an image. */
export function Equation({
  children,
  note,
}: {
  children: React.ReactNode;
  note?: string;
}) {
  return (
    <div className="my-6">
      <div className="overflow-x-auto border border-ink-700/60 bg-ink-900/90 rounded-md px-5 py-4">
        <div className="font-mono text-[0.95em] text-ink-100 whitespace-pre leading-relaxed">
          {children}
        </div>
      </div>
      {note && (
        <div className="mt-2 text-[13px] text-ink-500 leading-snug">{note}</div>
      )}
    </div>
  );
}
