import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import RepeatingWaves from "./RepeatingWaves";

function RepeatingWaveView() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} />
      <OrbitControls enableZoom={true} maxDistance={10} minDistance={2} />
      <RepeatingWaves />
    </Canvas>
  );
}

export default RepeatingWaveView;
