type Stat = {
  value: string;
  label: string;
  note?: string;
};

export function StatBlock({ stats }: { stats: Stat[] }) {
  return (
    <div className="my-10 grid grid-cols-2 md:grid-cols-4 border border-ink-800 divide-x divide-ink-800">
      {stats.map((s, i) => (
        <div key={i} className="p-5">
          <div className="font-serif text-2xl md:text-3xl text-ink-50 tracking-tightish">
            {s.value}
          </div>
          <div className="mt-1 text-[12px] uppercase tracking-[0.15em] text-ink-400">
            {s.label}
          </div>
          {s.note && (
            <div className="mt-2 text-[12px] text-ink-500 leading-snug">
              {s.note}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
