import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { education } from "@/data/portfolio";

export default function EducationPage() {
  return (
    <>
      <SectionHeader eyebrow="Education" title="Academic foundation"/>
      <div className="grid gap-5 md:grid-cols-3">
        {education.map((item) => (
          <Card
            key={`${item.school}-${item.dates}`}
            title={item.school}
            eyebrow={item.dates}
          >
            <p className="font-medium">{item.degree}</p>

          {item.coursework && (
            <div className="mt-3">
            <p className="text-sm font-semibold">Relevant Coursework</p>
            <p className="text-sm font">
          {item.coursework.join(" • ")}
          </p>
        </div>
              )}
          </Card>
        ))}
      </div>
    </>
  );
}
