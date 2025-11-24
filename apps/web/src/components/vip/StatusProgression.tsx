'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Star, Crown, Diamond, Sparkles, ArrowRight, Lock, CheckCircle } from 'lucide-react'

const statusLevels = [
  {
    id: 'bronze',
    name: 'BRONZE',
    range: '0-9 articles',
    icon: <Shield className="w-8 h-8" />,
    color: 'from-amber-600 to-amber-800',
    requirements: ['Inscription VIP', 'Premier article authentifié', 'Profil complété'],
    benefits: ['Accès salon Bronze', 'Support prioritaire', 'Badge Bronze']
  },
  {
    id: 'silver', 
    name: 'SILVER',
    range: '10-19 articles',
    icon: <Star className="w-8 h-8" />,
    color: 'from-gray-400 to-gray-600',
    requirements: ['10 articles authentifiés', 'Note vendeur > 4.5', 'Activité régulière'],
    benefits: ['Accès salon Silver', 'Collecte gratuite mensuelle', 'Réductions exclusives']
  },
  {
    id: 'gold',
    name: 'GOLD',
    range: '20-29 articles', 
    icon: <Crown className="w-8 h-8" />,
    color: 'from-yellow-400 to-yellow-600',
    requirements: ['20 articles authentifiés', 'Parrainage d\'un membre', 'Participation communautaire'],
    benefits: ['Accès salon Gold', 'Personal shopper junior', 'Événements privés']
  },
  {
    id: 'platinum',
    name: 'PLATINUM',
    range: '30-49 articles',
    icon: <Diamond className="w-8 h-8" />,
    color: 'from-slate-300 to-slate-500', 
    requirements: ['30 articles authentifiés', 'Certification expertise', 'Missions accomplies'],
    benefits: ['Accès salon Platinum', 'Collecte illimitée', 'QR Code personnalisé']
  },
  {
    id: 'diamond',
    name: 'DIAMOND',
    range: '50+ articles',
    icon: <Sparkles className="w-8 h-8" />,
    color: 'from-blue-400 to-purple-600',
    requirements: ['50+ articles authentifiés', 'Ambassadeur confirmé', 'Excellence reconnue'],
    benefits: ['Accès tous salons', 'Concierge dédié', 'Revenus partagés']
  }
]

export default function StatusProgression() {
  const [activeLevel, setActiveLevel] = useState('gold')
  const [userProgress] = useState({
    currentLevel: 'silver',
    currentCount: 15,
    nextLevelCount: 20,
    totalScore: 2340
  })

  const currentLevelIndex = statusLevels.findIndex(l => l.id === userProgress.currentLevel)
  const activeLevelData = statusLevels.find(l => l.id === activeLevel)

  return (
    <div className="max-w-7xl mx-auto">
      {/* User Progress Bar */}
      <div className="bg-white rounded-2xl p-4 md:p-8 mb-8 md:mb-12 shadow-lg">
        <div className="text-center mb-6 md:mb-8">
          <h3 className="text-xl md:text-2xl font-semibold text-trueme mb-2">Votre Progression Actuelle</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-r ${statusLevels[currentLevelIndex].color} flex items-center justify-center text-white`}>
              {statusLevels[currentLevelIndex].icon}
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-trueme">{statusLevels[currentLevelIndex].name}</div>
              <div className="text-sm md:text-base text-gray-600">{userProgress.currentCount} / {userProgress.nextLevelCount} articles</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${statusLevels[currentLevelIndex].color} relative`}
              initial={{ width: 0 }}
              animate={{ width: `${(userProgress.currentCount / userProgress.nextLevelCount) * 100}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            </motion.div>
          </div>
          <div className="flex justify-between mt-2 text-xs md:text-sm text-gray-600">
            <span>{userProgress.currentCount} articles</span>
            <span>{userProgress.nextLevelCount - userProgress.currentCount} restants</span>
          </div>
        </div>

        <div className="mt-4 md:mt-6 text-center">
          <span className="text-xs md:text-sm text-gray-600">Score Total: </span>
          <span className="text-base md:text-lg font-bold text-trueme-gold">{userProgress.totalScore.toLocaleString()} pts</span>
        </div>
      </div>

      {/* Status Levels Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 mb-8 md:mb-12">
        {statusLevels.map((level, index) => {
          const isUnlocked = index <= currentLevelIndex
          const isCurrent = level.id === userProgress.currentLevel
          const isActive = level.id === activeLevel

          return (
            <motion.div
              key={level.id}
              className={`relative p-4 md:p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                isActive 
                  ? 'ring-2 ring-trueme-gold shadow-xl' 
                  : 'hover:shadow-lg'
              } ${
                isUnlocked ? 'bg-white' : 'bg-gray-100'
              }`}
              onClick={() => setActiveLevel(level.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {isCurrent && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-trueme-gold text-black px-3 py-1 rounded-full text-xs font-bold">
                  ACTUEL
                </div>
              )}

              <div className="text-center">
                <div className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-2xl flex items-center justify-center text-white shadow-lg ${
                  isUnlocked 
                    ? `bg-gradient-to-r ${level.color}` 
                    : 'bg-gray-400'
                }`}>
                  {isUnlocked ? level.icon : <Lock className="w-8 h-8" />}
                </div>

                <h3 className={`text-sm md:text-lg font-bold mb-1 md:mb-2 ${isUnlocked ? 'text-trueme' : 'text-gray-500'}`}>
                  {level.name}
                </h3>
                <p className={`text-xs md:text-sm ${isUnlocked ? 'text-gray-600' : 'text-gray-400'}`}>
                  {level.range}
                </p>

                {isCurrent && (
                  <div className="mt-3">
                    <CheckCircle className="w-5 h-5 text-trueme-gold mx-auto" />
                  </div>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Level Details */}
      <motion.div
        key={activeLevel}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-trueme/5 to-trueme-gold/5 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          <div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 md:mb-6">
              <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r ${activeLevelData?.color} flex items-center justify-center text-white flex-shrink-0`}>
                {activeLevelData?.icon}
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-trueme">{activeLevelData?.name}</h2>
                <p className="text-sm md:text-base text-gray-600">{activeLevelData?.range}</p>
              </div>
            </div>

            <div className="mb-6 md:mb-8">
              <h4 className="text-lg md:text-xl font-semibold text-trueme mb-3 md:mb-4">Prérequis</h4>
              <ul className="space-y-3">
                {activeLevelData?.requirements.map((req, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <ArrowRight className="w-4 h-4 text-trueme-gold" />
                    <span className="text-sm md:text-base text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-semibold text-trueme mb-3 md:mb-4">Avantages Exclusifs</h4>
            <div className="space-y-3 md:space-y-4">
              {activeLevelData?.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/70 rounded-xl border border-white/50"
                >
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-trueme-gold/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-trueme-gold" />
                  </div>
                  <span className="text-sm md:text-base text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 md:mt-8">
              <button className="w-full py-3 md:py-4 bg-trueme-gold text-black font-semibold rounded-2xl hover:bg-trueme-gold/90 transition-all text-sm md:text-base">
                Découvrir ce Niveau
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
