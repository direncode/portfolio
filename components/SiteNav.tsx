"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS: { href: string; label: string }[] = [
  { href: "/primitives", label: "Primitives" },
  { href: "/btut", label: "BTUT" },
  { href: "/crystara", label: "Crystara" },
  { href: "/niv", label: "NIV" },
  { href: "/participatory-data-estate", label: "PDE" },
  { href: "/convergence", label: "Convergence" },
  { href: "/forward", label: "Forward" },
  { href: "/about", label: "About" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-md transition-colors ${
        scrolled
          ? "bg-ink-950/80 border-b border-ink-800"
          : "bg-ink-950/40 border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-[17px] tracking-tightish text-ink-50 hover:text-accent transition-colors"
        >
          Diren Kumaratilleke
          <span className="hidden sm:inline text-ink-500 font-sans ml-2 text-xs uppercase tracking-[0.18em]">
            / primitives
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-[13px]">
          {LINKS.map((l) => {
            const active =
              pathname === l.href ||
              (l.href !== "/" && pathname?.startsWith(l.href));
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`transition-colors ${
                  active
                    ? "text-accent"
                    : "text-ink-300 hover:text-ink-50"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
          className="md:hidden text-ink-200 border border-ink-700 rounded-sm px-3 py-1 text-xs uppercase tracking-wider"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-ink-800 bg-ink-950">
          <div className="mx-auto max-w-6xl px-5 py-4 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-ink-200 hover:text-accent"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
