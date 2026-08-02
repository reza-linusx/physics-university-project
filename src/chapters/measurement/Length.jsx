import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Globe from "./Globe";

function Length() {
  return (
    <div className="h-screen w-screen flex flex-col md:flex-row bg-slate-600 p-5 gap-2">
      <div className="flex-1 md:flex-3 bg-slate-700 flex items-center justify-center rounded-lg">
        <Canvas>
          <ambientLight intensity={1.0} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <directionalLight position={[-5, -5, -5]} intensity={0.5} />
          <Globe />
          <OrbitControls minDistance={3} maxDistance={10} enablePan={false} />
        </Canvas>
      </div>

      <div className="flex-1 md:flex-1 bg-slate-700 flex flex-col items-center justify-center px-8 rounded-lg">
        <h1 className="text-white text-4xl font-bold mb-4">Length</h1>
        <p className="text-slate-300 text-center">Information will go here</p>
      </div>
    </div>
  );
}

export default Length;
