'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function Evolution() {
  return (
    <main className="min-h-screen bg-[#F5F2E8]">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Header */}
          <div className="bg-[rgba(255,255,255,0.4)] backdrop-blur-[15px] border border-[rgba(255,255,255,0.3)] rounded-[20px] p-8 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-[#1C1C1E] mb-2">Évolution du Statut</h1>
                <p className="text-[#6B6B6B]">Suivez votre progression vers le statut Platinum</p>
              </div>
              <Link href="/dashboard" className="px-6 py-3 bg-[rgba(184,134,11,0.1)] text-[#B8860B] rounded-lg hover:bg-[rgba(184,134,11,0.2)] transition-all duration-300">
                ← Retour
              </Link>
            </div>
          </div>

          {/* Evolution Content */}
          <div className="bg-[rgba(255,255,255,0.4)] backdrop-blur-[15px] border border-[rgba(255,255,255,0.3)] rounded-[20px] p-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h2 className="text-2xl font-bold text-[#1C1C1E] mb-4">Évolution en cours...</h2>
              <p className="text-[#6B6B6B]">Cette page sera développée dans la prochaine phase du projet.</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
