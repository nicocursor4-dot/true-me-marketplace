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
    <main className="min-h-screen bg-[#FCFAF7]">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="heading-primary mb-6">Marketplace</h1>
            <p className="text-minimal text-xl max-w-2xl mx-auto">
              Une sélection exclusive d'articles de luxe authentifiés par nos experts
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex space-x-2 p-2 bg-white rounded-[16px] border border-[#F0F0F0]">
              {['acheter', 'vendre', 'services'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-4 rounded-[12px] font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-[#1A1A1A] text-white'
                      : 'text-minimal hover:text-[#1A1A1A] hover:bg-[#F8F8F8]'
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
              <div className="card-minimal p-8 mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="mb-8">Catégorie</h3>
                    <div className="flex flex-wrap gap-3">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`px-6 py-3 rounded-[12px] text-sm font-medium transition-all duration-300 ${
                            selectedCategory === category.id
                              ? 'bg-[#1A1A1A] text-white'
                              : 'bg-[#F8F8F8] text-minimal hover:bg-[#F0F0F0] hover:text-[#1A1A1A]'
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="mb-8">Prix</h3>
                    <select
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="w-full px-6 py-4 bg-[#F8F8F8] border border-[#F0F0F0] rounded-[12px] text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-all duration-300"
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
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
                {featuredProducts.map((product, index) => (
                  <div 
                    key={product.id}
                    className="card-minimal subtle-hover cursor-pointer overflow-hidden"
                  >
                    {/* Product Image */}
                    <div className="relative bg-[#F8F8F8] h-64 flex items-center justify-center mb-6">
                      <div className="text-6xl">{product.image}</div>
                      {product.vip && (
                        <div className="absolute top-4 left-4 bg-[#1A1A1A] text-white px-3 py-1 rounded-[8px] text-xs font-medium">
                          VIP
                        </div>
                      )}
                      {product.featured && (
                        <div className="absolute top-4 right-4 bg-[#FF5722] text-white px-3 py-1 rounded-[8px] text-xs font-medium">
                          Sélection
                        </div>
                      )}
                      <div className="absolute bottom-4 right-4 bg-[#4CAF50] text-white px-3 py-1 rounded-[8px] text-xs font-medium">
                        ✓ {product.authenticity}
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="px-8 pb-8">
                      <div className="mb-2">
                        <span className="text-sm text-minimal">{product.brand}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">{product.name}</h3>
                      <div className="flex items-center space-x-3 mb-6">
                        <span className="text-2xl font-bold text-[#1A1A1A]">{product.price}</span>
                        <span className="text-sm text-minimal line-through">{product.originalPrice}</span>
                      </div>
                      
                      <div className="space-y-3 mb-8 text-sm">
                        <div className="flex justify-between">
                          <span className="text-minimal">État</span>
                          <span className="text-[#1A1A1A] font-medium">{product.condition}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-minimal">Vendeur</span>
                          <span className="text-[#1A1A1A] font-medium">{product.seller}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-minimal">Note</span>
                          <div className="flex items-center space-x-1">
                            <span>⭐</span>
                            <span className="text-[#1A1A1A] font-medium">{product.sellerRating}</span>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-minimal">Localisation</span>
                          <span className="text-[#1A1A1A] font-medium">{product.location}</span>
                        </div>
                      </div>

                      <button className="btn-primary w-full">
                        Voir les détails
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'vendre' && (
            <div className="card-minimal p-16 text-center">
              <h2 className="heading-secondary mb-6">Vendez vos articles de luxe</h2>
              <p className="text-minimal text-lg mb-16 max-w-lg mx-auto">
                Bénéficiez de notre expertise et de nos services d'authentification
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#F8F8F8] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">📸</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">01 — Photographiez</h3>
                  <p className="text-minimal">Prenez des photos détaillées de votre article</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#F8F8F8] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🔍</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">02 — Authentification</h3>
                  <p className="text-minimal">Nos experts certifient l'authenticité</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#F8F8F8] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">💰</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">03 — Vendez</h3>
                  <p className="text-minimal">Mettez en vente avec garantie TRUE ME</p>
                </div>
              </div>

              <button className="btn-primary px-12 py-4">
                Commencer à vendre
              </button>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {vipServices.map((service) => (
                <div key={service.id} className="card-minimal p-8 subtle-hover">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-[#1A1A1A] rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">{service.title}</h3>
                      <p className="text-minimal mb-6">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-[#1A1A1A]">{service.price}</span>
                        <button className="btn-primary px-6 py-3 text-sm">
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
