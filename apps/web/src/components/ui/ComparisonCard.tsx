'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, Star, ArrowRight } from 'lucide-react'

interface ComparisonCardProps {
  title: string
  subtitle: string
  description: string
  features: string[]
  ctaText: string
  onCTA: () => void
  featured?: boolean
  className?: string
}

export function ComparisonCard({ 
  title, 
  subtitle, 
  description, 
  features, 
  ctaText, 
  onCTA, 
  featured = false,
  className = ''
}: ComparisonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.32, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ 
        scale: 1.02, 
        boxShadow: featured ? "0 25px 50px -12px rgba(200, 159, 91, 0.3)" : "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
      }}
      className={`
        relative p-8 rounded-2xl bg-white border transition-all duration-300
        ${featured 
          ? 'border-2 border-trueme-gold shadow-xl ring-1 ring-trueme-gold/20' 
          : 'border-gray-200 shadow-lg hover:border-trueme-gold/40'
        }
        ${className}
      `}
    >
      {/* Featured badge */}
      {featured && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="absolute -top-3 left-6 bg-gradient-to-r from-trueme-gold to-yellow-400 text-black px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
        >
          <Star className="w-3 h-3 fill-current" />
          Recommandé
        </motion.div>
      )}

      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-3">
          <h3 className="text-2xl font-montserrat font-semibold text-trueme">
            {title}
          </h3>
          <h4 className="text-lg font-montserrat font-medium text-trueme/80">
            {subtitle}
          </h4>
          <p className="font-lora text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Features */}
        <div className="space-y-3">
          <h5 className="text-sm font-montserrat font-semibold text-trueme/70 uppercase tracking-wider">
            Avantages
          </h5>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.2, 
                  delay: 0.3 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="flex items-start gap-3 font-lora text-gray-700"
              >
                <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                  featured ? 'text-trueme-gold' : 'text-green-500'
                }`} />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <motion.button
          onClick={onCTA}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`
            w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300
            ${featured
              ? 'bg-trueme-gold text-black hover:bg-trueme hover:text-white'
              : 'bg-gray-100 text-trueme border-2 border-trueme hover:bg-trueme hover:text-white'
            }
          `}
        >
          {ctaText}
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Background decoration for featured card */}
      {featured && (
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-trueme-gold/5 to-transparent rounded-2xl" />
      )}
    </motion.div>
  )
}
