'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const heroImages = [
    {
        url: '/images/products/PHOTOS SITE TM/herohermes.png',
        title: 'Collection Hermès',
        subtitle: ''
    },
    {
        url: '/images/products/PHOTOS SITE TM/herochanel.png',
        title: 'Nouveautés Chanel',
        subtitle: ''
    },
    {
        url: '/images/products/PHOTOS SITE TM/herodior.png',
        title: 'Sacs Dior Iconiques',
        subtitle: ''
    },
    {
        url: '/images/products/PHOTOS SITE TM/herobijoux.png',
        title: 'Bijoux Cartier',
        subtitle: ''
    }
]

export default function HeroSection({ onIndexChange }: { onIndexChange?: (index: number) => void }) {
    const [currentHeroIndex, setCurrentHeroIndex] = useState(0)
    const heroSectionRef = useRef<HTMLDivElement>(null)
    const touchStartX = useRef<number | null>(null)
    const [isTouchDevice, setIsTouchDevice] = useState(false)

    // Notify parent of index change
    useEffect(() => {
        onIndexChange?.(currentHeroIndex)
    }, [currentHeroIndex, onIndexChange])

    // Auto-rotation des images hero avec reset du timer
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length)
        }, 7000) // 7 secondes entre les slides
        return () => clearInterval(timer)
    }, [currentHeroIndex]) // Reset timer à chaque changement manuel

    // Listener pour détection tactile
    useEffect(() => {
        const detectTouch = () => {
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
        }
        detectTouch()
    }, [])

    // Fonctions de navigation du hero slider
    const nextSlide = () => {
        setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length)
    }

    const prevSlide = () => {
        setCurrentHeroIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
    }

    const goToSlide = (index: number) => {
        setCurrentHeroIndex(index)
    }

    // Gestion des gestes tactiles
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return

        const touchEndX = e.changedTouches[0].clientX
        const diff = touchStartX.current - touchEndX
        const threshold = 50

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                nextSlide() // Swipe left = next
            } else {
                prevSlide() // Swipe right = prev
            }
        }

        touchStartX.current = null
    }

    return (
        <section ref={heroSectionRef} className="relative h-screen w-full overflow-hidden bg-trueme-black">
            <div
                className="relative h-full w-full"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <AnimatePresence initial={false} mode='wait'>
                    <motion.div
                        key={currentHeroIndex}
                        className="absolute inset-0 h-full w-full"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="relative h-full w-full">
                            <Image
                                src={heroImages[currentHeroIndex].url}
                                alt={heroImages[currentHeroIndex].title}
                                fill
                                priority={currentHeroIndex === 0}
                                sizes="100vw"
                                quality={90}
                                className="object-cover object-center animate-scale-slow"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

                            {/* Hero Content - Luxury Typography */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                >
                                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight drop-shadow-lg">
                                        {heroImages[currentHeroIndex].title}
                                    </h1>
                                    {heroImages[currentHeroIndex].subtitle && (
                                        <p className="text-lg md:text-xl text-white/90 font-light tracking-widest uppercase mb-10">
                                            {heroImages[currentHeroIndex].subtitle}
                                        </p>
                                    )}
                                    <Link
                                        href="/marketplace"
                                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full overflow-hidden transition-all duration-500 hover:bg-white hover:text-trueme-black hover:border-white"
                                    >
                                        <span className="relative z-10 text-sm font-medium tracking-widest uppercase">Découvrir la collection</span>
                                        <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {!isTouchDevice && (
                    <>
                        <button
                            onClick={prevSlide}
                            className="absolute left-8 top-1/2 -translate-y-1/2 p-4 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300 z-20 group"
                            aria-label="Image précédente"
                        >
                            <ChevronLeft className="w-8 h-8 transition-transform duration-300 group-hover:-translate-x-1" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-8 top-1/2 -translate-y-1/2 p-4 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300 z-20 group"
                            aria-label="Image suivante"
                        >
                            <ChevronRight className="w-8 h-8 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                    </>
                )}

                {/* Progress Indicators */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">
                    {heroImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className="group relative py-4"
                            aria-label={`Aller à l'image ${index + 1}`}
                        >
                            <div className={`h-[2px] w-12 transition-all duration-500 ${index === currentHeroIndex
                                ? 'bg-white'
                                : 'bg-white/30 group-hover:bg-white/60'
                                }`} />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}
