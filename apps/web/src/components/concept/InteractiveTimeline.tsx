'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Camera, Crown, Star, CheckCircle, ArrowRight } from 'lucide-react'

const timelineSteps = [
  {
    id: 1,
    icon: <Camera className="w-6 h-6" />,
    title: "Dépôt & Photo",
    description: "Votre article est photographié par nos experts",
    details: "Shooting professionnel en studio avec éclairage premium et retouche photo pour maximiser l'attractivité de votre article."
  },
  {
    id: 2,
    icon: <Shield className="w-6 h-6" />,
    title: "Double Authentification",
    description: "Vérification sur 2 plateformes payantes",
    details: "Contrôle par Entrupy et Authentifier.fr, les références mondiales de l'authentification des articles de luxe."
  },
  {
    id: 3,
    icon: <Crown className="w-6 h-6" />,
    title: "Mise en Vente",
    description: "Publication dans l'espace approprié",
    details: "Vitrine Premium ou Salon VIP selon votre statut, avec optimisation SEO et recommandations personnalisées."
  },
  {
    id: 4,
    icon: <Star className="w-6 h-6" />,
    title: "Vente & Livraison",
    description: "Transaction sécurisée et livraison premium",
    details: "Paiement protégé, emballage luxe et livraison express avec suivi en temps réel partout aux UAE."
  }
]

export default function InteractiveTimeline() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <div className="max-w-6xl mx-auto">
      {/* Desktop Timeline */}
      <div className="hidden md:block relative">
        {/* Connection Line */}
        <div className="absolute top-16 left-0 right-0 h-0.5 bg-gray-200">
          <motion.div 
            className="h-full bg-trueme-gold"
            initial={{ width: "0%" }}
            animate={{ width: `${((activeStep - 1) / (timelineSteps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="grid grid-cols-4 gap-8">
          {timelineSteps.map((step) => (
            <motion.div
              key={step.id}
              className="relative cursor-pointer"
              onHoverStart={() => setActiveStep(step.id)}
              whileHover={{ scale: 1.02 }}
            >
              {/* Step Circle */}
              <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center mb-4 transition-all duration-300 ${
                activeStep >= step.id 
                  ? 'bg-trueme-gold border-trueme-gold text-white' 
                  : 'bg-white border-gray-200 text-gray-400'
              }`}>
                {activeStep > step.id ? <CheckCircle className="w-6 h-6" /> : step.icon}
              </div>

              {/* Step Content */}
              <div className="text-center">
                <h3 className="font-semibold text-trueme mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: activeStep === step.id ? 1 : 0,
                    height: activeStep === step.id ? 'auto' : 0
                  }}
                  className="overflow-hidden"
                >
                  <div className="bg-trueme-cream p-4 rounded-xl text-xs text-gray-700 leading-relaxed">
                    {step.details}
                  </div>
                </motion.div>
              </div>

              {/* Step Number */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-trueme text-white rounded-full text-xs flex items-center justify-center font-bold">
                {step.id}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden space-y-6">
        {timelineSteps.map((step, index) => (
          <motion.div
            key={step.id}
            className="flex gap-4 cursor-pointer"
            onClick={() => setActiveStep(activeStep === step.id ? 0 : step.id)}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all ${
                activeStep >= step.id 
                  ? 'bg-trueme-gold border-trueme-gold text-white' 
                  : 'bg-white border-gray-200 text-gray-400'
              }`}>
                {activeStep > step.id ? <CheckCircle className="w-5 h-5" /> : step.icon}
              </div>
              {index < timelineSteps.length - 1 && (
                <div className={`w-0.5 h-16 mt-2 transition-colors ${
                  activeStep > step.id ? 'bg-trueme-gold' : 'bg-gray-200'
                }`} />
              )}
            </div>

            <div className="flex-1 pb-8">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-trueme">{step.title}</h3>
                <ArrowRight className={`w-4 h-4 transition-transform ${
                  activeStep === step.id ? 'rotate-90' : ''
                }`} />
              </div>
              <p className="text-sm text-gray-600 mb-3">{step.description}</p>
              
              <motion.div
                initial={false}
                animate={{ 
                  opacity: activeStep === step.id ? 1 : 0,
                  height: activeStep === step.id ? 'auto' : 0
                }}
                className="overflow-hidden"
              >
                <div className="bg-trueme-cream p-3 rounded-lg text-sm text-gray-700">
                  {step.details}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
