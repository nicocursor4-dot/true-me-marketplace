'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Mon Statut', href: '/dashboard' },
    { name: 'Mes Marques', href: '/brands' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-navigation h-24">
      <div className="luxury-container h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="luxury-hover">
            <div className="text-2xl font-bold tracking-tight text-white">
              TRUE ME
              <span className="text-trueme-gold ml-2 text-lg">•</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-all duration-400 px-4 py-2 rounded-xl ${
                  pathname === item.href 
                    ? 'text-white bg-trueme-gold shadow-lg' 
                    : 'text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* User Profile */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/auth/login"
              className="btn-secondary text-sm px-6 py-3"
            >
              Connexion
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-xl bg-white/10 backdrop-blur-sm"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></div>
              <div className={`w-full h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}></div>
              <div className={`w-full h-0.5 bg-white transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-morphism mx-4 mt-2 rounded-2xl">
          <div className="p-8">
            <div className="space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block font-medium text-trueme hover:text-trueme-gold transition-all duration-300 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/auth/login"
                className="block font-medium text-trueme-gold hover:text-trueme transition-all duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                Connexion
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
