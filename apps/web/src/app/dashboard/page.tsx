'use client';

import React, { useState, useEffect, useId, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import TrueMeNavbar from '@/components/TrueMeNavbar';
import { GlassCard } from '@/components/ui/GlassCard';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { Crown, Sparkles, ShoppingCart, BarChart, TrendingUp, Shield, Star, ArrowRight, Gift, Users, Calendar, Settings } from 'lucide-react';

export default function Dashboard() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const userStats = {
    name: "Sophie Dubois",
    username: "@sophie_luxury",
    memberSince: "Mars 2023",
    currentStatus: "Gold",
    progress: 72,
    nextStatus: "Platinum",
    totalItems: 47,
    totalValue: "AED 156,890",
    authenticityScore: "98.5%",
    collectionGrowth: "+15%"
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  } as const;

  const [active, setActive] = useState<(typeof advantageCards)[number] | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const advantageCards = [
    {
      title: "Accès aux ventes privées TRUE ME",
      description: "Membre privilégié",
      icon: Gift,
      content: () => (
        <div className="p-6">
          <p className="text-trueme-light text-lg leading-relaxed">
            En tant que membre Gold, vous bénéficiez d'un accès exclusif aux ventes privées TRUE ME. 
            Découvrez les dernières collections avant tout le monde et profitez de réductions privilégiées 
            sur une sélection de pièces d'exception.
          </p>
          <div className="mt-6 p-4 bg-trueme-gold/10 rounded-lg">
            <h4 className="font-bold text-trueme mb-2">Avantages inclus :</h4>
            <ul className="text-trueme-light space-y-1">
              <li>• Accès prioritaire 48h avant les ventes publiques</li>
              <li>• Réductions exclusives jusqu'à 30%</li>
              <li>• Invitations aux événements VIP</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Invitations à des événements partenariaux",
      description: "Réseau exclusif",
      icon: Users,
      content: () => (
        <div className="p-6">
          <p className="text-trueme-light text-lg leading-relaxed">
            Rejoignez un réseau exclusif de passionnés de luxe. Participez à des événements 
            organisés avec nos partenaires prestigieux : défilés privés, vernissages, 
            et soirées dans les plus beaux lieux de Dubaï.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="p-3 bg-trueme/5 rounded-lg text-center">
              <Calendar className="w-6 h-6 mx-auto text-trueme-gold mb-2" />
              <span className="text-sm text-trueme">12 événements/an</span>
            </div>
            <div className="p-3 bg-trueme/5 rounded-lg text-center">
              <Users className="w-6 h-6 mx-auto text-trueme-gold mb-2" />
              <span className="text-sm text-trueme">150+ membres</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Code de réduction chez The Luxury Cleaner",
      description: "Partenaire privilégié",
      icon: Sparkles,
      content: () => (
        <div className="p-6">
          <p className="text-trueme-light text-lg leading-relaxed">
            Bénéficiez d'un service de nettoyage professionnel pour vos pièces de luxe 
            avec notre partenaire The Luxury Cleaner. Un savoir-faire unique pour préserver 
            la beauté et la valeur de vos investissements.
          </p>
          <div className="mt-6 p-4 bg-gradient-to-r from-trueme-gold/20 to-trueme-gold/10 rounded-lg border border-trueme-gold/20">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-trueme mb-1">Code promo actif</h4>
                <p className="text-trueme-light text-sm">Réduction de 25% sur tous les services</p>
              </div>
              <div className="text-2xl font-bold text-trueme-gold">GOLD25</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Accès prioritaire au centre d'authentification",
      description: "Service premium",
      icon: Shield,
      content: () => (
        <div className="p-6">
          <p className="text-trueme-light text-lg leading-relaxed">
            Profitez d'un service d'authentification prioritaire pour tous vos articles. 
            Nos experts certifiés analysent vos pièces dans les plus brefs délais 
            avec la garantie TRUE ME.
          </p>
          <div className="mt-6 space-y-3">
            <div className="flex justify-between items-center p-3 bg-trueme/5 rounded-lg">
              <span className="text-trueme">Délai standard</span>
              <span className="text-trueme-light">5-7 jours</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-trueme-gold/10 rounded-lg border border-trueme-gold/20">
              <span className="text-trueme font-bold">Délai Gold</span>
              <span className="text-trueme-gold font-bold">24-48h</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-trueme-cream pt-24 overflow-hidden">
      <TrueMeNavbar />
      
      <motion.div 
        className="luxury-container section-spacing"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* User Profile */}
        <div className="max-w-6xl mx-auto">
          <motion.div className="mb-20" variants={itemVariants}>
            <div className="flex items-center justify-between mb-6">
              <motion.h1 
                className="text-trueme text-5xl"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Bonjour, {userStats.name.split(' ')[0]}
              </motion.h1>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                <div className="flex items-center gap-2 bg-trueme-gold/10 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-trueme-gold" />
                  <span className="text-trueme-gold font-medium">{userStats.currentStatus}</span>
                </div>
              </motion.div>
            </div>
            <motion.div 
              className="text-trueme-light text-2xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="mb-2 text-trueme-gold font-medium">{userStats.username}</p>
              <p>Membre TRUE ME depuis <span className="text-trueme font-semibold">{userStats.memberSince}</span></p>
            </motion.div>
          </motion.div>

          {/* Current Status */}
          <motion.div 
            className="glass-premium p-20 mb-20 text-center luxury-hover relative overflow-hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-trueme-gold/5 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ 
                repeat: Infinity, 
                duration: 3, 
                ease: "linear",
                repeatDelay: 2 
              }}
            />
            <motion.div 
              className="mb-8 relative z-10"
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
            >
              <Crown className="w-16 h-16 mx-auto text-trueme-gold drop-shadow-lg" />
            </motion.div>
            <motion.h2 
              className="mb-8 text-trueme text-4xl"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Statut <span className="text-trueme-gold">{userStats.currentStatus}</span>
            </motion.h2>
            <motion.div 
              className="text-trueme-light text-2xl mb-16"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Membre privilégié de l'écosystème TRUE ME
            </motion.div>
            
            {/* Progress */}
            <motion.div 
              className="max-w-lg mx-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-xl mb-6 text-trueme font-medium">
                {userStats.progress}% vers <span className="text-trueme-gold">{userStats.nextStatus}</span>
              </div>
              <div className="progress-bar h-4 bg-trueme/10 rounded-full overflow-hidden">
                <motion.div 
                  className="progress-fill h-4 bg-gradient-to-r from-trueme-gold to-trueme-gold/80 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${userStats.progress}%` }}
                  transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            variants={containerVariants}
          >
            {[
              { value: userStats.totalItems, label: "Articles certifiés", icon: Shield, color: "text-trueme" },
              { value: userStats.totalValue, label: "Valeur totale", icon: TrendingUp, color: "text-trueme-gold" },
              { value: userStats.authenticityScore, label: "Score d'authenticité", icon: Star, color: "text-trueme" },
              { value: userStats.collectionGrowth, label: "Croissance ce mois", icon: BarChart, color: "text-trueme-gold" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="glass-morphism p-10 text-center luxury-hover relative overflow-hidden group"
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-trueme-gold/5 to-trueme-gold/0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                >
                  <stat.icon className="w-8 h-8 mx-auto text-trueme-gold/60 mb-2" />
                </motion.div>
                <motion.div 
                  className={`text-5xl font-bold mb-4 ${stat.color}`}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <motion.div 
                  className="text-trueme-light text-lg"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Advantages as Expandable Cards */}
          <motion.div className="mb-20" variants={itemVariants}>
            <motion.h2 
              className="mb-16 text-center text-trueme text-4xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Avantages associés
            </motion.h2>
            
            <AnimatePresence>
              {active && typeof active === "object" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/20 h-full w-full z-50"
                />
              )}
            </AnimatePresence>
            
            <AnimatePresence>
              {active && typeof active === "object" ? (
                <div className="fixed inset-0 grid place-items-center z-[100]">
                  <motion.button
                    key={`button-${active.title}-${id}`}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.05 } }}
                    className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                    onClick={() => setActive(null)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-black">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M18 6l-12 12" />
                      <path d="M6 6l12 12" />
                    </svg>
                  </motion.button>
                  <motion.div
                    layoutId={`card-${active.title}-${id}`}
                    ref={ref}
                    className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-trueme-cream border border-trueme-gold/20 sm:rounded-3xl overflow-hidden shadow-2xl"
                  >
                    <div className="p-6 border-b border-trueme-gold/10">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div layoutId={`icon-${active.title}-${id}`}>
                          <active.icon className="w-8 h-8 text-trueme-gold" />
                        </motion.div>
                        <div>
                          <motion.h3
                            layoutId={`title-${active.title}-${id}`}
                            className="font-bold text-trueme text-xl"
                          >
                            {active.title}
                          </motion.h3>
                          <motion.p
                            layoutId={`description-${active.description}-${id}`}
                            className="text-trueme-gold text-sm"
                          >
                            {active.description}
                          </motion.p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="h-full overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-scrollbar:none]"
                      >
                        {typeof active.content === "function" ? active.content() : active.content}
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              ) : null}
            </AnimatePresence>
            
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
            >
              {advantageCards.map((card, index) => (
                <motion.div
                  layoutId={`card-${card.title}-${id}`}
                  key={`card-${card.title}-${id}`}
                  onClick={() => setActive(card)}
                  className="glass-morphism p-6 flex items-center justify-between hover:bg-trueme-gold/5 rounded-xl cursor-pointer luxury-hover group"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div layoutId={`icon-${card.title}-${id}`}>
                      <card.icon className="w-6 h-6 text-trueme-gold" />
                    </motion.div>
                    <div>
                      <motion.h3
                        layoutId={`title-${card.title}-${id}`}
                        className="font-medium text-trueme text-lg"
                      >
                        {card.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${card.description}-${id}`}
                        className="text-trueme-gold text-sm"
                      >
                        {card.description}
                      </motion.p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-trueme-gold/60 group-hover:text-trueme-gold group-hover:translate-x-1 transition-all duration-200" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {[
              { 
                href: "/brands", 
                icon: Crown, 
                title: "01 — Mes Marques", 
                description: "Voir mon statut par marque",
                gradient: "from-trueme-gold/20 to-trueme-gold/5"
              },
              { 
                href: "/marketplace", 
                icon: ShoppingCart, 
                title: "02 — Marketplace", 
                description: "Explorer les articles",
                gradient: "from-trueme/20 to-trueme/5"
              },
              { 
                href: "#", 
                icon: BarChart, 
                title: "03 — Progression", 
                description: "Historique détaillé",
                gradient: "from-trueme-gold/20 to-trueme-gold/5"
              }
            ].map((action, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
              >
                <Link href={action.href} className="block">
                  <div className="glass-premium p-12 luxury-hover relative overflow-hidden group">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                    />
                    <motion.div 
                      className="mb-6 relative z-10"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <action.icon className="w-12 h-12 text-trueme-gold" />
                    </motion.div>
                    <h3 className="mb-6 text-trueme text-2xl font-bold relative z-10">{action.title}</h3>
                    <div className="flex items-center gap-2 relative z-10">
                      <p className="text-trueme-light text-lg">{action.description}</p>
                      <ArrowRight className="w-5 h-5 text-trueme-gold transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
