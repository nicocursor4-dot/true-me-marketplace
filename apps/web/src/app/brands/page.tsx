'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function Brands() {
  const [selectedBrand, setSelectedBrand] = useState('chanel');

  const brandsData = {
    chanel: {
      name: 'Chanel',
      status: 'Silver',
      progress: 65,
      currentItems: 18,
      totalValue: 'AED 89,500',
      nextGoal: 'Gold',
      missions: [
        { id: 1, title: 'Authentifier 5 articles Chanel', status: 'completed', reward: '+25 pts' },
        { id: 2, title: 'Participer à une vente privée', status: 'in_progress', reward: '+15 pts' },
        { id: 3, title: 'Inviter 3 amis TRUE ME', status: 'available', reward: '+30 pts' },
        { id: 4, title: 'Atteindre AED 100K de collection', status: 'locked', reward: '+50 pts' }
      ],
      advantages: [
        'Authentification prioritaire sur articles Chanel',
        'Accès aux ventes privées trimestrielles',
        'Conseiller spécialisé Chanel dédié',
        'Certificat d\'authenticité premium'
      ]
    },
    hermes: {
      name: 'Hermès',
      status: 'Bronze',
      progress: 35,
      currentItems: 8,
      totalValue: 'AED 45,200',
      nextGoal: 'Silver',
      missions: [
        { id: 1, title: 'Authentifier 3 articles Hermès', status: 'completed', reward: '+20 pts' },
        { id: 2, title: 'Participer au webinaire expertise', status: 'available', reward: '+10 pts' },
        { id: 3, title: 'Compléter le quiz Hermès', status: 'available', reward: '+15 pts' },
        { id: 4, title: 'Atteindre AED 60K de collection', status: 'locked', reward: '+40 pts' }
      ],
      advantages: [
        'Authentification rapide articles Hermès',
        'Accès au forum expert Hermès',
        'Guide d\'investissement exclusif',
        'Newsletter tendances Hermès'
      ]
    },
    louisVuitton: {
      name: 'Louis Vuitton',
      status: 'Gold',
      progress: 85,
      currentItems: 23,
      totalValue: 'AED 125,800',
      nextGoal: 'Platinum',
      missions: [
        { id: 1, title: 'Authentifier 10 articles LV', status: 'completed', reward: '+30 pts' },
        { id: 2, title: 'Vendre 2 articles via TRUE ME', status: 'completed', reward: '+25 pts' },
        { id: 3, title: 'Devenir ambassadeur LV', status: 'in_progress', reward: '+40 pts' },
        { id: 4, title: 'Atteindre AED 150K de collection', status: 'available', reward: '+60 pts' }
      ],
      advantages: [
        'Authentification express 12h garanties',
        'Accès VIP aux lancements Louis Vuitton',
        'Conseiller personnel Louis Vuitton',
        'Invitation événements exclusifs'
      ]
    }
  };

  const currentBrand = brandsData[selectedBrand as keyof typeof brandsData];

  const getMissionStatus = (status: string) => {
    switch (status) {
      case 'completed': return 'Terminé';
      case 'in_progress': return 'En cours';
      case 'available': return 'Commencer';
      case 'locked': return 'Bloqué';
      default: return 'Indisponible';
    }
  };

  return (
    <main className="min-h-screen bg-trueme-cream pt-24">
      <Navigation />
      
      <div className="min-h-screen pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 fade-in">
            <div className="inline-flex items-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-trueme-gold rounded-full"></div>
              <span className="text-sm font-medium text-trueme-gold tracking-[0.2em] uppercase">Maisons Partenaires</span>
              <div className="w-2 h-2 bg-trueme-gold rounded-full"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-light mb-6 text-trueme tracking-tight">
              Vos Marques
            </h1>
            <h2 className="text-lg md:text-xl font-light mb-8 text-trueme-gold tracking-wide">
              Not a Styl. A Signature.
            </h2>
            <p className="text-lg md:text-xl text-trueme-light max-w-3xl mx-auto leading-relaxed">
              Cultivez vos relations privilégiées avec les plus grandes maisons de luxe
            </p>
          </div>
          
          {/* Brand Selection */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12 md:mb-16 fade-in px-2" style={{animationDelay: '0.2s'}}>
            {Object.entries(brandsData).map(([key, brand]) => (
              <button
                key={key}
                onClick={() => setSelectedBrand(key)}
                className={`glass-morphism px-4 md:px-8 py-3 md:py-4 rounded-xl font-medium text-sm md:text-lg transition-all duration-300 ${
                  selectedBrand === key 
                    ? 'bg-trueme-gold text-white transform scale-105' 
                    : 'text-trueme hover:text-trueme-gold'
                }`}
              >
                {brand.name}
              </button>
            ))}
          </div>

          {/* Brand Status Card */}
          <div className="glass-premium p-8 md:p-16 mb-12 md:mb-16 text-center fade-in" style={{animationDelay: '0.4s'}}>
            <div className="text-4xl md:text-6xl mb-6 md:mb-8">👑</div>
            <h2 className="mb-6 md:mb-8 text-trueme text-2xl md:text-4xl font-light">Statut <span className="text-trueme-gold font-medium">{currentBrand.status}</span></h2>
            <div className="text-trueme-light text-lg md:text-2xl mb-12 md:mb-16">
              {currentBrand.currentItems} articles • {currentBrand.totalValue}
            </div>
            
            {/* Progress */}
            <div className="max-w-lg mx-auto">
              <div className="text-lg md:text-xl mb-6 text-trueme font-medium">{currentBrand.progress}% vers <span className="text-trueme-gold">{currentBrand.nextGoal}</span></div>
              <div className="progress-bar h-3 md:h-4">
                <div 
                  className="progress-fill h-3 md:h-4"
                  style={{width: `${currentBrand.progress}%`}}
                ></div>
              </div>
            </div>
          </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="glass-morphism p-8 text-center luxury-hover">
                <div className="text-5xl font-bold mb-4 text-trueme">{currentBrand.currentItems}</div>
                <div className="text-trueme-light text-lg">Articles authentifiés</div>
              </div>
              <div className="glass-morphism p-8 text-center luxury-hover">
                <div className="text-5xl font-bold mb-4 text-trueme-gold">{currentBrand.totalValue}</div>
                <div className="text-trueme-light text-lg">Valeur totale</div>
              </div>
              <div className="glass-morphism p-8 text-center luxury-hover">
                <div className="text-5xl font-bold mb-4 text-trueme">{currentBrand.nextGoal}</div>
                <div className="text-trueme-light text-lg">Prochain objectif</div>
              </div>
            </div>

            {/* Missions */}
          <div className="mb-16 md:mb-20 fade-in" style={{animationDelay: '0.6s'}}>
            <h2 className="mb-8 md:mb-12 text-center text-trueme text-2xl md:text-4xl font-light">Missions <span className="text-trueme-gold font-medium">{currentBrand.name}</span></h2>
            <div className="space-y-4 md:space-y-6">
              {currentBrand.missions.map((mission) => (
                <div key={mission.id} className="glass-morphism p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                  <div className="flex items-center space-x-4 md:space-x-6">
                    <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center shrink-0 ${
                      mission.status === 'completed' ? 'bg-green-500' :
                      mission.status === 'in_progress' ? 'bg-trueme-gold' :
                      mission.status === 'available' ? 'bg-blue-500' :
                      'bg-gray-400'
                    }`}>
                      {mission.status === 'completed' && <span className="text-white text-xs md:text-sm">✓</span>}
                      {mission.status === 'locked' && <span className="text-white text-xs md:text-sm">🔒</span>}
                    </div>
                    <div>
                      <h3 className="text-trueme text-lg md:text-xl font-medium mb-1 md:mb-2">{mission.title}</h3>
                      <div className="text-trueme-light capitalize text-sm md:text-base">{mission.status}</div>
                    </div>
                  </div>
                  <div className="text-trueme-gold font-semibold text-base md:text-lg md:text-right">{mission.reward}</div>
                </div>
              ))}
            </div>
          </div>

            {/* Advantages */}
          <div className="mb-16 md:mb-20 fade-in" style={{animationDelay: '0.8s'}}>
            <h2 className="mb-12 md:mb-16 text-center text-trueme text-2xl md:text-4xl font-light">Vos Avantages <span className="text-trueme-gold font-medium">{currentBrand.name}</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {currentBrand.advantages.map((advantage, index) => (
                <div key={index} className="glass-morphism p-6 md:p-10">
                  <div className="text-3xl md:text-4xl mb-4 md:mb-6">✨</div>
                  <p className="text-trueme-light leading-relaxed text-base md:text-lg">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 fade-in">
            <Link href="/marketplace" className="glass-premium p-8 md:p-12 block">
              <div className="text-4xl md:text-5xl mb-4 md:mb-6">🛒</div>
              <h3 className="mb-4 md:mb-6 text-trueme text-xl md:text-2xl font-medium">Marketplace</h3>
              <p className="text-trueme-light text-base md:text-lg">Découvrir de nouveaux articles {currentBrand.name}</p>
            </Link>
            
            <Link href="/dashboard" className="glass-premium p-8 md:p-12 block">
              <div className="text-4xl md:text-5xl mb-4 md:mb-6">📊</div>
              <h3 className="mb-4 md:mb-6 text-trueme text-xl md:text-2xl font-medium">Dashboard</h3>
              <p className="text-trueme-light text-base md:text-lg">Voir votre statut global</p>
            </Link>
            
            <div className="glass-premium p-8 md:p-12 cursor-pointer">
              <div className="text-4xl md:text-5xl mb-4 md:mb-6">🎯</div>
              <h3 className="mb-4 md:mb-6 text-trueme text-xl md:text-2xl font-medium">Objectifs</h3>
              <p className="text-trueme-light text-base md:text-lg">Planifier votre progression</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
