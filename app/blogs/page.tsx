import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { blogs } from "@/data/portfolio";

export default function BlogsPage() {
  return (
    <>
      <SectionHeader eyebrow="Blogs" title="Writing placeholders" body="Draft slots for future essays on AI platforms, program systems, and creative portfolio design." />
      <div className="grid gap-5 md:grid-cols-2">
        {blogs.map((blog) => (
          <Card key={blog.title} title={blog.title} eyebrow={blog.status}>
            {blog.summary}
          </Card>
        ))}
      </div>
    </>
  );
}
