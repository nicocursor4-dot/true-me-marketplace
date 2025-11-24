'use client'

import React from 'react'
import LegacyNavbar from '@/components/LegacyNavbar'
import RichFooter from '@/components/layout/RichFooter'

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-trueme-cream">
      <LegacyNavbar />
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8 prose prose-trueme">
          <h1>Politique de confidentialité</h1>
          <p>Exemple de politique. Remplacez par votre contenu légal définitif.</p>
          <h2>Données collectées</h2>
          <p>Nous collectons les informations nécessaires au fonctionnement de la marketplace.</p>
          <h2>Vos droits</h2>
          <p>Vous disposez d'un droit d'accès, de rectification et de suppression de vos données.</p>
        </div>
      </section>
      <RichFooter />
    </main>
  )
}
