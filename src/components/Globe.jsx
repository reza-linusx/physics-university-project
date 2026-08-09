import React, { useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import { Sphere, Line } from "@react-three/drei";
import { TextureLoader } from "three";
import earthTexture from "../assets/earth.jpg";

function Globe() {
  const texture = useLoader(TextureLoader, earthTexture);

  const meridianPoints = useMemo(() => {
    const points = [];
    const radius = 2.02;
    const segments = 24;

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const angle = (t * Math.PI) / 2;
      const x = radius * Math.sin(angle);
      const y = radius * Math.cos(angle);
      points.push([x, y, 0]);
    }

    return points;
  }, []);

  const equatorPoints = useMemo(() => {
    const points = [];
    const equtorRadius = 2.01;
    const equatorSegments = 36;

    for (let i = 0; i <= equatorSegments; i++) {
      const theta = (i / equatorSegments) * Math.PI * 2;
      const x = equtorRadius * Math.cos(theta);
      const y = 0;
      const z = equtorRadius * Math.sin(theta);
      points.push([x, y, z]);
    }

    return points;
  }, []);

  return (
    <>
      <Sphere args={[2, 48, 48]}>
        <meshStandardMaterial
          map={texture}
          roughness={0.95}
          metalness={0.0}
          emissive={0x000000}
        />
      </Sphere>
      <Line points={meridianPoints} color="#ff6b35" lineWidth={4} />
      <Line points={equatorPoints} color="#4ade80" lineWidth={2} />
    </>
  );
}

export default Globe;
