"use client";

import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import { motion, useSpring, useTransform, MotionValue, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  TrendingUp,
  Award,
  Gift,
  Package,
  History,
  Sparkles,
  Crown,
  Star,
  Zap,
  Shield,
  Heart,
  ArrowRight,
  Calendar,
  Euro
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LegacyNavbar from '@/components/LegacyNavbar';
import RichFooter from '@/components/layout/RichFooter'
import { Modal } from '@/components/ui/modal';
import Link from 'next/link';
import { CollectionChart } from '@/components/ui/collection-chart';
import {
  getTopItems,
  getTotalCollectionValue,
  getAverageEvolution,
  getCollectionChartData,
  getFilteredHistory,
  getTotalArticles,
  getTotalPurchases,
  userHistory,
  getCollectionByBrand,
  BrandCollection
} from '@/mocks/userCollection';

// Animated Counter Component
const fontSize = 32;
const padding = 8;
const height = fontSize + padding;

function Digit({ place, value }: { place: number; value: number }) {
  let valueRoundedToPlace = Math.floor(value / place);
  let animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div style={{ height }} className="relative w-[1ch] tabular-nums font-serif">
      {Array.from({ length: 10 }, (_, i) => i).map((i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
}

function Number({ mv, number }: { mv: MotionValue; number: number }) {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;
    let memo = offset * height;
    if (offset > 5) {
      memo -= 10 * height;
    }
    return memo;
  });

  return (
    <motion.span
      style={{ y }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {number}
    </motion.span>
  );
}

function AnimatedCounter({ value }: { value: number }) {
  return (
    <div
      style={{ fontSize }}
      className="flex space-x-1 overflow-hidden rounded-lg px-2 leading-none text-trueme-gold"
    >
      {value >= 1000 && <Digit place={1000} value={value} />}
      {value >= 100 && <Digit place={100} value={value} />}
      {value >= 10 && <Digit place={10} value={value} />}
      <Digit place={1} value={value} />
    </div>
  );
}

// Circular Progress Ring Component
function CircularProgress({
  percentage,
  size = 120,
  strokeWidth = 8,
  showLabel = true
}: {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  showLabel?: boolean;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-trueme-gold/10"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#goldGradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            strokeDasharray: circumference,
          }}
        />
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#FFD700" />
          </linearGradient>
        </defs>
      </svg>
      {showLabel && (
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-2xl font-serif font-bold text-trueme-black">{percentage}%</span>
        </div>
      )}
    </div>
  );
}

// Brand Distribution Component
const BrandDistribution = ({ data }: { data: BrandCollection[] }) => {
  return (
    <Card className="h-full border border-white/60 bg-white/50 backdrop-blur-md shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-serif text-trueme-black">Répartition par Marque</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {data.slice(0, 5).map((brand, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-trueme-black">{brand.brand}</span>
              <span className="text-trueme-secondary">{brand.totalItems} articles ({brand.progressPct}%)</span>
            </div>
            <div className="h-2 w-full bg-black/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${brand.progressPct}%` }}
                transition={{ duration: 1, delay: idx * 0.1 }}
                className="h-full bg-trueme-gold"
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

// Concierge Card Component
const ConciergeCard = () => {
  return (
    <Card className="h-full border border-trueme-gold/20 bg-gradient-to-br from-trueme-black to-gray-900 text-white shadow-lg relative overflow-hidden group flex flex-col justify-between p-6">
      <div className="absolute top-0 right-0 w-64 h-64 bg-trueme-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:scale-110 transition-transform duration-700" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <Crown className="w-5 h-5 text-trueme-gold" />
          <h3 className="text-lg font-serif text-trueme-gold">Conciergerie</h3>
        </div>
        <p className="text-white/70 font-light text-sm leading-snug line-clamp-2">
          Estimation de pièces rares ou service de Personal Shopper sur mesure.
        </p>
      </div>

      <div className="flex gap-3 relative z-10 mt-2">
        <Button size="sm" className="flex-1 bg-white text-trueme-black hover:bg-trueme-gold hover:text-white transition-all duration-300 rounded-full text-xs h-9">
          Estimation
        </Button>
        <Button size="sm" variant="outline" className="flex-1 border-trueme-black/20 text-trueme-black hover:bg-trueme-black hover:text-white rounded-full text-xs h-9 bg-white">
          Contact
        </Button>
      </div>
    </Card>
  );
};

// Main Dashboard Component
export default function TrueMeDashboard() {
  const [currentView, setCurrentView] = useState<'overview' | 'collection' | 'history' | 'benefits'>('overview');
  const [points, setPoints] = useState(0);
  const [selectedBenefit, setSelectedBenefit] = useState<number | null>(null);
  const [isHistoriqueOpen, setIsHistoriqueOpen] = useState(false);
  const [selectedMonthDetails, setSelectedMonthDetails] = useState<{ label: string, transactions: typeof userHistory } | null>(null);
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const [historyMonths, setHistoryMonths] = useState<number>(6);
  const firstName = "Ahmed";
  const lastName = "Al Maktoum";

  // Données synchronisées depuis userCollection
  const totalArticles = getTotalArticles();
  const totalPurchases = getTotalPurchases();
  const totalValue = getTotalCollectionValue();
  const avgEvolution = getAverageEvolution();
  const topItems = useMemo(() => getTopItems(3), []);
  const chartData = useMemo(() => {
    const data = getCollectionChartData();
    return data;
  }, []);
  const filteredHistory = useMemo(() => getFilteredHistory(historyMonths), [historyMonths]);
  const brandStats = useMemo(() => getCollectionByBrand(), []);

  const monthKeys = useMemo(() => {
    const now = new Date('2024-11-24T12:00:00Z'); // Fixed date to match mocks
    return Array.from({ length: 12 }, (_, idx) => {
      const i = 11 - idx;
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      return `${d.getFullYear()}-${d.getMonth()}`;
    });
  }, []);

  const purchasesByMonth = useMemo(() => {
    const monthMap: { [key: string]: number } = {
      'Janv': 0, 'Fév': 1, 'Mars': 2, 'Avr': 3, 'Mai': 4, 'Juin': 5,
      'Juil': 6, 'Août': 7, 'Sept': 8, 'Oct': 9, 'Nov': 10, 'Déc': 11
    };
    const counts: number[] = new Array(12).fill(0);
    userHistory.forEach((t) => {
      if (t.type !== 'Achat') return;
      try {
        const [day, month, year] = t.date.split(' ');
        const m = monthMap[month];
        const y = parseInt(year);
        if (m === undefined || isNaN(y)) return;
        const key = `${y}-${m}`;
        const idx = monthKeys.indexOf(key);
        if (idx !== -1) counts[idx] += 1;
      } catch {
        // ignore parsing errors
      }
    });
    return counts;
  }, [monthKeys]);

  const handleChartClick = (index: number) => {
    const monthKey = monthKeys[index];
    const monthLabel = chartData.labels[index];

    // Filter history for this specific month
    const transactions = userHistory.filter(t => {
      if (t.type !== 'Achat') return false;
      const [day, month, year] = t.date.split(' ');
      const monthMap: { [key: string]: number } = {
        'Janv': 0, 'Fév': 1, 'Mars': 2, 'Avr': 3, 'Mai': 4, 'Juin': 5,
        'Juil': 6, 'Août': 7, 'Sept': 8, 'Oct': 9, 'Nov': 10, 'Déc': 11
      };
      const m = monthMap[month];
      const y = parseInt(year);
      return `${y}-${m}` === monthKey;
    });

    setSelectedMonthDetails({
      label: monthLabel,
      transactions
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setPoints(3840);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const benefits = [
    {
      icon: Gift,
      title: "Cadeaux exclusifs",
      description: "Accès prioritaire aux nouveautés",
      details: "Bénéficiez d'un accès en avant-première aux nouvelles collections de luxe. Recevez des invitations exclusives aux événements privés de nos marques partenaires. Profitez d'offres spéciales sur les articles en édition limitée."
    },
    {
      icon: Zap,
      title: "Livraison express",
      description: "Gratuite sur toutes vos commandes",
      details: "Livraison express gratuite en 24-48h pour tous vos achats. Service de livraison premium avec suivi en temps réel. Emballage luxe et discret pour chaque commande. Options de livraison à domicile ou en point relais sécurisé."
    },
    {
      icon: Shield,
      title: "Garantie étendue",
      description: "Protection premium 24 mois",
      details: "Garantie authenticity à 100% sur tous les articles. Protection étendue de 24 mois couvrant les défauts de fabrication. Service après-vente dédié avec remplacement ou remboursement rapide. Certificat d'authenticité fourni avec chaque achat."
    },
    {
      icon: Heart,
      title: "Service VIP",
      description: "Support client dédié 24/7",
      details: "Conseiller personnel dédié disponible 24/7. Assistance prioritaire par téléphone, email ou chat. Service de conciergerie pour vos demandes spéciales. Accompagnement personnalisé dans vos choix d'articles de luxe."
    },
  ];

  const quickActions = [
    { icon: ShoppingBag, label: "Explorer", action: () => window.location.href = "/marketplace" },
    { icon: Package, label: "Ma Collection", action: () => setIsCollectionOpen(true) },
    { icon: History, label: "Historique", action: () => setIsHistoriqueOpen(true) },
  ];

  return (
    <div className="min-h-screen bg-trueme-cream text-trueme-black antialiased font-sans selection:bg-trueme-gold/20">
      <LegacyNavbar />

      {/* Spacer pour éviter le chevauchement de la navbar */}
      <div className="h-24" />

      <div className="min-h-screen p-4 md:p-6 lg:p-8 pb-20 max-w-[1600px] mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif text-trueme-black tracking-tight">
              Bienvenue, {firstName}
            </h1>
            <p className="text-trueme-secondary mt-2 font-light text-lg">
              Votre espace personnel de luxe
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white/50 backdrop-blur-md p-2 rounded-full border border-white/60 shadow-sm">
            <div
              onClick={() => setCurrentView('overview')}
              className={`px-6 py-2 rounded-full text-sm font-medium tracking-wide shadow-lg cursor-pointer transition-all duration-300 ${currentView === 'overview' ? 'bg-trueme-black text-white' : 'bg-white/50 text-trueme-secondary hover:text-trueme-black'}`}
            >
              Dashboard
            </div>
            {/* Menu Actions */}
            <button
              onClick={() => setCurrentView('collection')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${currentView === 'collection' ? 'bg-trueme-black text-white shadow-lg' : 'text-trueme-secondary hover:text-trueme-black hover:bg-white/50'}`}
            >
              Ma Collection
            </button>
            <button
              onClick={() => setCurrentView('history')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${currentView === 'history' ? 'bg-trueme-black text-white shadow-lg' : 'text-trueme-secondary hover:text-trueme-black hover:bg-white/50'}`}
            >
              Historique
            </button>
            <button
              onClick={() => setCurrentView('benefits')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${currentView === 'benefits' ? 'bg-trueme-black text-white shadow-lg' : 'text-trueme-secondary hover:text-trueme-black hover:bg-white/50'}`}
            >
              Avantages
            </button>
          </div>
        </div>

        {/* Dynamic Content based on View */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)] md:auto-rows-[220px]">

          {/* OVERVIEW VIEW */}
          {currentView === 'overview' && (
            <>
              {/* Profile - Top Left */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="md:col-span-4 md:row-span-2 relative group"
              >
                <div className="absolute inset-0 bg-white rounded-[2.5rem] shadow-sm border border-white/60" />
                <div className="relative h-full p-8 flex flex-col justify-between z-10">
                  <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden mb-6 shadow-inner">
                    <Image
                      src="/images/hero/ahmed-al-maktoum.png"
                      alt="Profile"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div className="bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-full text-white text-sm font-medium">
                        Membre Gold
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-serif text-trueme-black mb-1">{firstName} {lastName}</h2>
                    <p className="text-trueme-secondary font-light">Collectionneur Passionné</p>
                  </div>

                  <div className="mt-6 flex items-center justify-between bg-trueme-cream/50 p-4 rounded-2xl border border-trueme-gold/10">
                    <span className="text-sm font-medium text-trueme-secondary">Valeur estimée</span>
                    <span className="text-xl font-serif font-bold text-trueme-black">{totalValue.toLocaleString()} €</span>
                  </div>
                </div>
              </motion.div>

              {/* Stats - Top Right (Row 1) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="md:col-span-8 md:row-span-1 grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <div className="bg-white rounded-[2.5rem] p-6 flex flex-col justify-center items-center shadow-sm border border-white/60 hover:shadow-md transition-shadow duration-300 relative overflow-hidden group h-full">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Package className="w-12 h-12 text-trueme-gold" />
                  </div>
                  <span className="text-5xl font-serif text-trueme-black mb-1">{totalArticles}</span>
                  <span className="text-trueme-secondary text-xs uppercase tracking-widest font-medium">Articles</span>
                </div>

                <div className="bg-white rounded-[2.5rem] p-6 flex flex-col justify-center items-center shadow-sm border border-white/60 hover:shadow-md transition-shadow duration-300 relative overflow-hidden group h-full">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <ShoppingBag className="w-12 h-12 text-trueme-gold" />
                  </div>
                  <span className="text-5xl font-serif text-trueme-black mb-1">{totalPurchases}</span>
                  <span className="text-trueme-secondary text-xs uppercase tracking-widest font-medium">Commandes</span>
                </div>

                <div className="bg-trueme-gold/10 rounded-[2.5rem] p-6 flex flex-col justify-center items-center shadow-sm border border-trueme-gold/20 hover:shadow-md transition-shadow duration-300 relative overflow-hidden group h-full">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Sparkles className="w-12 h-12 text-trueme-gold" />
                  </div>
                  <span className="text-5xl font-serif text-trueme-black mb-1">{points}</span>
                  <span className="text-trueme-black/60 text-xs uppercase tracking-widest font-medium">Points</span>
                </div>
              </motion.div>

              {/* Middle Row: Concierge (5 cols) & Progress (3 cols) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="md:col-span-5 md:row-span-1"
              >
                <ConciergeCard />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="md:col-span-3 md:row-span-1 bg-white rounded-[2.5rem] p-6 shadow-sm border border-white/60 flex flex-col items-center justify-center relative"
              >
                <h3 className="text-sm font-serif text-trueme-black mb-2 absolute top-6 left-8">Statut Platinum</h3>
                <div className="relative scale-90 mt-4">
                  <CircularProgress percentage={64} size={120} strokeWidth={8} showLabel={false} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-2xl font-serif font-bold text-trueme-black leading-none">64%</span>
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <p className="text-xs text-trueme-secondary uppercase tracking-wide">3 achats restants</p>
                </div>
              </motion.div>

              {/* Bottom Row: Recent Activity (Full Width) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="md:col-span-12 md:row-span-2 bg-trueme-black rounded-[2.5rem] p-8 shadow-lg text-white relative overflow-hidden"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-serif text-white">Activité Récente</h3>
                  <span className="text-white/40 text-sm">Aperçu</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredHistory.slice(0, 5).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 group cursor-pointer hover:bg-white/5 p-3 rounded-2xl transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/5">
                        {item.type === 'Achat' ? <ShoppingBag className="w-5 h-5 text-trueme-gold" /> : <Euro className="w-5 h-5 text-white" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-white truncate">{item.article}</h4>
                        <p className="text-white/40 text-xs mt-0.5">{item.date}</p>
                      </div>
                      <div className="text-right">
                        <span className="block font-medium text-trueme-gold">{item.prix.toLocaleString()} €</span>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-3 mt-4">
                    <Button
                      onClick={() => setCurrentView('history')}
                      variant="outline"
                      className="border-white/20 text-trueme-black hover:bg-white hover:text-trueme-black rounded-full px-8 py-2 h-auto bg-white"
                    >
                      Voir tout l'historique
                    </Button>
                  </div>
                </div>
              </motion.div>
            </>
          )}

          {/* COLLECTION VIEW */}
          {currentView === 'collection' && (
            <>
              {/* Chart - Wide Top (Row 1) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="md:col-span-12 md:row-span-2 bg-white rounded-[2.5rem] p-8 shadow-sm border border-white/60 relative overflow-hidden"
              >
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-2xl font-serif text-trueme-black">Évolution de la Collection</h3>
                    <p className="text-trueme-secondary text-sm">Cliquez sur un mois pour voir les détails</p>
                  </div>
                  <div className="bg-trueme-cream px-4 py-2 rounded-full text-trueme-black font-medium text-sm flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    +{avgEvolution}%
                  </div>
                </div>

                <div className="h-[300px] w-full">
                  <CollectionChart
                    values={chartData.values}
                    labels={chartData.labels}
                    purchasesByMonth={purchasesByMonth}
                    height={300}
                    onBarClick={handleChartClick}
                  />
                </div>
              </motion.div>

              {/* Brand Distribution (Row 2 - Left) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="md:col-span-4 md:row-span-2"
              >
                <BrandDistribution data={brandStats} />
              </motion.div>

              {/* Top Items Grid (Row 2 - Right) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="md:col-span-8 md:row-span-2 bg-white rounded-[2.5rem] p-8 shadow-sm border border-white/60"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-serif text-trueme-black">Pièces Phares</h3>
                  <Button variant="ghost" onClick={() => setIsCollectionOpen(true)}>Voir tout</Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {topItems.slice(0, 4).map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-3 rounded-xl border border-black/5 hover:border-trueme-gold/30 transition-all">
                      <div className="w-16 h-16 rounded-lg bg-trueme-cream relative overflow-hidden">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-medium text-trueme-black">{item.name}</h4>
                        <p className="text-xs text-trueme-secondary">{item.brand}</p>
                        <p className="text-sm font-bold text-trueme-gold mt-1">{item.currentValue.toLocaleString()} €</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </>
          )}

          {/* HISTORY VIEW */}
          {currentView === 'history' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:col-span-12 bg-white rounded-[2.5rem] p-8 shadow-sm border border-white/60"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-serif text-trueme-black">Historique Complet</h3>
                <div className="flex gap-2">
                  {[3, 6, 12].map((months) => (
                    <Button
                      key={months}
                      onClick={() => setHistoryMonths(months)}
                      size="sm"
                      variant={historyMonths === months ? "default" : "outline"}
                      className={`rounded-full px-4 ${historyMonths === months ? "bg-trueme-black text-white" : ""}`}
                    >
                      {months} mois
                    </Button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredHistory.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-xl border border-black/5 hover:shadow-md transition-all bg-white">
                    <div className="w-14 h-14 rounded-lg bg-trueme-cream relative overflow-hidden flex-shrink-0">
                      <Image src={item.image} alt={item.article} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-trueme-black truncate">{item.article}</h4>
                      <p className="text-xs text-trueme-secondary">{item.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-trueme-black">{item.prix.toLocaleString()} €</p>
                      <span className="text-[10px] text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{item.evolution}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* BENEFITS VIEW */}
          {currentView === 'benefits' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:col-span-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedBenefit(index)}
                    className="bg-white rounded-[2rem] p-8 shadow-sm border border-white/60 hover:shadow-glass-medium transition-all cursor-pointer group h-full"
                  >
                    <div className="w-16 h-16 rounded-full bg-trueme-cream flex items-center justify-center mb-6 group-hover:bg-trueme-gold/10 transition-colors">
                      <benefit.icon className="w-8 h-8 text-trueme-black group-hover:text-trueme-gold transition-colors" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-trueme-black mb-3">{benefit.title}</h3>
                    <p className="text-trueme-secondary leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </div>
      </div>

      {/* Modal for Benefits */}
      {selectedBenefit !== null && (
        <Modal.Modal
          active={selectedBenefit !== null}
          onClickOutside={() => setSelectedBenefit(null)}
        >
          <Modal.Body>
            <Modal.Header>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-trueme-cream flex items-center justify-center">
                  {(() => {
                    const Icon = benefits[selectedBenefit]?.icon;
                    return Icon ? <Icon className="w-6 h-6 text-trueme-gold" /> : null;
                  })()}
                </div>
                <div>
                  <Modal.Title className="font-serif text-2xl">{benefits[selectedBenefit]?.title}</Modal.Title>
                  <Modal.Subtitle>Avantage Platinum</Modal.Subtitle>
                </div>
              </div>
            </Modal.Header>
            <div className="space-y-6">
              <p className="text-trueme-secondary leading-relaxed">
                {benefits[selectedBenefit]?.description}
              </p>
              <div className="bg-trueme-cream/30 p-6 rounded-2xl border border-trueme-gold/10">
                <h4 className="font-medium text-trueme-black mb-2">Comment en profiter ?</h4>
                <p className="text-sm text-trueme-secondary">
                  Contactez votre concierge dédié ou présentez votre carte de membre lors de vos visites en boutique partenaire.
                </p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Actions>
            <Modal.Action onClick={() => setSelectedBenefit(null)} type="secondary">Fermer</Modal.Action>
            <Modal.Action onClick={() => setSelectedBenefit(null)}>Utiliser</Modal.Action>
          </Modal.Actions>
        </Modal.Modal>
      )}

      {/* Modal for Historique */}
      <Modal.Modal
        active={isHistoriqueOpen}
        onClickOutside={() => setIsHistoriqueOpen(false)}
      >
        <Modal.Body>
          <Modal.Header>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-trueme-cream flex items-center justify-center">
                <History className="w-6 h-6 text-trueme-gold" />
              </div>
              <div>
                <Modal.Title className="font-serif text-2xl">Historique</Modal.Title>
              </div>
            </div>

            {/* Filtre de durée */}
            <div className="mb-6">
              <label className="text-sm text-trueme-secondary mb-3 block uppercase tracking-wider font-medium">
                Vos achats sur les <span className="font-bold text-trueme-black">{historyMonths}</span> derniers mois
              </label>
              <div className="flex gap-3">
                {[3, 6, 12].map((months) => (
                  <Button
                    key={months}
                    onClick={() => setHistoryMonths(months)}
                    size="sm"
                    variant={historyMonths === months ? "default" : "outline"}
                    className={`rounded-full px-6 transition-all duration-300 ${historyMonths === months ? "bg-trueme-black text-white shadow-md" : "border-black/10 hover:border-trueme-gold/50"}`}
                  >
                    {months} mois
                  </Button>
                ))}
              </div>
            </div>
          </Modal.Header>

          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
            {filteredHistory.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-4 p-4 rounded-xl border border-black/5 bg-white hover:border-trueme-gold/30 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-trueme-cream flex-shrink-0 relative border border-black/5">
                  <Image
                    src={item.image}
                    alt={item.article}
                    fill
                    sizes="64px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(/* _e */) => { /* ignore */ }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif font-medium text-trueme-black truncate text-lg group-hover:text-trueme-gold transition-colors">{item.article}</h4>
                  <div className="flex items-center gap-3 mt-1">
                    <Badge variant="outline" className="text-[10px] uppercase tracking-wider border-black/10 bg-black/5">
                      {item.type}
                    </Badge>
                    <span className="text-xs text-trueme-secondary flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-bold text-trueme-black flex items-center gap-1 justify-end text-lg">
                    <Euro className="w-4 h-4" />
                    {item.prix.toLocaleString()}
                  </div>
                  <div className="text-xs text-green-600 font-bold mt-1 bg-green-50 px-2 py-0.5 rounded-full inline-block">
                    {item.evolution}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Modal.Body>

        <Modal.Actions>
          <Modal.Action onClick={() => setIsHistoriqueOpen(false)} type="secondary">
            Fermer
          </Modal.Action>
        </Modal.Actions>
      </Modal.Modal>

      {/* Modal for Ma Collection */}
      <Modal.Modal
        active={isCollectionOpen}
        onClickOutside={() => setIsCollectionOpen(false)}
      >
        <Modal.Body>
          <Modal.Header>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-trueme-cream flex items-center justify-center">
                <Package className="w-6 h-6 text-trueme-gold" />
              </div>
              <div>
                <Modal.Title className="font-serif text-2xl">Ma Collection</Modal.Title>
              </div>
            </div>
            <Modal.Subtitle className="text-trueme-secondary">Vos articles phares</Modal.Subtitle>
          </Modal.Header>

          <div className="space-y-4">
            {topItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl border border-black/5 bg-white hover:border-trueme-gold/30 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-trueme-cream flex-shrink-0 relative border border-black/5">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="80px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(/* _e */) => { /* ignore */ }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif font-medium text-trueme-black truncate text-lg group-hover:text-trueme-gold transition-colors">{item.name}</h4>
                  <p className="text-sm text-trueme-secondary uppercase tracking-wider font-medium">{item.brand}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="font-bold text-trueme-black flex items-center gap-1">
                      <Euro className="w-4 h-4" />
                      {item.currentValue.toLocaleString()}
                    </div>
                    <div className="text-xs text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-full">
                      {item.evolution}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-trueme-gold opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
              </motion.div>
            ))}
          </div>
        </Modal.Body>

        <Modal.Actions>
          <Modal.Action onClick={() => setIsCollectionOpen(false)} type="secondary">
            Fermer
          </Modal.Action>
          <Link href="/brands">
            <Modal.Action onClick={() => setIsCollectionOpen(false)}>
              Voir toute ma collection
            </Modal.Action>
          </Link>
        </Modal.Actions>
      </Modal.Modal>

      {/* Modal for Benefits */}
      {selectedBenefit !== null && (
        <Modal.Modal
          active={selectedBenefit !== null}
          onClickOutside={() => setSelectedBenefit(null)}
        >
          <Modal.Body>
            <Modal.Header>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-trueme-cream flex items-center justify-center">
                  {(() => {
                    const Icon = benefits[selectedBenefit]?.icon;
                    return Icon ? <Icon className="w-6 h-6 text-trueme-gold" /> : null;
                  })()}
                </div>
                <div>
                  <Modal.Title className="font-serif text-2xl">{benefits[selectedBenefit]?.title}</Modal.Title>
                  <Modal.Subtitle>Avantage Platinum</Modal.Subtitle>
                </div>
              </div>
            </Modal.Header>
            <div className="space-y-6">
              <p className="text-trueme-secondary leading-relaxed">
                {benefits[selectedBenefit]?.description}
              </p>
              <div className="bg-trueme-cream/30 p-6 rounded-2xl border border-trueme-gold/10">
                <h4 className="font-medium text-trueme-black mb-2">Comment en profiter ?</h4>
                <p className="text-sm text-trueme-secondary">
                  Contactez votre concierge dédié ou présentez votre carte de membre lors de vos visites en boutique partenaire.
                </p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Actions>
            <Modal.Action onClick={() => setSelectedBenefit(null)} type="secondary">Fermer</Modal.Action>
            <Modal.Action onClick={() => setSelectedBenefit(null)}>Utiliser</Modal.Action>
          </Modal.Actions>
        </Modal.Modal>
      )}

      <RichFooter />
    </div>
  );
}