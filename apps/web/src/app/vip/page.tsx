'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Camera, Shield, Star, Users, CheckCircle, Globe } from 'lucide-react'
import RichFooter from '@/components/layout/RichFooter'
import LegacyNavbar from '@/components/LegacyNavbar'

export default function VipPage() {
  return (
    <main className="min-h-screen bg-trueme-black text-white selection:bg-trueme-gold/30">
      <LegacyNavbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-trueme-black/40 via-trueme-black/60 to-trueme-black z-10" />
          <Image
            src="/images/hero/prompt1.png" // Using existing image as placeholder for premium bg
            alt="VIP Experience"
            fill
            className="object-cover opacity-50"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-trueme-gold/30 text-trueme-gold text-sm font-medium mb-8 tracking-[0.2em] uppercase backdrop-blur-sm">
              Service Exclusif
            </span>
            <h1 className="text-6xl md:text-9xl font-serif text-white mb-8 tracking-tight">
              True Me <span className="text-trueme-gold italic">VIP</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              L'excellence sans compromis. Une prise en charge intégrale pour vos pièces d'exception, de l'expertise à la vente.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link
                href="#services"
                className="group flex items-center gap-3 bg-trueme-gold text-trueme-black px-10 py-5 rounded-full font-medium text-lg hover:bg-white transition-all duration-500"
              >
                Découvrir les services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-32 bg-trueme-black relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-trueme-gold/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif text-white mb-12 leading-tight"
          >
            De l'authentification premium <br />
            au placement exclusif, nous offrons <br />
            <span className="text-trueme-gold italic">l'ultime expérience</span> du luxe.
          </motion.h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-trueme-gold to-transparent mx-auto" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-trueme-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* VIP Dubai Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-14 overflow-hidden hover:bg-white/10 transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Star className="w-32 h-32 text-trueme-gold" />
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-trueme-gold text-trueme-black text-xs font-bold mb-6">
                  RECOMMANDÉ
                </div>
                <h3 className="text-4xl font-serif text-white mb-2">VIP Dubai</h3>
                <p className="text-trueme-gold text-lg mb-8">Service Premium Local</p>

                <p className="text-white/70 text-lg mb-10 leading-relaxed min-h-[80px]">
                  Une expérience premium gérée depuis notre hub à Dubaï. Collecte locale, expertise rapide et mise en ligne optimisée pour une vente express.
                </p>

                <ul className="space-y-4 mb-12">
                  {[
                    "Collecte express (48h)",
                    "Shooting pro & expertise centralisée",
                    "Réseau vendeur/acheteur ultra‑qualifié"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-trueme-gold/20 flex items-center justify-center text-trueme-gold">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/auth/register"
                  className="w-full inline-flex justify-center items-center bg-white text-trueme-black py-4 rounded-2xl font-medium hover:bg-trueme-gold transition-colors duration-300"
                >
                  Activer VIP Dubai
                </Link>
              </div>
            </motion.div>

            {/* International Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative bg-transparent border border-white/10 rounded-[3rem] p-10 md:p-14 overflow-hidden hover:border-trueme-gold/50 transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <Globe className="w-32 h-32 text-white" />
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 text-white text-xs font-bold mb-6">
                  SUR MESURE
                </div>
                <h3 className="text-4xl font-serif text-white mb-2">International</h3>
                <p className="text-white/60 text-lg mb-8">Service Mondial</p>

                <p className="text-white/70 text-lg mb-10 leading-relaxed min-h-[80px]">
                  Le service TRUE ME sans frontières. Nous nous déplaçons partout dans le monde pour expertiser et collecter vos collections les plus précieuses.
                </p>

                <ul className="space-y-4 mb-12">
                  {[
                    "Collecte et prise en charge mondiale",
                    "Devis sur mesure avant prestation",
                    "Expertise & valorisation haute couture"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact?from=vip&service=premium-international"
                  className="w-full inline-flex justify-center items-center border border-white/20 text-white py-4 rounded-2xl font-medium hover:bg-white hover:text-trueme-black transition-colors duration-300"
                >
                  Demander un devis
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-trueme-black relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Le Processus VIP</h2>
            <p className="text-white/60">Une prise en charge en 4 étapes simples.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-trueme-gold/30 to-transparent" />

            {[
              {
                icon: <Users className="w-6 h-6" />,
                title: "Collecte",
                desc: "Prise en charge à domicile"
              },
              {
                icon: <Camera className="w-6 h-6" />,
                title: "Shooting",
                desc: "Photos professionnelles"
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Expertise",
                desc: "Authentification & Soin"
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "Vente",
                desc: "Mise en ligne premium"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-trueme-black border border-trueme-gold/30 flex items-center justify-center text-trueme-gold mb-6 relative z-10 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                  {step.icon}
                </div>
                <h3 className="text-xl font-serif text-white mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RichFooter />
    </main>
  )
}
