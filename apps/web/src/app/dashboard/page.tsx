'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { Progress } from '@/components/ui/progress';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from '@/components/ui/animated-modal';
import { ActionButton } from '@/components/ui/action-button';
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
      <main className="pt-16 md:pt-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto py-4 md:py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-3 md:space-y-4 lg:space-y-6">
            {/* Identity Card - Redesigned */}
            <motion.div 
              className="bg-gradient-to-br from-white via-white to-trueme-gold/5 rounded-2xl md:rounded-3xl shadow-xl border border-trueme-gold/20 p-6 md:p-8 lg:p-10 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-trueme-gold/10 rounded-full blur-3xl -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-trueme-gold/5 rounded-full blur-2xl translate-y-12 -translate-x-12"></div>
              
              {/* Main content container - perfectly centered */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-6 md:space-y-8">
                {/* Profile image with enhanced styling */}
                <motion.div 
                  className="relative"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="relative h-24 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 overflow-hidden rounded-full ring-4 ring-trueme-gold/30 shadow-2xl">
                    <img
                      alt="Portrait"
                      className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
                    />
                  </div>
                  {/* Status indicator */}
                  <motion.div 
                    className="absolute -bottom-2 -right-2 bg-trueme-gold text-black rounded-full p-2 shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                  >
                    <Crown className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.div>
                </motion.div>

                {/* User info with enhanced typography */}
                <motion.div 
                  className="space-y-3 md:space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="space-y-2">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-trueme tracking-wide">
                      {userStats.name}
                    </h1>
                    <motion.p 
                      className="text-trueme-gold text-base md:text-lg italic font-medium"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      I embody authenticity.
                    </motion.p>
                  </div>

                  {/* User details in modern card format */}
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center">
                    <motion.div 
                      className="bg-white/70 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md border border-trueme-gold/10"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.9)" }}
                    >
                      <p className="text-xs md:text-sm text-trueme-secondary font-medium">Membre depuis</p>
                      <p className="text-sm md:text-base font-semibold text-trueme">{userStats.memberSince}</p>
                    </motion.div>

                    <motion.div 
                      className="bg-gradient-to-r from-trueme-gold/20 to-trueme-gold/10 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md border border-trueme-gold/20"
                      whileHover={{ scale: 1.05 }}
                    >
                      <p className="text-xs md:text-sm text-trueme-secondary font-medium">Statut actuel</p>
                      <div className="flex items-center gap-2 justify-center">
                        <Crown className="w-4 h-4 text-trueme-gold" />
                        <p className="text-sm md:text-base font-bold text-trueme-gold">{userStats.currentStatus}</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Progress section with enhanced design */}
                <motion.div 
                  className="w-full max-w-md space-y-3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <div className="flex items-center justify-between text-sm md:text-base text-trueme-secondary">
                    <span className="font-medium">Évolution vers {userStats.nextStatus}</span>
                    <motion.span 
                      className="font-bold text-trueme text-lg"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {userStats.progress}%
                    </motion.span>
                  </div>
                  <div className="relative">
                    <Progress value={userStats.progress} className="h-3 md:h-4" />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
                      animate={{ x: [-100, 300] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      style={{ width: "30%" }}
                    />
                  </div>
                  <motion.p 
                    className="text-xs md:text-sm text-trueme-secondary text-center font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    3 achats restants pour passer {userStats.nextStatus}
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
              <motion.div 
                className="bg-white rounded-lg md:rounded-xl shadow-sm border border-gray-200 p-3 md:p-4 lg:p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-trueme-gold/10 p-2 md:p-3">
                    <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 text-trueme-gold" />
                  </div>
                  <div>
                    <p className="text-lg md:text-2xl font-bold text-trueme">{userStats.totalPurchases}</p>
                    <p className="text-xs md:text-sm text-trueme-secondary">Achats totaux</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white rounded-lg md:rounded-xl shadow-sm border border-gray-200 p-3 md:p-4 lg:p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-trueme-gold/10 p-2 md:p-3">
                    <Star className="w-4 h-4 md:w-5 md:h-5 text-trueme-gold" />
                  </div>
                  <div>
                    <p className="text-lg md:text-2xl font-bold text-trueme">{userStats.totalPurchases}</p>
                    <p className="text-xs md:text-sm text-trueme-secondary">Achats effectués</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Benefits Section */}
            <motion.div 
              className="bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-200 p-4 md:p-6 lg:p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-4 md:mb-6">
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
              
              <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 md:gap-3 p-2 md:p-3 lg:p-4 rounded-lg md:rounded-xl bg-trueme-gold/5 border border-trueme-gold/20">
                    <benefit.icon className="w-4 h-4 md:w-5 md:h-5 text-trueme-gold" />
                    <span className="text-xs md:text-sm text-trueme leading-tight">{benefit.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 space-y-3 md:space-y-4 lg:space-y-6">
            {/* Quick Actions */}
            <motion.div 
              className="bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-200 p-4 md:p-6 lg:p-8 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <div className="w-2 h-2 bg-trueme-gold rounded-full"></div>
                <h3 className="text-xl font-serif text-trueme">Actions rapides</h3>
              </div>
              <div className="space-y-3 md:space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full"
                >
                  <a href="/" className="block w-full">
                    <div className="w-full bg-trueme-gold hover:bg-trueme-gold/90 text-white rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 flex items-center justify-between transition-colors duration-200">
                      <span className="font-medium text-sm md:text-base">Explorer le marketplace</span>
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                    </div>
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full"
                >
                  <a href="/brands" className="block w-full">
                    <div className="w-full bg-trueme-gold hover:bg-trueme-gold/90 text-white rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 flex items-center justify-between transition-colors duration-200">
                      <span className="font-medium text-sm md:text-base">Ma collection</span>
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                    </div>
                  </a>
                </motion.div>

                <Modal>
                  <ModalTrigger className="w-full bg-trueme-gold hover:bg-trueme-gold/90 text-white rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-3 flex items-center justify-between transition-colors duration-200 cursor-pointer">
                    <span className="font-medium text-sm md:text-base">Historique des achats</span>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
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
            <motion.div 
              className="bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-200 p-4 md:p-6 lg:p-8 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Modal>
                <ModalTrigger className="w-full block cursor-pointer hover:shadow-xl transition-all duration-300">
                  <motion.div 
                    className="w-full"
                    whileHover={{ y: -2 }}
                  >
                    <div className="space-y-4 md:space-y-6">
                      <div className="flex items-center gap-2 mb-4 md:mb-6">
                        <div className="w-2 h-2 bg-trueme-gold rounded-full"></div>
                        <h3 className="text-xl font-serif text-trueme">Ma Collection</h3>
                      </div>
                      
                      <div className="space-y-3 md:space-y-4">
                        <div className="flex justify-between items-center py-2 md:py-3 border-b border-gray-100">
                          <span className="text-xs md:text-sm text-gray-600">Articles</span>
                          <span className="font-semibold text-sm md:text-base text-trueme">{userStats.totalItems}</span>
                        </div>
                        
                        <div className="flex justify-between items-center py-2 md:py-3 border-b border-gray-100">
                          <span className="text-xs md:text-sm text-gray-600">Valeur estimée</span>
                          <span className="font-semibold text-sm md:text-base text-trueme">{userStats.totalValue}</span>
                        </div>
                        
                        <div className="flex justify-between items-center py-2 md:py-3">
                          <span className="text-xs md:text-sm text-gray-600">Évolution</span>
                          <span className="font-semibold text-sm md:text-base text-trueme-gold">{userStats.collectionGrowth}</span>
                        </div>
                      </div>
                      
                      <div className="text-center pt-3 md:pt-4">
                        <span className="text-xs text-gray-500 uppercase tracking-wide">Voir détails</span>
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
            </motion.div>

            {/* Points & Rewards */}
            <motion.div 
              className="bg-gradient-to-br from-trueme-gold/10 to-trueme-gold/5 rounded-xl md:rounded-2xl border border-trueme-gold/20 p-4 md:p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <Crown className="w-5 h-5 md:w-6 md:h-6 text-trueme-gold" />
                <h3 className="text-lg md:text-xl font-serif text-trueme">Points TRUE ME</h3>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-trueme mb-1 md:mb-2">{userStats.points.toLocaleString()}</p>
              <p className="text-xs md:text-sm text-trueme-secondary mb-4 md:mb-6">points disponibles</p>
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
