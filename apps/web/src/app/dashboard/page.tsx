'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TrueMeNavbar from '@/components/TrueMeNavbar';
import { GlassCard } from '@/components/ui/GlassCard';
import { Crown, Sparkles, ShoppingCart, BarChart, TrendingUp, Shield, Star, ArrowRight } from 'lucide-react';

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

  const advantages = [
    {
      title: "Authentification Express",
      description: "Vos articles sont authentifiés en moins de 24h avec notre service premium Gold."
    },
    {
      title: "Garantie Étendue",
      description: "Protection complète sur tous vos achats pendant 2 ans avec assurance incluse."
    },
    {
      title: "Conseiller Dédié",
      description: "Un expert personnel vous accompagne dans vos investissements luxe."
    },
    {
      title: "Accès VIP",
      description: "Pré-commandes exclusives et événements privés réservés au statut Gold."
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

          {/* Advantages */}
          <motion.div className="mb-20" variants={itemVariants}>
            <motion.h2 
              className="mb-16 text-center text-trueme text-4xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Vos Avantages <span className="text-trueme-gold">{userStats.currentStatus}</span>
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
            >
              {advantages.map((advantage, index) => (
                <motion.div 
                  key={index} 
                  className="glass-morphism p-10 luxury-hover relative overflow-hidden group"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400, damping: 25 }
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-trueme-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <motion.div 
                    className="mb-6 relative z-10"
                    initial={{ rotate: -45, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  >
                    <Sparkles className="w-10 h-10 text-trueme-gold" />
                  </motion.div>
                  <h3 className="mb-6 text-trueme text-2xl font-bold relative z-10">{advantage.title}</h3>
                  <p className="text-trueme-light leading-relaxed text-lg relative z-10">{advantage.description}</p>
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
