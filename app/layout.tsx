import type { Metadata } from "next";
import "@/app/globals.css";
import { ModeProvider } from "@/components/ModeProvider";
import { Shell } from "@/components/Shell";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Chhavi Kumari | Technical Program Manager",
  description: "Dual-mode portfolio for Chhavi Kumari: Professional TPM portfolio and Minecraft-inspired creative universe.",
  verification: {
    google: "8s2dP9VRupQ5jFjbQzRgkYRUzLa8d3GTdgztiYXAbKY"
  },
  openGraph: {
    title: "Chhavi Kumari | AI Platforms & Enterprise Systems",
    description: profile.summary,
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ModeProvider>
          <Shell>{children}</Shell>
        </ModeProvider>
      </body>
    </html>
  );
}
