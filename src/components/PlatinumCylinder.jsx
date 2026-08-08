import React from "react";
import { Cylinder } from "@react-three/drei";

function PlatinumCylinder() {
  return (
    <Cylinder args={[0.3, 0.3, 0.95, 64]} position={[0, 0, 0]}>
      <meshStandardMaterial color="#d8d8d8" metalness={0.99} roughness={0.68} />
    </Cylinder>
  );
}

export default PlatinumCylinder;
