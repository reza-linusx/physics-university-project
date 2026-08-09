import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Globe from "./Globe";

function GlobeView({ controlsEnabled = true }) {
  return (
    <Canvas
      className="w-full h-screen"
      camera={{ position: [3.8, 2.5, 6], fov: 40 }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={0.4} />
      <Globe />
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        autoRotate={false}
        minDistance={3.5}
        maxDistance={8}
        target={[0, 0, 0]}
        enabled={controlsEnabled}
        makeDefault
        enableDamping={false}
      />
    </Canvas>
  );
}

export default GlobeView;
