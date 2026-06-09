"use client";

import { useEffect, useState } from "react";
import { BackgroundMotion } from "@/components/BackgroundMotion";
import { Header } from "@/components/Header";
import { LandingIntro } from "@/components/LandingIntro";
import { useMode } from "@/components/ModeProvider";
import type { Mode } from "@/data/portfolio";

export function Shell({ children }: { children: React.ReactNode }) {
  const { mode, setMode } = useMode();
  const [hasEntered, setHasEntered] = useState<boolean | null>(null);

  useEffect(() => {
    setHasEntered(window.sessionStorage.getItem("portfolio-entered") === "true");
  }, []);

  const enterWorld = (selectedMode: Mode) => {
    setMode(selectedMode);
    window.sessionStorage.setItem("portfolio-entered", "true");
    setHasEntered(true);
  };

  if (hasEntered === null) {
    return <div className="min-h-screen bg-[#fff9f5]" />;
  }

  if (!hasEntered) {
    return <LandingIntro onEnter={enterWorld} />;
  }

  return (
    <div className={mode === "creative" ? "creative-surface min-h-screen" : "professional-surface min-h-screen"}>
      <BackgroundMotion mode={mode} />
      <Header />
      <main className="mode-fade relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}
