import { useLoader } from "@react-three/fiber";
import React from "react";
import { TextureLoader } from "three";

function Globe() {
  const texture = useLoader(TextureLoader, "/src/assets/earth.jpg");

  return (
    <mesh>
      <sphereGeometry args={[1.8, 32, 32]} />
      <meshStandardMaterial color="#e8705a" map={texture} />
    </mesh>
  );
}

export default Globe;
