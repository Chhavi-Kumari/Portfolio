import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { education } from "@/data/portfolio";

export default function EducationPage() {
  return (
    <>
      <SectionHeader eyebrow="Education" title="Academic foundation" body="Engineering, management, and business training across USC and VIT Pune." />
      <div className="grid gap-5 md:grid-cols-3">
        {education.map((item) => (
          <Card key={`${item.school}-${item.dates}`} title={item.school} eyebrow={item.dates}>
            <p>{item.degree}</p>
          </Card>
        ))}
      </div>
    </>
  );
}
