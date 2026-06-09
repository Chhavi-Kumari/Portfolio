export function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="text-xs font-bold uppercase tracking-[0.26em] text-[var(--accent)]">{eyebrow}</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
      {body ? <p className="mt-4 text-lg leading-8 text-[var(--muted)]">{body}</p> : null}
    </div>
  );
}
