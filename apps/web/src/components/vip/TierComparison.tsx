'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Crown, Check, Sparkles, Shield, Camera, Users, Gift, Zap, Star, Diamond } from 'lucide-react'

const tiers = [
  {
    id: 'gold',
    name: 'VIP GOLD',
    price: 299,
    originalPrice: 399,
    currency: 'AED/mois',
    popular: false,
    icon: <Crown className="w-8 h-8" />,
    color: 'from-yellow-400 to-yellow-600',
    features: [
      { text: 'Statut Bronze à Silver (0-19 articles)', icon: <Shield className="w-4 h-4" /> },
      { text: 'Accès au salon Gold exclusif', icon: <Users className="w-4 h-4" /> },
      { text: 'Badge Gold visible sur profil', icon: <Star className="w-4 h-4" /> },
      { text: 'Collecte VIP incluse (2/mois)', icon: <Camera className="w-4 h-4" /> },
      { text: 'Shooting professionnel', icon: <Camera className="w-4 h-4" /> },
      { text: 'Authentification renforcée', icon: <Shield className="w-4 h-4" /> },
      { text: 'Support prioritaire 24/7', icon: <Zap className="w-4 h-4" /> }
    ]
  },
  {
    id: 'platinum',
    name: 'VIP PLATINUM',
    price: 599,
    originalPrice: 799,
    currency: 'AED/mois',
    popular: true,
    icon: <Diamond className="w-8 h-8" />,
    color: 'from-gray-400 to-gray-600',
    features: [
      { text: 'Statut Gold à Platinum (20-49 articles)', icon: <Shield className="w-4 h-4" /> },
      { text: 'Accès salons Gold + Platinum', icon: <Users className="w-4 h-4" /> },
      { text: 'QR Code personnel & Style Card', icon: <Gift className="w-4 h-4" /> },
      { text: 'Collecte VIP illimitée', icon: <Camera className="w-4 h-4" /> },
      { text: 'Personal shopper dédié', icon: <Users className="w-4 h-4" /> },
      { text: 'Tableaux de progression avancés', icon: <Star className="w-4 h-4" /> },
      { text: 'Défis mensuels exclusifs', icon: <Sparkles className="w-4 h-4" /> },
      { text: 'Galerie communautaire premium', icon: <Users className="w-4 h-4" /> }
    ]
  },
  {
    id: 'diamond',
    name: 'VIP DIAMOND',
    price: 999,
    originalPrice: 1299,
    currency: 'AED/mois',
    popular: false,
    icon: <Sparkles className="w-8 h-8" />,
    color: 'from-blue-400 to-purple-600',
    features: [
      { text: 'Statut Platinum à Diamant (50+ articles)', icon: <Shield className="w-4 h-4" /> },
      { text: 'Accès à tous les salons VIP', icon: <Users className="w-4 h-4" /> },
      { text: 'Timeline d\'évolution complète', icon: <Star className="w-4 h-4" /> },
      { text: 'Parrainage avec récompenses', icon: <Gift className="w-4 h-4" /> },
      { text: 'Certification entre membres', icon: <Shield className="w-4 h-4" /> },
      { text: 'Missions communautaires', icon: <Users className="w-4 h-4" /> },
      { text: 'Badge Black Diamond', icon: <Diamond className="w-4 h-4" /> },
      { text: 'Statut par marque avancé', icon: <Star className="w-4 h-4" /> },
      { text: 'My Brand DNA complet', icon: <Sparkles className="w-4 h-4" /> }
    ]
  }
]

