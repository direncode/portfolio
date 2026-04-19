import Link from "next/link";

type Props = {
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
};

export function ChapterFooter({ prev, next }: Props) {
  if (!prev && !next) return null;
  return (
    <div className="mt-24 pt-10 border-t border-ink-800 flex items-center justify-between text-[14px]">
      <div className="flex-1">
        {prev && (
          <Link
            href={prev.href}
            className="group inline-block text-ink-300 hover:text-accent"
          >
            <div className="text-[11px] uppercase tracking-[0.2em] text-ink-500 group-hover:text-accent">
              Previous
            </div>
            <div className="mt-1">← {prev.label}</div>
          </Link>
        )}
      </div>
      <div className="flex-1 text-right">
        {next && (
          <Link
            href={next.href}
            className="group inline-block text-ink-300 hover:text-accent"
          >
            <div className="text-[11px] uppercase tracking-[0.2em] text-ink-500 group-hover:text-accent">
              Next
            </div>
            <div className="mt-1">{next.label} →</div>
          </Link>
        )}
      </div>
    </div>
  );
}
