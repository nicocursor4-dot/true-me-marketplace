'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function Dashboard() {
  const userStats = {
    name: "Sophie Dubois",
    username: "@sophie_luxury",
    memberSince: "Mars 2023",
    currentStatus: "Gold",
    progress: 72,
    nextStatus: "Platinum",
    totalItems: 47,
    totalValue: "AED 156,890",
    authenticityScore: "98.5%",
    collectionGrowth: "+15%"
  };

  const advantages = [
    {
      title: "Authentification Express",
      description: "Vos articles sont authentifiés en moins de 24h avec notre service premium Gold."
    },
    {
      title: "Garantie Étendue",
      description: "Protection complète sur tous vos achats pendant 2 ans avec assurance incluse."
    },
    {
      title: "Conseiller Dédié",
      description: "Un expert personnel vous accompagne dans vos investissements luxe."
    },
    {
      title: "Accès VIP",
      description: "Pré-commandes exclusives et événements privés réservés au statut Gold."
    }
  ];

  return (
    <main className="min-h-screen bg-white pt-20">
      <Navigation />
      
      <div className="luxury-container section-spacing">
        {/* User Profile */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-20 fade-in">
            <h1 className="mb-6">Bonjour, {userStats.name.split(' ')[0]}</h1>
            <div className="text-minimal text-xl">
              <p className="mb-2">{userStats.username}</p>
              <p>Membre TRUE ME depuis {userStats.memberSince}</p>
            </div>
          </div>

          {/* Current Status */}
          <div className="card-minimal p-16 mb-20 text-center fade-in">
            <h2 className="mb-8">Statut {userStats.currentStatus}</h2>
            <div className="text-minimal text-xl mb-12">
              Membre privilégié de l'écosystème TRUE ME
            </div>
            
            {/* Progress */}
            <div className="max-w-md mx-auto">
              <div className="text-lg mb-4">{userStats.progress}% vers {userStats.nextStatus}</div>
              <div className="bg-minimal rounded-full h-2">
                <div 
                  className="bg-black rounded-full h-2 transition-all duration-1000"
                  style={{width: `${userStats.progress}%`}}
                ></div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 fade-in">
            <div className="card-minimal p-8 text-center">
              <div className="text-4xl font-bold mb-2">{userStats.totalItems}</div>
              <div className="text-minimal">Articles certifiés</div>
            </div>
            
            <div className="card-minimal p-8 text-center">
              <div className="text-4xl font-bold mb-2">{userStats.totalValue}</div>
              <div className="text-minimal">Valeur totale</div>
            </div>
            
            <div className="card-minimal p-8 text-center">
              <div className="text-4xl font-bold mb-2">{userStats.authenticityScore}</div>
              <div className="text-minimal">Score d'authenticité</div>
            </div>
            
            <div className="card-minimal p-8 text-center">
              <div className="text-4xl font-bold mb-2">{userStats.collectionGrowth}</div>
              <div className="text-minimal">Croissance ce mois</div>
            </div>
          </div>

          {/* Advantages */}
          <div className="mb-20 fade-in">
            <h2 className="mb-16 text-center">Vos Avantages {userStats.currentStatus}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="card-minimal p-8">
                  <h3 className="mb-4">{advantage.title}</h3>
                  <p className="text-minimal leading-relaxed">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in">
            <Link href="/brands" className="card-minimal p-8 block subtle-hover">
              <h3 className="mb-4">01 — Mes Marques</h3>
              <p className="text-minimal">Voir mon statut par marque</p>
            </Link>
            
            <Link href="/marketplace" className="card-minimal p-8 block subtle-hover">
              <h3 className="mb-4">02 — Marketplace</h3>
              <p className="text-minimal">Explorer les articles</p>
            </Link>
            
            <div className="card-minimal p-8 subtle-hover cursor-pointer">
              <h3 className="mb-4">03 — Progression</h3>
              <p className="text-minimal">Historique détaillé</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
