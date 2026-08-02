import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SingleWave from "./SingleWave";

function SingleWaveView() {
  return (
    <Canvas camera={{ position: [3, 2, 5], fov: 35 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} />
      <SingleWave />
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        autoRotate={false}
        minDistance={2}
        maxDistance={12}
        target={[0, 0, 0]}
      />
    </Canvas>
  );
}

export default SingleWaveView;
