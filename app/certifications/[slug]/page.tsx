import { notFound } from "next/navigation";
import { SectionHeader } from "@/components/SectionHeader";
import { certifications } from "@/data/portfolio";

export function generateStaticParams() {
  return certifications.map((certification) => ({ slug: certification.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const certification = certifications.find((item) => item.slug === slug);

  return {
    title: certification ? `${certification.title} | Certification` : "Certification"
  };
}

export default async function CertificationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const certification = certifications.find((item) => item.slug === slug);

  if (!certification) notFound();

  return (
    <>
      <SectionHeader eyebrow="Certification" title={certification.title} />
      <section className="glass-card rounded-3xl p-6">
        <h2 className="text-2xl font-bold">Certificate placeholder</h2>
        <p className="mt-4 leading-7 text-[var(--muted)]">
          Placeholder: add the certificate image, PDF, credential link, issuer details, and completion date here.
        </p>
      </section>
    </>
  );
}
