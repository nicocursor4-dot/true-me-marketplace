'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import AnimatedCard from '@/components/AnimatedCard';

export default function MarketplacePage() {
  const [activeTab, setActiveTab] = useState('acheter');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const categories = [
    { id: 'all', name: 'Toutes catégories', icon: '🏷️' },
    { id: 'bags', name: 'Sacs', icon: '👜' },
    { id: 'jewelry', name: 'Bijoux', icon: '💎' },
    { id: 'clothes', name: 'Vêtements', icon: '👗' },
    { id: 'accessories', name: 'Accessoires', icon: '⌚' },
    { id: 'shoes', name: 'Chaussures', icon: '👠' }
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
      image: '👑',
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
      image: '💎',
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
      image: '✨',
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
      icon: '⚡'
    },
    {
      id: 2,
      title: 'Personal Shopper VIP',
      description: 'Accompagnement personnalisé pour vos achats',
      price: 'AED 500/h',
      icon: '👨‍💼'
    },
    {
      id: 3,
      title: 'Livraison Premium',
      description: 'Livraison sécurisée partout aux EAU',
      price: 'AED 150',
      icon: '🚚'
    },
    {
      id: 4,
      title: 'Expertise sur mesure',
      description: 'Évaluation professionnelle de votre collection',
      price: 'AED 400',
      icon: '🔍'
    }
  ];

  return (
    <main className="min-h-screen bg-trueme-cream">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* Header */}
          <div className="text-center mb-20 fade-in">
            <h1 className="text-trueme text-6xl font-bold mb-8">Marketplace</h1>
            <p className="text-trueme-light text-2xl max-w-3xl mx-auto leading-relaxed">
              Une sélection exclusive d'articles de luxe authentifiés par nos experts
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center mb-20 fade-in">
            <div className="glass-morphism p-2 rounded-3xl">
              {['acheter', 'vendre', 'services'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-10 py-4 rounded-2xl font-medium transition-all duration-400 text-lg ${
                    activeTab === tab
                      ? 'bg-trueme-gold text-white shadow-lg transform scale-105'
                      : 'text-trueme hover:text-trueme-gold luxury-hover'
                  }`}
                >
                  {tab === 'acheter' ? 'Acheter' : 
                   tab === 'vendre' ? 'Vendre' : 
                   'Services VIP'}
                </button>
              ))}
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
                          <span>{category.icon}</span>
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
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mb-20">
                {featuredProducts.map((product, index) => (
                  <div 
                    key={product.id}
                    className="glass-premium luxury-hover cursor-pointer overflow-hidden fade-in"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {/* Product Image */}
                    <div className="relative glass-morphism h-80 flex items-center justify-center mb-8 mx-6 mt-6 rounded-2xl">
                      <div className="text-8xl">{product.image}</div>
                      {product.vip && (
                        <div className="absolute top-4 left-4 bg-trueme-gold text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg">
                          VIP ✨
                        </div>
                      )}
                      {product.featured && (
                        <div className="absolute top-4 right-4 bg-trueme text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg">
                          Sélection 🏆
                        </div>
                      )}
                      <div className="absolute bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg">
                        ✓ {product.authenticity}
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="px-8 pb-8">
                      <div className="mb-3">
                        <span className="text-lg text-trueme-gold font-bold">{product.brand}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-trueme mb-6">{product.name}</h3>
                      <div className="flex items-center space-x-4 mb-8">
                        <span className="text-3xl font-bold text-trueme-gold">{product.price}</span>
                        <span className="text-lg text-trueme-light line-through">{product.originalPrice}</span>
                      </div>
                      
                      <div className="space-y-4 mb-10 text-base">
                        <div className="flex justify-between glass-morphism p-3 rounded-xl">
                          <span className="text-trueme-light">État</span>
                          <span className="text-trueme font-semibold">{product.condition}</span>
                        </div>
                        <div className="flex justify-between glass-morphism p-3 rounded-xl">
                          <span className="text-trueme-light">Vendeur</span>
                          <span className="text-trueme font-semibold">{product.seller}</span>
                        </div>
                        <div className="flex justify-between glass-morphism p-3 rounded-xl">
                          <span className="text-trueme-light">Note</span>
                          <div className="flex items-center space-x-1">
                            <span>⭐</span>
                            <span className="text-trueme font-semibold">{product.sellerRating}</span>
                          </div>
                        </div>
                        <div className="flex justify-between glass-morphism p-3 rounded-xl">
                          <span className="text-trueme-light">Localisation</span>
                          <span className="text-trueme font-semibold">{product.location}</span>
                        </div>
                      </div>

                      <button className="btn-primary w-full py-4 text-lg">
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
              <div className="text-6xl mb-8">💎</div>
              <h2 className="text-4xl font-bold text-trueme mb-8">Vendez vos articles de luxe</h2>
              <p className="text-trueme-light text-2xl mb-20 max-w-2xl mx-auto leading-relaxed">
                Bénéficiez de notre expertise et de nos services d'authentification
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                <div className="glass-morphism p-10 text-center luxury-hover">
                  <div className="text-6xl mb-8">📸</div>
                  <h3 className="text-2xl font-bold text-trueme mb-6">01 — Photographiez</h3>
                  <p className="text-trueme-light text-lg leading-relaxed">Prenez des photos détaillées de votre article</p>
                </div>
                
                <div className="glass-morphism p-10 text-center luxury-hover">
                  <div className="text-6xl mb-8">🔍</div>
                  <h3 className="text-2xl font-bold text-trueme mb-6">02 — Authentification</h3>
                  <p className="text-trueme-light text-lg leading-relaxed">Nos experts certifient l'authenticité</p>
                </div>
                
                <div className="glass-morphism p-10 text-center luxury-hover">
                  <div className="text-6xl mb-8">💰</div>
                  <h3 className="text-2xl font-bold text-trueme mb-6">03 — Vendez</h3>
                  <p className="text-trueme-light text-lg leading-relaxed">Mettez en vente avec garantie TRUE ME</p>
                </div>
              </div>

              <button className="btn-primary px-16 py-6 text-xl">
                Commencer à vendre
              </button>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {vipServices.map((service, index) => (
                <div key={service.id} className="glass-premium p-12 luxury-hover fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex items-start space-x-8">
                    <div className="glass-morphism w-20 h-20 rounded-full flex items-center justify-center text-3xl flex-shrink-0">
                      {service.icon}
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
