import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line, Sphere, Text } from "@react-three/drei";

function SingleWave() {
  const waveRef = useRef();

  useFrame(({ clock }) => {
    if (waveRef.current) {
      waveRef.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });

  // Single wave with 1 full cycle (from 0 to 2π)
  const points = [];
  const segments = 64;
  const amplitude = 0.5;

  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const x = t * 4 - 2; // -2 to 2
    const y = amplitude * Math.sin(t * Math.PI * 2);
    points.push([x, y, 0]);
  }

  // Wavelength markers: from start of wave to end of one full cycle
  const startPoint = [-2, 0, 0];
  const endPoint = [2, 0, 0];
  const midPoint = [0, 0, 0];

  // Vertical dashed lines for wavelength
  const leftLine = [
    [-2, -0.8, 0],
    [-2, 0.8, 0],
  ];
  const rightLine = [
    [2, -0.8, 0],
    [2, 0.8, 0],
  ];

  return (
    <group ref={waveRef}>
      {/* The wave itself */}
      <Line points={points} color="#ff6b35" lineWidth={3} />

      {/* Left wavelength marker */}
      <Line
        points={leftLine}
        color="#4ade80"
        lineWidth={1}
        opacity={0.5}
        transparent
      />

      {/* Right wavelength marker */}
      <Line
        points={rightLine}
        color="#4ade80"
        lineWidth={1}
        opacity={0.5}
        transparent
      />

      {/* Bottom line connecting the markers */}
      <Line
        points={[
          [-2, -0.7, 0],
          [2, -0.7, 0],
        ]}
        color="#4ade80"
        lineWidth={1}
        opacity={0.3}
        transparent
      />

      {/* Small spheres at marker points */}
      <Sphere args={[0.05, 8, 8]} position={[-2, 0, 0]}>
        <meshBasicMaterial color="#4ade80" />
      </Sphere>
      <Sphere args={[0.05, 8, 8]} position={[2, 0, 0]}>
        <meshBasicMaterial color="#4ade80" />
      </Sphere>
    </group>
  );
}

export default SingleWave;
