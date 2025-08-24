'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import TrueMeNavbar from '@/components/TrueMeNavbar'
import { GlassCard } from '@/components/ui/GlassCard'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
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

  const testimonials = [
    {
      quote: "TRUE ME a transformé ma vision du luxe. En tant qu'égérie, je ne porte que des pièces authentifiées par leurs experts. Une confiance absolue.",
      name: "Zara Al-Rashid",
      designation: "Top Model & Influenceuse Mode",
      src: "https://images.unsplash.com/photo-1494790108755-2616c96fad0c?q=80&w=1887&auto=format&fit=crop"
    },
    {
      quote: "Après mes matchs, TRUE ME m'aide à investir dans des pièces d'exception. Leur service VIP et leur authenticité sont légendaires.",
      name: "Marcus Sterling",
      designation: "Footballeur Professionnel, Premier League",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1935&auto=format&fit=crop"
    },
    {
      quote: "Pour mes red carpets, TRUE ME me donne accès aux plus belles créations. Leur réseau exclusif et leur expertise sont incomparables.",
      name: "Luna Castillo",
      designation: "Actrice & Ambassadrice Luxe",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1935&auto=format&fit=crop"
    },
    {
      quote: "TRUE ME comprend l'art de vivre à Dubaï. Chaque acquisition devient un investissement grâce à leur expertise du marché du luxe.",
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
            TRUE ME : L'Authenticité Redéfinie
          </h1>
          
          {/* Hero Subtitle */}
          <div className="mb-12 fade-in-delay-1">
            <p className="text-2xl md:text-3xl lg:text-4xl text-trueme-light font-light mb-6 leading-relaxed">
              Not a Style. A Signature.
            </p>
            <p className="text-xl md:text-2xl text-trueme-light max-w-4xl mx-auto leading-relaxed">
              TRUE ME révolutionne le luxe à Dubaï. Authenticité garantie, transactions sécurisées, expérience exclusive.
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

      {/* Trust Bar */}
      <section className="py-8 px-4 bg-gradient-to-r from-transparent via-trueme-cream/30 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-trueme-secondary mb-6 tracking-wide">ILS NOUS FONT CONFIANCE</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {brandLogos.map((brand, index) => (
              <div key={index} className="text-lg font-light text-trueme-secondary">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
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
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <Shield className="w-12 h-12 text-trueme-gold mx-auto mb-4" />
              <h3 className="text-xl font-medium text-trueme mb-3">Authentification</h3>
              <p className="text-trueme-light">Chaque pièce certifiée par nos experts</p>
            </div>
            <div className="text-center p-8">
              <Crown className="w-12 h-12 text-trueme-gold mx-auto mb-4" />
              <h3 className="text-xl font-medium text-trueme mb-3">Exclusivité</h3>
              <p className="text-trueme-light">Accès aux pièces les plus recherchées</p>
            </div>
            <div className="text-center p-8">
              <Sparkles className="w-12 h-12 text-trueme-gold mx-auto mb-4" />
              <h3 className="text-xl font-medium text-trueme mb-3">Prestige</h3>
              <p className="text-trueme-light">Une expérience digne du luxe</p>
            </div>
          </div>
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
            <h2 className="text-4xl md:text-6xl font-light mb-8 text-trueme tracking-tight">
              L'Expérience True Me. Au-delà de l'Attendu.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
            <Dialog>
              <DialogTrigger asChild>
                <div className="glass-premium p-12 luxury-hover fade-in cursor-pointer hover:scale-105 transition-all duration-300">
                  <Crown className="w-12 h-12 text-trueme-gold mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-6 text-trueme">Conciergerie de Luxe</h3>
                  <p className="text-trueme-light leading-relaxed text-lg">
                    De la gestion de votre collection à la recherche de la pièce rare, notre équipe dédiée s'occupe de tout.
                  </p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl bg-trueme-cream/95 backdrop-blur-xl border-trueme-gold/30">
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
              <DialogContent className="max-w-2xl bg-trueme-cream/95 backdrop-blur-xl border-trueme-gold/30">
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
                      <h4 className="font-medium text-trueme">Conditions</h4>
                      <ul className="space-y-2 text-trueme-light">
                        <li>• Statut Gold minimum</li>
                        <li>• Historique d'achat vérifié</li>
                        <li>• Engagement communautaire</li>
                        <li>• Parrainage possible</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-trueme-gold/20 to-trueme-gold/10 rounded-xl p-6">
                    <p className="text-trueme font-medium mb-2">Inclus dans l'adhésion Gold+</p>
                    <p className="text-trueme-light">Accès automatique dès validation du statut</p>
                  </div>
                  <button className="w-full btn-primary py-4 text-lg font-medium">
                    Découvrir l'Adhésion Gold+
                  </button>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <div className="glass-premium p-12 luxury-hover fade-in cursor-pointer hover:scale-105 transition-all duration-300" style={{animationDelay: '0.4s'}}>
                  <Shield className="w-12 h-12 text-trueme-gold mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-6 text-trueme">Conseil Personnalisé</h3>
                  <p className="text-trueme-light leading-relaxed text-lg">
                    Nos experts vous accompagnent pour acheter, vendre ou entretenir vos biens les plus précieux.
                  </p>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl bg-trueme-cream/95 backdrop-blur-xl border-trueme-gold/30">
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
          <div className="glass-morphism p-12 rounded-3xl">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
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
                  <Link href="/auth/register" className="block hover:text-trueme-gold transition-colors">Authentification</Link>
                  <Link href="/auth/register" className="block hover:text-trueme-gold transition-colors">Conciergerie VIP</Link>
                  <Link href="/auth/register" className="block hover:text-trueme-gold transition-colors">Comment vendre ?</Link>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-trueme mb-4">Entreprise</h4>
                <div className="space-y-2 text-sm text-trueme-light">
                  <Link href="/about" className="block hover:text-trueme-gold transition-colors">À propos</Link>
                  <Link href="/contact" className="block hover:text-trueme-gold transition-colors">Contact</Link>
                  <Link href="/faq" className="block hover:text-trueme-gold transition-colors">FAQ</Link>
                  <Link href="/press" className="block hover:text-trueme-gold transition-colors">Presse</Link>
                </div>
              </div>
            </div>
            
            <div className="border-t border-trueme-light/20 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-trueme-light">
              <p>&copy; 2025 True Me Dubai. Tous droits réservés.</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <Link href="/legal" className="hover:text-trueme-gold transition-colors">Mentions Légales</Link>
                <Link href="/privacy" className="hover:text-trueme-gold transition-colors">Politique de Confidentialité</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
