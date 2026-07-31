import Link from "next/link";

type Props = {
  number: string;
  title: string;
  subtitle: string;
  one_liner: string;
  beat: string;
  href: string;
};

export function PrimitiveCard({
  number,
  title,
  subtitle,
  one_liner,
  beat,
  href,
}: Props) {
  return (
    <Link
      href={href}
      className="card group block hover:bg-ink-900/70"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="chapter-label">{number} · {subtitle}</div>
        <span className="text-ink-500 group-hover:text-accent transition-colors text-xs">
          Read →
        </span>
      </div>
      <h3 className="font-serif text-2xl md:text-[1.75rem] tracking-tightish text-ink-50 mt-3 leading-tight">
        {title}
      </h3>
      <p className="mt-3 text-ink-300 leading-relaxed text-[15px]">
        {one_liner}
      </p>
      <div className="mt-5 pt-4 border-t border-ink-800 text-[13px] text-accent-soft">
        <span className="text-ink-500 font-sans uppercase tracking-[0.18em] text-[10px] mr-2">
          Evidence
        </span>
        {beat}
      </div>
    </Link>
  );
}
