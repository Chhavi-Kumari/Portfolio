"use client";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { useMode } from "@/components/ModeProvider";
import { projects } from "@/data/portfolio";

export default function ProjectsPage() {
  const { mode } = useMode();
  const visibleProjects = projects.filter((project) => project.mode === mode);

  return (
    <>
      <SectionHeader
        eyebrow={mode === "creative" ? "Builds" : "Projects"}
        title={mode === "creative" ? "Creative project world" : "Program and platform projects"}
        body="Project placeholders are clearly marked and ready to replace with richer case-study details, screenshots, and links."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <Card key={project.slug} title={project.title} eyebrow={project.status === "placeholder" ? "Placeholder" : project.mode} href={`/projects/${project.slug}`}>
            {project.summary}
          </Card>
        ))}
      </div>
    </>
  );
}
