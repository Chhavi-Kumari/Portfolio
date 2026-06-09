"use client";

import type { Mode } from "@/data/portfolio";

export function BackgroundMotion({ mode }: { mode: Mode }) {
  if (mode === "professional") {
    return (
      <div className="professional-motion" aria-hidden="true">
        <span className="pastel-orb pastel-orb-one" />
        <span className="pastel-orb pastel-orb-two" />
        <span className="pastel-orb pastel-orb-three" />
        <span className="pastel-orb pastel-orb-four" />
        <span className="pastel-dot pastel-dot-one" />
        <span className="pastel-dot pastel-dot-two" />
        <span className="pastel-dot pastel-dot-three" />
        <span className="pastel-dot pastel-dot-four" />
        <span className="pastel-dot pastel-dot-five" />
      </div>
    );
  }

  return (
    <div className="creative-sky-motion" aria-hidden="true">
      <span className="pixel-moon" />
      <span className="night-stars night-stars-near" />
      <span className="night-stars night-stars-far" />
      <span className="sky-fireflies" />
      <div className="cloud-lane cloud-lane-one">
        <span className="pixel-cloud pixel-cloud-large" />
        <span className="pixel-cloud pixel-cloud-small" />
      </div>
      <div className="cloud-lane cloud-lane-two">
        <span className="pixel-cloud pixel-cloud-medium" />
        <span className="pixel-cloud pixel-cloud-small" />
      </div>
    </div>
  );
}
