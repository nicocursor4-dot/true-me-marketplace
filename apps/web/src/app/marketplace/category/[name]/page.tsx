'use client'

import { useParams } from 'next/navigation'
import { useState } from 'react'
import LegacyNavbar from '@/components/LegacyNavbar'
import RichFooter from '@/components/layout/RichFooter'
import ProductCard from '@/components/ProductCard'
import { realProductCategories } from '@/data/realProducts'
import { Filter, Grid, List } from 'lucide-react'

export default function CategoryPage() {
  const params = useParams()
  const categoryName = params.name as string
  const [favorites, setFavorites] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('name')

  const categoryData = realProductCategories[categoryName as keyof typeof realProductCategories]
  
  if (!categoryData) {
    return (
      <main className="min-h-screen bg-trueme-cream">
        <LegacyNavbar />
        <div className="pt-32 text-center">
          <h1 className="text-2xl font-bold text-trueme">Catégorie non trouvée</h1>
        </div>
      </main>
    )
  }

  const handleToggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const sortedProducts = [...categoryData.products].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return parseFloat(a.price.replace(/[^\d]/g, '')) - parseFloat(b.price.replace(/[^\d]/g, ''))
      case 'price-desc':
        return parseFloat(b.price.replace(/[^\d]/g, '')) - parseFloat(a.price.replace(/[^\d]/g, ''))
      case 'brand':
        return a.brand.localeCompare(b.brand)
      default:
        return a.name.localeCompare(b.name)
    }
  })

  const productsWithFavorites = sortedProducts.map(product => ({
    ...product,
    isFavorite: favorites.includes(product.id)
  }))

  return (
    <main className="min-h-screen bg-trueme-cream">
      <LegacyNavbar />
      
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-trueme mb-4">{categoryData.title}</h1>
            <p className="text-trueme-light text-lg">{productsWithFavorites.length} articles disponibles</p>
          </div>

          {/* Filters & Controls */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/30">
            <div className="flex items-center gap-4">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-trueme focus:outline-none focus:ring-2 focus:ring-trueme-gold"
              >
                <option value="name">Trier par nom</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
                <option value="brand">Marque</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-trueme-gold text-black' 
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-trueme-gold text-black' 
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
              : 'space-y-4'
          }`}>
            {productsWithFavorites.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onToggleFavorite={handleToggleFavorite}
                className={viewMode === 'list' ? 'flex flex-row' : ''}
              />
            ))}
          </div>

          {productsWithFavorites.length === 0 && (
            <div className="text-center py-12">
              <p className="text-trueme-light text-lg">Aucun produit disponible dans cette catégorie.</p>
            </div>
          )}
        </div>
      </div>
      <RichFooter />
    </main>
  )
}
