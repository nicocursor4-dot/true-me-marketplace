'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import LegacyNavbar from '@/components/LegacyNavbar'
import RichFooter from '@/components/layout/RichFooter'
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
  const filterProducts = React.useCallback(() => {
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
  }, [gender, category, subcategory])

  useEffect(() => {
    setFilteredProducts(filterProducts())
  }, [filterProducts])

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
      <LegacyNavbar />
      
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
                Essayez de modifier vos critères de recherche ou explorez d&apos;autres catégories.
              </p>
            </div>
          )}
        </div>
      </section>

      <RichFooter />
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
