
import { Truck, Package, MapPin } from "lucide-react";

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Gradient Waves */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#34b2ff]/5 via-transparent to-[#2278ad]/3 animate-wave-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-[#2278ad]/4 via-transparent to-[#34b2ff]/2 animate-wave-medium"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#34b2ff]/3 to-transparent animate-wave-fast"></div>
      </div>

      {/* Floating Delivery Icons */}
      <div className="absolute inset-0">
        {/* Floating Truck */}
        <div className="absolute top-1/4 left-1/4 animate-float-1">
          <Truck className="w-8 h-8 text-[#34b2ff]/20" />
        </div>
        
        {/* Floating Package */}
        <div className="absolute top-3/4 right-1/4 animate-float-2">
          <Package className="w-6 h-6 text-[#2278ad]/25" />
        </div>
        
        {/* Floating Map Pin */}
        <div className="absolute top-1/2 right-1/3 animate-float-3">
          <MapPin className="w-7 h-7 text-[#34b2ff]/15" />
        </div>
        
        {/* Additional Small Elements */}
        <div className="absolute top-1/6 right-1/6 animate-float-1 delay-1000">
          <div className="w-3 h-3 bg-[#34b2ff]/20 rounded-full"></div>
        </div>
        
        <div className="absolute bottom-1/4 left-1/6 animate-float-2 delay-2000">
          <div className="w-2 h-2 bg-[#2278ad]/25 rounded-full"></div>
        </div>
        
        <div className="absolute top-1/3 left-1/2 animate-float-3 delay-500">
          <div className="w-4 h-4 bg-[#34b2ff]/15 rounded-full"></div>
        </div>
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
