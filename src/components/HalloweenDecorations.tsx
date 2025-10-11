import { useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

interface PopupProps {
  show: boolean;
  message: string;
  onComplete: () => void;
}

const HalloweenPopup = ({ show, message, onComplete }: PopupProps) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onComplete, 800);
      return () => clearTimeout(timer);
    }
  }, [show, onComplete]);

  if (!show) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
      <div className="animate-[scale-in_0.2s_ease-out] text-orange-500 font-bold text-sm md:text-base drop-shadow-[0_0_10px_rgba(255,107,0,0.8)] whitespace-nowrap animate-pulse">
        {message}
      </div>
    </div>
  );
};

// 3D Pumpkin with glow
const Pumpkin3D = ({ 
  position, 
  onInteract 
}: { 
  position: [number, number, number];
  onInteract: () => void;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [exploding, setExploding] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      if (exploding) {
        meshRef.current.scale.multiplyScalar(1.2);
        meshRef.current.rotation.y += 0.4;
        if (meshRef.current.scale.x > 2) {
          meshRef.current.scale.set(0.01, 0.01, 0.01);
        }
      } else {
        meshRef.current.rotation.y += 0.005;
        const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
        meshRef.current.scale.set(scale, scale, scale);
      }
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1.2 + Math.sin(state.clock.elapsedTime * 3) * 0.1);
    }
  });

  const handleInteract = () => {
    setExploding(true);
    onInteract();
  };

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
          onPointerEnter={(e) => {
            e.stopPropagation();
            setHovered(true);
            handleInteract();
          }}
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
const Ghost3D = ({ 
  position,
  onInteract 
}: { 
  position: [number, number, number];
  onInteract: () => void;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [scared, setScared] = useState(false);
  const [exploding, setExploding] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      if (exploding) {
        meshRef.current.scale.multiplyScalar(1.18);
        meshRef.current.rotation.z += 0.3;
        if (meshRef.current.scale.x > 2) {
          meshRef.current.scale.set(0.01, 0.01, 0.01);
        }
      } else {
        meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 2) * 0.002;
        meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3;
      }
    }
  });

  const handleInteract = () => {
    setExploding(true);
    onInteract();
  };

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={3}>
      <group position={position}>
        <mesh
          ref={meshRef}
          onPointerEnter={(e) => {
            e.stopPropagation();
            setScared(true);
            handleInteract();
          }}
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
const Bat3D = ({ 
  position,
  onInteract 
}: { 
  position: [number, number, number];
  onInteract: () => void;
}) => {
  const leftWingRef = useRef<THREE.Mesh>(null);
  const rightWingRef = useRef<THREE.Mesh>(null);
  const bodyRef = useRef<THREE.Group>(null);
  const [exploding, setExploding] = useState(false);

  useFrame((state) => {
    const flapSpeed = exploding ? 20 : 8;
    const flapAngle = Math.sin(state.clock.elapsedTime * flapSpeed) * 0.5;
    
    if (leftWingRef.current) {
      leftWingRef.current.rotation.z = flapAngle;
    }
    if (rightWingRef.current) {
      rightWingRef.current.rotation.z = -flapAngle;
    }
    if (bodyRef.current) {
      if (exploding) {
        bodyRef.current.scale.multiplyScalar(1.15);
        bodyRef.current.rotation.y += 0.5;
        if (bodyRef.current.scale.x > 2) {
          bodyRef.current.scale.set(0.01, 0.01, 0.01);
        }
      } else {
        bodyRef.current.position.x += Math.sin(state.clock.elapsedTime * 0.5) * 0.01;
        bodyRef.current.position.y += Math.cos(state.clock.elapsedTime * 0.7) * 0.008;
      }
    }
  });

  const handleInteract = () => {
    setExploding(true);
    onInteract();
  };

  return (
    <group 
      position={position} 
      ref={bodyRef} 
      onPointerEnter={(e) => {
        e.stopPropagation();
        handleInteract();
      }}
    >
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
const Spider3D = ({ 
  position,
  onInteract 
}: { 
  position: [number, number, number];
  onInteract: () => void;
}) => {
  const spiderRef = useRef<THREE.Group>(null);
  const [exploding, setExploding] = useState(false);

  useFrame((state) => {
    if (spiderRef.current) {
      if (exploding) {
        spiderRef.current.scale.multiplyScalar(1.12);
        spiderRef.current.rotation.y += 0.6;
        if (spiderRef.current.scale.x > 2) {
          spiderRef.current.scale.set(0.01, 0.01, 0.01);
        }
      } else {
        spiderRef.current.position.y += Math.sin(state.clock.elapsedTime * 1.5) * 0.003;
        spiderRef.current.rotation.y += 0.01;
      }
    }
  });

  const handleInteract = () => {
    setExploding(true);
    onInteract();
  };

  return (
    <group position={position} ref={spiderRef} onClick={handleInteract}>
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
const Skull3D = ({ 
  position,
  onInteract 
}: { 
  position: [number, number, number];
  onInteract: () => void;
}) => {
  const skullRef = useRef<THREE.Mesh>(null);
  const [glowing, setGlowing] = useState(false);
  const [exploding, setExploding] = useState(false);

  useFrame((state) => {
    if (skullRef.current) {
      if (exploding) {
        skullRef.current.scale.multiplyScalar(1.16);
        skullRef.current.rotation.x += 0.35;
        if (skullRef.current.scale.x > 2) {
          skullRef.current.scale.set(0.01, 0.01, 0.01);
        }
      } else {
        skullRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      }
    }
  });

  const handleInteract = () => {
    setExploding(true);
    onInteract();
  };

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={1.5}>
      <group position={position}>
        <mesh
          ref={skullRef}
          onPointerEnter={(e) => {
            e.stopPropagation();
            setGlowing(true);
            handleInteract();
          }}
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

interface DecorationPosition {
  id: string;
  x: number;
  y: number;
  type: 'pumpkin' | 'ghost' | 'bat' | 'spider' | 'skull';
  element: Element;
}

export const HalloweenDecorations = () => {
  const [isOctober, setIsOctober] = useState(false);
  const [decorations, setDecorations] = useState<DecorationPosition[]>([]);
  const [activePopups, setActivePopups] = useState<Map<string, string>>(new Map());

  const halloweenMessages = [
    "🎃 Happy Halloween!",
    "👻 Boo!",
    "🍬 Trick or Treat!",
    "🦇 Spooky!",
    "💀 Eek!",
    "🕷️ Creepy!",
    "🕸️ Scary!",
    "🧙 Bewitched!",
    "⚰️ RIP!",
    "🌙 Spooktacular!",
  ];

  useEffect(() => {
    const currentMonth = new Date().getMonth();
    setIsOctober(currentMonth === 9);
  }, []);

  useEffect(() => {
    if (!isOctober) return;

    const updateDecorations = () => {
      const positions: DecorationPosition[] = [];

      // Find all cards
      const cards = document.querySelectorAll('[class*="card"], [class*="Card"], .bg-card, .rounded-lg.border');
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.width > 100 && rect.height > 100) { // Only decorate larger cards
          // Top left corner of card
          if (index % 4 === 0) {
            positions.push({
              id: `card-tl-${index}`,
              x: rect.left - 40,
              y: rect.top - 40,
              type: 'pumpkin',
              element: card
            });
          }
          // Top right corner
          if (index % 4 === 1) {
            positions.push({
              id: `card-tr-${index}`,
              x: rect.right - 40,
              y: rect.top - 40,
              type: 'ghost',
              element: card
            });
          }
          // Bottom right
          if (index % 4 === 2) {
            positions.push({
              id: `card-br-${index}`,
              x: rect.right - 40,
              y: rect.bottom - 40,
              type: 'skull',
              element: card
            });
          }
        }
      });

      // Find all buttons
      const buttons = document.querySelectorAll('button:not(.pointer-events-none)');
      buttons.forEach((button, index) => {
        const rect = button.getBoundingClientRect();
        if (rect.width > 80) { // Only larger buttons
          if (index % 3 === 0) {
            positions.push({
              id: `button-${index}`,
              x: rect.left - 35,
              y: rect.top + rect.height / 2 - 25,
              type: 'bat',
              element: button
            });
          }
        }
      });

      // Find sections
      const sections = document.querySelectorAll('section, [class*="section"]');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.height > 300) { // Only large sections
          // Top corners
          if (index % 3 === 0) {
            positions.push({
              id: `section-tl-${index}`,
              x: rect.left + 20,
              y: rect.top + 20,
              type: 'spider',
              element: section
            });
          }
          if (index % 3 === 1) {
            positions.push({
              id: `section-tr-${index}`,
              x: rect.right - 80,
              y: rect.top + 20,
              type: 'spider',
              element: section
            });
          }
        }
      });

      setDecorations(positions.slice(0, 15)); // Limit to 15 decorations
    };

    updateDecorations();
    window.addEventListener('resize', updateDecorations);
    window.addEventListener('scroll', updateDecorations);

    // Update on route changes
    const observer = new MutationObserver(updateDecorations);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('resize', updateDecorations);
      window.removeEventListener('scroll', updateDecorations);
      observer.disconnect();
    };
  }, [isOctober]);

  if (!isOctober) return null;

  const renderDecoration = (type: string, onInteract: () => void) => {
    switch (type) {
      case 'pumpkin':
        return <Pumpkin3D position={[0, 0, 0]} onInteract={onInteract} />;
      case 'ghost':
        return <Ghost3D position={[0, 0, 0]} onInteract={onInteract} />;
      case 'bat':
        return <Bat3D position={[0, 0, 0]} onInteract={onInteract} />;
      case 'spider':
        return <Spider3D position={[0, 0, 0]} onInteract={onInteract} />;
      case 'skull':
        return <Skull3D position={[0, 0, 0]} onInteract={onInteract} />;
      default:
        return null;
    }
  };

  const handleInteraction = (id: string) => {
    const randomMessage = halloweenMessages[Math.floor(Math.random() * halloweenMessages.length)];
    setActivePopups(prev => new Map(prev).set(id, randomMessage));
    
    setTimeout(() => {
      setDecorations(prev => prev.filter(d => d.id !== id));
      setActivePopups(prev => {
        const newMap = new Map(prev);
        newMap.delete(id);
        return newMap;
      });
    }, 800);
  };

  return (
    <>
      {decorations.map((decoration) => (
        <div
          key={decoration.id}
          className="pointer-events-auto fixed w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 z-50 transition-all duration-300 cursor-pointer"
          style={{
            left: `${decoration.x}px`,
            top: `${decoration.y}px`,
          }}
        >
          <HalloweenPopup 
            show={activePopups.has(decoration.id)} 
            message={activePopups.get(decoration.id) || ""}
            onComplete={() => {}}
          />
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
            <pointLight position={[-5, -5, 5]} intensity={0.5} color="#ff6600" />
            {renderDecoration(decoration.type, () => handleInteraction(decoration.id))}
          </Canvas>
        </div>
      ))}
    </>
  );
};
