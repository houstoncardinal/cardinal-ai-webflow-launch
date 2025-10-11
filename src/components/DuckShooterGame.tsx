import { useState, useEffect, useRef, useCallback } from 'react';
import { Volume2, VolumeX, Trophy, Target, Zap } from 'lucide-react';

interface Duck {
  id: number;
  x: number;
  y: number;
  speed: number;
  direction: 1 | -1;
  isHit: boolean;
  size: number;
}

const DuckShooterGame = () => {
  const [ducks, setDucks] = useState<Duck[]>([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('duckShooterHighScore');
    return saved ? parseInt(saved) : 0;
  });
  const [shotsRemaining, setShotsRemaining] = useState(20);
  const [gameActive, setGameActive] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [showGameOver, setShowGameOver] = useState(false);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const duckIdCounter = useRef(0);
  const animationFrameRef = useRef<number>();
  const [gameAreaWidth, setGameAreaWidth] = useState(1000);

  // Duck spawn rate based on difficulty
  const spawnRates = {
    easy: 1800,
    medium: 1200,
    hard: 800
  };

  // Duck speed based on difficulty
  const speedMultipliers = {
    easy: 1,
    medium: 1.5,
    hard: 2
  };

  // Play sound effect
  const playSound = useCallback((type: 'shoot' | 'hit' | 'miss' | 'gameOver') => {
    if (!soundEnabled) return;
    
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    if (type === 'shoot') {
      oscillator.frequency.value = 400;
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } else if (type === 'hit') {
      oscillator.frequency.value = 800;
      gainNode.gain.setValueAtTime(0.4, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.2);
    } else if (type === 'miss') {
      oscillator.frequency.value = 200;
      gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.15);
    } else if (type === 'gameOver') {
      oscillator.frequency.value = 300;
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
    }
  }, [soundEnabled]);

  // Start game
  const startGame = () => {
    setScore(0);
    setShotsRemaining(20);
    setDucks([]);
    setGameActive(true);
    setShowGameOver(false);
    // Spawn first duck immediately
    setTimeout(() => {
      if (gameAreaRef.current) {
        const width = gameAreaRef.current.offsetWidth;
        const direction = Math.random() > 0.5 ? 1 : -1;
        const size = 60 + Math.random() * 40;
        const firstDuck: Duck = {
          id: duckIdCounter.current++,
          x: direction === 1 ? -100 : width + 100,
          y: Math.random() * 250 + 50,
          speed: (1 + Math.random() * 2) * speedMultipliers[difficulty],
          direction,
          isHit: false,
          size
        };
        setDucks([firstDuck]);
      }
    }, 100);
  };

  // Update game area width on mount and resize
  useEffect(() => {
    const updateWidth = () => {
      if (gameAreaRef.current) {
        setGameAreaWidth(gameAreaRef.current.offsetWidth);
      }
    };
    
    updateWidth();
    window.addEventListener('resize', updateWidth);
    
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Spawn duck
  const spawnDuck = useCallback(() => {
    if (!gameActive) return;
    
    const direction = Math.random() > 0.5 ? 1 : -1;
    const size = 60 + Math.random() * 40; // Random size between 60-100px
    const newDuck: Duck = {
      id: duckIdCounter.current++,
      x: direction === 1 ? -100 : gameAreaWidth + 100,
      y: Math.random() * 250 + 50, // Random height between 50-300px
      speed: (1 + Math.random() * 2) * speedMultipliers[difficulty],
      direction,
      isHit: false,
      size
    };
    
    setDucks(prev => [...prev, newDuck]);
  }, [gameActive, difficulty, gameAreaWidth]);

  // Move ducks
  useEffect(() => {
    if (!gameActive) return;

    const animate = () => {
      setDucks(prevDucks => {
        const updated = prevDucks
          .map(duck => {
            if (duck.isHit) return duck;
            return {
              ...duck,
              x: duck.x + duck.speed * duck.direction
            };
          })
          .filter(duck => {
            // Remove ducks that are off screen and not hit
            if (duck.isHit) return true;
            if (duck.direction === 1 && duck.x > gameAreaWidth + 100) return false;
            if (duck.direction === -1 && duck.x < -100) return false;
            return true;
          });
        
        return updated;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [gameActive]);

  // Spawn ducks periodically
  useEffect(() => {
    if (!gameActive) return;

    const interval = setInterval(() => {
      spawnDuck();
    }, spawnRates[difficulty]);

    return () => clearInterval(interval);
  }, [gameActive, spawnDuck, difficulty, spawnRates]);

  // Handle duck click
  const handleDuckClick = (duckId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    
    if (!gameActive || shotsRemaining <= 0) return;

    const duck = ducks.find(d => d.id === duckId);
    if (!duck || duck.isHit) return;

    playSound('hit');
    setShotsRemaining(prev => prev - 1);
    setScore(prev => {
      const newScore = prev + 10;
      if (newScore > highScore) {
        setHighScore(newScore);
        localStorage.setItem('duckShooterHighScore', newScore.toString());
      }
      return newScore;
    });

    // Mark duck as hit and make it fall
    setDucks(prevDucks =>
      prevDucks.map(d =>
        d.id === duckId ? { ...d, isHit: true } : d
      )
    );

    // Remove duck after animation
    setTimeout(() => {
      setDucks(prevDucks => prevDucks.filter(d => d.id !== duckId));
    }, 500);
  };

  // Handle background click (miss)
  const handleBackgroundClick = () => {
    if (!gameActive || shotsRemaining <= 0) return;
    
    playSound('miss');
    setShotsRemaining(prev => prev - 1);
  };

  // Check game over
  useEffect(() => {
    if (gameActive && shotsRemaining <= 0) {
      setGameActive(false);
      setShowGameOver(true);
      playSound('gameOver');
    }
  }, [shotsRemaining, gameActive, playSound]);

  return (
    <div className="relative bg-gradient-to-b from-sky-300 via-sky-200 to-green-100 py-12 overflow-hidden">
      {/* Clouds background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-16 bg-white rounded-full blur-sm"></div>
        <div className="absolute top-20 right-20 w-40 h-20 bg-white rounded-full blur-sm"></div>
        <div className="absolute top-30 left-1/3 w-36 h-18 bg-white rounded-full blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            🦆 Duck Shooter Challenge!
          </h2>
          <p className="text-base text-gray-700 mb-4">
            You've made it this far! Time to have some fun! 🎯
          </p>
        </div>

        {/* Game controls */}
        <div className="max-w-4xl mx-auto mb-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-xl">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <Target className="w-4 h-4" />
                    <span>Score</span>
                  </div>
                  <div className="text-3xl font-bold text-green-600">{score}</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <Trophy className="w-4 h-4" />
                    <span>High Score</span>
                  </div>
                  <div className="text-3xl font-bold text-yellow-600">{highScore}</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <Zap className="w-4 h-4" />
                    <span>Shots</span>
                  </div>
                  <div className="text-3xl font-bold text-blue-600">{shotsRemaining}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {!gameActive && (
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value as 'easy' | 'medium' | 'hard')}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                )}
                
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                  title={soundEnabled ? 'Mute' : 'Unmute'}
                >
                  {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                </button>

                <button
                  onClick={startGame}
                  className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  {gameActive ? 'Restart' : 'Start Game'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Game area */}
        <div
          ref={gameAreaRef}
          onClick={handleBackgroundClick}
          className="relative bg-gradient-to-b from-sky-400/30 to-green-200/30 rounded-xl border-4 border-white/50 shadow-2xl overflow-hidden"
          style={{ 
            height: '400px',
            cursor: gameActive ? 'crosshair' : 'default'
          }}
        >
          {/* Game instructions or game over */}
          {!gameActive && !showGameOver && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
              <div className="bg-white/95 rounded-xl p-6 max-w-md text-center shadow-2xl">
                <h3 className="text-xl font-bold mb-3">How to Play</h3>
                <ul className="text-left space-y-1.5 mb-4 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Click on the ducks to shoot them</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>You have 20 shots to get the highest score</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Each duck is worth 10 points</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Missing a shot counts against your total</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Choose your difficulty level!</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-600">
                  Click "Start Game" to begin! 🎮
                </p>
              </div>
            </div>
          )}

          {showGameOver && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
              <div className="bg-white/95 rounded-xl p-6 max-w-md text-center shadow-2xl">
                <h3 className="text-2xl font-bold mb-3">Game Over! 🎮</h3>
                <div className="mb-6">
                  <p className="text-xl mb-2">Final Score:</p>
                  <p className="text-5xl font-bold text-green-600">{score}</p>
                  {score === highScore && score > 0 && (
                    <p className="text-lg text-yellow-600 mt-2">🎉 New High Score! 🎉</p>
                  )}
                </div>
                <p className="text-gray-600 mb-6">
                  {score >= 100 ? "Amazing! You're a sharpshooter! 🎯" :
                   score >= 50 ? "Great job! Keep practicing! 👍" :
                   "Nice try! Want to go again? 🦆"}
                </p>
                <button
                  onClick={startGame}
                  className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Play Again
                </button>
              </div>
            </div>
          )}

          {/* Ducks */}
          {ducks.map(duck => (
            <div
              key={duck.id}
              onClick={(e) => handleDuckClick(duck.id, e)}
              className={`absolute transition-all duration-100 ${
                duck.isHit ? 'animate-fall' : 'cursor-pointer hover:scale-110'
              }`}
              style={{
                left: `${duck.x}px`,
                top: duck.isHit ? `${duck.y + 200}px` : `${duck.y}px`,
                transform: `scaleX(${duck.direction}) ${duck.isHit ? 'rotate(90deg)' : ''}`,
                opacity: duck.isHit ? 0 : 1,
                width: `${duck.size}px`,
                height: `${duck.size}px`,
                pointerEvents: duck.isHit ? 'none' : 'auto'
              }}
            >
              <div className="text-6xl" style={{ fontSize: `${duck.size}px` }}>
                🦆
              </div>
            </div>
          ))}

          {/* Grass at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-green-600 to-green-400">
            <div className="absolute inset-0 opacity-50">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bottom-0 bg-green-700"
                  style={{
                    left: `${i * 5}%`,
                    width: '2px',
                    height: `${Math.random() * 30 + 20}px`,
                    transform: `rotate(${Math.random() * 10 - 5}deg)`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Fun message */}
        <div className="text-center mt-6">
          <p className="text-base text-gray-700">
            Having fun? Imagine what we can build for <span className="font-bold text-green-600">your business</span>! 🚀
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fall {
          from {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          to {
            transform: translateY(200px) rotate(90deg);
            opacity: 0;
          }
        }
        .animate-fall {
          animation: fall 0.5s ease-in forwards;
        }
      `}</style>
    </div>
  );
};

export default DuckShooterGame;
