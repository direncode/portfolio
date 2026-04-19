import Link from "next/link";

type Props = {
  number: string;
  label: string;
  title: string;
  kicker?: string;
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
};

export function ChapterHeader({ number, label, title, kicker, prev, next }: Props) {
  return (
    <header className="pt-16 md:pt-24 pb-8 border-b border-ink-800">
      <div className="flex items-center gap-3 text-accent">
        <span className="font-mono text-xs tracking-wider">{number}</span>
        <span className="h-px w-8 bg-accent/60" />
        <span className="uppercase tracking-[0.22em] text-[11px]">{label}</span>
      </div>
      <h1 className="font-serif text-4xl md:text-6xl tracking-tightish text-ink-50 mt-6 leading-[1.05] text-balance">
        {title}
      </h1>
      {kicker && (
        <p className="mt-5 text-ink-300 text-lg md:text-xl max-w-measure leading-relaxed text-pretty">
          {kicker}
        </p>
      )}
      {(prev || next) && (
        <div className="mt-10 flex items-center justify-between text-[13px] text-ink-400">
          <div>
            {prev && (
              <Link
                href={prev.href}
                className="hover:text-accent"
              >
                ← {prev.label}
              </Link>
            )}
          </div>
          <div>
            {next && (
              <Link
                href={next.href}
                className="hover:text-accent"
              >
                {next.label} →
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
