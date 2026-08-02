import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import PlatinumBar from "./PlatinumBar";

function PlatinumView() {
  return (
    <Canvas camera={{ position: [4, 2, 4], fov: 40 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} />
      <PlatinumBar />
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        autoRotate={false}
        minDistance={1}
        maxDistance={15}
        target={[0, 0, 0]}
      />
    </Canvas>
  );
}

export default PlatinumView;
