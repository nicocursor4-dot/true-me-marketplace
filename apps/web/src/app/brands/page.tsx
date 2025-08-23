'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import AnimatedCard from '@/components/AnimatedCard';
import StatusProgressRing from '@/components/StatusProgressRing';

export default function Brands() {
  const [selectedBrand, setSelectedBrand] = useState('chanel');

  const brandsData = {
    chanel: {
      name: 'Chanel',
      logo: '👑',
      status: 'Silver',
      statusColor: '#C0C0C0',
      currentItems: 23,
      targetItems: 35,
      progress: 66,
      totalValue: 'AED 45,200',
      avgAuthenticity: '96.8%',
      dnaScore: 85,
      missions: [
        { id: 1, title: 'Authentifier un sac 2.55', points: 150, status: 'available', category: 'Iconique' },
        { id: 2, title: 'Ajouter une pièce Haute Couture', points: 300, status: 'completed', category: 'Prestige' },
        { id: 3, title: 'Participer à un événement Chanel', points: 200, status: 'locked', category: 'Expérience' }
      ],
      advantages: [
        { title: 'Accès prioritaire aux ventes privées Chanel', active: true },
        { title: 'Invitation aux défilés (status Gold requis)', active: false },
        { title: 'Consultation styling personnalisée', active: true }
      ]
    },
    hermes: {
      name: 'Hermès',
      logo: '🦄',
      status: 'Bronze',
      statusColor: '#CD7F32',
      currentItems: 8,
      targetItems: 15,
      progress: 53,
      totalValue: 'AED 28,900',
      avgAuthenticity: '98.2%',
      dnaScore: 72,
      missions: [
        { id: 1, title: 'Authentifier un Birkin ou Kelly', points: 500, status: 'available', category: 'Iconique' },
        { id: 2, title: 'Ajouter 3 accessoires en cuir', points: 200, status: 'in_progress', category: 'Collection' },
        { id: 3, title: 'Obtenir une pièce vintage', points: 350, status: 'locked', category: 'Patrimoine' }
      ],
      advantages: [
        { title: 'Accès aux pièces Hermès authentifiées', active: true },
        { title: 'Newsletter exclusive collections', active: true },
        { title: 'Priorité sur les pièces rares', active: false }
      ]
    },
    louisVuitton: {
      name: 'Louis Vuitton',
      logo: '💎',
      status: 'Gold',
      statusColor: '#FFD700',
      currentItems: 42,
      targetItems: 50,
      progress: 84,
      totalValue: 'AED 67,300',
      avgAuthenticity: '97.5%',
      dnaScore: 92,
      missions: [
        { id: 1, title: 'Compléter une collection complète', points: 400, status: 'in_progress', category: 'Collectionneur' },
        { id: 2, title: 'Ajouter une pièce collaborative', points: 250, status: 'available', category: 'Tendance' },
        { id: 3, title: 'Devenir ambassadeur LV', points: 1000, status: 'locked', category: 'Elite' }
      ],
      advantages: [
        { title: 'Accès VIP aux nouvelles collections', active: true },
        { title: 'Personal shopper dédié', active: true },
        { title: 'Invitations événements exclusifs', active: true }
      ]
    }
  };

  const brands = Object.keys(brandsData);
  const currentBrand = brandsData[selectedBrand as keyof typeof brandsData];

  const getStatusBadge = (status: string, color: string) => {
    return (
      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium`} 
           style={{ backgroundColor: `${color}20`, color: color }}>
        <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: color }}></div>
        {status}
      </div>
    );
  };

  const getProgressRing = (progress: number, color: string) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="8"
            fill="transparent"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke={color}
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-[#1C1C1E]">{progress}%</span>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-[#F5F2E8]">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Header */}
          <div className="bg-[rgba(255,255,255,0.4)] backdrop-blur-[15px] border border-[rgba(255,255,255,0.3)] rounded-[20px] p-8 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-[#1C1C1E] mb-2">Mes Marques</h1>
                <p className="text-[#6B6B6B]">Bloc 2 - Statut et progression par marque</p>
              </div>
              <Link href="/dashboard" className="px-6 py-3 bg-[rgba(184,134,11,0.1)] text-[#B8860B] rounded-lg hover:bg-[rgba(184,134,11,0.2)] transition-all duration-300">
                ← Dashboard
              </Link>
            </div>
          </div>

          {/* Brand Selector */}
          <div className="bg-[rgba(255,255,255,0.3)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.25)] rounded-[16px] p-6 mb-8">
            <div className="flex flex-wrap gap-4 justify-center">
              {brands.map((brandKey) => {
                const brand = brandsData[brandKey as keyof typeof brandsData];
                return (
                  <button
                    key={brandKey}
                    onClick={() => setSelectedBrand(brandKey)}
                    className={`flex items-center space-x-3 px-6 py-4 rounded-[12px] transition-all duration-300 ${
                      selectedBrand === brandKey 
                        ? 'bg-[rgba(184,134,11,0.2)] border-2 border-[#B8860B] scale-105' 
                        : 'bg-[rgba(255,255,255,0.4)] border border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.5)]'
                    }`}
                  >
                    <div className="text-2xl">{brand.logo}</div>
                    <div className="text-left">
                      <div className="font-bold text-[#1C1C1E]">{brand.name}</div>
                      <div className="text-sm" style={{ color: brand.statusColor }}>{brand.status}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Brand Dashboard */}
          <div className="bg-[rgba(255,255,255,0.4)] backdrop-blur-[15px] border border-[rgba(255,255,255,0.3)] rounded-[20px] p-8 mb-8">
            
            {/* Brand Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{currentBrand.logo}</div>
                <div>
                  <h2 className="text-2xl font-bold text-[#1C1C1E]">{currentBrand.name}</h2>
                  {getStatusBadge(currentBrand.status, currentBrand.statusColor)}
                </div>
              </div>
              <StatusProgressRing 
                progress={currentBrand.progress}
                size={100}
                strokeWidth={8}
                color={currentBrand.statusColor}
                animationDelay={200}
                showPercentage={true}
              />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-[rgba(245,242,232,0.6)] backdrop-blur-[10px] rounded-[12px] p-4 text-center">
                <div className="text-2xl font-bold text-[#1C1C1E] mb-1">{currentBrand.currentItems}</div>
                <div className="text-sm text-[#6B6B6B]">Articles authentifiés</div>
              </div>
              <div className="bg-[rgba(245,242,232,0.6)] backdrop-blur-[10px] rounded-[12px] p-4 text-center">
                <div className="text-2xl font-bold text-[#1C1C1E] mb-1">{currentBrand.totalValue}</div>
                <div className="text-sm text-[#6B6B6B]">Valeur totale</div>
              </div>
              <div className="bg-[rgba(245,242,232,0.6)] backdrop-blur-[10px] rounded-[12px] p-4 text-center">
                <div className="text-2xl font-bold text-[#1C1C1E] mb-1">{currentBrand.avgAuthenticity}</div>
                <div className="text-sm text-[#6B6B6B]">Taux authenticité</div>
              </div>
              <div className="bg-[rgba(245,242,232,0.6)] backdrop-blur-[10px] rounded-[12px] p-4 text-center">
                <div className="text-2xl font-bold text-[#1C1C1E] mb-1">{currentBrand.dnaScore}/100</div>
                <div className="text-sm text-[#6B6B6B]">ADN Marque</div>
              </div>
            </div>

            {/* Progression Bar */}
            <div className="bg-[rgba(245,242,232,0.8)] backdrop-blur-[10px] rounded-[12px] p-6 mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-[#1C1C1E]">Progression vers {currentBrand.status === 'Bronze' ? 'Silver' : currentBrand.status === 'Silver' ? 'Gold' : 'Platinum'}</span>
                <span className="text-sm text-[#6B6B6B]">{currentBrand.currentItems}/{currentBrand.targetItems} articles</span>
              </div>
              <div className="w-full bg-[rgba(255,255,255,0.3)] rounded-full h-2 overflow-hidden">
                <div 
                  className="h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${currentBrand.progress}%`,
                    backgroundColor: currentBrand.statusColor 
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Missions Section */}
          <div className="bg-[rgba(255,255,255,0.4)] backdrop-blur-[15px] border border-[rgba(255,255,255,0.3)] rounded-[20px] p-8 mb-8">
            <h3 className="text-xl font-bold text-[#1C1C1E] mb-6">Missions {currentBrand.name}</h3>
            <div className="space-y-4">
              {currentBrand.missions.map((mission) => (
                <div key={mission.id} className={`flex items-center justify-between p-4 rounded-[12px] border transition-all duration-300 ${
                  mission.status === 'completed' 
                    ? 'bg-green-50 border-green-200' 
                    : mission.status === 'available'
                    ? 'bg-[rgba(184,134,11,0.05)] border-[rgba(184,134,11,0.2)] hover:bg-[rgba(184,134,11,0.1)]'
                    : mission.status === 'in_progress'
                    ? 'bg-blue-50 border-blue-200'
                    : 'bg-gray-50 border-gray-200 opacity-60'
                }`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                      mission.status === 'completed' ? 'bg-green-500 text-white' :
                      mission.status === 'available' ? 'bg-[#B8860B] text-white' :
                      mission.status === 'in_progress' ? 'bg-blue-500 text-white' :
                      'bg-gray-400 text-white'
                    }`}>
                      {mission.status === 'completed' ? '✓' : 
                       mission.status === 'in_progress' ? '⏳' :
                       mission.status === 'locked' ? '🔒' : '●'}
                    </div>
                    <div>
                      <div className="font-semibold text-[#1C1C1E]">{mission.title}</div>
                      <div className="text-sm text-[#6B6B6B]">{mission.category} • +{mission.points} points</div>
                    </div>
                  </div>
                  <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    mission.status === 'available' 
                      ? 'bg-[#B8860B] text-white hover:bg-[#A0750A]'
                      : mission.status === 'completed'
                      ? 'bg-green-500 text-white cursor-not-allowed'
                      : mission.status === 'in_progress'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-400 text-white cursor-not-allowed'
                  }`}>
                    {mission.status === 'available' ? 'Commencer' :
                     mission.status === 'completed' ? 'Terminé' :
                     mission.status === 'in_progress' ? 'En cours' : 'Verrouillé'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Advantages Section */}
          <div className="bg-[rgba(255,255,255,0.4)] backdrop-blur-[15px] border border-[rgba(255,255,255,0.3)] rounded-[20px] p-8">
            <h3 className="text-xl font-bold text-[#1C1C1E] mb-6">Avantages {currentBrand.name}</h3>
            <div className="space-y-3">
              {currentBrand.advantages.map((advantage, index) => (
                <div key={index} className={`flex items-center justify-between p-4 rounded-[12px] ${
                  advantage.active 
                    ? 'bg-[rgba(184,134,11,0.1)] border border-[rgba(184,134,11,0.3)]'
                    : 'bg-gray-50 border border-gray-200'
                }`}>
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                      advantage.active ? 'bg-[#B8860B] text-white' : 'bg-gray-400 text-white'
                    }`}>
                      {advantage.active ? '✓' : '○'}
                    </div>
                    <span className={`${advantage.active ? 'text-[#1C1C1E]' : 'text-gray-500'}`}>
                      {advantage.title}
                    </span>
                  </div>
                  <span className={`text-sm font-medium ${
                    advantage.active ? 'text-[#B8860B]' : 'text-gray-400'
                  }`}>
                    {advantage.active ? 'Actif' : 'Inactif'}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
