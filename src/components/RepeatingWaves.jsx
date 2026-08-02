import React from "react";
import { Line, Text } from "@react-three/drei";

function RepeatingWaves() {
  // Create repeating waves with a counter
  const numWaves = 6;
  const waves = [];
  const pointsPerWave = 40;
  const amplitude = 0.4;
  const wavelength = 1.2;
  const spacing = wavelength;

  for (let w = 0; w < numWaves; w++) {
    const points = [];
    const xOffset = w * spacing - ((numWaves - 1) * spacing) / 2;

    for (let i = 0; i <= pointsPerWave; i++) {
      const t = i / pointsPerWave;
      const x = xOffset + t * spacing - spacing / 2;
      const y = amplitude * Math.sin(t * Math.PI * 2);
      const z = 0;
      points.push([x, y, z]);
    }
    waves.push(points);
  }

  const markers = [];
  for (let w = 0; w < numWaves; w++) {
    const xOffset = w * spacing - ((numWaves - 1) * spacing) / 2;
    markers.push({
      left: [xOffset - spacing / 2, -0.5, 0],
      right: [xOffset + spacing / 2, -0.5, 0],
    });
  }

  return (
    <group>
      {waves.map((points, index) => (
        <Line
          key={index}
          points={points}
          color="#ff6b35"
          lineWidth={2}
          opacity={0.7 + (index / waves.length) * 0.3}
          transparent
        />
      ))}

      {markers.map((marker, index) => (
        <Line
          key={`marker-${index}`}
          points={[marker.left, marker.right]}
          color="#4ade80"
          lineWidth={1}
          opacity={0.4}
          transparent
        />
      ))}

      {markers.map((marker, index) => (
        <Line
          key={`vline-${index}`}
          points={[
            [marker.left[0], -0.5, 0],
            [marker.left[0], 0.5, 0],
          ]}
          color="#4ade80"
          lineWidth={0.5}
          opacity={0.2}
          transparent
        />
      ))}

      {markers.length > 0 && (
        <Line
          points={[
            [markers[markers.length - 1].right[0], -0.5, 0],
            [markers[markers.length - 1].right[0], 0.5, 0],
          ]}
          color="#4ade80"
          lineWidth={0.5}
          opacity={0.2}
          transparent
        />
      )}

      <Text
        position={[0, -1.2, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        1,650,763.73 λ = 1 متر
      </Text>
    </group>
  );
}

export default RepeatingWaves;
