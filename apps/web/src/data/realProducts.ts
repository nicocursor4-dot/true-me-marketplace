// Real Products Database generated from PHOTOS SITE TM
// Brands decoded: CL = Christian Louboutin, JC = Jimmy Choo, SL = Saint Laurent

export interface Product {
  id: string
  name: string
  brand: string
  category: string
  subcategory: string
  gender: 'homme' | 'femme' | 'enfant'
  size?: string
  price: string
  originalPrice?: string
  images: string[]
  description?: string
  condition: 'Comme neuf' | 'Excellent' | 'Très bon' | 'Bon'
  certified: boolean
  color?: string
  heelHeight?: string
  material?: string
  isFavorite?: boolean
}

export const products: Product[] = [
  // CHAUSSURES - Christian Louboutin
  {
    id: 'cl-kate-bleu-canard-36',
    name: 'Kate Pumps Bleu Canard',
    brand: 'Christian Louboutin',
    category: 'Chaussures', 
    subcategory: 'Escarpins',
    gender: 'femme',
    size: '36',
    price: '890€',
    certified: true,
    images: [
      '/images/products/PHOTOS SITE TM/CHAUSSURES/CL KateBleu canard 36 Hauteur Talon 10 cm/CL Bleu C 1.svg',
      '/images/products/PHOTOS SITE TM/CHAUSSURES/CL KateBleu canard 36 Hauteur Talon 10 cm/CL Bleu C 2.svg',
      '/images/products/PHOTOS SITE TM/CHAUSSURES/CL KateBleu canard 36 Hauteur Talon 10 cm/CL Bleu C 3.svg',
      '/images/products/PHOTOS SITE TM/CHAUSSURES/CL KateBleu canard 36 Hauteur Talon 10 cm/CL Bleu C 4.svg'
    ],
    description: 'Escarpins Kate iconiques de Christian Louboutin en cuir bleu canard. Talon aiguille signature rouge de 10cm.',
    condition: 'Excellent',
    color: 'Bleu canard',
    heelHeight: '10 cm',
    material: 'Cuir'
  },
  {
    id: 'cl-corneille-velours-35',
    name: 'Corneille Velours Pumps',
    brand: 'Christian Louboutin',
    category: 'Chaussures',
    subcategory: 'Escarpins', 
    gender: 'femme',
    size: '35.5',
    price: '795€',
    certified: true,
    images: [
      '/images/products/PHOTOS SITE TM/CHAUSSURES/CL corneille velours 35 1_2 Hauteur Talon 10 cm/CL Corneille1 .svg',
      '/images/products/PHOTOS SITE TM/CHAUSSURES/CL corneille velours 35 1_2 Hauteur Talon 10 cm/CL Corneille 2.svg',
      '/images/products/PHOTOS SITE TM/CHAUSSURES/CL corneille velours 35 1_2 Hauteur Talon 10 cm/CL Corneille 3.svg',
      '/images/products/PHOTOS SITE TM/CHAUSSURES/CL corneille velours 35 1_2 Hauteur Talon 10 cm/CL Corneille 4.svg'
    ],
    description: 'Escarpins Corneille en velours noir avec semelle rouge signature. Élégance intemporelle.',
    condition: 'Très bon',
    color: 'Noir',
    heelHeight: '10 cm',
    material: 'Velours'
  },

  // CHAUSSURES - Jimmy Choo
  {
    id: 'jc-pumps-37-8cm',
    name: 'Pumps Classic',
    brand: 'Jimmy Choo',
    category: 'Chaussures',
    subcategory: 'Escarpins',
    gender: 'femme', 
    size: '37',
    price: '650€',
    certified: true,
    images: [
      '/images/products/PHOTOS SITE TM/CHAUSSURES/JC taille 37 Hauteur talon 8 cm/TM JC  1.svg',
      '/images/products/PHOTOS SITE TM/CHAUSSURES/JC taille 37 Hauteur talon 8 cm/TM JC  2.svg',
      '/images/products/PHOTOS SITE TM/CHAUSSURES/JC taille 37 Hauteur talon 8 cm/TM JC 3.svg',
      '/images/products/PHOTOS SITE TM/CHAUSSURES/JC taille 37 Hauteur talon 8 cm/TM JC 4.svg'
    ],
    description: 'Escarpins classiques Jimmy Choo en cuir noir. Talon de 8cm pour un confort optimal.',
    condition: 'Excellent',
    color: 'Noir',
    heelHeight: '8 cm',
    material: 'Cuir'
  },
  {
    id: 'jc-verte-37-6cm',
    name: 'Pumps Vert Émeraude',
    brand: 'Jimmy Choo',
    category: 'Chaussures',
    subcategory: 'Escarpins',
    gender: 'femme',
    size: '37', 
    price: '695€',
    certified: true,
    images: [
      '/images/products/PHOTOS SITE TM/CHAUSSURES/JC verte 37 Hauteur talon 6 cm/TM JC 1.svg',
      '/images/products/PHOTOS SITE TM/CHAUSSURES/JC verte 37 Hauteur talon 6 cm/TM JC 2-6.svg',
      '/images/products/PHOTOS SITE TM/CHAUSSURES/JC verte 37 Hauteur talon 6 cm/TM JC 3-7.svg',
      '/images/products/PHOTOS SITE TM/CHAUSSURES/JC verte 37 Hauteur talon 6 cm/TM JC 1-5.svg'
    ],
    description: 'Escarpins Jimmy Choo en cuir vert émeraude. Talon de 6cm pour une élégance raffinée.',
    condition: 'Très bon',
    color: 'Vert émeraude',
    heelHeight: '6 cm',
    material: 'Cuir'
  },

  // CHAUSSURES - Gucci
  {
    id: 'gucci-basket-homme-45',
    name: 'Ace Sneakers',
    brand: 'Gucci',
    category: 'Chaussures',
    subcategory: 'Sneakers',
    gender: 'homme',
    size: '45',
    price: '550€',
    certified: true,
    images: [
      '/images/products/PHOTOS SITE TM/CHAUSSURES/Basket Gucci homme 45/GUCCI Homme  1.svg',
      '/images/products/PHOTOS SITE TM/CHAUSSURES/Basket Gucci homme 45/Gucci Homme  2.svg',
      '/images/products/PHOTOS SITE TM/CHAUSSURES/Basket Gucci homme 45/Gucci Homme 3.svg'
    ],
    description: 'Sneakers Gucci Ace pour homme en cuir blanc avec détails signature. Confort et style italien.',
    condition: 'Bon',
    color: 'Blanc',
    material: 'Cuir'
  },
  {
    id: 'gucci-basket-femme-toile-35',
    name: 'High-Top Canvas Sneakers',
    brand: 'Gucci',
    category: 'Chaussures',
    subcategory: 'Sneakers',
    gender: 'femme',
    size: '35',
    price: '480€',
    certified: true,
    images: [
      '/images/products/PHOTOS SITE TM/CHAUSSURES/Basket montante Gucci femme toile 35/GUCCI Femme 1.svg',
      '/images/products/PHOTOS SITE TM/CHAUSSURES/Basket montante Gucci femme toile 35/GUCCI FEMME 2.svg',
      '/images/products/PHOTOS SITE TM/CHAUSSURES/Basket montante Gucci femme toile 35/Gucci femme 3.svg'
    ],
    description: 'Baskets montantes Gucci pour femme en toile signature. Style urbain chic avec logo emblématique.',
    condition: 'Très bon',
    color: 'Beige/Logo',
    material: 'Toile'
  },

  // CHAUSSURES - Chanel
  {
    id: 'chanel-slingbacks-37',
    name: 'Slingback Pumps Bicolores',
    brand: 'Chanel',
    category: 'Chaussures',
    subcategory: 'Escarpins',
    gender: 'femme',
    size: '37',
    price: '950€',
    certified: true,
    images: [
      '/images/products/PHOTOS SITE TM/CHAUSSURES/Chanel Slingbacks 37/Chanel Noire 1.svg',
      '/images/products/PHOTOS SITE TM/CHAUSSURES/Chanel Slingbacks 37/Chanel Noire 2.svg',
      '/images/products/PHOTOS SITE TM/CHAUSSURES/Chanel Slingbacks 37/Chanel Noire 3.svg',
      '/images/products/PHOTOS SITE TM/CHAUSSURES/Chanel Slingbacks 37/Chanel Noire 4.svg',
      '/images/products/PHOTOS SITE TM/CHAUSSURES/Chanel Slingbacks 37/Chanel Noire 5.svg'
    ],
    description: 'Escarpins slingback Chanel iconiques en cuir noir et beige. Bout noir signature et talon confortable.',
    condition: 'Excellent',
    color: 'Noir et beige',
    material: 'Cuir'
  },

  // CHAUSSURES - Hermès
  {
    id: 'hermes-oasis-marron-37',
    name: 'Oasis Sandals',
    brand: 'Hermès',
    category: 'Chaussures',
    subcategory: 'Sandales',
    gender: 'femme',
    size: '37',
    price: '580€',
    certified: true,
    images: [
      '/images/products/PHOTOS SITE TM/CHAUSSURES/Hermes Oasis marron 37/Hermes Oasis marron 1.svg',
      '/images/products/PHOTOS SITE TM/CHAUSSURES/Hermes Oasis marron 37/Hermes Oasis marron 2.svg',
      '/images/products/PHOTOS SITE TM/CHAUSSURES/Hermes Oasis marron 37/Hermes Oasis marron 3.svg',
      '/images/products/PHOTOS SITE TM/CHAUSSURES/Hermes Oasis marron 37/Hermes Oasis marron 4.svg'
    ],
    description: 'Sandales Oasis Hermès en cuir marron. Design minimaliste et confort exceptionnel.',
    condition: 'Très bon',
    color: 'Marron',
    material: 'Cuir'
  },
  {
    id: 'hermes-oran-37',
    name: 'Oran Sandals',
    brand: 'Hermès',
    category: 'Chaussures',
    subcategory: 'Sandales',
    gender: 'femme',
    size: '37',
    price: '620€',
    certified: true,
    images: [
      '/images/products/PHOTOS SITE TM/CHAUSSURES/Hermes Oran 37/Hermes Oran 1.svg',
      '/images/products/PHOTOS SITE TM/CHAUSSURES/Hermes Oran 37/Hermes Oran 2.svg',
      '/images/products/PHOTOS SITE TM/CHAUSSURES/Hermes Oran 37/Hermes Oran 3.svg',
      '/images/products/PHOTOS SITE TM/CHAUSSURES/Hermes Oran 37/Hermes Oran 4.svg',
      '/images/products/PHOTOS SITE TM/CHAUSSURES/Hermes Oran 37/Hermes Oran 5.svg'
    ],
    description: 'Sandales Oran Hermès iconiques avec H signature. Symbole du luxe français intemporel.',
    condition: 'Excellent',
    color: 'Orange/Noir',
    material: 'Cuir'
  },

  // CHAUSSURES - Saint Laurent
  {
    id: 'sl-basket-blanche-vintage-36',
    name: 'Court Classic Vintage Sneakers',
    brand: 'Saint Laurent',
    category: 'Chaussures',
    subcategory: 'Sneakers',
    gender: 'femme',
    size: '36',
    price: '450€',
    certified: true,
    images: [
      '/images/products/PHOTOS SITE TM/CHAUSSURES/basket SL blanche agneau Vintage 36/YSL blanche 1.svg',
      '/images/products/PHOTOS SITE TM/CHAUSSURES/basket SL blanche agneau Vintage 36/YSL Blanche 2.svg',
      '/images/products/PHOTOS SITE TM/CHAUSSURES/basket SL blanche agneau Vintage 36/YSL Blanche 3.svg',
      '/images/products/PHOTOS SITE TM/CHAUSSURES/basket SL blanche agneau Vintage 36/YSL Blanche 4.svg'
    ],
    description: 'Sneakers Court Classic Saint Laurent en agneau blanc vintage. Style minimaliste et luxueux.',
    condition: 'Bon',
    color: 'Blanc',
    material: 'Agneau'
  },

  // CEINTURES - Gucci
  {
    id: 'gucci-ceinture-marron-85',
    name: 'Ceinture GG Marron',
    brand: 'Gucci',
    category: 'Accessoires',
    subcategory: 'Ceintures',
    gender: 'femme',
    size: '85',
    price: '420€',
    certified: true,
    images: [
      '/images/products/PHOTOS SITE TM/CEINTURES/GUCCI/MARRON 85/CEINTURE MARRON 1.svg',
      '/images/products/PHOTOS SITE TM/CEINTURES/GUCCI/MARRON 85/CEINTURE MARRON 2.svg',
      '/images/products/PHOTOS SITE TM/CEINTURES/GUCCI/MARRON 85/CEINTURE MARRON 3.svg'
    ],
    description: 'Ceinture Gucci en cuir marron avec boucle GG signature. Accessoire incontournable.',
    condition: 'Très bon',
    color: 'Marron',
    material: 'Cuir'
  },
  {
    id: 'gucci-ceinture-noire-90',
    name: 'Ceinture GG Noire',
    brand: 'Gucci',
    category: 'Accessoires',
    subcategory: 'Ceintures',
    gender: 'femme',
    size: '90',
    price: '445€',
    certified: true,
    images: [
      '/images/products/PHOTOS SITE TM/CEINTURES/GUCCI/NOIRE 90/CEINTURE NOIRE 1.svg',
      '/images/products/PHOTOS SITE TM/CEINTURES/GUCCI/NOIRE 90/CEINTURE NOIRE 2.svg',
      '/images/products/PHOTOS SITE TM/CEINTURES/GUCCI/NOIRE 90/CEINTURE NOIRE 3.svg'
    ],
    description: 'Ceinture Gucci en cuir noir avec boucle GG dorée. Luxe et sophistication italienne.',
    condition: 'Excellent',
    color: 'Noir',
    material: 'Cuir'
  },

  // SAC À MAINS - Louis Vuitton
  {
    id: 'lv-delightful-grand',
    name: 'Sac Delightful Grand Modèle',
    brand: 'Louis Vuitton',
    category: 'Accessoires',
    subcategory: 'Sacs à main',
    gender: 'femme',
    size: 'Grand',
    price: '1580€',
    images: [
      '/images/products/PHOTOS SITE TM/SAC A MAINS/Louis Vuitton/GRAND SAC/SAC DELIGHTFUL/GRAND SAC LV 1.svg',
      '/images/products/PHOTOS SITE TM/SAC A MAINS/Louis Vuitton/GRAND SAC/SAC DELIGHTFUL/GRAND SAC LV 2.svg',
      '/images/products/PHOTOS SITE TM/SAC A MAINS/Louis Vuitton/GRAND SAC/SAC DELIGHTFUL/GRAND SAC LV 3.svg',
      '/images/products/PHOTOS SITE TM/SAC A MAINS/Louis Vuitton/GRAND SAC/SAC DELIGHTFUL/GRAND SAC LV 4.svg',
      '/images/products/PHOTOS SITE TM/SAC A MAINS/Louis Vuitton/GRAND SAC/SAC DELIGHTFUL/Grand sac LV 5.svg'
    ],
    description: 'Sac Delightful Louis Vuitton en toile Monogram. Spacieux et élégant, parfait pour le quotidien.',
    condition: 'Excellent',
    certified: true,
    isFavorite: false,
    color: 'Monogram',
    material: 'Toile Monogram'
  },
  {
    id: 'lv-felicie-petit',
    name: 'Pochette Felicie',
    brand: 'Louis Vuitton',
    category: 'Accessoires',
    subcategory: 'Pochettes',
    gender: 'femme',
    size: 'Petit',
    price: '690€',
    images: [
      '/images/products/PHOTOS SITE TM/SAC A MAINS/Louis Vuitton/PETIT SAC/SAC FELICIE/LV PETIT 1.svg',
      '/images/products/PHOTOS SITE TM/SAC A MAINS/Louis Vuitton/PETIT SAC/SAC FELICIE/LV PETIT 2.svg',
      '/images/products/PHOTOS SITE TM/SAC A MAINS/Louis Vuitton/PETIT SAC/SAC FELICIE/LV PETIT 3.svg',
      '/images/products/PHOTOS SITE TM/SAC A MAINS/Louis Vuitton/PETIT SAC/SAC FELICIE/LV PETIT 4.svg'
    ],
    description: 'Pochette Felicie Louis Vuitton en toile Monogram. Polyvalente avec chaîne amovible.',
    condition: 'Très bon',
    certified: true,
    isFavorite: false,
    color: 'Monogram',
    material: 'Toile Monogram'
  },

  // SAC À MAINS - Saint Laurent
  {
    id: 'sl-babylon-petit',
    name: 'Sac Babylon Petit Modèle',
    brand: 'Saint Laurent',
    category: 'Accessoires',
    subcategory: 'Sacs à main',
    gender: 'femme',
    size: 'Petit',
    price: '1250€',
    images: [
      '/images/products/PHOTOS SITE TM/SAC A MAINS/Saint Laurent/BABYLON/PETIT SAC SL 1.svg',
      '/images/products/PHOTOS SITE TM/SAC A MAINS/Saint Laurent/BABYLON/PETIT SAC SL 2.svg',
      '/images/products/PHOTOS SITE TM/SAC A MAINS/Saint Laurent/BABYLON/PETIT SAC SL 3.svg',
      '/images/products/PHOTOS SITE TM/SAC A MAINS/Saint Laurent/BABYLON/PETIT SAC SL 4.svg'
    ],
    description: 'Sac Babylon Saint Laurent en cuir noir. Design iconique avec détails dorés signature.',
    condition: 'Excellent',
    certified: true,
    isFavorite: false,
    color: 'Noir',
    material: 'Cuir'
  },

  // SAC À MAINS - Burberry
  {
    id: 'burberry-lola-bag',
    name: 'Sac Lola',
    brand: 'Burberry',
    category: 'Accessoires',
    subcategory: 'Sacs à main',
    gender: 'femme',
    size: 'Moyen',
    price: '890€',
    images: [
      '/images/products/PHOTOS SITE TM/SAC A MAINS/BURBERRY/SAC LOLA/BB 1.svg',
      '/images/products/PHOTOS SITE TM/SAC A MAINS/BURBERRY/SAC LOLA/BB2.svg',
      '/images/products/PHOTOS SITE TM/SAC A MAINS/BURBERRY/SAC LOLA/BB3.svg'
    ],
    description: 'Sac Lola Burberry avec motif check signature. Élégance britannique intemporelle.',
    condition: 'Très bon',
    certified: true,
    isFavorite: false,
    color: 'Check Burberry',
    material: 'Cuir et toile'
  },

  // LUNETTES - Celine
  {
    id: 'celine-thin-sunglasses',
    name: 'Lunettes Thin',
    brand: 'Celine',
    category: 'Accessoires',
    subcategory: 'Lunettes de soleil',
    gender: 'femme',
    size: 'Unique',
    price: '320€',
    images: [
      '/images/products/PHOTOS SITE TM/LUNETTE DE SOLEIL/CELINE/THIN/SOLAIRE CELINE THIN 1.svg',
      '/images/products/PHOTOS SITE TM/LUNETTE DE SOLEIL/CELINE/THIN/SOLAIRE CELINE THIN 2.svg'
    ],
    description: 'Lunettes de soleil Celine Thin au design épuré. Monture fine et verres polarisés.',
    condition: 'Excellent',
    certified: true,
    isFavorite: false,
    color: 'Noir',
    material: 'Acétate'
  },
  {
    id: 'celine-triomphe-sunglasses',
    name: 'Lunettes Triomphe',
    brand: 'Celine',
    category: 'Accessoires',
    subcategory: 'Lunettes de soleil',
    gender: 'femme',
    size: 'Unique',
    price: '380€',
    images: [
      '/images/products/PHOTOS SITE TM/LUNETTE DE SOLEIL/CELINE/TRIOMPHE/LUNETTE CELINE NOIRE 1 OVALE.svg',
      '/images/products/PHOTOS SITE TM/LUNETTE DE SOLEIL/CELINE/TRIOMPHE/LUNETTE CELINE NOIRE OVALE 2.svg'
    ],
    description: 'Lunettes de soleil Celine Triomphe avec logo signature. Style parisien sophistiqué.',
    condition: 'Très bon',
    certified: true,
    isFavorite: false,
    color: 'Tortoiseshell',
    material: 'Acétate'
  },

  // LUNETTES - Gucci
  {
    id: 'gucci-sunglasses-oversized',
    name: 'Lunettes Oversized GG',
    brand: 'Gucci',
    category: 'Accessoires',
    subcategory: 'Lunettes de soleil',
    gender: 'femme',
    size: 'Unique',
    price: '290€',
    images: [
      '/images/products/PHOTOS SITE TM/LUNETTE DE SOLEIL/GUCCI/LUNETTE GUCCI 1.svg',
      '/images/products/PHOTOS SITE TM/LUNETTE DE SOLEIL/GUCCI/LUNETTE GUCCI 2.svg'
    ],
    description: 'Lunettes de soleil Gucci oversized avec logo GG. Glamour italien à la Dolce Vita.',
    condition: 'Bon',
    certified: true,
    isFavorite: false,
    color: 'Noir/Or',
    material: 'Acétate'
  },

  // ÉCHARPES - Burberry
  {
    id: 'burberry-echarpe-check',
    name: 'Écharpe Check Classique',
    brand: 'Burberry',
    category: 'Accessoires',
    subcategory: 'Écharpes',
    gender: 'femme',
    size: 'Unique',
    price: '180€',
    images: [
      '/images/products/PHOTOS SITE TM/ECHARPE/Burberry/E BB 1.svg',
      '/images/products/PHOTOS SITE TM/ECHARPE/Burberry/E BB 2.svg'
    ],
    description: 'Écharpe Burberry au motif check iconique. Cachemire britannique d\'exception.',
    condition: 'Excellent',
    certified: true,
    isFavorite: false,
    color: 'Check Burberry',
    material: 'Cachemire'
  },

  // ÉCHARPES - Saint Laurent
  {
    id: 'sl-echarpe-logo',
    name: 'Écharpe Logo Saint Laurent',
    brand: 'Saint Laurent',
    category: 'Accessoires',
    subcategory: 'Écharpes',
    gender: 'femme',
    size: 'Unique',
    price: '220€',
    images: [
      '/images/products/PHOTOS SITE TM/ECHARPE/SL/SL VERT 1.svg',
      '/images/products/PHOTOS SITE TM/ECHARPE/SL/SL VERT 2.svg'
    ],
    description: 'Écharpe Saint Laurent avec logo brodé. Sophistication parisienne moderne.',
    condition: 'Très bon',
    certified: true,
    isFavorite: false,
    color: 'Noir',
    material: 'Laine'
  },

  // SAC À MAINS - Saint Laurent Manhattan
  {
    id: 'sl-manhattan-noir-dore',
    name: 'Sac Manhattan Noir et Doré',
    brand: 'Saint Laurent',
    category: 'Accessoires',
    subcategory: 'Sacs à main',
    gender: 'femme',
    size: 'Moyen',
    price: '1380€',
    images: [
      '/images/products/PHOTOS SITE TM/SAC A MAINS/Saint Laurent/MANHATTAN/SAC SL NOIR ET DORÉ1.svg',
      '/images/products/PHOTOS SITE TM/SAC A MAINS/Saint Laurent/MANHATTAN/SAC SL NOIR ET DORE 2.svg',
      '/images/products/PHOTOS SITE TM/SAC A MAINS/Saint Laurent/MANHATTAN/SAC SL NOIR ET DORE 3.svg',
      '/images/products/PHOTOS SITE TM/SAC A MAINS/Saint Laurent/MANHATTAN/SAC SL NOIR ET DORE 4.svg'
    ],
    description: 'Sac Manhattan Saint Laurent en cuir noir avec détails dorés. Sophistication parisienne moderne.',
    condition: 'Excellent',
    certified: true,
    isFavorite: false,
    color: 'Noir et doré',
    material: 'Cuir'
  },

  // SAC À MAINS - Saint Laurent Rive Gauche
  {
    id: 'sl-rive-gauche-grand',
    name: 'Sac Rive Gauche Grand Modèle',
    brand: 'Saint Laurent',
    category: 'Accessoires',
    subcategory: 'Sacs à main',
    gender: 'femme',
    size: 'Grand',
    price: '1420€',
    images: [
      '/images/products/PHOTOS SITE TM/SAC A MAINS/Saint Laurent/RIVE GAUCHE/GS SL 1.svg',
      '/images/products/PHOTOS SITE TM/SAC A MAINS/Saint Laurent/RIVE GAUCHE/GS SL 2.svg',
      '/images/products/PHOTOS SITE TM/SAC A MAINS/Saint Laurent/RIVE GAUCHE/GS SL 3.svg',
      '/images/products/PHOTOS SITE TM/SAC A MAINS/Saint Laurent/RIVE GAUCHE/GRAND SAC SL 4.svg',
      '/images/products/PHOTOS SITE TM/SAC A MAINS/Saint Laurent/RIVE GAUCHE/GS SL 5.svg'
    ],
    description: 'Sac Rive Gauche Saint Laurent grand format. Icône parisienne du luxe moderne.',
    condition: 'Très bon',
    certified: true,
    isFavorite: false,
    color: 'Noir',
    material: 'Cuir'
  },

  // SAC À MAINS - Celine
  {
    id: 'celine-classic-bag',
    name: 'Sac Classique Celine',
    brand: 'Celine',
    category: 'Accessoires',
    subcategory: 'Sacs à main',
    gender: 'femme',
    size: 'Moyen',
    price: '1680€',
    images: [
      '/images/products/PHOTOS SITE TM/SAC A MAINS/CELINE/SAC Celine 1.svg',
      '/images/products/PHOTOS SITE TM/SAC A MAINS/CELINE/Sac Celine 2.svg',
      '/images/products/PHOTOS SITE TM/SAC A MAINS/CELINE/Sac celine 3.svg',
      '/images/products/PHOTOS SITE TM/SAC A MAINS/CELINE/Sac Celine 4.svg'
    ],
    description: 'Sac Celine au design minimaliste iconique. Luxury français redéfini par Phoebe Philo.',
    condition: 'Excellent',
    certified: true,
    isFavorite: false,
    color: 'Beige',
    material: 'Cuir'
  },

  // SAC DE VOYAGE - Louis Vuitton
  {
    id: 'lv-keepall-50-voyage',
    name: 'Keepall Bandoulière 50',
    brand: 'Louis Vuitton',
    category: 'Accessoires',
    subcategory: 'Sacs de voyage',
    gender: 'femme',
    size: '50cm',
    price: '1250€',
    images: [
      '/images/products/PHOTOS SITE TM/SAC A MAINS/Louis Vuitton/SAC DE VOYAGE NOIR ET GRIS/SAC KEEPALL BANDOULIERE 50/SAC V LV 1.svg',
      '/images/products/PHOTOS SITE TM/SAC A MAINS/Louis Vuitton/SAC DE VOYAGE NOIR ET GRIS/SAC KEEPALL BANDOULIERE 50/SAC V LV 2.svg',
      '/images/products/PHOTOS SITE TM/SAC A MAINS/Louis Vuitton/SAC DE VOYAGE NOIR ET GRIS/SAC KEEPALL BANDOULIERE 50/SAC V LV 3.svg'
    ],
    description: 'Sac de voyage Keepall Louis Vuitton 50cm avec bandoulière. Voyage de luxe à la française.',
    condition: 'Très bon',
    certified: true,
    isFavorite: false,
    color: 'Noir et gris',
    material: 'Toile Damier'
  }
];

