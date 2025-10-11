import { useState, useEffect, useRef, useCallback } from 'react';
import { Volume2, VolumeX, Trophy, Mail, Share2, Sparkles, Gift, Star, DollarSign, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from '@/hooks/use-toast';

interface FallingItem {
  id: number;
  x: number;
  y: number;
  speed: number;
  type: 'coin' | 'star' | 'gift' | 'diamond' | 'special';
  value: number;
  emoji: string;
  discount: string;
}

interface GameResult {
  score: number;
  itemsCaught: number;
  discount: string;
  discountCode: string;
}

const DiscountRushGame = () => {
  const [items, setItems] = useState<FallingItem[]>([]);
  const [score, setScore] = useState(0);
  const [itemsCaught, setItemsCaught] = useState(0);
  const [basketPosition, setBasketPosition] = useState(50);
  const [gameActive, setGameActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [showResults, setShowResults] = useState(false);
  const [gameResult, setGameResult] = useState<GameResult | null>(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('discountRushHighScore');
    return saved ? parseInt(saved) : 0;
  });
  
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const itemIdCounter = useRef(0);
  const animationFrameRef = useRef<number>();
  const mouseXRef = useRef<number>(0);
  const touchXRef = useRef<number>(0);
  const { toast } = useToast();

  // Game settings based on difficulty
  const gameSettings = {
    easy: { spawnRate: 800, speedMultiplier: 0.7, itemCount: 4 },
    medium: { spawnRate: 600, speedMultiplier: 1, itemCount: 5 },
    hard: { spawnRate: 400, speedMultiplier: 1.4, itemCount: 6 }
  };

  // Item types with their properties
  const itemTypes = [
    { type: 'coin' as const, emoji: '💰', value: 10, weight: 40, discount: '5% OFF' },
    { type: 'star' as const, emoji: '⭐', value: 20, weight: 30, discount: '10% OFF' },
    { type: 'gift' as const, emoji: '🎁', value: 30, weight: 20, discount: '15% OFF' },
    { type: 'diamond' as const, emoji: '💎', value: 50, weight: 8, discount: '20% OFF' },
    { type: 'special' as const, emoji: '🎯', value: 100, weight: 2, discount: '30% OFF' }
  ];

  // Play sound effect
  const playSound = useCallback((type: 'catch' | 'special' | 'gameOver' | 'claim') => {
    if (!soundEnabled) return;
    
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    if (type === 'catch') {
      oscillator.frequency.value = 600;
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } else if (type === 'special') {
      oscillator.frequency.value = 1200;
      gainNode.gain.setValueAtTime(0.4, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    } else if (type === 'gameOver') {
      oscillator.frequency.value = 400;
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
    } else if (type === 'claim') {
      oscillator.frequency.value = 800;
      gainNode.gain.setValueAtTime(0.4, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.4);
    }
  }, [soundEnabled]);

  // Calculate discount based on score
  const calculateDiscount = useCallback((finalScore: number): { discount: string; code: string } => {
    if (finalScore >= 500) return { discount: '30% OFF', code: 'RUSH30' };
    if (finalScore >= 350) return { discount: '25% OFF', code: 'RUSH25' };
    if (finalScore >= 250) return { discount: '20% OFF', code: 'RUSH20' };
    if (finalScore >= 150) return { discount: '15% OFF', code: 'RUSH15' };
    if (finalScore >= 80) return { discount: '10% OFF', code: 'RUSH10' };
    return { discount: '5% OFF', code: 'RUSH5' };
  }, []);

  // Start game
  const startGame = () => {
    setScore(0);
    setItemsCaught(0);
    setItems([]);
    setTimeLeft(30);
    setGameActive(true);
    setShowResults(false);
    setGameResult(null);
    setEmail('');
    setName('');
    setPhone('');
    setEmailSubmitted(false);
    setBasketPosition(50);
  };

  // Get random item type based on weights
  const getRandomItemType = () => {
    const totalWeight = itemTypes.reduce((sum, item) => sum + item.weight, 0);
    let random = Math.random() * totalWeight;
    
    for (const item of itemTypes) {
      random -= item.weight;
      if (random <= 0) return item;
    }
    return itemTypes[0];
  };

  // Spawn item
  const spawnItem = useCallback(() => {
    if (!gameActive || !gameAreaRef.current) return;
    
    const itemType = getRandomItemType();
    const width = gameAreaRef.current.offsetWidth;
    
    const newItem: FallingItem = {
      id: itemIdCounter.current++,
      x: Math.random() * (width - 60) + 30,
      y: -50,
      speed: (2 + Math.random() * 2) * gameSettings[difficulty].speedMultiplier,
      type: itemType.type,
      value: itemType.value,
      emoji: itemType.emoji,
      discount: itemType.discount
    };
    
    setItems(prev => [...prev, newItem]);
  }, [gameActive, difficulty]);

  // Move items and check collisions
  useEffect(() => {
    if (!gameActive) return;

    const animate = () => {
      setItems(prevItems => {
        const basketX = basketPosition;
        const basketWidth = 120;
        const basketY = gameAreaRef.current ? gameAreaRef.current.offsetHeight - 80 : 400;

        const updated = prevItems
          .map(item => ({
            ...item,
            y: item.y + item.speed
          }))
          .filter(item => {
            // Check collision with basket
            const itemCenterX = item.x;
            const itemCenterY = item.y;
            
            if (
              itemCenterY >= basketY - 20 &&
              itemCenterY <= basketY + 40 &&
              itemCenterX >= (basketX - basketWidth / 2) &&
              itemCenterX <= (basketX + basketWidth / 2)
            ) {
              // Item caught!
              setScore(prev => prev + item.value);
              setItemsCaught(prev => prev + 1);
              playSound(item.type === 'special' ? 'special' : 'catch');
              return false;
            }
            
            // Remove items that fell off screen
            if (gameAreaRef.current && item.y > gameAreaRef.current.offsetHeight + 50) {
              return false;
            }
            
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
  }, [gameActive, basketPosition, playSound]);

  // Spawn items periodically
  useEffect(() => {
    if (!gameActive) return;

    const interval = setInterval(() => {
      spawnItem();
    }, gameSettings[difficulty].spawnRate);

    return () => clearInterval(interval);
  }, [gameActive, spawnItem, difficulty]);

  // Timer countdown
  useEffect(() => {
    if (!gameActive || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setGameActive(false);
          const discountData = calculateDiscount(score);
          setGameResult({
            score,
            itemsCaught,
            discount: discountData.discount,
            discountCode: discountData.code
          });
          setShowResults(true);
          playSound('gameOver');
          
          if (score > highScore) {
            setHighScore(score);
            localStorage.setItem('discountRushHighScore', score.toString());
          }
          
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameActive, timeLeft, score, itemsCaught, calculateDiscount, playSound, highScore]);

  // Mouse movement
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!gameActive || !gameAreaRef.current) return;
    const rect = gameAreaRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    mouseXRef.current = Math.max(10, Math.min(90, percentage));
    setBasketPosition(mouseXRef.current);
  };

  // Touch movement
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!gameActive || !gameAreaRef.current) return;
    const rect = gameAreaRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    touchXRef.current = Math.max(10, Math.min(90, percentage));
    setBasketPosition(touchXRef.current);
  };

  // Submit email to claim discount
  const handleClaimDiscount = async () => {
    if (!email || !name) {
      toast({
        title: "Missing Information",
        description: "Please enter your name and email to claim your discount!",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    playSound('claim');
    setEmailSubmitted(true);
    
    // Here you would typically send this to your backend/CRM
    console.log('Lead captured:', { name, email, phone, score, discount: gameResult?.discount });
    
    toast({
      title: "🎉 Discount Claimed!",
      description: `Your ${gameResult?.discount} code: ${gameResult?.discountCode}`,
    });
  };

  // Share score
  const handleShare = () => {
    const shareText = `I just scored ${score} points in Discount Rush and won ${gameResult?.discount}! Can you beat my score? 🎮`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Discount Rush Game',
        text: shareText,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareText);
      toast({
        title: "Copied to Clipboard!",
        description: "Share your score with friends!",
      });
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 py-12 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-yellow-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-blue-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
              💰 Discount Rush!
            </h2>
            <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
          </div>
          <p className="text-lg md:text-xl text-white/90 font-medium">
            Catch falling deals & unlock YOUR exclusive discount! 🎁
          </p>
        </div>

        {/* Game controls */}
        <div className="max-w-5xl mx-auto mb-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-2xl border-4 border-white/50">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center gap-4 md:gap-8 flex-wrap">
                <div className="text-center">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <DollarSign className="w-4 h-4" />
                    <span className="font-semibold">Score</span>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {score}
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <Gift className="w-4 h-4" />
                    <span className="font-semibold">Caught</span>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-orange-600">{itemsCaught}</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <Star className="w-4 h-4" />
                    <span className="font-semibold">Time</span>
                  </div>
                  <div className={`text-3xl md:text-4xl font-bold ${timeLeft <= 10 ? 'text-red-600 animate-pulse' : 'text-green-600'}`}>
                    {timeLeft}s
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                    <Trophy className="w-4 h-4" />
                    <span className="font-semibold">Best</span>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-yellow-600">{highScore}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                {!gameActive && !showResults && (
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value as 'easy' | 'medium' | 'hard')}
                    className="px-4 py-2 border-2 border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white font-semibold"
                  >
                    <option value="easy">🟢 Easy</option>
                    <option value="medium">🟡 Medium</option>
                    <option value="hard">🔴 Hard</option>
                  </select>
                )}
                
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className="p-3 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 transition-all transform hover:scale-105"
                  title={soundEnabled ? 'Mute' : 'Unmute'}
                >
                  {soundEnabled ? <Volume2 className="w-5 h-5 text-purple-700" /> : <VolumeX className="w-5 h-5 text-purple-700" />}
                </button>

                {!showResults && (
                  <Button
                    onClick={startGame}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bold rounded-xl hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg text-base"
                  >
                    {gameActive ? '🔄 Restart' : '🎮 Start Game'}
                  </Button>
                )}
              </div>
            </div>

            {/* Item values legend */}
            {!gameActive && !showResults && (
              <div className="mt-4 pt-4 border-t-2 border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Catch items to score points:</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {itemTypes.map(item => (
                    <div key={item.type} className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 px-3 py-1.5 rounded-lg">
                      <span className="text-2xl">{item.emoji}</span>
                      <span className="text-sm font-bold text-purple-700">{item.value} pts</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Game area */}
        <div
          ref={gameAreaRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative bg-gradient-to-b from-purple-900/30 to-pink-900/30 rounded-2xl border-4 border-white/50 shadow-2xl overflow-hidden backdrop-blur-sm"
          style={{ 
            height: '500px',
            cursor: gameActive ? 'none' : 'default',
            touchAction: 'none'
          }}
        >
          {/* Game instructions */}
          {!gameActive && !showResults && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md">
              <div className="bg-white/95 rounded-2xl p-6 md:p-8 max-w-md text-center shadow-2xl border-4 border-purple-300">
                <Award className="w-16 h-16 mx-auto mb-4 text-purple-600" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  How to Play
                </h3>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🖱️</span>
                    <span className="text-sm md:text-base"><strong>Move</strong> your mouse or finger to control the basket</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">💰</span>
                    <span className="text-sm md:text-base"><strong>Catch</strong> falling items to score points</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">⏱️</span>
                    <span className="text-sm md:text-base">You have <strong>30 seconds</strong> to maximize your score</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🎁</span>
                    <span className="text-sm md:text-base">Higher score = <strong>BIGGER DISCOUNT!</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <span className="text-sm md:text-base">Catch the <strong>special items</strong> for bonus points!</span>
                  </li>
                </ul>
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-4 mb-4">
                  <p className="text-sm font-bold text-purple-800">
                    💎 Score 500+ points = 30% OFF! 💎
                  </p>
                </div>
                <p className="text-xs text-gray-600">
                  Click "Start Game" when ready! 🚀
                </p>
              </div>
            </div>
          )}

          {/* Results screen with lead capture */}
          {showResults && gameResult && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md overflow-y-auto py-4">
              <div className="bg-white/98 rounded-2xl p-6 md:p-8 max-w-lg w-full mx-4 text-center shadow-2xl border-4 border-yellow-400">
                {!emailSubmitted ? (
                  <>
                    <div className="mb-6">
                      <div className="inline-block p-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mb-4 animate-bounce">
                        <Trophy className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Awesome Job! 🎉
                      </h3>
                      <p className="text-gray-600 mb-4">You've earned an exclusive discount!</p>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-6 border-2 border-purple-200">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Your Score</p>
                          <p className="text-4xl font-bold text-purple-600">{gameResult.score}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Items Caught</p>
                          <p className="text-4xl font-bold text-orange-600">{gameResult.itemsCaught}</p>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl p-4 transform hover:scale-105 transition-transform">
                        <p className="text-white text-sm font-semibold mb-1">YOU UNLOCKED:</p>
                        <p className="text-white text-5xl font-bold drop-shadow-lg">{gameResult.discount}</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <p className="text-lg font-bold text-gray-800">
                        Enter your details to claim your discount! 🎁
                      </p>
                      <Input
                        type="text"
                        placeholder="Your Name *"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border-2 border-purple-300 focus:border-purple-500 text-base"
                      />
                      <Input
                        type="email"
                        placeholder="Your Email *"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-2 border-purple-300 focus:border-purple-500 text-base"
                      />
                      <Input
                        type="tel"
                        placeholder="Phone Number (Optional)"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="border-2 border-purple-300 focus:border-purple-500 text-base"
                      />
                    </div>

                    <Button
                      onClick={handleClaimDiscount}
                      className="w-full py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bold rounded-xl hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg text-lg mb-4"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Claim My {gameResult.discount} Discount!
                    </Button>

                    <p className="text-xs text-gray-500">
                      🔒 Your information is safe and will only be used to send you your discount code.
                    </p>
                  </>
                ) : (
                  <>
                    <div className="mb-6">
                      <div className="inline-block p-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mb-4">
                        <Award className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4 text-green-600">
                        Discount Claimed! 🎉
                      </h3>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6 border-2 border-green-300">
                      <p className="text-lg font-semibold text-gray-800 mb-3">Your Discount Code:</p>
                      <div className="bg-white rounded-lg p-4 mb-4">
                        <p className="text-3xl font-bold text-purple-600 font-mono tracking-wider">
                          {gameResult.discountCode}
                        </p>
                      </div>
                      <p className="text-sm text-gray-600">
                        Check your email for details on how to redeem your {gameResult.discount} discount!
                      </p>
                    </div>

                    <div className="space-y-4">
                      <Button
                        onClick={handleShare}
                        className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg"
                      >
                        <Share2 className="w-5 h-5 mr-2" />
                        Share Your Score!
                      </Button>
                      
                      <Button
                        onClick={startGame}
                        className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
                      >
                        Play Again & Beat Your Score!
                      </Button>
                    </div>

                    <p className="text-sm text-gray-600 mt-6">
                      Want an even better deal? Play again to unlock higher discounts! 🚀
                    </p>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Falling items */}
          {items.map(item => (
            <div
              key={item.id}
              className="absolute transition-none pointer-events-none"
              style={{
                left: `${item.x}px`,
                top: `${item.y}px`,
                fontSize: '48px',
                userSelect: 'none',
                filter: item.type === 'special' ? 'drop-shadow(0 0 10px gold)' : 'none'
              }}
            >
              {item.emoji}
            </div>
          ))}

          {/* Basket */}
          {gameActive && (
            <div
              className="absolute bottom-12 transition-none pointer-events-none"
              style={{
                left: `${basketPosition}%`,
                transform: 'translateX(-50%)',
                fontSize: '80px'
              }}
            >
              🧺
            </div>
          )}

          {/* Ground decoration */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-purple-800/40 to-transparent"></div>
        </div>

        {/* Bottom message */}
        <div className="text-center mt-6">
          <p className="text-lg text-white/90 font-medium">
            Play to win exclusive discounts on our services! 🎯
          </p>
          <p className="text-sm text-white/75 mt-2">
            The better you play, the bigger your discount! 💝
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscountRushGame;
