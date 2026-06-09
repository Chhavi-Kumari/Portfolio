import Link from "next/link";

export function Card({
  eyebrow,
  title,
  children,
  href,
  className = ""
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  const content = (
    <article className={`glass-card group relative h-full overflow-hidden rounded-3xl p-7 transition duration-300 hover:-translate-y-1 ${className}`}>
      <span className="card-corner" aria-hidden="true" />
      {eyebrow ? <p className="card-eyebrow mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent)]">{eyebrow}</p> : null}
      <h3 className="card-title text-xl font-bold tracking-[-0.02em]">{title}</h3>
      <div className="card-copy mt-4 text-sm leading-7 text-[var(--muted)]">{children}</div>
    </article>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
