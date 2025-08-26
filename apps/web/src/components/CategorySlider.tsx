'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import ProductCard, { Product } from './ProductCard'

interface CategorySliderProps {
  title: string
  products: Product[]
  categoryLink: string
  onToggleFavorite?: (productId: string) => void
  className?: string
}

const CategorySlider: React.FC<CategorySliderProps> = ({
  title,
  products,
  categoryLink,
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
    <section className={`py-8 ${className}`}>
      {/* Category Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl md:text-3xl font-light text-trueme tracking-tight">
            {title}
          </h2>
          
          {/* Desktop Navigation Arrows */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-white/80 hover:bg-white shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <ChevronLeft className="w-5 h-5 text-trueme group-hover:text-trueme-gold transition-colors" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-white/80 hover:bg-white shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <ChevronRight className="w-5 h-5 text-trueme group-hover:text-trueme-gold transition-colors" />
            </button>
          </div>
        </div>

        {/* View All Link */}
        <Link 
          href={categoryLink}
          className="text-trueme hover:text-trueme-gold transition-colors duration-300 flex items-center gap-2 text-sm font-medium"
        >
          Voir tout
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Products Slider */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-none w-[280px] md:w-[300px]"
              style={{ scrollSnapAlign: 'start' }}
            >
              <ProductCard
                product={product}
                onToggleFavorite={onToggleFavorite}
                className="h-full"
              />
            </div>
          ))}
        </div>

        {/* Mobile Scroll Indicators */}
        <div className="flex justify-center mt-4 lg:hidden">
          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(products.length / 2) }).map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-trueme-gold/20"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategorySlider
