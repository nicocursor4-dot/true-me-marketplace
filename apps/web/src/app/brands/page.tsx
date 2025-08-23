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
      
      <div className="luxury-container section-spacing">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-20 text-center fade-in">
            <h1 className="mb-8 text-trueme text-5xl">Mes Marques</h1>
            <p className="text-2xl text-trueme-light max-w-3xl mx-auto leading-relaxed">
              Suivez votre progression et débloquez des avantages exclusifs pour chaque maison de luxe.
            </p>
          </div>
          
          {/* Brand Selector */}
          <div className="flex justify-center space-x-6 mb-20 fade-in">
            {Object.entries(brandsData).map(([key, brand]) => (
              <button
                key={key}
                onClick={() => setSelectedBrand(key)}
                className={`px-10 py-4 font-medium transition-all duration-400 rounded-2xl text-lg ${
                  selectedBrand === key
                    ? 'glass-premium text-trueme shadow-lg transform scale-105'
                    : 'glass-morphism text-trueme hover:text-trueme-gold luxury-hover'
                }`}
              >
                {brand.name}
              </button>
            ))}
          </div>

          {/* Current Brand Details */}
          <div className="glass-premium p-20 mb-20 fade-in luxury-hover">
            <div className="text-center mb-16">
              <div className="text-6xl mb-8">👑</div>
              <h2 className="mb-6 text-trueme text-4xl">{currentBrand.name}</h2>
              <div className="text-trueme-light text-2xl mb-12">Statut <span className="text-trueme-gold font-semibold">{currentBrand.status}</span></div>
              
              {/* Progress */}
              <div className="max-w-lg mx-auto mb-8">
                <div className="text-xl mb-6 text-trueme font-medium">{currentBrand.progress}% vers <span className="text-trueme-gold">{currentBrand.nextGoal}</span></div>
                <div className="bg-trueme-light/20 rounded-full h-4 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-trueme-gold to-trueme rounded-full h-4 transition-all duration-2000"
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
            <div className="mb-20">
              <h3 className="mb-12 text-center text-trueme text-3xl">Missions <span className="text-trueme-gold">{currentBrand.name}</span></h3>
              <div className="space-y-6">
                {currentBrand.missions.map((mission: any) => (
                  <div key={mission.id} className="glass-morphism p-8 flex items-center justify-between luxury-hover">
                    <div>
                      <h4 className="font-bold mb-3 text-trueme text-xl">{mission.title}</h4>
                      <span className="text-trueme-gold font-medium">{mission.reward}</span>
                    </div>
                    <div className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                      mission.status === 'completed' 
                        ? 'bg-trueme-gold text-white'
                        : mission.status === 'in_progress'
                        ? 'bg-trueme text-white'
                        : mission.status === 'available'
                        ? 'border-2 border-trueme-gold text-trueme-gold hover:bg-trueme-gold hover:text-white'
                        : 'bg-trueme-light/30 text-trueme-light'
                    }`}>
                      {getMissionStatus(mission.status)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Advantages */}
            <div>
              <h3 className="mb-12 text-center text-trueme text-3xl">Vos Avantages <span className="text-trueme-gold">{currentBrand.status}</span></h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentBrand.advantages.map((advantage: string, index: number) => (
                  <div key={index} className="glass-morphism p-6 flex items-start space-x-4 luxury-hover">
                    <div className="text-2xl">✨</div>
                    <span className="text-trueme-light leading-relaxed text-lg">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in">
            <Link href="/marketplace" className="glass-premium p-12 block luxury-hover">
              <div className="text-5xl mb-6">🛒</div>
              <h3 className="mb-6 text-trueme text-2xl font-bold">01 — Marketplace</h3>
              <p className="text-trueme-light text-lg">Découvrir de nouveaux articles {currentBrand.name}</p>
            </Link>
            
            <Link href="/dashboard" className="glass-premium p-12 block luxury-hover">
              <div className="text-5xl mb-6">📊</div>
              <h3 className="mb-6 text-trueme text-2xl font-bold">02 — Dashboard</h3>
              <p className="text-trueme-light text-lg">Voir mon statut global TRUE ME</p>
            </Link>
            
            <div className="glass-premium p-12 luxury-hover cursor-pointer">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="mb-6 text-trueme text-2xl font-bold">03 — Programmes</h3>
              <p className="text-trueme-light text-lg">Découvrir tous les programmes fidélité</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
