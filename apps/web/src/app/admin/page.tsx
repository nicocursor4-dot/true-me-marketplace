'use client'

import React, { useState } from 'react'
import { AlertTriangle, Image as ImageIcon, Eye, Save } from 'lucide-react'
import { products } from '@/data/realProducts'
import Image from 'next/image'

export default function AdminPage() {
  const [localProducts, setLocalProducts] = useState(products)
  const [selectedImageIndex, setSelectedImageIndex] = useState<{[key: string]: number}>({})
  const [previewProduct, setPreviewProduct] = useState<string | null>(null)

  // Charger la configuration sauvegardée au démarrage
  React.useEffect(() => {
    const savedConfig = localStorage.getItem('trueme-admin-cover-images')
    if (savedConfig) {
      try {
        const parsedConfig = JSON.parse(savedConfig)
        setSelectedImageIndex(parsedConfig)
      } catch (error) {
        console.error('Erreur lors du chargement de la configuration:', error)
      }
    } else {
      // Configuration par défaut si aucune sauvegarde
      const initialSelection: {[key: string]: number} = {}
      products.forEach(product => {
        initialSelection[product.id] = 0
      })
      setSelectedImageIndex(initialSelection)
    }
  }, [])

  // Changer l'image de couverture d'un produit
  const handleImageSelection = (productId: string, imageIndex: number) => {
    setSelectedImageIndex(prev => ({
      ...prev,
      [productId]: imageIndex
    }))
  }

  // Sauvegarder les modifications dans localStorage
  const handleSave = () => {
    try {
      localStorage.setItem('trueme-admin-cover-images', JSON.stringify(selectedImageIndex))
      console.log('Configuration des images de couverture sauvegardée:', selectedImageIndex)
      alert('✅ Configuration sauvegardée avec succès ! Les modifications seront appliquées sur le site.')
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error)
      alert('❌ Erreur lors de la sauvegarde. Veuillez réessayer.')
    }
  }

  // Obtenir l'image de couverture actuelle pour un produit
  const getCoverImage = (product: any) => {
    const imageIndex = selectedImageIndex[product.id] || 0
    return product.images[imageIndex] || product.images[0]
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
                Gestion des images de couverture pour les cartes produits
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-trueme-gold/10 px-4 py-2 rounded-lg">
                <span className="text-sm font-medium text-trueme">
                  {products.length} produit{products.length > 1 ? 's' : ''}
                </span>
              </div>
              <button
                onClick={handleSave}
                className="bg-trueme-gold text-black px-6 py-2 rounded-lg font-medium hover:bg-trueme-gold/90 transition-colors flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Sauvegarder
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Liste des produits */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.map((product) => {
            const currentImageIndex = selectedImageIndex[product.id] || 0
            
            return (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm border border-trueme-gold/10 overflow-hidden hover:shadow-md transition-all duration-200"
              >
                {/* Aperçu de la carte produit */}
                <div className="bg-gray-50 p-4">
                  <h4 className="text-sm font-medium text-trueme mb-2 flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    Aperçu de la carte
                  </h4>
                  <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                    <div className="relative aspect-square overflow-hidden bg-white">
                      <Image
                        src={getCoverImage(product)}
                        alt={`${product.brand} ${product.name}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center"
                        onError={() => { /* ignore */ }}
                      />
                      <div className="absolute top-2 right-2 bg-trueme-gold/90 text-black px-1.5 py-0.5 rounded-full flex items-center gap-0.5 text-xs">
                        ✓ Certifié
                      </div>
                      {product.size && (
                        <div className="absolute bottom-2 left-2 bg-black/60 text-white px-1.5 py-0.5 rounded text-xs">
                          Taille {product.size}
                        </div>
                      )}
                    </div>
                    <div className="p-3">
                      <p className="text-trueme-gold font-medium text-xs mb-1">
                        {product.brand.toUpperCase()}
                      </p>
                      <h3 className="text-gray-900 font-semibold text-sm leading-tight mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-900 font-bold text-sm">
                          {product.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Informations produit */}
                <div className="p-6 border-t border-gray-100">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-trueme-gold font-medium text-sm">{product.brand}</span>
                      <span className="text-xs bg-trueme-gold/10 text-trueme px-2 py-0.5 rounded">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-trueme text-lg line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-trueme font-bold text-lg mt-1">
                      {product.price}
                    </p>
                  </div>

                  {/* Sélection d'image */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-trueme">Images disponibles ({product.images.length})</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {product.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => handleImageSelection(product.id, index)}
                          className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                            currentImageIndex === index 
                              ? 'border-trueme-gold shadow-lg' 
                              : 'border-gray-200 hover:border-trueme-gold/50'
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`Image ${index + 1}`}
                            fill
                            sizes="128px"
                            className="object-cover"
                            onError={() => { /* ignore */ }}
                          />
                          {currentImageIndex === index && (
                            <div className="absolute inset-0 bg-trueme-gold/20 flex items-center justify-center">
                              <div className="bg-trueme-gold text-black rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                                ✓
                              </div>
                            </div>
                          )}
                          <div className="absolute bottom-1 right-1 bg-black/60 text-white text-xs px-1 rounded">
                            {index + 1}
                          </div>
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-trueme-secondary">
                      Cliquez sur une image pour la définir comme image de couverture
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
              Vérifiez le fichier /data/realProducts.ts
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
