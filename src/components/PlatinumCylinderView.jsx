import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import PlatinumCylinder from "./PlatinumCylinder";

function PlatinumCylinderView({ controlsEnabled = true }) {
  return (
    <Canvas camera={{ position: [1.8, 1.2, 1.8], fov: 35 }}>
      <ambientLight intensity={3.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} />
      <PlatinumCylinder />
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

export default PlatinumCylinderView;
