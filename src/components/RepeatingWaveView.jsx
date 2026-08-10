import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import RepeatingWaves from "./RepeatingWaves";

function RepeatingWaveView() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
      <OrbitControls enableZoom={true} maxDistance={8} minDistance={3} />
      <RepeatingWaves />
    </Canvas>
  );
}

export default RepeatingWaveView;
