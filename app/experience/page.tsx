"use client";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { useMode } from "@/components/ModeProvider";
import { creativeExperiences, professionalExperiences } from "@/data/portfolio";

export default function ExperiencePage() {
  const { mode } = useMode();
  const visibleExperiences = mode === "creative" ? creativeExperiences : professionalExperiences;

  return (
    <>
      <SectionHeader
        eyebrow={mode === "creative" ? "Creative Quests" : "Experience"} />
      <div className="grid gap-5 lg:grid-cols-2">
        {visibleExperiences.map((experience) => (
          <Card key={experience.slug} title={experience.role} eyebrow={`${experience.company} · ${experience.dates}`} href={`/experience/${experience.slug}`}>
            <p>{experience.summary}</p>
            <ul className="mt-4 space-y-2">
              {experience.highlights.slice(0, 3).map((highlight) => (
                <li key={highlight}>• {highlight}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </>
  );
}
