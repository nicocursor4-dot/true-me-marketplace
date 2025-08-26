'use client'

import React from 'react'
import Link from 'next/link'
import { Crown, Star, Sparkles, ArrowRight } from 'lucide-react'

interface VipBannerProps {
  className?: string
}

const VipBanner: React.FC<VipBannerProps> = ({ className = "" }) => {
  return (
    <section className={`py-16 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-gradient-to-r from-trueme-gold/10 via-trueme-gold/5 to-trueme-gold/10 rounded-3xl overflow-hidden border border-trueme-gold/20">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-4 left-4">
              <Crown className="w-8 h-8 text-trueme-gold" />
            </div>
            <div className="absolute top-8 right-12">
              <Sparkles className="w-6 h-6 text-trueme-gold" />
            </div>
            <div className="absolute bottom-6 left-16">
              <Star className="w-7 h-7 text-trueme-gold" />
            </div>
            <div className="absolute bottom-4 right-8">
              <Crown className="w-5 h-5 text-trueme-gold" />
            </div>
          </div>

          <div className="relative z-10 px-8 md:px-12 py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-trueme-gold/20 rounded-full px-4 py-2 mb-6">
                  <Crown className="w-5 h-5 text-trueme-gold" />
                  <span className="text-trueme-gold font-semibold text-sm tracking-wide uppercase">
                    Exclusivité VIP
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-trueme mb-4 tracking-tight">
                  L'Exclusivité a son
                  <span className="block text-trueme-gold font-normal">Club</span>
                </h2>

                <p className="text-lg md:text-xl text-trueme-light mb-8 max-w-md mx-auto md:mx-0 leading-relaxed">
                  Accédez à nos ventes privées, bénéficiez de la livraison offerte et bien plus encore.
                </p>

                <Link href="/vip">
                  <button className="bg-gradient-to-r from-trueme-gold to-trueme-gold/80 hover:from-trueme-gold/90 hover:to-trueme-gold text-black font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg text-lg flex items-center gap-3 mx-auto md:mx-0">
                    Devenir Membre VIP
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>

              {/* Right Benefits */}
              <div className="space-y-6">
                <div className="text-center md:text-left mb-8">
                  <h3 className="text-xl font-semibold text-trueme mb-6 flex items-center justify-center md:justify-start gap-2">
                    <Sparkles className="w-5 h-5 text-trueme-gold" />
                    Avantages Exclusifs
                  </h3>
                </div>

                <div className="grid gap-4">
                  {[
                    {
                      icon: <Crown className="w-5 h-5" />,
                      title: 'Accès prioritaire',
                      description: 'Nouveautés et pièces rares avant tout le monde'
                    },
                    {
                      icon: <Star className="w-5 h-5" />,
                      title: 'Ventes privées',
                      description: 'Remises exclusives jusqu\'à -40% sur une sélection'
                    },
                    {
                      icon: <Sparkles className="w-5 h-5" />,
                      title: 'Conciergerie dédiée',
                      description: 'Service client personnalisé 7j/7'
                    }
                  ].map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-white/30 backdrop-blur-sm rounded-2xl hover:bg-white/40 transition-all duration-300"
                    >
                      <div className="text-trueme-gold mt-1">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-trueme mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-trueme-light">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VipBanner
