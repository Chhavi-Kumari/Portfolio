"use client";

import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { useMode } from "@/components/ModeProvider";
import { certifications, skills } from "@/data/portfolio";

export default function SkillsPage() {
  const { mode } = useMode();
  const visibleSkills = mode === "creative" ? skills.creative : skills.professional;
  const skillTitle = mode === "creative" ? "Creative Skills" : "Professional Skills";

  return (
    <>
      <SectionHeader eyebrow="Skills" title="Two inventories, one data model" />
      <div className="grid gap-8">
        <SkillGroup title={skillTitle} items={visibleSkills} />
      </div>
      <section className="mt-10 glass-card rounded-3xl p-6">
        <h2 className="text-2xl font-bold">Certifications</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {certifications.map((certification) => (
            <Link
              key={certification.slug}
              href={`/certifications/${certification.slug}`}
              className="rounded-full border border-[var(--line)] px-4 py-2 text-sm text-[var(--muted)]"
            >
              {certification.title}
            </Link>
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
