'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Clock, Shield } from 'lucide-react'

interface PricingPlan {
  name: string
  price: string
  duration: string
  features: string[]
  idealFor: string
  popular?: boolean
}

interface PricingTableProps {
  plans: PricingPlan[]
  onSelectPlan: (planName: string) => void
  className?: string
}

const planIcons = {
  'Express': Clock,
  'Complète': Shield,
  'Premium': Star
}

export function PricingTable({ plans, onSelectPlan, className = '' }: PricingTableProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${className}`}>
      {plans.map((plan, index) => {
        const IconComponent = planIcons[plan.name as keyof typeof planIcons] || Shield
        
        return (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.32, 
              delay: index * 0.1, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            whileHover={{ 
              scale: 1.03,
              boxShadow: plan.popular 
                ? "0 25px 50px -12px rgba(200, 159, 91, 0.4)"
                : "0 20px 25px -5px rgba(0, 0, 0, 0.15)"
            }}
            className={`
              relative p-8 rounded-2xl bg-white border-2 transition-all duration-300
              ${plan.popular 
                ? 'border-trueme-gold shadow-xl ring-1 ring-trueme-gold/20 transform scale-105' 
                : 'border-gray-200 shadow-lg hover:border-trueme-gold/40'
              }
            `}
          >
            {/* Popular badge */}
            {plan.popular && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-trueme-gold to-yellow-400 text-black px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2"
              >
                <Star className="w-4 h-4 fill-current" />
                Populaire
              </motion.div>
            )}

            <div className="space-y-6">
              {/* Header */}
              <div className="text-center space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className={`
                    w-16 h-16 mx-auto rounded-2xl flex items-center justify-center
                    ${plan.popular ? 'bg-trueme-gold/20' : 'bg-gray-100'}
                  `}
                >
                  <IconComponent className={`w-8 h-8 ${plan.popular ? 'text-trueme-gold' : 'text-gray-600'}`} />
                </motion.div>
                
                <h3 className="text-2xl font-montserrat font-semibold text-trueme">
                  {plan.name}
                </h3>
                
                <div className="space-y-1">
                  <div className="text-4xl font-montserrat font-bold text-trueme">
                    {plan.price}
                  </div>
                  <div className="text-sm text-gray-500 font-lora">
                    Délai : {plan.duration}
                  </div>
                </div>
              </div>

              {/* Ideal for */}
              <div className={`
                text-center p-3 rounded-lg text-sm font-medium
                ${plan.popular 
                  ? 'bg-trueme-gold/10 text-trueme border border-trueme-gold/20' 
                  : 'bg-gray-50 text-gray-600 border border-gray-200'
                }
              `}>
                Idéal pour : {plan.idealFor}
              </div>

              {/* Features */}
              <div className="space-y-3">
                <h4 className="text-sm font-montserrat font-semibold text-trueme/70 uppercase tracking-wider">
                  Inclus
                </h4>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.2, 
                        delay: 0.4 + index * 0.1 + featureIndex * 0.05,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="flex items-start gap-3 font-lora text-gray-700 text-sm"
                    >
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        plan.popular ? 'text-trueme-gold' : 'text-green-500'
                      }`} />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <motion.button
                onClick={() => onSelectPlan(plan.name)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  w-full py-4 px-6 rounded-full font-semibold transition-all duration-300
                  ${plan.popular
                    ? 'bg-trueme-gold text-black hover:bg-trueme hover:text-white shadow-lg'
                    : 'bg-transparent text-trueme border-2 border-trueme hover:bg-trueme hover:text-white'
                  }
                `}
              >
                Choisir {plan.name}
              </motion.button>
            </div>

            {/* Background decoration for popular plan */}
            {plan.popular && (
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-trueme-gold/5 to-transparent rounded-2xl" />
            )}
          </motion.div>
        )
      })}
    </div>
  )
}
