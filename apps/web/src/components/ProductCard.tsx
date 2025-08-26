'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Heart, CheckCircle } from 'lucide-react'

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

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onToggleFavorite?.(product.id)
  }

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'Comme neuf': return 'text-green-600'
      case 'Excellent': return 'text-green-500'
      case 'Très bon': return 'text-yellow-600'
      case 'Bon': return 'text-orange-500'
      default: return 'text-trueme-light'
    }
  }

  return (
    <Link href={`/marketplace/product/${product.id}`} className={`group ${className}`}>
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-trueme-gold/20">
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">
          {!imageError ? (
            <img
              src={product.images[0]}
              alt={`${product.brand} ${product.name}`}
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-trueme-gold/10 to-trueme-gold/5">
              <div className="text-center">
                <div className="text-4xl text-trueme-gold mb-2">👜</div>
                <p className="text-sm text-trueme-light">{product.brand}</p>
              </div>
            </div>
          )}

          {/* Favorite Button */}
          <button
            onClick={handleFavoriteClick}
            className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
              product.isFavorite
                ? 'bg-red-500/20 text-red-500'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <Heart 
              className={`w-4 h-4 ${product.isFavorite ? 'fill-current' : ''}`}
            />
          </button>

          {/* Certification Badge */}
          {product.certified && (
            <div className="absolute top-3 left-3 bg-trueme-gold/90 text-black px-2 py-1 rounded-full flex items-center gap-1">
              <CheckCircle className="w-3 h-3" />
              <span className="text-xs font-medium">Certifié</span>
            </div>
          )}

          {/* Size Badge */}
          {product.size && (
            <div className="absolute bottom-3 left-3 bg-black/60 text-white px-2 py-1 rounded text-xs font-medium">
              Taille {product.size}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-2">
          {/* Brand */}
          <p className="text-sm font-medium text-trueme-gold tracking-wide uppercase">
            {product.brand}
          </p>

          {/* Product Name */}
          <h3 className="text-base font-semibold text-trueme line-clamp-2 group-hover:text-trueme-gold transition-colors duration-300">
            {product.name}
          </h3>

          {/* Condition */}
          <p className={`text-sm font-medium ${getConditionColor(product.condition)}`}>
            État : {product.condition}
          </p>

          {/* Price */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-trueme">
                {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  {product.originalPrice}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
