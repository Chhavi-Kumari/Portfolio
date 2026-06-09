"use client";

import { useEffect, useRef, useState } from "react";
import type { BufferGeometry, Material, MeshStandardMaterial, Object3D, Texture } from "three";
type Vector3Tuple = [number, number, number];

export default function MinecraftAvatar3DClient() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let disposed = false;
    let animationFrame = 0;
    let resizeObserver: ResizeObserver | undefined;
    const geometries: BufferGeometry[] = [];
    const materials: Material[] = [];
    const textures: Texture[] = [];
    const cleanupTasks: Array<() => void> = [];

    async function initialize() {
      try {
        const THREE = await import("three");
        const { OrbitControls } = await import("three/examples/jsm/controls/OrbitControls.js");
        if (disposed || !mount) return;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color("#081124");
        scene.fog = new THREE.FogExp2("#0b1630", 0.038);

        const camera = new THREE.PerspectiveCamera(29, 1, 0.1, 70);
        camera.position.set(6.8, 4.15, 9.8);

        const renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: false,
          powerPreference: "default"
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.14;
        renderer.domElement.setAttribute("aria-label", "Interactive Minecraft avatar. Drag to rotate.");
        renderer.domElement.style.width = "100%";
        renderer.domElement.style.height = "100%";
        renderer.domElement.style.display = "block";
        renderer.domElement.style.touchAction = "none";
        mount.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enablePan = false;
        controls.enableDamping = true;
        controls.dampingFactor = 0.075;
        controls.minDistance = 8.8;
        controls.maxDistance = 12;
        controls.minPolarAngle = Math.PI / 3.25;
        controls.maxPolarAngle = Math.PI / 1.74;
        controls.target.set(0, 2.15, 0);

        const materialCache = new Map<string, MeshStandardMaterial>();
        const makeMaterial = (
          key: string,
          color: string,
          roughness = 0.66,
          emissive = "#000000",
          emissiveIntensity = 0,
          pixelTexture = true,
          transparent = false,
          opacity = 1
        ) => {
          const cached = materialCache.get(key);
          if (cached) return cached;
          let map: Texture | undefined;
          if (pixelTexture) {
            const canvas = document.createElement("canvas");
            canvas.width = 16;
            canvas.height = 16;
            const context = canvas.getContext("2d");
            if (context) {
              const base = new THREE.Color(color);
              let seed = Array.from(key).reduce((total, character) => total + character.charCodeAt(0), 0);
              for (let y = 0; y < 8; y += 1) {
                for (let x = 0; x < 8; x += 1) {
                  seed = (seed * 9301 + 49297) % 233280;
                  const variation = (seed / 233280 - 0.5) * 0.16;
                  const tile = base.clone().offsetHSL(0, variation * 0.18, variation);
                  context.fillStyle = `#${tile.getHexString()}`;
                  context.fillRect(x * 2, y * 2, 2, 2);
                  context.fillStyle = "rgba(0,0,0,0.08)";
                  context.fillRect(x * 2, y * 2 + 1, 2, 1);
                }
              }
            }
            const texture = new THREE.CanvasTexture(canvas);
            texture.magFilter = THREE.NearestFilter;
            texture.minFilter = THREE.NearestFilter;
            texture.generateMipmaps = false;
            texture.colorSpace = THREE.SRGBColorSpace;
            textures.push(texture);
            map = texture;
          }
          const material = new THREE.MeshStandardMaterial({
            color: pixelTexture ? "#ffffff" : color,
            map,
            roughness,
            metalness: 0.02,
            emissive,
            emissiveIntensity,
            transparent,
            opacity,
            depthWrite: !transparent
          });
          materialCache.set(key, material);
          materials.push(material);
          return material;
        };

        const makeBox = (
          size: Vector3Tuple,
          position: Vector3Tuple,
          material: MeshStandardMaterial,
          rotation: Vector3Tuple = [0, 0, 0]
        ) => {
          const geometry = new THREE.BoxGeometry(...size);
          geometries.push(geometry);
          const mesh = new THREE.Mesh(geometry, material);
          mesh.position.set(...position);
          mesh.rotation.set(...rotation);
          mesh.castShadow = true;
          mesh.receiveShadow = true;
          return mesh;
        };

        const addBox = (
          parent: Object3D,
          size: Vector3Tuple,
          position: Vector3Tuple,
          material: MeshStandardMaterial,
          rotation?: Vector3Tuple
        ) => {
          const mesh = makeBox(size, position, material, rotation);
          parent.add(mesh);
          return mesh;
        };

        const palette = {
          skin: makeMaterial("skin", "#a85f38", 0.72),
          skinLight: makeMaterial("skinLight", "#c97b4c", 0.68),
          skinShadow: makeMaterial("skinShadow", "#7f4129", 0.76),
          hair: makeMaterial("hair", "#15110f", 0.56),
          hairMid: makeMaterial("hairMid", "#251b18", 0.6),
          hairHighlight: makeMaterial("hairHighlight", "#3a2822", 0.58),
          shirt: makeMaterial("shirt", "#8a3029", 0.68),
          shirtLight: makeMaterial("shirtLight", "#aa4035", 0.64),
          shirtDark: makeMaterial("shirtDark", "#5e211f", 0.74),
          pants: makeMaterial("pants", "#c4a174", 0.74),
          pantsLight: makeMaterial("pantsLight", "#d8b687", 0.7),
          pantsShadow: makeMaterial("pantsShadow", "#92704d", 0.8),
          shoes: makeMaterial("shoes", "#241918", 0.6),
          shoesLight: makeMaterial("shoesLight", "#3b2824", 0.58),
          sole: makeMaterial("sole", "#120d0e", 0.82),
          glasses: makeMaterial("glasses", "#c5a487", 0.38, "#000000", 0, true),
          lens: makeMaterial("lens", "#dce8e5", 0.16, "#9ec9c5", 0.08, false, true, 0.26),
          eyeWhite: makeMaterial("eyeWhite", "#f1eadb", 0.5),
          eye: makeMaterial("eye", "#34221b", 0.5),
          eyeGlow: makeMaterial("eyeGlow", "#73d9c3", 0.35, "#3da68f", 0.12),
          mouth: makeMaterial("mouth", "#633331", 0.66),
          gold: makeMaterial("gold", "#f6c343", 0.42, "#f6c343", 0.2),
          grass: makeMaterial("grass", "#315f37", 0.9),
          grassTop: makeMaterial("grassTop", "#4c8244", 0.86),
          dirt: makeMaterial("dirt", "#5a3a25", 1),
          dirtLight: makeMaterial("dirtLight", "#765033", 0.95),
          stone: makeMaterial("stone", "#45484e", 0.92),
          stoneLight: makeMaterial("stoneLight", "#62666e", 0.88),
          wood: makeMaterial("wood", "#6b4423", 0.82),
          woodLight: makeMaterial("woodLight", "#936238", 0.78),
          leaf: makeMaterial("leaf", "#244e2f", 0.86),
          bamboo: makeMaterial("bamboo", "#4c873d", 0.82),
          bambooLight: makeMaterial("bambooLight", "#70a64c", 0.8),
          lantern: makeMaterial("lantern", "#ffc65b", 0.35, "#ff9d32", 1.5),
          cloud: makeMaterial("cloud", "#35425f", 0.9)
        };

        scene.add(new THREE.AmbientLight("#7183af", 0.55));
        scene.add(new THREE.HemisphereLight("#7f9bd7", "#152018", 1.05));

        const keyLight = new THREE.DirectionalLight("#ffd49a", 3.4);
        keyLight.position.set(4.5, 7.5, 6);
        keyLight.castShadow = true;
        keyLight.shadow.mapSize.set(1024, 1024);
        keyLight.shadow.camera.left = -6;
        keyLight.shadow.camera.right = 6;
        keyLight.shadow.camera.top = 8;
        keyLight.shadow.camera.bottom = -5;
        keyLight.shadow.bias = -0.0006;
        scene.add(keyLight);

        const fillLight = new THREE.DirectionalLight("#7193ff", 1.35);
        fillLight.position.set(-5, 3, 4);
        scene.add(fillLight);

        const rimLight = new THREE.DirectionalLight("#b084ff", 1.65);
        rimLight.position.set(-2, 5, -6);
        scene.add(rimLight);

        const character = new THREE.Group();
        character.position.set(0, 0.08, 0.08);
        character.rotation.set(0, -0.18, 0);
        scene.add(character);

        const torso = new THREE.Group();
        torso.rotation.y = -0.04;
        character.add(torso);

        addBox(torso, [1.68, 1.78, 0.88], [0, 2.78, 0], palette.shirt);
        addBox(torso, [1.52, 0.34, 0.94], [0, 3.48, 0], palette.shirtLight);
        addBox(torso, [1.58, 0.26, 0.95], [0, 2.02, 0], palette.shirtDark);
        addBox(torso, [0.42, 0.34, 0.08], [0, 3.55, 0.49], palette.skinLight);
        addBox(torso, [0.14, 0.66, 0.07], [-0.58, 2.82, 0.49], palette.shirtLight);
        addBox(torso, [0.14, 0.66, 0.07], [0.58, 2.82, 0.49], palette.shirtDark);
        addBox(torso, [1.72, 0.2, 0.98], [0, 1.9, 0], palette.sole);
        addBox(torso, [0.22, 0.28, 0.08], [0, 1.9, 0.54], palette.gold);

        const head = new THREE.Group();
        head.position.set(0, 4.5, 0.02);
        head.rotation.set(-0.025, 0.04, 0);
        character.add(head);

        addBox(head, [2.02, 1.92, 1.72], [0, 0, 0], palette.skin);
        addBox(head, [2.08, 0.52, 1.78], [0, 0.72, -0.02], palette.hair);
        addBox(head, [2.1, 1.68, 0.4], [0, 0.08, -0.86], palette.hair);
        addBox(head, [0.42, 1.98, 0.56], [-0.85, -0.08, -0.42], palette.hairMid);
        addBox(head, [0.42, 1.98, 0.56], [0.85, -0.08, -0.42], palette.hairMid);
        addBox(head, [0.36, 2.1, 0.4], [-0.92, -0.7, 0.36], palette.hair);
        addBox(head, [0.36, 2.1, 0.4], [0.92, -0.7, 0.36], palette.hair);
        addBox(head, [0.56, 0.42, 0.26], [-0.52, 0.58, 0.78], palette.hairHighlight);
        addBox(head, [0.5, 0.38, 0.26], [0.22, 0.63, 0.79], palette.hairMid);
        addBox(head, [0.34, 0.4, 0.28], [-0.12, 0.48, 0.81], palette.hair);
        addBox(head, [0.32, 0.46, 0.3], [0.58, 0.42, 0.8], palette.hair);

        const addGlassesFrame = (centerX: number) => {
          addBox(head, [0.62, 0.08, 0.09], [centerX, 0.25, 0.91], palette.glasses);
          addBox(head, [0.62, 0.08, 0.09], [centerX, -0.24, 0.91], palette.glasses);
          addBox(head, [0.08, 0.57, 0.09], [centerX - 0.27, 0, 0.91], palette.glasses);
          addBox(head, [0.08, 0.57, 0.09], [centerX + 0.27, 0, 0.91], palette.glasses);
          addBox(head, [0.48, 0.39, 0.06], [centerX, 0, 0.89], palette.lens);
        };
        addGlassesFrame(-0.48);
        addGlassesFrame(0.48);
        addBox(head, [0.26, 0.08, 0.09], [0, 0.03, 0.92], palette.glasses);
        addBox(head, [0.36, 0.34, 0.08], [-0.48, 0.01, 0.97], palette.eyeWhite);
        addBox(head, [0.36, 0.34, 0.08], [0.48, 0.01, 0.97], palette.eyeWhite);
        addBox(head, [0.14, 0.28, 0.09], [-0.42, 0, 1.02], palette.eye);
        addBox(head, [0.14, 0.28, 0.09], [0.42, 0, 1.02], palette.eye);
        addBox(head, [0.46, 0.1, 0.08], [0, -0.5, 0.91], palette.mouth);

        const leftArm = new THREE.Group();
        leftArm.position.set(-1.18, 3.42, 0);
        leftArm.rotation.set(-0.03, 0, -0.09);
        addBox(leftArm, [0.78, 0.86, 0.86], [0, -0.28, 0], palette.shirtLight);
        addBox(leftArm, [0.7, 1.42, 0.76], [0, -1.38, 0], palette.skin);
        addBox(leftArm, [0.76, 0.34, 0.82], [0, -2.18, 0], palette.shirtDark);
        addBox(leftArm, [0.7, 0.46, 0.76], [0, -2.58, 0.03], palette.skinLight);
        character.add(leftArm);

        const rightArm = new THREE.Group();
        rightArm.position.set(1.18, 3.42, 0);
        rightArm.rotation.set(0.05, 0, 0.09);
        addBox(rightArm, [0.78, 0.86, 0.86], [0, -0.28, 0], palette.shirtLight);
        addBox(rightArm, [0.7, 1.42, 0.76], [0, -1.38, 0], palette.skin);
        addBox(rightArm, [0.76, 0.34, 0.82], [0, -2.18, 0], palette.shirtDark);
        addBox(rightArm, [0.7, 0.46, 0.76], [0, -2.58, 0.03], palette.skinLight);
        character.add(rightArm);

        const leftLeg = new THREE.Group();
        leftLeg.position.set(-0.46, 1.82, 0);
        leftLeg.rotation.z = -0.025;
        addBox(leftLeg, [0.82, 2.12, 0.86], [0, -0.98, 0], palette.pantsLight);
        addBox(leftLeg, [0.84, 0.38, 0.9], [0, -1.98, 0], palette.pantsShadow);
        addBox(leftLeg, [1.04, 0.78, 1.36], [0, -2.5, 0.2], palette.shoes);
        addBox(leftLeg, [1.08, 0.2, 1.4], [0, -2.88, 0.2], palette.sole);
        addBox(leftLeg, [0.68, 0.18, 0.08], [0, -2.42, 0.9], palette.shoesLight);
        character.add(leftLeg);

        const rightLeg = new THREE.Group();
        rightLeg.position.set(0.46, 1.82, 0);
        rightLeg.rotation.z = 0.025;
        addBox(rightLeg, [0.82, 2.12, 0.86], [0, -0.98, 0], palette.pants);
        addBox(rightLeg, [0.84, 0.38, 0.9], [0, -1.98, 0], palette.pantsShadow);
        addBox(rightLeg, [1.04, 0.78, 1.36], [0, -2.5, 0.2], palette.shoes);
        addBox(rightLeg, [1.08, 0.2, 1.4], [0, -2.88, 0.2], palette.sole);
        addBox(rightLeg, [0.68, 0.18, 0.08], [0, -2.42, 0.9], palette.shoesLight);
        character.add(rightLeg);

        const world = new THREE.Group();
        world.position.y = -1.18;
        scene.add(world);

        addBox(world, [6.8, 0.42, 5.2], [0, 0, 0], palette.grassTop);
        addBox(world, [6.8, 0.82, 5.2], [0, -0.62, 0], palette.dirt);
        addBox(world, [2.4, 0.45, 1.5], [-2.45, 0.38, -1.15], palette.grass);
        addBox(world, [2.4, 0.7, 1.5], [-2.45, -0.15, -1.15], palette.dirtLight);
        addBox(world, [1.7, 0.42, 1.6], [2.55, 0.28, -1.3], palette.grass);
        addBox(world, [1.7, 0.6, 1.6], [2.55, -0.22, -1.3], palette.dirt);

        [
          [-2.7, 0.44, 0.8],
          [-2.1, 0.4, 1.12],
          [2.48, 0.36, 1.02],
          [2.92, 0.4, 0.5]
        ].forEach((position, index) => {
          addBox(world, [0.58, 0.58, 0.58], position as Vector3Tuple, index % 2 ? palette.stoneLight : palette.stone);
        });

        const hut = new THREE.Group();
        hut.position.set(2.35, 0.35, -2.45);
        world.add(hut);
        addBox(hut, [0.32, 2.3, 0.32], [-0.85, 1.0, 0], palette.wood);
        addBox(hut, [0.32, 2.3, 0.32], [0.85, 1.0, 0], palette.wood);
        addBox(hut, [2.2, 0.28, 1.5], [0, 2.08, 0], palette.woodLight);
        addBox(hut, [1.7, 0.28, 1.72], [0, 2.37, 0], palette.wood);
        addBox(hut, [0.25, 1.5, 0.25], [0, 1.2, -0.55], palette.woodLight);

        const addLantern = (parent: Object3D, position: Vector3Tuple, intensity = 1.2) => {
          const lantern = new THREE.Group();
          lantern.position.set(...position);
          addBox(lantern, [0.32, 0.42, 0.32], [0, 0, 0], palette.lantern);
          addBox(lantern, [0.4, 0.08, 0.4], [0, 0.25, 0], palette.gold);
          addBox(lantern, [0.4, 0.08, 0.4], [0, -0.25, 0], palette.gold);
          const light = new THREE.PointLight("#ffad48", intensity, 4.5, 2);
          light.position.set(0, 0.08, 0.2);
          lantern.add(light);
          parent.add(lantern);
          return light;
        };

        const lanternOne = addLantern(hut, [-0.56, 1.15, 0.45], 1.4);
        const lanternTwo = addLantern(world, [-2.55, 0.95, 0.05], 0.95);

        [-3, -2.62, -2.18].forEach((x, index) => {
          const height = 2.2 + index * 0.42;
          addBox(world, [0.18, height, 0.18], [x, height / 2 + 0.38, -1.95], index % 2 ? palette.bambooLight : palette.bamboo);
          addBox(world, [0.48, 0.16, 0.42], [x + 0.08, height * 0.72, -1.92], palette.leaf);
        });

        [
          [-3.05, 0.52, -0.15],
          [-2.72, 0.42, -0.5],
          [2.9, 0.5, -0.25],
          [2.38, 0.42, -0.45]
        ].forEach((position) => addBox(world, [0.46, 0.72, 0.46], position as Vector3Tuple, palette.leaf));

        const shadowCanvas = document.createElement("canvas");
        shadowCanvas.width = 128;
        shadowCanvas.height = 128;
        const shadowContext = shadowCanvas.getContext("2d");
        if (shadowContext) {
          const gradient = shadowContext.createRadialGradient(64, 64, 4, 64, 64, 60);
          gradient.addColorStop(0, "rgba(0,0,0,0.58)");
          gradient.addColorStop(0.55, "rgba(0,0,0,0.26)");
          gradient.addColorStop(1, "rgba(0,0,0,0)");
          shadowContext.fillStyle = gradient;
          shadowContext.fillRect(0, 0, 128, 128);
        }
        const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
        textures.push(shadowTexture);
        const shadowMaterial = new THREE.MeshBasicMaterial({
          map: shadowTexture,
          transparent: true,
          depthWrite: false
        });
        materials.push(shadowMaterial);
        const shadowGeometry = new THREE.PlaneGeometry(3.2, 2.1);
        geometries.push(shadowGeometry);
        const contactShadow = new THREE.Mesh(shadowGeometry, shadowMaterial);
        contactShadow.rotation.x = -Math.PI / 2;
        contactShadow.position.set(0, -0.94, 0.15);
        scene.add(contactShadow);

        const starPositions: number[] = [];
        for (let index = 0; index < 85; index += 1) {
          starPositions.push(
            (Math.random() - 0.5) * 24,
            3.5 + Math.random() * 8,
            -5 - Math.random() * 7
          );
        }
        const starGeometry = new THREE.BufferGeometry();
        starGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starPositions, 3));
        geometries.push(starGeometry);
        const starMaterial = new THREE.PointsMaterial({
          color: "#dfe8ff",
          size: 0.06,
          transparent: true,
          opacity: 0.75
        });
        materials.push(starMaterial);
        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);

        const moon = addBox(scene, [1.1, 1.1, 0.18], [-4.5, 5.3, -5.5], palette.gold);
        moon.material = palette.gold;

        const clouds: Object3D[] = [];
        const createCloud = (position: Vector3Tuple, scale: number) => {
          const cloud = new THREE.Group();
          cloud.position.set(...position);
          cloud.scale.setScalar(scale);
          addBox(cloud, [1.8, 0.35, 0.55], [0, 0, 0], palette.cloud);
          addBox(cloud, [0.9, 0.35, 0.55], [-0.7, 0.32, 0], palette.cloud);
          addBox(cloud, [1.2, 0.35, 0.55], [0.7, 0.22, 0], palette.cloud);
          scene.add(cloud);
          clouds.push(cloud);
        };
        createCloud([-5, 5.5, -4.5], 0.8);
        createCloud([3.5, 6.4, -6], 0.62);

        const resize = () => {
          if (!mount) return;
          const width = Math.max(mount.clientWidth, 1);
          const height = Math.max(mount.clientHeight, 1);
          renderer.setSize(width, height, false);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
        };

        resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(mount);
        resize();

        const clock = new THREE.Clock();
        const animate = () => {
          if (disposed) return;
          const elapsed = clock.getElapsedTime();
          character.position.y = 0.08 + Math.sin(elapsed * 1.2) * 0.025;
          character.rotation.y = -0.18 + Math.sin(elapsed * 0.34) * 0.028;
          head.rotation.y = 0.04 + Math.sin(elapsed * 0.48) * 0.018;
          leftArm.rotation.x = -0.08 + Math.sin(elapsed * 1.1) * 0.018;
          rightArm.rotation.x = 0.12 - Math.sin(elapsed * 1.1) * 0.018;
          lanternOne.intensity = 1.32 + Math.sin(elapsed * 3.4) * 0.08;
          lanternTwo.intensity = 0.9 + Math.sin(elapsed * 2.8 + 1) * 0.06;
          starMaterial.opacity = 0.64 + Math.sin(elapsed * 1.6) * 0.11;
          clouds.forEach((cloud, index) => {
            cloud.position.x += 0.0015 + index * 0.0005;
            if (cloud.position.x > 6) cloud.position.x = -6;
          });
          controls.update();
          renderer.render(scene, camera);
          animationFrame = window.requestAnimationFrame(animate);
        };
        animate();

        cleanupTasks.push(() => {
          controls.dispose();
          geometries.forEach((geometry) => geometry.dispose());
          materials.forEach((material) => material.dispose());
          textures.forEach((texture) => texture.dispose());
          renderer.dispose();
          renderer.forceContextLoss();
          renderer.domElement.remove();
        });
      } catch {
        if (!disposed) setFailed(true);
      }
    }

    initialize();

    return () => {
      disposed = true;
      window.cancelAnimationFrame(animationFrame);
      resizeObserver?.disconnect();
      cleanupTasks.forEach((cleanup) => cleanup());
    };
  }, []);

  if (failed) {
    return (
      <div className="minecraft-avatar-stage relative mx-auto grid h-[520px] w-full max-w-[460px] place-items-center select-none">
        <div className="minecraft-window inventory-slot px-6 py-5 font-pixel text-sm uppercase text-[#F8F3D6]">
          3D avatar unavailable
        </div>
      </div>
    );
  }

  return (
    <div className="minecraft-avatar-stage relative mx-auto h-[520px] w-full max-w-[460px] select-none">
      <div className="minecraft-avatar-canvas minecraft-window relative h-full overflow-hidden">
        <div ref={mountRef} className="absolute inset-0" />
        <div className="pointer-events-none absolute bottom-4 left-1/2 z-20 -translate-x-1/2 inventory-slot whitespace-nowrap px-4 py-3 text-center font-pixel text-xs uppercase tracking-[0.16em] text-[#F8F3D6]">
          Drag to rotate
        </div>
      </div>
    </div>
  );
}
