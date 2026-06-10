import { SectionHeader } from "@/components/SectionHeader";
import { certifications, skills } from "@/data/portfolio";

export default function SkillsPage() {
  return (
    <>
      <SectionHeader eyebrow="Skills" title="Two inventories, one data model" />
      <div className="grid gap-8 lg:grid-cols-2">
        <SkillGroup title="Professional Skills" items={skills.professional} />
        <SkillGroup title="Creative Skills" items={skills.creative} />
      </div>
      <section className="mt-10 glass-card rounded-3xl p-6">
        <h2 className="text-2xl font-bold">Certifications</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {certifications.map((certification) => (
            <span key={certification} className="rounded-full border border-[var(--line)] px-4 py-2 text-sm text-[var(--muted)]">{certification}</span>
          ))}
        </div>
      </section>
    </>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="glass-card rounded-3xl p-6">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-full border border-[var(--line)] px-4 py-2 text-sm text-[var(--muted)]">{item}</span>
        ))}
      </div>
    </section>
  );
}
