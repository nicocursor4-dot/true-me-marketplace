'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import TrueMeNavbar from '@/components/TrueMeNavbar'
import { GlassCard } from '@/components/ui/GlassCard'
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Crown, ShoppingBag, Shield, Sparkles, ArrowRight, CheckCircle, Phone, Clock, Star } from 'lucide-react'

export default function Home() {
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
      src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=1887&auto=format&fit=crop"
    },
    {
      quote: "En tant que footballeur, j'accorde une importance particulière à mon style. TRUE ME comprend mes besoins et me propose toujours des pièces qui correspondent à ma personnalité.",
      name: "Marcus Sterling", 
      designation: "Footballeur Premier League",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1935&auto=format&fit=crop"
    },
    {
      quote: "La conciergerie TRUE ME est exceptionnelle. Ils anticipent mes désirs et me dénichent les pièces les plus exclusives avant même qu'elles ne soient sur le marché.",
      name: "Luna Castillo",
      designation: "Actrice & Ambassadrice Luxe",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1935&auto=format&fit=crop"
    },
    {
      quote: "TRUE ME n'est pas qu'une marketplace, c'est une expérience. Chaque acquisition devient un moment privilégié, une histoire à raconter.",
      name: "Ahmed Al-Maktoum",
      designation: "Entrepreneur & Collectionneur",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1935&auto=format&fit=crop"
    }
  ];

  return (
    <main className="min-h-screen">
      <TrueMeNavbar />
      
      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Hero Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 fade-in text-trueme tracking-tight">
            La Luxure Authentique
          </h1>
          
          {/* Hero Subtitle */}
          <div className="mb-12 fade-in-delay-1">
            <p className="text-2xl md:text-3xl lg:text-4xl text-trueme-light font-light mb-6 leading-relaxed">
              Not a Styl. A Signature.
            </p>
            <p className="text-xl md:text-2xl text-trueme-light max-w-4xl mx-auto leading-relaxed">
              Découvrez l'élégance redéfinie. Chaque pièce raconte une histoire, chaque acquisition révèle votre essence.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24 fade-in" style={{animationDelay: '0.4s'}}>
            <Link href="/marketplace" className="btn-primary px-10 py-4 text-lg font-medium flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              Découvrir la Marketplace
            </Link>
            <Link href="#authentification" className="btn-secondary px-10 py-4 text-lg font-medium flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Faire certifier un article
            </Link>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-trueme-gold/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-trueme-gold/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-transparent via-trueme-cream/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="fade-in">
              <div className="text-4xl md:text-5xl font-light text-trueme-gold mb-2">500+</div>
              <p className="text-sm text-trueme-secondary tracking-wide uppercase">Pièces Authentifiées</p>
            </div>
            <div className="fade-in" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl md:text-5xl font-light text-trueme-gold mb-2">98%</div>
              <p className="text-sm text-trueme-secondary tracking-wide uppercase">Satisfaction Client</p>
            </div>
            <div className="fade-in" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl md:text-5xl font-light text-trueme-gold mb-2">24h</div>
              <p className="text-sm text-trueme-secondary tracking-wide uppercase">Authentification Express</p>
            </div>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-trueme-gold rounded-full"></div>
              <span className="text-sm font-medium text-trueme-gold tracking-[0.2em] uppercase">Excellence</span>
              <div className="w-2 h-2 bg-trueme-gold rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-light mb-6 text-trueme tracking-tight">
              L'Art du Luxe Authentique
            </h2>
            <p className="text-xl text-trueme-light max-w-3xl mx-auto leading-relaxed">
              Plus qu'une marketplace, TRUE ME est votre passerelle vers l'excellence
            </p>
          </div>
          <Carousel items={excellenceCards} />
        </div>
      </section>

      {/* Marketplace Preview */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24 fade-in">
            <h2 className="text-4xl md:text-6xl font-light mb-8 text-trueme tracking-tight">
              Une Sélection d'Exception, Juste pour Vous
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredArticles.map((article, index) => (
              <GlassCard key={article.id} className="p-6 luxury-hover fade-in">
                <div className="aspect-square bg-gradient-to-br from-trueme-gold/20 to-trueme-gold/5 rounded-lg mb-4 flex items-center justify-center">
                  <Crown className="w-12 h-12 text-trueme-gold" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-trueme-gold font-medium mb-1">{article.brand}</p>
                  <h3 className="text-lg font-semibold text-trueme mb-2">{article.name}</h3>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <CheckCircle className="w-4 h-4 text-trueme-gold" />
                    <span className="text-xs text-trueme-gold">Certifié True Me</span>
                  </div>
                  <p className="text-xl font-bold text-trueme">{article.price}</p>
                </div>
              </GlassCard>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/marketplace" className="btn-primary px-8 py-3 text-lg font-medium inline-flex items-center gap-2">
              Explorer toute la collection
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Authentification Section */}
      <section id="authentification" className="py-20 md:py-32 px-4 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="fade-in">
              <div className="aspect-square bg-gradient-to-br from-trueme-gold/20 to-trueme-gold/5 rounded-3xl flex items-center justify-center mb-8 md:mb-0">
                <Shield className="w-24 h-24 text-trueme-gold" />
              </div>
            </div>
            
            <div className="fade-in" style={{animationDelay: '0.2s'}}>
              <h2 className="text-4xl md:text-5xl font-light mb-8 text-trueme tracking-tight">
                Révélez la Vraie Valeur de vos Trésors
              </h2>
              <p className="text-xl text-trueme-light mb-8 leading-relaxed">
                Votre article de luxe est unique. Sa provenance ne devrait plus être un doute.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-trueme-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-trueme mb-2">Gage d'Authenticité Ultime</h3>
                    <p className="text-trueme-light">Recevez un certificat numérique infalsifiable qui accompagne votre article à vie.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sparkles className="w-6 h-6 text-trueme-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-trueme mb-2">Maximisez Votre Prix de Vente</h3>
                    <p className="text-trueme-light">Un article certifié se vend plus vite et à un meilleur prix.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-trueme-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-trueme mb-2">Tranquillité d'Esprit</h3>
                    <p className="text-trueme-light">Vendez en toute sérénité sur notre plateforme ou en privé.</p>
                  </div>
                </div>
              </div>
              
              <Link href="/auth/register" className="btn-primary px-8 py-4 text-lg font-medium inline-flex items-center gap-2">
                Faire authentifier mon article
                <ArrowRight className="w-5 h-5" />
              </Link>
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
                <div className="glass-premium p-8 md:p-12 luxury-hover fade-in cursor-pointer hover:scale-105 transition-all duration-300">
                  <Crown className="w-10 h-10 md:w-12 md:h-12 text-trueme-gold mx-auto mb-4 md:mb-6" />
                  <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-trueme">Conciergerie de Luxe</h3>
                  <p className="text-trueme-light leading-relaxed text-base md:text-lg">
                    De la gestion de votre collection à la recherche de la pièce rare, notre équipe dédiée s'occupe de tout.
                  </p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl bg-trueme-cream/95 backdrop-blur-xl border-trueme-gold/30 rounded-2xl animate-in fade-in-0 zoom-in-95 duration-300">
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3 text-2xl text-trueme">
                    <Crown className="w-8 h-8 text-trueme-gold" />
                    Conciergerie Privée TRUE ME
                  </DialogTitle>
                  <DialogDescription className="text-trueme-light text-lg">
                    Votre assistant personnel dédié au luxe
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 py-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium text-trueme flex items-center gap-2">
                        <Star className="w-5 h-5 text-trueme-gold" />
                        Services Inclus
                      </h4>
                      <ul className="space-y-2 text-trueme-light">
                        <li>• Recherche de pièces rares</li>
                        <li>• Réservations exclusives</li>
                        <li>• Gestion de collection</li>
                        <li>• Expertise personnalisée</li>
                        <li>• Accompagnement VIP</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium text-trueme flex items-center gap-2">
                        <Clock className="w-5 h-5 text-trueme-gold" />
                        Disponibilité
                      </h4>
                      <p className="text-trueme-light">Service 24/7 avec réponse garantie sous 2h</p>
                      <h4 className="font-medium text-trueme flex items-center gap-2">
                        <Phone className="w-5 h-5 text-trueme-gold" />
                        Contact Dédié
                      </h4>
                      <p className="text-trueme-light">Ligne directe avec votre concierge attitré</p>
                    </div>
                  </div>
                  <div className="bg-trueme-gold/10 rounded-xl p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-trueme font-medium">Formule Premium</p>
                        <p className="text-trueme-light">Engagement 6 mois minimum</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-trueme-gold">AED 2,500</p>
                        <p className="text-trueme-light">/mois</p>
                      </div>
                    </div>
                  </div>
                  <button className="w-full btn-primary py-4 text-lg font-medium">
                    Réserver une Consultation
                  </button>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <div className="glass-premium p-12 luxury-hover fade-in cursor-pointer hover:scale-105 transition-all duration-300" style={{animationDelay: '0.2s'}}>
                  <Sparkles className="w-12 h-12 text-trueme-gold mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-6 text-trueme">Accès Prioritaire</h3>
                  <p className="text-trueme-light leading-relaxed text-lg">
                    Soyez le premier à découvrir nos nouvelles arrivées et nos ventes privées exclusives.
                  </p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl bg-trueme-cream/95 backdrop-blur-xl border-trueme-gold/30 rounded-2xl animate-in fade-in-0 zoom-in-95 duration-300">
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3 text-2xl text-trueme">
                    <Sparkles className="w-8 h-8 text-trueme-gold" />
                    Accès Prioritaire VIP
                  </DialogTitle>
                  <DialogDescription className="text-trueme-light text-lg">
                    L'exclusivité avant tout le monde
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 py-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium text-trueme">Avantages Exclusifs</h4>
                      <ul className="space-y-2 text-trueme-light">
                        <li>• Préview 48h avant public</li>
                        <li>• Ventes privées mensuelles</li>
                        <li>• Pièces limitées réservées</li>
                        <li>• Invitations événements VIP</li>
                        <li>• Remises privilégiées</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium text-trueme">Prochains Événements</h4>
                      <ul className="space-y-2 text-trueme-light">
                        <li>• Preview Hermès Septembre</li>
                        <li>• Soirée Chanel Privée</li>
                        <li>• Vente LV Limited Edition</li>
                        <li>• Exposition Bijoux Rares</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-trueme-gold/20 rounded-xl p-6">
                    <div className="text-center">
                      <p className="text-trueme font-medium mb-2">Adhésion Annuelle</p>
                      <p className="text-3xl font-bold text-trueme-gold mb-1">AED 1,500</p>
                      <p className="text-trueme-light">Accès illimité à tous nos événements VIP</p>
                    </div>
                  </div>
                  <button className="w-full btn-primary py-4 text-lg font-medium">
                    Devenir Membre VIP
                  </button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Conseil Personnalisé */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="glass-premium p-8 md:p-12 luxury-hover fade-in cursor-pointer hover:scale-105 transition-all duration-300" style={{animationDelay: '0.4s'}}>
                  <Shield className="w-10 h-10 md:w-12 md:h-12 text-trueme-gold mx-auto mb-4 md:mb-6" />
                  <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-trueme">Conseil Personnalisé</h3>
                  <p className="text-trueme-light leading-relaxed text-base md:text-lg">
                    Nos experts vous accompagnent pour acheter, vendre ou entretenir vos biens les plus précieux.
                  </p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl bg-trueme-cream/95 backdrop-blur-xl border-trueme-gold/30 rounded-2xl animate-in fade-in-0 zoom-in-95 duration-300">
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3 text-2xl text-trueme">
                    <Shield className="w-8 h-8 text-trueme-gold" />
                    Conseil en Investissement Luxe
                  </DialogTitle>
                  <DialogDescription className="text-trueme-light text-lg">
                    Maximisez la valeur de votre collection
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 py-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium text-trueme">Expertise Incluse</h4>
                      <ul className="space-y-2 text-trueme-light">
                        <li>• Analyse de marché</li>
                        <li>• Évaluation portfolio</li>
                        <li>• Stratégie d'acquisition</li>
                        <li>• Timing optimal vente</li>
                        <li>• Diversification conseils</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium text-trueme">Nos Experts</h4>
                      <ul className="space-y-2 text-trueme-light">
                        <li>• 15+ ans d'expérience</li>
                        <li>• Réseau international</li>
                        <li>• Spécialistes par marque</li>
                        <li>• Suivi personnalisé</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-trueme-gold/20 rounded-xl p-6">
                    <div className="text-center">
                      <p className="text-trueme font-medium mb-2">Première Consultation Offerte</p>
                      <p className="text-trueme-light">Session de 60 minutes avec nos experts</p>
                      <p className="text-sm text-trueme-light mt-2">Puis AED 500/consultation</p>
                    </div>
                  </div>
                  <button className="w-full btn-primary py-4 text-lg font-medium">
                    Réserver ma Consultation Gratuite
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          
          <Link href="/auth/register" className="btn-primary px-10 py-4 text-lg font-medium inline-flex items-center gap-2">
            Découvrir nos services Premium
            <ArrowRight className="w-5 h-5" />
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
