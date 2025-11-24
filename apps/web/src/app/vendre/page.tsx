'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Camera, Shield, DollarSign, ArrowRight, Clock, CheckCircle, Star, TrendingUp, Users, Target, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import RichFooter from '@/components/layout/RichFooter'
import LegacyNavbar from '@/components/LegacyNavbar'

export default function VendrePage() {
  // Tracking helpers
  const heroRef = useRef<HTMLDivElement | null>(null)
  const firedDepths = useRef<Set<number>>(new Set())

  const trackEvent = (name: string, params: Record<string, unknown> = {}) => {
    if (typeof window !== 'undefined') {
      // GTM-compatible if available
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any
      if (w.dataLayer && Array.isArray(w.dataLayer)) {
        w.dataLayer.push({ event: name, ...params })
      } else {
        // Fallback console for debug
        // eslint-disable-next-line no-console
        console.log('[track]', name, params)
      }
    }
  }

  // vendre_scroll_depth for 25/50/75/100
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      )
      const winHeight = window.innerHeight
      const percent = Math.min(100, Math.round(((scrollTop + winHeight) / docHeight) * 100))
        ;[25, 50, 75, 100].forEach(p => {
          if (percent >= p && !firedDepths.current.has(p)) {
            firedDepths.current.add(p)
            trackEvent('vendre_scroll_depth', { percent: p })
          }
        })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleCTA = (type: string) => {
    trackEvent('vendre_hero_cta', { type })
  }

  return (
    <main className="min-h-screen bg-trueme-cream selection:bg-trueme-gold/20">
      <LegacyNavbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white via-white/50 to-transparent z-10"></div>
          <Image
            src="/images/hero/prompt2.png"
            alt="Luxury Selling Experience"
            fill
            className="object-cover object-right opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-trueme-cream/80 backdrop-blur-sm z-20"></div>
        </div>

        {/* Content */}
        <div className="relative z-30 max-w-[1600px] mx-auto px-4 md:px-8 w-full pt-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md text-trueme-black px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-8 border border-white shadow-sm"
              >
                <Camera className="w-4 h-4 text-trueme-gold" />
                Service de Vente Premium
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-trueme-black mb-8 leading-[1.1]">
                Vendez votre <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-trueme-gold via-yellow-500 to-trueme-gold italic pr-4">
                  luxe
                </span>
              </h1>

              <p className="text-xl md:text-2xl font-light text-trueme-secondary mb-12 leading-relaxed max-w-lg">
                Transformez vos pièces d'exception en capital. <br />
                <span className="text-trueme-black font-medium">Simple. Rapide. Sécurisé.</span>
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <Link
                  href="/auth/register?tier=express"
                  onClick={() => handleCTA('evaluer')}
                  className="group bg-trueme-black text-white px-10 py-5 rounded-full font-medium text-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-trueme-gold flex items-center justify-center gap-3"
                >
                  Estimer mon article
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  onClick={() => handleCTA('expert')}
                  className="px-10 py-5 text-lg border border-trueme-black text-trueme-black font-medium rounded-full hover:bg-trueme-black hover:text-white transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
                >
                  Parler à un expert
                </Link>
              </motion.div>

              {/* Quick stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center gap-12 mt-16 pt-12 border-t border-trueme-black/5"
              >
                <div>
                  <div className="text-4xl font-serif text-trueme-black mb-1">98%</div>
                  <div className="text-sm text-trueme-secondary uppercase tracking-wider">Ventes réussies</div>
                </div>
                <div>
                  <div className="text-4xl font-serif text-trueme-black mb-1">24h</div>
                  <div className="text-sm text-trueme-secondary uppercase tracking-wider">Évaluation</div>
                </div>
                <div>
                  <div className="text-4xl font-serif text-trueme-black mb-1">8%</div>
                  <div className="text-sm text-trueme-secondary uppercase tracking-wider">Commission min</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero/prompt3.png"
                  alt="Luxury Bag"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                {/* Floating Card */}
                <div className="absolute bottom-12 left-12 right-12 bg-white/90 backdrop-blur-xl p-8 rounded-[2rem] shadow-lg border border-white/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-trueme-gold/20 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-trueme-gold" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-trueme-black uppercase tracking-wider">Estimation validée</p>
                        <p className="text-xs text-trueme-secondary">Il y a 2 minutes</p>
                      </div>
                    </div>
                    <span className="text-xl font-serif text-trueme-black">4 250 €</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-trueme-gold h-full w-3/4 rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-white rounded-t-[4rem] relative z-20 -mt-20 shadow-[0_-20px_40px_rgba(0,0,0,0.05)]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-7xl font-serif text-trueme-black mb-8">
              L'Excellence <span className="text-trueme-gold italic">Simplifiée</span>
            </h2>
            <p className="text-xl text-trueme-secondary max-w-3xl mx-auto font-light">
              Un parcours de vente conçu pour votre confort et votre sécurité.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-24 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-trueme-gold/30 to-transparent z-0"></div>

            {[
              {
                step: "01",
                icon: <Camera className="w-8 h-8" />,
                title: "Estimation",
                description: "Envoyez vos photos. Recevez une offre précise sous 24h.",
                image: "/images/hero/prompt1.png"
              },
              {
                step: "02",
                icon: <Shield className="w-8 h-8" />,
                title: "Expertise",
                description: "Authentification rigoureuse par nos experts certifiés.",
                image: "/images/hero/prompt2.png"
              },
              {
                step: "03",
                icon: <DollarSign className="w-8 h-8" />,
                title: "Paiement",
                description: "Vente rapide et paiement sécurisé immédiat.",
                image: "/images/hero/prompt3.png"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative z-10"
              >
                <div className="bg-trueme-cream rounded-[2.5rem] p-8 hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gray-100 h-full">
                  {/* Step Number */}
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 mx-auto group-hover:bg-trueme-gold group-hover:text-white transition-colors duration-500 relative z-10">
                    <span className="text-xl font-serif font-bold">{item.step}</span>
                  </div>

                  {/* Image Preview */}
                  <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-8 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>

                  <h3 className="text-3xl font-serif text-trueme-black mb-4 text-center group-hover:text-trueme-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-trueme-secondary text-center font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-24"
          >
            <Link
              href="/auth/register?tier=complete"
              onClick={() => handleCTA('commencer')}
              className="inline-flex items-center gap-4 bg-trueme-black text-white px-12 py-6 rounded-full font-medium text-xl hover:bg-trueme-gold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Commencer maintenant
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-32 bg-trueme-black text-white rounded-t-[4rem] -mt-20 relative z-30">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-serif mb-12">
                Pourquoi <span className="text-trueme-gold italic">True Me</span> ?
              </h2>

              <div className="space-y-12">
                {[
                  {
                    title: "Expertise Reconnue",
                    desc: "Nos experts sont certifiés et reconnus mondialement pour leur précision.",
                    icon: <Star className="w-6 h-6" />
                  },
                  {
                    title: "Transparence Totale",
                    desc: "Des commissions claires, sans frais cachés. Vous savez exactement ce que vous gagnez.",
                    icon: <Target className="w-6 h-6" />
                  },
                  {
                    title: "Réseau Exclusif",
                    desc: "Accédez à une clientèle internationale de collectionneurs et passionnés.",
                    icon: <Users className="w-6 h-6" />
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 text-trueme-gold">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
                      <p className="text-white/60 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 relative">
                <Image
                  src="/images/hero/prompt2.png"
                  alt="Trust"
                  fill
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-trueme-black via-transparent to-transparent"></div>

                <div className="absolute bottom-12 left-12 right-12">
                  <div className="text-6xl font-serif text-trueme-gold mb-2">500+</div>
                  <p className="text-xl text-white font-light">Clients satisfaits ce mois-ci</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RichFooter />
    </main>
  )
}
