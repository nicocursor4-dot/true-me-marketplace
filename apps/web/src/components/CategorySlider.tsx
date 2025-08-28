'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import ProductCard, { Product } from './ProductCard'

interface CategorySliderProps {
  title: string
  subtitle?: string
  categoryKey: string
  products: Product[]
  onToggleFavorite?: (productId: string) => void
  className?: string
}

const CategorySlider: React.FC<CategorySliderProps> = ({
  title,
  subtitle,
  categoryKey,
  products,
  onToggleFavorite,
  className = ""
}) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320 // Width of one card + gap
      const currentScroll = scrollRef.current.scrollLeft
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount
      
      scrollRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      })
    }
  }

  if (!products.length) {
    return null
  }

  return (
    <section className="py-8 sm:py-12 px-2 sm:px-4 lg:px-8 overflow-visible">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
          <div className="px-2 sm:px-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-trueme mb-1 sm:mb-2">{title}</h2>
            {subtitle && <p className="text-trueme-light text-base sm:text-lg">{subtitle}</p>}
          </div>
          
          <Link 
            href={`/marketplace/${categoryKey}`}
            className="bg-gradient-to-r from-trueme-gold to-trueme-gold/80 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:from-trueme-gold/90 hover:to-trueme-gold/70 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl text-sm sm:text-base whitespace-nowrap mx-2 sm:mx-0"
          >
            Voir tout
          </Link>
        </div>
        
        <div className="overflow-visible px-2 sm:px-4 py-4 sm:py-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onToggleFavorite={onToggleFavorite}
                className="w-full"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategorySlider
