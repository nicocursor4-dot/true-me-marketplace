'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Crown, Menu, X, User, ChevronDown } from 'lucide-react';

const TrueMeNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'backdrop-blur-xl bg-black/40 border-b border-white/20 py-3' 
            : 'bg-black/30 backdrop-blur-xl py-8 mt-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between">
            
            {/* Logo avec animation */}
            <Link href="/" className="flex items-center space-x-3 group">
              <Crown className="w-10 h-10 text-trueme-gold transition-transform group-hover:scale-110" />
              <div className={`transition-all duration-300 ${
                isScrolled ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'
              }`}>
                <span className="text-2xl font-light text-white tracking-wide">TRUE ME</span>
                <div className="text-xs text-trueme-gold font-light tracking-[0.2em]">Not a Styl. A Signature.</div>
              </div>
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center space-x-12">
              <Link href="/" className="text-white/90 hover:text-white transition-colors font-light text-lg">
                Accueil
              </Link>
              <Link href="/marketplace" className="text-white/90 hover:text-white transition-colors font-light text-lg">
                Marketplace
              </Link>
              <Link href="/vip" className="text-white/90 hover:text-white transition-colors font-light text-lg">
                VIP
              </Link>
              <Link href="/about" className="text-white/90 hover:text-white transition-colors font-light text-lg">
                À propos
              </Link>
            </nav>

            {/* Mon Compte Desktop */}
            <div className="hidden md:flex items-center relative">
              <button 
                onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)}
                className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors font-light text-lg group"
              >
                <User className="w-6 h-6" />
                <span>Mon Compte</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isAccountDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isAccountDropdownOpen && (
                <div className="absolute top-full right-0 mt-3 w-48 bg-black/50 backdrop-blur-xl border border-white/20 rounded-xl py-2 shadow-xl">
                  <Link href="/dashboard" className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-colors">
                    Dashboard
                  </Link>
                  <Link href="/brands" className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-colors">
                    Mes Marques
                  </Link>
                  <hr className="my-2 border-white/20" />
                  <Link href="/auth/login" className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-colors">
                    Connexion
                  </Link>
                  <Link href="/auth/register" className="block px-4 py-3 text-trueme-gold hover:text-white hover:bg-white/10 transition-colors">
                    S'inscrire
                  </Link>
                </div>
              )}
            </div>

            {/* Bouton Menu Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white/90 hover:text-white transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md p-6">
            <div className="flex flex-col h-full">
              {/* Header Mobile */}
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center space-x-3">
                  <Crown className="w-8 h-8 text-trueme-gold" />
                  <span className="text-xl font-light text-white tracking-wide">TRUE ME</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-white/90 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Navigation Mobile */}
              <div className="flex flex-col space-y-8 flex-1">
                <Link href="/" className="text-white text-2xl font-light hover:text-trueme-gold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  Accueil
                </Link>
                <Link href="/marketplace" className="text-white text-2xl font-light hover:text-trueme-gold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  Marketplace
                </Link>
                <Link href="/vip" className="text-white text-2xl font-light hover:text-trueme-gold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  VIP
                </Link>
                <Link href="/about" className="text-white text-2xl font-light hover:text-trueme-gold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  À propos
                </Link>
                
                <hr className="border-white/20" />
                
                {/* Compte Mobile */}
                <div className="space-y-6">
                  <h3 className="text-trueme-gold text-lg font-medium">Mon Compte</h3>
                  <Link href="/dashboard" className="text-white text-xl font-light hover:text-trueme-gold transition-colors block" onClick={() => setIsMobileMenuOpen(false)}>
                    Dashboard
                  </Link>
                  <Link href="/brands" className="text-white text-xl font-light hover:text-trueme-gold transition-colors block" onClick={() => setIsMobileMenuOpen(false)}>
                    Mes Marques
                  </Link>
                </div>
                
                {/* Auth Mobile */}
                <div className="pt-8 space-y-4">
                  <Link href="/auth/login" className="text-white text-xl font-light hover:text-trueme-gold transition-colors block" onClick={() => setIsMobileMenuOpen(false)}>
                    Connexion
                  </Link>
                  <Link href="/auth/register" className="bg-trueme-gold text-white px-6 py-3 rounded-full text-center font-medium hover:bg-trueme-gold/90 transition-colors block" onClick={() => setIsMobileMenuOpen(false)}>
                    S'inscrire
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TrueMeNavbar;
