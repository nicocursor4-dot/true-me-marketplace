'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import TrueMeNavbar from '@/components/TrueMeNavbar'
import GenderFilterWithDropdown from '@/components/GenderFilterWithDropdown'
import CategorySlider from '@/components/CategorySlider'
import VipBanner from '@/components/VipBanner'
import { productCategories } from '@/data/mockProducts'
import type { Product } from '@/components/ProductCard'
import { ShoppingBag } from 'lucide-react'

export default function Home() {
  const [selectedGender, setSelectedGender] = useState<'all' | 'homme' | 'femme' | 'enfant'>('all')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedBrand, setSelectedBrand] = useState<string>('all')
  const [favorites, setFavorites] = useState<string[]>([])

  // Filtrer les produits par tous les critères sélectionnés
  const filterProducts = (products: Product[]) => {
    let filtered = products

    // Filtrage par genre
    if (selectedGender !== 'all') {
      filtered = filtered.filter(product => product.gender === selectedGender)
    }

    // Filtrage par catégorie
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Filtrage par marque
    if (selectedBrand !== 'all') {
      filtered = filtered.filter(product => product.brand === selectedBrand)
    }

    return filtered
  }

  // Ancienne fonction pour compatibilité
  const filterProductsByGender = (products: Product[]) => {
    return filterProducts(products)
  }

  // Gérer les favoris
  const handleToggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  // Mise à jour des produits avec le statut favori
  const updateProductsWithFavorites = (products: Product[]) => {
    return products.map(product => ({
      ...product,
      isFavorite: favorites.includes(product.id)
    }))
  }

  return (
    <main className="min-h-screen bg-trueme-cream">
      <TrueMeNavbar />
      
      {/* Mini Navigation Interne - Directement après navbar */}
      <section className="px-4 pt-16 pb-2 md:pt-20">
        <div className="max-w-6xl mx-auto">
          <GenderFilterWithDropdown 
            selectedGender={selectedGender}
            onGenderChange={(gender: 'all' | 'homme' | 'femme' | 'enfant') => {
              // Pour 'all', on reste sur la page d'accueil sans filtrer
              if (gender === 'all') {
                setSelectedGender('all')
              }
              // Les autres redirections sont gérées dans le composant
            }}
            className="border-b border-trueme-gold/10"
          />
        </div>
      </section>

      {/* Categories de Produits */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Notre Sélection */}
          <CategorySlider
            title={productCategories['notre-selection'].title}
            products={updateProductsWithFavorites(
              filterProducts(productCategories['notre-selection'].products)
            )}
            categoryLink="/marketplace/notre-selection"
            onToggleFavorite={handleToggleFavorite}
          />

          {/* Sacs à Main Iconiques */}
          <CategorySlider
            title={productCategories['sacs-iconiques'].title}
            products={updateProductsWithFavorites(
              filterProducts(productCategories['sacs-iconiques'].products)
            )}
            categoryLink="/marketplace/sacs-iconiques"
            onToggleFavorite={handleToggleFavorite}
          />

          {/* Bannière CTA VIP - Intégrée entre les catégories */}
          <VipBanner />

          {/* Prêt-à-porter de Créateurs */}
          <CategorySlider
            title={productCategories['pret-a-porter'].title}
            products={updateProductsWithFavorites(
              filterProducts(productCategories['pret-a-porter'].products)
            )}
            categoryLink="/marketplace/pret-a-porter"
            onToggleFavorite={handleToggleFavorite}
          />

          {/* Chaussures de Luxe */}
          <CategorySlider
            title={productCategories['chaussures'].title}
            products={updateProductsWithFavorites(
              filterProducts(productCategories['chaussures'].products)
            )}
            categoryLink="/marketplace/chaussures"
            onToggleFavorite={handleToggleFavorite}
          />

          {/* Bijoux Précieux */}
          <CategorySlider
            title={productCategories['bijoux'].title}
            products={updateProductsWithFavorites(
              filterProducts(productCategories['bijoux'].products)
            )}
            categoryLink="/marketplace/bijoux"
            onToggleFavorite={handleToggleFavorite}
          />

          {/* Accessoires Indispensables */}
          <CategorySlider
            title={productCategories['accessoires'].title}
            products={updateProductsWithFavorites(
              filterProducts(productCategories['accessoires'].products)
            )}
            categoryLink="/marketplace/accessoires"
            onToggleFavorite={handleToggleFavorite}
          />

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
                  <Link href="/marketplace/sacs-iconiques" className="block hover:text-trueme-gold transition-colors">Sacs à main</Link>
                  <Link href="/marketplace/bijoux" className="block hover:text-trueme-gold transition-colors">Bijoux</Link>
                  <Link href="/marketplace/chaussures" className="block hover:text-trueme-gold transition-colors">Chaussures</Link>
                  <Link href="/marketplace/accessoires" className="block hover:text-trueme-gold transition-colors">Accessoires</Link>
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
  )
}
