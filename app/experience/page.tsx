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
          <Card key={experience.slug} title={experience.role} eyebrow={`${experience.company} · ${experience.dates}`}>
            <ul className="mt-4 space-y-2">
              {experience.bullets.map((bullet) => (
                <li key={bullet}>• {bullet}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </>
  );
}
