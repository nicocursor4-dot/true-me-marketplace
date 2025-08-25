'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { Progress } from '@/components/ui/progress';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from '@/components/ui/animated-modal';
import { Shield, Calendar, Sparkles, Crown, Gift, Users, Star, TrendingUp, BarChart, ShoppingCart, ArrowRight } from 'lucide-react';

export default function TrueMeDashboard() {
  const userStats = {
    name: "John Doe",
    username: "@john_luxury",
    memberSince: "12 juillet 2025", 
    currentStatus: "Gold",
    progress: 64,
    nextStatus: "Platinum",
    totalPurchases: 17,
    totalSpent: "6 420€",
    points: 3840,
    totalItems: 12,
    totalValue: "8 750€",
    authenticityScore: "98.5%",
    collectionGrowth: "+15%"
  };

  const benefits = [
    {
      title: "Ventes privées exclusives",
      description: "Accès prioritaire aux collections limitées et événements VIP",
      icon: Shield
    },
    {
      title: "Événements partenaires",
      description: "Invitations à des soirées de luxe et défilés privés",
      icon: Calendar
    },
    {
      title: "Cadeaux personnalisés",
      description: "Coffrets sur-mesure et surprises selon vos goûts",
      icon: Gift
    },
    {
      title: "Communauté elite",
      description: "Accès au réseau privé des collectionneurs TRUE ME",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-trueme-cream text-trueme antialiased">
      {/* Sticky Top Bar */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-trueme-cream/80 border-b border-trueme/10">
        <div className="mx-auto w-full max-w-[1280px] 2xl:max-w-[1400px] px-6 py-5 flex items-center justify-between">
          <div className="flex items-baseline gap-4">
            <div className="select-none leading-none">
              <div className="text-3xl font-serif tracking-[0.25em] text-trueme">TM</div>
              <div className="-mt-2 text-[10px] tracking-[0.35em] uppercase text-trueme">True Me</div>
            </div>
            <span className="hidden sm:inline text-xs tracking-[0.35em] uppercase text-trueme-gold">Not a style. A signature.</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="hidden md:inline text-trueme-secondary">Dashboard membre</span>
            <div className="h-8 w-px bg-trueme/20" />
            <div className="rounded-full bg-white/80 ring-1 ring-trueme/20 px-3 py-1">FR</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto w-full max-w-[1280px] 2xl:max-w-[1400px] px-6 py-10">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Identity Card */}
            <motion.div 
              className="rounded-3xl bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] ring-1 ring-black/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-8 md:p-10">
                <div className="flex items-start gap-6">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full ring-1 ring-black/10">
                    <img
                      alt="Portrait"
                      className="h-full w-full object-cover"
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
                    />
                  </div>
                  <div className="min-w-0">
                    <h1 className="text-3xl md:text-4xl font-serif leading-tight text-trueme">{userStats.name}</h1>
                    <p className="mt-2 italic text-trueme-gold">I embody authenticity.</p>
                    <div className="mt-4 grid gap-1 text-[15px] text-trueme-secondary">
                      <div className="flex items-center gap-2">
                        <span>Membre TRUE ME depuis :</span>
                        <span className="font-medium text-trueme">{userStats.memberSince}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>Statut actuel TRUE ME :</span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-trueme-gold/40 bg-trueme-gold/10 px-3 py-0.5 text-trueme-gold">
                          <Crown className="w-3 h-3" />
                          {userStats.currentStatus}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress */}
                <div className="mt-8">
                  <div className="flex items-center justify-between text-sm text-trueme-secondary">
                    <span>Évolution du statut</span>
                    <span className="font-medium tracking-wide text-trueme">{userStats.nextStatus.toUpperCase()}</span>
                  </div>
                  <div className="mt-3">
                    <Progress value={userStats.progress} className="h-2.5" />
                  </div>
                  <div className="mt-2 text-xs text-trueme-secondary">
                    {userStats.progress}% complété — 3 achats restants pour passer {userStats.nextStatus}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] ring-1 ring-black/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-trueme-gold/10 p-2">
                    <ShoppingCart className="w-5 h-5 text-trueme-gold" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-trueme">{userStats.totalPurchases}</p>
                    <p className="text-sm text-trueme-secondary">Achats totaux</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] ring-1 ring-black/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-trueme-gold/10 p-2">
                    <Star className="w-5 h-5 text-trueme-gold" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-trueme">{userStats.authenticityScore}</p>
                    <p className="text-sm text-trueme-secondary">Score authenticité</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Benefits Section with Modal */}
            <motion.div 
              className="rounded-3xl bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] ring-1 ring-black/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-serif text-trueme">Vos avantages {userStats.currentStatus}</h2>
                  <Modal>
                    <ModalTrigger>
                      <HoverBorderGradient className="px-4 py-2 text-sm">
                        Voir tous les détails
                      </HoverBorderGradient>
                    </ModalTrigger>
                    <ModalBody>
                      <ModalContent>
                        <h3 className="text-2xl font-bold text-trueme mb-4">Avantages membres {userStats.currentStatus}</h3>
                        <div className="space-y-6">
                          {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-4">
                              <div className="rounded-full bg-trueme-gold/10 p-3">
                                <benefit.icon className="w-6 h-6 text-trueme-gold" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-trueme">{benefit.title}</h4>
                                <p className="text-trueme-secondary mt-1">{benefit.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </ModalContent>
                      <ModalFooter>
                        <HoverBorderGradient className="w-full">
                          Découvrir le statut Platinum
                        </HoverBorderGradient>
                      </ModalFooter>
                    </ModalBody>
                  </Modal>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-trueme-gold/5 border border-trueme-gold/20">
                      <benefit.icon className="w-5 h-5 text-trueme-gold" />
                      <span className="text-sm text-trueme">{benefit.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Actions */}
            <motion.div 
              className="rounded-3xl bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] ring-1 ring-black/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="p-8">
                <h3 className="text-xl font-serif text-trueme mb-6">Actions rapides</h3>
                <div className="space-y-3">
                  <Modal>
                    <ModalTrigger>
                      <HoverBorderGradient className="w-full justify-between">
                        <span>Explorer le marketplace</span>
                        <ArrowRight className="w-4 h-4" />
                      </HoverBorderGradient>
                    </ModalTrigger>
                    <ModalBody>
                      <ModalContent>
                        <h3 className="text-2xl font-bold text-trueme mb-4">Marketplace TRUE ME</h3>
                        <p className="text-trueme-secondary mb-6">
                          Découvrez notre sélection exclusive d'articles de luxe authentifiés. 
                          En tant que membre {userStats.currentStatus}, bénéficiez d'un accès prioritaire 
                          aux nouvelles arrivées et aux ventes privées.
                        </p>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <Shield className="w-5 h-5 text-trueme-gold" />
                            <span className="text-trueme">Authenticité garantie 100%</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Sparkles className="w-5 h-5 text-trueme-gold" />
                            <span className="text-trueme">Curation experte</span>
                          </div>
                        </div>
                      </ModalContent>
                      <ModalFooter>
                        <HoverBorderGradient className="w-full">
                          Accéder au marketplace
                        </HoverBorderGradient>
                      </ModalFooter>
                    </ModalBody>
                  </Modal>

                  <HoverBorderGradient className="w-full justify-between">
                    <span>Ma collection</span>
                    <ArrowRight className="w-4 h-4" />
                  </HoverBorderGradient>

                  <HoverBorderGradient className="w-full justify-between">
                    <span>Historique des achats</span>
                    <ArrowRight className="w-4 h-4" />
                  </HoverBorderGradient>
                </div>
              </div>
            </motion.div>

            {/* Collection Summary */}
            <motion.div 
              className="rounded-3xl bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] ring-1 ring-black/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="p-8">
                <h3 className="text-xl font-serif text-trueme mb-6">Ma collection</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-trueme-secondary">Articles possédés</span>
                    <span className="font-semibold text-trueme">{userStats.totalItems}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-trueme-secondary">Valeur estimée</span>
                    <span className="font-semibold text-trueme">{userStats.totalValue}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-trueme-secondary">Croissance</span>
                    <span className="font-semibold text-trueme-gold flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      {userStats.collectionGrowth}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Points & Rewards */}
            <motion.div 
              className="rounded-3xl bg-gradient-to-br from-trueme-gold/10 to-trueme-gold/5 ring-1 ring-trueme-gold/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="w-6 h-6 text-trueme-gold" />
                  <h3 className="text-xl font-serif text-trueme">Points TRUE ME</h3>
                </div>
                <p className="text-3xl font-bold text-trueme mb-2">{userStats.points.toLocaleString()}</p>
                <p className="text-sm text-trueme-secondary mb-6">points disponibles</p>
                <HoverBorderGradient className="w-full">
                  Échanger mes points
                </HoverBorderGradient>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
