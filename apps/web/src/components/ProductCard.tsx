'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Heart, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export interface Product {
  id: string
  brand: string
  name: string
  price: string
  originalPrice?: string
  condition: 'Comme neuf' | 'Excellent' | 'Très bon' | 'Bon'
  certified: boolean
  images: string[]
  category: string
  gender: 'homme' | 'femme' | 'enfant'
  size?: string
  isFavorite?: boolean
}

interface ProductCardProps {
  product: Product
  onToggleFavorite?: (productId: string) => void
  className?: string
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onToggleFavorite,
  className = ""
}) => {
  const [imageError, setImageError] = useState(false)
  const [coverImageIndex, setCoverImageIndex] = useState(0)

  // Charger l'index de l'image de couverture depuis la configuration admin
  useEffect(() => {
    const savedConfig = localStorage.getItem('trueme-admin-cover-images')
    if (savedConfig) {
      try {
        const parsedConfig = JSON.parse(savedConfig)
        const productImageIndex = parsedConfig[product.id]
        if (productImageIndex !== undefined) {
          setCoverImageIndex(productImageIndex)
        }
      } catch (error) {
        console.error('Erreur lors du chargement de la configuration:', error)
      }
    }
  }, [product.id])

  // Obtenir l'image de couverture actuelle
  const getCoverImage = () => {
    return product.images[coverImageIndex] || product.images[0]
  }

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onToggleFavorite?.(product.id)
  }

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'Comme neuf': return 'bg-green-600'
      case 'Excellent': return 'bg-green-500'
      case 'Très bon': return 'bg-yellow-600'
      case 'Bon': return 'bg-orange-500'
      default: return 'bg-gray-400'
    }
  }

  const getConditionTextColor = (condition: string) => {
    switch (condition) {
      case 'Comme neuf': return 'text-green-600'
      case 'Excellent': return 'text-green-500'
      case 'Très bon': return 'text-yellow-600'
      case 'Bon': return 'text-orange-500'
      default: return 'text-gray-600'
    }
  }

  return (
    <Link href={`/product/${product.id}`} className={`group block ${className}`}>
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 ease-out overflow-hidden border border-gray-100 hover:border-trueme-gold/30 hover:-translate-y-0.5 sm:hover:-translate-y-1 transform">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-white">
          {!imageError ? (
            <Image
              src={getCoverImage() || ''}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              onError={() => setImageError(true)}
              priority={false}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-trueme-gold/10 to-trueme-gold/5">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl text-trueme-gold mb-2">👜</div>
                <p className="text-xs sm:text-sm text-trueme-light">{product.brand}</p>
              </div>
            </div>
          )}

          {/* Favorite Button */}
          <button
            onClick={handleFavoriteClick}
            className={`absolute top-2 sm:top-3 right-2 sm:right-3 p-1.5 sm:p-2 rounded-full backdrop-blur-sm transition-all duration-300 touch-manipulation ${
              product.isFavorite
                ? 'bg-red-500/20 text-red-500'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <Heart 
              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${product.isFavorite ? 'fill-current' : ''}`}
            />
          </button>

          {/* Certification Badge */}
          {product.certified && (
            <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-trueme-gold/90 text-black px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full flex items-center gap-0.5 sm:gap-1">
              <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              <span className="text-[10px] sm:text-xs font-medium">Certifié</span>
            </div>
          )}

          {/* Size Badge */}
          {product.size && (
            <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 bg-black/60 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs font-medium">
              Taille {product.size}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div className="min-w-0 flex-1">
              <p className="text-trueme-gold font-medium text-sm mb-1 truncate">
                {product.brand.toUpperCase()}
              </p>
              <h3 className="text-gray-900 font-semibold text-base leading-tight mb-3 line-clamp-2 min-h-[2.5rem]">
                {product.name}
              </h3>
            </div>
          </div>

          {/* Condition */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              <div className={`w-2 h-2 rounded-full ${getConditionColor(product.condition)}`}></div>
              <span className={`text-sm font-medium ${getConditionTextColor(product.condition)}`}>
                État : {product.condition}
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-gray-900 font-bold text-lg">
                {product.price}
              </span>
            </div>
            <button
              onClick={handleFavoriteClick}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <Heart 
                className={`w-5 h-5 transition-colors ${
                  product.isFavorite 
                    ? 'fill-red-500 text-red-500' 
                    : 'text-gray-400 hover:text-red-500'
                }`} 
              />
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
