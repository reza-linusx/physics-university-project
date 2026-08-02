import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Globe from "../../components/Globe";

function Length() {
  const [activeTab, setActiveTab] = useState("earth");

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row bg-slate-600 p-5 gap-2">
      <div className="flex-1 md:flex-3 bg-slate-700 flex items-center justify-center rounded-lg">
        {activeTab === "earth" ? (
          <Canvas camera={{ position: [3.8, 2.5, 6], fov: 40 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={0.3} />
            <directionalLight position={[-5, -5, -5]} intensity={0.2} />
            <Globe />
            <OrbitControls
              enableZoom={true}
              enablePan={false}
              autoRotate={false}
              minDistance={3.5}
              maxDistance={10}
              target={[0, 0, 0]}
            />
          </Canvas>
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <h1 className="text-white text-3xl font-bold">Other Tab</h1>
          </div>
        )}
      </div>

      <div className="flex-1 md:flex-1 bg-slate-700 flex flex-col items-center justify-center px-6 py-8 rounded-lg">
        <h1 className="text-white text-3xl font-bold mb-6">Length</h1>

        <div className="w-full flex flex-col gap-3 flex-1 justify-center">
          <button
            onClick={() => setActiveTab("earth")}
            className={`w-full py-3 px-4 rounded-lg transition-colors duration-200 text-sm font-medium ${
              activeTab === "earth"
                ? "bg-slate-500 text-white"
                : "bg-slate-600 hover:bg-slate-500 text-white"
            }`}
          >
            یک ده میلیونیم فاصله قطب تا استوا
          </button>

          <button
            onClick={() => setActiveTab("bar")}
            className={`w-full py-3 px-4 rounded-lg transition-colors duration-200 text-sm font-medium ${
              activeTab === "bar"
                ? "bg-slate-500 text-white"
                : "bg-slate-600 hover:bg-slate-500 text-white"
            }`}
          >
            میله پلاتین
          </button>

          <button
            onClick={() => setActiveTab("atom")}
            className={`w-full py-3 px-4 rounded-lg transition-colors duration-200 text-sm font-medium ${
              activeTab === "atom"
                ? "bg-slate-500 text-white"
                : "bg-slate-600 hover:bg-slate-500 text-white"
            }`}
          >
            اتم
          </button>

          <button
            onClick={() => setActiveTab("light")}
            className={`w-full py-3 px-4 rounded-lg transition-colors duration-200 text-sm font-medium ${
              activeTab === "light"
                ? "bg-slate-500 text-white"
                : "bg-slate-600 hover:bg-slate-500 text-white"
            }`}
          >
            نور
          </button>
        </div>
      </div>
    </div>
  );
}

export default Length;
