"use client";

import React from 'react'
import Link from 'next/link'

const RichFooter: React.FC = () => {
  return (
    <footer className="bg-trueme-cream py-24 border-t border-trueme-gold/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl tracking-wide text-trueme-black">TRUE ME</h3>
            <p className="text-sm text-trueme-black/80 font-light leading-relaxed max-w-xs">
              La première marketplace de luxe certifiée à Dubai. L'excellence et l'authenticité au service de votre style.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-trueme-black uppercase tracking-widest mb-8">ACHETER</h4>
            <ul className="space-y-4 text-sm text-trueme-black/70 font-medium">
              <li><Link href="/marketplace" className="hover:text-trueme-gold transition-colors duration-300">Tous les produits</Link></li>
              <li><Link href="/marketplace?category=sacs" className="hover:text-trueme-gold transition-colors duration-300">Sacs</Link></li>
              <li><Link href="/marketplace?category=chaussures" className="hover:text-trueme-gold transition-colors duration-300">Chaussures</Link></li>
              <li><Link href="/marketplace?category=bijoux" className="hover:text-trueme-gold transition-colors duration-300">Bijoux</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-trueme-black uppercase tracking-widest mb-8">VENDRE</h4>
            <ul className="space-y-4 text-sm text-trueme-black/70 font-medium">
              <li><Link href="/vendre" className="hover:text-trueme-gold transition-colors duration-300">Vendre un article</Link></li>
              <li><Link href="/vendre" className="hover:text-trueme-gold transition-colors duration-300">Comment ça marche</Link></li>
              <li><Link href="/authentification" className="hover:text-trueme-gold transition-colors duration-300">Authentification</Link></li>
              <li><Link href="/vendre" className="hover:text-trueme-gold transition-colors duration-300">Tarifs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-trueme-black uppercase tracking-widest mb-8">À PROPOS</h4>
            <ul className="space-y-4 text-sm text-trueme-black/70 font-medium">
              <li><Link href="/concept" className="hover:text-trueme-gold transition-colors duration-300">Notre histoire</Link></li>
              <li><Link href="/contact" className="hover:text-trueme-gold transition-colors duration-300">Contact</Link></li>
              <li><Link href="/contact" className="hover:text-trueme-gold transition-colors duration-300">Conditions</Link></li>
              <li><Link href="/contact" className="hover:text-trueme-gold transition-colors duration-300">Confidentialité</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-trueme-gold/10 text-center text-trueme-black/60 text-xs tracking-wide uppercase">
          <p>&copy; 2025 True Me Marketplace. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default RichFooter
