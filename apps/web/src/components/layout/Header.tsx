import React from 'react'
import Link from 'next/link'
import { GlassCard } from '@/components/ui/GlassCard'

export function Header() {
  return (
    <GlassCard className="fixed top-0 left-0 right-0 z-50 rounded-none border-0 border-b border-glass-border backdrop-blur-glass">
      <div className="flex items-center justify-between h-20 px-4">
        {/* Logo et tagline */}
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-trueme-black">TRUE ME</h1>
          <p className="text-xs text-trueme-secondary font-medium">Not a Style. A Signature</p>
        </div>
        
        {/* Navigation centrale */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/dashboard" className="text-trueme-black hover:text-trueme-gold transition-colors">
            Dashboard
          </Link>
          <Link href="/statut-marques" className="text-trueme-black hover:text-trueme-gold transition-colors">
            Marques
          </Link>
          <Link href="/marketplace" className="text-trueme-black hover:text-trueme-gold transition-colors">
            Marketplace
          </Link>
        </nav>

        {/* Avatar profil */}
        <div className="flex items-center space-x-3">
          {/* Notification dot */}
          <div className="w-2 h-2 bg-trueme-gold rounded-full animate-pulse"></div>
          
          {/* Avatar placeholder - IMAGE_NEEDED: profile-avatar.jpg */}
          <div className="w-9 h-9 bg-gradient-to-br from-trueme-gold to-level-gold rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-semibold">JD</span>
          </div>
        </div>
      </div>
    </GlassCard>
  )
}
