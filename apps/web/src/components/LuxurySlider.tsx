'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Category {
  key: string
  title: string
  description: string
  image: string
  href: string
}

interface LuxurySliderProps {
  categories: Category[]
}

const LuxurySlider: React.FC<LuxurySliderProps> = ({ categories }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(3)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Responsive items per slide
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2)
      } else {
        setItemsPerSlide(3)
      }
    }

    updateItemsPerSlide()
    window.addEventListener('resize', updateItemsPerSlide)
    return () => window.removeEventListener('resize', updateItemsPerSlide)
  }, [])

  const totalSlides = Math.ceil(categories.length / itemsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      {totalSlides > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 shadow-lg"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 shadow-lg"
            disabled={currentSlide === totalSlides - 1}
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </>
      )}

      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="overflow-hidden"
      >
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className={`grid gap-0 ${
                itemsPerSlide === 1 ? 'grid-cols-1' : 
                itemsPerSlide === 2 ? 'grid-cols-2' : 
                'grid-cols-3'
              }`}>
                {categories
                  .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                  .map((category) => (
                    <Link
                      key={category.key}
                      href={category.href}
                      className="group relative overflow-hidden bg-gray-100 hover:bg-gray-50 transition-all duration-500"
                    >
                      <div className="aspect-[4/5] relative">
                        <Image
                          src={category.image}
                          alt={category.title}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                      </div>
                      
                      {/* Category Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                        <h3 className="text-lg lg:text-xl font-medium text-white tracking-wider mb-2 uppercase">
                          {category.title}
                        </h3>
                        <div className="inline-flex items-center gap-2 text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                          <span className="border-b border-white/50 group-hover:border-white pb-0.5">
                            EXPLORER
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-trueme w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default LuxurySlider
