import Link from "next/link";

export type ResourceKind = "site" | "repo" | "tear" | "paper" | "demo";

export type Resource = {
  kind: ResourceKind;
  label: string;
  href: string;
};

const KIND_LABEL: Record<ResourceKind, string> = {
  site: "Live Site",
  repo: "Repository",
  tear: "Tear Sheet",
  paper: "Paper",
  demo: "Live Demo",
};

const KIND_ICON: Record<ResourceKind, string> = {
  site: "↗",
  repo: "↗",
  tear: "PDF",
  paper: "PDF",
  demo: "↗",
};

type Props = {
  resources: Resource[];
  heading?: string;
  className?: string;
};

export function SourceBar({
  resources,
  heading = "Sources",
  className = "",
}: Props) {
  if (!resources.length) return null;
  return (
    <section
      className={`mx-auto max-w-5xl px-5 md:px-8 mt-10 ${className}`}
      aria-label="Sources, repositories, and documents"
    >
      <div className="chapter-label mb-3">{heading}</div>
      <div className="flex flex-wrap gap-3">
        {resources.map((r, i) => {
          const external = r.href.startsWith("http");
          const sharedClasses =
            "group inline-flex items-center gap-3 border border-ink-700/70 hover:border-accent bg-ink-900/60 px-4 py-3 transition-colors";
          const content = (
            <>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                {KIND_LABEL[r.kind]}
              </span>
              <span className="hidden sm:block h-4 w-px bg-ink-700/70" />
              <span className="text-ink-100 group-hover:text-accent text-sm transition-colors">
                {r.label}
              </span>
              <span className="text-accent text-xs font-mono">
                {KIND_ICON[r.kind]}
              </span>
            </>
          );
          return external ? (
            <a
              key={i}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className={sharedClasses}
            >
              {content}
            </a>
          ) : (
            <Link key={i} href={r.href} className={sharedClasses}>
              {content}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
