import React from 'react';

interface CTAComponentProps {
  preheading?: string;
  mainHeading?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const CTAComponent: React.FC<CTAComponentProps> = ({
  preheading = "Think we're a good fit?",
  mainHeading = "Let's talk.",
  buttonText = "Say Hi!",
  onButtonClick = () => console.log('Button clicked'),
}) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[var(--snow-white)] via-[var(--alice-blue)] to-[var(--alice-blue)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Animated flowing lines background */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--teal-accent)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--emerald-accent)" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <path 
          d="M-100,100 Q200,50 400,100 T800,100" 
          stroke="url(#line-gradient)" 
          strokeWidth="2" 
          fill="none"
          className="animate-flow-1"
        />
        <path 
          d="M-100,200 Q250,150 500,200 T900,200" 
          stroke="url(#line-gradient)" 
          strokeWidth="2" 
          fill="none"
          className="animate-flow-2"
        />
        <path 
          d="M-100,300 Q300,250 600,300 T1000,300" 
          stroke="url(#line-gradient)" 
          strokeWidth="2" 
          fill="none"
          className="animate-flow-3"
        />
        <path 
          d="M800,50 Q900,100 950,200 T1000,400" 
          stroke="url(#line-gradient)" 
          strokeWidth="2" 
          fill="none"
          className="animate-flow-curve"
        />

        {/* Additional flowing lines for richer background */}
        <path 
          d="M-100,400 Q350,350 650,400 T1100,400" 
          stroke="url(#line-gradient)" 
          strokeWidth="2" 
          fill="none"
          className="animate-flow-4"
        />
        <path 
          d="M-120,500 Q380,450 700,500 T1150,500" 
          stroke="url(#line-gradient)" 
          strokeWidth="2" 
          fill="none"
          className="animate-flow-5"
        />
        <path 
          d="M-80,150 Q230,120 460,150 T920,150" 
          stroke="url(#line-gradient)" 
          strokeWidth="2" 
          fill="none"
          className="animate-flow-6"
        />
        <path 
          d="M700,120 Q820,180 900,260 T980,380" 
          stroke="url(#line-gradient)" 
          strokeWidth="2" 
          fill="none"
          className="animate-flow-7"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Pre-heading */}
        <h2 className="text-[var(--teal-accent)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-down">
          {preheading}
        </h2>

        {/* Main heading */}
        <h1 className="text-[var(--navy-dark)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-12 animate-scale-in">
          {mainHeading}
        </h1>

        {/* Custom Circular CTA Button (no external Button component) */}
        <button
          onClick={onButtonClick}
          className="group relative inline-flex items-center justify-center w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-[var(--teal-accent)] bg-transparent overflow-hidden transition-all duration-500 ease-out hover:scale-110 active:scale-95 animate-fade-in-up"
          aria-label={buttonText}
        >
          {/* Hover background fill */}
          <span className="absolute inset-0 bg-[var(--teal-accent)] scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center rounded-full" />
          
          {/* Text */}
          <span className="relative z-10 text-[var(--teal-accent)] group-hover:text-[var(--snow-white)] text-lg sm:text-xl font-semibold transition-colors duration-500 px-6">
            {buttonText}
          </span>
          
          {/* Subtle inner glow on hover */}
          <span className="absolute inset-4 rounded-full bg-[var(--emerald-accent)] opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
        </button>
      </div>

      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes flow-1 {
          0%, 100% {
            d: path('M-100,100 Q200,50 400,100 T800,100');
          }
          50% {
            d: path('M-100,100 Q200,150 400,100 T800,100');
          }
        }

        @keyframes flow-2 {
          0%, 100% {
            d: path('M-100,200 Q250,150 500,200 T900,200');
          }
          50% {
            d: path('M-100,200 Q250,250 500,200 T900,200');
          }
        }

        @keyframes flow-3 {
          0%, 100% {
            d: path('M-100,300 Q300,250 600,300 T1000,300');
          }
          50% {
            d: path('M-100,300 Q300,350 600,300 T1000,300');
          }
        }

        @keyframes flow-curve {
          0%, 100% {
            d: path('M800,50 Q900,100 950,200 T1000,400');
          }
          50% {
            d: path('M800,50 Q850,100 950,200 T1000,400');
          }
        }

        @keyframes flow-4 {
          0%, 100% {
            d: path('M-100,400 Q350,350 650,400 T1100,400');
          }
          50% {
            d: path('M-100,400 Q350,450 650,400 T1100,400');
          }
        }

        @keyframes flow-5 {
          0%, 100% {
            d: path('M-120,500 Q380,450 700,500 T1150,500');
          }
          50% {
            d: path('M-120,500 Q380,550 700,500 T1150,500');
          }
        }

        @keyframes flow-6 {
          0%, 100% {
            d: path('M-80,150 Q230,120 460,150 T920,150');
          }
          50% {
            d: path('M-80,150 Q230,180 460,150 T920,150');
          }
        }

        @keyframes flow-7 {
          0%, 100% {
            d: path('M700,120 Q820,180 900,260 T980,380');
          }
          50% {
            d: path('M700,120 Q780,160 900,260 T980,380');
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 1s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-flow-1 {
          animation: flow-1 8s ease-in-out infinite;
        }

        .animate-flow-2 {
          animation: flow-2 10s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-flow-3 {
          animation: flow-3 12s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-flow-curve {
          animation: flow-curve 9s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        .animate-flow-4 {
          animation: flow-4 14s ease-in-out infinite;
          animation-delay: 3s;
        }

        .animate-flow-5 {
          animation: flow-5 16s ease-in-out infinite;
          animation-delay: 4s;
        }

        .animate-flow-6 {
          animation: flow-6 11s ease-in-out infinite;
          animation-delay: 2.5s;
        }

        .animate-flow-7 {
          animation: flow-7 13s ease-in-out infinite;
          animation-delay: 3.5s;
        }
      `}</style>
    </div>
  );
};

export default CTAComponent;