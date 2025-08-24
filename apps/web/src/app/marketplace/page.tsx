'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import AnimatedCard from '@/components/AnimatedCard';
import { Tag, ShoppingBag, Gem, Shirt, Watch, Footprints, Crown, Diamond, Sparkles, Zap, User, Truck, Search, Camera, DollarSign, CheckCircle } from 'lucide-react';

export default function MarketplacePage() {
  const [activeTab, setActiveTab] = useState('acheter');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const categories = [
    { id: 'all', name: 'Toutes catégories', icon: Tag },
    { id: 'bags', name: 'Sacs', icon: ShoppingBag },
    { id: 'jewelry', name: 'Bijoux', icon: Gem },
    { id: 'clothes', name: 'Vêtements', icon: Shirt },
    { id: 'accessories', name: 'Accessoires', icon: Watch },
    { id: 'shoes', name: 'Chaussures', icon: Footprints }
  ];

  const priceRanges = [
    { id: 'all', label: 'Tous les prix' },
    { id: 'under-1000', label: 'Moins de AED 1,000' },
    { id: '1000-5000', label: 'AED 1,000 - 5,000' },
    { id: '5000-15000', label: 'AED 5,000 - 15,000' },
    { id: 'over-15000', label: 'Plus de AED 15,000' }
  ];

  const featuredProducts = [
    {
      id: 1,
      brand: 'Chanel',
      name: 'Sac 2.55 Classic Flap',
      price: 'AED 12,500',
      originalPrice: 'AED 15,000',
      image: Crown,
      condition: 'Excellent',
      authenticity: '98.5%',
      seller: 'LuxuryCollector_AE',
      sellerRating: 4.9,
      location: 'Dubai',
      vip: true,
      authenticated: true,
      featured: true
    },
    {
      id: 2,
      brand: 'Hermès',
      name: 'Birkin 35 Togo Étoupe',
      price: 'AED 45,000',
      originalPrice: 'AED 52,000',
      image: '🦄',
      condition: 'Comme neuf',
      authenticity: '99.2%',
      seller: 'HermesParis_Official',
      sellerRating: 5.0,
      location: 'Abu Dhabi',
      vip: true,
      authenticated: true,
      featured: true
    },
    {
      id: 3,
      brand: 'Louis Vuitton',
      name: 'Speedy 30 Monogram',
      price: 'AED 3,200',
      originalPrice: 'AED 4,500',
      image: Diamond,
      condition: 'Très bon',
      authenticity: '96.8%',
      seller: 'LV_Collector_UAE',
      sellerRating: 4.7,
      location: 'Sharjah',
      vip: false,
      authenticated: true,
      featured: false
    },
    {
      id: 4,
      brand: 'Dior',
      name: 'Lady Dior Medium',
      price: 'AED 8,900',
      originalPrice: 'AED 11,200',
      image: Sparkles,
      condition: 'Excellent',
      authenticity: '97.5%',
      seller: 'DiorLover_DXB',
      sellerRating: 4.8,
      location: 'Dubai',
      vip: true,
      authenticated: true,
      featured: false
    }
  ];

  const vipServices = [
    {
      id: 1,
      title: 'Authentification Express',
      description: 'Certification en 24h par nos experts',
      price: 'AED 250',
      icon: Zap
    },
    {
      id: 2,
      title: 'Personal Shopper VIP',
      description: 'Accompagnement personnalisé pour vos achats',
      price: 'AED 500/h',
      icon: User
    },
    {
      id: 3,
      title: 'Livraison Premium',
      description: 'Livraison sécurisée partout aux EAU',
      price: 'AED 150',
      icon: Truck
    },
    {
      id: 4,
      title: 'Expertise sur mesure',
      description: 'Évaluation professionnelle de votre collection',
      price: 'AED 400',
      icon: Search
    }
  ];

  return (
    <main className="min-h-screen bg-trueme-cream">
      <Navigation />
      
      <div className="min-h-screen pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 fade-in">
            <div className="inline-flex items-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-trueme-gold rounded-full"></div>
              <span className="text-sm font-medium text-trueme-gold tracking-[0.2em] uppercase">Marketplace Privé</span>
              <div className="w-2 h-2 bg-trueme-gold rounded-full"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-light mb-6 text-trueme tracking-tight">
              TRUE ME
            </h1>
            <h2 className="text-lg md:text-xl font-light mb-8 text-trueme-gold tracking-wide">
              Not a Styl. A Signature.
            </h2>
            <p className="text-lg md:text-xl text-trueme-light max-w-3xl mx-auto leading-relaxed">
              Collection curated d'articles de luxe authentifiés par nos experts
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center mb-20 fade-in">
            <div className="glass-morphism p-2 rounded-3xl">
              <div className="flex justify-center mb-8 md:mb-12 fade-in px-2" style={{animationDelay: '0.2s'}}>
                <div className="glass-morphism p-1 md:p-2 rounded-xl md:rounded-2xl">
                  <button
                    onClick={() => setActiveTab('acheter')}
                    className={`px-4 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-medium text-sm md:text-lg transition-all duration-300 ${
                      activeTab === 'acheter' 
                        ? 'bg-trueme-gold text-white transform scale-105' 
                        : 'text-trueme hover:text-trueme-gold'
                    }`}
                  >
                    Acheter
                  </button>
                  <button
                    onClick={() => setActiveTab('vendre')}
                    className={`px-4 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-medium text-sm md:text-lg transition-all duration-300 ${
                      activeTab === 'vendre' 
                        ? 'bg-trueme-gold text-white transform scale-105' 
                        : 'text-trueme hover:text-trueme-gold'
                    }`}
                  >
                    Vendre
                  </button>
                  <button
                    onClick={() => setActiveTab('vip')}
                    className={`px-4 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-medium text-sm md:text-lg transition-all duration-300 ${
                      activeTab === 'vip' 
                        ? 'bg-trueme-gold text-white transform scale-105' 
                        : 'text-trueme hover:text-trueme-gold'
                    }`}
                  >
                    VIP
                  </button>
                </div>
              </div>
            </div>
          </div>

          {activeTab === 'acheter' && (
            <>
              {/* Filters */}
              <div className="glass-premium p-12 mb-20 fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  <div>
                    <h3 className="mb-10 text-trueme text-2xl font-bold">Catégorie</h3>
                    <div className="flex flex-wrap gap-4">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`px-6 py-3 rounded-2xl font-medium transition-all duration-400 flex items-center space-x-2 ${
                            selectedCategory === category.id
                              ? 'glass-premium transform scale-105 text-trueme-gold shadow-lg'
                              : 'glass-morphism text-trueme hover:text-trueme-gold luxury-hover'
                          }`}
                        >
                          <category.icon className="w-4 h-4" />
                          <span>{category.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="mb-10 text-trueme text-2xl font-bold">Prix</h3>
                    <select
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="w-full px-6 py-4 glass-morphism border-0 rounded-2xl text-trueme focus:outline-none focus:ring-2 focus:ring-trueme-gold transition-all duration-300 text-lg"
                    >
                      {priceRanges.map((range) => (
                        <option key={range.id} value={range.id}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 fade-in" style={{animationDelay: '0.6s'}}>
                {featuredProducts.map((product) => (
                  <div key={product.id} className="glass-premium p-6 md:p-8 cursor-pointer">
                    {/* Product Header */}
                    <div className="flex items-center justify-between mb-4 md:mb-6">
                      <div className="flex items-center space-x-2 md:space-x-3">
                        {product.vip && (
                          <span className="bg-trueme-gold text-white px-2 md:px-3 py-1 rounded-full text-xs font-semibold">
                            VIP
                          </span>
                        )}
                        {product.authenticated && (
                          <span className="bg-green-500 text-white px-2 md:px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                            <CheckCircle className="w-3 h-3 mr-1" /> Authentifié
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Product Image */}
                    <div className="text-center mb-6 md:mb-8">
                      <product.image className="w-16 h-16 md:w-20 md:h-20 mx-auto text-trueme-gold" />
                    </div>

                    {/* Product Info */}
                    <div className="space-y-3 md:space-y-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-medium text-trueme mb-1 md:mb-2">{product.brand}</h3>
                        <p className="text-trueme-light text-sm md:text-base">{product.name}</p>
                      </div>

                      <div className="flex items-center space-x-3 md:space-x-4">
                        <span className="text-xl md:text-2xl font-semibold text-trueme-gold">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-base md:text-lg text-trueme-light line-through">{product.originalPrice}</span>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-xs md:text-sm text-trueme-light">
                        <span>Condition: {product.condition}</span>
                        <span>Score: {product.authenticity}</span>
                      </div>

                      <div className="border-t border-trueme-light/20 pt-3 md:pt-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-xs md:text-sm text-trueme-light space-y-1 md:space-y-0">
                          <span>{product.seller} • {product.sellerRating}⭐</span>
                          <span>{product.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-6 md:mt-8">
                      <button className="w-full btn-primary py-3 md:py-4 text-base md:text-lg font-medium">
                        Voir les détails
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'vendre' && (
            <div className="glass-premium p-20 text-center fade-in">
              <div className="mb-8">
                <Gem className="w-16 h-16 mx-auto text-trueme-gold" />
              </div>
              <h2 className="text-4xl font-bold text-trueme mb-8">Vendez vos articles de luxe</h2>
              <p className="text-trueme-light text-2xl mb-20 max-w-2xl mx-auto leading-relaxed">
                Bénéficiez de notre expertise et de nos services d'authentification
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                <div className="glass-morphism p-10 text-center luxury-hover">
                  <div className="mb-8">
                    <Camera className="w-16 h-16 mx-auto text-trueme-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-trueme mb-6">01 — Photographiez</h3>
                  <p className="text-trueme-light text-lg leading-relaxed">Prenez des photos détaillées de votre article</p>
                </div>
                
                <div className="glass-morphism p-10 text-center luxury-hover">
                  <div className="mb-8">
                    <Search className="w-16 h-16 mx-auto text-trueme-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-trueme mb-6">02 — Authentification</h3>
                  <p className="text-trueme-light text-lg leading-relaxed">Nos experts certifient l'authenticité</p>
                </div>
                
                <div className="glass-morphism p-10 text-center luxury-hover">
                  <div className="mb-8">
                    <DollarSign className="w-16 h-16 mx-auto text-trueme-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-trueme mb-6">03 — Vendez</h3>
                  <p className="text-trueme-light text-lg leading-relaxed">Mettez en vente avec garantie TRUE ME</p>
                </div>
              </div>

              <button className="btn-primary px-16 py-6 text-xl">
                Commencer à vendre
              </button>
            </div>
          )}

          {activeTab === 'vip' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {vipServices.map((service, index) => (
                <div key={service.id} className="glass-premium p-12 luxury-hover fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex items-start space-x-8">
                    <div className="glass-morphism w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-8 h-8 text-trueme-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-trueme mb-4">{service.title}</h3>
                      <p className="text-trueme-light text-lg mb-8 leading-relaxed">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-trueme-gold">{service.price}</span>
                        <button className="btn-primary px-8 py-4 text-lg">
                          Réserver
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </main>
  );
}
