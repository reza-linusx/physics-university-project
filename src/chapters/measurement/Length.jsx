import React from "react";

function Length() {
  return (
    <div className="h-screen w-screen flex">
      {/* Left side: Visual area */}
      <div className="flex-1 bg-gray-900 flex items-center justify-center">
        <p className="text-white">Visual will go here</p>
      </div>

      {/* Right side: Info panel */}
      <div className="w-96 bg-gray-800 flex flex-col items-center justify-center">
        <h1 className="text-white text-3xl font-bold">Length</h1>
        <p className="text-gray-400 mt-4">Information will go here</p>
      </div>
    </div>
  );
}

export default Length;
