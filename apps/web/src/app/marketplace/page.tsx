'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-[#F5F2E8]">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Header */}
          <div className="bg-[rgba(255,255,255,0.4)] backdrop-blur-[15px] border border-[rgba(255,255,255,0.3)] rounded-[20px] p-8 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-[#1C1C1E] mb-2">Marketplace VIP</h1>
                <p className="text-[#6B6B6B]">Bloc 3 - Achat et vente authentifiés</p>
              </div>
              <Link href="/dashboard" className="px-6 py-3 bg-[rgba(184,134,11,0.1)] text-[#B8860B] rounded-lg hover:bg-[rgba(184,134,11,0.2)] transition-all duration-300">
                ← Dashboard
              </Link>
            </div>
          </div>

          {/* Marketplace Content Placeholder */}
          <div className="bg-[rgba(255,255,255,0.4)] backdrop-blur-[15px] border border-[rgba(255,255,255,0.3)] rounded-[20px] p-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🛍️</div>
              <h2 className="text-2xl font-bold text-[#1C1C1E] mb-4">Bloc 3 en développement</h2>
              <p className="text-[#6B6B6B] mb-8">Le marketplace authentifié sera implémenté dans la prochaine phase.</p>
              
              {/* Preview Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <div className="bg-[rgba(245,242,232,0.8)] backdrop-blur-[15px] rounded-[16px] p-6">
                  <div className="text-3xl mb-4">🛒</div>
                  <h3 className="font-bold text-[#1C1C1E] mb-2">Acheter</h3>
                  <p className="text-sm text-[#6B6B6B]">Articles de luxe authentifiés par TRUE ME</p>
                </div>
                
                <div className="bg-[rgba(245,242,232,0.8)] backdrop-blur-[15px] rounded-[16px] p-6">
                  <div className="text-3xl mb-4">💰</div>
                  <h3 className="font-bold text-[#1C1C1E] mb-2">Vendre</h3>
                  <p className="text-sm text-[#6B6B6B]">Vendez vos articles avec garantie d'authenticité</p>
                </div>
                
                <div className="bg-[rgba(245,242,232,0.8)] backdrop-blur-[15px] rounded-[16px] p-6">
                  <div className="text-3xl mb-4">👑</div>
                  <h3 className="font-bold text-[#1C1C1E] mb-2">Services VIP</h3>
                  <p className="text-sm text-[#6B6B6B]">Accompagnement personnalisé et privilèges exclusifs</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
