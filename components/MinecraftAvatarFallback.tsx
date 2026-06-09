"use client";

import Image from "next/image";

type MinecraftAvatarFallbackProps = {
  note?: string;
};

export function MinecraftAvatarFallback({ note = "3D avatar fallback loaded" }: MinecraftAvatarFallbackProps) {
  return (
    <div className="minecraft-avatar-stage relative mx-auto h-[520px] w-full max-w-[460px] select-none">
      <div className="creative-cloud left-7 top-12 scale-75" aria-hidden="true" />
      <div className="creative-cloud right-8 top-24 scale-50 opacity-40" aria-hidden="true" />
      <div className="minecraft-avatar-canvas minecraft-window relative h-full overflow-hidden">
        <div className="creative-particles pointer-events-none absolute inset-0 z-10" aria-hidden="true" />
        <div className="grid h-full place-items-center">
          <Image
            src="/assets/minecraft-skin-source.png"
            alt="Minecraft-style Chhavi avatar fallback"
            width={469}
            height={532}
            className="h-[82%] w-auto object-contain [image-rendering:pixelated]"
            priority
          />
        </div>
        <div className="pointer-events-none absolute bottom-4 left-1/2 z-20 -translate-x-1/2 inventory-slot whitespace-nowrap px-4 py-3 text-center font-pixel text-[10px] uppercase tracking-[0.12em] text-lime-100">
          {note}
        </div>
      </div>
    </div>
  );
}
