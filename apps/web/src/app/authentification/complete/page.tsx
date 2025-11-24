'use client'

import React from 'react'
import Link from 'next/link'
import LegacyNavbar from '@/components/LegacyNavbar'
import RichFooter from '@/components/layout/RichFooter'
import { Shield, CheckCircle } from 'lucide-react'

export default function AuthCompletePage() {
  return (
    <main className="min-h-screen bg-trueme-cream">
      <LegacyNavbar />
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-trueme-gold" />
            <h1 className="text-3xl font-montserrat font-semibold text-trueme">Authentification Complète</h1>
          </div>
          <p className="text-gray-700 mb-6">Inspection physique détaillée (matériaux, codes, photos) et certificat. Délai indicatif: 2–3 jours.</p>
          <ul className="space-y-2 mb-8">
            {['Inspection physique', 'Matériaux, codes, photos', 'Certificat inclus'].map((f) => (
              <li key={f} className="flex items-center gap-2 text-gray-700"><CheckCircle className="w-4 h-4 text-trueme-gold" />{f}</li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/auth/register?tier=complete" className="btn-gold px-6 py-3 rounded-full text-center font-semibold">S'inscrire</Link>
            <Link href="/contact?from=auth-complete&service=complete" className="border-2 border-trueme text-trueme px-6 py-3 rounded-full text-center font-semibold hover:bg-trueme hover:text-white">Parler à un expert</Link>
            <Link href="/authentification#plans" className="px-6 py-3 rounded-full text-center font-semibold text-trueme underline">Revenir aux plans</Link>
          </div>
        </div>
      </section>
      <RichFooter />
    </main>
  )
}
