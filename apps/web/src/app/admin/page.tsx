'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Upload, AlertTriangle, Check, Loader2, Image as ImageIcon } from 'lucide-react'

interface Product {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string | null
}

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [uploadingProducts, setUploadingProducts] = useState<Set<string>>(new Set())
  const router = useRouter()

  // Charger les produits au montage du composant
  useEffect(() => {
    fetchProducts()
  }, [])

  /**
   * Récupère la liste des produits depuis l'API
   */
  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products')
      if (response.ok) {
        const data = await response.json()
        setProducts(data)
      } else {
        console.error('Erreur lors du chargement des produits')
      }
    } catch (error) {
      console.error('Erreur:', error)
    } finally {
      setLoading(false)
    }
  }

  /**
   * Gère l'upload d'une image pour un produit
   */
  const handleImageUpload = async (productId: string, file: File) => {
    // Ajouter le produit à la liste des uploads en cours
    setUploadingProducts(prev => new Set(prev).add(productId))

    try {
      // Créer FormData avec le fichier et l'ID du produit
      const formData = new FormData()
      formData.append('image', file)
      formData.append('productId', productId)

      // Envoyer à l'API d'upload
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        const result = await response.json()
        
        // Mettre à jour le produit dans l'état local
        setProducts(prev =>
          prev.map(product =>
            product.id === productId
              ? { ...product, imageUrl: result.imageUrl }
              : product
          )
        )
        
        console.log('✅ Upload réussi:', result)
      } else {
        const error = await response.json()
        console.error('❌ Erreur d\'upload:', error)
        alert(`Erreur d'upload: ${error.message}`)
      }
    } catch (error) {
      console.error('❌ Erreur réseau:', error)
      alert('Erreur de connexion lors de l\'upload')
    } finally {
      // Retirer le produit de la liste des uploads en cours
      setUploadingProducts(prev => {
        const newSet = new Set(prev)
        newSet.delete(productId)
        return newSet
      })
    }
  }

  /**
   * Formate le prix en euros
   */
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(price)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-trueme-cream flex items-center justify-center">
        <div className="flex items-center gap-3">
          <Loader2 className="w-6 h-6 animate-spin text-trueme-gold" />
          <span className="text-trueme">Chargement des produits...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-trueme-cream">
      {/* Bandeau d'avertissement */}
      <div className="bg-red-600 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 flex-shrink-0" />
          <span className="font-medium">
            ⚠️ ATTENTION : Cette page est non protégée et destinée à un usage interne uniquement.
          </span>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white shadow-sm border-b border-trueme-gold/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-serif text-trueme">Administration des Produits</h1>
              <p className="text-trueme-secondary mt-1">
                Gestion des images et informations produits
              </p>
            </div>
            <div className="bg-trueme-gold/10 px-4 py-2 rounded-lg">
              <span className="text-sm font-medium text-trueme">
                {products.length} produit{products.length > 1 ? 's' : ''}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Liste des produits */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const isUploading = uploadingProducts.has(product.id)
            
            return (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm border border-trueme-gold/10 overflow-hidden hover:shadow-md transition-all duration-200"
              >
                {/* Image Section */}
                <div className="relative h-48 bg-gray-50 flex items-center justify-center">
                  {product.imageUrl ? (
                    <>
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-green-500 text-white p-1 rounded-full">
                        <Check className="w-4 h-4" />
                      </div>
                    </>
                  ) : (
                    <div className="text-center">
                      <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <span className="text-sm text-gray-500">Aucune image</span>
                    </div>
                  )}
                  
                  {isUploading && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="bg-white rounded-lg p-4 flex items-center gap-3">
                        <Loader2 className="w-5 h-5 animate-spin text-trueme-gold" />
                        <span className="text-sm font-medium text-trueme">Upload...</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="font-semibold text-trueme text-lg line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-trueme-secondary text-sm mt-1 line-clamp-2">
                      {product.description}
                    </p>
                    <p className="text-trueme-gold font-bold text-lg mt-2">
                      {formatPrice(product.price)}
                    </p>
                  </div>

                  {/* Upload Section */}
                  <div className="border-t border-gray-100 pt-4">
                    <label 
                      htmlFor={`file-${product.id}`}
                      className={`
                        w-full flex items-center justify-center gap-2 px-4 py-3 
                        border-2 border-dashed rounded-lg cursor-pointer transition-all duration-200
                        ${isUploading 
                          ? 'border-gray-300 bg-gray-50 cursor-not-allowed' 
                          : 'border-trueme-gold/30 hover:border-trueme-gold/50 hover:bg-trueme-gold/5'
                        }
                      `}
                    >
                      {isUploading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-trueme-gold" />
                          <span className="text-sm font-medium text-trueme-secondary">
                            Upload en cours...
                          </span>
                        </>
                      ) : (
                        <>
                          <Upload className="w-4 h-4 text-trueme-gold" />
                          <span className="text-sm font-medium text-trueme">
                            {product.imageUrl ? 'Changer l\'image' : 'Ajouter une image'}
                          </span>
                        </>
                      )}
                    </label>
                    
                    <input
                      id={`file-${product.id}`}
                      type="file"
                      accept="image/*"
                      disabled={isUploading}
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) {
                          handleImageUpload(product.id, file)
                        }
                      }}
                    />
                    
                    <p className="text-xs text-trueme-secondary mt-2 text-center">
                      Formats acceptés: JPG, PNG, WEBP (max 10MB)
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-trueme mb-2">Aucun produit trouvé</h3>
            <p className="text-trueme-secondary">
              Vérifiez le fichier /data/products.json
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-trueme-gold/10 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-trueme-secondary">
            TRUE ME Marketplace - Interface d'administration v1.0
          </p>
        </div>
      </footer>
    </div>
  )
}
