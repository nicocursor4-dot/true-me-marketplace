'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Camera, Search, Shield, ShoppingBag, CheckCircle, ArrowRight, Clock, Star, Award } from 'lucide-react'

const processSteps = [
  {
    id: 1,
    icon: <Camera className="w-8 h-8" />,
    title: "Vous Prenez des Photos",
    description: "Photographiez votre article sous tous les angles depuis chez vous",
    details: [
      "Photos haute résolution requises",
      "Tous les angles et détails",
      "État général et défauts éventuels",
      "Accessoires et emballage d'origine"
    ],
    duration: "5 min",
    status: "client"
  },
  {
    id: 2,
    icon: <Search className="w-8 h-8" />,
    title: "True Me Analyse",
    description: "Nos experts évaluent votre article et déterminent sa valeur marchande",
    details: [
      "Analyse IA des photos",
      "Évaluation par nos experts",
      "Estimation de prix personnalisée",
      "Réponse sous 24h maximum"
    ],
    duration: "24h",
    status: "trueme"
  },
  {
    id: 3,
    icon: <Shield className="w-8 h-8" />,
    title: "Réception & Authentication",
    description: "Envoyez-nous l'article pour authentification professionnelle",
    details: [
      "Collecte gratuite à domicile",
      "Double authentification payante",
      "Shooting photo professionnel",
      "Remise à neuf si nécessaire"
    ],
    duration: "48-72h",
    status: "trueme"
  },
  {
    id: 4,
    icon: <ShoppingBag className="w-8 h-8" />,
    title: "Mise en Vente",
    description: "Article validé et publié sur notre marketplace premium",
    details: [
      "Publication sur marketplace",
      "Marketing et promotion",
      "Gestion des négociations",
      "Paiement sécurisé garanti"
    ],
    duration: "Variable",
    status: "trueme"
  }
]

export default function SellProcessFlow() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <div className="max-w-7xl mx-auto">
      {/* Process Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative cursor-pointer transition-all duration-300 ${
              activeStep === step.id ? 'scale-105' : 'hover:scale-102'
            }`}
            onClick={() => setActiveStep(step.id)}
          >
            {/* Connection Line - Desktop Only */}
            {index < processSteps.length - 1 && (
              <div className="hidden md:block absolute top-16 left-full w-6 h-0.5 bg-gray-200 z-0">
                <motion.div 
                  className="h-full bg-trueme-gold"
                  initial={{ width: "0%" }}
                  animate={{ width: activeStep > step.id ? "100%" : "0%" }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            )}

            <div className={`relative z-10 bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 ${
              activeStep === step.id ? 'ring-2 ring-trueme-gold shadow-2xl' : ''
            }`}>
              {/* Status Badge */}
              <div className={`absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-bold ${
                step.status === 'client' 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'bg-trueme-gold/20 text-trueme-gold'
              }`}>
                {step.status === 'client' ? 'VOUS' : 'TRUE ME'}
              </div>

              {/* Step Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white transition-all ${
                activeStep >= step.id ? 'bg-trueme-gold' : 'bg-gray-300'
              }`}>
                {activeStep > step.id ? <CheckCircle className="w-8 h-8" /> : step.icon}
              </div>

              {/* Step Content */}
              <div className="text-center">
                <div className="text-sm text-trueme-gold font-semibold mb-2">ÉTAPE {step.id}</div>
                <h3 className="text-lg font-semibold text-trueme mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                
                <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  {step.duration}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Active Step Details */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-trueme/5 to-trueme-gold/5 rounded-3xl p-8"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Step Details */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-trueme-gold rounded-2xl flex items-center justify-center text-white">
                {processSteps[activeStep - 1].icon}
              </div>
              <div>
                <h2 className="text-3xl font-light text-trueme">{processSteps[activeStep - 1].title}</h2>
                <p className="text-gray-600">{processSteps[activeStep - 1].description}</p>
              </div>
            </div>

            <div className="space-y-4">
              {processSteps[activeStep - 1].details.map((detail, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-white/50"
                >
                  <CheckCircle className="w-5 h-5 text-trueme-gold mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{detail}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Visual Representation */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              {activeStep === 1 && (
                <div className="text-center">
                  <div className="w-32 h-32 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Camera className="w-16 h-16 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-trueme mb-2">À Votre Domicile</h3>
                  <p className="text-gray-600">Prenez des photos détaillées en quelques minutes</p>
                </div>
              )}

              {activeStep === 2 && (
                <div className="text-center">
                  <div className="w-32 h-32 bg-trueme-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Search className="w-16 h-16 text-trueme-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-trueme mb-2">Analyse Experte</h3>
                  <p className="text-gray-600">IA + expertise humaine pour une évaluation précise</p>
                </div>
              )}

              {activeStep === 3 && (
                <div className="text-center">
                  <div className="w-32 h-32 bg-trueme-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-16 h-16 text-trueme-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-trueme mb-2">Authentification</h3>
                  <p className="text-gray-600">Double contrôle pour garantir l&apos;authenticité</p>
                </div>
              )}

              {activeStep === 4 && (
                <div className="text-center">
                  <div className="w-32 h-32 bg-trueme-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <ShoppingBag className="w-16 h-16 text-trueme-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-trueme mb-2">Marketplace Premium</h3>
                  <p className="text-gray-600">Vente auprès de notre clientèle haut de gamme</p>
                </div>
              )}

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-light text-trueme-gold mb-1">
                    {activeStep === 1 ? '5min' : activeStep === 2 ? '24h' : activeStep === 3 ? '48h' : '7j'}
                  </div>
                  <div className="text-xs text-gray-500">Durée moyenne</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-trueme-gold mb-1">
                    {activeStep === 1 ? '100%' : activeStep === 2 ? '98%' : activeStep === 3 ? '99%' : '92%'}
                  </div>
                  <div className="text-xs text-gray-500">Taux de réussite</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-trueme-gold mb-1">
                    {activeStep === 1 ? '0€' : activeStep === 2 ? '0€' : activeStep === 3 ? '0€' : '10%'}
                  </div>
                  <div className="text-xs text-gray-500">
                    {activeStep === 4 ? 'Commission' : 'Frais'}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
            disabled={activeStep === 1}
            className="flex items-center gap-2 px-6 py-3 bg-white rounded-full font-medium text-trueme hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Précédent
          </button>

          <div className="flex gap-2">
            {processSteps.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i + 1)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeStep === i + 1 ? 'bg-trueme-gold w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveStep(Math.min(4, activeStep + 1))}
            disabled={activeStep === 4}
            className="flex items-center gap-2 px-6 py-3 bg-trueme-gold text-black rounded-full font-medium hover:bg-trueme-gold/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Suivant
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      {/* Success Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        {[
          { value: "98%", label: "Articles authentifiés", icon: <Shield className="w-6 h-6" /> },
          { value: "7j", label: "Délai moyen de vente", icon: <Clock className="w-6 h-6" /> },
          { value: "4.9/5", label: "Satisfaction vendeurs", icon: <Star className="w-6 h-6" /> },
          { value: "24h", label: "Réponse évaluation", icon: <Award className="w-6 h-6" /> }
        ].map((metric, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-6 bg-white rounded-2xl shadow-sm"
          >
            <div className="text-trueme-gold mb-2 flex justify-center">
              {metric.icon}
            </div>
            <div className="text-3xl font-light text-trueme mb-1">{metric.value}</div>
            <div className="text-sm text-gray-500">{metric.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
