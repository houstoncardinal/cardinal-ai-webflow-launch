import { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

const ChristmasDecorations = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
  
  // Check if it's December (month is 0-indexed, so December is 11)
  const currentMonth = new Date().getMonth();
  const isDecember = currentMonth === 11;

  useEffect(() => {
    if (!isDecember) return;
    
    // Generate snowflakes
    const flakes: Snowflake[] = [];
    for (let i = 0; i < 50; i++) {
      flakes.push({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 8 + 4,
        delay: Math.random() * 10,
        duration: Math.random() * 5 + 8,
        opacity: Math.random() * 0.6 + 0.4
      });
    }
    setSnowflakes(flakes);
  }, [isDecember]);

  if (!isDecember) return null;

  return (
    <>
      {/* Snowfall Effect */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="absolute text-white"
            style={{
              left: `${flake.left}%`,
              top: '-20px',
              fontSize: `${flake.size}px`,
              opacity: flake.opacity,
              animation: `snowfall ${flake.duration}s linear infinite`,
              animationDelay: `${flake.delay}s`,
            }}
          >
            ❄
          </div>
        ))}
      </div>

      {/* Top Corner Decorations */}
      <div className="fixed top-0 left-0 pointer-events-none z-40">
        <div className="relative">
          {/* Holly leaves */}
          <svg width="120" height="120" viewBox="0 0 120 120" className="opacity-90">
            <defs>
              <linearGradient id="hollyGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(150, 60%, 30%)" />
                <stop offset="100%" stopColor="hsl(150, 50%, 20%)" />
              </linearGradient>
            </defs>
            {/* Holly leaves */}
            <path d="M10 30 Q30 10 50 30 Q40 40 30 35 Q20 45 10 30" fill="url(#hollyGreen)" />
            <path d="M30 20 Q50 0 70 20 Q60 30 50 25 Q40 35 30 20" fill="url(#hollyGreen)" />
            <path d="M50 35 Q70 15 90 35 Q80 45 70 40 Q60 50 50 35" fill="url(#hollyGreen)" />
            {/* Berries */}
            <circle cx="35" cy="45" r="8" fill="hsl(0, 72%, 45%)" className="animate-glow-pulse" />
            <circle cx="50" cy="50" r="6" fill="hsl(0, 72%, 50%)" className="animate-glow-pulse" style={{ animationDelay: '0.5s' }} />
            <circle cx="42" cy="58" r="7" fill="hsl(0, 72%, 48%)" className="animate-glow-pulse" style={{ animationDelay: '1s' }} />
          </svg>
        </div>
      </div>

      {/* Top Right Corner */}
      <div className="fixed top-0 right-0 pointer-events-none z-40">
        <div className="relative">
          <svg width="120" height="120" viewBox="0 0 120 120" className="opacity-90 transform scale-x-[-1]">
            <defs>
              <linearGradient id="hollyGreen2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(150, 60%, 30%)" />
                <stop offset="100%" stopColor="hsl(150, 50%, 20%)" />
              </linearGradient>
            </defs>
            <path d="M10 30 Q30 10 50 30 Q40 40 30 35 Q20 45 10 30" fill="url(#hollyGreen2)" />
            <path d="M30 20 Q50 0 70 20 Q60 30 50 25 Q40 35 30 20" fill="url(#hollyGreen2)" />
            <path d="M50 35 Q70 15 90 35 Q80 45 70 40 Q60 50 50 35" fill="url(#hollyGreen2)" />
            <circle cx="35" cy="45" r="8" fill="hsl(0, 72%, 45%)" className="animate-glow-pulse" />
            <circle cx="50" cy="50" r="6" fill="hsl(0, 72%, 50%)" className="animate-glow-pulse" style={{ animationDelay: '0.3s' }} />
            <circle cx="42" cy="58" r="7" fill="hsl(0, 72%, 48%)" className="animate-glow-pulse" style={{ animationDelay: '0.7s' }} />
          </svg>
        </div>
      </div>

      {/* Festive String Lights - Top */}
      <div className="fixed top-0 left-0 right-0 pointer-events-none z-30 overflow-hidden">
        <svg className="w-full" height="60" viewBox="0 0 1200 60" preserveAspectRatio="none">
          {/* Wire */}
          <path 
            d="M0 20 Q150 50 300 25 Q450 5 600 30 Q750 55 900 20 Q1050 -5 1200 25" 
            fill="none" 
            stroke="hsl(150, 30%, 20%)" 
            strokeWidth="2"
          />
          {/* Lights */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
            const x = i * 110 + 50;
            const y = 20 + Math.sin(i * 0.8) * 15;
            const colors = ['hsl(0, 72%, 50%)', 'hsl(150, 60%, 40%)', 'hsl(45, 80%, 55%)', 'hsl(200, 70%, 50%)'];
            const color = colors[i % 4];
            return (
              <g key={i}>
                <circle 
                  cx={x} 
                  cy={y + 15} 
                  r="8" 
                  fill={color}
                  className="animate-twinkle"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
                <circle 
                  cx={x} 
                  cy={y + 15} 
                  r="12" 
                  fill={color}
                  opacity="0.3"
                  className="animate-twinkle"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Hanging Ornaments */}
      <div className="fixed top-16 left-8 pointer-events-none z-30 hidden lg:block">
        <div className="animate-ornament-swing" style={{ transformOrigin: 'top center' }}>
          <svg width="40" height="70" viewBox="0 0 40 70">
            <line x1="20" y1="0" x2="20" y2="20" stroke="hsl(45, 50%, 50%)" strokeWidth="2" />
            <circle cx="20" cy="45" r="20" fill="hsl(0, 72%, 45%)" />
            <circle cx="20" cy="45" r="20" fill="url(#ornamentShine)" />
            <ellipse cx="20" cy="20" rx="6" ry="4" fill="hsl(45, 60%, 55%)" />
            <defs>
              <radialGradient id="ornamentShine" cx="30%" cy="30%" r="50%">
                <stop offset="0%" stopColor="white" stopOpacity="0.4" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="fixed top-20 right-12 pointer-events-none z-30 hidden lg:block">
        <div className="animate-ornament-swing" style={{ transformOrigin: 'top center', animationDelay: '1s' }}>
          <svg width="35" height="60" viewBox="0 0 35 60">
            <line x1="17.5" y1="0" x2="17.5" y2="15" stroke="hsl(45, 50%, 50%)" strokeWidth="2" />
            <circle cx="17.5" cy="37" r="17" fill="hsl(150, 50%, 30%)" />
            <circle cx="17.5" cy="37" r="17" fill="url(#ornamentShine2)" />
            <ellipse cx="17.5" cy="15" rx="5" ry="3" fill="hsl(45, 60%, 55%)" />
            <defs>
              <radialGradient id="ornamentShine2" cx="30%" cy="30%" r="50%">
                <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="fixed top-24 left-1/4 pointer-events-none z-30 hidden xl:block">
        <div className="animate-ornament-swing" style={{ transformOrigin: 'top center', animationDelay: '0.5s' }}>
          <svg width="30" height="55" viewBox="0 0 30 55">
            <line x1="15" y1="0" x2="15" y2="12" stroke="hsl(45, 50%, 50%)" strokeWidth="2" />
            <circle cx="15" cy="32" r="15" fill="hsl(45, 80%, 55%)" />
            <circle cx="15" cy="32" r="15" fill="url(#ornamentShine3)" />
            <ellipse cx="15" cy="12" rx="4" ry="3" fill="hsl(45, 60%, 55%)" />
            <defs>
              <radialGradient id="ornamentShine3" cx="30%" cy="30%" r="50%">
                <stop offset="0%" stopColor="white" stopOpacity="0.5" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
};

export default ChristmasDecorations;
