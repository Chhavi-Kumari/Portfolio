"use client";

import { useEffect, useState } from "react";
import type { Mode } from "@/data/portfolio";

const introMessage = "Hi, I’m Chhavi. Welcome to my portfolio — hope you have a fun time exploring.";

type LandingIntroProps = {
  onEnter: (mode: Mode) => void;
};

export function LandingIntro({ onEnter }: LandingIntroProps) {
  const [characterCount, setCharacterCount] = useState(0);
  const complete = characterCount >= introMessage.length;

  useEffect(() => {
    if (complete) return;
    const timer = window.setTimeout(() => setCharacterCount((count) => count + 1), 31);
    return () => window.clearTimeout(timer);
  }, [characterCount, complete]);

  return (
    <div className="entry-screen fixed inset-0 z-[100] overflow-y-auto px-4 py-8 sm:px-6">
      <div className="mx-auto flex min-h-full max-w-6xl flex-col justify-center">
        <div className="mx-auto max-w-3xl text-center">
          <p className="entry-kicker">Choose your path</p>
          <h1 className="entry-typing mt-5 min-h-[7.5rem] text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#312924] sm:min-h-[9rem] sm:text-5xl">
            {introMessage.slice(0, characterCount)}
            <span className="typing-caret" aria-hidden="true" />
          </h1>
          {!complete && (
            <button type="button" onClick={() => setCharacterCount(introMessage.length)} className="entry-skip mt-4 text-sm font-semibold text-[#8c625b] underline-offset-4 hover:underline">
              Skip intro
            </button>
          )}
        </div>

        <div className={`entry-worlds mt-10 grid gap-6 lg:grid-cols-2 ${complete ? "is-visible" : ""}`} aria-hidden={!complete}>
          <article className="entry-card professional-entry">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#E94864]">Career portal</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1F2937]">Professional World</h2>
              <p className="mt-4 max-w-xl leading-7 text-[#6B7280]">
                Explore my technical program management, product execution, AI platform, and enterprise systems work.
              </p>
            </div>
            <button type="button" tabIndex={complete ? 0 : -1} onClick={() => onEnter("professional")} className="mt-8 w-fit rounded-full bg-[#F47C7C] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(244,124,124,.28)] transition hover:-translate-y-1">
              Enter Professional World
            </button>
          </article>

          <article className="entry-card creative-entry">
            <div className="entry-grass" aria-hidden="true" />
            <div className="relative z-10">
              <p className="font-pixel text-sm uppercase tracking-[0.18em] text-lime-200">Adventure portal</p>
              <h2 className="mt-4 font-pixel text-3xl text-[#fff3c4] [text-shadow:3px_3px_0_#14200d]">Creative World</h2>
              <p className="mt-4 max-w-xl leading-7 text-[#d5e9c6]">
                Enter a Minecraft-inspired space for creative projects, storytelling, experiments, and world-building.
              </p>
            </div>
            <button type="button" tabIndex={complete ? 0 : -1} onClick={() => onEnter("creative")} className="pixel-border relative z-10 mt-8 w-fit bg-lime-300 px-6 py-3.5 font-pixel text-sm font-bold uppercase text-green-950 transition hover:-translate-y-1">
              Enter Creative World
            </button>
          </article>
        </div>
      </div>
    </div>
  );
}
