"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { User, ShoppingBag, Shield } from 'lucide-react';
import { Navbar, NavBody, NavItems, MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle } from './ui/resizable-navbar';

const TrueMeNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 100; // Synchronisé avec resizable-navbar
      const progress = Math.min(scrollY / maxScroll, 1);
      
      setScrollProgress(progress);
      setIsScrolled(scrollY > 100); // Synchronisé avec resizable-navbar

      // Hide/Show navbar behavior on mobile only
      if (window.innerWidth < 1024) { // lg breakpoint
        if (scrollY > lastScrollY && scrollY > 100) {
          // Scrolling down & past threshold - hide navbar
          setIsNavVisible(false);
        } else if (scrollY < lastScrollY || scrollY < 100) {
          // Scrolling up or near top - show navbar
          setIsNavVisible(true);
        }
        setLastScrollY(scrollY);
      } else {
        // Always visible on desktop
        setIsNavVisible(true);
      }
    };

    // Throttle scroll pour performance et fluidité
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

  const navItems = [
    { name: 'Accueil', link: '/' },
    { name: 'VIP', link: '/vip' },
    { name: 'Authentifier un objet', link: '/authentification' },
  ];

  const accountItems = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Mes Marques', href: '/brands' },
    { name: 'Connexion', href: '/auth/login' },
    { name: 'Inscription', href: '/auth/register' },
  ];

  const TrueMeLogo = () => {
    // Approche plus conservative pour éviter tremblements
    const scale = 1 - (scrollProgress * 0.25); // Réduction plus subtile
    
    return (
      <Link href="/" className="flex items-center z-20">
        <div 
          className="w-16 h-16 flex items-center justify-center"
          style={{
            transform: `scale(${Math.max(scale, 0.7)})`, // Minimum scale 0.7
            transition: 'transform 0.15s ease-out'
          }}
        >
          <img 
            src="/images/logos/trueme-logo.png" 
            alt="True Me Logo" 
            className="object-contain w-full h-full hover:scale-105 transition-transform duration-200 ease-out"
          />
        </div>
      </Link>
    );
  };

  const SellButton = () => {
    // Changements plus subtils pour éviter tremblements
    const buttonClasses = isScrolled 
      ? 'px-4 py-1.5 text-sm' 
      : 'px-6 py-2 text-base';
    
    return (
      <Link 
        href="/vendre" 
        className={`bg-gradient-to-r from-trueme-gold to-trueme-gold/80 hover:from-trueme-gold/90 hover:to-trueme-gold text-black font-semibold ${buttonClasses} rounded-full transform hover:scale-105 shadow-lg flex items-center gap-2 z-20 transition-all duration-150 ease-out`}
      >
        <ShoppingBag 
          className={`transition-all duration-150 ease-out ${isScrolled ? "w-3.5 h-3.5" : "w-4 h-4"}`}
        />
        Vendre
      </Link>
    );
  };

  const AccountDropdown = () => {
    const iconSize = isScrolled ? 'w-4 h-4' : 'w-5 h-5';
    
    return (
      <div className="relative">
        <button
          onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)}
          onMouseEnter={() => setIsAccountDropdownOpen(true)}
          className="flex items-center space-x-1 text-trueme hover:text-trueme-gold z-20 p-2 rounded-full hover:bg-trueme-gold/10 transition-all duration-150 ease-out"
        >
          <User className={`${iconSize} transition-all duration-150 ease-out`} />
        </button>
      
      {isAccountDropdownOpen && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white/90 backdrop-blur-xl rounded-lg shadow-xl py-2 z-[60000] border border-trueme-gold/20"
          onMouseLeave={() => setIsAccountDropdownOpen(false)}
        >
          {accountItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-sm text-trueme hover:text-trueme-gold hover:bg-trueme-gold/5 transition-colors duration-200"
              onClick={() => setIsAccountDropdownOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
    );
  };

  return (
    <Navbar className={`transition-transform duration-200 ease-out ${
      isNavVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
        {/* Desktop Navigation */}
        <NavBody className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg">
          <TrueMeLogo />
          <NavItems items={navItems} className="text-trueme" />
          <div className="flex items-center gap-4">
            <SellButton />
            <AccountDropdown />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg">
        <MobileNavHeader>
          <div className="flex items-center">
            <TrueMeLogo />
          </div>
          <div className="flex items-center gap-2">
            {/* Bouton Vendre mobile (header) */}
            <Link
              href="/vendre"
              className="bg-gradient-to-r from-trueme-gold to-trueme-gold/80 text-black font-semibold px-3 py-1.5 text-xs rounded-full hover:from-trueme-gold/90 hover:to-trueme-gold/70 transition-all duration-300 flex items-center gap-1 lg:hidden"
            >
              <ShoppingBag className="w-3 h-3" />
              Vendre
            </Link>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          className="bg-white"
        >
          {/* Navigation principale */}
          <div className="space-y-8">
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
          <div className="border-t border-trueme-gold/20 my-8"></div>
          
          {/* Section compte */}
          <div className="space-y-6">
            <p className="text-trueme/60 text-lg font-medium text-center">Mon Compte</p>
            <div className="space-y-4">
              {accountItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-trueme text-lg hover:text-trueme-gold transition-colors duration-300 text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default TrueMeNavbar;
