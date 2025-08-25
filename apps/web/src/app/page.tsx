'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import TrueMeNavbar from '@/components/TrueMeNavbar'
import { GlassCard } from '@/components/ui/GlassCard'
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ShoppingBag, Shield, Crown, CheckCircle, ArrowRight, Sparkles, Star, Clock, Phone, Heart, Zap, User } from 'lucide-react';

export default function Home() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  
  const phrases = [
    "Not a Style. A Signature.",
    "L'art du luxe authentique."
  ];

  const typewriterWords = phrases[currentPhrase].split(' ').map(word => ({
    text: word,
    className: "text-trueme",
  }));

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 4000); // Change phrase every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const brandLogos = [
    'Chanel', 'Hermès', 'Louis Vuitton', 'Dior', 'Gucci'
  ];

  const featuredArticles = [
    {
      id: 1,
      brand: 'Chanel',
      name: 'Timeless Classic Flap Bag',
      price: 'AED 12,500',
      condition: 'Excellent',
      certified: true
    },
    {
      id: 2,
      brand: 'Hermès',
      name: 'Birkin 35 Togo Leather',
      price: 'AED 45,000',
      condition: 'Comme neuf',
      certified: true
    },
    {
      id: 3,
      brand: 'Dior',
      name: 'Lady Dior Medium Cannage',
      price: 'AED 8,500',
      condition: 'Très bon',
      certified: true
    },
    {
      id: 4,
      brand: 'Louis Vuitton',
      name: 'Speedy 30 Monogram',
      price: 'AED 3,200',
      condition: 'Très bon',
      certified: true
    }
  ];

  const excellenceCards = [
    <Card 
      key="authentification"
      index={0}
      card={{
        src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
        title: "Authentification",
        category: "Excellence",
        content: (
          <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Chaque pièce est authentifiée par nos experts certifiés.
              </span>{" "}
              Notre processus rigoureux en 7 étapes garantit l'authenticité absolue de chaque article. 
              Nos spécialistes formés par les maisons de luxe vérifient matériaux, finitions, et provenance.
            </p>
            <Shield className="w-16 h-16 text-trueme-gold mx-auto mt-8" />
          </div>
        ),
      }}
    />,
    <Card 
      key="exclusivite"
      index={1}
      card={{
        src: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop",
        title: "Exclusivité",
        category: "Excellence", 
        content: (
          <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Accès privilégié aux pièces les plus recherchées.
              </span>{" "}
              Éditions limitées, collaborations exclusives, et pièces vintage rares. 
              Notre réseau mondial nous permet de vous proposer ce qui ne se trouve nulle part ailleurs.
            </p>
            <Crown className="w-16 h-16 text-trueme-gold mx-auto mt-8" />
          </div>
        ),
      }}
    />,
    <Card 
      key="prestige"
      index={2}
      card={{
        src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
        title: "Prestige", 
        category: "Excellence",
        content: (
          <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Une expérience digne des plus grands noms du luxe.
              </span>{" "}
              Livraison VIP, emballage signature, et service conciergerie disponible 24h/24. 
              Chaque détail est pensé pour sublimer votre expérience d'acquisition.
            </p>
            <Sparkles className="w-16 h-16 text-trueme-gold mx-auto mt-8" />
          </div>
        ),
      }}
    />
  ];

  const testimonials = [
    {
      quote: "TRUE ME m'a permis de découvrir des pièces d'exception que je n'aurais jamais trouvées ailleurs. L'authenticité est garantie, le service irréprochable.",
      name: "Zara Al-Rashid",
      designation: "Top Model & Influenceuse Mode",
      src: "/images/hero/zara-al-rashid.png"
    },
    {
      quote: "En tant que footballeur, j'accorde une importance particulière à mon style. TRUE ME comprend mes besoins et me propose toujours des pièces qui correspondent à ma personnalité.",
      name: "Marcus Sterling", 
      designation: "Footballeur Premier League",
      src: "/images/hero/marcus-sterling.png"
    },
    {
      quote: "TRUE ME n'est pas qu'une marketplace, c'est une expérience. Chaque acquisition devient un moment privilégié, une histoire à raconter.",
      name: "Ahmed Al-Maktoum",
      designation: "Entrepreneur & Collectionneur",
      src: "/images/hero/ahmed-al-maktoum.png"
    }
  ];

  return (
    <main className="min-h-screen">
      <TrueMeNavbar />
      
      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Hero Title with Typewriter Effect */}
          <div className="mb-6 fade-in">
            <TypewriterEffectSmooth 
              key={currentPhrase} 
              words={typewriterWords}
              className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight" 
            />
            <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-trueme-gold mt-8 tracking-tight">
              True Me
            </div>
          </div>
          
          {/* Hero Subtitle */}
          <div className="mb-12 fade-in-delay-1">
            <p className="text-xl md:text-2xl text-trueme-light max-w-4xl mx-auto leading-relaxed">
              Découvrez des pièces d'exception où chaque détail révèle l'art de l'excellence. Not a Style. A Signature.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24 fade-in" style={{animationDelay: '0.4s'}}>
            <Link href="/marketplace">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-gradient-to-br from-trueme-gold to-trueme-gold text-white font-medium px-10 py-4 text-lg flex items-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Découvrir la Marketplace
              </HoverBorderGradient>
            </Link>
            <Link href="#authentification">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-gradient-to-br from-trueme-gold to-trueme-gold text-white font-medium px-10 py-4 text-lg flex items-center gap-2"
              >
                <Shield className="w-5 h-5" />
                Faire certifier un article
              </HoverBorderGradient>
            </Link>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-trueme-gold/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-trueme-gold/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </section>

      {/* Marketplace Preview */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24 fade-in">
            <div className="inline-flex items-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-trueme-gold rounded-full"></div>
              <span className="text-sm font-medium text-trueme-gold tracking-[0.2em] uppercase">Marketplace</span>
              <div className="w-2 h-2 bg-trueme-gold rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-light mb-8 text-trueme tracking-tight">
              Une Sélection d'Exception, Juste pour Vous
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
            {featuredArticles.map((article, index) => (
              <GlassCard key={article.id} className="p-4 md:p-6 luxury-hover fade-in">
                <div className="aspect-square bg-gradient-to-br from-trueme-gold/20 to-trueme-gold/5 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img 
                    src={`/images/products/${article.id === 1 ? 'chanel-classic-flap' : article.id === 2 ? 'hermes-birkin-35' : article.id === 3 ? 'dior-lady-medium' : 'lv-speedy-30'}.jpg`}
                    alt={`${article.brand} ${article.name}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) {
                        nextElement.style.display = 'flex';
                      }
                    }}
                  />
                  <Crown className="w-8 h-8 md:w-12 md:h-12 text-trueme-gold hidden" />
                </div>
                <div className="text-center">
                  <p className="text-xs md:text-sm text-trueme-gold font-medium mb-1">{article.brand}</p>
                  <h3 className="text-base md:text-lg font-semibold text-trueme mb-2">{article.name}</h3>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-trueme-gold" />
                    <span className="text-xs text-trueme-gold">Certifié True Me</span>
                  </div>
                  <p className="text-lg md:text-xl font-bold text-trueme">{article.price}</p>
                </div>
              </GlassCard>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/marketplace" className="btn-primary px-6 md:px-8 py-3 text-base md:text-lg font-medium inline-flex items-center gap-2">
              Explorer toute la collection
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Storytelling Section - 3 Icônes */}
      <section className="py-16 px-4 bg-gradient-to-r from-transparent via-trueme-cream/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Authenticité */}
            <div className="fade-in">
              <div className="w-16 h-16 mx-auto mb-6 bg-trueme-gold/10 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-trueme-gold" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-trueme mb-4">Authenticité</h3>
              <p className="text-trueme-light leading-relaxed">
                Chaque pièce certifiée par nos experts. Votre garantie d'authenticité absolue.
              </p>
            </div>
            
            {/* Valeur */}
            <div className="fade-in" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 mx-auto mb-6 bg-trueme-gold/10 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-trueme-gold" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-trueme mb-4">Valeur</h3>
              <p className="text-trueme-light leading-relaxed">
                Des pièces d'exception qui conservent et augmentent leur valeur dans le temps.
              </p>
            </div>
            
            {/* Sécurité */}
            <div className="fade-in" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 mx-auto mb-6 bg-trueme-gold/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-trueme-gold" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-trueme mb-4">Sécurité</h3>
              <p className="text-trueme-light leading-relaxed">
                Transactions sécurisées et service client d'exception pour votre tranquillité.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* VIP Services */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-16 md:mb-24 fade-in">
            <div className="inline-flex items-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-trueme-gold rounded-full"></div>
              <span className="text-sm font-medium text-trueme-gold tracking-[0.2em] uppercase">Services VIP</span>
              <div className="w-2 h-2 bg-trueme-gold rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-light mb-6 text-trueme tracking-tight">
              L'Excellence à Votre Service
            </h2>
            <p className="text-xl text-trueme-light max-w-3xl mx-auto leading-relaxed">
              Des services personnalisés pour une expérience luxe sur-mesure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {/* Conciergerie de Luxe */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 luxury-hover fade-in cursor-pointer hover:scale-105 transition-all duration-300 shadow-xl">
                  <Crown className="w-10 h-10 md:w-12 md:h-12 text-trueme-gold mx-auto mb-4 md:mb-6" />
                  <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-trueme">Conciergerie de Luxe</h3>
                  <p className="text-trueme-light leading-relaxed text-base md:text-lg">
                    De la gestion de votre collection à la recherche de la pièce rare, notre équipe dédiée s'occupe de tout.
                  </p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] bg-white/95 backdrop-blur-2xl border border-trueme-gold/20 rounded-3xl shadow-2xl overflow-hidden">
                <DialogHeader className="pb-4 border-b border-trueme-gold/10">
                  <DialogTitle className="flex items-center gap-3 text-2xl text-trueme">
                    <Crown className="w-8 h-8 text-trueme-gold" />
                    Conciergerie Privée TRUE ME
                  </DialogTitle>
                  <DialogDescription className="text-trueme-light text-lg">
                    Votre assistant personnel dédié au luxe
                  </DialogDescription>
                </DialogHeader>
                <div className="overflow-y-auto max-h-[calc(90vh-120px)] custom-scrollbar">
                <div className="space-y-8 py-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-trueme-gold/5 to-transparent rounded-2xl p-6">
                      <h4 className="font-semibold text-trueme flex items-center gap-3 mb-6 text-lg">
                        <Star className="w-6 h-6 text-trueme-gold" />
                        Services Exclusifs
                      </h4>
                      <div className="space-y-3">
                        {[
                          { icon: <ShoppingBag className="w-5 h-5" />, text: 'Recherche mondiale de pièces rares' },
                          { icon: <Zap className="w-5 h-5" />, text: 'Accès prioritaire aux nouvelles arrivées' },
                          { icon: <Heart className="w-5 h-5" />, text: 'Curation personnalisée selon vos goûts' },
                          { icon: <Crown className="w-5 h-5" />, text: 'Expertise certifiée par les maisons de luxe' },
                          { icon: <Sparkles className="w-5 h-5" />, text: 'Service concierge dédié 24/7' }
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 hover:bg-trueme-gold/5 rounded-xl transition-colors">
                            <div className="text-trueme-gold">{item.icon}</div>
                            <span className="text-trueme-light font-medium">{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-trueme-gold/5 to-transparent rounded-2xl p-6">
                      <h4 className="font-semibold text-trueme flex items-center gap-3 mb-6 text-lg">
                        <Clock className="w-6 h-6 text-trueme-gold" />
                        Engagement Premium
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-white/30 rounded-xl">
                          <div>
                            <p className="font-medium text-trueme">Temps de réponse</p>
                            <p className="text-trueme-light text-sm">Garantie contractuelle</p>
                          </div>
                          <span className="text-trueme-gold font-bold text-xl">&lt; 2h</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-white/30 rounded-xl">
                          <div>
                            <p className="font-medium text-trueme">Disponibilité</p>
                            <p className="text-trueme-light text-sm">Service continu</p>
                          </div>
                          <span className="text-trueme-gold font-bold text-xl">24/7</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-trueme-gold/10 via-trueme-gold/5 to-trueme-gold/10 rounded-2xl p-8 border border-trueme-gold/20">
                    <div className="text-center space-y-4">
                      <div>
                        <p className="text-3xl font-light text-trueme mb-2">Formule Exclusive</p>
                        <p className="text-trueme-light">Engagement privilégié • Minimum 6 mois</p>
                      </div>
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-5xl font-light text-trueme-gold">AED 2,500</span>
                        <span className="text-trueme-light text-xl">/mois</span>
                      </div>
                      <p className="text-trueme-light text-sm max-w-md mx-auto">
                        Accès illimité à tous nos services premium et priorité absolue sur toutes vos demandes
                      </p>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-trueme-gold to-trueme-gold/80 hover:from-trueme-gold/90 hover:to-trueme-gold text-black font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg text-lg">
                    Réserver une Consultation Privée
                  </button>
                </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 luxury-hover fade-in cursor-pointer hover:scale-105 transition-all duration-300 shadow-xl" style={{animationDelay: '0.2s'}}>
                  <Zap className="w-10 h-10 md:w-12 md:h-12 text-trueme-gold mx-auto mb-4 md:mb-6" />
                  <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-trueme">Authentification Express</h3>
                  <p className="text-trueme-light leading-relaxed text-base md:text-lg">
                    Certification ultra-rapide en moins de 24h pour vos pièces d'exception.
                  </p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] bg-white/95 backdrop-blur-2xl border border-trueme-gold/20 rounded-3xl shadow-2xl overflow-hidden">
                <DialogHeader className="pb-4 border-b border-trueme-gold/10">
                  <DialogTitle className="flex items-center gap-3 text-2xl text-trueme">
                    <Zap className="w-8 h-8 text-trueme-gold" />
                    Authentification Express
                  </DialogTitle>
                  <DialogDescription className="text-trueme-light text-lg">
                    Certification ultra-rapide garantie sous 24h
                  </DialogDescription>
                </DialogHeader>
                <div className="overflow-y-auto max-h-[calc(90vh-120px)] custom-scrollbar">
                <div className="space-y-6 py-6">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-3 bg-trueme-gold/10 rounded-full px-6 py-3 mb-4">
                      <Zap className="w-5 h-5 text-trueme-gold animate-pulse" />
                      <span className="text-trueme-gold font-semibold">Processus Ultra-Rapide</span>
                    </div>
                    <p className="text-trueme-light max-w-lg mx-auto">
                      Notre technologie de pointe et nos experts certifiés garantissent une authentification express sans compromis sur la qualité.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                      { step: '1', time: '30min', desc: 'Réception & Analyse' },
                      { step: '2', time: '12h', desc: 'Expertise Approfondie' },
                      { step: '3', time: '6h', desc: 'Vérification Finale' },
                      { step: '4', time: '6h', desc: 'Certificat Numérique' }
                    ].map((item, idx) => (
                      <div key={idx} className="text-center bg-gradient-to-b from-white/20 to-white/5 rounded-2xl p-4 border border-white/10">
                        <div className="w-12 h-12 bg-trueme-gold rounded-full flex items-center justify-center mx-auto mb-3 text-black font-bold text-lg">
                          {item.step}
                        </div>
                        <p className="text-trueme-gold font-semibold text-sm mb-1">{item.time}</p>
                        <p className="text-trueme-light text-xs">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-green-500/10 to-transparent rounded-2xl p-6 border border-green-500/20">
                      <h4 className="font-semibold text-trueme flex items-center gap-3 mb-4">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                        Garanties Incluses
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span className="text-trueme-light">Résultat garanti sous 24h</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span className="text-trueme-light">Remboursement si dépassement</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <span className="text-trueme-light">Assurance complète incluse</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-trueme-gold/10 to-transparent rounded-2xl p-6 border border-trueme-gold/20">
                      <h4 className="font-semibold text-trueme flex items-center gap-3 mb-4">
                        <Shield className="w-6 h-6 text-trueme-gold" />
                        Sécurité Maximale
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-trueme-gold rounded-full"></span>
                          <span className="text-trueme-light">Transport blindé sécurisé</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-trueme-gold rounded-full"></span>
                          <span className="text-trueme-light">Laboratoire haute sécurité</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-trueme-gold rounded-full"></span>
                          <span className="text-trueme-light">Blockchain certifié</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-trueme-gold/10 via-trueme-gold/5 to-trueme-gold/10 rounded-2xl p-8 border border-trueme-gold/20">
                    <div className="text-center space-y-4">
                      <div>
                        <p className="text-2xl font-light text-trueme mb-2">Service Express Premium</p>
                        <p className="text-trueme-light">Certification garantie en moins de 24h</p>
                      </div>
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-4xl font-light text-trueme-gold">AED 150</span>
                        <span className="text-trueme-light text-lg">/pièce</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-trueme-gold to-trueme-gold/80 hover:from-trueme-gold/90 hover:to-trueme-gold text-black font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg text-lg">
                    Démarrer l'Authentification Express
                  </button>
                </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Conseil Personnalisé */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 luxury-hover fade-in cursor-pointer hover:scale-105 transition-all duration-300 shadow-xl" style={{animationDelay: '0.4s'}}>
                  <Heart className="w-10 h-10 md:w-12 md:h-12 text-trueme-gold mx-auto mb-4 md:mb-6" />
                  <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-trueme">Personal Shopper</h3>
                  <p className="text-trueme-light leading-relaxed text-base md:text-lg">
                    Votre styliste personnel pour dénicher les pièces qui vous correspondent parfaitement.
                  </p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] bg-white/95 backdrop-blur-2xl border border-trueme-gold/20 rounded-3xl shadow-2xl overflow-hidden">
                <DialogHeader className="pb-4 border-b border-trueme-gold/10">
                  <DialogTitle className="flex items-center gap-3 text-2xl text-trueme">
                    <Heart className="w-8 h-8 text-trueme-gold" />
                    Personal Shopper TRUE ME
                  </DialogTitle>
                  <DialogDescription className="text-trueme-light text-lg">
                    Votre guide personnel dans l'univers du luxe authentique
                  </DialogDescription>
                </DialogHeader>
                <div className="overflow-y-auto max-h-[calc(90vh-120px)] custom-scrollbar">
                <div className="space-y-8 py-6">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-3 bg-trueme-gold/10 rounded-full px-6 py-3 mb-4">
                      <Heart className="w-5 h-5 text-trueme-gold animate-pulse" />
                      <span className="text-trueme-gold font-semibold">Service Sur-Mesure</span>
                    </div>
                    <p className="text-trueme-light max-w-lg mx-auto">
                      Notre équipe de stylistes experts vous accompagne dans la création d'un style authentiquement vôtre, avec les plus belles pièces du luxe.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {[
                      { icon: <User className="w-8 h-8" />, title: 'Profil Personnalisé', desc: 'Analyse complète de votre style et préférences' },
                      { icon: <Heart className="w-8 h-8" />, title: 'Curation Exclusive', desc: 'Sélection de pièces adaptées à votre personnalité' },
                      { icon: <Sparkles className="w-8 h-8" />, title: 'Service Continu', desc: 'Accompagnement permanent dans vos choix luxe' }
                    ].map((item, idx) => (
                      <div key={idx} className="text-center bg-gradient-to-b from-white/20 to-white/5 rounded-2xl p-6 border border-white/10">
                        <div className="text-trueme-gold mb-4 flex justify-center">{item.icon}</div>
                        <h4 className="font-semibold text-trueme mb-3">{item.title}</h4>
                        <p className="text-trueme-light text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-trueme-gold/5 to-transparent rounded-2xl p-6">
                      <h4 className="font-semibold text-trueme flex items-center gap-3 mb-6 text-lg">
                        <Crown className="w-6 h-6 text-trueme-gold" />
                        Expertise Premium
                      </h4>
                      <div className="space-y-4">
                        {[
                          { icon: <Crown className="w-5 h-5" />, text: 'Stylistes formés par les maisons de luxe' },
                          { icon: <ShoppingBag className="w-5 h-5" />, text: 'Accès mondial aux collections privées' },
                          { icon: <ArrowRight className="w-5 h-5" />, text: 'Conseil en investissement mode' },
                          { icon: <Zap className="w-5 h-5" />, text: 'Réponse garantie sous 4h' }
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 hover:bg-trueme-gold/5 rounded-xl transition-colors">
                            <div className="text-trueme-gold">{item.icon}</div>
                            <span className="text-trueme-light font-medium">{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-trueme-gold/5 to-transparent rounded-2xl p-6">
                      <h4 className="font-semibold text-trueme flex items-center gap-3 mb-6 text-lg">
                        <Sparkles className="w-6 h-6 text-trueme-gold" />
                        Formules Disponibles
                      </h4>
                      <div className="space-y-4">
                        <div className="p-4 bg-white/20 rounded-xl">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-trueme">Session Découverte</span>
                            <span className="text-trueme-gold font-bold">Gratuite</span>
                          </div>
                          <p className="text-trueme-light text-sm">1h de consultation personnalisée</p>
                        </div>
                        <div className="p-4 bg-white/20 rounded-xl">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-trueme">Accompagnement Mensuel</span>
                            <span className="text-trueme-gold font-bold">AED 800</span>
                          </div>
                          <p className="text-trueme-light text-sm">Curation illimitée + priorité</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-trueme-gold/10 via-trueme-gold/5 to-trueme-gold/10 rounded-2xl p-8 border border-trueme-gold/20">
                    <div className="text-center space-y-4">
                      <div>
                        <p className="text-2xl font-light text-trueme mb-2">Première Session Offerte</p>
                        <p className="text-trueme-light">Découvrez votre style unique avec nos experts</p>
                      </div>
                      <div className="flex items-center justify-center gap-4 text-sm text-trueme-light">
                        <div className="flex items-center gap-1"><Sparkles className="w-4 h-4 text-trueme-gold" /><span>Sans engagement</span></div>
                        <span>•</span>
                        <div className="flex items-center gap-1"><Clock className="w-4 h-4 text-trueme-gold" /><span>60 minutes</span></div>
                        <span>•</span>
                        <div className="flex items-center gap-1"><Crown className="w-4 h-4 text-trueme-gold" /><span>Carnet style offert</span></div>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-trueme-gold to-trueme-gold/80 hover:from-trueme-gold/90 hover:to-trueme-gold text-black font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg text-lg">
                    Réserver ma Session Découverte Gratuite
                  </button>
                </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          
          <Link href="/auth/register" className="btn-primary px-6 md:px-10 py-3 md:py-4 text-base md:text-lg font-medium inline-flex items-center gap-2">
            Découvrir nos services Premium
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 bg-trueme-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-trueme-gold rounded-full"></div>
              <span className="text-sm font-medium text-trueme-gold tracking-[0.2em] uppercase">Témoignages</span>
              <div className="w-2 h-2 bg-trueme-gold rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-light mb-6 text-trueme tracking-tight">
              La Confiance de Nos Membres
            </h2>
            <p className="text-xl text-trueme-light max-w-3xl mx-auto leading-relaxed">
              Découvrez les expériences exceptionnelles de notre communauté exclusive
            </p>
          </div>
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gradient-to-t from-trueme-cream/20 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-morphism p-8 md:p-12 rounded-3xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
              <div>
                <div className="text-2xl font-light mb-4 text-trueme tracking-wide">TRUE ME</div>
                <p className="text-trueme-light text-sm mb-4">La première marketplace de luxe certifiée à Dubaï</p>
                <div className="text-trueme-gold font-light text-sm tracking-[0.1em]">Not a Styl. A Signature.</div>
              </div>
              
              <div>
                <h4 className="font-semibold text-trueme mb-4">Marketplace</h4>
                <div className="space-y-2 text-sm text-trueme-light">
                  <Link href="/marketplace?category=bags" className="block hover:text-trueme-gold transition-colors">Sacs à main</Link>
                  <Link href="/marketplace?category=jewelry" className="block hover:text-trueme-gold transition-colors">Bijoux</Link>
                  <Link href="/marketplace?category=watches" className="block hover:text-trueme-gold transition-colors">Montres</Link>
                  <Link href="/marketplace?category=accessories" className="block hover:text-trueme-gold transition-colors">Accessoires</Link>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-trueme mb-4">Services</h4>
                <div className="space-y-2 text-sm text-trueme-light">
                  <Link href="/authentication" className="block hover:text-trueme-gold transition-colors">Authentification</Link>
                  <Link href="/vip" className="block hover:text-trueme-gold transition-colors">Services VIP</Link>
                  <Link href="/brands" className="block hover:text-trueme-gold transition-colors">Marques</Link>
                  <Link href="/about" className="block hover:text-trueme-gold transition-colors">À propos</Link>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-trueme mb-4">Contact</h4>
                <div className="space-y-2 text-sm text-trueme-light">
                  <p>Dubai Marina</p>
                  <p>UAE, Dubai</p>
                  <a href="mailto:hello@trueme.ae" className="block hover:text-trueme-gold transition-colors">hello@trueme.ae</a>
                  <a href="tel:+971501234567" className="block hover:text-trueme-gold transition-colors">+971 50 123 4567</a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-trueme-gold/20 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-trueme-light text-sm">© 2024 TRUE ME. Tous droits réservés.</p>
                <div className="flex space-x-6 text-sm text-trueme-light">
                  <Link href="/privacy" className="hover:text-trueme-gold transition-colors">Confidentialité</Link>
                  <Link href="/terms" className="hover:text-trueme-gold transition-colors">Conditions</Link>
                  <Link href="/cookies" className="hover:text-trueme-gold transition-colors">Cookies</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
