'use client'

import React from 'react'
import LegacyNavbar from '@/components/LegacyNavbar'
import RichFooter from '@/components/layout/RichFooter'

export default function ConditionsPage() {
  return (
    <main className="min-h-screen bg-trueme-cream">
      <LegacyNavbar />
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8 prose prose-trueme">
          <h1>Conditions d'utilisation</h1>
          <p>Exemple de conditions. Remplacez par votre contenu légal définitif.</p>
          <h2>1. Objet</h2>
          <p>TRUE ME fournit une marketplace authentifiée pour l'achat et la vente d'articles de luxe.</p>
          <h2>2. Comptes</h2>
          <p>Vous êtes responsable de la confidentialité de vos identifiants et de l'activité de votre compte.</p>
        </div>
      </section>
      <RichFooter />
    </main>
  )
}
