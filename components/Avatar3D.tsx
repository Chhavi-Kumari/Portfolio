"use client";

import Image from "next/image";
import { assetPath } from "@/lib/assetPath";

export function Avatar3D() {
  return (
    <div className="fake-avatar-stage minecraft-window relative mx-auto h-[520px] w-full max-w-[460px] select-none overflow-hidden">
      <div className="fake-avatar-ambient" aria-hidden="true" />
      <div className="fake-avatar-stars" aria-hidden="true" />
      <div className="fake-avatar-platform" aria-hidden="true">
        <span className="fake-avatar-platform-top" />
        <span className="fake-avatar-ground-shadow" />
      </div>
      <div className="fake-avatar-perspective">
        <div className="fake-avatar-float">
          <Image
            src={assetPath("/assets/minecraft-avatar-fake3d.png")}
            alt="Minecraft-style Chhavi avatar with glasses and long dark hair"
            width={1024}
            height={1536}
            className="fake-avatar-image"
            priority
          />
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-4 left-1/2 z-20 -translate-x-1/2 inventory-slot whitespace-nowrap px-4 py-3 text-center font-pixel text-xs uppercase tracking-[0.16em] text-[#F8F3D6]">
        Hover to inspect
      </div>
    </div>
  );
}
