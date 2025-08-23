'use client';

import React, { useEffect, useState } from 'react';

interface StatusProgressRingProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  animationDelay?: number;
  showPercentage?: boolean;
  label?: string;
}

export default function StatusProgressRing({
  progress,
  size = 120,
  strokeWidth = 8,
  color = '#B8860B',
  animationDelay = 0,
  showPercentage = true,
  label
}: StatusProgressRingProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedProgress / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Animate progress from 0 to target value
      let currentProgress = 0;
      const increment = progress / 60; // 60 frames for smooth animation
      
      const animationTimer = setInterval(() => {
        currentProgress += increment;
        if (currentProgress >= progress) {
          currentProgress = progress;
          clearInterval(animationTimer);
        }
        setAnimatedProgress(currentProgress);
      }, 16); // ~60fps
      
      return () => clearInterval(animationTimer);
    }, animationDelay);

    return () => clearTimeout(timer);
  }, [progress, animationDelay]);

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width={size}
        height={size}
        className={`transform -rotate-90 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255,255,255,0.2)"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="transition-all duration-300"
        />
        
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
          style={{
            filter: `drop-shadow(0 0 8px ${color}30)`
          }}
        />
        
        {/* Animated glow effect */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth * 0.5}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="opacity-50 transition-all duration-1000 ease-out animate-pulse"
        />
      </svg>
      
      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {showPercentage && (
          <span 
            className={`text-lg font-bold text-[#1C1C1E] transition-all duration-500 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
            style={{ transitionDelay: `${animationDelay + 300}ms` }}
          >
            {Math.round(animatedProgress)}%
          </span>
        )}
        {label && (
          <span 
            className={`text-xs text-[#6B6B6B] mt-1 transition-all duration-500 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
            style={{ transitionDelay: `${animationDelay + 500}ms` }}
          >
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
