import Image from "next/image";
import { notFound } from "next/navigation";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);
  return {
    title: project ? `${project.title} | Project` : "Project"
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <SectionHeader eyebrow={project.status === "placeholder" ? "Placeholder project" : `${project.mode} project`} title={project.title} body={project.summary} />
      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          <ProjectBlock title="Overview" body={project.overview} />
          <ProjectBlock title="Problem" body={project.problem} />
          <ProjectBlock title="Solution" body={project.solution} />
          <ProjectBlock title="Impact" body={project.impact} />
          {project.screenshots.length ? (
            <section className="glass-card rounded-3xl p-6">
              <h2 className="text-2xl font-bold">Screenshots</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {project.screenshots.map((screenshot) => (
                  <Image key={screenshot} src={screenshot} alt={`${project.title} screenshot`} width={600} height={420} className="rounded-2xl object-cover" />
                ))}
              </div>
            </section>
          ) : null}
        </div>
        <aside className="space-y-6">
          <section className="glass-card rounded-3xl p-6">
            <h2 className="text-2xl font-bold">Technologies</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span key={technology} className="rounded-full border border-[var(--line)] px-3 py-2 text-sm text-[var(--muted)]">{technology}</span>
              ))}
            </div>
          </section>
          <section className="glass-card rounded-3xl p-6">
            <h2 className="text-2xl font-bold">Links</h2>
            {project.links.length ? (
              <div className="mt-4 space-y-2">
                {project.links.map((link) => (
                  <a key={link.href} href={link.href} className="block text-sm font-semibold text-[var(--accent)]">{link.label}</a>
                ))}
              </div>
            ) : (
              <p className="mt-4 text-sm text-[var(--muted)]">Placeholder: add demo, GitHub, article, or case-study links.</p>
            )}
          </section>
        </aside>
      </div>
    </>
  );
}

function ProjectBlock({ title, body }: { title: string; body: string }) {
  return (
    <section className="glass-card rounded-3xl p-6">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-4 leading-7 text-[var(--muted)]">{body}</p>
    </section>
  );
}
