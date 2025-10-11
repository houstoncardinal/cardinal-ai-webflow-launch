import { useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sparkles, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// 3D Pumpkin with glow
const Pumpkin3D = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      meshRef.current.scale.set(scale, scale, scale);
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1.2 + Math.sin(state.clock.elapsedTime * 3) * 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <group position={position}>
        {/* Glow effect */}
        <mesh ref={glowRef}>
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshBasicMaterial color="#ff6b00" transparent opacity={0.3} />
        </mesh>
        
        {/* Main pumpkin body */}
        <mesh
          ref={meshRef}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
        >
          <sphereGeometry args={[0.5, 32, 32]} />
          <MeshDistortMaterial
            color={hovered ? "#ff8c42" : "#ff6b35"}
            speed={2}
            distort={0.3}
            radius={1}
            metalness={0.4}
            roughness={0.2}
            emissive="#ff4500"
            emissiveIntensity={hovered ? 0.5 : 0.2}
          />
        </mesh>

        {/* Pumpkin stem */}
        <mesh position={[0, 0.6, 0]}>
          <cylinderGeometry args={[0.08, 0.12, 0.3, 8]} />
          <meshStandardMaterial color="#2d5016" roughness={0.8} />
        </mesh>

        {/* Evil eyes - glowing */}
        <mesh position={[-0.2, 0.1, 0.45]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color="#ffff00" />
        </mesh>
        <mesh position={[0.2, 0.1, 0.45]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color="#ffff00" />
        </mesh>

        {/* Evil grin */}
        <mesh position={[0, -0.15, 0.48]} rotation={[0, 0, Math.PI]}>
          <torusGeometry args={[0.2, 0.04, 8, 16, Math.PI]} />
          <meshBasicMaterial color="#000000" />
        </mesh>

        {/* Inner light glow */}
        <pointLight position={[0, 0, 0]} intensity={hovered ? 3 : 1.5} color="#ff6b00" distance={2} />
      </group>
    </Float>
  );
};

// 3D Ghost with transparency and floating
const Ghost3D = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [scared, setScared] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 2) * 0.002;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={3}>
      <group position={position}>
        <mesh
          ref={meshRef}
          onPointerEnter={() => setScared(true)}
          onPointerLeave={() => setScared(false)}
        >
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshPhysicalMaterial
            color={scared ? "#e0e0ff" : "#ffffff"}
            transparent
            opacity={0.7}
            transmission={0.5}
            thickness={0.5}
            roughness={0.1}
            metalness={0.1}
            emissive="#ffffff"
            emissiveIntensity={scared ? 0.3 : 0.1}
          />
        </mesh>

        {/* Ghost tail */}
        <mesh position={[0, -0.5, 0]}>
          <coneGeometry args={[0.3, 0.6, 8]} />
          <meshPhysicalMaterial
            color="#ffffff"
            transparent
            opacity={0.6}
            transmission={0.5}
            roughness={0.1}
          />
        </mesh>

        {/* Spooky eyes */}
        <mesh position={[-0.15, 0.1, 0.35]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="#000000" />
        </mesh>
        <mesh position={[0.15, 0.1, 0.35]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="#000000" />
        </mesh>

        {/* Ambient glow */}
        <pointLight position={[0, 0, 0]} intensity={0.5} color="#a0a0ff" distance={1.5} />
      </group>
    </Float>
  );
};

