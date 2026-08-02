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
      <Sphere args={[2, 96, 96]}>
        <meshStandardMaterial map={texture} roughness={0.8} metalness={0.0} />
      </Sphere>

      <Line points={linePoints} color="#ff6b35" lineWidth={6} />
    </group>
  );
}

export default Globe;
