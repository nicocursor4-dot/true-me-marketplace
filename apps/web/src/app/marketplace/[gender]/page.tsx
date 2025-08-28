'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import TrueMeNavbar from '@/components/TrueMeNavbar'
import CategorySlider from '@/components/CategorySlider'
import ProductCard from '@/components/ProductCard'
import { productCategories } from '@/data/mockProducts'
import type { Product } from '@/components/ProductCard'

interface MarketplacePageProps {
  params: { gender: string }
}

function MarketplaceContent({ gender }: { gender: string }) {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const subcategory = searchParams.get('subcategory')
  
  const [favorites, setFavorites] = useState<string[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  // Fonction pour filtrer les produits
  const filterProducts = () => {
    // Récupérer tous les produits de toutes les catégories
    const allProducts: Product[] = Object.values(productCategories).flatMap(cat => cat.products as Product[])
    
    let filtered = allProducts

    // Filtrer par genre
    if (gender !== 'all') {
      filtered = filtered.filter(product => product.gender === gender)
    }

    // Filtrer par catégorie si spécifiée
    if (category) {
      filtered = filtered.filter(product => {
        // Mapping des catégories
        const categoryMap: { [key: string]: string[] } = {
          'vetements': ['tops', 'dresses', 'outerwear'],
          'chaussures': ['shoes', 'sneakers', 'boots'],
          'sacs': ['bags', 'handbags', 'backpacks'],
          'accessoires': ['accessories', 'jewelry', 'watches']
        }
        
        return categoryMap[category]?.includes(product.category) || product.category === category
      })
    }

    // Filtrer par sous-catégorie si spécifiée
    if (subcategory) {
      filtered = filtered.filter(product => {
        const productName = product.name.toLowerCase()
        const subcat = subcategory.replace(/-/g, ' ').toLowerCase()
        return productName.includes(subcat) || product.category.includes(subcat)
      })
    }

    return filtered
  }

  useEffect(() => {
    setFilteredProducts(filterProducts())
  }, [gender, category, subcategory])

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

  // Titre de la page
  const getPageTitle = () => {
    if (subcategory) {
      return `${subcategory.replace(/-/g, ' ')} - ${gender.charAt(0).toUpperCase() + gender.slice(1)}`
    }
    if (category) {
      const categoryNames: { [key: string]: string } = {
        'vetements': 'Vêtements',
        'chaussures': 'Chaussures', 
        'sacs': 'Sacs',
        'accessoires': 'Accessoires'
      }
      return `${categoryNames[category] || category} ${gender.charAt(0).toUpperCase() + gender.slice(1)}`
    }
    return `${gender.charAt(0).toUpperCase() + gender.slice(1)}`
  }

  return (
    <main className="min-h-screen bg-trueme-cream">
      <TrueMeNavbar />
      
      {/* Header de la page */}
      <section className="px-4 pt-16 pb-8 md:pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-light text-trueme mb-4 tracking-wide">
              {getPageTitle()}
            </h1>
            <p className="text-trueme-light text-lg">
              {filteredProducts.length} produit{filteredProducts.length !== 1 ? 's' : ''} de luxe authentifié{filteredProducts.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </section>

      {/* Grille de produits */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {updateProductsWithFavorites(filteredProducts).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onToggleFavorite={handleToggleFavorite}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h2 className="text-2xl font-light text-trueme mb-2">Aucun produit trouvé</h2>
              <p className="text-trueme-light">
                Essayez de modifier vos critères de recherche ou explorez d'autres catégories.
              </p>
            </div>
          )}
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
                  <a href="/marketplace/homme" className="block hover:text-trueme-gold transition-colors">Homme</a>
                  <a href="/marketplace/femme" className="block hover:text-trueme-gold transition-colors">Femme</a>
                  <a href="/marketplace/enfant" className="block hover:text-trueme-gold transition-colors">Enfant</a>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-trueme mb-4">Services</h4>
                <div className="space-y-2 text-sm text-trueme-light">
                  <a href="/authentification" className="block hover:text-trueme-gold transition-colors">Authentification</a>
                  <a href="/vip" className="block hover:text-trueme-gold transition-colors">Services VIP</a>
                  <a href="/brands" className="block hover:text-trueme-gold transition-colors">Marques</a>
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
                  <a href="/privacy" className="hover:text-trueme-gold transition-colors">Confidentialité</a>
                  <a href="/terms" className="hover:text-trueme-gold transition-colors">Conditions</a>
                  <a href="/cookies" className="hover:text-trueme-gold transition-colors">Cookies</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default function MarketplacePage({ params }: MarketplacePageProps) {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-trueme-cream flex items-center justify-center">
        <div className="text-trueme text-xl">Chargement...</div>
      </div>
    }>
      <MarketplaceContent gender={params.gender} />
    </Suspense>
  )
}
