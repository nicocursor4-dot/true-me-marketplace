'use client'

import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Heart, CheckCircle, ArrowLeft, Share2, Star, Shield, Truck, RefreshCw, MessageCircle } from 'lucide-react'
import { products, Product } from '@/data/realProducts'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const ProductPage = () => {
  const params = useParams()
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)
  const [imageError, setImageError] = useState<Record<number, boolean>>({})

  useEffect(() => {
    if (params.id) {
      const foundProduct = products.find(p => p.id === params.id)
      if (foundProduct) {
        setProduct(foundProduct)
        setIsFavorite(foundProduct.isFavorite || false)
      }
    }
  }, [params.id])

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite)
    // TODO: Sync with backend
  }

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'Comme neuf': return 'text-emerald-600 bg-emerald-50 border-emerald-100'
      case 'Excellent': return 'text-emerald-500 bg-emerald-50 border-emerald-100'
      case 'Très bon': return 'text-amber-600 bg-amber-50 border-amber-100'
      case 'Bon': return 'text-orange-500 bg-orange-50 border-orange-100'
      default: return 'text-gray-500 bg-gray-50 border-gray-100'
    }
  }

  const handleImageError = () => {
    setImageError(prev => ({ ...prev, [selectedImageIndex]: true }))
  }

  const selectedImage = product?.images[selectedImageIndex] || ''

  if (!product) {
    return (
      <div className="min-h-screen bg-trueme-cream flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Search className="w-10 h-10 text-trueme-gold" />
          </div>
          <h1 className="text-3xl font-serif text-trueme-black mb-3">Produit introuvable</h1>
          <p className="text-trueme-secondary mb-8 font-light">Ce produit n&apos;existe pas ou a été retiré de notre catalogue.</p>
          <button
            onClick={() => router.push('/marketplace')}
            className="bg-trueme-black text-white px-8 py-4 rounded-full font-medium hover:bg-trueme-gold transition-all duration-300"
          >
            Retour au marketplace
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-trueme-cream selection:bg-trueme-gold/20">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-gray-100 z-50 transition-all duration-300">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-trueme-black hover:text-trueme-gold transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-trueme-gold/10 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <span className="font-medium hidden sm:block">Retour</span>
          </button>

          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-trueme-black hover:text-trueme-gold hover:bg-trueme-gold/10 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
            <button
              onClick={handleFavoriteToggle}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isFavorite ? 'text-red-500 bg-red-50' : 'bg-gray-50 text-trueme-black hover:text-red-500 hover:bg-red-50'
                }`}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-4 md:px-8 py-12 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Images Section */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="aspect-[4/3] bg-white rounded-[2.5rem] overflow-hidden shadow-sm relative group"
            >
              {!imageError[selectedImageIndex] ? (
                <Image
                  src={selectedImage}
                  alt={`${product.brand} ${product.name}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={handleImageError}
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <div className="text-6xl text-gray-300 mb-4">👜</div>
                    <p className="text-trueme-secondary">{product.brand}</p>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
              >
                {product.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    className={`flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all duration-300 relative ${selectedImageIndex === index
                        ? 'border-trueme-gold ring-2 ring-trueme-gold/20'
                        : 'border-transparent hover:border-gray-200 opacity-70 hover:opacity-100'
                      }`}
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <Image
                      src={image}
                      alt={`${product.brand} ${product.name} ${index + 1}`}
                      fill
                      sizes="96px"
                      className="object-cover"
                      onError={() => handleImageError()}
                    />
                  </button>
                ))}
              </motion.div>
            )}
          </div>

          {/* Product Details */}
          <div className="lg:col-span-5 space-y-8 sticky top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Brand & Certification */}
              <div className="flex items-center justify-between mb-4">
                <Link href={`/brands/${product.brand.toLowerCase()}`} className="text-lg font-medium text-trueme-gold tracking-wide uppercase hover:underline underline-offset-4">
                  {product.brand}
                </Link>
                {product.certified && (
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                    <CheckCircle className="w-4 h-4 text-trueme-gold" />
                    <span className="text-xs font-bold text-trueme-black uppercase tracking-wider">Authentifié</span>
                  </div>
                )}
              </div>

              {/* Product Name */}
              <h1 className="text-4xl md:text-5xl font-serif text-trueme-black mb-6 leading-tight">
                {product.name}
              </h1>

              {/* Condition & Details */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className={`inline-flex items-center px-4 py-2 rounded-full border text-sm font-medium ${getConditionColor(product.condition)}`}>
                  <Star className="w-4 h-4 mr-2" />
                  État : {product.condition}
                </div>

                {product.size && (
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-trueme-secondary">
                    Taille : <span className="text-trueme-black font-medium ml-1">{product.size}</span>
                  </div>
                )}
              </div>

              {/* Price & CTA */}
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 space-y-6">
                <div className="flex items-end gap-4">
                  <span className="text-4xl font-bold text-trueme-black">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-400 line-through mb-1 font-light">
                      {product.originalPrice}
                    </span>
                  )}
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-trueme-black text-white py-4 rounded-xl font-medium text-lg hover:bg-trueme-gold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    Acheter maintenant
                  </button>

                  <div className="grid grid-cols-2 gap-3">
                    <button className="py-3 border border-gray-200 text-trueme-black rounded-xl font-medium hover:border-trueme-gold hover:text-trueme-gold transition-colors bg-white">
                      Faire une offre
                    </button>
                    <button className="py-3 border border-gray-200 text-trueme-black rounded-xl font-medium hover:bg-gray-50 transition-colors bg-white flex items-center justify-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Contacter
                    </button>
                  </div>
                </div>
              </div>

              {/* Description */}
              {product.description && (
                <div className="prose prose-stone max-w-none">
                  <h3 className="font-serif text-xl text-trueme-black mb-3">Description</h3>
                  <p className="text-trueme-secondary leading-relaxed font-light">{product.description}</p>
                </div>
              )}

              {/* Specifications Grid */}
              <div className="grid grid-cols-2 gap-4 py-6 border-t border-b border-gray-100">
                {product.color && (
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Couleur</span>
                    <span className="text-trueme-black font-medium">{product.color}</span>
                  </div>
                )}
                {product.material && (
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Matière</span>
                    <span className="text-trueme-black font-medium">{product.material}</span>
                  </div>
                )}
                {product.heelHeight && (
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Hauteur talon</span>
                    <span className="text-trueme-black font-medium">{product.heelHeight}</span>
                  </div>
                )}
                <div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Référence</span>
                  <span className="text-trueme-black font-medium font-mono text-sm">{product.id.substring(0, 8).toUpperCase()}</span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-50 hover:border-trueme-gold/20 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-trueme-gold/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-trueme-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-trueme-black mb-1">Authenticité Garantie</h4>
                    <p className="text-sm text-trueme-secondary font-light">Chaque pièce est minutieusement inspectée par nos experts.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-50 hover:border-trueme-gold/20 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-trueme-gold/10 flex items-center justify-center flex-shrink-0">
                    <Truck className="w-5 h-5 text-trueme-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-trueme-black mb-1">Livraison Sécurisée</h4>
                    <p className="text-sm text-trueme-secondary font-light">Expédition assurée et suivie jusqu'à chez vous.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-50 hover:border-trueme-gold/20 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-trueme-gold/10 flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="w-5 h-5 text-trueme-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-trueme-black mb-1">Retours Simples</h4>
                    <p className="text-sm text-trueme-secondary font-light">14 jours pour changer d'avis, remboursement garanti.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProductPage
