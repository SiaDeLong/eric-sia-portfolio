"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 120;

// Generated once at module level — avoids calling Math.random during render
const initialPositions = new Float32Array(PARTICLE_COUNT * 3);
const particleSpeeds = new Float32Array(PARTICLE_COUNT);
for (let i = 0; i < PARTICLE_COUNT; i++) {
  initialPositions[i * 3] = (Math.random() - 0.5) * 14;
  initialPositions[i * 3 + 1] = (Math.random() - 0.5) * 8;
  initialPositions[i * 3 + 2] = (Math.random() - 0.5) * 4;
  particleSpeeds[i] = 0.2 + Math.random() * 0.4;
}

function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  const count = PARTICLE_COUNT;
  const positions = initialPositions;
  const speeds = particleSpeeds;

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions.slice(), 3));
    return g;
  }, [positions]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const pos = meshRef.current.geometry.attributes.position;
    const t = clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      const y = positions[i * 3 + 1] + Math.sin(t * speeds[i] + i) * 0.003;
      pos.setY(i, y);
    }
    pos.needsUpdate = true;
    meshRef.current.rotation.y = t * 0.02;
  });

  return (
    <points ref={meshRef} geometry={geo}>
      <pointsMaterial
        size={0.06}
        color="#a78bfa"
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

export default function ParticleField() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      dpr={[1, 1]}
      gl={{ antialias: false, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Particles />
    </Canvas>
  );
}
