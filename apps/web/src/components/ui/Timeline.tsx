import React from 'react'
import { GlassCard } from './GlassCard'

interface TimelineEvent {
  date: string
  title: string
  status: 'completed' | 'current' | 'future'
}

interface TimelineProps {
  events: TimelineEvent[]
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-trueme-black mb-6">Votre parcours</h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-trueme-gold to-trueme-gold opacity-30"></div>
        
        {events.map((event, index) => {
          const isCompleted = event.status === 'completed'
          const isCurrent = event.status === 'current'
          const isFuture = event.status === 'future'
          
          return (
            <div key={index} className="relative flex items-start space-x-6 mb-8">
              {/* Timeline dot */}
              <div className={`
                relative z-10 w-8 h-8 rounded-full flex items-center justify-center border-2
                ${isCompleted ? 'bg-trueme-gold border-trueme-gold text-white' : ''}
                ${isCurrent ? 'bg-trueme-gold border-trueme-gold text-white animate-pulse' : ''}
                ${isFuture ? 'bg-gray-200 border-gray-300 text-gray-400' : ''}
              `}>
                {isCompleted && '✓'}
                {isCurrent && '🏆'}
                {isFuture && '○'}
              </div>
              
              {/* Timeline content */}
              <div className="flex-1 pb-8">
                <GlassCard 
                  variant="small" 
                  className={`
                    transition-all duration-300
                    ${isCurrent ? 'border-trueme-gold border-opacity-50 shadow-glass-glow' : ''}
                    ${isFuture ? 'opacity-60' : ''}
                  `}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-trueme-black">
                        {event.title}
                      </span>
                      {isCurrent && (
                        <span className="px-2 py-1 text-xs bg-trueme-gold text-white rounded-full">
                          ACTUEL
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-trueme-secondary">
                      {event.date}
                    </p>
                  </div>
                </GlassCard>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
