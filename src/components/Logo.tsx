import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  variant?: 'badge' | 'horizontal';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'horizontal',
}) => {
  const sizeClasses = {
    sm: 'h-7 sm:h-9',
    md: 'h-8 sm:h-12',
    lg: 'h-14 sm:h-20',
    hero: 'h-20 sm:h-32 md:h-36',
  };

  const imageSrc =
    variant === 'badge' ? '/home4fitness_logo_badge.png' : '/home4fitness_logo_horizontal.png';

  return (
    <div
      className={`inline-flex items-center select-none px-2 py-1 sm:px-3 sm:py-1.5 bg-black/60 backdrop-blur-md border border-zinc-800/80 rounded-xl shadow-[0_0_20px_rgba(229,9,20,0.25)] hover:shadow-[0_0_30px_rgba(229,9,20,0.45)] hover:border-red-600/50 transition-all duration-300 ${className}`}
    >
      <img
        src={imageSrc}
        alt="HOME 4 FITNESS — MORE THAN JUST A GYM"
        className={`${sizeClasses[size]} w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(229,9,20,0.4)] transition-transform duration-300 hover:scale-105`}
        onError={(e) => {
          // Fallback to default logo.png
          (e.target as HTMLImageElement).src = '/logo.png';
        }}
      />
    </div>
  );
};
