import { Product } from '@/components/ProductCard'

// Données mock pour les produits de luxe
export const mockProducts: Product[] = [
  // Notre Sélection
  {
    id: '1',
    brand: 'Chanel',
    name: 'Classic Flap Bag Medium Caviar',
    price: 'AED 12,500',
    originalPrice: 'AED 15,000',
    condition: 'Excellent',
    certified: true,
    images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400'],
    category: 'notre-selection',
    gender: 'femme',
    size: 'Medium',
    isFavorite: false
  },
  {
    id: '2',
    brand: 'Hermès',
    name: 'Birkin 35 Togo Étoupe',
    price: 'AED 45,000',
    condition: 'Comme neuf',
    certified: true,
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=400'],
    category: 'notre-selection',
    gender: 'femme',
    size: '35',
    isFavorite: false
  },
  {
    id: '3',
    brand: 'Louis Vuitton',
    name: 'Neverfull MM Damier Ebene',
    price: 'AED 3,800',
    originalPrice: 'AED 4,200',
    condition: 'Très bon',
    certified: true,
    images: ['https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=400'],
    category: 'notre-selection',
    gender: 'femme',
    size: 'MM',
    isFavorite: false
  },
  {
    id: '4',
    brand: 'Dior',
    name: 'Lady Dior Medium Cannage',
    price: 'AED 8,500',
    condition: 'Excellent',
    certified: true,
    images: ['https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=400'],
    category: 'notre-selection',
    gender: 'femme',
    size: 'Medium',
    isFavorite: false
  },
  {
    id: '5',
    brand: 'Bottega Veneta',
    name: 'Jodie Mini Intrecciato',
    price: 'AED 6,200',
    condition: 'Comme neuf',
    certified: true,
    images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400'],
    category: 'notre-selection',
    gender: 'femme',
    size: 'Mini',
    isFavorite: false
  },

  // Sacs à Main Iconiques
  {
    id: '6',
    brand: 'Hermès',
    name: 'Kelly 28 Epsom Noir',
    price: 'AED 38,000',
    condition: 'Excellent',
    certified: true,
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=400'],
    category: 'sacs-iconiques',
    gender: 'femme',
    size: '28',
    isFavorite: false
  },
  {
    id: '7',
    brand: 'Chanel',
    name: '2.55 Reissue 226 Aged Calfskin',
    price: 'AED 14,800',
    condition: 'Très bon',
    certified: true,
    images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400'],
    category: 'sacs-iconiques',
    gender: 'femme',
    size: '226',
    isFavorite: false
  },
  {
    id: '8',
    brand: 'Saint Laurent',
    name: 'Sac de Jour Baby Grain de Poudre',
    price: 'AED 4,900',
    condition: 'Excellent',
    certified: true,
    images: ['https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=400'],
    category: 'sacs-iconiques',
    gender: 'femme',
    size: 'Baby',
    isFavorite: false
  },
  {
    id: '9',
    brand: 'Goyard',
    name: 'St. Louis PM Goyardine',
    price: 'AED 3,200',
    condition: 'Bon',
    certified: true,
    images: ['https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=400'],
    category: 'sacs-iconiques',
    gender: 'femme',
    size: 'PM',
    isFavorite: false
  },
  {
    id: '10',
    brand: 'Celine',
    name: 'Belt Bag Micro Grained Calfskin',
    price: 'AED 5,500',
    condition: 'Comme neuf',
    certified: true,
    images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400'],
    category: 'sacs-iconiques',
    gender: 'femme',
    size: 'Micro',
    isFavorite: false
  },

  // Prêt-à-porter de Créateurs
  {
    id: '11',
    brand: 'Brunello Cucinelli',
    name: 'Cashmere Turtleneck Sweater',
    price: 'AED 2,800',
    originalPrice: 'AED 3,200',
    condition: 'Excellent',
    certified: true,
    images: ['https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=400'],
    category: 'pret-a-porter',
    gender: 'homme',
    size: 'L',
    isFavorite: false
  },
  {
    id: '12',
    brand: 'Tom Ford',
    name: 'Tailored Suit Black Wool',
    price: 'AED 8,500',
    condition: 'Comme neuf',
    certified: true,
    images: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400'],
    category: 'pret-a-porter',
    gender: 'homme',
    size: '50',
    isFavorite: false
  },
  {
    id: '13',
    brand: 'The Row',
    name: 'Margaux Coat Wool Cashmere',
    price: 'AED 12,000',
    condition: 'Très bon',
    certified: true,
    images: ['https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=400'],
    category: 'pret-a-porter',
    gender: 'femme',
    size: 'M',
    isFavorite: false
  },
  {
    id: '14',
    brand: 'Loro Piana',
    name: 'Baby Cashmere Scarf',
    price: 'AED 1,800',
    condition: 'Excellent',
    certified: true,
    images: ['https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=400'],
    category: 'pret-a-porter',
    gender: 'femme',
    isFavorite: false
  },
  {
    id: '15',
    brand: 'Ermenegildo Zegna',
    name: 'Silk Tie Classic Pattern',
    price: 'AED 450',
    condition: 'Comme neuf',
    certified: true,
    images: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400'],
    category: 'pret-a-porter',
    gender: 'homme',
    isFavorite: false
  },

  // Chaussures de Luxe
  {
    id: '16',
    brand: 'Christian Louboutin',
    name: 'Pigalle 85 Patent Leather',
    price: 'AED 2,200',
    originalPrice: 'AED 2,800',
    condition: 'Très bon',
    certified: true,
    images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=400'],
    category: 'chaussures',
    gender: 'femme',
    size: '38',
    isFavorite: false
  },
  {
    id: '17',
    brand: 'Manolo Blahnik',
    name: 'Hangisi Satin Pumps',
    price: 'AED 2,800',
    condition: 'Excellent',
    certified: true,
    images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=400'],
    category: 'chaussures',
    gender: 'femme',
    size: '37',
    isFavorite: false
  },
  {
    id: '18',
    brand: 'John Lobb',
    name: 'William Oxford Shoes Black',
    price: 'AED 3,500',
    condition: 'Comme neuf',
    certified: true,
    images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=400'],
    category: 'chaussures',
    gender: 'homme',
    size: '42',
    isFavorite: false
  },
  {
    id: '19',
    brand: 'Golden Goose',
    name: 'Super-Star Sneakers Distressed',
    price: 'AED 1,800',
    condition: 'Très bon',
    certified: true,
    images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=400'],
    category: 'chaussures',
    gender: 'femme',
    size: '39',
    isFavorite: false
  },
  {
    id: '20',
    brand: 'Berluti',
    name: 'Alessandro Leather Boots',
    price: 'AED 4,200',
    condition: 'Excellent',
    certified: true,
    images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=400'],
    category: 'chaussures',
    gender: 'homme',
    size: '41',
    isFavorite: false
  },

  // Bijoux Précieux
  {
    id: '21',
    brand: 'Cartier',
    name: 'Love Bracelet Yellow Gold',
    price: 'AED 18,500',
    condition: 'Excellent',
    certified: true,
    images: ['https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400'],
    category: 'bijoux',
    gender: 'femme',
    size: '17',
    isFavorite: false
  },
  {
    id: '22',
    brand: 'Van Cleef & Arpels',
    name: 'Alhambra Necklace Mother-of-Pearl',
    price: 'AED 12,000',
    condition: 'Comme neuf',
    certified: true,
    images: ['https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400'],
    category: 'bijoux',
    gender: 'femme',
    isFavorite: false
  },
  {
    id: '23',
    brand: 'Tiffany & Co.',
    name: 'Setting Engagement Ring 1.5ct',
    price: 'AED 25,000',
    condition: 'Excellent',
    certified: true,
    images: ['https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400'],
    category: 'bijoux',
    gender: 'femme',
    size: '54',
    isFavorite: false
  },
  {
    id: '24',
    brand: 'Bulgari',
    name: 'B.zero1 Ring White Gold',
    price: 'AED 8,500',
    condition: 'Très bon',
    certified: true,
    images: ['https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400'],
    category: 'bijoux',
    gender: 'femme',
    size: '52',
    isFavorite: false
  },
  {
    id: '25',
    brand: 'David Yurman',
    name: 'Cable Classic Bracelet Sterling Silver',
    price: 'AED 3,200',
    condition: 'Excellent',
    certified: true,
    images: ['https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400'],
    category: 'bijoux',
    gender: 'homme',
    size: 'M',
    isFavorite: false
  },

  // Accessoires Indispensables
  {
    id: '26',
    brand: 'Hermès',
    name: 'Carré 90 Silk Scarf',
    price: 'AED 1,200',
    condition: 'Excellent',
    certified: true,
    images: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=400'],
    category: 'accessoires',
    gender: 'femme',
    isFavorite: false
  },
  {
    id: '27',
    brand: 'Ray-Ban',
    name: 'Aviator Classic Gold Frame',
    price: 'AED 450',
    originalPrice: 'AED 580',
    condition: 'Très bon',
    certified: true,
    images: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=400'],
    category: 'accessoires',
    gender: 'homme',
    isFavorite: false
  },
  {
    id: '28',
    brand: 'Gucci',
    name: 'GG Marmont Belt Leather',
    price: 'AED 1,800',
    condition: 'Comme neuf',
    certified: true,
    images: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=400'],
    category: 'accessoires',
    gender: 'femme',
    size: '85',
    isFavorite: false
  },
  {
    id: '29',
    brand: 'Louis Vuitton',
    name: 'Multiple Wallet Damier Graphite',
    price: 'AED 1,200',
    condition: 'Excellent',
    certified: true,
    images: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=400'],
    category: 'accessoires',
    gender: 'homme',
    isFavorite: false
  },
  {
    id: '30',
    brand: 'Bottega Veneta',
    name: 'Intrecciato Card Case',
    price: 'AED 850',
    condition: 'Très bon',
    certified: true,
    images: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=400'],
    category: 'accessoires',
    gender: 'femme',
    isFavorite: false
  }
]

