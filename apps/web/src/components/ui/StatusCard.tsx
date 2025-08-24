import React from 'react';
import { Crown, TrendingUp, Users } from 'lucide-react';
import { GlassCard } from './GlassCard'
import { ProgressRing } from './ProgressRing'

interface StatusCardProps {
  level: 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond'
  currentArticles: number
  targetArticles: number
  progress: number
  totalValue: string
  authenticityScore: number
}

export function StatusCard({
  level,
  currentArticles,
  targetArticles,
  progress,
  totalValue,
  authenticityScore
}: StatusCardProps) {
  const getStatusIcon = () => {
    switch (level.toUpperCase()) {
      case 'PLATINUM': return <Crown className="w-8 h-8 text-trueme-gold" />;
      case 'GOLD': return <TrendingUp className="w-8 h-8 text-trueme-gold" />;
      case 'SILVER': return <Users className="w-8 h-8 text-trueme-gold" />;
      default: return <Crown className="w-8 h-8 text-trueme-gold" />;
    }
  };

  const nextLevel = {
    bronze: 'SILVER',
    silver: 'GOLD',
    gold: 'PLATINUM', 
    platinum: 'DIAMOND',
    diamond: 'DIAMOND'
  }

  const articlesNeeded = targetArticles - currentArticles

  return (
    <GlassCard variant="hero" className="text-center">
      {/* Progress Ring */}
      <div className="flex justify-center mb-6">
        <ProgressRing progress={progress} size="large" level={level}>
          <div className="text-center">
            <div className="mb-4">{getStatusIcon()}</div>
            <div className="text-lg font-bold text-trueme-black uppercase">
              {level}
            </div>
          </div>
        </ProgressRing>
      </div>

      {/* Progress Text */}
      <div className="space-y-2 mb-6">
        <h2 className="text-xl font-semibold text-trueme-black">
          {currentArticles}/{targetArticles} articles
        </h2>
        <p className="text-trueme-secondary">
          {articlesNeeded > 0 
            ? `${articlesNeeded} articles pour ${nextLevel[level]}`
            : `Niveau ${level.toUpperCase()} atteint !`
          }
        </p>
        <p className="text-sm text-green-600 font-medium">
          Progression: +5 ce mois
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="space-y-1">
          <div className="text-2xl font-bold text-trueme-black">{currentArticles}</div>
          <div className="text-xs text-trueme-secondary uppercase tracking-wide">Articles</div>
        </div>
        <div className="space-y-1">
          <div className="text-lg font-bold text-trueme-gold">{totalValue}</div>
          <div className="text-xs text-trueme-secondary uppercase tracking-wide">Portfolio</div>
        </div>
        <div className="space-y-1">
          <div className="text-2xl font-bold text-trueme-black">{authenticityScore}%</div>
          <div className="text-xs text-trueme-secondary uppercase tracking-wide">Authenticity</div>
        </div>
      </div>
    </GlassCard>
  )
}
