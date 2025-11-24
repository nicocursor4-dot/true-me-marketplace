'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, Clock, Star, ArrowRight, CheckCircle, Search, FileCheck, Lock } from 'lucide-react'
import RichFooter from '@/components/layout/RichFooter'
import LegacyNavbar from '@/components/LegacyNavbar'

export default function AuthentificationPage() {
  const pricingPlans = [
    {
      name: 'Express',
      price: '199 AED',
      duration: '24h',
      features: ['Inspection clés', 'Certificat numérique', 'Réponse sous 24h'],
      cta: 'Choisir Express',
      href: '/auth/register?tier=express',
      popular: false
    },
    {
      name: 'Complète',
      price: '299 AED',
      duration: '2–3 j',
      features: ['Inspection physique', 'Matériaux & Codes', 'Certificat officiel', 'Photos HD'],
      cta: 'Choisir Complète',
      href: '/auth/register?tier=complete',
      popular: true
    },
    {
      name: 'Premium',
      price: '499 AED',
      duration: '3–5 j',
      features: ['Double expertise', 'Microscopie / UV', 'Hologramme scellé', 'Rapport détaillé 10p+'],
      cta: 'Choisir Premium',
      href: '/auth/register?tier=premium',
      popular: false
    }
  ];

  return (
    <main className="min-h-screen bg-trueme-cream selection:bg-trueme-gold/20">
      <LegacyNavbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-trueme-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-trueme-gold/20 text-trueme-gold text-sm font-medium mb-8 shadow-sm">
              <Shield className="w-4 h-4" />
              <span className="tracking-wide uppercase">Certification Officielle</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif text-trueme-black mb-8 tracking-tight">
              Authentification <br />
              <span className="text-trueme-gold italic">Premium</span>
            </h1>

            <p className="text-xl text-trueme-secondary max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              La garantie absolue pour vos pièces de luxe. Experts certifiés, technologie de pointe et certificats infalsifiables.
            </p>

            <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
              {[
                { icon: <Clock className="w-5 h-5" />, text: "Dès 24h" },
                { icon: <CheckCircle className="w-5 h-5" />, text: "99.8% Précision" },
                { icon: <Star className="w-5 h-5" />, text: "Experts Certifiés" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-trueme-black/80 font-medium">
                  <div className="text-trueme-gold">{item.icon}</div>
                  {item.text}
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="#plans"
                className="group inline-flex items-center gap-3 bg-trueme-black text-white px-8 py-4 rounded-full hover:bg-trueme-gold transition-all duration-300"
              >
                Voir les tarifs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-trueme-black border border-trueme-black/10 px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-300"
              >
                Parler à un expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-white rounded-[4rem] relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-trueme-black mb-6">Notre Processus</h2>
            <p className="text-trueme-secondary">Une rigueur scientifique à chaque étape.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Search className="w-8 h-8" />, title: "Analyse Visuelle", desc: "Inspection des matériaux et finitions" },
              { icon: <Lock className="w-8 h-8" />, title: "Vérification Codes", desc: "Contrôle des numéros de série" },
              { icon: <FileCheck className="w-8 h-8" />, title: "Double Expertise", desc: "Validation par deux experts indépendants" },
              { icon: <Shield className="w-8 h-8" />, title: "Certification", desc: "Délivrance du certificat scellé" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-[2rem] hover:bg-trueme-cream transition-colors duration-300"
              >
                <div className="w-16 h-16 mx-auto bg-trueme-black text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  {step.icon}
                </div>
                <h3 className="text-xl font-serif text-trueme-black mb-3">{step.title}</h3>
                <p className="text-trueme-secondary text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="plans" className="py-24 bg-trueme-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-trueme-black mb-6">Nos Offres</h2>
            <p className="text-trueme-secondary">Choisissez le niveau d'expertise adapté à vos besoins.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 rounded-[2.5rem] border transition-all duration-300 ${plan.popular
                    ? 'bg-trueme-black text-white shadow-2xl scale-105 z-10 border-trueme-black'
                    : 'bg-white text-trueme-black border-white/60 hover:shadow-xl'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-trueme-gold text-trueme-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Recommandé
                  </div>
                )}

                <h3 className={`text-2xl font-serif mb-2 ${plan.popular ? 'text-white' : 'text-trueme-black'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className={`text-4xl font-serif ${plan.popular ? 'text-trueme-gold' : 'text-trueme-black'}`}>
                    {plan.price}
                  </span>
                </div>

                <div className={`text-sm font-medium mb-8 px-3 py-1 rounded-lg inline-block ${plan.popular ? 'bg-white/10' : 'bg-trueme-cream'}`}>
                  Délai : {plan.duration}
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <CheckCircle className={`w-5 h-5 ${plan.popular ? 'text-trueme-gold' : 'text-trueme-black/40'}`} />
                      <span className={plan.popular ? 'text-white/90' : 'text-trueme-secondary'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`w-full block text-center py-4 rounded-xl font-medium transition-colors ${plan.popular
                      ? 'bg-trueme-gold text-trueme-black hover:bg-white'
                      : 'bg-trueme-black text-white hover:bg-trueme-gold'
                    }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RichFooter />
    </main>
  )
}
