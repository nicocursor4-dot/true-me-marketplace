'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Star, Shield, CheckCircle, Quote } from 'lucide-react'
import RichFooter from '@/components/layout/RichFooter'
import LegacyNavbar from '@/components/LegacyNavbar'

export default function ConceptPage() {
  // Parallax & Scroll Animations
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <main className="min-h-screen bg-trueme-cream selection:bg-trueme-gold/20">
      <LegacyNavbar />

      {/* Hero Spacer */}
      <div className="h-32" />

      {/* Header Section */}
      <section className="relative px-4 mb-24">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl font-serif text-trueme-black mb-6 tracking-tight"
          >
            Le Concept <br />
            <span className="text-trueme-gold italic">True Me</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-trueme-secondary max-w-2xl mx-auto font-light leading-relaxed"
          >
            Plus qu'une marketplace, un écosystème où chaque transaction élève votre statut et valorise votre passion pour le luxe.
          </motion.p>
        </div>
      </section>

      {/* Bloc 1 — Features: Statut Global */}
      <section className="py-12 md:py-24">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-white/60 overflow-hidden relative">
            <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/hero/prompt1.png"
                  alt="Progression statut TRUE ME"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-trueme-cream text-trueme-gold text-sm font-medium mb-6 tracking-wider uppercase">
                  Évolution
                </span>
                <h2 className="text-4xl md:text-6xl font-serif text-trueme-black mb-6 leading-tight">
                  Votre Statut <br />TRUE ME
                </h2>
                <h3 className="text-2xl font-serif text-trueme-secondary mb-8 italic">De Bronze à Diamant</h3>
                <p className="text-lg text-trueme-black/70 mb-10 leading-relaxed max-w-md">
                  Chaque article authentifié enrichit votre statut et votre Style Card, une signature personnelle du luxe qui vous ouvre les portes d'avantages exclusifs.
                </p>
                <Link
                  href="/dashboard"
                  className="group inline-flex items-center gap-3 bg-trueme-black text-white px-8 py-4 rounded-full hover:bg-trueme-gold transition-all duration-300"
                >
                  Découvrez votre statut
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloc 2 — Features: ADN de Marques */}
      <section className="py-12 md:py-24">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1 pl-8 md:pl-16"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-white text-trueme-gold text-sm font-medium mb-6 tracking-wider uppercase shadow-sm">
                Collection
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-trueme-black mb-6 leading-tight">
                Votre ADN <br />de Marques
              </h2>
              <h3 className="text-2xl font-serif text-trueme-secondary mb-8 italic">Progressez par Maison</h3>
              <p className="text-lg text-trueme-black/70 mb-10 leading-relaxed max-w-md">
                Chaque marque raconte votre histoire. Progressez par statut et composez votre Brand DNA unique, reflétant vos goûts et votre parcours.
              </p>
              <Link
                href="/brands"
                className="group inline-flex items-center gap-3 bg-white text-trueme-black border border-trueme-black/10 px-8 py-4 rounded-full hover:bg-trueme-black hover:text-white transition-all duration-300"
              >
                Explorez vos marques
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 md:order-2 relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/hero/prompt2.png"
                alt="ADN de Marques"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bloc 3 — Features: Marketplace Authentifiée */}
      <section className="py-12 md:py-24 bg-white rounded-t-[4rem]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/hero/prompt3.png"
                alt="Marketplace Authentifiée"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md text-trueme-black text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                100% Authentifié
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pr-8 md:pr-16"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-trueme-cream text-trueme-gold text-sm font-medium mb-6 tracking-wider uppercase">
                Confiance
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-trueme-black mb-6 leading-tight">
                La Marketplace <br />Certifiée
              </h2>
              <h3 className="text-2xl font-serif text-trueme-secondary mb-8 italic">Standard ou VIP</h3>
              <p className="text-lg text-trueme-black/70 mb-10 leading-relaxed max-w-md">
                Achetez ou vendez en toute confiance. Chaque pièce est vérifiée par un processus d'authentification intransigeant, garantissant l'excellence.
              </p>
              <Link
                href="/marketplace"
                className="group inline-flex items-center gap-3 bg-trueme-black text-white px-8 py-4 rounded-full hover:bg-trueme-gold transition-all duration-300"
              >
                Accéder à la marketplace
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-trueme-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Authentification garantie",
                description: "Double vérification par nos experts certifiés"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Qualité premium",
                description: "Sélection rigoureuse et conditionnement impeccable"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Transaction sécurisée",
                description: "Paiements protégés et livraisons assurées"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-trueme-cream flex items-center justify-center text-trueme-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-serif text-trueme-black mb-3">{benefit.title}</h4>
                <p className="text-trueme-secondary leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Logotypes Strip */}
      <section className="py-20 bg-white border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <span className="text-sm font-medium text-trueme-secondary uppercase tracking-[0.2em]">
            Les plus grandes maisons nous font confiance
          </span>
        </div>

        <div className="relative flex overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex items-center gap-24 whitespace-nowrap px-12"
          >
            {[...Array(4)].map((_, i) => (
              <React.Fragment key={i}>
                {[
                  'Hermès', 'Chanel', 'Christian Dior', 'Louis Vuitton',
                  'Balenciaga', 'Saint Laurent', 'Cartier', 'Van Cleef & Arpels'
                ].map((brand, index) => (
                  <span
                    key={index}
                    className="text-3xl font-serif text-trueme-black/30 hover:text-trueme-black transition-colors cursor-pointer"
                  >
                    {brand}
                  </span>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-trueme-cream">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-serif text-trueme-black mb-6">Témoignages</h2>
            <p className="text-trueme-secondary">Ce que nos membres disent de l'expérience True Me.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Une expérience d'achat exceptionnelle, chaque détail est soigné.",
                author: "Sophie M.",
                location: "Paris"
              },
              {
                text: "L'authentification TRUE ME m'a redonné confiance dans le luxe de seconde main.",
                author: "Marc L.",
                location: "Monaco"
              },
              {
                text: "Un service client irréprochable et une sélection remarquable.",
                author: "Amélie R.",
                location: "Genève"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm relative"
              >
                <Quote className="absolute top-8 right-8 w-8 h-8 text-trueme-gold/20" />
                <p className="text-lg text-trueme-black/80 mb-8 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-serif text-lg text-trueme-black">{testimonial.author}</div>
                  <div className="text-sm text-trueme-secondary uppercase tracking-wider">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RichFooter />
    </main>
  )
}
