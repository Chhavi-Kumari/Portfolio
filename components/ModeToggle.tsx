"use client";

import { useMode } from "@/components/ModeProvider";

export function ModeToggle() {
  const { mode, setMode } = useMode();
  const isCreative = mode === "creative";

  return (
    <div className="mode-toggle flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/70 p-1 text-xs font-semibold shadow-[0_12px_34px_rgba(107,114,128,.10)] backdrop-blur dark:bg-black/30">
      <button
        type="button"
        aria-pressed={!isCreative}
        onClick={() => setMode("professional")}
        className={`mode-option rounded-full px-3 py-2 transition ${!isCreative ? "active-mode bg-[#F47C7C] text-white shadow-[0_10px_24px_rgba(244,124,124,.26)]" : "text-[var(--muted)] hover:text-[var(--fg)]"}`}
      >
        Professional
      </button>
      <button
        type="button"
        role="switch"
        aria-checked={isCreative}
        aria-label="Switch portfolio mode"
        onClick={() => setMode(isCreative ? "professional" : "creative")}
        className={`relative h-8 w-16 rounded-full border transition duration-500 ${
          isCreative ? "border-lime-300 bg-lime-500/30 shadow-glow" : "border-[#FFD6C9] bg-[#FFF9F5]"
        }`}
      >
        <span
          className={`absolute top-1 h-6 w-6 rounded-full transition-all duration-500 ${
            isCreative ? "left-9 bg-lime-200 shadow-[0_0_20px_rgba(190,255,150,.9)]" : "left-1 bg-[#F47C7C] shadow-[0_8px_18px_rgba(244,124,124,.32)]"
          }`}
        />
      </button>
      <button
        type="button"
        aria-pressed={isCreative}
        onClick={() => setMode("creative")}
        className={`mode-option rounded-full px-3 py-2 transition ${isCreative ? "active-mode bg-lime-300 text-green-950" : "text-[var(--muted)] hover:text-[var(--fg)]"}`}
      >
        Creative
      </button>
    </div>
  );
}
