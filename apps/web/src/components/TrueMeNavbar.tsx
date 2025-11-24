"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { User, ShoppingBag, Shield, Search, X } from 'lucide-react';
import { Navbar, NavBody, NavItems, MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle } from './ui/resizable-navbar';
import LuxuryFilterMenu from './LuxuryFilterMenu';
import Image from 'next/image'

const TrueMeNavbar = ({ heroDarkActive = false }: { heroDarkActive?: boolean }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isLuxuryFilterOpen, setIsLuxuryFilterOpen] = useState(false);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  
  
  // Refs for accessibility
  const accountButtonRef = useRef<HTMLButtonElement>(null);
  const accountMenuRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen || isMobileSearchOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen, isMobileSearchOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 100;
      const progress = Math.min(scrollY / maxScroll, 1);
      
      setScrollProgress(progress);
      setIsScrolled(scrollY > 100);

      if (window.innerWidth < 1024) {
        const scrollDiff = Math.abs(scrollY - lastScrollY);
        
        if (scrollY > lastScrollY && scrollY > 80 && scrollDiff > 5) {
          setIsNavVisible(false);
        } else if (scrollY < lastScrollY && scrollDiff > 5) {
          setIsNavVisible(true);
        } else if (scrollY <= 50) {
          setIsNavVisible(true);
        }
        setLastScrollY(scrollY);
      } else {
        setIsNavVisible(true);
      }
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [lastScrollY]);

  // Accessibility: Handle escape key for closing dropdowns
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      if (isAccountOpen) {
        setIsAccountOpen(false);
        accountButtonRef.current?.focus();
      } else if (isSearchOpen) {
        setIsSearchOpen(false);
      } else if (isMobileSearchOpen) {
        setIsMobileSearchOpen(false);
      } else if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }
  }, [isAccountOpen, isSearchOpen, isMobileSearchOpen, isMobileMenuOpen]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  // Fermer dropdown au clic extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isAccountOpen && !target.closest('.account-dropdown')) {
        setIsAccountOpen(false);
      }
    };
    
    if (isAccountOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isAccountOpen]);

  // Focus management for account dropdown
  useEffect(() => {
    if (isAccountOpen && accountMenuRef.current) {
      const firstFocusable = accountMenuRef.current.querySelector('a, button');
      if (firstFocusable) {
        (firstFocusable as HTMLElement).focus();
      }
    }
  }, [isAccountOpen]);

  const navItems = [
    { name: 'Accueil', link: '/' },
    { name: 'VIP', link: '/vip' },
    { name: 'Authentifier un objet', link: '/authentification' },
  ];

  const TrueMeLogo = () => {
    const scale = 1 - (scrollProgress * 0.25);
    const heroDark = heroDarkActive && !isScrolled;
    
    return (
      <Link href="/" className="flex items-center z-20" aria-label="Retour à l'accueil - True Me Marketplace">
        <div 
          className="w-16 h-16 flex items-center justify-center"
          style={{
            transform: `scale(${Math.max(scale, 0.7)})`,
            transition: 'transform 0.15s ease-out'
          }}
        >
          <Image 
            src={heroDark ? "/images/logos/trueme-logo-blanc.png" : "/images/logos/trueme-logo.png"} 
            alt="True Me - Marketplace de luxe authentifié" 
            width={64}
            height={64}
            className="object-contain hover:scale-105 transition-transform duration-200 ease-out"
            priority={false}
          />
        </div>
      </Link>
    );
  };

  return (
    <>
      <Navbar className={`transition-transform duration-300 ease-in-out ${
        isNavVisible && !isNavbarHidden ? 'translate-y-0' : '-translate-y-[120%]'
      }`}>
      {/* Desktop Navigation */}
      <NavBody className="backdrop-blur-lg border border-white/30 shadow-lg rounded-[2.5rem]">
        <TrueMeLogo />
        <NavItems 
          items={navItems} 
          className="text-trueme"
          linkClassName={heroDarkActive && !isScrolled ? "text-white" : "text-trueme"}
        />
        
        <div className="flex items-center gap-1 lg:gap-2">
          {/* Barre de recherche desktop - espacement corrigé */}
          <div className="hidden xl:flex items-center">
            {isSearchOpen ? (
              <div className="flex items-center bg-white/90 backdrop-blur-lg rounded-full px-4 py-2 border border-trueme-gold/30 shadow-lg" role="search">
                <Search className="w-4 h-4 text-trueme/60 mr-2" aria-hidden="true" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Rechercher..."
                  className="bg-transparent outline-none text-sm text-trueme placeholder-trueme/60 w-48 lg:w-56"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                  aria-label="Rechercher des articles de luxe"
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="ml-2 p-1 hover:bg-trueme-gold/20 rounded-full"
                  aria-label="Fermer la recherche"
                >
                  <X className="w-3 h-3 text-trueme/60" aria-hidden="true" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`p-2 transition-colors rounded-full hover:bg-trueme-gold/10 ${heroDarkActive && !isScrolled ? 'text-white hover:text-white/80' : 'text-trueme hover:text-trueme-gold'}`}
                aria-label="Ouvrir la recherche"
                aria-expanded={isSearchOpen}
              >
                <Search className={`transition-all duration-150 ease-out ${isScrolled ? "w-4 h-4" : "w-5 h-5"}`} aria-hidden="true" />
              </button>
            )}
          </div>
          
          {/* Icône recherche mobile */}
          <button 
            onClick={() => setIsMobileSearchOpen(true)}
            className={`xl:hidden p-2 transition-colors rounded-full hover:bg-trueme-gold/10 ${heroDarkActive && !isScrolled ? 'text-white hover:text-white/80' : 'text-trueme hover:text-trueme-gold'}`}
            aria-label="Ouvrir la recherche mobile"
            aria-expanded={isMobileSearchOpen}
          >
            <Search className="w-5 h-5" aria-hidden="true" />
          </button>

          {/* Sell Button */}
          <Link 
            href="/vendre" 
            className={`bg-gradient-to-r from-trueme-gold to-trueme-gold/80 hover:from-trueme-gold/90 hover:to-trueme-gold text-black font-semibold ${isScrolled ? 'px-3 py-1.5 text-sm' : 'px-4 py-2 text-base'} rounded-full transform hover:scale-105 shadow-lg flex items-center gap-2 z-20 transition-all duration-150 ease-out`}
            aria-label="Vendre vos articles de luxe"
          >
            <ShoppingBag className={`transition-all duration-150 ease-out ${isScrolled ? "w-3.5 h-3.5" : "w-4 h-4"}`} aria-hidden="true" />
            Vendre
          </Link>

          {/* Account Dropdown - Vrai glassmorphism */}
          <div className="relative account-dropdown">
            <button 
              ref={accountButtonRef}
              onClick={() => setIsAccountOpen(!isAccountOpen)}
              onMouseEnter={() => setIsAccountOpen(true)}
              className={`p-2 transition-colors rounded-full hover:bg-trueme-gold/10 ${heroDarkActive && !isScrolled ? 'text-white hover:text-white/80' : 'text-trueme hover:text-trueme-gold'}`}
              aria-label="Menu compte utilisateur"
              aria-expanded={isAccountOpen}
              aria-haspopup="menu"
            >
              <User className={`transition-all duration-150 ease-out ${isScrolled ? "w-4 h-4" : "w-5 h-5"}`} aria-hidden="true" />
            </button>
            
            {isAccountOpen && (
              <>
                {/* Overlay pour bloquer les clics en arrière-plan */}
                <div className="fixed inset-0 z-40" onClick={() => setIsAccountOpen(false)}></div>
                
                <div 
                  ref={accountMenuRef}
                  className="absolute right-0 top-full mt-2 w-56 rounded-xl shadow-2xl py-2 z-50 overflow-hidden"
                  onMouseLeave={() => setIsAccountOpen(false)}
                  onClick={(e) => e.stopPropagation()}
                  role="menu"
                  aria-labelledby="account-button"
                  style={{
                    background: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(40px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.1)'
                  }}
                >
                <div className="relative">
                  <div className="px-4 py-3 border-b border-white/10">
                    <p className="text-sm font-bold text-white">Mon Compte</p>
                  </div>
                  
                  <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-white hover:text-trueme-gold hover:bg-white/10 transition-all duration-200" onClick={() => setIsAccountOpen(false)} role="menuitem">
                    <User className="w-4 h-4" aria-hidden="true" />
                    Dashboard
                  </Link>
                  
                  <Link href="/brands" className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-white hover:text-trueme-gold hover:bg-white/10 transition-all duration-200" onClick={() => setIsAccountOpen(false)} role="menuitem">
                    <Shield className="w-4 h-4" aria-hidden="true" />
                    Mes Marques
                  </Link>
                  
                  <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-white hover:text-trueme-gold hover:bg-white/10 transition-all duration-200" onClick={() => setIsAccountOpen(false)} role="menuitem">
                    <ShoppingBag className="w-4 h-4" aria-hidden="true" />
                    Mon Panier
                  </Link>
                  
                  <div className="border-t border-white/10 mt-1 pt-1">
                    <button className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-white/80 hover:text-trueme-gold hover:bg-white/10 transition-all duration-200 w-full text-left" role="menuitem" aria-label="Se déconnecter du compte">
                      Se déconnecter
                    </button>
                  </div>
                  
                  <div className="border-t border-white/10 mt-1 pt-1">
                    <Link href="/auth/login" className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-white hover:text-trueme-gold hover:bg-white/10 transition-all duration-200" onClick={() => setIsAccountOpen(false)} role="menuitem">
                      Connexion
                    </Link>
                    
                    <Link href="/auth/register" className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-white hover:text-trueme-gold hover:bg-white/10 transition-all duration-200" onClick={() => setIsAccountOpen(false)} role="menuitem">
                      Inscription
                    </Link>
                  </div>
                </div>
              </div>
              </>
            )}
          </div>

          {/* Cart Button */}
          <Link 
            href="/dashboard" 
            className="relative p-2 text-trueme hover:text-trueme-gold transition-colors rounded-full hover:bg-trueme-gold/10"
            aria-label="Panier (2 articles)"
          >
            <ShoppingBag className={`transition-all duration-150 ease-out ${isScrolled ? "w-4 h-4" : "w-5 h-5"}`} aria-hidden="true" />
            <span className="absolute -top-1 -right-1 bg-trueme-gold text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium" aria-label="2 articles dans le panier">
              2
            </span>
          </Link>
        </div>
      </NavBody>

      {/* Mobile Search Overlay */}
      {isMobileSearchOpen && (
        <div className="xl:hidden fixed inset-0 bg-white/95 backdrop-blur-xl z-[60000] flex items-start pt-20" role="dialog" aria-label="Recherche mobile" aria-modal="true">
          <div className="w-full px-6">
            <div className="flex items-center bg-white/90 backdrop-blur-lg rounded-full px-6 py-4 border border-trueme-gold/30 shadow-lg" role="search">
              <Search className="w-5 h-5 text-trueme/60 mr-3" aria-hidden="true" />
              <input
                ref={mobileSearchInputRef}
                type="text"
                placeholder="Rechercher..."
                className="bg-transparent outline-none text-lg text-trueme placeholder-trueme/60 w-full"
                autoFocus
                aria-label="Rechercher des articles de luxe"
              />
              <button
                onClick={() => setIsMobileSearchOpen(false)}
                className="ml-3 p-2 hover:bg-trueme-gold/20 rounded-full"
                aria-label="Fermer la recherche mobile"
              >
                <X className="w-5 h-5 text-trueme/60" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader className={`px-4 py-3 mx-2 mt-2 transition-all duration-300 backdrop-blur-lg border border-white/30 shadow-lg rounded-[3rem]`}>
          <TrueMeLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          className="bg-white"
        >
          <div className="flex flex-col h-full pt-4 pb-8 max-h-screen overflow-y-auto justify-between">
            
            {/* Navigation principale */}
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className="text-trueme text-2xl font-medium hover:text-trueme-gold transition-colors duration-300 block text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Bouton Vendre pour mobile */}
              <Link
                href="/vendre"
                className="bg-gradient-to-r from-trueme-gold to-trueme-gold/80 text-black font-bold text-xl px-8 py-4 rounded-full hover:from-trueme-gold/90 hover:to-trueme-gold/70 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 justify-center mx-auto w-fit"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <ShoppingBag className="w-6 h-6" />
                Vendre
              </Link>
            </div>
            
            {/* Séparateur */}
            <div className="border-t border-trueme-gold/20 my-6"></div>
            
            {/* Section compte - panier dupliqué supprimé */}
            <div className="flex flex-col gap-4">
              <p className="text-trueme/60 text-lg font-medium text-center">Mon Compte</p>
              <div className="flex flex-col gap-5">
                
                <Link href="/dashboard" className="flex items-center justify-center gap-3 text-trueme text-lg hover:text-trueme-gold transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>
                  <User className="w-5 h-5" />
                  Dashboard
                </Link>
                
                <Link href="/brands" className="flex items-center justify-center gap-3 text-trueme text-lg hover:text-trueme-gold transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>
                  <Shield className="w-5 h-5" />
                  Mes Marques
                </Link>
                
                {/* Boutons connexion/inscription côte à côte - version mobile corrigée */}
                <div className="flex gap-3 justify-center items-center mt-8 px-4">
                  <Link
                    href="/auth/login"
                    className="flex-1 bg-transparent border-2 border-trueme text-trueme hover:bg-trueme hover:text-white font-semibold px-4 py-3 rounded-full transition-all duration-300 text-center text-base"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Connexion
                  </Link>
                  <Link
                    href="/auth/register"
                    className="flex-1 bg-gradient-to-r from-trueme-gold to-trueme-gold/80 text-black hover:from-trueme-gold/90 hover:to-trueme-gold font-semibold px-4 py-3 rounded-full transition-all duration-300 text-center text-base"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Inscription
                  </Link>
                </div>
                
                {/* Se déconnecter */}
                <Link
                  href="/auth/logout"
                  className="block text-trueme/60 text-base hover:text-trueme-gold transition-colors duration-300 text-center mt-6"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Se déconnecter
                </Link>
              </div>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>

    <LuxuryFilterMenu 
      isOpen={isLuxuryFilterOpen}
      onClose={() => setIsLuxuryFilterOpen(false)}
      onNavbarToggle={setIsNavbarHidden}
      isMobile={typeof window !== 'undefined' && window.innerWidth < 1024}
    />
    </>
  );
};

export default TrueMeNavbar;
