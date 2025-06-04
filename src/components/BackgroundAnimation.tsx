
import React from "react";

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Gradient Waves */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#34b2ff]/5 via-transparent to-[#2278ad]/3 animate-wave-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-[#2278ad]/4 via-transparent to-[#34b2ff]/2 animate-wave-medium"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#34b2ff]/3 to-transparent animate-wave-fast"></div>
      </div>

      {/* Flowing Lines */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path
            d="M0,300 Q300,200 600,300 T1200,300"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            className="animate-draw-line"
          />
          <path
            d="M0,500 Q400,400 800,500 T1200,500"
            stroke="url(#gradient2)"
            strokeWidth="1.5"
            fill="none"
            className="animate-draw-line delay-1000"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#34b2ff" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#34b2ff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#2278ad" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2278ad" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#34b2ff" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#2278ad" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default BackgroundAnimation;
