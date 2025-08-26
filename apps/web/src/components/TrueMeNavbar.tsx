"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { User, ShoppingBag, Shield } from 'lucide-react';
import { Navbar, NavBody, NavItems, MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle } from './ui/resizable-navbar';

const TrueMeNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const TrueMeLogo = () => (
    <Link href="/" className="flex items-center z-20">
      <img 
        src="/images/logos/trueme-logo.png" 
        alt="True Me Logo" 
        className={`object-contain transition-all duration-300 ${
          isScrolled ? "w-12 h-12" : "w-24 h-24"
        }`}
      />
    </Link>
  );

  const SellButton = () => (
    <Link href="/vendre" className="bg-gradient-to-r from-trueme-gold to-trueme-gold/80 hover:from-trueme-gold/90 hover:to-trueme-gold text-black font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 z-20">
      <ShoppingBag className="w-4 h-4" />
      Vendre
    </Link>
  );

  const AccountDropdown = () => (
    <div className="relative">
      <button
        onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)}
        onMouseEnter={() => setIsAccountDropdownOpen(true)}
        className="flex items-center space-x-1 text-trueme hover:text-trueme-gold transition-colors duration-200 z-20"
      >
        <User className="w-5 h-5" />
      </button>
      
      {isAccountDropdownOpen && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white/90 backdrop-blur-xl rounded-lg shadow-xl py-2 z-50 border border-trueme-gold/20"
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

  return (
    <Navbar>
      <NavBody className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg">
        <TrueMeLogo />
        <NavItems items={navItems} className="text-trueme" />
        <div className="flex items-center gap-4">
          <SellButton />
          <AccountDropdown />
        </div>
      </NavBody>

      <MobileNav className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg">
        <MobileNavHeader>
          <TrueMeLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          className="bg-white/95 backdrop-blur-xl border border-trueme-gold/20"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-trueme text-lg font-medium hover:text-trueme-gold transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Bouton Vendre pour mobile */}
          <Link
            href="/vendre"
            className="bg-gradient-to-r from-trueme-gold to-trueme-gold/80 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg flex items-center gap-2 justify-center my-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <ShoppingBag className="w-4 h-4" />
            Vendre
          </Link>
          
          <div className="border-t border-trueme-gold/20 pt-4 mt-4">
            <p className="text-trueme/60 text-sm mb-3 font-medium">Mon Compte</p>
            {accountItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-trueme text-base hover:text-trueme-gold transition-colors duration-200 mb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default TrueMeNavbar;
