import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";

function Globe() {
  const globeRef = useRef();

  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.04;
    }
  });

  return (
    <group ref={globeRef}>
      <Sphere args={[2, 64, 64]}>
        <meshStandardMaterial
          color="#1a5a9e"
          roughness={0.4}
          metalness={0.0}
          emissive="#0d2a4a"
          emissiveIntensity={0.1}
        />
      </Sphere>
    </group>
  );
}

export default Globe;
