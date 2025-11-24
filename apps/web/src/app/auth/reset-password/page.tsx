'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import LegacyNavbar from '@/components/LegacyNavbar'
import RichFooter from '@/components/layout/RichFooter'

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: integrate with backend
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-trueme-cream">
      <LegacyNavbar />
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-3xl font-montserrat font-semibold text-trueme mb-4">Réinitialiser le mot de passe</h1>
          <p className="text-gray-600 mb-6">Saisissez votre adresse email pour recevoir un lien de réinitialisation.</p>
          {submitted ? (
            <div className="p-4 bg-trueme-gold/10 border border-trueme-gold/30 rounded-lg text-trueme">
              Si un compte existe pour {email}, un email de réinitialisation a été envoyé.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-trueme mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-trueme-gold"
                  placeholder="votre@email.com"
                />
              </div>
              <button type="submit" className="w-full btn-gold py-3 rounded-xl font-semibold">Envoyer</button>
              <div className="text-center text-sm text-gray-600">
                <Link href="/auth/login" className="hover:text-trueme-gold">Retour à la connexion</Link>
              </div>
            </form>
          )}
        </div>
      </section>
      <RichFooter />
    </main>
  )
}
