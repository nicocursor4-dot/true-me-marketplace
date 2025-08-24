"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { User } from 'lucide-react';
import { Navbar, NavBody, NavItems, MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle } from './ui/resizable-navbar';

const TrueMeNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', link: '/' },
    { name: 'Marketplace', link: '/marketplace' },
    { name: 'VIP', link: '/auth/register' },
    { name: 'À propos', link: '/brands' },
  ];

  const accountItems = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Mes Marques', href: '/brands' },
    { name: 'Connexion', href: '/auth/login' },
    { name: 'Inscription', href: '/auth/register' },
  ];

  const TrueMeLogo = ({ visible }: { visible?: boolean }) => (
    <Link href="/" className="flex items-center space-x-3 z-20">
      <div className="w-8 h-8 bg-trueme-gold rounded-full flex items-center justify-center">
        <span className="text-black font-bold text-sm">TM</span>
      </div>
      {!visible && (
        <span className="text-trueme font-light text-xl tracking-wider">True Me</span>
      )}
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
          className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-lg shadow-xl py-2 z-50 border border-trueme-gold/20"
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
      <NavBody className="bg-neutral-50/15 backdrop-blur-lg border border-white/20 shadow-lg">
        <TrueMeLogo />
        <NavItems items={navItems} className="text-trueme" />
        <AccountDropdown />
      </NavBody>

      <MobileNav className="bg-neutral-50/15 backdrop-blur-lg border border-white/20 shadow-lg">
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
          className="bg-neutral-50/97 backdrop-blur-xl border border-trueme-gold/20"
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
