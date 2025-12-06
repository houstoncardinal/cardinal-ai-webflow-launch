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

const ChristmasDecorations = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
  const [headerLights, setHeaderLights] = useState<Light[]>([]);
  
  const currentMonth = new Date().getMonth();
  const isDecember = currentMonth === 11;

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
    
    // Generate realistic snowflakes with depth
    const flakes: Snowflake[] = [];
    const snowChars = ['❄', '❅', '❆', '✻', '✼', '❊'];
    for (let i = 0; i < 80; i++) {
      const depth = Math.random();
      flakes.push({
        id: i,
        left: Math.random() * 100,
        size: depth * 16 + 6,
        delay: Math.random() * 15,
        duration: (1 - depth) * 8 + 10,
        opacity: depth * 0.5 + 0.3,
        blur: (1 - depth) * 2,
        character: snowChars[Math.floor(Math.random() * snowChars.length)]
      });
    }
    setSnowflakes(flakes);

    // Generate header lights
    const lights: Light[] = [];
    const lightCount = Math.floor(window.innerWidth / 50);
    for (let i = 0; i < lightCount; i++) {
      lights.push({
        id: i,
        x: (i / lightCount) * 100,
        color: lightColors[i % lightColors.length],
        delay: Math.random() * 2,
        size: Math.random() * 4 + 8
      });
    }
    setHeaderLights(lights);
  }, [isDecember]);

  if (!isDecember) return null;

  return (
    <>
      {/* Ultra-Realistic Snowfall with Depth */}
      <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
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
              textShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(200,220,255,0.5)',
              animation: `snowfall-realistic ${flake.duration}s linear infinite`,
              animationDelay: `${flake.delay}s`,
            }}
          >
            {flake.character}
          </div>
        ))}
      </div>

      {/* String Lights Along Top - Realistic Bulbs */}
      <div className="fixed top-0 left-0 right-0 pointer-events-none z-[99] overflow-visible">
        {/* Wire */}
        <svg className="w-full" height="80" viewBox="0 0 2000 80" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
          <defs>
            {/* Realistic bulb gradients */}
            {lightColors.map((color, i) => (
              <radialGradient key={`bulb-grad-${i}`} id={`bulb-gradient-${i}`} cx="30%" cy="30%">
                <stop offset="0%" stopColor="white" stopOpacity="0.9" />
                <stop offset="30%" stopColor={color} stopOpacity="1" />
                <stop offset="100%" stopColor={color.replace('100%', '70%').replace('50%', '30%')} stopOpacity="1" />
              </radialGradient>
            ))}
            
            {/* Glow filters for each color */}
            {lightColors.map((color, i) => (
              <filter key={`glow-${i}`} id={`glow-filter-${i}`} x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feFlood floodColor={color} floodOpacity="0.8" />
                <feComposite in2="blur" operator="in" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            ))}
          </defs>

          {/* Main wire with sag */}
          <path 
            d="M-50 15 Q250 45 500 20 Q750 -5 1000 30 Q1250 55 1500 15 Q1750 -10 2050 25" 
            fill="none" 
            stroke="hsl(0, 0%, 15%)" 
            strokeWidth="3"
            strokeLinecap="round"
          />
          
          {/* Secondary wire for depth */}
          <path 
            d="M-50 15 Q250 45 500 20 Q750 -5 1000 30 Q1250 55 1500 15 Q1750 -10 2050 25" 
            fill="none" 
            stroke="hsl(0, 0%, 25%)" 
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="5,3"
          />

          {/* Realistic bulbs with sockets */}
          {headerLights.map((light, i) => {
            const wireY = 15 + Math.sin((light.x / 100) * Math.PI * 4) * 20;
            const colorIndex = i % lightColors.length;
            
            return (
              <g key={light.id} className="christmas-light-bulb" style={{ animationDelay: `${light.delay}s` }}>
                {/* Socket */}
                <rect 
                  x={light.x * 20 - 4} 
                  y={wireY - 2} 
                  width="8" 
                  height="8" 
                  rx="1"
                  fill="hsl(45, 30%, 25%)"
                />
                
                {/* Bulb body */}
                <ellipse 
                  cx={light.x * 20} 
                  cy={wireY + 18} 
                  rx={light.size / 2 + 2}
                  ry={light.size / 2 + 4}
                  fill={`url(#bulb-gradient-${colorIndex})`}
                  filter={`url(#glow-filter-${colorIndex})`}
                  className="animate-light-flicker"
                  style={{ animationDelay: `${light.delay}s` }}
                />
                
                {/* Inner glow */}
                <ellipse 
                  cx={light.x * 20} 
                  cy={wireY + 17} 
                  rx={light.size / 4}
                  ry={light.size / 3}
                  fill="white"
                  opacity="0.6"
                  className="animate-light-flicker"
                  style={{ animationDelay: `${light.delay}s` }}
                />
                
                {/* Light cone effect */}
                <ellipse 
                  cx={light.x * 20} 
                  cy={wireY + 45} 
                  rx={light.size * 2}
                  ry={light.size}
                  fill={light.color}
                  opacity="0.15"
                  className="animate-light-flicker"
                  style={{ animationDelay: `${light.delay}s` }}
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Corner Holly & Wreath - Left */}
      <div className="fixed top-0 left-0 pointer-events-none z-[98]">
        <svg width="180" height="180" viewBox="0 0 180 180" className="drop-shadow-2xl">
          <defs>
            <linearGradient id="holly-leaf" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(140, 70%, 35%)" />
              <stop offset="50%" stopColor="hsl(140, 60%, 25%)" />
              <stop offset="100%" stopColor="hsl(140, 50%, 18%)" />
            </linearGradient>
            <radialGradient id="berry-shine" cx="30%" cy="30%">
              <stop offset="0%" stopColor="hsl(0, 90%, 65%)" />
              <stop offset="50%" stopColor="hsl(0, 85%, 50%)" />
              <stop offset="100%" stopColor="hsl(0, 80%, 35%)" />
            </radialGradient>
            <filter id="leaf-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="rgba(0,0,0,0.4)" />
            </filter>
          </defs>
          
          {/* Holly leaves with realistic shape */}
          <path d="M10 50 Q20 30 40 40 Q35 50 45 55 Q40 60 50 70 Q45 75 55 85 Q35 80 30 60 Q15 70 10 50" 
                fill="url(#holly-leaf)" filter="url(#leaf-shadow)" className="animate-leaf-sway" />
          <path d="M40 30 Q50 10 70 25 Q65 35 75 45 Q70 50 80 60 Q75 65 85 75 Q65 70 60 50 Q45 60 40 30" 
                fill="url(#holly-leaf)" filter="url(#leaf-shadow)" className="animate-leaf-sway" style={{ animationDelay: '0.5s' }} />
          <path d="M70 20 Q85 5 105 20 Q100 30 110 40 Q105 48 115 58 Q95 55 90 40 Q78 48 70 20" 
                fill="url(#holly-leaf)" filter="url(#leaf-shadow)" className="animate-leaf-sway" style={{ animationDelay: '1s' }} />
          
          {/* Berries with shine */}
          <circle cx="50" cy="75" r="12" fill="url(#berry-shine)" className="animate-berry-glow" />
          <circle cx="46" cy="70" r="4" fill="white" opacity="0.5" />
          <circle cx="70" cy="85" r="10" fill="url(#berry-shine)" className="animate-berry-glow" style={{ animationDelay: '0.3s' }} />
          <circle cx="66" cy="80" r="3" fill="white" opacity="0.5" />
          <circle cx="55" cy="95" r="11" fill="url(#berry-shine)" className="animate-berry-glow" style={{ animationDelay: '0.6s' }} />
          <circle cx="51" cy="90" r="3.5" fill="white" opacity="0.5" />
          <circle cx="85" cy="70" r="9" fill="url(#berry-shine)" className="animate-berry-glow" style={{ animationDelay: '0.9s' }} />
          <circle cx="81" cy="66" r="2.5" fill="white" opacity="0.5" />
        </svg>
      </div>

      {/* Corner Holly & Wreath - Right */}
      <div className="fixed top-0 right-0 pointer-events-none z-[98] transform scale-x-[-1]">
        <svg width="180" height="180" viewBox="0 0 180 180" className="drop-shadow-2xl">
          <defs>
            <linearGradient id="holly-leaf-r" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(140, 70%, 35%)" />
              <stop offset="50%" stopColor="hsl(140, 60%, 25%)" />
              <stop offset="100%" stopColor="hsl(140, 50%, 18%)" />
            </linearGradient>
            <radialGradient id="berry-shine-r" cx="30%" cy="30%">
              <stop offset="0%" stopColor="hsl(0, 90%, 65%)" />
              <stop offset="50%" stopColor="hsl(0, 85%, 50%)" />
              <stop offset="100%" stopColor="hsl(0, 80%, 35%)" />
            </radialGradient>
          </defs>
          
          <path d="M10 50 Q20 30 40 40 Q35 50 45 55 Q40 60 50 70 Q45 75 55 85 Q35 80 30 60 Q15 70 10 50" 
                fill="url(#holly-leaf-r)" filter="url(#leaf-shadow)" className="animate-leaf-sway" style={{ animationDelay: '0.2s' }} />
          <path d="M40 30 Q50 10 70 25 Q65 35 75 45 Q70 50 80 60 Q75 65 85 75 Q65 70 60 50 Q45 60 40 30" 
                fill="url(#holly-leaf-r)" filter="url(#leaf-shadow)" className="animate-leaf-sway" style={{ animationDelay: '0.7s' }} />
          <path d="M70 20 Q85 5 105 20 Q100 30 110 40 Q105 48 115 58 Q95 55 90 40 Q78 48 70 20" 
                fill="url(#holly-leaf-r)" filter="url(#leaf-shadow)" className="animate-leaf-sway" style={{ animationDelay: '1.2s' }} />
          
          <circle cx="50" cy="75" r="12" fill="url(#berry-shine-r)" className="animate-berry-glow" style={{ animationDelay: '0.15s' }} />
          <circle cx="46" cy="70" r="4" fill="white" opacity="0.5" />
          <circle cx="70" cy="85" r="10" fill="url(#berry-shine-r)" className="animate-berry-glow" style={{ animationDelay: '0.45s' }} />
          <circle cx="66" cy="80" r="3" fill="white" opacity="0.5" />
          <circle cx="55" cy="95" r="11" fill="url(#berry-shine-r)" className="animate-berry-glow" style={{ animationDelay: '0.75s' }} />
          <circle cx="51" cy="90" r="3.5" fill="white" opacity="0.5" />
        </svg>
      </div>

      {/* Hanging Ornaments with Realistic Reflections */}
      <div className="fixed top-16 left-6 pointer-events-none z-[97] hidden lg:block">
        <div className="animate-ornament-swing-realistic" style={{ transformOrigin: 'top center' }}>
          <svg width="50" height="90" viewBox="0 0 50 90">
            <defs>
              <radialGradient id="ornament-red" cx="35%" cy="35%">
                <stop offset="0%" stopColor="hsl(0, 90%, 75%)" />
                <stop offset="40%" stopColor="hsl(0, 85%, 55%)" />
                <stop offset="100%" stopColor="hsl(0, 80%, 30%)" />
              </radialGradient>
              <linearGradient id="cap-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(45, 90%, 70%)" />
                <stop offset="50%" stopColor="hsl(45, 85%, 55%)" />
                <stop offset="100%" stopColor="hsl(45, 80%, 35%)" />
              </linearGradient>
              <filter id="ornament-glow-r">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feFlood floodColor="hsl(0, 80%, 50%)" floodOpacity="0.5" />
                <feComposite in2="blur" operator="in" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* String */}
            <line x1="25" y1="0" x2="25" y2="25" stroke="hsl(45, 60%, 45%)" strokeWidth="2" />
            {/* Cap */}
            <rect x="18" y="22" width="14" height="8" rx="2" fill="url(#cap-gold)" />
            <ellipse cx="25" cy="22" rx="5" ry="2" fill="url(#cap-gold)" />
            {/* Ornament */}
            <circle cx="25" cy="55" r="24" fill="url(#ornament-red)" filter="url(#ornament-glow-r)" />
            {/* Reflection */}
            <ellipse cx="18" cy="45" rx="8" ry="12" fill="white" opacity="0.25" />
            <ellipse cx="15" cy="42" rx="3" ry="5" fill="white" opacity="0.4" />
          </svg>
        </div>
      </div>

      <div className="fixed top-20 right-8 pointer-events-none z-[97] hidden lg:block">
        <div className="animate-ornament-swing-realistic" style={{ transformOrigin: 'top center', animationDelay: '1.2s' }}>
          <svg width="45" height="80" viewBox="0 0 45 80">
            <defs>
              <radialGradient id="ornament-green" cx="35%" cy="35%">
                <stop offset="0%" stopColor="hsl(140, 80%, 55%)" />
                <stop offset="40%" stopColor="hsl(140, 70%, 40%)" />
                <stop offset="100%" stopColor="hsl(140, 60%, 22%)" />
              </radialGradient>
              <filter id="ornament-glow-g">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feFlood floodColor="hsl(140, 70%, 40%)" floodOpacity="0.5" />
                <feComposite in2="blur" operator="in" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <line x1="22.5" y1="0" x2="22.5" y2="22" stroke="hsl(45, 60%, 45%)" strokeWidth="2" />
            <rect x="16" y="19" width="13" height="7" rx="2" fill="url(#cap-gold)" />
            <ellipse cx="22.5" cy="19" rx="4.5" ry="1.8" fill="url(#cap-gold)" />
            <circle cx="22.5" cy="48" r="21" fill="url(#ornament-green)" filter="url(#ornament-glow-g)" />
            <ellipse cx="16" cy="40" rx="7" ry="10" fill="white" opacity="0.2" />
            <ellipse cx="14" cy="37" rx="2.5" ry="4" fill="white" opacity="0.35" />
          </svg>
        </div>
      </div>

      <div className="fixed top-28 left-1/4 pointer-events-none z-[97] hidden xl:block">
        <div className="animate-ornament-swing-realistic" style={{ transformOrigin: 'top center', animationDelay: '0.6s' }}>
          <svg width="40" height="75" viewBox="0 0 40 75">
            <defs>
              <radialGradient id="ornament-gold" cx="35%" cy="35%">
                <stop offset="0%" stopColor="hsl(45, 95%, 75%)" />
                <stop offset="40%" stopColor="hsl(45, 90%, 55%)" />
                <stop offset="100%" stopColor="hsl(35, 80%, 35%)" />
              </radialGradient>
              <filter id="ornament-glow-gold">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feFlood floodColor="hsl(45, 90%, 55%)" floodOpacity="0.6" />
                <feComposite in2="blur" operator="in" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <line x1="20" y1="0" x2="20" y2="18" stroke="hsl(45, 60%, 45%)" strokeWidth="2" />
            <rect x="14" y="16" width="12" height="6" rx="2" fill="url(#cap-gold)" />
            <ellipse cx="20" cy="16" rx="4" ry="1.5" fill="url(#cap-gold)" />
            <circle cx="20" cy="43" r="19" fill="url(#ornament-gold)" filter="url(#ornament-glow-gold)" />
            <ellipse cx="14" cy="36" rx="6" ry="9" fill="white" opacity="0.25" />
            <ellipse cx="12" cy="33" rx="2" ry="3.5" fill="white" opacity="0.4" />
          </svg>
        </div>
      </div>

      <div className="fixed top-24 right-1/4 pointer-events-none z-[97] hidden xl:block">
        <div className="animate-ornament-swing-realistic" style={{ transformOrigin: 'top center', animationDelay: '1.8s' }}>
          <svg width="42" height="78" viewBox="0 0 42 78">
            <defs>
              <radialGradient id="ornament-blue" cx="35%" cy="35%">
                <stop offset="0%" stopColor="hsl(210, 90%, 70%)" />
                <stop offset="40%" stopColor="hsl(210, 85%, 50%)" />
                <stop offset="100%" stopColor="hsl(210, 80%, 30%)" />
              </radialGradient>
              <filter id="ornament-glow-b">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feFlood floodColor="hsl(210, 85%, 50%)" floodOpacity="0.5" />
                <feComposite in2="blur" operator="in" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <line x1="21" y1="0" x2="21" y2="20" stroke="hsl(45, 60%, 45%)" strokeWidth="2" />
            <rect x="15" y="17" width="12" height="6" rx="2" fill="url(#cap-gold)" />
            <ellipse cx="21" cy="17" rx="4" ry="1.5" fill="url(#cap-gold)" />
            <circle cx="21" cy="45" r="20" fill="url(#ornament-blue)" filter="url(#ornament-glow-b)" />
            <ellipse cx="15" cy="37" rx="6" ry="10" fill="white" opacity="0.22" />
            <ellipse cx="13" cy="34" rx="2.5" ry="4" fill="white" opacity="0.38" />
          </svg>
        </div>
      </div>

      {/* Side Light Strands - Left */}
      <div className="fixed top-0 left-0 h-full pointer-events-none z-[96] hidden lg:block">
        <svg width="60" height="100%" viewBox="0 0 60 1000" preserveAspectRatio="none">
          <path d="M30 0 Q50 100 30 200 Q10 300 30 400 Q50 500 30 600 Q10 700 30 800 Q50 900 30 1000" 
                fill="none" stroke="hsl(0,0%,15%)" strokeWidth="2" />
          {Array.from({ length: 20 }).map((_, i) => {
            const y = i * 50 + 25;
            const x = 30 + Math.sin(i * 0.5) * 15;
            const colorIndex = i % lightColors.length;
            return (
              <g key={`left-light-${i}`}>
                <rect x={x - 3} y={y - 3} width="6" height="5" rx="1" fill="hsl(45, 30%, 25%)" />
                <ellipse cx={x} cy={y + 8} rx="5" ry="7" 
                         fill={lightColors[colorIndex]} 
                         className="animate-light-flicker"
                         style={{ animationDelay: `${i * 0.15}s` }} />
                <ellipse cx={x} cy={y + 7} rx="2" ry="3" fill="white" opacity="0.5" 
                         className="animate-light-flicker"
                         style={{ animationDelay: `${i * 0.15}s` }} />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Side Light Strands - Right */}
      <div className="fixed top-0 right-0 h-full pointer-events-none z-[96] hidden lg:block">
        <svg width="60" height="100%" viewBox="0 0 60 1000" preserveAspectRatio="none">
          <path d="M30 0 Q10 100 30 200 Q50 300 30 400 Q10 500 30 600 Q50 700 30 800 Q10 900 30 1000" 
                fill="none" stroke="hsl(0,0%,15%)" strokeWidth="2" />
          {Array.from({ length: 20 }).map((_, i) => {
            const y = i * 50 + 25;
            const x = 30 - Math.sin(i * 0.5) * 15;
            const colorIndex = (i + 3) % lightColors.length;
            return (
              <g key={`right-light-${i}`}>
                <rect x={x - 3} y={y - 3} width="6" height="5" rx="1" fill="hsl(45, 30%, 25%)" />
                <ellipse cx={x} cy={y + 8} rx="5" ry="7" 
                         fill={lightColors[colorIndex]} 
                         className="animate-light-flicker"
                         style={{ animationDelay: `${i * 0.15 + 0.5}s` }} />
                <ellipse cx={x} cy={y + 7} rx="2" ry="3" fill="white" opacity="0.5" 
                         className="animate-light-flicker"
                         style={{ animationDelay: `${i * 0.15 + 0.5}s` }} />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Ambient Glow Effect at Bottom */}
      <div className="fixed bottom-0 left-0 right-0 h-32 pointer-events-none z-[95]"
           style={{
             background: 'linear-gradient(to top, hsla(0, 70%, 50%, 0.08), hsla(140, 60%, 40%, 0.05), transparent)'
           }} />
    </>
  );
};

export default ChristmasDecorations;
