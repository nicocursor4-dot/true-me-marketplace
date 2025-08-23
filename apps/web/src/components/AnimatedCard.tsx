'use client';

import React, { useState } from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: boolean;
  glowEffect?: boolean;
  onClick?: () => void;
}

export default function AnimatedCard({ 
  children, 
  className = '', 
  hoverScale = true, 
  glowEffect = false,
  onClick 
}: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        relative
        transition-all duration-500 ease-out
        ${hoverScale ? 'hover:scale-[1.02]' : ''}
        ${glowEffect && isHovered ? 'shadow-[0_20px_40px_rgba(184,134,11,0.3)]' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Glow effect overlay */}
      {glowEffect && (
        <div 
          className={`
            absolute inset-0 rounded-[inherit] pointer-events-none
            transition-opacity duration-500
            ${isHovered 
              ? 'opacity-100 bg-gradient-to-r from-[rgba(184,134,11,0.1)] to-[rgba(218,165,32,0.1)]' 
              : 'opacity-0'
            }
          `}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
