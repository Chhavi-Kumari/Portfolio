import { SectionHeader } from "@/components/SectionHeader";
import { profile } from "@/data/portfolio";

export default function ContactPage() {
  return (
    <>
      <SectionHeader eyebrow="Contact" title="Let’s build something useful" body="Best for TPM, program management, product operations, AI platforms, and enterprise systems conversations." />
      <div className="glass-card rounded-3xl p-6 text-[var(--muted)]">
        <p>Email: <a className="font-semibold text-[var(--fg)]" href={`mailto:${profile.email}`}>{profile.email}</a></p>
        <p className="mt-2">LinkedIn: <a className="font-semibold text-[var(--fg)]" href={profile.linkedin}>linkedin.com/in/chhavikumari</a></p>
        <p className="mt-2">GitHub: <a className="font-semibold text-[var(--fg)]" href={profile.github}>github.com/Chhavi-Kumari</a></p>
      </div>
    </>
  );
}
