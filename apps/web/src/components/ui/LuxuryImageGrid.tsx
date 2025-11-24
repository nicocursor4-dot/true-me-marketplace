'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface LuxuryImageGridProps {
  images: Array<{
    src: string
    alt: string
    featured?: boolean
    className?: string
  }>
  className?: string
}

export function LuxuryImageGrid({ images, className = '' }: LuxuryImageGridProps) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.32, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-2 md:grid-cols-3 gap-4 relative"
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.24, 
              delay: index * 0.1, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            className={`
              relative overflow-hidden rounded-3xl
              ${image.featured ? 'md:col-span-2 md:row-span-2' : ''}
              ${index === 0 ? 'transform rotate-2' : ''}
              ${index === 2 ? 'transform -rotate-2' : ''}
              group cursor-pointer
            `}
            whileHover={{ 
              scale: 1.02,
              rotate: image.featured ? 0 : (index % 2 === 0 ? 2 : -2),
              transition: { duration: 0.3 }
            }}
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`
                  object-cover transition-transform duration-700 group-hover:scale-110
                  ${image.featured ? 'border-4 border-white shadow-2xl' : 'border-4 border-white'}
                  ${image.className || ''}
                `}
              />
              
              {/* Overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Premium badge for featured */}
              {image.featured && (
                <div className="absolute top-4 left-4 bg-trueme-gold text-black px-3 py-1 rounded-full text-xs font-semibold">
                  Featured
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Floating decoration elements inspired by neopa */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="absolute -top-8 -right-8 w-16 h-16 bg-trueme-gold/10 rounded-full blur-xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="absolute -bottom-8 -left-8 w-20 h-20 bg-trueme-gold/5 rounded-full blur-2xl"
      />
    </div>
  )
}
