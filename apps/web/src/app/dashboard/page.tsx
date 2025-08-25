'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { Progress } from '@/components/ui/progress';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from '@/components/ui/animated-modal';
import { Shield, Calendar, Sparkles, Crown, Gift, Users, Star, TrendingUp, ShoppingCart, ArrowRight } from 'lucide-react';
import TrueMeNavbar from '@/components/TrueMeNavbar';

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
      <TrueMeNavbar />

      {/* Main Content */}
      <main className="pt-20 px-4 md:px-6 max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Identity Card */}
            <motion.div 
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-start gap-6">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-trueme-gold/20">
                  <img
                    alt="Portrait"
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl md:text-3xl font-serif leading-tight text-trueme">{userStats.name}</h1>
                  <p className="mt-1 italic text-trueme-gold">I embody authenticity.</p>
                  <div className="mt-3 space-y-2 text-sm text-trueme-secondary">
                    <div className="flex items-center gap-2">
                      <span>Membre depuis :</span>
                      <span className="font-medium text-trueme">{userStats.memberSince}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Statut :</span>
                      <span className="inline-flex items-center gap-1 rounded-full border border-trueme-gold/40 bg-trueme-gold/10 px-2 py-0.5 text-trueme-gold text-xs">
                        <Crown className="w-3 h-3" />
                        {userStats.currentStatus}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="flex items-center justify-between text-sm text-trueme-secondary mb-2">
                  <span>Évolution vers {userStats.nextStatus}</span>
                  <span className="font-medium text-trueme">{userStats.progress}%</span>
                </div>
                <Progress value={userStats.progress} className="h-2" />
                <p className="mt-1 text-xs text-trueme-secondary">
                  3 achats restants pour passer {userStats.nextStatus}
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div 
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-trueme-gold/10 p-3">
                    <ShoppingCart className="w-5 h-5 text-trueme-gold" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-trueme">{userStats.totalPurchases}</p>
                    <p className="text-sm text-trueme-secondary">Achats totaux</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-trueme-gold/10 p-3">
                    <Star className="w-5 h-5 text-trueme-gold" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-trueme">{userStats.authenticityScore}</p>
                    <p className="text-sm text-trueme-secondary">Score authenticité</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Benefits Section */}
            <motion.div 
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-serif text-trueme">Vos avantages {userStats.currentStatus}</h2>
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-trueme-gold/5 border border-trueme-gold/20">
                    <benefit.icon className="w-5 h-5 text-trueme-gold" />
                    <span className="text-sm text-trueme">{benefit.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Actions */}
            <motion.div 
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-serif text-trueme mb-4">Actions rapides</h3>
              <div className="space-y-3">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a href="/marketplace" className="block">
                    <HoverBorderGradient className="w-full flex items-center justify-between px-6 py-3">
                      <span className="font-medium">Explorer le marketplace</span>
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </HoverBorderGradient>
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a href="/brands" className="block">
                    <HoverBorderGradient className="w-full flex items-center justify-between px-6 py-3">
                      <span className="font-medium">Ma collection</span>
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </HoverBorderGradient>
                  </a>
                </motion.div>

                <Modal>
                  <ModalTrigger>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <HoverBorderGradient className="w-full flex items-center justify-between px-6 py-3">
                        <span className="font-medium">Historique des achats</span>
                        <motion.div
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </HoverBorderGradient>
                    </motion.div>
                  </ModalTrigger>
                  <ModalBody>
                    <ModalContent>
                      <h3 className="text-2xl font-bold text-trueme mb-4">Historique des achats</h3>
                      <div className="space-y-4">
                        <div className="border-b border-trueme/10 pb-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-semibold text-trueme">Sac Hermès Birkin 35</p>
                              <p className="text-sm text-trueme-secondary">15 janvier 2025</p>
                            </div>
                            <p className="font-bold text-trueme">2 850€</p>
                          </div>
                          <p className="text-xs text-trueme-gold mt-1">Authentifié ✓</p>
                        </div>
                        <div className="border-b border-trueme/10 pb-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-semibold text-trueme">Montre Rolex Submariner</p>
                              <p className="text-sm text-trueme-secondary">8 janvier 2025</p>
                            </div>
                            <p className="font-bold text-trueme">1 450€</p>
                          </div>
                          <p className="text-xs text-trueme-gold mt-1">Authentifié ✓</p>
                        </div>
                        <div className="border-b border-trueme/10 pb-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-semibold text-trueme">Chaussures Louboutin</p>
                              <p className="text-sm text-trueme-secondary">2 janvier 2025</p>
                            </div>
                            <p className="font-bold text-trueme">680€</p>
                          </div>
                          <p className="text-xs text-trueme-gold mt-1">Authentifié ✓</p>
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-trueme-gold/5 rounded-lg">
                        <p className="font-semibold text-trueme">Total dépensé : {userStats.totalSpent}</p>
                        <p className="text-sm text-trueme-secondary">Sur {userStats.totalPurchases} achats</p>
                      </div>
                    </ModalContent>
                  </ModalBody>
                </Modal>
              </div>
            </motion.div>

            {/* Collection Summary - Clickable with Modal */}
            <Modal>
              <ModalTrigger>
                <motion.div 
                  className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ y: -2 }}
                >
                  <h3 className="text-xl font-serif text-trueme mb-6">Ma collection</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="bg-trueme-gold/5 rounded-lg p-4 border border-trueme-gold/20">
                        <p className="text-2xl font-bold text-trueme">{userStats.totalItems}</p>
                        <p className="text-xs text-trueme-secondary">Articles</p>
                      </div>
                      <div className="bg-trueme-gold/5 rounded-lg p-4 border border-trueme-gold/20">
                        <p className="text-2xl font-bold text-trueme">{userStats.totalValue}</p>
                        <p className="text-xs text-trueme-secondary">Valeur</p>
                      </div>
                      <div className="bg-trueme-gold/5 rounded-lg p-4 border border-trueme-gold/20">
                        <p className="text-2xl font-bold text-trueme-gold flex items-center justify-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          {userStats.collectionGrowth}
                        </p>
                        <p className="text-xs text-trueme-secondary">Croissance</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 pt-2">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm text-trueme-secondary">Marques favorites</span>
                        <span className="text-sm font-medium text-trueme">Hermès, Chanel, Dior</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm text-trueme-secondary">Dernière acquisition</span>
                        <span className="text-sm font-medium text-trueme">Sac Birkin 35 - 15 jan</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm text-trueme-secondary">Score authenticité</span>
                        <span className="text-sm font-medium text-trueme-gold">100% ✓</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ModalTrigger>
              <ModalBody>
                <ModalContent>
                  <h3 className="text-2xl font-bold text-trueme mb-4">Ma Collection - Top 3</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 border border-trueme/10 rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=100&auto=format&fit=crop" 
                        alt="Sac Hermès Birkin" 
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-trueme">Sac Hermès Birkin 35</p>
                        <p className="text-sm text-trueme-secondary">Cuir Togo Orange</p>
                      </div>
                      <p className="font-bold text-trueme">3 200€</p>
                    </div>
                    <div className="flex items-center gap-4 p-4 border border-trueme/10 rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=100&auto=format&fit=crop" 
                        alt="Montre Rolex" 
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-trueme">Montre Rolex Submariner</p>
                        <p className="text-sm text-trueme-secondary">Acier inoxydable</p>
                      </div>
                      <p className="font-bold text-trueme">2 850€</p>
                    </div>
                    <div className="flex items-center gap-4 p-4 border border-trueme/10 rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=100&auto=format&fit=crop" 
                        alt="Chaussures Louboutin" 
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-trueme">Chaussures Louboutin</p>
                        <p className="text-sm text-trueme-secondary">So Kate 120mm</p>
                      </div>
                      <p className="font-bold text-trueme">1 250€</p>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="p-4 bg-trueme-gold/5 rounded-lg">
                      <p className="text-sm text-trueme-secondary">Valeur totale</p>
                      <p className="text-xl font-bold text-trueme">{userStats.totalValue}</p>
                    </div>
                    <div className="p-4 bg-trueme-gold/5 rounded-lg">
                      <p className="text-sm text-trueme-secondary">Croissance</p>
                      <p className="text-xl font-bold text-trueme-gold">{userStats.collectionGrowth}</p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-trueme/5 rounded-lg">
                    <p className="font-semibold text-trueme">{userStats.totalItems} articles au total</p>
                    <p className="text-sm text-trueme-secondary">Collection certifiée TRUE ME</p>
                  </div>
                </ModalContent>
                <ModalFooter>
                  <a href="/brands" className="w-full">
                    <HoverBorderGradient className="w-full">
                      Voir toute ma collection
                    </HoverBorderGradient>
                  </a>
                </ModalFooter>
              </ModalBody>
            </Modal>

            {/* Points & Rewards */}
            <motion.div 
              className="bg-gradient-to-br from-trueme-gold/10 to-trueme-gold/5 rounded-2xl border border-trueme-gold/20 p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Crown className="w-6 h-6 text-trueme-gold" />
                <h3 className="text-xl font-serif text-trueme">Points TRUE ME</h3>
              </div>
              <p className="text-3xl font-bold text-trueme mb-2">{userStats.points.toLocaleString()}</p>
              <p className="text-sm text-trueme-secondary mb-6">points disponibles</p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <HoverBorderGradient className="w-full">
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    Échanger mes points
                  </motion.span>
                </HoverBorderGradient>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
