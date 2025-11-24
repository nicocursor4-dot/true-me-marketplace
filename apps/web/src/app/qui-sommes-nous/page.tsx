'use client'

import React from 'react'
import Link from 'next/link'
import LegacyNavbar from '@/components/LegacyNavbar'
import RichFooter from '@/components/layout/RichFooter'
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { SmoothTypewriter } from "@/components/ui/smooth-typewriter";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ShoppingBag, Shield, CheckCircle, Sparkles, Target, Globe, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function QuiSommesNous() {
  const phrases = [
    "L'art du luxe authentique."
  ];

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
    <main className="min-h-screen bg-trueme-cream selection:bg-trueme-gold/20">
      <LegacyNavbar />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-trueme-gold/10 via-transparent to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-trueme-gold/5 via-transparent to-transparent opacity-50"></div>
        </div>

        <div className="max-w-[1600px] mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50 mb-8">
              <Sparkles className="w-4 h-4 text-trueme-gold" />
              <span className="text-sm font-medium text-trueme-black uppercase tracking-wider">Notre Essence</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-serif text-trueme-black mb-8 leading-tight">
              True Me <br />
              <span className="text-trueme-gold italic">L'Authentique</span>
            </h1>

            <p className="text-xl md:text-2xl text-trueme-secondary max-w-3xl mx-auto font-light leading-relaxed mb-12">
              Plus qu'une marketplace, une vision. Celle d'un luxe accessible, transparent et éternel.
              Né à Dubaï, conçu pour le monde.
            </p>

            <Link href="/marketplace">
              <HoverBorderGradient
                containerClassName="rounded-full mx-auto"
                as="button"
                className="bg-trueme-black text-white font-medium px-10 py-4 text-lg flex items-center gap-3 hover:bg-trueme-gold transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
                Explorer la Collection
              </HoverBorderGradient>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-white rounded-[4rem] relative z-20 -mt-20 shadow-xl">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-serif text-trueme-black mb-8">
                L'Excellence comme <br />
                <span className="text-trueme-gold italic">Standard</span>
              </h2>
              <div className="space-y-8 text-lg text-trueme-secondary font-light leading-relaxed">
                <p>
                  TRUE ME est née d'une ambition simple mais audacieuse : redéfinir les standards du luxe de seconde main.
                  Dans un marché souvent opaque, nous avons choisi la clarté absolue.
                </p>
                <p>
                  Chaque pièce qui traverse nos mains est plus qu'un objet ; c'est un héritage.
                  Notre processus d'authentification rigoureux n'est pas une option, c'est notre signature.
                </p>
                <div className="flex gap-12 pt-8 border-t border-gray-100">
                  <div>
                    <div className="text-4xl font-serif text-trueme-black mb-2">2023</div>
                    <div className="text-sm text-trueme-secondary uppercase tracking-wider">Fondation</div>
                  </div>
                  <div>
                    <div className="text-4xl font-serif text-trueme-black mb-2">Dubai</div>
                    <div className="text-sm text-trueme-secondary uppercase tracking-wider">Siège Social</div>
                  </div>
                  <div>
                    <div className="text-4xl font-serif text-trueme-black mb-2">Global</div>
                    <div className="text-sm text-trueme-secondary uppercase tracking-wider">Portée</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative shadow-2xl">
                <Image
                  src="/images/hero/prompt1.png"
                  alt="Our Story"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-12 left-12 right-12 text-white">
                  <p className="text-2xl font-serif italic">"Le luxe n'est pas une question de prix, mais de valeur."</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-trueme-cream relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-serif text-trueme-black mb-6">Nos Piliers</h2>
            <div className="w-24 h-1 bg-trueme-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Shield className="w-10 h-10" />,
                title: "Confiance Absolue",
                desc: "Une authentification double étape pour une sérénité totale."
              },
              {
                icon: <Heart className="w-10 h-10" />,
                title: "Passion Partagée",
                desc: "Une communauté d'amoureux du beau et de l'exceptionnel."
              },
              {
                icon: <Globe className="w-10 h-10" />,
                title: "Impact Positif",
                desc: "Donner une seconde vie au luxe pour un avenir durable."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-20 h-20 bg-trueme-cream rounded-full flex items-center justify-center mb-8 text-trueme-gold group-hover:bg-trueme-gold group-hover:text-white transition-colors duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif text-trueme-black mb-4">{item.title}</h3>
                <p className="text-trueme-secondary font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white rounded-t-[4rem] -mt-20 relative z-30">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif text-trueme-black mb-6">La Voix de l'Excellence</h2>
            <p className="text-xl text-trueme-secondary font-light">Ce que nos membres disent de nous</p>
          </div>
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </section>

      <RichFooter />
    </main>
  );
}