// 3D Bat with flapping wings
const Bat3D = ({ position }: { position: [number, number, number] }) => {
  const leftWingRef = useRef<THREE.Mesh>(null);
  const rightWingRef = useRef<THREE.Mesh>(null);
  const bodyRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const flapSpeed = 8;
    const flapAngle = Math.sin(state.clock.elapsedTime * flapSpeed) * 0.5;
    
    if (leftWingRef.current) {
      leftWingRef.current.rotation.z = flapAngle;
    }
    if (rightWingRef.current) {
      rightWingRef.current.rotation.z = -flapAngle;
    }
    if (bodyRef.current) {
      bodyRef.current.position.x += Math.sin(state.clock.elapsedTime * 0.5) * 0.01;
      bodyRef.current.position.y += Math.cos(state.clock.elapsedTime * 0.7) * 0.008;
    }
  });

  return (
    <group position={position} ref={bodyRef}>
      {/* Bat body */}
      <mesh>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
      </mesh>

      {/* Left wing */}
      <mesh ref={leftWingRef} position={[-0.2, 0, 0]}>
        <coneGeometry args={[0.3, 0.4, 3]} />
        <meshStandardMaterial color="#0a0a0a" side={THREE.DoubleSide} />
      </mesh>

      {/* Right wing */}
      <mesh ref={rightWingRef} position={[0.2, 0, 0]}>
        <coneGeometry args={[0.3, 0.4, 3]} />
        <meshStandardMaterial color="#0a0a0a" side={THREE.DoubleSide} />
      </mesh>

      {/* Red glowing eyes */}
      <mesh position={[-0.06, 0.05, 0.13]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshBasicMaterial color="#ff0000" />
      </mesh>
      <mesh position={[0.06, 0.05, 0.13]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshBasicMaterial color="#ff0000" />
      </mesh>

      <pointLight position={[0, 0, 0.2]} intensity={0.3} color="#ff0000" distance={0.5} />
    </group>
  );
};

// Spider with web
const Spider3D = ({ position }: { position: [number, number, number] }) => {
  const spiderRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (spiderRef.current) {
      spiderRef.current.position.y += Math.sin(state.clock.elapsedTime * 1.5) * 0.003;
      spiderRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group position={position} ref={spiderRef}>
      {/* Spider body */}
      <mesh>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#000000" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Spider head */}
      <mesh position={[0, 0, 0.12]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#000000" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Legs */}
      {[0, 1, 2, 3].map((i) => (
        <group key={i} rotation={[0, (Math.PI / 2) * i, 0]}>
          <mesh position={[0.15, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
            <cylinderGeometry args={[0.01, 0.01, 0.2, 8]} />
            <meshStandardMaterial color="#1a1a1a" />
          </mesh>
          <mesh position={[-0.15, 0, 0]} rotation={[0, 0, -Math.PI / 4]}>
            <cylinderGeometry args={[0.01, 0.01, 0.2, 8]} />
            <meshStandardMaterial color="#1a1a1a" />
          </mesh>
        </group>
      ))}

      {/* Web thread */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.005, 0.005, 1, 8]} />
        <meshStandardMaterial color="#cccccc" transparent opacity={0.6} />
      </mesh>

      <pointLight position={[0, 0, 0.2]} intensity={0.2} color="#ffffff" distance={0.5} />
    </group>
  );
};

// Skull with dramatic lighting
const Skull3D = ({ position }: { position: [number, number, number] }) => {
  const skullRef = useRef<THREE.Mesh>(null);
  const [glowing, setGlowing] = useState(false);

  useFrame((state) => {
    if (skullRef.current) {
      skullRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={1.5}>
      <group position={position}>
        <mesh
          ref={skullRef}
          onPointerEnter={() => setGlowing(true)}
          onPointerLeave={() => setGlowing(false)}
        >
          <boxGeometry args={[0.4, 0.5, 0.4]} />
          <meshStandardMaterial
            color={glowing ? "#ffffff" : "#e0e0e0"}
            metalness={0.2}
            roughness={0.8}
            emissive={glowing ? "#00ff00" : "#000000"}
            emissiveIntensity={glowing ? 0.5 : 0}
          />
        </mesh>

        {/* Eye sockets - glowing green */}
        <mesh position={[-0.12, 0.08, 0.21]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial color="#00ff00" />
        </mesh>
        <mesh position={[0.12, 0.08, 0.21]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial color="#00ff00" />
        </mesh>

        {/* Nose hole */}
        <mesh position={[0, 0, 0.22]}>
          <coneGeometry args={[0.04, 0.08, 3]} />
          <meshBasicMaterial color="#000000" />
        </mesh>

        {/* Dramatic lighting */}
        <pointLight position={[0, 0, 0.3]} intensity={glowing ? 2 : 0.8} color="#00ff00" distance={1.5} />
        <Sparkles count={glowing ? 20 : 5} scale={0.8} size={2} speed={0.5} color="#00ff00" />
      </group>
    </Float>
  );
};

export const HalloweenDecorations = () => {
  const [isOctober, setIsOctober] = useState(false);

  useEffect(() => {
    const currentMonth = new Date().getMonth();
    setIsOctober(currentMonth === 9); // October is month 9 (0-indexed)
  }, []);

  if (!isOctober) return null;

  return (
    <>
      {/* Top left corner - Desktop/Tablet only */}
      <div className="pointer-events-none fixed top-2 left-2 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 z-40 hidden sm:block">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
          <Pumpkin3D position={[0, 0, 0]} />
        </Canvas>
      </div>

      {/* Top right corner - Desktop/Tablet only */}
      <div className="pointer-events-none fixed top-2 right-2 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 z-40 hidden sm:block">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Ghost3D position={[0, 0, 0]} />
        </Canvas>
      </div>

      {/* Bottom left corner - All devices */}
      <div className="pointer-events-none fixed bottom-2 left-2 w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 z-40">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Skull3D position={[0, 0, 0]} />
        </Canvas>
      </div>

      {/* Bottom right corner - All devices */}
      <div className="pointer-events-none fixed bottom-2 right-2 w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 z-40">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Pumpkin3D position={[0, 0, 0]} />
        </Canvas>
      </div>

      {/* Subtle flying bats - Desktop only, higher up to avoid content */}
      <div className="pointer-events-none fixed top-20 left-1/2 -translate-x-1/2 w-72 h-20 z-30 opacity-40 hidden lg:block">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={0.3} />
          <Bat3D position={[-2, 0, 0]} />
          <Bat3D position={[2, 0, 0]} />
        </Canvas>
      </div>

      {/* Floating spider - Desktop only, positioned safely */}
      <div className="pointer-events-none fixed top-1/4 left-8 w-20 h-20 lg:w-24 lg:h-24 z-30 hidden lg:block">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <Spider3D position={[0, 0, 0]} />
        </Canvas>
      </div>

      {/* Another spider - Desktop only, right side */}
      <div className="pointer-events-none fixed top-1/3 right-8 w-20 h-20 lg:w-24 lg:h-24 z-30 hidden lg:block">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <Spider3D position={[0, 0, 0]} />
        </Canvas>
      </div>

      {/* Subtle corner bat - Tablet/Desktop */}
      <div className="pointer-events-none fixed bottom-1/4 left-4 w-16 h-16 md:w-20 md:h-20 z-30 opacity-60 hidden md:block">
        <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={0.3} />
          <Bat3D position={[0, 0, 0]} />
        </Canvas>
      </div>

      {/* Additional ghost - Desktop only, far right */}
      <div className="pointer-events-none fixed top-1/2 right-4 w-28 h-28 lg:w-32 lg:h-32 z-30 opacity-70 hidden xl:block">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <Ghost3D position={[0, 0, 0]} />
        </Canvas>
      </div>
    </>
  );
};
