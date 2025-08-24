'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Crown, Menu, X } from 'lucide-react';
import { 
  Navbar, 
  NavBody, 
  NavItems, 
  MobileNav, 
  MobileNavHeader, 
  MobileNavMenu, 
  MobileNavToggle,
  NavbarButton 
} from '@/components/ui/resizable-navbar';

const TrueMeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', link: '/' },
    { name: 'Marketplace', link: '/marketplace' },
    { name: 'Marques', link: '/brands' },
    { name: 'Dashboard', link: '/dashboard' }
  ];

  const TrueMeLogo = () => (
    <Link href="/" className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1">
      <Crown className="w-8 h-8 text-trueme-gold" />
      <div className="flex flex-col">
        <span className="font-bold text-trueme text-xl tracking-wide">TRUE ME</span>
        <span className="text-xs text-trueme-gold font-light tracking-[0.1em]">Not a Styl. A Signature.</span>
      </div>
    </Link>
  );

  return (
    <Navbar className="fixed top-0 inset-x-0 z-50">
      {/* Desktop Navigation */}
      <NavBody className="bg-trueme-cream/80 backdrop-blur-lg border border-trueme-gold/20">
        <TrueMeLogo />
        
        <NavItems 
          items={navItems}
          className="text-trueme hover:text-trueme-gold font-medium"
        />
        
        <div className="flex items-center space-x-4">
          <Link href="/auth/login" className="text-trueme hover:text-trueme-gold font-medium px-4 py-2">
            Connexion
          </Link>
          <NavbarButton 
            href="/auth/register"
            variant="gradient"
            className="bg-gradient-to-r from-trueme-gold to-trueme-gold/80 text-white hover:from-trueme-gold/90 hover:to-trueme-gold/70"
          >
            S'inscrire
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav className="bg-trueme-cream/90 backdrop-blur-lg border border-trueme-gold/20">
        <MobileNavHeader>
          <TrueMeLogo />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-trueme hover:text-trueme-gold transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </MobileNavHeader>

        <MobileNavMenu 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)}
          className="bg-trueme-cream/95 backdrop-blur-lg border border-trueme-gold/20"
        >
          <div className="flex flex-col space-y-4 w-full">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="text-trueme hover:text-trueme-gold font-medium py-2 px-4 rounded-lg hover:bg-trueme-gold/10 transition-all"
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t border-trueme-gold/20 pt-4 flex flex-col space-y-3">
              <Link
                href="/auth/login"
                onClick={() => setIsOpen(false)}
                className="text-trueme hover:text-trueme-gold font-medium py-2 px-4 rounded-lg hover:bg-trueme-gold/10 transition-all"
              >
                Connexion
              </Link>
              <Link
                href="/auth/register"
                onClick={() => setIsOpen(false)}
                className="bg-gradient-to-r from-trueme-gold to-trueme-gold/80 text-white font-medium py-2 px-4 rounded-lg hover:from-trueme-gold/90 hover:to-trueme-gold/70 transition-all text-center"
              >
                S'inscrire
              </Link>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default TrueMeNavbar;
