import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Line } from "@react-three/drei";

function Globe() {
  const globeRef = useRef();

  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.04;
    }
  });

  // Curved line from North Pole to Equator - slightly above surface
  const radius = 2.02;
  const linePoints = [];
  const segments = 30;

  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const angle = (t * Math.PI) / 2;
    const x = radius * Math.sin(angle);
    const y = radius * Math.cos(angle);
    linePoints.push([x, y, 0]);
  }

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

      <Line points={linePoints} color="#ff6b35" lineWidth={6} />
    </group>
  );
}

export default Globe;
