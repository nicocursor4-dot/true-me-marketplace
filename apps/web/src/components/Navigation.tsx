'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'WOMEN', href: '/marketplace?category=women' },
    { name: 'MEN', href: '/marketplace?category=men' },
    { name: 'KIDS', href: '/marketplace?category=kids' },
    { name: 'MARKETPLACE', href: '/marketplace' },
    { name: 'VIP SERVICES', href: '/vip' },
  ];

  const userItems = [
    { name: 'Mon Statut', href: '/dashboard' },
    { name: 'Mes Marques', href: '/brands' },
    { name: 'Vendre', href: '/sell' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(245,242,232,0.95)] backdrop-blur-[20px] border-b border-[rgba(255,255,255,0.2)] h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-[#1C1C1E]">
              <span className="text-3xl">TM</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-[#1C1C1E] leading-tight">TRUE ME</span>
              <span className="text-[10px] text-[#B8860B] leading-tight tracking-wider">NOT A STYLE. A SIGNATURE.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-[#B8860B] ${
                  pathname === item.href ? 'text-[#B8860B]' : 'text-[#1C1C1E]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* User Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {userItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-[#1C1C1E] hover:text-[#B8860B] transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
            <div className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.4)] backdrop-blur-[15px] border border-[rgba(255,255,255,0.3)] flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-[#B8860B]"></div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 rounded-full bg-[rgba(255,255,255,0.4)] backdrop-blur-[15px] border border-[rgba(255,255,255,0.3)] flex items-center justify-center"
          >
            <div className="w-5 h-5 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-[#1C1C1E] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
              <div className={`w-full h-0.5 bg-[#1C1C1E] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-full h-0.5 bg-[#1C1C1E] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[rgba(245,242,232,0.98)] backdrop-blur-[25px] border-b border-[rgba(255,255,255,0.2)]">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-base font-medium text-[#1C1C1E] hover:text-[#B8860B] transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t border-[rgba(255,255,255,0.2)] pt-4 space-y-4">
              {userItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-base font-medium text-[#1C1C1E] hover:text-[#B8860B] transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
