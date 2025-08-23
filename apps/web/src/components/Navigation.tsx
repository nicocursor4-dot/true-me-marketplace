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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-minimal h-20">
      <div className="luxury-container h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="subtle-hover">
            <div className="text-xl font-bold tracking-tight">TRUE ME</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-all duration-300 ${
                  pathname === item.href 
                    ? 'text-black border-b-2 border-black pb-1' 
                    : 'text-minimal hover:text-black'
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
              className="text-minimal hover:text-black font-medium subtle-hover"
            >
              Connexion
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            <div className="w-5 h-5 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-black transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-1' : ''
              }`}></div>
              <div className={`w-full h-0.5 bg-black transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}></div>
              <div className={`w-full h-0.5 bg-black transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-1' : ''
              }`}></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-minimal">
          <div className="luxury-container py-8">
            <div className="space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block font-medium text-black hover:text-minimal transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/auth/login"
                className="block font-medium text-minimal hover:text-black transition-all duration-300"
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
