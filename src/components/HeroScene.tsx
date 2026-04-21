import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Stars, Sparkles, MeshDistortMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
}

function CoreShape() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time / 4);
      meshRef.current.rotation.y = Math.sin(time / 2);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshBasicMaterial color="#00f0ff" wireframe />
      </mesh>
      <mesh scale={0.98}>
        <icosahedronGeometry args={[1.5, 2]} />
        <MeshDistortMaterial
          color="#ff2d78"
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.9}
          roughness={0.1}
          distort={0.4}
          speed={2}
          emissive="#7c3aed"
          emissiveIntensity={2}
        />
      </mesh>
    </Float>
  );
}

function FallbackGlow() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 60% 60% at 50% 40%, rgba(0,240,255,0.12) 0%, rgba(255,45,120,0.07) 40%, transparent 70%)",
        animation: "pulse 4s ease-in-out infinite",
      }}
    />
  );
}

export default function HeroScene() {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);

  useEffect(() => {
    setWebglSupported(isWebGLAvailable());
  }, []);

  return (
    <section
      data-testid="hero-section"
      className="relative w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        {webglSupported === true ? (
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
            <ambientLight intensity={0.2} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <spotLight position={[-10, -10, -5]} intensity={1} color="#00f0ff" />
            <pointLight position={[0, 5, 5]} intensity={5} color="#ff2d78" />
            <CoreShape />
            <Stars
              radius={100}
              depth={50}
              count={5000}
              factor={4}
              saturation={0}
              fade
              speed={1}
            />
            <Sparkles
              count={200}
              scale={10}
              size={4}
              speed={0.4}
              opacity={0.5}
              color="#00f0ff"
            />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Environment preset="city" />
          </Canvas>
        ) : (
          <FallbackGlow />
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="z-10 text-center mt-64 pointer-events-none"
        data-testid="hero-title"
      >
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4 text-glow-cyan uppercase">
          SYNTHID <span className="text-accent text-glow-pink">REMOVER</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-2xl max-w-2xl mx-auto uppercase tracking-widest border-b border-primary/30 pb-4 inline-block">
          Classified AI Watermark Stripping Protocol
        </p>
        <div className="mt-8 flex justify-center items-center gap-4">
          <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-sm tracking-widest">SYSTEM ONLINE</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground tracking-widest">
          SCROLL TO INITIATE HACK
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
