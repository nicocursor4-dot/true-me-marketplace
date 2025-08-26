import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

interface Product {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string | null
}

/**
 * Route GET pour récupérer la liste des produits
 */
export async function GET() {
  try {
    const filePath = path.join(process.cwd(), '../../data', 'products.json')
    
    // Vérifier l'existence du fichier
    try {
      await fs.access(filePath)
    } catch {
      // Si le fichier n'existe pas, retourner un tableau vide
      return NextResponse.json([])
    }

    // Lire le fichier
    const fileContent = await fs.readFile(filePath, 'utf8')
    const products: Product[] = JSON.parse(fileContent)

    return NextResponse.json(products)

  } catch (error: any) {
    console.error('Erreur lors de la lecture des produits:', error)
    
    return NextResponse.json(
      { error: 'Impossible de charger les produits', details: error.message },
      { status: 500 }
    )
  }
}
