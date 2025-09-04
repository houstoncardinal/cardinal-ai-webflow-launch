import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loading screen after a short delay
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 bg-white z-[9999] flex items-center justify-center"
      style={{ background: 'white' }}
    >
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mx-auto mb-4"></div>
        <div className="text-green-600 font-medium">Loading...</div>
      </div>
    </div>
  );
};

export default LoadingScreen; 