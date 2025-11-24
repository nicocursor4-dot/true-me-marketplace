"use client";

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ShoppingBag, User, Shield } from 'lucide-react'

interface LegacyNavbarProps {
  isDarkBackground?: boolean;
}

const LegacyNavbar: React.FC<LegacyNavbarProps> = ({ isDarkBackground = false }) => {
  const [isAccountOpen, setIsAccountOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  // Logique de scroll pour cacher/afficher la navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      const THRESHOLD = 15;
      const HIDE_START = 120;

      // Mobile: toujours visible pour éviter les clignotements
      if (typeof window !== 'undefined' && window.innerWidth < 768) {
        setIsScrolled(currentScrollY > 20);
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // Détecter si on a scrollé (pour le fond glassmorphism)
      setIsScrolled(currentScrollY > 20);

      // Logique de visibilité avec seuils
      if (currentScrollY <= 10) {
        setIsVisible(true);
      } else if (delta > THRESHOLD && currentScrollY > HIDE_START) {
        setIsVisible(false);
        setIsAccountOpen(false);
      } else if (delta < -THRESHOLD) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Déterminer la couleur du texte et logo
  const shouldUseDarkText = !isDarkBackground;

  const textColor = shouldUseDarkText ? 'text-trueme-black' : 'text-white';
  const hoverTextColor = 'hover:text-trueme-gold';
  const logoSrc = shouldUseDarkText ? '/images/logos/trueme-logo.png' : '/images/logos/trueme-logo-blanc.png';
  const buttonHoverBg = shouldUseDarkText ? 'hover:bg-trueme-black/5' : 'hover:bg-white/10';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? isDarkBackground
              ? 'bg-black/40 backdrop-blur-md border-b border-white/10 shadow-glass-strong'
              : 'bg-white/60 backdrop-blur-md border-b border-white/20 shadow-glass-light'
            : isDarkBackground
              ? 'bg-transparent border-b border-white/10'
              : 'bg-transparent border-b border-black/5'
            }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-24">
              <Link href="/" className="flex items-center py-2 group">
                <Image
                  src={logoSrc}
                  alt="True Me"
                  width={160}
                  height={80}
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className={`relative text-sm font-medium tracking-widest uppercase transition-colors duration-300 ${textColor} ${hoverTextColor} group`}>
                  Accueil
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-trueme-gold transition-all duration-300 group-hover:w-full" />
                </Link>
                <Link href="/concept" className={`relative text-sm font-medium tracking-widest uppercase transition-colors duration-300 ${textColor} ${hoverTextColor} group`}>
                  Concept
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-trueme-gold transition-all duration-300 group-hover:w-full" />
                </Link>
                <Link href="/vip" className={`relative text-sm font-medium tracking-widest uppercase transition-colors duration-300 ${textColor} ${hoverTextColor} group`}>
                  VIP
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-trueme-gold transition-all duration-300 group-hover:w-full" />
                </Link>
                <Link href="/authentification" className={`relative text-sm font-medium tracking-widest uppercase transition-colors duration-300 ${textColor} ${hoverTextColor} group`}>
                  Authentifier
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-trueme-gold transition-all duration-300 group-hover:w-full" />
                </Link>

                <div className="flex items-center gap-4 ml-4 pl-4 border-l border-current/10">
                  <button className={`p-2 rounded-full transition-all duration-300 ${textColor} ${hoverTextColor} ${buttonHoverBg}`}>
                    <Search className="w-5 h-5" />
                  </button>

                  {/* Account Dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => setIsAccountOpen(!isAccountOpen)}
                      className={`p-2 rounded-full transition-all duration-300 ${textColor} ${hoverTextColor} ${buttonHoverBg}`}
                    >
                      <User className="w-5 h-5" />
                    </button>

                    {isAccountOpen && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setIsAccountOpen(false)} />

                        <div
                          className="absolute right-0 top-full mt-4 w-64 rounded-2xl shadow-glass-strong py-2 z-50 overflow-hidden"
                          style={{
                            background: 'rgba(255, 255, 255, 0.9)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 255, 255, 0.5)',
                          }}
                        >
                          <div className="relative">
                            <div className="px-6 py-4 border-b border-black/5">
                              <p className="text-xs font-bold text-trueme-secondary uppercase tracking-widest">Mon Compte</p>
                            </div>

                            <div className="py-2">
                              <Link href="/dashboard" className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-trueme-black hover:text-trueme-gold hover:bg-black/5 transition-all duration-200" onClick={() => setIsAccountOpen(false)}>
                                <User className="w-4 h-4" />
                                Dashboard
                              </Link>

                              <Link href="/brands" className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-trueme-black hover:text-trueme-gold hover:bg-black/5 transition-all duration-200" onClick={() => setIsAccountOpen(false)}>
                                <Shield className="w-4 h-4" />
                                Mes Marques
                              </Link>

                              <Link href="/dashboard" className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-trueme-black hover:text-trueme-gold hover:bg-black/5 transition-all duration-200" onClick={() => setIsAccountOpen(false)}>
                                <ShoppingBag className="w-4 h-4" />
                                Mon Panier
                              </Link>
                            </div>

                            <div className="border-t border-black/5 mt-1 pt-1 pb-2">
                              <Link href="/auth/login" className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-trueme-secondary hover:text-trueme-gold hover:bg-black/5 transition-all duration-200 w-full text-left" onClick={() => setIsAccountOpen(false)}>
                                Se déconnecter
                              </Link>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  <Link href="/vendre" className="flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-300 font-medium text-sm tracking-wide bg-trueme-black text-white hover:bg-trueme-gold hover:shadow-lg hover:-translate-y-0.5">
                    <span>Vendre</span>
                  </Link>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center gap-4">
                <button className={`p-2 rounded-full transition-all duration-300 ${textColor} ${hoverTextColor} ${buttonHoverBg}`}>
                  <Search className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setIsAccountOpen(!isAccountOpen)}
                  className={`p-2 rounded-full transition-all duration-300 ${textColor} ${hoverTextColor} ${buttonHoverBg}`}
                >
                  <div className="space-y-1.5">
                    <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isAccountOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${isAccountOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isAccountOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                  </div>
                </button>
              </div>

              {/* Mobile Menu Overlay */}
              <AnimatePresence>
                {isAccountOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-white/20 shadow-glass-strong md:hidden overflow-hidden"
                  >
                    <div className="px-4 py-6 space-y-4">
                      <Link href="/" className="block text-lg font-serif text-trueme-black" onClick={() => setIsAccountOpen(false)}>Accueil</Link>
                      <Link href="/concept" className="block text-lg font-serif text-trueme-black" onClick={() => setIsAccountOpen(false)}>Concept</Link>
                      <Link href="/vip" className="block text-lg font-serif text-trueme-black" onClick={() => setIsAccountOpen(false)}>VIP</Link>
                      <Link href="/authentification" className="block text-lg font-serif text-trueme-black" onClick={() => setIsAccountOpen(false)}>Authentifier</Link>
                      <Link href="/vendre" className="block text-lg font-serif text-trueme-gold" onClick={() => setIsAccountOpen(false)}>Vendre</Link>
                      <hr className="border-black/5" />
                      <Link href="/dashboard" className="block text-sm text-trueme-secondary" onClick={() => setIsAccountOpen(false)}>Mon Compte</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export default LegacyNavbar
