type Props = {
  /** One sentence, concrete. What changes if the work holds. */
  ifRight: React.ReactNode;
  /** Named institution types. Not "everyone". */
  mattersTo: React.ReactNode;
  /** The condition that has not yet been established. Never soften this. */
  notEstablished: React.ReactNode;
  className?: string;
};

/**
 * Every impact claim on this site is paired with its own unmet condition.
 * The third field is not optional and is not a disclaimer — it is what
 * makes the first two readable as claims rather than marketing.
 */
export function ImpactBlock({
  ifRight,
  mattersTo,
  notEstablished,
  className = "",
}: Props) {
  return (
    <section
      className={`my-12 border border-ink-800 ${className}`}
      aria-label="Impact and its unmet condition"
    >
      <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-ink-800">
        <div className="p-6">
          <div className="font-sans uppercase tracking-[0.18em] text-[10px] text-accent mb-3">
            If this is right
          </div>
          <p className="text-[15px] leading-relaxed text-ink-100">{ifRight}</p>
        </div>
        <div className="p-6">
          <div className="font-sans uppercase tracking-[0.18em] text-[10px] text-accent mb-3">
            Who it matters to
          </div>
          <p className="text-[15px] leading-relaxed text-ink-100">
            {mattersTo}
          </p>
        </div>
        <div className="p-6 bg-ink-900/50">
          <div className="font-sans uppercase tracking-[0.18em] text-[10px] text-ink-400 mb-3">
            Not yet established
          </div>
          <p className="text-[15px] leading-relaxed text-ink-300">
            {notEstablished}
          </p>
        </div>
      </div>
    </section>
  );
}
