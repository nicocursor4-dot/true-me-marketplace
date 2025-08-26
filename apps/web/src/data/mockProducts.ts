import { Product } from '@/components/ProductCard'

// Données mock pour les produits de luxe avec images générées automatiquement
export const mockProducts = {
  "notre-selection": {
    title: "Notre Sélection",
    description: "Les pièces les plus recherchées de notre collection",
    products: [
      {
        id: "ns-1",
        name: "Birkin 35",
        brand: "Hermès",
        price: "AED 45,000",
        originalPrice: "AED 52,000",
        images: ["/images/products/notre-selection/hermes/femme/birkin-35-black.jpg"],
        condition: "Excellent" as const,
        certified: true,
        gender: "femme" as const,
        size: "35cm",
        category: "sac"
      },
      {
        id: "ns-2", 
        name: "2.55 Classic",
        brand: "Chanel",
        price: "AED 12,500",
        images: ["/images/products/notre-selection/chanel/femme/255-classic-black.jpg"],
        condition: "Comme neuf" as const,
        certified: true,
        gender: "femme" as const,
        category: "sac"
      },
      {
        id: "ns-3",
        name: "Love Bracelet",
        brand: "Cartier", 
        price: "AED 8,200",
        images: ["/images/products/notre-selection/cartier/femme/love-bracelet-gold.jpg"],
        condition: "Très bon" as const,
        certified: true,
        gender: "femme" as const,
        category: "bijou"
      },
      {
        id: "ns-4",
        name: "Keepall 55",
        brand: "Louis Vuitton",
        price: "AED 3,800",
        images: ["/images/products/notre-selection/louisvuitton/homme/keepall-55-monogram.jpg"], 
        condition: "Bon" as const,
        certified: true,
        gender: "homme" as const,
        size: "55cm",
        category: "sac"
      },
      {
        id: "ns-5",
        name: "Saddle Bag",
        brand: "Dior",
        price: "AED 6,200",
        images: ["/images/products/notre-selection/dior/femme/saddle-bag-oblique.jpg"],
        condition: "Excellent" as const, 
        certified: true,
        gender: "femme" as const,
        category: "sac"
      }
    ]
  },
  "sacs-iconiques": {
    title: "Sacs à Main Iconiques", 
    description: "Les sacs les plus emblématiques de la mode",
    products: [
      {
        id: "si-1",
        name: "Boy Bag",
        brand: "Chanel",
        price: "AED 11,800",
        images: ["/images/products/sacs/chanel/femme/boy-bag-quilted-black.jpg"],
        condition: "Excellent" as const,
        certified: true,
        gender: "femme" as const,
        category: "sac"
      },
      {
        id: "si-2",
        name: "Kelly 32",
        brand: "Hermès",
        price: "AED 35,000",
        images: ["/images/products/sacs/hermes/femme/kelly-32-epsom-rouge.jpg"],
        condition: "Comme neuf" as const,
        certified: true,
        gender: "femme" as const,
        size: "32cm",
        category: "sac"
      },
      {
        id: "si-3",
        name: "Neverfull MM",
        brand: "Louis Vuitton",
        price: "AED 2,800",
        images: ["/images/products/sacs/louisvuitton/femme/neverfull-mm-damier.jpg"],
        condition: "Très bon" as const,
        certified: true,
        gender: "femme" as const,
        category: "sac"
      },
      {
        id: "si-4",
        name: "Book Tote",
        brand: "Dior",
        price: "AED 4,500",
        images: ["/images/products/sacs/dior/femme/book-tote-oblique-navy.jpg"],
        condition: "Bon" as const,
        certified: true,
        gender: "femme" as const,
        category: "sac"
      },
      {
        id: "si-5",
        name: "Dionysus",
        brand: "Gucci",
        price: "AED 3,200",
        images: ["/images/products/sacs/gucci/femme/dionysus-gg-supreme.jpg"],
        condition: "Excellent" as const,
        certified: true,
        gender: "femme" as const,
        category: "sac"
      }
    ]
  },
  "bijoux": {
    title: "Bijoux Précieux",
    description: "Les bijoux les plus raffinés et emblématiques",
    products: [
      {
        id: "bj-1",
        name: "Alhambra Vintage",
        brand: "Van Cleef & Arpels",
        price: "AED 15,500",
        images: ["/images/products/bijoux/vancleef/femme/alhambra-vintage-gold.jpg"],
        condition: "Excellent" as const,
        certified: true,
        gender: "femme" as const,
        category: "bijou"
      },
      {
        id: "bj-2",
        name: "Panthère Watch",
        brand: "Cartier",
        price: "AED 22,000",
        images: ["/images/products/bijoux/cartier/femme/panthere-watch-gold.jpg"],
        condition: "Comme neuf" as const,
        certified: true,
        gender: "femme" as const,
        category: "montre"
      },
      {
        id: "bj-3",
        name: "T1 Ring",
        brand: "Tiffany & Co.",
        price: "AED 4,800",
        images: ["/images/products/bijoux/tiffany/femme/t1-ring-diamond.jpg"],
        condition: "Très bon" as const,
        certified: true,
        gender: "femme" as const,
        category: "bijou"
      },
      {
        id: "bj-4",
        name: "Serpenti Bracelet",
        brand: "Bulgari",
        price: "AED 18,500",
        images: ["/images/products/bijoux/bulgari/femme/serpenti-bracelet-gold.jpg"],
        condition: "Excellent" as const,
        certified: true,
        gender: "femme" as const,
        category: "bijou"
      },
      {
        id: "bj-5",
        name: "Camélia Brooch",
        brand: "Chanel",
        price: "AED 3,500",
        images: ["/images/products/bijoux/chanel/femme/camelia-brooch-white.jpg"],
        condition: "Comme neuf" as const,
        certified: true,
        gender: "femme" as const,
        category: "bijou"
      }
    ]
  },
  "chaussures": {
    title: "Chaussures de Luxe",
    description: "Les chaussures les plus élégantes et recherchées",
    products: [
      {
        id: "ch-1",
        name: "So Kate 120",
        brand: "Christian Louboutin",
        price: "AED 2,800",
        images: ["/images/products/chaussures/louboutin/femme/so-kate-120-black.jpg"],
        condition: "Très bon" as const,
        certified: true,
        gender: "femme" as const,
        size: "38",
        category: "chaussure"
      },
      {
        id: "ch-2",
        name: "Hangisi Satin",
        brand: "Manolo Blahnik",
        price: "AED 3,200",
        images: ["/images/products/chaussures/manoloblahnik/femme/hangisi-satin-blue.jpg"],
        condition: "Excellent" as const,
        certified: true,
        gender: "femme" as const,
        size: "37",
        category: "chaussure"
      },
      {
        id: "ch-3",
        name: "Romy 100",
        brand: "Jimmy Choo",
        price: "AED 2,400",
        images: ["/images/products/chaussures/jimmychoo/femme/romy-100-nude.jpg"],
        condition: "Comme neuf" as const,
        certified: true,
        gender: "femme" as const,
        size: "39",
        category: "chaussure"
      },
      {
        id: "ch-4",
        name: "Plexi 105",
        brand: "Gianvito Rossi",
        price: "AED 2,600",
        images: ["/images/products/chaussures/gianvitorossi/femme/plexi-105-transparent.jpg"],
        condition: "Très bon" as const,
        certified: true,
        gender: "femme" as const,
        size: "38",
        category: "chaussure"
      },
      {
        id: "ch-5",
        name: "Two-Tone Slingback",
        brand: "Chanel",
        price: "AED 3,800",
        images: ["/images/products/chaussures/chanel/femme/two-tone-slingback-beige.jpg"],
        condition: "Excellent" as const,
        certified: true,
        gender: "femme" as const,
        size: "37.5",
        category: "chaussure"
      }
    ]
  },
  "pret-a-porter": {
    title: "Prêt-à-porter de Créateurs",
    description: "Les pièces mode les plus tendances et intemporelles",
    products: [
      {
        id: "pp-1",
        name: "Tweed Jacket",
        brand: "Chanel",
        price: "AED 15,000",
        images: ["/images/products/pret-a-porter/chanel/femme/tweed-jacket-pink.jpg"],
        condition: "Excellent" as const,
        certified: true,
        gender: "femme" as const,
        size: "38",
        category: "vêtement"
      },
      {
        id: "pp-2",
        name: "Bar Jacket",
        brand: "Dior",
        price: "AED 12,500",
        images: ["/images/products/pret-a-porter/dior/femme/bar-jacket-navy.jpg"],
        condition: "Comme neuf" as const,
        certified: true,
        gender: "femme" as const,
        size: "40",
        category: "vêtement"
      },
      {
        id: "pp-3",
        name: "Cashmere Coat",
        brand: "Hermès",
        price: "AED 8,500",
        images: ["/images/products/pret-a-porter/hermes/homme/cashmere-coat-camel.jpg"],
        condition: "Très bon" as const,
        certified: true,
        gender: "homme" as const,
        size: "50",
        category: "vêtement"
      },
      {
        id: "pp-4",
        name: "Silk Blouse",
        brand: "Gucci",
        price: "AED 2,800",
        images: ["/images/products/pret-a-porter/gucci/femme/silk-blouse-floral.jpg"],
        condition: "Excellent" as const,
        certified: true,
        gender: "femme" as const,
        size: "M",
        category: "vêtement"
      },
      {
        id: "pp-5",
        name: "Leather Jacket",
        brand: "Louis Vuitton",
        price: "AED 6,200",
        images: ["/images/products/pret-a-porter/louisvuitton/homme/leather-jacket-black.jpg"],
        condition: "Comme neuf" as const,
        certified: true,
        gender: "homme" as const,
        size: "48",
        category: "vêtement"
      }
    ]
  },
  "accessoires": {
    title: "Accessoires Indispensables",
    description: "Les accessoires iconiques qui subliment votre style",
    products: [
      {
        id: "ac-1",
        name: "Carré Silk Scarf",
        brand: "Hermès",
        price: "AED 1,200",
        images: ["/images/products/accessoires/hermes/femme/carre-silk-equestrian.jpg"],
        condition: "Excellent" as const,
        certified: true,
        gender: "femme" as const,
        category: "accessoire"
      },
      {
        id: "ac-2",
        name: "Quilted Sunglasses",
        brand: "Chanel",
        price: "AED 1,800",
        images: ["/images/products/accessoires/chanel/femme/sunglasses-quilted-black.jpg"],
        condition: "Comme neuf" as const,
        certified: true,
        gender: "femme" as const,
        category: "accessoire"
      },
      {
        id: "ac-3",
        name: "Passport Holder",
        brand: "Goyard",
        price: "AED 850",
        images: ["/images/products/accessoires/goyard/homme/passport-holder-black.jpg"],
        condition: "Très bon" as const,
        certified: true,
        gender: "homme" as const,
        category: "accessoire"
      },
      {
        id: "ac-4",
        name: "Initiales Belt",
        brand: "Louis Vuitton",
        price: "AED 1,500",
        images: ["/images/products/accessoires/louisvuitton/homme/belt-initiales-damier.jpg"],
        condition: "Excellent" as const,
        certified: true,
        gender: "homme" as const,
        category: "accessoire"
      },
      {
        id: "ac-5",
        name: "Horsebit Loafers",
        brand: "Gucci",
        price: "AED 2,200",
        images: ["/images/products/accessoires/gucci/homme/horsebit-loafers-brown.jpg"],
        condition: "Comme neuf" as const,
        certified: true,
        gender: "homme" as const,
        category: "chaussure"
      }
    ]
  }
}

// Export compatible avec l'ancien format pour la homepage
export const productCategories = {
  'notre-selection': mockProducts["notre-selection"],
  'sacs-iconiques': mockProducts["sacs-iconiques"],
  'bijoux': mockProducts["bijoux"],
  'chaussures': mockProducts["chaussures"],
  'pret-a-porter': mockProducts["pret-a-porter"],
  'accessoires': mockProducts["accessoires"]
}
