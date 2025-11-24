import React from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  variant?: 'small' | 'medium' | 'large' | 'hero'
  blur?: 'light' | 'medium' | 'strong'
}

export function GlassCard({ 
  children, 
  className, 
  variant = 'medium',
  blur = 'medium'
}: GlassCardProps) {
  const sizeClasses = {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8',
    hero: 'p-8'
  }

  const blurClasses = {
    light: 'backdrop-blur-sm',
    medium: 'backdrop-blur-glass',
    strong: 'backdrop-blur-strong'
  }

  return (
    <div
      className={cn(
        // Base glassmorphisme styles
        'bg-glass-white border border-glass-border rounded-xl shadow-glass-medium',
        blurClasses[blur],
        sizeClasses[variant],
        className
      )}
    >
      {children}
    </div>
  )
}
