import { useEffect, useState } from 'react';

export const HalloweenDecorations = () => {
  const [isOctober, setIsOctober] = useState(false);

  useEffect(() => {
    const currentMonth = new Date().getMonth();
    setIsOctober(currentMonth === 9); // October is month 9 (0-indexed)
  }, []);

  if (!isOctober) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Spider webs in corners */}
      <div className="absolute top-0 left-0 w-32 h-32 animate-pulse">
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-40">
          <path d="M0,0 L50,50 M0,20 L50,50 M0,40 L50,50 M20,0 L50,50 M40,0 L50,50" stroke="white" strokeWidth="0.5" fill="none"/>
          <path d="M50,0 L50,50 M50,20 L50,50 M50,40 L50,50" stroke="white" strokeWidth="0.5" fill="none"/>
          <circle cx="50" cy="50" r="2" fill="black"/>
        </svg>
      </div>
      
      <div className="absolute top-0 right-0 w-32 h-32 animate-pulse scale-x-[-1]">
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-40">
          <path d="M0,0 L50,50 M0,20 L50,50 M0,40 L50,50 M20,0 L50,50 M40,0 L50,50" stroke="white" strokeWidth="0.5" fill="none"/>
          <path d="M50,0 L50,50 M50,20 L50,50 M50,40 L50,50" stroke="white" strokeWidth="0.5" fill="none"/>
          <circle cx="50" cy="50" r="2" fill="black"/>
        </svg>
      </div>

      {/* Floating pumpkins */}
      <div className="absolute top-20 left-10 animate-[float_6s_ease-in-out_infinite]">
        <svg width="60" height="60" viewBox="0 0 100 100" className="drop-shadow-lg">
          <ellipse cx="50" cy="55" rx="35" ry="40" fill="#ff6b35" opacity="0.9"/>
          <ellipse cx="50" cy="55" rx="25" ry="35" fill="#ff8c42" opacity="0.7"/>
          <rect x="45" y="15" width="10" height="15" fill="#2d5016" rx="2"/>
          <path d="M30,45 Q35,35 40,45" fill="black"/>
          <path d="M60,45 Q65,35 70,45" fill="black"/>
          <path d="M35,70 Q50,80 65,70" fill="black"/>
        </svg>
      </div>

      <div className="absolute top-40 right-20 animate-[float_8s_ease-in-out_infinite_1s]">
        <svg width="50" height="50" viewBox="0 0 100 100" className="drop-shadow-lg">
          <ellipse cx="50" cy="55" rx="35" ry="40" fill="#ff6b35" opacity="0.9"/>
          <ellipse cx="50" cy="55" rx="25" ry="35" fill="#ff8c42" opacity="0.7"/>
          <rect x="45" y="15" width="10" height="15" fill="#2d5016" rx="2"/>
          <path d="M30,45 Q35,35 40,45" fill="black"/>
          <path d="M60,45 Q65,35 70,45" fill="black"/>
          <path d="M35,70 Q50,80 65,70" fill="black"/>
        </svg>
      </div>

      <div className="absolute bottom-20 left-1/4 animate-[float_7s_ease-in-out_infinite_2s]">
        <svg width="55" height="55" viewBox="0 0 100 100" className="drop-shadow-lg">
          <ellipse cx="50" cy="55" rx="35" ry="40" fill="#ff6b35" opacity="0.9"/>
          <ellipse cx="50" cy="55" rx="25" ry="35" fill="#ff8c42" opacity="0.7"/>
          <rect x="45" y="15" width="10" height="15" fill="#2d5016" rx="2"/>
          <path d="M30,45 Q35,35 40,45" fill="black"/>
          <path d="M60,45 Q65,35 70,45" fill="black"/>
          <path d="M35,70 Q50,80 65,70" fill="black"/>
        </svg>
      </div>

      {/* Skeleton */}
      <div className="absolute bottom-10 right-10 animate-[swing_3s_ease-in-out_infinite]">
        <svg width="70" height="70" viewBox="0 0 100 100" className="drop-shadow-lg opacity-80">
          <circle cx="50" cy="20" r="12" fill="white" stroke="black" strokeWidth="1"/>
          <ellipse cx="45" cy="18" rx="3" ry="4" fill="black"/>
          <ellipse cx="55" cy="18" rx="3" ry="4" fill="black"/>
          <rect x="48" y="32" width="4" height="25" fill="white" stroke="black" strokeWidth="1"/>
          <rect x="45" y="40" width="10" height="3" fill="white" stroke="black" strokeWidth="1"/>
          <line x1="48" y1="40" x2="38" y2="50" stroke="white" strokeWidth="3"/>
          <line x1="52" y1="40" x2="62" y2="50" stroke="white" strokeWidth="3"/>
          <line x1="48" y1="57" x2="42" y2="75" stroke="white" strokeWidth="3"/>
          <line x1="52" y1="57" x2="58" y2="75" stroke="white" strokeWidth="3"/>
        </svg>
      </div>

      {/* Bats */}
      <div className="absolute top-1/3 left-1/3 animate-[bat-fly_10s_linear_infinite]">
        <svg width="40" height="40" viewBox="0 0 100 100" className="opacity-70">
          <path d="M20,50 Q10,30 5,40 Q8,50 20,50 M80,50 Q90,30 95,40 Q92,50 80,50 M20,50 Q30,40 50,45 Q70,40 80,50" fill="black"/>
          <circle cx="50" cy="45" r="8" fill="black"/>
          <circle cx="45" cy="43" r="2" fill="red"/>
          <circle cx="55" cy="43" r="2" fill="red"/>
        </svg>
      </div>

      <div className="absolute top-2/3 right-1/4 animate-[bat-fly_12s_linear_infinite_3s]">
        <svg width="35" height="35" viewBox="0 0 100 100" className="opacity-70">
          <path d="M20,50 Q10,30 5,40 Q8,50 20,50 M80,50 Q90,30 95,40 Q92,50 80,50 M20,50 Q30,40 50,45 Q70,40 80,50" fill="black"/>
          <circle cx="50" cy="45" r="8" fill="black"/>
          <circle cx="45" cy="43" r="2" fill="red"/>
          <circle cx="55" cy="43" r="2" fill="red"/>
        </svg>
      </div>

      {/* Ghost */}
      <div className="absolute top-1/2 left-1/2 animate-[float_5s_ease-in-out_infinite]">
        <svg width="60" height="60" viewBox="0 0 100 100" className="opacity-60">
          <path d="M30,40 Q30,15 50,15 Q70,15 70,40 L70,80 Q65,75 60,80 Q55,75 50,80 Q45,75 40,80 Q35,75 30,80 Z" fill="white" stroke="black" strokeWidth="1"/>
          <circle cx="40" cy="35" r="4" fill="black"/>
          <circle cx="60" cy="35" r="4" fill="black"/>
          <path d="M40,50 Q50,55 60,50" stroke="black" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      {/* Candy corn decorations */}
      <div className="absolute bottom-40 left-1/2 animate-[spin_20s_linear_infinite]">
        <svg width="30" height="30" viewBox="0 0 100 100" className="opacity-70">
          <path d="M50,10 L30,90 L70,90 Z" fill="#fcba03"/>
          <path d="M50,40 L35,90 L65,90 Z" fill="#fd8a09"/>
          <path d="M50,70 L40,90 L60,90 Z" fill="white"/>
        </svg>
      </div>

      {/* Floating eyes in the dark */}
      <div className="absolute top-1/4 right-1/3 animate-[blink_4s_ease-in-out_infinite]">
        <div className="flex gap-3">
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"/>
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"/>
        </div>
      </div>
    </div>
  );
};
