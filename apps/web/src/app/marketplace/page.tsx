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
    <main className="min-h-screen bg-[#F5F2E8]">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Header with Tabs */}
          <div className="bg-[rgba(255,255,255,0.4)] backdrop-blur-[15px] border border-[rgba(255,255,255,0.3)] rounded-[20px] p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-[#1C1C1E] mb-2">Marketplace VIP</h1>
                <p className="text-[#6B6B6B]">Bloc 3 - Achat et vente authentifiés</p>
              </div>
              <Link href="/dashboard" className="px-6 py-3 bg-[rgba(184,134,11,0.1)] text-[#B8860B] rounded-lg hover:bg-[rgba(184,134,11,0.2)] transition-all duration-300">
                ← Dashboard
              </Link>
            </div>
            
            {/* Navigation Tabs */}
            <div className="flex space-x-4">
              {['acheter', 'vendre', 'services'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-[#B8860B] text-white shadow-lg'
                      : 'bg-[rgba(255,255,255,0.3)] text-[#6B6B6B] hover:bg-[rgba(255,255,255,0.5)]'
                  }`}
                >
                  {tab === 'acheter' ? '🛒 Acheter' : 
                   tab === 'vendre' ? '💰 Vendre' : 
                   '👑 Services VIP'}
                </button>
              ))}
            </div>
          </div>

          {activeTab === 'acheter' && (
            <>
              {/* Filters */}
              <div className="bg-[rgba(255,255,255,0.3)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.25)] rounded-[16px] p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#1C1C1E] mb-3">Catégorie</label>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                            selectedCategory === category.id
                              ? 'bg-[#B8860B] text-white'
                              : 'bg-[rgba(255,255,255,0.4)] text-[#6B6B6B] hover:bg-[rgba(255,255,255,0.6)]'
                          }`}
                        >
                          <span>{category.icon}</span>
                          <span>{category.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#1C1C1E] mb-3">Prix</label>
                    <select
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="w-full px-4 py-2 bg-[rgba(255,255,255,0.4)] border border-[rgba(255,255,255,0.3)] rounded-lg text-[#1C1C1E] focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {featuredProducts.map((product, index) => (
                  <AnimatedCard 
                    key={product.id}
                    className="bg-[rgba(255,255,255,0.4)] backdrop-blur-[15px] border border-[rgba(255,255,255,0.3)] rounded-[20px] overflow-hidden"
                    hoverScale={true}
                    glowEffect={true}
                  >
                    
                    {/* Product Image */}
                    <div className="relative bg-[rgba(245,242,232,0.8)] h-48 flex items-center justify-center">
                      <div className="text-6xl">{product.image}</div>
                      {product.vip && (
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-white px-2 py-1 rounded-full text-xs font-bold">
                          VIP
                        </div>
                      )}
                      {product.featured && (
                        <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          COUP DE ❤️
                        </div>
                      )}
                      <div className="absolute bottom-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                        <span>✓</span>
                        <span>{product.authenticity}</span>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <div className="mb-2">
                        <span className="text-sm font-medium text-[#B8860B]">{product.brand}</span>
                      </div>
                      <h3 className="font-bold text-[#1C1C1E] mb-2">{product.name}</h3>
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-xl font-bold text-[#1C1C1E]">{product.price}</span>
                        <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                      </div>
                      
                      <div className="text-sm text-[#6B6B6B] space-y-1 mb-4">
                        <div className="flex justify-between">
                          <span>État :</span>
                          <span className="font-medium">{product.condition}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Vendeur :</span>
                          <span className="font-medium">{product.seller}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Note :</span>
                          <div className="flex items-center space-x-1">
                            <span className="text-yellow-500">⭐</span>
                            <span className="font-medium">{product.sellerRating}</span>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <span>Localisation :</span>
                          <span className="font-medium">{product.location}</span>
                        </div>
                      </div>

                      <button className="w-full bg-[#B8860B] text-white py-3 rounded-lg font-medium hover:bg-[#A0750A] transition-all duration-300">
                        Voir les détails
                      </button>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </>
          )}

          {activeTab === 'vendre' && (
            <div className="bg-[rgba(255,255,255,0.4)] backdrop-blur-[15px] border border-[rgba(255,255,255,0.3)] rounded-[20px] p-8">
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">💰</div>
                <h2 className="text-2xl font-bold text-[#1C1C1E] mb-4">Vendez vos articles de luxe</h2>
                <p className="text-[#6B6B6B] mb-8">Bénéficiez de la garantie d'authenticité TRUE ME</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[rgba(184,134,11,0.1)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📸</span>
                  </div>
                  <h3 className="font-bold text-[#1C1C1E] mb-2">1. Photographiez</h3>
                  <p className="text-sm text-[#6B6B6B]">Prenez des photos détaillées de votre article</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-[rgba(184,134,11,0.1)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3 className="font-bold text-[#1C1C1E] mb-2">2. Authentification</h3>
                  <p className="text-sm text-[#6B6B6B]">Nos experts certifient l'authenticité</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-[rgba(184,134,11,0.1)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="font-bold text-[#1C1C1E] mb-2">3. Vendez</h3>
                  <p className="text-sm text-[#6B6B6B]">Mettez en vente avec garantie TRUE ME</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button className="bg-[#B8860B] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#A0750A] transition-all duration-300">
                  Commencer à vendre
                </button>
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {vipServices.map((service) => (
                <div key={service.id} className="bg-[rgba(255,255,255,0.4)] backdrop-blur-[15px] border border-[rgba(255,255,255,0.3)] rounded-[20px] p-8 hover:shadow-[0_8px_32px_rgba(184,134,11,0.15)] hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center text-white text-xl">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#1C1C1E] mb-2">{service.title}</h3>
                      <p className="text-[#6B6B6B] mb-4">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-[#B8860B]">{service.price}</span>
                        <button className="px-4 py-2 bg-[#B8860B] text-white rounded-lg text-sm hover:bg-[#A0750A] transition-all duration-300">
                          Réserver
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Floating Action Button */}
          <div className="fixed bottom-8 right-8 z-40">
            <button className="w-16 h-16 bg-gradient-to-r from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center text-white text-2xl shadow-[0_6px_20px_rgba(184,134,11,0.3)] hover:scale-110 transition-all duration-300">
              💬
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}
