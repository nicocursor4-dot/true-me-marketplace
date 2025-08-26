import { NextRequest, NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs/promises'
import path from 'path'

// Configuration Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// Transformations identiques au script bulkUpload
const CLOUDINARY_TRANSFORMATIONS = [
  {
    width: 1080, 
    height: 1080, 
    crop: 'pad', 
    background: 'white'
  },
  {
    gravity: 'auto', 
    width: 950, 
    height: 950, 
    crop: 'fill'
  }
]

interface Product {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string | null
}

/**
 * Lit le fichier products.json
 */
async function readProductsFile(): Promise<Product[]> {
  try {
    const filePath = path.join(process.cwd(), '../../data', 'products.json')
    const fileContent = await fs.readFile(filePath, 'utf8')
    return JSON.parse(fileContent)
  } catch (error) {
    console.error('Erreur lecture products.json:', error)
    throw new Error('Impossible de lire le fichier des produits')
  }
}

/**
 * Écrit dans le fichier products.json
 */
async function writeProductsFile(products: Product[]): Promise<void> {
  try {
    const filePath = path.join(process.cwd(), '../../data', 'products.json')
    await fs.writeFile(filePath, JSON.stringify(products, null, 2), 'utf8')
  } catch (error) {
    console.error('Erreur écriture products.json:', error)
    throw new Error('Impossible de sauvegarder les produits')
  }
}

/**
 * Génère un public_id unique pour Cloudinary
 */
function generatePublicId(productId: string): string {
  const timestamp = Date.now()
  const randomSuffix = Math.random().toString(36).substring(2, 8)
  return `product_${productId}_${timestamp}_${randomSuffix}`
}

/**
 * Route POST pour l'upload d'images
 */
export async function POST(request: NextRequest) {
  try {
    // Vérification de la configuration Cloudinary
    if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
      return NextResponse.json(
        { error: 'Configuration Cloudinary manquante' },
        { status: 500 }
      )
    }

    // Extraction des données du formulaire
    const formData = await request.formData()
    const image = formData.get('image') as File
    const productId = formData.get('productId') as string

    // Validation des données
    if (!image || !productId) {
      return NextResponse.json(
        { error: 'Image et productId requis' },
        { status: 400 }
      )
    }

    // Validation du type de fichier
    if (!image.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'Le fichier doit être une image' },
        { status: 400 }
      )
    }

    // Validation de la taille (10MB max)
    const maxSize = 10 * 1024 * 1024 // 10MB
    if (image.size > maxSize) {
      return NextResponse.json(
        { error: 'La taille de l\'image ne peut pas dépasser 10MB' },
        { status: 400 }
      )
    }

    console.log(`📤 Upload démarré pour le produit ${productId}`)

    // Conversion du fichier en buffer pour Cloudinary
    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Upload vers Cloudinary avec transformations
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          public_id: generatePublicId(productId),
          folder: 'products',
          transformation: CLOUDINARY_TRANSFORMATIONS,
          overwrite: false,
          resource_type: 'image',
        },
        (error, result) => {
          if (error) reject(error)
          else resolve(result)
        }
      ).end(buffer)
    }) as any

    console.log(`✅ Upload Cloudinary réussi: ${uploadResult.secure_url}`)

    // Lecture des produits actuels
    const products = await readProductsFile()

    // Recherche du produit à mettre à jour
    const productIndex = products.findIndex(p => p.id === productId)
    if (productIndex === -1) {
      return NextResponse.json(
        { error: 'Produit introuvable' },
        { status: 404 }
      )
    }

    // Mise à jour de l'URL de l'image
    products[productIndex].imageUrl = uploadResult.secure_url

    // Sauvegarde du fichier JSON
    await writeProductsFile(products)

    console.log(`💾 Produit ${productId} mis à jour dans products.json`)

    // Réponse de succès
    return NextResponse.json({
      success: true,
      message: 'Image uploadée avec succès',
      productId: productId,
      imageUrl: uploadResult.secure_url,
      cloudinaryData: {
        public_id: uploadResult.public_id,
        width: uploadResult.width,
        height: uploadResult.height,
        format: uploadResult.format,
        bytes: uploadResult.bytes
      }
    })

  } catch (error: any) {
    console.error('❌ Erreur upload:', error)
    
    return NextResponse.json(
      { 
        error: 'Erreur lors de l\'upload', 
        details: error.message 
      },
      { status: 500 }
    )
  }
}
