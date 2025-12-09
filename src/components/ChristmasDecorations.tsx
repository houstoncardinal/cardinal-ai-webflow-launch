import { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
  blur: number;
  character: string;
}

interface Light {
  id: number;
  x: number;
  color: string;
  delay: number;
  size: number;
}

interface FlyingCharacter {
  id: number;
  startDelay: number;
  duration: number;
  yPosition: number;
  scale: number;
  direction: 'left' | 'right';
  path: 'straight' | 'wave' | 'dive' | 'loop';
}

interface Elf {
  id: number;
  x: number;
  y: number;
  scale: number;
  delay: number;
  activity: 'waving' | 'jumping' | 'carrying';
}

const ChristmasDecorations = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
  const [headerLights, setHeaderLights] = useState<Light[]>([]);
  const [santaFlights, setSantaFlights] = useState<FlyingCharacter[]>([]);
  const [elves, setElves] = useState<Elf[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  
  const currentMonth = new Date().getMonth();
  const isDecember = currentMonth === 11;

  // Detect mobile for reduced animations
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const lightColors = [
    'hsl(0, 100%, 50%)',      // Bright red
    'hsl(120, 100%, 40%)',    // Green
    'hsl(45, 100%, 50%)',     // Gold/Yellow
    'hsl(210, 100%, 60%)',    // Blue
    'hsl(300, 100%, 60%)',    // Magenta
    'hsl(30, 100%, 55%)',     // Orange
  ];

  useEffect(() => {
    if (!isDecember) return;
    
    // Generate realistic snowflakes with depth - fewer on mobile
    const flakes: Snowflake[] = [];
    const snowChars = ['❄', '❅', '❆', '✻', '✼', '❊'];
    const flakeCount = window.innerWidth < 768 ? 25 : 100;
    for (let i = 0; i < flakeCount; i++) {
      const depth = Math.random();
      flakes.push({
        id: i,
        left: Math.random() * 100,
        size: depth * 20 + 8,
        delay: Math.random() * 20,
        duration: (1 - depth) * 10 + 12,
        opacity: depth * 0.6 + 0.3,
        blur: (1 - depth) * 2.5,
        character: snowChars[Math.floor(Math.random() * snowChars.length)]
      });
    }
    setSnowflakes(flakes);

    // Generate header lights
    const lights: Light[] = [];
    const lightCount = Math.floor(window.innerWidth / 45);
    for (let i = 0; i < lightCount; i++) {
      lights.push({
        id: i,
        x: (i / lightCount) * 100,
        color: lightColors[i % lightColors.length],
        delay: Math.random() * 2,
        size: Math.random() * 5 + 10
      });
    }
    setHeaderLights(lights);

    // Generate Santa flights with varied paths
    const santas: FlyingCharacter[] = [
      { id: 1, startDelay: 0, duration: 20, yPosition: 12, scale: 1.1, direction: 'right', path: 'wave' },
      { id: 2, startDelay: 30, duration: 25, yPosition: 35, scale: 0.85, direction: 'left', path: 'dive' },
      { id: 3, startDelay: 60, duration: 22, yPosition: 55, scale: 0.95, direction: 'right', path: 'loop' },
    ];
    setSantaFlights(santas);

    // Generate elves throughout the page
    const elfList: Elf[] = [
      { id: 1, x: 5, y: 20, scale: 0.8, delay: 0, activity: 'waving' },
      { id: 2, x: 92, y: 35, scale: 0.7, delay: 0.5, activity: 'jumping' },
      { id: 3, x: 8, y: 60, scale: 0.75, delay: 1, activity: 'carrying' },
      { id: 4, x: 90, y: 75, scale: 0.85, delay: 1.5, activity: 'waving' },
    ];
    setElves(elfList);
  }, [isDecember]);

  if (!isDecember) return null;

  return (
    <>
      {/* Ultra-Realistic Snowfall with Depth */}
      <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden select-none" style={{ touchAction: 'none' }}>
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="absolute snowflake-3d"
            style={{
              left: `${flake.left}%`,
              top: '-30px',
              fontSize: `${flake.size}px`,
              opacity: flake.opacity,
              filter: `blur(${flake.blur}px)`,
              color: 'white',
              textShadow: '0 0 15px rgba(255,255,255,0.9), 0 0 30px rgba(200,220,255,0.6), 0 0 45px rgba(180,200,255,0.3)',
              animation: `snowfall-realistic ${flake.duration}s linear infinite`,
              animationDelay: `${flake.delay}s`,
            }}
          >
            {flake.character}
          </div>
        ))}
      </div>

      {/* Flying Santa with Sleigh and Reindeer - Dynamic paths throughout page */}
      {!isMobile && santaFlights.map((santa) => (
        <div
          key={`santa-${santa.id}`}
          className="fixed pointer-events-none z-[5] select-none"
          style={{
            touchAction: 'none',
            top: `${santa.yPosition}%`,
            left: santa.direction === 'right' ? '-300px' : 'auto',
            right: santa.direction === 'left' ? '-300px' : 'auto',
            animation: `santa-fly-${santa.path}-${santa.direction} ${santa.duration}s ease-in-out infinite`,
            animationDelay: `${santa.startDelay}s`,
            transform: `scale(${santa.scale}) ${santa.direction === 'left' ? 'scaleX(-1)' : ''}`,
          }}
        >
          <svg width="280" height="140" viewBox="0 0 280 140" className="santa-sleigh-hd">
            <defs>
              {/* Santa's coat gradient */}
              <linearGradient id={`santa-coat-${santa.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff2020" />
                <stop offset="50%" stopColor="#cc0000" />
                <stop offset="100%" stopColor="#8b0000" />
              </linearGradient>
              {/* Sleigh gradient */}
              <linearGradient id={`sleigh-gradient-${santa.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8B4513" />
                <stop offset="50%" stopColor="#5c3317" />
                <stop offset="100%" stopColor="#3d2212" />
              </linearGradient>
              {/* Gold trim */}
              <linearGradient id={`gold-trim-${santa.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffd700" />
                <stop offset="50%" stopColor="#ffb700" />
                <stop offset="100%" stopColor="#cc9900" />
              </linearGradient>
              {/* Glow filters */}
              <filter id={`santa-glow-${santa.id}`} x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feFlood floodColor="#ff4444" floodOpacity="0.5" />
                <feComposite in2="blur" operator="in" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              {/* Reindeer fur gradient */}
              <linearGradient id={`reindeer-fur-${santa.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B7355" />
                <stop offset="50%" stopColor="#6B5344" />
                <stop offset="100%" stopColor="#4a3728" />
              </linearGradient>
            </defs>
            
            {/* Magic sparkles trail */}
            {Array.from({ length: 12 }).map((_, i) => (
              <circle
                key={i}
                cx={-10 - i * 18}
                cy={70 + Math.sin(i * 0.8) * 15}
                r={4 - i * 0.3}
                fill="#ffd700"
                opacity={1 - i * 0.08}
                className="animate-twinkle"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <animate
                  attributeName="r"
                  values={`${4 - i * 0.3};${6 - i * 0.3};${4 - i * 0.3}`}
                  dur="0.8s"
                  repeatCount="indefinite"
                />
              </circle>
            ))}
            
            {/* Reins */}
            <path
              d="M145 65 Q120 55 100 60 Q80 62 60 58"
              fill="none"
              stroke="#3d2212"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M145 70 Q120 62 100 68 Q80 70 60 65"
              fill="none"
              stroke="#3d2212"
              strokeWidth="2"
              strokeLinecap="round"
            />
            
            {/* Lead Reindeer */}
            <g className="animate-reindeer-run" style={{ transformOrigin: '45px 55px' }}>
              {/* Body */}
              <ellipse cx="45" cy="58" rx="22" ry="14" fill={`url(#reindeer-fur-${santa.id})`} />
              {/* Head */}
              <ellipse cx="22" cy="48" rx="12" ry="10" fill={`url(#reindeer-fur-${santa.id})`} />
              {/* Antlers */}
              <path d="M20 40 Q15 30 10 25 M12 28 Q8 25 5 28" fill="none" stroke="#5c3317" strokeWidth="3" strokeLinecap="round" />
              <path d="M24 40 Q29 30 34 25 M32 28 Q36 25 39 28" fill="none" stroke="#5c3317" strokeWidth="3" strokeLinecap="round" />
              {/* Red nose (Rudolph!) */}
              <circle cx="12" cy="50" r="5" fill="#ff0000" filter={`url(#santa-glow-${santa.id})`}>
                <animate attributeName="opacity" values="1;0.6;1" dur="0.5s" repeatCount="indefinite" />
              </circle>
              {/* Eye */}
              <circle cx="18" cy="45" r="2" fill="#1a1a1a" />
              {/* Legs running animation */}
              <line x1="35" y1="70" x2="38" y2="85" stroke="#4a3728" strokeWidth="4" strokeLinecap="round">
                <animate attributeName="x2" values="38;32;38" dur="0.3s" repeatCount="indefinite" />
              </line>
              <line x1="55" y1="70" x2="52" y2="85" stroke="#4a3728" strokeWidth="4" strokeLinecap="round">
                <animate attributeName="x2" values="52;58;52" dur="0.3s" repeatCount="indefinite" />
              </line>
            </g>
            
            {/* Second Reindeer */}
            <g className="animate-reindeer-run" style={{ transformOrigin: '85px 60px', animationDelay: '0.15s' }}>
              <ellipse cx="85" cy="62" rx="18" ry="12" fill={`url(#reindeer-fur-${santa.id})`} />
              <ellipse cx="68" cy="54" rx="10" ry="8" fill={`url(#reindeer-fur-${santa.id})`} />
              <path d="M66 47 Q62 38 58 35" fill="none" stroke="#5c3317" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M70 47 Q74 38 78 35" fill="none" stroke="#5c3317" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="60" cy="55" r="3" fill="#1a1a1a" />
              <line x1="78" y1="72" x2="80" y2="85" stroke="#4a3728" strokeWidth="3" strokeLinecap="round">
                <animate attributeName="x2" values="80;76;80" dur="0.3s" repeatCount="indefinite" />
              </line>
            </g>
            
            {/* Sleigh */}
            <path
              d="M130 55 Q140 45 170 45 L240 45 Q260 45 265 60 L270 85 Q275 95 260 100 L150 105 Q130 105 125 90 L120 70 Q118 55 130 55"
              fill={`url(#sleigh-gradient-${santa.id})`}
              stroke="#3d2212"
              strokeWidth="2"
            />
            {/* Sleigh runner */}
            <path
              d="M140 105 Q130 115 135 120 L265 120 Q275 115 270 105"
              fill="none"
              stroke={`url(#gold-trim-${santa.id})`}
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Sleigh decorative trim */}
            <path
              d="M145 50 L255 50"
              fill="none"
              stroke={`url(#gold-trim-${santa.id})`}
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* Gift sack */}
            <ellipse cx="245" cy="65" rx="18" ry="22" fill="#8B0000" />
            <path d="M230 55 Q245 45 260 55" fill="none" stroke="#cc0000" strokeWidth="3" strokeLinecap="round" />
            {/* Gift ribbons */}
            <path d="M240 60 L250 70" stroke="#ffd700" strokeWidth="2" />
            <path d="M250 60 L240 70" stroke="#ffd700" strokeWidth="2" />
            
            {/* Santa */}
            <g filter={`url(#santa-glow-${santa.id})`}>
              {/* Body/Coat */}
              <ellipse cx="190" cy="70" rx="22" ry="28" fill={`url(#santa-coat-${santa.id})`} />
              {/* White fur trim */}
              <ellipse cx="190" cy="95" rx="24" ry="6" fill="#fff" opacity="0.95" />
              {/* Belt */}
              <rect x="170" y="72" width="40" height="8" rx="2" fill="#1a1a1a" />
              <rect x="185" y="70" width="10" height="12" rx="1" fill={`url(#gold-trim-${santa.id})`} />
              
              {/* Head */}
              <circle cx="190" cy="38" r="16" fill="#ffccaa" />
              {/* Rosy cheeks */}
              <circle cx="180" cy="42" r="4" fill="#ff9999" opacity="0.6" />
              <circle cx="200" cy="42" r="4" fill="#ff9999" opacity="0.6" />
              {/* Eyes */}
              <circle cx="184" cy="35" r="2.5" fill="#1a1a1a" />
              <circle cx="196" cy="35" r="2.5" fill="#1a1a1a" />
              <circle cx="185" cy="34" r="1" fill="#fff" />
              <circle cx="197" cy="34" r="1" fill="#fff" />
              {/* Nose */}
              <circle cx="190" cy="42" r="4" fill="#ff8888" />
              {/* Beard */}
              <path
                d="M175 45 Q170 65 180 75 Q190 80 200 75 Q210 65 205 45"
                fill="#fff"
              />
              <path d="M178 50 Q175 55 178 60" fill="none" stroke="#eee" strokeWidth="2" />
              <path d="M202 50 Q205 55 202 60" fill="none" stroke="#eee" strokeWidth="2" />
              {/* Mustache */}
              <path d="M180 46 Q185 50 190 46 Q195 50 200 46" fill="#fff" />
              {/* Mouth (smiling) */}
              <path d="M185 52 Q190 55 195 52" fill="none" stroke="#cc6666" strokeWidth="1.5" strokeLinecap="round" />
              
              {/* Santa Hat */}
              <path
                d="M172 30 Q175 10 205 15 Q225 5 230 25"
                fill={`url(#santa-coat-${santa.id})`}
              />
              <ellipse cx="175" cy="32" rx="22" ry="6" fill="#fff" />
              <circle cx="232" cy="22" r="8" fill="#fff" />
              
              {/* Arm waving */}
              <ellipse cx="165" cy="60" rx="8" ry="14" fill={`url(#santa-coat-${santa.id})`}>
                <animate attributeName="transform" type="rotate" values="-10;20;-10" dur="0.8s" repeatCount="indefinite" />
              </ellipse>
              <circle cx="160" cy="48" r="6" fill="#ffccaa" />
            </g>
          </svg>
        </div>
      ))}

      {/* Cute Christmas Elves throughout the page - Hidden on mobile */}
      {!isMobile && elves.map((elf) => (
        <div
          key={`elf-${elf.id}`}
          className="fixed pointer-events-none z-[5] select-none"
          style={{
            touchAction: 'none',
            left: `${elf.x}%`,
            top: `${elf.y}%`,
            transform: `scale(${elf.scale})`,
            animation: elf.activity === 'jumping' ? 'elf-jump 1s ease-in-out infinite' : elf.activity === 'waving' ? 'elf-wave 1.5s ease-in-out infinite' : 'elf-carry 2s ease-in-out infinite',
            animationDelay: `${elf.delay}s`,
          }}
        >
          <svg width="80" height="100" viewBox="0 0 80 100" className="drop-shadow-lg">
            <defs>
              <linearGradient id={`elf-suit-${elf.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#16a34a" />
              </linearGradient>
              <linearGradient id={`elf-skin-${elf.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fcd5b8" />
                <stop offset="100%" stopColor="#e8b89d" />
              </linearGradient>
            </defs>
            
            {/* Pointy elf hat */}
            <path d="M40 2 L28 28 L52 28 Z" fill="#dc2626" />
            <circle cx="40" cy="2" r="5" fill="#ffd700" />
            <ellipse cx="40" cy="28" rx="14" ry="4" fill="#fff" />
            
            {/* Elf face */}
            <circle cx="40" cy="38" r="14" fill={`url(#elf-skin-${elf.id})`} />
            {/* Rosy cheeks */}
            <circle cx="32" cy="40" r="4" fill="#ffb3b3" opacity="0.6" />
            <circle cx="48" cy="40" r="4" fill="#ffb3b3" opacity="0.6" />
            {/* Eyes */}
            <circle cx="35" cy="36" r="3" fill="#1a1a1a" />
            <circle cx="45" cy="36" r="3" fill="#1a1a1a" />
            <circle cx="36" cy="35" r="1" fill="#fff" />
            <circle cx="46" cy="35" r="1" fill="#fff" />
            {/* Big smile */}
            <path d="M34 44 Q40 50 46 44" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
            {/* Pointy ears */}
            <path d="M25 36 Q18 32 22 26" fill={`url(#elf-skin-${elf.id})`} stroke="#d4a88a" strokeWidth="1" />
            <path d="M55 36 Q62 32 58 26" fill={`url(#elf-skin-${elf.id})`} stroke="#d4a88a" strokeWidth="1" />
            
            {/* Elf body/suit */}
            <ellipse cx="40" cy="62" rx="16" ry="14" fill={`url(#elf-suit-${elf.id})`} />
            {/* Belt */}
            <rect x="24" y="60" width="32" height="6" fill="#1a1a1a" />
            <rect x="37" y="58" width="6" height="10" rx="1" fill="#ffd700" />
            {/* Collar */}
            <path d="M28 52 Q32 58 40 55 Q48 58 52 52" fill="#dc2626" />
            
            {/* Arms */}
            <ellipse cx="22" cy="60" rx="6" ry="8" fill={`url(#elf-suit-${elf.id})`} 
              className={elf.activity === 'waving' ? 'animate-elf-arm-wave' : ''} 
              style={{ transformOrigin: '26px 60px' }} />
            <circle cx="18" cy="56" r="5" fill={`url(#elf-skin-${elf.id})`} />
            <ellipse cx="58" cy="60" rx="6" ry="8" fill={`url(#elf-suit-${elf.id})`} />
            <circle cx="62" cy="56" r="5" fill={`url(#elf-skin-${elf.id})`} />
            
            {/* Legs */}
            <rect x="30" y="72" width="8" height="16" rx="2" fill={`url(#elf-suit-${elf.id})`} />
            <rect x="42" y="72" width="8" height="16" rx="2" fill={`url(#elf-suit-${elf.id})`} />
            
            {/* Curly elf shoes */}
            <path d="M26 88 Q22 88 20 92 Q18 98 28 96 L38 88" fill="#dc2626" />
            <path d="M42 88 L52 96 Q62 98 60 92 Q58 88 54 88" fill="#dc2626" />
            <circle cx="20" cy="94" r="3" fill="#ffd700" />
            <circle cx="60" cy="94" r="3" fill="#ffd700" />
            
            {/* Gift (for carrying elf) */}
            {elf.activity === 'carrying' && (
              <g transform="translate(60, 40)">
                <rect x="0" y="0" width="18" height="18" rx="2" fill="#dc2626" />
                <path d="M0 9 L18 9 M9 0 L9 18" stroke="#ffd700" strokeWidth="3" />
                <path d="M4 0 Q9 -6 14 0" fill="#ffd700" />
              </g>
            )}
          </svg>
        </div>
      ))}

      {/* String Lights Along Top - Ultra HD - Hidden on mobile */}
      <div className="fixed top-0 left-0 right-0 pointer-events-none z-[5] overflow-visible hidden md:block">
        <svg className="w-full" height="90" viewBox="0 0 2000 90" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
          <defs>
            {lightColors.map((color, i) => (
              <radialGradient key={`bulb-grad-${i}`} id={`bulb-gradient-${i}`} cx="30%" cy="30%">
                <stop offset="0%" stopColor="white" stopOpacity="0.95" />
                <stop offset="30%" stopColor={color} stopOpacity="1" />
                <stop offset="100%" stopColor={color.replace('100%', '70%').replace('50%', '30%')} stopOpacity="1" />
              </radialGradient>
            ))}
            
            {lightColors.map((color, i) => (
              <filter key={`glow-${i}`} id={`glow-filter-${i}`} x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feFlood floodColor={color} floodOpacity="0.9" />
                <feComposite in2="blur" operator="in" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            ))}
          </defs>

          <path 
            d="M-50 18 Q250 50 500 22 Q750 -8 1000 35 Q1250 60 1500 18 Q1750 -12 2050 28" 
            fill="none" 
            stroke="hsl(0, 0%, 12%)" 
            strokeWidth="4"
            strokeLinecap="round"
          />
          
          <path 
            d="M-50 18 Q250 50 500 22 Q750 -8 1000 35 Q1250 60 1500 18 Q1750 -12 2050 28" 
            fill="none" 
            stroke="hsl(0, 0%, 22%)" 
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="6,4"
          />

          {headerLights.map((light, i) => {
            const wireY = 18 + Math.sin((light.x / 100) * Math.PI * 4) * 22;
            const colorIndex = i % lightColors.length;
            
            return (
              <g key={light.id} className="christmas-light-bulb" style={{ animationDelay: `${light.delay}s` }}>
                <rect 
                  x={light.x * 20 - 5} 
                  y={wireY - 3} 
                  width="10" 
                  height="10" 
                  rx="1.5"
                  fill="hsl(45, 30%, 22%)"
                />
                
                <ellipse 
                  cx={light.x * 20} 
                  cy={wireY + 22} 
                  rx={light.size / 2 + 3}
                  ry={light.size / 2 + 5}
                  fill={`url(#bulb-gradient-${colorIndex})`}
                  filter={`url(#glow-filter-${colorIndex})`}
                  className="animate-light-flicker"
                  style={{ animationDelay: `${light.delay}s` }}
                />
                
                <ellipse 
                  cx={light.x * 20} 
                  cy={wireY + 20} 
                  rx={light.size / 4}
                  ry={light.size / 3}
                  fill="white"
                  opacity="0.7"
                  className="animate-light-flicker"
                  style={{ animationDelay: `${light.delay}s` }}
                />
                
                <ellipse 
                  cx={light.x * 20} 
                  cy={wireY + 55} 
                  rx={light.size * 2.5}
                  ry={light.size * 1.2}
                  fill={light.color}
                  opacity="0.2"
                  className="animate-light-flicker"
                  style={{ animationDelay: `${light.delay}s` }}
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Corner Holly - Enhanced - Hidden on mobile */}
      <div className="fixed top-0 left-0 pointer-events-none z-[5] hidden md:block">
        <svg width="200" height="200" viewBox="0 0 200 200" className="drop-shadow-2xl">
          <defs>
            <linearGradient id="holly-leaf" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(140, 75%, 38%)" />
              <stop offset="50%" stopColor="hsl(140, 65%, 28%)" />
              <stop offset="100%" stopColor="hsl(140, 55%, 18%)" />
            </linearGradient>
            <radialGradient id="berry-shine" cx="30%" cy="30%">
              <stop offset="0%" stopColor="hsl(0, 95%, 68%)" />
              <stop offset="50%" stopColor="hsl(0, 88%, 52%)" />
              <stop offset="100%" stopColor="hsl(0, 82%, 35%)" />
            </radialGradient>
            <filter id="leaf-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="3" dy="4" stdDeviation="4" floodColor="rgba(0,0,0,0.5)" />
            </filter>
          </defs>
          
          <path d="M10 50 Q20 30 40 40 Q35 50 45 55 Q40 60 50 70 Q45 75 55 85 Q35 80 30 60 Q15 70 10 50" 
                fill="url(#holly-leaf)" filter="url(#leaf-shadow)" className="animate-leaf-sway" />
          <path d="M40 30 Q50 10 70 25 Q65 35 75 45 Q70 50 80 60 Q75 65 85 75 Q65 70 60 50 Q45 60 40 30" 
                fill="url(#holly-leaf)" filter="url(#leaf-shadow)" className="animate-leaf-sway" style={{ animationDelay: '0.5s' }} />
          <path d="M70 20 Q85 5 105 20 Q100 30 110 40 Q105 48 115 58 Q95 55 90 40 Q78 48 70 20" 
                fill="url(#holly-leaf)" filter="url(#leaf-shadow)" className="animate-leaf-sway" style={{ animationDelay: '1s' }} />
          
          <circle cx="52" cy="78" r="14" fill="url(#berry-shine)" className="animate-berry-glow" />
          <circle cx="48" cy="72" r="5" fill="white" opacity="0.55" />
          <circle cx="72" cy="88" r="12" fill="url(#berry-shine)" className="animate-berry-glow" style={{ animationDelay: '0.3s' }} />
          <circle cx="68" cy="82" r="4" fill="white" opacity="0.55" />
          <circle cx="58" cy="98" r="13" fill="url(#berry-shine)" className="animate-berry-glow" style={{ animationDelay: '0.6s' }} />
          <circle cx="54" cy="92" r="4" fill="white" opacity="0.55" />
        </svg>
      </div>

      {/* Corner Holly - Right - Hidden on mobile */}
      <div className="fixed top-0 right-0 pointer-events-none z-[5] transform scale-x-[-1] hidden md:block">
        <svg width="200" height="200" viewBox="0 0 200 200" className="drop-shadow-2xl">
          <path d="M10 50 Q20 30 40 40 Q35 50 45 55 Q40 60 50 70 Q45 75 55 85 Q35 80 30 60 Q15 70 10 50" 
                fill="url(#holly-leaf)" filter="url(#leaf-shadow)" className="animate-leaf-sway" style={{ animationDelay: '0.2s' }} />
          <path d="M40 30 Q50 10 70 25 Q65 35 75 45 Q70 50 80 60 Q75 65 85 75 Q65 70 60 50 Q45 60 40 30" 
                fill="url(#holly-leaf)" filter="url(#leaf-shadow)" className="animate-leaf-sway" style={{ animationDelay: '0.7s' }} />
          <path d="M70 20 Q85 5 105 20 Q100 30 110 40 Q105 48 115 58 Q95 55 90 40 Q78 48 70 20" 
                fill="url(#holly-leaf)" filter="url(#leaf-shadow)" className="animate-leaf-sway" style={{ animationDelay: '1.2s' }} />
          
          <circle cx="52" cy="78" r="14" fill="url(#berry-shine)" className="animate-berry-glow" style={{ animationDelay: '0.15s' }} />
          <circle cx="48" cy="72" r="5" fill="white" opacity="0.55" />
          <circle cx="72" cy="88" r="12" fill="url(#berry-shine)" className="animate-berry-glow" style={{ animationDelay: '0.45s' }} />
          <circle cx="68" cy="82" r="4" fill="white" opacity="0.55" />
        </svg>
      </div>

      {/* Enhanced Hanging Ornaments - Desktop only */}
      <div className="fixed top-16 left-6 pointer-events-none z-[5] hidden lg:block">
        <div className="animate-ornament-swing-realistic" style={{ transformOrigin: 'top center' }}>
          <svg width="55" height="100" viewBox="0 0 55 100">
            <defs>
              <radialGradient id="ornament-red-hd" cx="35%" cy="35%">
                <stop offset="0%" stopColor="hsl(0, 95%, 78%)" />
                <stop offset="40%" stopColor="hsl(0, 88%, 58%)" />
                <stop offset="100%" stopColor="hsl(0, 82%, 32%)" />
              </radialGradient>
              <linearGradient id="cap-gold-hd" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(45, 95%, 75%)" />
                <stop offset="50%" stopColor="hsl(45, 88%, 58%)" />
                <stop offset="100%" stopColor="hsl(45, 82%, 38%)" />
              </linearGradient>
              <filter id="ornament-glow-r-hd">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feFlood floodColor="hsl(0, 82%, 52%)" floodOpacity="0.6" />
                <feComposite in2="blur" operator="in" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <line x1="27.5" y1="0" x2="27.5" y2="28" stroke="hsl(45, 65%, 48%)" strokeWidth="2.5" />
            <rect x="19" y="24" width="17" height="10" rx="2.5" fill="url(#cap-gold-hd)" />
            <ellipse cx="27.5" cy="24" rx="6" ry="2.5" fill="url(#cap-gold-hd)" />
            <circle cx="27.5" cy="62" r="28" fill="url(#ornament-red-hd)" filter="url(#ornament-glow-r-hd)" />
            <ellipse cx="20" cy="50" rx="10" ry="14" fill="white" opacity="0.28" />
            <ellipse cx="17" cy="46" rx="4" ry="6" fill="white" opacity="0.45" />
          </svg>
        </div>
      </div>

      <div className="fixed top-20 right-8 pointer-events-none z-[5] hidden lg:block">
        <div className="animate-ornament-swing-realistic" style={{ transformOrigin: 'top center', animationDelay: '1.2s' }}>
          <svg width="50" height="90" viewBox="0 0 50 90">
            <defs>
              <radialGradient id="ornament-green-hd" cx="35%" cy="35%">
                <stop offset="0%" stopColor="hsl(140, 85%, 58%)" />
                <stop offset="40%" stopColor="hsl(140, 75%, 42%)" />
                <stop offset="100%" stopColor="hsl(140, 65%, 24%)" />
              </radialGradient>
              <filter id="ornament-glow-g-hd">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feFlood floodColor="hsl(140, 75%, 42%)" floodOpacity="0.55" />
                <feComposite in2="blur" operator="in" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <line x1="25" y1="0" x2="25" y2="25" stroke="hsl(45, 65%, 48%)" strokeWidth="2.5" />
            <rect x="17" y="21" width="16" height="9" rx="2" fill="url(#cap-gold-hd)" />
            <ellipse cx="25" cy="21" rx="5.5" ry="2.2" fill="url(#cap-gold-hd)" />
            <circle cx="25" cy="54" r="25" fill="url(#ornament-green-hd)" filter="url(#ornament-glow-g-hd)" />
            <ellipse cx="18" cy="44" rx="9" ry="12" fill="white" opacity="0.24" />
            <ellipse cx="15" cy="40" rx="3" ry="5" fill="white" opacity="0.4" />
          </svg>
        </div>
      </div>

      {/* Side Light Strands - Desktop only */}
      <div className="fixed top-0 left-0 h-full pointer-events-none z-[5] hidden lg:block">
        <svg width="70" height="100%" viewBox="0 0 70 1000" preserveAspectRatio="none">
          <path d="M35 0 Q55 100 35 200 Q15 300 35 400 Q55 500 35 600 Q15 700 35 800 Q55 900 35 1000" 
                fill="none" stroke="hsl(0,0%,12%)" strokeWidth="3" />
          {Array.from({ length: 20 }).map((_, i) => {
            const y = i * 50 + 25;
            const x = 35 + Math.sin(i * 0.5) * 18;
            const colorIndex = i % lightColors.length;
            return (
              <g key={`left-light-${i}`}>
                <rect x={x - 4} y={y - 4} width="8" height="7" rx="1.5" fill="hsl(45, 30%, 22%)" />
                <ellipse cx={x} cy={y + 10} rx="6" ry="9" 
                         fill={lightColors[colorIndex]} 
                         className="animate-light-flicker"
                         style={{ animationDelay: `${i * 0.15}s` }} />
                <ellipse cx={x} cy={y + 8} rx="2.5" ry="4" fill="white" opacity="0.6" 
                         className="animate-light-flicker"
                         style={{ animationDelay: `${i * 0.15}s` }} />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="fixed top-0 right-0 h-full pointer-events-none z-[5] hidden lg:block">
        <svg width="70" height="100%" viewBox="0 0 70 1000" preserveAspectRatio="none">
          <path d="M35 0 Q15 100 35 200 Q55 300 35 400 Q15 500 35 600 Q55 700 35 800 Q15 900 35 1000" 
                fill="none" stroke="hsl(0,0%,12%)" strokeWidth="3" />
          {Array.from({ length: 20 }).map((_, i) => {
            const y = i * 50 + 25;
            const x = 35 - Math.sin(i * 0.5) * 18;
            const colorIndex = (i + 3) % lightColors.length;
            return (
              <g key={`right-light-${i}`}>
                <rect x={x - 4} y={y - 4} width="8" height="7" rx="1.5" fill="hsl(45, 30%, 22%)" />
                <ellipse cx={x} cy={y + 10} rx="6" ry="9" 
                         fill={lightColors[colorIndex]} 
                         className="animate-light-flicker"
                         style={{ animationDelay: `${i * 0.15 + 0.5}s` }} />
                <ellipse cx={x} cy={y + 8} rx="2.5" ry="4" fill="white" opacity="0.6" 
                         className="animate-light-flicker"
                         style={{ animationDelay: `${i * 0.15 + 0.5}s` }} />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Ambient Glow Effect at Bottom - Hidden on mobile */}
      <div className="fixed bottom-0 left-0 right-0 h-40 pointer-events-none z-[5] hidden md:block"
           style={{
             background: 'linear-gradient(to top, hsla(0, 75%, 52%, 0.12), hsla(140, 65%, 42%, 0.08), transparent)'
           }} />
    </>
  );
};

export default ChristmasDecorations;
