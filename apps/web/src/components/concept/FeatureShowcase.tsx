'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Crown, Users, Zap, Globe, Target, Sparkles } from 'lucide-react'

const features = [
  {
    id: 'authentication',
    icon: <Shield className="w-8 h-8" />,
    title: "Authentification Ultra-Premium",
    description: "Double vérification payante garantissant l'authenticité absolue",
    details: [
      "Contrôle sur 2 plateformes internationales",
      "Certificat d'authenticité numérique",
      "Engagement vendeur sur l'honneur",
      "Base de données mondiale des contrefaçons"
    ],
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 'vip',
    icon: <Crown className="w-8 h-8" />,
    title: "Salon VIP Exclusif",
    description: "Club privé pour les passionnés de haute couture",
    details: [
      "Accès aux ventes privées",
      "Personal shopper dédié",
      "Événements networking exclusifs", 
      "Collecte et livraison premium"
    ],
    color: "from-amber-500 to-amber-600"
  },
  {
    id: 'community',
    icon: <Users className="w-8 h-8" />,
    title: "Communauté Élite",
    description: "Réseau de connaisseurs et collectionneurs",
    details: [
      "Galerie communautaire par marque",
      "Système de parrainage récompensé",
      "Certification entre membres",
      "Missions collaboratives"
    ],
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 'gamification',
    icon: <Target className="w-8 h-8" />,
    title: "Progression Gamifiée",
    description: "Système de niveaux et récompenses unique",
    details: [
      "Statuts Bronze à Diamant",
      "Défis mensuels personnalisés",
      "Badges et récompenses exclusives",
      "Tableaux de progression avancés"
    ],
    color: "from-emerald-500 to-emerald-600"
  },
  {
    id: 'global',
    icon: <Globe className="w-8 h-8" />,
    title: "Standards Internationaux",
    description: "Excellence reconnue mondialement",
    details: [
      "Partenariats avec maisons de luxe",
      "Processus certifiés ISO",
      "Livraison internationale",
      "Support multilingue 24/7"
    ],
    color: "from-indigo-500 to-indigo-600"
  },
  {
    id: 'innovation',
    icon: <Zap className="w-8 h-8" />,
    title: "Innovation Technologique",
    description: "IA et technologies de pointe au service du luxe",
    details: [
      "Reconnaissance d'image avancée",
      "Algorithmes de recommandation",
      "QR codes personnalisés",
      "Blockchain pour la traçabilité"
    ],
    color: "from-pink-500 to-pink-600"
  }
]

export default function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState('authentication')

  const activeFeatureData = features.find(f => f.id === activeFeature)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Feature List */}
      <div className="space-y-3 md:space-y-4">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            className={`p-4 md:p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
              activeFeature === feature.id
                ? 'bg-trueme-cream border-2 border-trueme-gold shadow-lg'
                : 'bg-white border border-gray-100 hover:border-trueme-gold/30'
            }`}
            onClick={() => setActiveFeature(feature.id)}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-start gap-3 md:gap-4">
              <div className={`p-2 md:p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white flex-shrink-0`}>
                {feature.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-trueme mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
                {activeFeature === feature.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-3 pt-3 border-t border-trueme-gold/20"
                  >
                    <ul className="space-y-2">
                      {feature.details.map((detail, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-trueme-gold" />
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Feature Visualization */}
      <div className="mt-8 lg:mt-0 lg:sticky lg:top-24">
        <motion.div
          key={activeFeature}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative p-6 md:p-8 bg-gradient-to-br from-trueme/5 to-trueme-gold/5 rounded-3xl"
        >
          <div className="absolute top-6 right-6">
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${activeFeatureData?.color} text-white`}>
              {activeFeatureData?.icon}
            </div>
          </div>

          <div className="mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-light text-trueme mb-3 md:mb-4">
              {activeFeatureData?.title}
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {activeFeatureData?.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {activeFeatureData?.details.map((detail, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="p-3 md:p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-white/50"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-trueme-gold" />
                  <span className="text-xs font-medium text-trueme-gold uppercase tracking-wide">
                    Niveau {i + 1}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-gray-700 font-medium">{detail}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${activeFeatureData?.color}`}
                initial={{ width: 0 }}
                animate={{ width: '85%' }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            <span className="text-sm font-medium text-trueme">85% Complete</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
