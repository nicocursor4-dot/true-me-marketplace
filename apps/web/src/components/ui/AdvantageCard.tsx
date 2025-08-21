import React from 'react'
import { GlassCard } from './GlassCard'

interface AdvantageCardProps {
  icon: string
  title: string
  description: string
  status: 'active' | 'soon'
}

export function AdvantageCard({ icon, title, description, status }: AdvantageCardProps) {
  const statusBadge = status === 'active' ? (
    <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">
      Actif
    </span>
  ) : (
    <span className="px-2 py-1 text-xs bg-trueme-gold bg-opacity-20 text-trueme-gold rounded-full">
      Bientôt
    </span>
  )

  return (
    <GlassCard variant="small" className="text-center space-y-3 border-t-2 border-t-trueme-gold border-t-opacity-30">
      {/* Icon with glassmorphisme background */}
      <div className="flex justify-center">
        <div className="w-10 h-10 rounded-full bg-glass-gold backdrop-blur-sm flex items-center justify-center text-xl">
          {icon}
        </div>
      </div>
      
      {/* Title */}
      <h3 className="font-semibold text-trueme-black text-sm">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-xs text-trueme-secondary leading-relaxed">
        {description}
      </p>
      
      {/* Status badge */}
      <div className="flex justify-center">
        {statusBadge}
      </div>
    </GlassCard>
  )
}
