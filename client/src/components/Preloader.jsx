import React, { useState, useEffect } from 'react';

const Preloader = ({ logoSrc = 'https://i.postimg.cc/4dpjprbY/white-mt-logo.png' }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center flex-col gap-8 z-50">
      {/* Logo container with animation */}
      <div className="w-64 h-64 relative flex items-center justify-center">
        <img 
          src={logoSrc} 
          alt="Mount Diggers Logo" 
          className="w-48 h-48 object-contain animate-pulse"
        />
      </div>

      {/* Loading Bar */}
      <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Loading Text */}
      <div className="text-white font-bold">
        {progress}%
      </div>
    </div>
  );
};

export default Preloader;