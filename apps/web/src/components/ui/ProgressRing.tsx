import React from 'react'
import { cn } from '@/lib/utils'

interface ProgressRingProps {
  progress: number // 0-100
  size?: 'small' | 'medium' | 'large'
  level?: 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond'
  children?: React.ReactNode
  className?: string
}

export function ProgressRing({ 
  progress, 
  size = 'medium', 
  level = 'gold',
  children,
  className 
}: ProgressRingProps) {
  const sizes = {
    small: { diameter: 40, stroke: 4 },
    medium: { diameter: 80, stroke: 6 },
    large: { diameter: 120, stroke: 8 }
  }

  const levelColors = {
    bronze: 'stroke-level-bronze',
    silver: 'stroke-level-silver', 
    gold: 'stroke-level-gold',
    platinum: 'stroke-level-platinum',
    diamond: 'stroke-level-diamond'
  }

  const { diameter, stroke } = sizes[size]
  const radius = (diameter - stroke) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className={cn("relative", className)} style={{ width: diameter, height: diameter }}>
      {/* Background circle */}
      <svg
        className="transform -rotate-90"
        width={diameter}
        height={diameter}
      >
        <circle
          cx={diameter / 2}
          cy={diameter / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={stroke}
          fill="transparent"
          className="text-glass-border opacity-30"
        />
        {/* Progress circle */}
        <circle
          cx={diameter / 2}
          cy={diameter / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={stroke}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={cn(levelColors[level], "transition-all duration-1000 ease-out")}
          style={{
            filter: 'drop-shadow(0 0 8px currentColor)'
          }}
        />
      </svg>
      
      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}