// Categories for real products
export const realProductCategories = {
  'chaussures-luxe': {
    title: 'Chaussures de Luxe',
    products: products.filter((p: Product) => p.category === 'Chaussures')
  },
  'accessoires-premium': {
    title: 'Accessoires Premium',
    products: products.filter((p: Product) => p.category === 'Accessoires')
  },
  'collection-femme': {
    title: 'Collection Femme',
    products: products.filter((p: Product) => p.gender === 'femme')
  },
  'collection-homme': {
    title: 'Collection Homme', 
    products: products.filter((p: Product) => p.gender === 'homme')
  },
  'notre-selection': {
    title: 'Notre Sélection',
    products: products.slice(0, 6) // Top 6 products
  },
  'sacs-iconiques': {
    title: 'Sacs Iconiques',
    products: products.filter((p: Product) => p.category === 'Accessoires' && (p.subcategory === 'Sacs à main' || p.subcategory === 'Pochettes'))
  },
  'pret-a-porter': {
    title: 'Prêt-à-porter',
    products: products.filter((p: Product) => p.category === 'Vêtements')
  },
  'chaussures': {
    title: 'Chaussures',
    products: products.filter((p: Product) => p.category === 'Chaussures')
  },
  'bijoux': {
    title: 'Bijoux',
    products: products.filter((p: Product) => p.category === 'Bijoux')
  },
  'accessoires': {
    title: 'Accessoires',
    products: products.filter((p: Product) => p.category === 'Accessoires')
  }
}

// Brand filters
export const availableBrands = Array.from(new Set(products.map((p: Product) => p.brand))).sort()

// Size filters  
export const availableSizes = Array.from(new Set(products.map((p: Product) => p.size).filter(Boolean))).sort()

// Color filters
export const availableColors = Array.from(new Set(products.map((p: Product) => p.color).filter(Boolean))).sort()
