'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LegacyNavbar from '@/components/LegacyNavbar'
import RichFooter from '@/components/layout/RichFooter'
import { Sparkles, CheckCircle } from 'lucide-react'

export default function AuthPremiumPage() {
  return (
    <main className="min-h-screen bg-trueme-cream">
      <LegacyNavbar />

      {/* Full-height Hero with 16:9 background image and contrast overlay */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/products/PHOTOS SITE TM/herochanel.png"
          alt="Authentification Premium – expertise de pièces de luxe"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/40 sm:bg-black/45" />

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-5xl mx-auto px-4 py-24 md:py-32">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4 text-trueme-gold" />
              Authentification Premium
            </div>

            <h1 className="text-white drop-shadow-xl text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              Expertise approfondie
              <br />
              <span className="text-trueme-gold">garantie d'authenticité</span>
            </h1>
            <p className="text-white/90 drop-shadow-lg text-lg md:text-2xl font-lora max-w-3xl mb-10">
              Double expertise, microscopie/UV, hologramme et rapport détaillé 10+ pages.
              Délai indicatif: 3–5 jours.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/auth/register?tier=premium" className="btn-gold px-8 py-4 rounded-full text-center font-semibold text-base md:text-lg">
                S'inscrire
              </Link>
              <Link
                href="/contact?from=auth-premium&service=premium"
                className="px-8 py-4 text-base md:text-lg border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-colors"
              >
                Parler à un expert
              </Link>
              <Link
                href="/authentification#plans"
                className="px-8 py-4 text-base md:text-lg text-white/90 underline underline-offset-4"
              >
                Revenir aux plans
              </Link>
            </div>

            {/* Key features */}
            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/90">
              {['Double expertise', 'Microscopie & UV', 'Hologramme de sécurité', 'Rapport 10+ pages'].map((f) => (
                <li key={f} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-trueme-gold" />{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <RichFooter />
    </main>
  )
}
