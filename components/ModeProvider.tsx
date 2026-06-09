"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Mode } from "@/data/portfolio";

type ModeContextValue = {
  mode: Mode;
  setMode: (mode: Mode) => void;
  toggleMode: () => void;
};

const ModeContext = createContext<ModeContextValue | null>(null);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<Mode>("professional");

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-mode") as Mode | null;
    if (stored === "professional" || stored === "creative") {
      setModeState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.mode = mode;
    window.localStorage.setItem("portfolio-mode", mode);
  }, [mode]);

  const value = useMemo<ModeContextValue>(
    () => ({
      mode,
      setMode: setModeState,
      toggleMode: () => setModeState((current) => (current === "professional" ? "creative" : "professional"))
    }),
    [mode]
  );

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
}

export function useMode() {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error("useMode must be used inside ModeProvider");
  }
  return context;
}
