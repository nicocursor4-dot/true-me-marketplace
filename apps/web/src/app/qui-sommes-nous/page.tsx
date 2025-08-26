'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import TrueMeNavbar from '@/components/TrueMeNavbar'
import { GlassCard } from '@/components/ui/GlassCard'
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { SmoothTypewriter } from "@/components/ui/smooth-typewriter";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ShoppingBag, Shield, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function QuiSommesNous() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  
  const phrases = [
    "Not a Style. A Signature.",
    "L'art du luxe authentique."
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      quote: "TRUE ME m'a permis de découvrir des pièces d'exception que je n'aurais jamais trouvées ailleurs. La qualité est exceptionnelle, le service irréprochable.",
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
      
      {/* Hero Section - Qui sommes-nous */}
      <section className="relative px-4 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-6 fade-in flex flex-col items-center justify-center">
            <SmoothTypewriter 
              phrases={phrases}
              className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-center text-trueme" 
              interval={4000}
            />
            <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-trueme-gold mt-8 tracking-tight text-center">
              True Me
            </div>
          </div>
          
          <div className="mb-12 fade-in-delay-1">
            <p className="text-xl md:text-2xl text-trueme-light max-w-4xl mx-auto leading-relaxed">
              Découvrez l'histoire et les valeurs qui font de TRUE ME la référence du luxe authentique à Dubaï.
            </p>
          </div>

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
          </div>
        </div>
        
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-trueme-gold/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-trueme-gold/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-24 fade-in">
            <div className="inline-flex items-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-trueme-gold rounded-full"></div>
              <span className="text-sm font-medium text-trueme-gold tracking-[0.2em] uppercase">Notre Histoire</span>
              <div className="w-2 h-2 bg-trueme-gold rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-light mb-8 text-trueme tracking-tight">
              L'Excellence Depuis le Premier Jour
            </h2>
            <p className="text-xl text-trueme-light max-w-4xl mx-auto leading-relaxed">
              TRUE ME est née d'une vision : démocratiser l'accès au luxe authentique tout en préservant son caractère exceptionnel. 
              Fondée à Dubaï, carrefour mondial du luxe, nous avons créé la première marketplace certifiée dédiée aux pièces d'exception.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="fade-in">
                <h3 className="text-2xl font-semibold text-trueme mb-4">Notre Mission</h3>
                <p className="text-trueme-light leading-relaxed">
                  Rendre accessible le luxe authentique grâce à un processus d'authentification rigoureux et à une expérience client d'exception. 
                  Chaque pièce raconte une histoire, chaque acquisition devient un investissement.
                </p>
              </div>
              
              <div className="fade-in" style={{animationDelay: '0.2s'}}>
                <h3 className="text-2xl font-semibold text-trueme mb-4">Notre Vision</h3>
                <p className="text-trueme-light leading-relaxed">
                  Devenir la référence mondiale de la marketplace de luxe certifiée, où authenticité rime avec exclusivité. 
                  Un lieu où chaque membre trouve sa signature unique.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 fade-in" style={{animationDelay: '0.4s'}}>
              <div className="bg-gradient-to-br from-trueme-gold/10 to-transparent rounded-3xl p-6 text-center">
                <div className="text-3xl font-bold text-trueme-gold mb-2">500+</div>
                <p className="text-trueme-light text-sm">Pièces certifiées</p>
              </div>
              <div className="bg-gradient-to-br from-trueme-gold/10 to-transparent rounded-3xl p-6 text-center">
                <div className="text-3xl font-bold text-trueme-gold mb-2">50+</div>
                <p className="text-trueme-light text-sm">Marques partenaires</p>
              </div>
              <div className="bg-gradient-to-br from-trueme-gold/10 to-transparent rounded-3xl p-6 text-center">
                <div className="text-3xl font-bold text-trueme-gold mb-2">98%</div>
                <p className="text-trueme-light text-sm">Satisfaction client</p>
              </div>
              <div className="bg-gradient-to-br from-trueme-gold/10 to-transparent rounded-3xl p-6 text-center">
                <div className="text-3xl font-bold text-trueme-gold mb-2">24h</div>
                <p className="text-trueme-light text-sm">Support VIP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-16 px-4 bg-gradient-to-r from-transparent via-trueme-cream/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-trueme tracking-tight">
              Nos Valeurs Fondamentales
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="fade-in">
              <div className="w-16 h-16 mx-auto mb-6 bg-trueme-gold/10 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-trueme-gold" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-trueme mb-4">Excellence</h3>
              <p className="text-trueme-light leading-relaxed">
                Chaque pièce certifiée par nos experts. Votre garantie d'excellence absolue dans chaque transaction.
              </p>
            </div>
            
            <div className="fade-in" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 mx-auto mb-6 bg-trueme-gold/10 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-trueme-gold" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-trueme mb-4">Authenticité</h3>
              <p className="text-trueme-light leading-relaxed">
                Des pièces d'exception qui conservent et augmentent leur valeur. L'investissement intelligent du luxe.
              </p>
            </div>
            
            <div className="fade-in" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 mx-auto mb-6 bg-trueme-gold/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-trueme-gold" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-trueme mb-4">Confiance</h3>
              <p className="text-trueme-light leading-relaxed">
                Transactions sécurisées et service client d'exception pour votre tranquillité d'esprit totale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
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
                <div className="text-trueme-gold font-light text-sm tracking-[0.1em]">Not a Style. A Signature.</div>
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
                  <Link href="/authentification" className="block hover:text-trueme-gold transition-colors">Authentification</Link>
                  <Link href="/vip" className="block hover:text-trueme-gold transition-colors">Services VIP</Link>
                  <Link href="/brands" className="block hover:text-trueme-gold transition-colors">Marques</Link>
                  <Link href="/qui-sommes-nous" className="block hover:text-trueme-gold transition-colors">Qui sommes-nous</Link>
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
                <p className="text-trueme-light text-sm">© 2025 TRUE ME. Tous droits réservés.</p>
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