export default function TierComparison() {
  const [selectedTier, setSelectedTier] = useState('platinum')
  const [showComparison, setShowComparison] = useState(false)

  return (
    <div className="max-w-7xl mx-auto">
      {/* Toggle View Button */}
      <div className="text-center mb-6 md:mb-8">
        <button
          onClick={() => setShowComparison(!showComparison)}
          className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-trueme-gold text-black rounded-full font-medium hover:bg-trueme-gold/90 transition-all text-sm md:text-base"
        >
          <Sparkles className="w-4 h-4" />
          <span className="hidden sm:inline">{showComparison ? 'Vue Standard' : 'Comparer les Offres'}</span>
          <span className="sm:hidden">{showComparison ? 'Standard' : 'Comparer'}</span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        {showComparison ? (
          /* Comparison Table View */
          <motion.div
            key="comparison"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="overflow-x-auto"
          >
            <div className="min-w-[800px] bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-4 border-b border-gray-100">
                <div className="p-6 bg-trueme-cream">
                  <h3 className="font-semibold text-trueme">Fonctionnalités</h3>
                </div>
                {tiers.map(tier => (
                  <div key={tier.id} className={`p-6 text-center relative ${tier.popular ? 'bg-trueme-gold/10' : ''}`}>
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-trueme-gold text-black px-4 py-1 rounded-full text-xs font-bold">
                        LE PLUS POPULAIRE
                      </div>
                    )}
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-2xl bg-gradient-to-r ${tier.color} flex items-center justify-center text-white`}>
                      {tier.icon}
                    </div>
                    <h4 className="font-bold text-trueme mb-1">{tier.name}</h4>
                    <div className="text-2xl font-light text-trueme mb-1">{tier.price} AED</div>
                    <div className="text-sm text-gray-500 line-through">{tier.originalPrice} AED</div>
                  </div>
                ))}
              </div>

              {/* Feature Rows */}
              {Array.from({ length: Math.max(...tiers.map(t => t.features.length)) }, (_, i) => (
                <div key={i} className="grid grid-cols-4 border-b border-gray-50 last:border-b-0 hover:bg-gray-25">
                  <div className="p-4 font-medium text-gray-700">
                    {tiers[0].features[i]?.text || ''}
                  </div>
                  {tiers.map(tier => (
                    <div key={tier.id} className="p-4 text-center">
                      {tier.features[i] ? (
                        <Check className="w-5 h-5 text-trueme-gold mx-auto" />
                      ) : (
                        <span className="text-gray-300">−</span>
                      )}
                    </div>
                  ))}
                </div>
              ))}

              {/* Action Row */}
              <div className="grid grid-cols-4 bg-gray-50">
                <div className="p-6"></div>
                {tiers.map(tier => (
                  <div key={tier.id} className="p-6 text-center">
                    <a
                      href={`/auth/register?tier=${tier.id}`}
                      className={`inline-block w-full py-3 px-4 rounded-2xl font-medium transition-all ${
                        tier.popular
                          ? 'bg-trueme-gold text-black hover:bg-trueme-gold/90'
                          : 'bg-trueme text-white hover:bg-trueme-light'
                      }`}
                    >
                      Choisir {tier.name.split(' ')[1]}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          /* Standard Cards View */
          <motion.div
            key="cards"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  tier.popular ? 'ring-2 ring-trueme-gold scale-105' : ''
                } ${selectedTier === tier.id ? 'ring-2 ring-trueme' : ''}`}
                onClick={() => setSelectedTier(tier.id)}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-trueme-gold text-black px-6 py-2 rounded-full text-sm font-bold">
                      LE PLUS POPULAIRE
                    </div>
                  </div>
                )}

                <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${tier.color} rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 text-white shadow-lg`}>
                  {tier.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-center mb-2 text-trueme">{tier.name}</h3>
                
                <div className="text-center mb-6">
                  <div className="text-3xl md:text-4xl font-light text-trueme mb-2">{tier.price} AED</div>
                  <div className="text-gray-500 line-through text-base md:text-lg">{tier.originalPrice} AED</div>
                  <div className="text-xs md:text-sm text-gray-600">{tier.currency}</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
                      className="flex items-start gap-3"
                    >
                      <div className="text-trueme-gold mt-0.5">
                        {feature.icon}
                      </div>
                      <span className="text-gray-600 text-xs md:text-sm">{feature.text}</span>
                    </motion.li>
                  ))}
                </ul>

                <Link
                  href={`/auth/register?tier=${tier.id}`}
                  className={`w-full inline-block text-center py-3 md:py-4 rounded-2xl font-semibold transition-all duration-300 text-sm md:text-base ${
                    tier.popular
                      ? 'bg-trueme-gold text-black hover:bg-trueme-gold/90'
                      : 'bg-trueme text-white hover:bg-trueme-light'
                  }`}
                >
                  Choisir {tier.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Benefits Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-12"
      >
        <p className="text-gray-600 mb-4">
          Adhésion flexible, accès sur sélection, annulation possible à tout moment
        </p>
        <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Shield className="w-4 h-4" />
            Annulation à tout moment
          </span>
          <span className="flex items-center gap-1">
            <Zap className="w-4 h-4" />
            Activation immédiate
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            Support dédié
          </span>
        </div>
      </motion.div>
    </div>
  )
}