// Organisation des produits par catégorie
export const productCategories = {
  'notre-selection': {
    title: 'Notre Sélection',
    description: 'Articles mis en avant par notre équipe',
    products: mockProducts.filter(p => p.category === 'notre-selection')
  },
  'sacs-iconiques': {
    title: 'Sacs à Main Iconiques',
    description: 'Les modèles les plus recherchés et emblématiques',
    products: mockProducts.filter(p => p.category === 'sacs-iconiques')
  },
  'pret-a-porter': {
    title: 'Prêt-à-porter de Créateurs',
    description: 'Vêtements de marques de luxe',
    products: mockProducts.filter(p => p.category === 'pret-a-porter')
  },
  'chaussures': {
    title: 'Chaussures de Luxe',
    description: 'Escarpins, sneakers, bottes, etc.',
    products: mockProducts.filter(p => p.category === 'chaussures')
  },
  'bijoux': {
    title: 'Bijoux Précieux',
    description: 'Colliers, bracelets, bagues (hors montres)',
    products: mockProducts.filter(p => p.category === 'bijoux')
  },
  'accessoires': {
    title: 'Accessoires Indispensables',
    description: 'Foulards, ceintures, lunettes de soleil, petite maroquinerie',
    products: mockProducts.filter(p => p.category === 'accessoires')
  }
}
