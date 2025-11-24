'use client'

import { useState, useEffect } from 'react'
import LegacyNavbar from '@/components/LegacyNavbar'
import PremiumBanner from '@/components/PremiumBanner'
import RichFooter from '@/components/layout/RichFooter'
import HeroSection from '@/components/home/HeroSection'
import CategoriesSection from '@/components/home/CategoriesSection'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import TrustIndicators from '@/components/home/TrustIndicators'
import TestimonialsSection from '@/components/home/TestimonialsSection'

export default function HomePage() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  // Listener pour le scroll de la navbar
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isDarkHero = scrollY <= 50 && currentHeroIndex === 3

  return (
    <main className="min-h-screen bg-trueme-cream">
      <LegacyNavbar isDarkBackground={isDarkHero} />

      <HeroSection onIndexChange={setCurrentHeroIndex} />

      <PremiumBanner />

      <CategoriesSection />

      <FeaturedProducts />

      <TrustIndicators />

      <TestimonialsSection />

      <RichFooter />
    </main>
  )
}
