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
    <main className="min-h-screen bg-white pt-20">
      <Navigation />
      
      <div className="luxury-container section-spacing">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-20 text-center fade-in">
            <h1 className="mb-8">Mes Marques</h1>
            <p className="text-xl text-minimal max-w-2xl mx-auto">
              Suivez votre progression et débloquez des avantages exclusifs pour chaque maison de luxe.
            </p>
          </div>
          
          {/* Brand Selector */}
          <div className="flex justify-center space-x-4 mb-20 fade-in">
            {Object.entries(brandsData).map(([key, brand]) => (
              <button
                key={key}
                onClick={() => setSelectedBrand(key)}
                className={`px-8 py-3 font-medium transition-all duration-300 border ${
                  selectedBrand === key
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-minimal hover:border-black'
                }`}
              >
                {brand.name}
              </button>
            ))}
          </div>

          {/* Current Brand Details */}
          <div className="card-minimal p-16 mb-20 fade-in">
            <div className="text-center mb-12">
              <h2 className="mb-4">{currentBrand.name}</h2>
              <div className="text-minimal text-xl mb-8">Statut {currentBrand.status}</div>
              
              {/* Progress */}
              <div className="max-w-md mx-auto mb-8">
                <div className="text-lg mb-4">{currentBrand.progress}% vers {currentBrand.nextGoal}</div>
                <div className="bg-minimal rounded-full h-2">
                  <div 
                    className="bg-black rounded-full h-2 transition-all duration-1000"
                    style={{width: `${currentBrand.progress}%`}}
                  ></div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{currentBrand.currentItems}</div>
                <div className="text-minimal">Articles authentifiés</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{currentBrand.totalValue}</div>
                <div className="text-minimal">Valeur totale</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{currentBrand.nextGoal}</div>
                <div className="text-minimal">Prochain objectif</div>
              </div>
            </div>

            {/* Missions */}
            <div className="mb-16">
              <h3 className="mb-8 text-center">Missions {currentBrand.name}</h3>
              <div className="space-y-4">
                {currentBrand.missions.map((mission: any) => (
                  <div key={mission.id} className="border-minimal border rounded-xl p-6 flex items-center justify-between">
                    <div>
                      <h4 className="font-medium mb-2">{mission.title}</h4>
                      <span className="text-minimal text-sm">{mission.reward}</span>
                    </div>
                    <div className={`px-4 py-2 rounded text-sm font-medium ${
                      mission.status === 'completed' 
                        ? 'bg-minimal text-black'
                        : mission.status === 'in_progress'
                        ? 'bg-black text-white'
                        : mission.status === 'available'
                        ? 'border border-black text-black hover:bg-black hover:text-white transition-all'
                        : 'bg-minimal text-minimal'
                    }`}>
                      {getMissionStatus(mission.status)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Advantages */}
            <div>
              <h3 className="mb-8 text-center">Vos Avantages {currentBrand.status}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentBrand.advantages.map((advantage: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3 p-4">
                    <div className="w-2 h-2 rounded-full bg-black mt-2 flex-shrink-0"></div>
                    <span className="text-minimal leading-relaxed">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in">
            <Link href="/marketplace" className="card-minimal p-8 block subtle-hover">
              <h3 className="mb-4">01 — Marketplace</h3>
              <p className="text-minimal">Découvrir de nouveaux articles {currentBrand.name}</p>
            </Link>
            
            <Link href="/dashboard" className="card-minimal p-8 block subtle-hover">
              <h3 className="mb-4">02 — Dashboard</h3>
              <p className="text-minimal">Voir mon statut global TRUE ME</p>
            </Link>
            
            <div className="card-minimal p-8 subtle-hover cursor-pointer">
              <h3 className="mb-4">03 — Programmes</h3>
              <p className="text-minimal">Découvrir tous les programmes fidélité</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
