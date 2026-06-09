import { SectionHeader } from "@/components/SectionHeader";
import { profile } from "@/data/portfolio";

export default function ResumePage() {
  return (
    <>
      <SectionHeader eyebrow="Resume" title="Resume and source profile" body="The current source document is the LinkedIn profile PDF used to populate this site." />
      <div className="glass-card rounded-3xl p-6">
        <a href={profile.resume} className="inline-flex rounded-full bg-[var(--fg)] px-5 py-3 text-sm font-semibold text-[var(--bg)]">
          Open LinkedIn Profile PDF
        </a>
        <p className="mt-4 text-sm text-[var(--muted)]">Replace this with a dedicated resume PDF later by updating <code>profile.resume</code> in <code>data/portfolio.ts</code>.</p>
      </div>
    </>
  );
}
