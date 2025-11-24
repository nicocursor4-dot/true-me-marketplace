'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import LegacyNavbar from '@/components/LegacyNavbar';
import RichFooter from '@/components/layout/RichFooter';
import { getCollectionByBrand, BrandCollection } from '@/mocks/userCollection';
import { BrandRow } from '@/components/brands/BrandRow';
import { BrandDetailsPanel } from '@/components/brands/BrandDetailsPanel';
import { Search, ArrowUpDown, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TierBadge = ({ tier }: { tier: string }) => {
  const styles: Record<string, string> = {
    bronze: "bg-[#fbf3e8] text-[#7d5e39] border-[#c6a57a]",
    silver: "bg-gray-50 text-gray-600 border-gray-200",
    gold: "bg-[#f9f3e2] text-[#7c6320] border-[#d5bf86]",
    platinum: "bg-white text-trueme-black border-gray-200 shadow-sm",
  };

  return (
    <button className={`w-full aspect-square rounded-2xl border flex flex-col items-center justify-center gap-1 transition-all hover:scale-105 ${styles[tier.toLowerCase()] || styles.silver}`}>
      <span className="text-xl font-serif">{tier.charAt(0)}</span>
      <span className="text-[10px] uppercase tracking-wider">{tier}</span>
    </button>
  );
};

export default function TrueMeBrandsStatus() {
  const brandCollections = useMemo(() => getCollectionByBrand(), []);
  const [selectedBrand, setSelectedBrand] = useState<BrandCollection | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<'name' | 'value' | 'evolution'>('value');

  // Set initial selection
  useEffect(() => {
    if (brandCollections.length > 0 && !selectedBrand) {
      setSelectedBrand(brandCollections[0]);
    }
  }, [brandCollections, selectedBrand]);

  // Filter and Sort Logic
  const filteredBrands = useMemo(() => {
    let result = brandCollections.filter(b =>
      b.brand.toLowerCase().includes(searchQuery.toLowerCase())
    );

    result.sort((a, b) => {
      switch (sortOption) {
        case 'name': return a.brand.localeCompare(b.brand);
        case 'value': return b.totalValue - a.totalValue;
        case 'evolution': return b.avgEvolution - a.avgEvolution;
        default: return 0;
      }
    });

    return result;
  }, [brandCollections, searchQuery, sortOption]);

  const totalValue = useMemo(() => brandCollections.reduce((acc, b) => acc + b.totalValue, 0), [brandCollections]);
  const totalItems = useMemo(() => brandCollections.reduce((acc, b) => acc + b.totalItems, 0), [brandCollections]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedBrand) return;
      const currentIndex = filteredBrands.findIndex(b => b.brand === selectedBrand.brand);

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = Math.min(currentIndex + 1, filteredBrands.length - 1);
        setSelectedBrand(filteredBrands[nextIndex]);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = Math.max(currentIndex - 1, 0);
        setSelectedBrand(filteredBrands[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedBrand, filteredBrands]);

  return (
    <div className="min-h-screen bg-trueme-cream text-trueme-black antialiased font-sans selection:bg-trueme-gold/20">
      <LegacyNavbar />

      <div className="h-24" /> {/* Spacer */}

      <main className="min-h-screen p-4 md:p-6 lg:p-8 pb-20 max-w-[1600px] mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-serif text-trueme-black tracking-tight mb-2">
            Vos Maisons
          </h1>
          <p className="text-trueme-secondary">Gérez votre collection par marque, suivez votre évolution et débloquez des avantages.</p>
        </div>

        <div className="grid grid-cols-12 gap-8">

          {/* Left Column: Stats & Filters (Sticky) */}
          <aside className="hidden lg:block col-span-3 space-y-6">
            <div className="sticky top-32 space-y-6">
              {/* Global Stats Card */}
              <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-white/60">
                <h2 className="font-serif text-xl text-trueme-black mb-6">Vue d'ensemble</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-trueme-secondary text-sm">Valeur Totale</span>
                    <span className="font-serif text-lg">{totalValue.toLocaleString()} €</span>
                  </div>
                  <div className="w-full h-px bg-gray-100" />
                  <div className="flex justify-between items-center">
                    <span className="text-trueme-secondary text-sm">Articles</span>
                    <span className="font-serif text-lg">{totalItems}</span>
                  </div>
                  <div className="w-full h-px bg-gray-100" />
                  <div className="flex justify-between items-center">
                    <span className="text-trueme-secondary text-sm">Marques</span>
                    <span className="font-serif text-lg">{brandCollections.length}</span>
                  </div>
                </div>
              </div>

              {/* Current Tier Card */}
              <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-white/60 text-center">
                <h2 className="font-serif text-xl text-trueme-black mb-4">Votre Statut</h2>
                <div className="flex flex-col items-center justify-center p-6 bg-trueme-gold/5 rounded-2xl border border-trueme-gold/20">
                  <span className="text-4xl font-serif text-trueme-gold mb-2">G</span>
                  <span className="text-sm uppercase tracking-widest font-medium text-trueme-black">Gold</span>
                </div>
                <p className="text-xs text-trueme-secondary mt-4">
                  Plus que 3 achats pour atteindre le statut Platinum.
                </p>
              </div>
            </div>
          </aside>

          {/* Center Column: List (Scrollable) */}
          <section className="col-span-12 lg:col-span-5 space-y-4">
            {/* Search Bar */}
            <div className="sticky top-24 z-20 bg-trueme-cream/95 backdrop-blur-sm py-4 -mx-4 px-4 md:mx-0 md:px-0">
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-trueme-secondary" />
                  <input
                    type="text"
                    placeholder="Rechercher une maison..."
                    className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-white/60 shadow-sm outline-none text-sm focus:ring-2 focus:ring-trueme-gold/20 transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button
                  onClick={() => setSortOption(prev => prev === 'value' ? 'name' : 'value')}
                  className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white border border-white/60 shadow-sm hover:bg-trueme-black hover:text-white transition-colors"
                >
                  <Filter className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* List */}
            <div className="space-y-3 pb-20">
              <AnimatePresence mode='popLayout'>
                {filteredBrands.map((brand, index) => (
                  <BrandRow
                    key={brand.brand}
                    brand={brand}
                    index={index}
                    isActive={selectedBrand?.brand === brand.brand}
                    onClick={() => setSelectedBrand(brand)}
                  />
                ))}
              </AnimatePresence>

              {filteredBrands.length === 0 && (
                <div className="text-center py-12 text-trueme-secondary">
                  Aucun résultat trouvé.
                </div>
              )}
            </div>
          </section>

          {/* Right Column: Details (Sticky) */}
          <aside className="hidden lg:block col-span-4">
            <div className="sticky top-32">
              <BrandDetailsPanel brand={selectedBrand} />
            </div>
          </aside>

        </div>
      </main>

      <RichFooter />
    </div>
  );
}
