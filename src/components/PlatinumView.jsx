import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import PlatinumBar from "./PlatinumBar";

function PlatinumView({ controlsEnabled = true }) {
  return (
    <Canvas camera={{ position: [1.8, 1.2, 1.8], fov: 35 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={0.2} />
      <PlatinumBar />
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        autoRotate={false}
        minDistance={3}
        maxDistance={8}
        target={[0, 0, 0]}
        enabled={controlsEnabled}
        makeDefault
        enableDamping={false}
      />
    </Canvas>
  );
}

export default PlatinumView;
