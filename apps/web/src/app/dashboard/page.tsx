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
    <main className="min-h-screen bg-trueme-cream pt-24">
      <Navigation />
      
      <div className="luxury-container section-spacing">
        {/* User Profile */}
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 fade-in">
            <h1 className="mb-6 text-trueme text-5xl">Bonjour, {userStats.name.split(' ')[0]}</h1>
            <div className="text-trueme-light text-2xl">
              <p className="mb-2 text-trueme-gold font-medium">{userStats.username}</p>
              <p>Membre TRUE ME depuis <span className="text-trueme font-semibold">{userStats.memberSince}</span></p>
            </div>
          </div>

          {/* Current Status */}
          <div className="glass-premium p-20 mb-20 text-center fade-in luxury-hover">
            <div className="text-6xl mb-8">👑</div>
            <h2 className="mb-8 text-trueme text-4xl">Statut <span className="text-trueme-gold">{userStats.currentStatus}</span></h2>
            <div className="text-trueme-light text-2xl mb-16">
              Membre privilégié de l'écosystème TRUE ME
            </div>
            
            {/* Progress */}
            <div className="max-w-lg mx-auto">
              <div className="text-xl mb-6 text-trueme font-medium">{userStats.progress}% vers <span className="text-trueme-gold">{userStats.nextStatus}</span></div>
              <div className="progress-bar h-4">
                <div 
                  className="progress-fill h-4"
                  style={{width: `${userStats.progress}%`}}
                ></div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 fade-in">
            <div className="glass-morphism p-10 text-center luxury-hover">
              <div className="text-5xl font-bold mb-4 text-trueme">{userStats.totalItems}</div>
              <div className="text-trueme-light text-lg">Articles certifiés</div>
            </div>
            
            <div className="glass-morphism p-10 text-center luxury-hover">
              <div className="text-5xl font-bold mb-4 text-trueme-gold">{userStats.totalValue}</div>
              <div className="text-trueme-light text-lg">Valeur totale</div>
            </div>
            
            <div className="glass-morphism p-10 text-center luxury-hover">
              <div className="text-5xl font-bold mb-4 text-trueme">{userStats.authenticityScore}</div>
              <div className="text-trueme-light text-lg">Score d'authenticité</div>
            </div>
            
            <div className="glass-morphism p-10 text-center luxury-hover">
              <div className="text-5xl font-bold mb-4 text-trueme-gold">{userStats.collectionGrowth}</div>
              <div className="text-trueme-light text-lg">Croissance ce mois</div>
            </div>
          </div>

          {/* Advantages */}
          <div className="mb-20 fade-in">
            <h2 className="mb-16 text-center text-trueme text-4xl">Vos Avantages <span className="text-trueme-gold">{userStats.currentStatus}</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="glass-morphism p-10 luxury-hover">
                  <div className="text-4xl mb-6">✨</div>
                  <h3 className="mb-6 text-trueme text-2xl font-bold">{advantage.title}</h3>
                  <p className="text-trueme-light leading-relaxed text-lg">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in">
            <Link href="/brands" className="glass-premium p-12 block luxury-hover">
              <div className="text-5xl mb-6">👑</div>
              <h3 className="mb-6 text-trueme text-2xl font-bold">01 — Mes Marques</h3>
              <p className="text-trueme-light text-lg">Voir mon statut par marque</p>
            </Link>
            
            <Link href="/marketplace" className="glass-premium p-12 block luxury-hover">
              <div className="text-5xl mb-6">🛒</div>
              <h3 className="mb-6 text-trueme text-2xl font-bold">02 — Marketplace</h3>
              <p className="text-trueme-light text-lg">Explorer les articles</p>
            </Link>
            
            <div className="glass-premium p-12 luxury-hover cursor-pointer">
              <div className="text-5xl mb-6">📊</div>
              <h3 className="mb-6 text-trueme text-2xl font-bold">03 — Progression</h3>
              <p className="text-trueme-light text-lg">Historique détaillé</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
