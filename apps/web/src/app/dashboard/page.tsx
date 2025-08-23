'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import AnimatedCard from '@/components/AnimatedCard';
import StatusProgressRing from '@/components/StatusProgressRing';

export default function Dashboard() {
  const userStats = {
    name: "John Doe",
    tagline: "I embody authenticity.",
    memberSince: "12 juillet 2025",
    currentStatus: "GOLD",
    nextStatus: "PLATINUM",
    progress: 65,
    articlesAuthenticated: 127,
    collectionValue: "AED 89,450",
    brandCount: 8,
    authenticityScore: "98.5%"
  };

  const advantages = [
    {
      icon: "🔐",
      title: "Accès aux ventes privées TRUE ME",
      description: "Ventes exclusives réservées aux membres Gold+"
    },
    {
      icon: "🎭", 
      title: "Invitations à des événements partenaires",
      description: "Événements VIP dans les boutiques de luxe"
    },
    {
      icon: "✨",
      title: "Code de réduction chez The Luxury Cleaner",
      description: "15% de réduction sur les services premium"
    },
    {
      icon: "⚡",
      title: "Accès prioritaire au centre d'authentification",
      description: "Authentification rapide sous 24h"
    }
  ];

  const statsCards = [
    {
      icon: "✓",
      value: userStats.articlesAuthenticated,
      label: "Articles authentifiés",
      trend: "+12 ce mois",
      trendColor: "text-green-600"
    },
    {
      icon: "💎",
      value: userStats.collectionValue,
      label: "Valeur totale",
      trend: "+15% cette année",
      trendColor: "text-green-600"
    },
    {
      icon: "🏷️",
      value: userStats.brandCount,
      label: "Marques différentes",
      trend: "Chanel (Silver)",
      trendColor: "text-[#C0C0C0]"
    },
    {
      icon: "🛡️",
      value: userStats.authenticityScore,
      label: "Fiabilité",
      trend: "Excellent",
      trendColor: "text-green-600"
    }
  ];

  return (
    <main className="min-h-screen bg-[#F5F2E8]">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Header Glassmorphisme */}
          <div className="bg-[rgba(245,242,232,0.95)] backdrop-blur-[20px] border-b border-[rgba(255,255,255,0.2)] rounded-t-[20px] p-6 mb-8 shadow-[0_2px_12px_rgba(184,134,11,0.1)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-2xl font-bold text-[#1C1C1E]">TM</div>
                <div className="text-sm text-[#B8860B] tracking-wider font-light">NOT A STYLE. A SIGNATURE.</div>
              </div>
              <div className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.4)] backdrop-blur-[15px] border border-[rgba(255,255,255,0.3)] flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="text-xl">🔔</div>
              </div>
            </div>
          </div>

          {/* Hero Profile Section */}
          <AnimatedCard 
            className="bg-[rgba(255,255,255,0.4)] backdrop-blur-[15px] border border-[rgba(255,255,255,0.3)] rounded-[20px] p-8 mb-8 shadow-[0_8px_32px_rgba(184,134,11,0.12)]" 
            glowEffect={true}
          >
            <div className="text-center">
              {/* Avatar avec glassmorphisme */}
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#B8860B] to-[#DAA520] p-1 shadow-[0_4px_16px_rgba(184,134,11,0.2)] hover:shadow-[0_6px_24px_rgba(184,134,11,0.4)] transition-all duration-300">
                  <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-2xl font-bold text-white">
                    JD
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-3 h-3 bg-[#B8860B] rounded-full border-2 border-white animate-pulse"></div>
              </div>

              {/* Informations utilisateur */}
              <h1 className="text-3xl font-bold text-[#1C1C1E] mb-2">{userStats.name}</h1>
              <p className="text-lg italic text-[#6B6B6B] mb-4">{userStats.tagline}</p>
              <p className="text-sm text-[#6B6B6B] mb-8">
                Membre TRUE ME depuis : {userStats.memberSince}
              </p>

              {/* Progress Ring */}
              <div className="mb-6">
                <StatusProgressRing 
                  progress={userStats.progress}
                  size={140}
                  strokeWidth={10}
                  color="#DAA520"
                  animationDelay={500}
                  label="vers Platinum"
                />
              </div>

              {/* Carte Statut Actuel avec glassmorphisme gold */}
              <AnimatedCard className="bg-gradient-to-r from-[#B8860B] to-[#DAA520] backdrop-blur-[15px] rounded-[16px] p-6 text-white shadow-[0_6px_20px_rgba(184,134,11,0.25)] max-w-md mx-auto">
                <p className="text-sm opacity-90 mb-2">Statut actuel TRUE ME :</p>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <span className="text-2xl">🏆</span>
                  <span className="text-2xl font-bold tracking-wide">{userStats.currentStatus}</span>
                </div>
                
                <Link href="/dashboard/evolution" className="text-sm underline hover:no-underline transition-all duration-300 cursor-pointer hover:text-yellow-200">
                  Voir détails →
                </Link>
              </AnimatedCard>
            </div>
          </AnimatedCard>

          {/* Statistics Cards Grid avec glassmorphisme */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsCards.map((stat, index) => (
              <AnimatedCard 
                key={index} 
                className="bg-[rgba(255,255,255,0.3)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.25)] rounded-[16px] p-6 shadow-[0_4px_16px_rgba(184,134,11,0.08)]"
                hoverScale={true}
                glowEffect={true}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-[rgba(184,134,11,0.1)] rounded-full flex items-center justify-center text-xl hover:bg-[rgba(184,134,11,0.2)] hover:scale-110 transition-all duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#1C1C1E] mb-2">{stat.value}</div>
                <div className="text-sm text-[#6B6B6B] mb-2">{stat.label}</div>
                <div className={`text-sm font-medium ${stat.trendColor}`}>{stat.trend}</div>
              </AnimatedCard>
            ))}
          </div>

          {/* Section Avantages avec glassmorphisme cream */}
          <div className="bg-[rgba(245,242,232,0.8)] backdrop-blur-[15px] rounded-[20px] p-8 mb-8 border border-[rgba(255,255,255,0.3)]">
            <h2 className="text-2xl font-bold text-[#1C1C1E] mb-6">Avantages associés</h2>
            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-[rgba(255,255,255,0.4)] rounded-[12px] border border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.5)] transition-all duration-300">
                  <div className="w-8 h-8 bg-[rgba(255,255,255,0.6)] backdrop-blur-[10px] rounded-full flex items-center justify-center text-lg flex-shrink-0 shadow-inner">
                    {advantage.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#1C1C1E] mb-1">{advantage.title}</h3>
                    <p className="text-sm text-[#6B6B6B] leading-relaxed">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions rapides */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedCard 
              className="bg-[rgba(255,255,255,0.4)] backdrop-blur-[15px] border border-[rgba(255,255,255,0.3)] rounded-[16px] p-6 text-center"
              hoverScale={true}
              glowEffect={true}
            >
              <Link href="/brands" className="block">
                <div className="text-3xl mb-4 hover:scale-110 transition-transform duration-300">🏷️</div>
                <h3 className="font-bold text-[#1C1C1E] mb-2">Mes Marques</h3>
                <p className="text-sm text-[#6B6B6B]">Voir mon statut par marque</p>
              </Link>
            </AnimatedCard>
            
            <AnimatedCard 
              className="bg-[rgba(255,255,255,0.4)] backdrop-blur-[15px] border border-[rgba(255,255,255,0.3)] rounded-[16px] p-6 text-center"
              hoverScale={true}
              glowEffect={true}
            >
              <Link href="/marketplace" className="block">
                <div className="text-3xl mb-4 hover:scale-110 transition-transform duration-300">🛍️</div>
                <h3 className="font-bold text-[#1C1C1E] mb-2">Marketplace</h3>
                <p className="text-sm text-[#6B6B6B]">Explorer les articles</p>
              </Link>
            </AnimatedCard>
            
            <AnimatedCard 
              className="bg-[rgba(255,255,255,0.4)] backdrop-blur-[15px] border border-[rgba(255,255,255,0.3)] rounded-[16px] p-6 text-center cursor-pointer"
              hoverScale={true}
              glowEffect={true}
            >
              <div className="text-3xl mb-4 hover:scale-110 transition-transform duration-300">📈</div>
              <h3 className="font-bold text-[#1C1C1E] mb-2">Progression</h3>
              <p className="text-sm text-[#6B6B6B]">Historique détaillé</p>
            </AnimatedCard>
          </div>

          {/* Floating Action Buttons */}
          <div className="fixed bottom-8 right-8 flex flex-col space-y-3 z-40">
            <button className="w-14 h-14 bg-gradient-to-r from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center text-white text-2xl shadow-[0_6px_20px_rgba(184,134,11,0.3)] hover:scale-110 transition-all duration-300 animate-pulse">
              +
            </button>
            <button className="w-12 h-12 bg-[rgba(255,255,255,0.4)] backdrop-blur-[15px] border border-[rgba(255,255,255,0.3)] rounded-full flex items-center justify-center text-xl text-[#B8860B] shadow-[0_4px_16px_rgba(184,134,11,0.15)] hover:scale-110 transition-all duration-300">
              📊
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
