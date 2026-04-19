type Props = {
  label?: string;
  children: React.ReactNode;
};

export function Callout({ label = "Note", children }: Props) {
  return (
    <aside className="my-10 border-l-2 border-accent/60 bg-ink-900/40 px-5 py-4 text-ink-200 not-italic">
      <div className="chapter-label mb-1">{label}</div>
      <div className="text-[15px] leading-relaxed">{children}</div>
    </aside>
  );
}
