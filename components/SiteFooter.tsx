import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-ink-800">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-12 grid md:grid-cols-3 gap-8 text-[13px] text-ink-400">
        <div>
          <div className="font-serif text-ink-50 text-base mb-2">
            Diren Kumaratilleke
          </div>
          <p className="text-ink-400 leading-relaxed max-w-sm">
            Building horizontal intelligence primitives — coordination,
            structure, signal, and ingestion — from a single desk at UNC.
          </p>
        </div>
        <div>
          <div className="uppercase text-[11px] tracking-[0.18em] text-ink-500 mb-3">
            Primitives
          </div>
          <ul className="space-y-1.5">
            <li><Link href="/btut" className="hover:text-accent">BTUT</Link></li>
            <li><Link href="/crystara" className="hover:text-accent">Crystara</Link></li>
            <li><Link href="/niv" className="hover:text-accent">NIV</Link></li>
            <li><Link href="/participatory-data-estate" className="hover:text-accent">Participatory Data Estate</Link></li>
          </ul>
        </div>
        <div>
          <div className="uppercase text-[11px] tracking-[0.18em] text-ink-500 mb-3">
            Elsewhere
          </div>
          <ul className="space-y-1.5">
            <li>
              <a
                href="https://github.com/direncode"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                GitHub — direncode
              </a>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent">
                About / Context
              </Link>
            </li>
            <li>
              <Link href="/forward" className="hover:text-accent">
                Forward direction
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 md:px-8 pb-10 text-[12px] text-ink-500">
        © {new Date().getFullYear()} Diren Kumaratilleke. All numbers cited on
        this site are drawn from the respective open-source repositories.
      </div>
    </footer>
  );
}
