import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";

function PlatinumBar() {
  const barRef = useRef();

  return (
    <group ref={barRef}>
      <Box args={[1.8, 0.18, 0.18]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#c0c0c0"
          roughness={0.2}
          metalness={0.9}
          emissive="#666666"
          emissiveIntensity={0.05}
        />
      </Box>

      <mesh position={[-0.85, 0.12, 0]}>
        <boxGeometry args={[0.02, 0.04, 0.15]} />
        <meshBasicMaterial color="#ff6b35" />
      </mesh>

      <mesh position={[0.85, 0.12, 0]}>
        <boxGeometry args={[0.02, 0.04, 0.15]} />
        <meshBasicMaterial color="#ff6b35" />
      </mesh>

      <mesh position={[-0.85, 0.12, 0]}>
        <boxGeometry args={[0.035, 0.05, 0.18]} />
        <meshBasicMaterial color="#ff6b35" transparent opacity={0.15} />
      </mesh>

      <mesh position={[0.85, 0.12, 0]}>
        <boxGeometry args={[0.035, 0.05, 0.18]} />
        <meshBasicMaterial color="#ff6b35" transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

export default PlatinumBar;
