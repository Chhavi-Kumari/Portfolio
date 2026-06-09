import { notFound } from "next/navigation";
import { SectionHeader } from "@/components/SectionHeader";
import { experiences } from "@/data/portfolio";

export function generateStaticParams() {
  return experiences.map((experience) => ({ slug: experience.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const experience = experiences.find((item) => item.slug === params.slug);
  return {
    title: experience ? `${experience.role} | ${experience.company}` : "Experience"
  };
}

export default function ExperienceDetailPage({ params }: { params: { slug: string } }) {
  const experience = experiences.find((item) => item.slug === params.slug);
  if (!experience) notFound();

  return (
    <>
      <SectionHeader eyebrow={`${experience.company} · ${experience.dates}`} title={experience.role} body={experience.summary} />
      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          <DetailBlock title="Responsibilities" items={experience.responsibilities} />
          <DetailBlock title="Outcomes" items={experience.outcomes} />
          <DetailBlock title="Key Learnings" items={experience.learnings} />
        </div>
        <aside className="space-y-6">
          <DetailBlock title="Metrics" items={experience.metrics} compact />
          <DetailBlock title="Technologies" items={experience.technologies} compact />
        </aside>
      </div>
    </>
  );
}

function DetailBlock({ title, items, compact = false }: { title: string; items: string[]; compact?: boolean }) {
  return (
    <section className="glass-card rounded-3xl p-6">
      <h2 className="text-2xl font-bold">{title}</h2>
      <ul className={`mt-4 ${compact ? "flex flex-wrap gap-2" : "space-y-3 text-[var(--muted)]"}`}>
        {items.map((item) => (
          <li key={item} className={compact ? "rounded-full border border-[var(--line)] px-3 py-2 text-sm text-[var(--muted)]" : ""}>
            {compact ? item : `• ${item}`}
          </li>
        ))}
      </ul>
    </section>
  );
}
