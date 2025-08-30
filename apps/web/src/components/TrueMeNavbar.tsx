"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { User, ShoppingBag, Shield, Search, Menu, X } from 'lucide-react';
import { Navbar, NavBody, NavItems, MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle } from './ui/resizable-navbar';

const TrueMeNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserConnected] = useState(false); // Pour validation, sera géré plus tard

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
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
      // Nettoyage au unmount
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 100; // Synchronisé avec resizable-navbar
      const progress = Math.min(scrollY / maxScroll, 1);
      
      setScrollProgress(progress);
      setIsScrolled(scrollY > 100); // Synchronisé avec resizable-navbar

      // Hide/Show navbar behavior on mobile only
      if (window.innerWidth < 1024) { // lg breakpoint
        const scrollDiff = Math.abs(scrollY - lastScrollY);
        
        if (scrollY > lastScrollY && scrollY > 80 && scrollDiff > 5) {
          // Scrolling down & past threshold - hide navbar completely
          setIsNavVisible(false);
        } else if (scrollY < lastScrollY && scrollDiff > 5) {
          // Scrolling up - show navbar
          setIsNavVisible(true);
        } else if (scrollY <= 50) {
          // Always show at top
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

  // Logique des items compte selon connexion (pour validation on affiche tout)
  const getAccountItems = () => {
    const connectedItems = [
      { name: 'Dashboard', href: '/dashboard', icon: User },
      { name: 'Mes Marques', href: '/brands', icon: Shield },
      { name: 'Mon Panier', href: '/panier', icon: ShoppingBag },
      { name: 'Se déconnecter', href: '/auth/logout', icon: null },
    ];
    
    const notConnectedItems = [
      { name: 'Mon Panier', href: '/panier', icon: ShoppingBag },
      { name: 'Connexion', href: '/auth/login', icon: null },
      { name: 'Inscription', href: '/auth/register', icon: null },
    ];
    
    // Pour validation, on affiche tout
    return [...connectedItems, ...notConnectedItems];
  };
  
  const accountItems = getAccountItems();

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
    <Navbar className={`transition-transform duration-300 ease-in-out ${
      isNavVisible ? 'translate-y-0' : '-translate-y-[120%]'
    }`}>
        {/* Desktop Navigation */}
        <NavBody className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg">
          <TrueMeLogo />
          <NavItems items={navItems} className="text-trueme" />
          <div className="flex items-center gap-2">
            {/* Barre de recherche desktop */}
            <div className="hidden xl:flex items-center">
              {isSearchOpen ? (
                <div className="flex items-center bg-white/90 backdrop-blur-lg rounded-full px-4 py-2 border border-trueme-gold/30 shadow-lg">
                  <Search className="w-4 h-4 text-trueme/60 mr-2" />
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    className="bg-transparent outline-none text-sm text-trueme placeholder-trueme/60 w-64"
                    autoFocus
                    onBlur={() => setIsSearchOpen(false)}
                  />
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-trueme hover:text-trueme-gold transition-colors rounded-full hover:bg-trueme-gold/10"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>
            
            {/* Icône recherche mobile/tablet */}
            <button className="xl:hidden p-2 text-trueme hover:text-trueme-gold transition-colors rounded-full hover:bg-trueme-gold/10">
              <Search className="w-5 h-5" />
            </button>
            
            {/* Bouton panier */}
            <Link
              href="/panier"
              className="p-2 text-trueme hover:text-trueme-gold transition-colors rounded-full hover:bg-trueme-gold/10 relative"
            >
              <ShoppingBag className={`transition-all duration-150 ease-out ${isScrolled ? "w-4 h-4" : "w-5 h-5"}`} />
              {/* Badge panier (optionnel) */}
              <span className="absolute -top-1 -right-1 bg-trueme-gold text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                2
              </span>
            </Link>
            
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
            {/* Bouton panier mobile */}
            <Link
              href="/panier"
              className="p-2 text-trueme hover:text-trueme-gold transition-colors rounded-full hover:bg-trueme-gold/10 relative"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-trueme-gold text-black text-xs rounded-full w-4 h-4 flex items-center justify-center font-semibold text-[10px]">
                2
              </span>
            </Link>
            
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
          {/* Contenu centré verticalement */}
          <div className="flex flex-col justify-center h-full py-8 space-y-12">
            
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
            <div className="border-t border-trueme-gold/20"></div>
            
            {/* Section compte */}
            <div className="space-y-8">
              <p className="text-trueme/60 text-lg font-medium text-center">Mon Compte</p>
              <div className="space-y-6">
                {/* Items avec icônes */}
                {accountItems.filter(item => item.icon).map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-3 text-trueme text-lg hover:text-trueme-gold transition-colors duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {IconComponent && <IconComponent className="w-5 h-5" />}
                      {item.name}
                    </Link>
                  );
                })}
                
                {/* Boutons connexion/inscription côte à côte */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                  {accountItems.filter(item => !item.icon && (item.name === 'Connexion' || item.name === 'Inscription')).map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`${
                        item.name === 'Inscription' 
                          ? 'bg-gradient-to-r from-trueme-gold to-trueme-gold/80 text-black hover:from-trueme-gold/90 hover:to-trueme-gold'
                          : 'bg-transparent border-2 border-trueme text-trueme hover:bg-trueme hover:text-white'
                      } font-semibold px-6 py-3 rounded-full transition-all duration-300 text-center min-w-[120px]`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                
                {/* Se déconnecter */}
                {accountItems.filter(item => item.name === 'Se déconnecter').map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-trueme/60 text-base hover:text-trueme-gold transition-colors duration-300 text-center mt-6"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default TrueMeNavbar;
