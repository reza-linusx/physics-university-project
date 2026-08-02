import React from "react";

function Globe() {
  return (
    <mesh>
      <sphereGeometry args={[1.8, 32, 32]} />
      <meshStandardMaterial color="#e8705a" />
    </mesh>
  );
}

export default Globe;
