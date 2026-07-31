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
            Five inversions — grounding, coordination, structure, signal,
            ingestion. Built full time from Dubai, on a gap semester from
            UNC.
          </p>
          <a
            href="mailto:direnkumaratilleke@gmail.com"
            className="inline-block mt-4 text-ink-200 hover:text-accent transition-colors"
          >
            direnkumaratilleke@gmail.com
          </a>
        </div>
        <div>
          <div className="uppercase text-[11px] tracking-[0.18em] text-ink-500 mb-3">
            Systems
          </div>
          <ul className="space-y-1.5">
            <li><Link href="/latent-ocean" className="hover:text-accent">Latent Ocean</Link></li>
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
                href="https://latentocean.com/spacex/off-earth"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                The network-cut gate
              </a>
            </li>
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
        © {new Date().getFullYear()} Diren Kumaratilleke. Every number cited
        on this site resolves to an open repository, a published tear sheet,
        or a live system. Impact claims are printed beside the condition
        they have not yet met.
      </div>
    </footer>
  );
}
