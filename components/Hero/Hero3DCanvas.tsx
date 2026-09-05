'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function CyberNodeMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const outerWireRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const timeRef = useRef(0);

  useFrame((_, delta) => {
    timeRef.current += delta;

    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.4;
    }
    if (outerWireRef.current) {
      outerWireRef.current.rotation.x -= delta * 0.2;
      outerWireRef.current.rotation.z += delta * 0.25;
    }
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(timeRef.current * 1.5) * 0.15;
    }
  });

  return (
    <group ref={groupRef} scale={1.8}>
      {/* Inner Glowing Hologram Core */}
      <mesh ref={meshRef}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={0.6}
          wireframe
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Outer Cryptographic Shield Dodecahedron */}
      <mesh ref={outerWireRef}>
        <icosahedronGeometry args={[1.4, 0]} />
        <meshStandardMaterial
          color="#10b981"
          emissive="#10b981"
          emissiveIntensity={0.3}
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>
    </group>
  );
}

export default function Hero3DCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center font-mono text-xs text-cyan-400/50">
        Initializing 3D Visual...
      </div>
    );
  }

  return (
    <div className="w-full h-[300px] sm:h-[380px] md:h-[440px] relative pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00f0ff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#10b981" />
        <CyberNodeMesh />
      </Canvas>
    </div>
  );
}
