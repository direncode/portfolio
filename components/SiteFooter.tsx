export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-ink-800">
      <div className="mx-auto max-w-5xl px-5 md:px-8 py-10 text-[13px] text-ink-400 space-y-1.5">
        <p>
          Diren Kumaratilleke. Nineteen, building full time from Dubai on a
          gap semester from UNC. Five systems, zero co-authors, seven to
          nine months.
        </p>
        <p>
          Every number here resolves to an open repository, a published
          paper, or a live system —{" "}
          <a
            href="mailto:direnkumaratilleke@gmail.com"
            className="text-ink-200 hover:text-accent transition-colors"
          >
            direnkumaratilleke@gmail.com
          </a>{" "}
          ·{" "}
          <a
            href="https://github.com/direncode"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-200 hover:text-accent transition-colors"
          >
            github.com/direncode
          </a>
        </p>
      </div>
    </footer>
  );
}
