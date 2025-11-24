'use client'

import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
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
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    checkScrollability()
    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollElement.addEventListener('scroll', checkScrollability)
      return () => scrollElement.removeEventListener('scroll', checkScrollability)
    }
  }, [products])

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
    <section className={`py-8 sm:py-12 px-2 sm:px-4 lg:px-8 overflow-visible ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
          <div className="px-2 sm:px-0">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1 sm:mb-2 drop-shadow-sm">{title}</h2>
            {subtitle && <p className="text-gray-700 text-base sm:text-lg font-medium">{subtitle}</p>}
          </div>
          
          <Link 
            href={`/marketplace/category/${categoryKey}`}
            className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:from-gray-800 hover:to-gray-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl text-sm sm:text-base whitespace-nowrap mx-2 sm:mx-0 border border-gray-900"
          >
            Voir tout
          </Link>
        </div>
        
        <div className="relative overflow-hidden px-2 sm:px-4 py-4 sm:py-6">
          {/* Scroll Arrows */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full p-2 shadow-lg hover:bg-white transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
          )}
          
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full p-2 shadow-lg hover:bg-white transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 lg:gap-6 overflow-x-auto scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {products.slice(0, 8).map((product, index) => (
              <div
                key={product.id}
                className={`flex-shrink-0 ${
                  index < 4 ? 'w-72' : index === 4 ? 'w-64 opacity-60' : 'w-72'
                }`}
                style={{
                  minWidth: index < 4 ? '280px' : index === 4 ? '240px' : '280px'
                }}
              >
                <ProductCard 
                  product={product} 
                  onToggleFavorite={onToggleFavorite}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategorySlider
