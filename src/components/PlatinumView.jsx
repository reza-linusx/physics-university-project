import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import PlatinumBar from "./PlatinumBar";

function PlatinumView() {
  return (
    <Canvas camera={{ position: [1.8, 1.2, 1.8], fov: 35 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} />
      <PlatinumBar />
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        autoRotate={false}
        minDistance={0.5}
        maxDistance={15}
        target={[0, 0, 0]}
      />
    </Canvas>
  );
}

export default PlatinumView;
