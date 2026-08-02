import React, { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import earthTexture from "../assets/earth.jpg";

function Globe() {
  const meshRef = useRef();
  const texture = useLoader(TextureLoader, earthTexture);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.8, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default Globe;
