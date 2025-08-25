'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { User, Menu, X } from 'lucide-react';

const SimpleNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'VIP', href: '/auth/register' },
    { name: 'À propos', href: '/brands' },
  ];

  const accountItems = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Mes Marques', href: '/brands' },
    { name: 'Connexion', href: '/auth/login' },
    { name: 'Inscription', href: '/auth/register' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-trueme/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/images/logos/trueme-logo.png" 
                alt="True Me Logo" 
                className="h-8 w-8 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-trueme hover:text-trueme-gold px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Account Dropdown */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center">
              <div className="relative">
                <button
                  onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)}
                  className="text-trueme hover:text-trueme-gold p-2 transition-colors duration-200"
                >
                  <User className="h-5 w-5" />
                </button>

                {isAccountDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-trueme/10">
                    {accountItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-trueme hover:bg-trueme/5 hover:text-trueme-gold"
                        onClick={() => setIsAccountDropdownOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-trueme hover:text-trueme-gold p-2"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-trueme/10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-trueme hover:text-trueme-gold block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="border-t border-trueme/10 pt-4">
                <div className="text-trueme/60 px-3 py-2 text-sm font-medium">Mon Compte</div>
                {accountItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-trueme hover:text-trueme-gold block px-3 py-2 text-base font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default SimpleNavbar;
