export function Essay({ children }: { children: React.ReactNode }) {
  return (
    <article className="mx-auto max-w-measure px-5 md:px-8 prose-essay">
      {children}
    </article>
  );
}
