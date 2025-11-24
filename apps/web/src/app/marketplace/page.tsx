'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LegacyNavbar from '@/components/LegacyNavbar';
import RichFooter from '@/components/layout/RichFooter';
import { Heart, Search, Filter, X, ChevronDown, CheckCircle, SlidersHorizontal, ArrowRight } from 'lucide-react';
import { products, availableBrands } from '@/data/realProducts';
import Image from 'next/image';
import Link from 'next/link';

// Custom Dropdown Component
const CustomSelect = ({
  options,
  value,
  onChange,
  placeholder,
  icon: Icon
}: {
  options: string[],
  value: string,
  onChange: (val: string) => void,
  placeholder: string,
  icon?: React.ElementType
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-300 ${isOpen || value ? 'border-trueme-black bg-trueme-black text-white' : 'border-gray-200 hover:border-trueme-gold text-trueme-black bg-white'
          }`}
      >
        {Icon && <Icon className="w-4 h-4" />}
        <span className="text-sm font-medium whitespace-nowrap">
          {value || placeholder}
        </span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50 py-2"
          >
            <div className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200">
              <button
                onClick={() => { onChange(''); setIsOpen(false); }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${!value ? 'text-trueme-gold font-medium' : 'text-trueme-secondary'}`}
              >
                {placeholder}
              </button>
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => { onChange(option); setIsOpen(false); }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${value === option ? 'text-trueme-gold font-medium' : 'text-trueme-black'}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function TrueMeMarketplace() {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);

  // Categories
  const categories = ['Chaussures', 'Accessoires', 'Maroquinerie', 'Joaillerie'];
  const sortOptions = ['Prix (croissant)', 'Prix (décroissant)', 'Nouveautés'];

  // Handle scroll for sticky header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter Logic
  const filteredProducts = products.filter(product => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);
      if (!matchesSearch) return false;
    }
    if (selectedBrand && product.brand !== selectedBrand) return false;
    if (selectedCategory && product.category !== selectedCategory) return false;
    return true;
  });

  // Sort Logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'Prix (croissant)') {
      const pa = parseFloat(a.price.replace(/[€,]/g, ''));
      const pb = parseFloat(b.price.replace(/[€,]/g, ''));
      return pa - pb;
    }
    if (sortOption === 'Prix (décroissant)') {
      const pa = parseFloat(a.price.replace(/[€,]/g, ''));
      const pb = parseFloat(b.price.replace(/[€,]/g, ''));
      return pb - pa;
    }
    return 0;
  });

  // Favorites
  const toggleFavorite = useCallback((productId: string) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  }, []);

  // Loading simulation
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, [selectedBrand, selectedCategory, searchQuery]);

  // Clear filters
  const clearAllFilters = useCallback(() => {
    setSelectedBrand('');
    setSelectedCategory('');
    setSearchQuery('');
    setSortOption('');
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-trueme-gold/20">
      <LegacyNavbar />

      {/* Hero / Collection Banner */}
      <div className="relative pt-32 pb-16 px-4 md:px-8 text-center bg-trueme-cream/30">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif text-trueme-black mb-4 tracking-tight uppercase"
        >
          La Collection
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-trueme-secondary max-w-2xl mx-auto font-light text-lg"
        >
          Une sélection exclusive de pièces d'exception, authentifiées par nos experts.
        </motion.p>
      </div>

      {/* Sticky Filter Bar */}
      <div className={`sticky top-20 z-30 bg-white/95 backdrop-blur-xl border-b border-gray-100 transition-all duration-300 ${isScrolled ? 'shadow-sm' : ''}`}>
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

            {/* Left: Quick Filters */}
            <div className="flex items-center gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide w-full md:w-auto px-1">
              <button
                onClick={() => setShowFilters(true)}
                className="flex items-center gap-2 px-5 py-2.5 bg-trueme-black text-white rounded-full text-sm font-medium hover:bg-trueme-gold transition-colors flex-shrink-0 shadow-lg hover:shadow-xl"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filtres
              </button>

              <div className="h-6 w-px bg-gray-200 mx-2 flex-shrink-0 hidden md:block"></div>

              <div className="hidden md:block">
                <CustomSelect
                  options={availableBrands}
                  value={selectedBrand}
                  onChange={setSelectedBrand}
                  placeholder="Toutes les marques"
                />
              </div>

              <div className="hidden md:block">
                <CustomSelect
                  options={categories}
                  value={selectedCategory}
                  onChange={setSelectedCategory}
                  placeholder="Toutes les catégories"
                />
              </div>
            </div>

            {/* Right: Search & Sort */}
            <div className="flex items-center gap-4 pr-1 md:pr-4">
              <div className="relative hidden md:block group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-trueme-gold transition-colors" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-gray-50 border-none rounded-full py-2.5 pl-10 pr-4 text-sm focus:ring-1 focus:ring-trueme-gold w-48 focus:w-64 transition-all duration-300"
                />
              </div>

              <div className="relative">
                <CustomSelect
                  options={sortOptions}
                  value={sortOption}
                  onChange={setSortOption}
                  placeholder="Trier par"
                />
              </div>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="mt-4 md:hidden relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border-none rounded-full py-2.5 pl-10 pr-4 text-sm focus:ring-1 focus:ring-trueme-gold"
            />
          </div>
        </div>
      </div>

      {/* Filter Drawer (Side Menu) */}
      <AnimatePresence>
        {showFilters && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFilters(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full md:w-[400px] bg-white z-50 shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-2xl font-serif text-trueme-black">Filtres</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-trueme-black" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                {/* Drawer Content */}
                <div>
                  <h3 className="text-sm font-bold text-trueme-black uppercase tracking-wider mb-4">Marques</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {availableBrands.map(brand => (
                      <button
                        key={brand}
                        onClick={() => setSelectedBrand(selectedBrand === brand ? '' : brand)}
                        className={`px-4 py-3 rounded-xl text-sm text-left transition-all ${selectedBrand === brand
                          ? 'bg-trueme-black text-white shadow-md'
                          : 'bg-gray-50 text-trueme-secondary hover:bg-gray-100'
                          }`}
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-trueme-black uppercase tracking-wider mb-4">Catégories</h3>
                  <div className="space-y-2">
                    {categories.map(cat => (
                      <label key={cat} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer group transition-colors">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${selectedCategory === cat ? 'border-trueme-gold bg-trueme-gold' : 'border-gray-300 group-hover:border-trueme-gold'
                          }`}>
                          {selectedCategory === cat && <CheckCircle className="w-3.5 h-3.5 text-white" />}
                        </div>
                        <span className={`text-sm ${selectedCategory === cat ? 'text-trueme-black font-medium' : 'text-trueme-secondary'}`}>
                          {cat}
                        </span>
                        <input
                          type="radio"
                          name="category"
                          className="hidden"
                          checked={selectedCategory === cat}
                          onChange={() => setSelectedCategory(selectedCategory === cat ? '' : cat)}
                        />
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-trueme-black uppercase tracking-wider mb-4">Prix</h3>
                  <div className="flex items-center gap-4">
                    <input type="number" placeholder="Min" className="w-full px-4 py-3 bg-gray-50 rounded-xl border-none focus:ring-1 focus:ring-trueme-gold text-sm" />
                    <span className="text-gray-400">-</span>
                    <input type="number" placeholder="Max" className="w-full px-4 py-3 bg-gray-50 rounded-xl border-none focus:ring-1 focus:ring-trueme-gold text-sm" />
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="flex gap-4">
                  <button
                    onClick={clearAllFilters}
                    className="flex-1 py-4 text-trueme-black font-medium hover:bg-gray-200 rounded-xl transition-colors"
                  >
                    Réinitialiser
                  </button>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="flex-[2] py-4 bg-trueme-black text-white font-medium rounded-xl hover:bg-trueme-gold transition-colors shadow-lg"
                  >
                    Voir les résultats
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="max-w-[1920px] mx-auto px-4 md:px-8 py-8">
        {/* Active Filters Display */}
        {(selectedBrand || selectedCategory || searchQuery) && (
          <div className="flex items-center gap-2 mb-8 flex-wrap">
            <span className="text-sm text-gray-500 mr-2">Filtres actifs:</span>
            {selectedBrand && (
              <button onClick={() => setSelectedBrand('')} className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-xs font-medium hover:bg-gray-200 transition-colors">
                {selectedBrand} <X className="w-3 h-3" />
              </button>
            )}
            {selectedCategory && (
              <button onClick={() => setSelectedCategory('')} className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-xs font-medium hover:bg-gray-200 transition-colors">
                {selectedCategory} <X className="w-3 h-3" />
              </button>
            )}
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-xs font-medium hover:bg-gray-200 transition-colors">
                Recherche: "{searchQuery}" <X className="w-3 h-3" />
              </button>
            )}
            <button onClick={clearAllFilters} className="text-xs text-trueme-gold hover:underline ml-2">
              Tout effacer
            </button>
          </div>
        )}

        {/* Product Grid - Luxury Masonry Style */}
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-100 aspect-[3/4] mb-4 w-full"></div>
                <div className="h-4 bg-gray-100 w-1/2 mb-2"></div>
                <div className="h-3 bg-gray-100 w-3/4 mb-3"></div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16"
          >
            <AnimatePresence mode="popLayout">
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/product/${product.id}`} className="block">
                    {/* Image Container */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 mb-6">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Overlay Actions */}
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <button className="w-full bg-white text-trueme-black py-3 text-sm font-medium hover:bg-trueme-black hover:text-white transition-colors uppercase tracking-wider shadow-lg">
                            Aperçu rapide
                          </button>
                        </div>

                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            toggleFavorite(product.id);
                          }}
                          className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                        >
                          <Heart className={`w-5 h-5 ${favorites.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-trueme-black'}`} />
                        </button>
                      </div>
                    </div>

                    {/* Product Info - Swapped Order & Cleaned */}
                    <div className="text-center md:text-left space-y-1">
                      <h3 className="text-base font-medium text-trueme-black line-clamp-1 group-hover:text-trueme-gold transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-trueme-secondary uppercase tracking-wider font-bold">
                        {product.brand}
                      </p>
                      <div className="pt-1">
                        <span className="text-base text-trueme-black">
                          {product.price}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Empty State */}
        {!isLoading && sortedProducts.length === 0 && (
          <div className="text-center py-32">
            <h3 className="text-2xl font-serif text-trueme-black mb-4">Aucun résultat</h3>
            <p className="text-gray-500 mb-8">Essayez de modifier vos filtres.</p>
            <button
              onClick={clearAllFilters}
              className="text-trueme-gold hover:underline underline-offset-4"
            >
              Effacer tous les filtres
            </button>
          </div>
        )}
      </main>

      <RichFooter />
    </div>
  );
}
