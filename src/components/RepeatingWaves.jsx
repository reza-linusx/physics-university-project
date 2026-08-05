import React from "react";
import { Line } from "@react-three/drei";

function RepeatingWaves() {
  const points = [];
  const marker1 = [
    [-2, 0, 0],
    [-2 + 4 / 3, 0, 0],
  ];
  const marker2 = [
    [-2 + 4 / 3, 0, 0],
    [-2 + 8 / 3, 0, 0],
  ];
  const marker3 = [
    [-2 + 8 / 3, 0, 0],
    [2, 0, 0],
  ];
  const steps = 200;

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = -2 + t * 4;
    const y = Math.sin(t * Math.PI * 6);
    points.push([x, y, 0]);
  }

  return (
    <>
      <Line points={points} color="#ff6b35" lineWidth={5} />
      <Line
        points={marker1}
        color="#ffffff"
        linewidth={3}
        opacity={0.8}
        transparent
      />
      <Line
        points={marker2}
        color="#ceff47"
        linewidth={3}
        opacity={0.8}
        transparent
      />

      <Line
        points={marker3}
        color="#12cc88"
        linewidth={3}
        opacity={0.8}
        transparent
      />
    </>
  );
}

export default RepeatingWaves;
