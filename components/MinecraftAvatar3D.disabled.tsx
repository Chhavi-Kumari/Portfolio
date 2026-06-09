"use client";

import Image from "next/image";
import { Component, Suspense, useEffect, useMemo, useRef, useState, type ErrorInfo, type ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { createMinecraftSkinMaterials, type SkinPart } from "@/components/MinecraftSkinMaterial";

const THREE_AVATAR_ENABLED = true;

type SkinBoxProps = {
  part: SkinPart;
  size: [number, number, number];
  position: [number, number, number];
};

function SkinBox({ part, size, position }: SkinBoxProps) {
  const texture = useTexture("/assets/minecraft-skin.png");
  const materials = useMemo(() => createMinecraftSkinMaterials(texture, part), [part, texture]);

  useEffect(
    () => () => {
      materials.forEach((material) => {
        material.map?.dispose();
        material.dispose();
      });
    },
    [materials]
  );

  return (
    <mesh position={position} material={materials} castShadow receiveShadow>
      <boxGeometry args={size} />
    </mesh>
  );
}

function MinecraftCharacter() {
  const group = useRef<THREE.Group>(null);
  const leftArm = useRef<THREE.Group>(null);
  const rightArm = useRef<THREE.Group>(null);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    if (group.current) {
      group.current.position.y = Math.sin(elapsed * 1.35) * 0.045;
      group.current.rotation.y = Math.sin(elapsed * 0.35) * 0.04;
    }
    if (leftArm.current && rightArm.current) {
      leftArm.current.rotation.x = Math.sin(elapsed * 1.25) * 0.025;
      rightArm.current.rotation.x = -Math.sin(elapsed * 1.25) * 0.025;
    }
  });

  return (
    <group ref={group} position={[0, -1.9, 0]} rotation={[0, -0.16, 0]}>
      <SkinBox part="head" size={[1.45, 1.45, 1.45]} position={[0, 4.35, 0]} />
      <SkinBox part="body" size={[1.45, 2.15, 0.72]} position={[0, 2.55, 0]} />
      <group ref={leftArm} position={[-1.1, 3.18, 0]}>
        <SkinBox part="leftArm" size={[0.7, 2.15, 0.72]} position={[0, -0.62, 0]} />
      </group>
      <group ref={rightArm} position={[1.1, 3.18, 0]}>
        <SkinBox part="rightArm" size={[0.7, 2.15, 0.72]} position={[0, -0.62, 0]} />
      </group>
      <SkinBox part="leftLeg" size={[0.7, 2.15, 0.72]} position={[-0.37, 0.4, 0]} />
      <SkinBox part="rightLeg" size={[0.7, 2.15, 0.72]} position={[0.37, 0.4, 0]} />
    </group>
  );
}

function AvatarFallback() {
  return (
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
  );
}

class WebGLErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(_error: Error, _info: ErrorInfo) {}

  render() {
    return this.state.failed ? <AvatarFallback /> : this.props.children;
  }
}

function WebGLAvatar() {
  const [webGLAvailable, setWebGLAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      if (navigator.webdriver) {
        setWebGLAvailable(false);
        return;
      }
      const testCanvas = document.createElement("canvas");
      const context = testCanvas.getContext("webgl2", { failIfMajorPerformanceCaveat: true })
        ?? testCanvas.getContext("webgl", { failIfMajorPerformanceCaveat: true });
      const rendererExtension = context?.getExtension("WEBGL_debug_renderer_info");
      const renderer = rendererExtension
        ? String(context?.getParameter(rendererExtension.UNMASKED_RENDERER_WEBGL)).toLowerCase()
        : "";
      const softwareRenderer = ["swiftshader", "llvmpipe", "software", "microsoft basic render"].some((name) => renderer.includes(name));
      setWebGLAvailable(Boolean(context) && !softwareRenderer);
      context?.getExtension("WEBGL_lose_context")?.loseContext();
    } catch {
      setWebGLAvailable(false);
    }
  }, []);

  if (webGLAvailable !== true) {
    return <AvatarFallback />;
  }

  return (
    <WebGLErrorBoundary>
      <Canvas
        shadows
        dpr={1}
        camera={{ position: [5.4, 3.45, 7.4], fov: 31, near: 0.1, far: 60 }}
        gl={{ antialias: false, alpha: true, powerPreference: "default", preserveDrawingBuffer: false }}
        fallback={<AvatarFallback />}
      >
        <color attach="background" args={["#68b8ef"]} />
        <fog attach="fog" args={["#68b8ef", 10, 22]} />
        <ambientLight intensity={1.25} />
        <hemisphereLight args={["#dff5ff", "#3d5f25", 1.55]} />
        <directionalLight
          castShadow
          position={[4, 8, 6]}
          intensity={3.1}
          color="#fff0ca"
          shadow-mapSize={[512, 512]}
          shadow-camera-far={20}
          shadow-camera-left={-6}
          shadow-camera-right={6}
          shadow-camera-top={7}
          shadow-camera-bottom={-5}
        />
        <directionalLight position={[-5, 2, 3]} intensity={1.1} color="#7ec8ff" />
        <Suspense fallback={null}>
          <MinecraftCharacter />
        </Suspense>
        <mesh position={[0, -1.72, 0]} receiveShadow>
          <boxGeometry args={[5.7, 0.45, 4.5]} />
          <meshStandardMaterial color="#57933b" roughness={0.94} />
        </mesh>
        <mesh position={[0, -2.02, 0]} receiveShadow>
          <boxGeometry args={[5.7, 0.58, 4.5]} />
          <meshStandardMaterial color="#6d4425" roughness={1} />
        </mesh>
        <OrbitControls
          makeDefault
          enablePan={false}
          enableDamping
          dampingFactor={0.075}
          minDistance={7.4}
          maxDistance={10.2}
          minPolarAngle={Math.PI / 3.2}
          maxPolarAngle={Math.PI / 1.72}
          target={[0, 1.15, 0]}
        />
      </Canvas>
    </WebGLErrorBoundary>
  );
}

export function MinecraftAvatar3D() {
  return (
    <div className="minecraft-avatar-stage relative mx-auto h-[520px] w-full max-w-[460px] select-none">
      <div className="creative-cloud left-7 top-12 scale-75" aria-hidden="true" />
      <div className="creative-cloud right-8 top-24 scale-50 opacity-40" aria-hidden="true" />
      <div className="minecraft-avatar-canvas minecraft-window relative h-full overflow-hidden">
        <div className="creative-particles pointer-events-none absolute inset-0 z-10" aria-hidden="true" />
        {THREE_AVATAR_ENABLED ? <WebGLAvatar /> : <AvatarFallback />}
        <div className="pointer-events-none absolute bottom-4 left-1/2 z-20 -translate-x-1/2 inventory-slot whitespace-nowrap px-4 py-3 text-center font-pixel text-xs uppercase tracking-[0.16em] text-lime-100">
          Avatar preview
        </div>
      </div>
    </div>
  );
}
