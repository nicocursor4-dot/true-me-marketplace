'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="glass-navigation fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white">
              TRUE ME
            </Link>
            <div className="ml-2 w-1.5 h-1.5 bg-trueme-gold rounded-full"></div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white/90 hover:text-trueme-gold transition-colors duration-200 text-sm">
              Accueil
            </Link>
            <Link href="/dashboard" className="text-white/90 hover:text-trueme-gold transition-colors duration-200 text-sm">
              Dashboard
            </Link>
            <Link href="/brands" className="text-white/90 hover:text-trueme-gold transition-colors duration-200 text-sm">
              Marques
            </Link>
            <Link href="/marketplace" className="text-white/90 hover:text-trueme-gold transition-colors duration-200 text-sm">
              Marketplace
            </Link>
            
            <div className="flex items-center space-x-3 ml-6">
              <Link href="/auth/login" className="text-white/90 hover:text-trueme-gold transition-colors duration-200 text-sm">
                Connexion
              </Link>
              <Link
                href="/auth/register"
                className="btn-primary px-4 py-2 text-sm font-medium"
              >
                S&apos;inscrire
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/90 hover:text-trueme-gold p-2 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40">
          <div className="glass-menu-overlay h-full">
            <div className="px-6 py-8 space-y-6">
              <Link
                href="/"
                className="block text-white text-lg font-medium hover:text-trueme-gold transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/dashboard"
                className="block text-white text-lg font-medium hover:text-trueme-gold transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                href="/brands"
                className="block text-white text-lg font-medium hover:text-trueme-gold transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Marques
              </Link>
              <Link
                href="/marketplace"
                className="block text-white text-lg font-medium hover:text-trueme-gold transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Marketplace
              </Link>
              
              <div className="border-t border-white/10 pt-6 mt-8 space-y-4">
                <Link
                  href="/auth/login"
                  className="block text-white text-lg font-medium hover:text-trueme-gold transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Connexion
                </Link>
                <Link
                  href="/auth/register"
                  className="btn-primary w-full text-center block py-3 text-lg font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  S&apos;inscrire
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
