"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import { navigation, profile } from "@/data/portfolio";
import { useMode } from "@/components/ModeProvider";

export function Header() {
  const { mode } = useMode();

  return (
    <header className="site-header sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--bg)]/82 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 xl:flex-row xl:items-center xl:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className={`grid h-11 w-11 place-items-center font-bold ${mode === "creative" ? "pixel-border bg-lime-300 text-green-950" : "rounded-2xl bg-[#FFD6C9] text-[#E94864] shadow-[0_10px_30px_rgba(244,124,124,.18)]"}`}>
            CK
          </span>
          <span>
            <span className="block text-sm font-bold leading-none">{profile.name}</span>
            <span className="text-xs text-[var(--muted)]">{mode === "creative" ? "Creative overworld" : profile.tagline}</span>
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-2 text-sm text-[var(--muted)]">
          {navigation.map((item) =>
            item.external ? (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="nav-link rounded-full px-3 py-2 transition hover:text-[var(--fg)]">
                {item.label}
              </a>
            ) : (
              <Link key={item.label} href={item.href} className="nav-link rounded-full px-3 py-2 transition hover:text-[var(--fg)]">
                {item.label}
              </Link>
            )
          )}
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
}
