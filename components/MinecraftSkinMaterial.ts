import * as THREE from "three";

export type SkinPart = "head" | "body" | "rightArm" | "leftArm" | "rightLeg" | "leftLeg";

type Region = [x: number, y: number, width: number, height: number];
type FaceRegions = Record<"right" | "left" | "top" | "bottom" | "front" | "back", Region>;

const skinRegions: Record<SkinPart, FaceRegions> = {
  head: { right: [0, 8, 8, 8], left: [16, 8, 8, 8], top: [8, 0, 8, 8], bottom: [16, 0, 8, 8], front: [8, 8, 8, 8], back: [24, 8, 8, 8] },
  body: { right: [16, 20, 4, 12], left: [28, 20, 4, 12], top: [20, 16, 8, 4], bottom: [28, 16, 8, 4], front: [20, 20, 8, 12], back: [32, 20, 8, 12] },
  rightArm: { right: [40, 20, 4, 12], left: [48, 20, 4, 12], top: [44, 16, 4, 4], bottom: [48, 16, 4, 4], front: [44, 20, 4, 12], back: [52, 20, 4, 12] },
  leftArm: { right: [32, 52, 4, 12], left: [40, 52, 4, 12], top: [36, 48, 4, 4], bottom: [40, 48, 4, 4], front: [36, 52, 4, 12], back: [44, 52, 4, 12] },
  rightLeg: { right: [0, 20, 4, 12], left: [8, 20, 4, 12], top: [4, 16, 4, 4], bottom: [8, 16, 4, 4], front: [4, 20, 4, 12], back: [12, 20, 4, 12] },
  leftLeg: { right: [16, 52, 4, 12], left: [24, 52, 4, 12], top: [20, 48, 4, 4], bottom: [24, 48, 4, 4], front: [20, 52, 4, 12], back: [28, 52, 4, 12] }
};

const faceOrder: (keyof FaceRegions)[] = ["right", "left", "top", "bottom", "front", "back"];

export function createMinecraftSkinMaterials(texture: THREE.Texture, part: SkinPart) {
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  texture.generateMipmaps = false;

  return faceOrder.map((face) => {
    const [x, y, width, height] = skinRegions[part][face];
    const faceTexture = texture.clone();
    faceTexture.needsUpdate = true;
    faceTexture.repeat.set(width / 64, height / 64);
    faceTexture.offset.set(x / 64, 1 - (y + height) / 64);
    faceTexture.magFilter = THREE.NearestFilter;
    faceTexture.minFilter = THREE.NearestFilter;
    faceTexture.generateMipmaps = false;
    faceTexture.colorSpace = THREE.SRGBColorSpace;

    return new THREE.MeshStandardMaterial({
      map: faceTexture,
      roughness: 0.82,
      metalness: 0,
      transparent: true,
      alphaTest: 0.08
    });
  });
}
