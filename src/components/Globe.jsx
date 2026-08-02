import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Sphere, Line } from "@react-three/drei";
import { TextureLoader } from "three";
import earthTexture from "../assets/earth.jpg";

function Globe() {
  const globeRef = useRef();
  const texture = useLoader(TextureLoader, earthTexture);

  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.04;
    }
  });

  // Meridian line from North Pole to Equator
  const radius = 2.02;
  const meridianPoints = [];
  const segments = 30;

  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const angle = (t * Math.PI) / 2;
    const x = radius * Math.sin(angle);
    const y = radius * Math.cos(angle);
    meridianPoints.push([x, y, 0]);
  }

  // Equator line (full circle)
  const equatorPoints = [];
  const equatorSegments = 60;
  for (let i = 0; i <= equatorSegments; i++) {
    const theta = (i / equatorSegments) * Math.PI * 2;
    const x = radius * Math.cos(theta);
    const y = 0;
    const z = radius * Math.sin(theta);
    equatorPoints.push([x, y, z]);
  }

  return (
    <group ref={globeRef}>
      <Sphere args={[2, 96, 96]}>
        <meshStandardMaterial map={texture} roughness={0.8} metalness={0.0} />
      </Sphere>

      {/* Meridian line - orange */}
      <Line points={meridianPoints} color="#ff6b35" lineWidth={6} />

      {/* Equator line - green, thin */}
      <Line points={equatorPoints} color="#4ade80" lineWidth={1.5} />
    </group>
  );
}

export default Globe;
