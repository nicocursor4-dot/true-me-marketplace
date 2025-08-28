'use client'

import React, { useState } from 'react'
import Link from 'next/link'

interface GenderFilterProps {
  selectedGender: 'all' | 'homme' | 'femme' | 'enfant'
  onGenderChange: (gender: 'all' | 'homme' | 'femme' | 'enfant') => void
  className?: string
}

const GenderFilterWithDropdown: React.FC<GenderFilterProps> = ({ 
  selectedGender, 
  onGenderChange,
  className = ""
}) => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  const categoryMenus = {
    homme: {
      vetements: [
        { name: 'Nouveautés', subcategory: 'nouveautes' },
        { name: 'Manteaux', subcategory: 'manteaux' },
        { name: 'Trench-coats', subcategory: 'trench-coats' },
        { name: 'Vestes', link: '/marketplace/homme/vestes' },
        { name: 'Vestes en cuir', link: '/marketplace/homme/vestes-cuir' },
        { name: 'Robes', link: '/marketplace/homme/robes' },
        { name: 'Mailles', link: '/marketplace/homme/mailles' },
        { name: 'Hauts', link: '/marketplace/homme/hauts' },
        { name: 'Shorts', link: '/marketplace/homme/shorts' },
        { name: 'Pantalons', link: '/marketplace/homme/pantalons' },
        { name: 'Jeans', link: '/marketplace/homme/jeans' },
        { name: 'Combinaisons', link: '/marketplace/homme/combinaisons' },
        { name: 'Lingerie', link: '/marketplace/homme/lingerie' },
        { name: 'Maillots de bain', link: '/marketplace/homme/maillots' },
        { name: 'Tous les vêtements', link: '/marketplace/homme/vetements' }
      ],
      chaussures: [
        { name: 'Nouveautés', link: '/marketplace/homme/chaussures/nouveautes' },
        { name: 'Chaussure à talons', link: '/marketplace/homme/chaussures/talons' },
        { name: 'Bottines', link: '/marketplace/homme/chaussures/bottines' },
        { name: 'Bottes et bottines', link: '/marketplace/homme/chaussures/bottes' },
        { name: 'Sandales', link: '/marketplace/homme/chaussures/sandales' },
        { name: 'Espadrilles', link: '/marketplace/homme/chaussures/espadrilles' },
        { name: 'Mules et sabots', link: '/marketplace/homme/chaussures/mules' },
        { name: 'Baskets', link: '/marketplace/homme/chaussures/baskets' },
        { name: 'Mocassine', link: '/marketplace/homme/chaussures/mocassins' },
        { name: 'Derbies et richelieux', link: '/marketplace/homme/chaussures/derbies' },
        { name: 'Toutes les chaussures', link: '/marketplace/homme/chaussures' }
      ],
      sacs: [
        { name: 'Nouveautés', link: '/marketplace/homme/sacs/nouveautes' },
        { name: 'Sacs à main', link: '/marketplace/homme/sacs/main' },
        { name: 'Sacs portés épaule', link: '/marketplace/homme/sacs/epaule' },
        { name: 'Cabas', link: '/marketplace/homme/sacs/cabas' },
        { name: 'Sacs à bandoulière', link: '/marketplace/homme/sacs/bandouliere' },
        { name: 'Pochettes', link: '/marketplace/homme/sacs/pochettes' },
        { name: 'Sacs ceinture', link: '/marketplace/homme/sacs/ceinture' },
        { name: 'Sacs à dos', link: '/marketplace/homme/sacs/dos' },
        { name: 'Sacs de voyage', link: '/marketplace/homme/sacs/voyage' },
        { name: 'Sacoches', link: '/marketplace/homme/sacs/sacoches' },
        { name: 'Tous les sacs', link: '/marketplace/homme/sacs' }
      ],
      accessoires: [
        { name: 'Nouveautés', link: '/marketplace/homme/accessoires/nouveautes' },
        { name: 'Écharpes', link: '/marketplace/homme/accessoires/echarpes' },
        { name: 'Carrés de soie', link: '/marketplace/homme/accessoires/carres' },
        { name: 'Gants', link: '/marketplace/homme/accessoires/gants' },
        { name: 'Chapeaux', link: '/marketplace/homme/accessoires/chapeaux' },
        { name: 'Portefeuilles', link: '/marketplace/homme/accessoires/portefeuilles' },
        { name: 'Ceintures', link: '/marketplace/homme/accessoires/ceintures' },
        { name: 'Lunettes de soleil', link: '/marketplace/homme/accessoires/lunettes' },
        { name: 'Petite maroquinerie', link: '/marketplace/homme/accessoires/maroquinerie' },
        { name: 'Tous les accessoires', link: '/marketplace/homme/accessoires' }
      ]
    },
    femme: {
      vetements: [
        { name: 'Nouveautés', link: '/marketplace/femme/nouveautes' },
        { name: 'Manteaux', link: '/marketplace/femme/manteaux' },
        { name: 'Trench-coats', link: '/marketplace/femme/trench-coats' },
        { name: 'Vestes', link: '/marketplace/femme/vestes' },
        { name: 'Vestes en cuir', link: '/marketplace/femme/vestes-cuir' },
        { name: 'Robes', link: '/marketplace/femme/robes' },
        { name: 'Mailles', link: '/marketplace/femme/mailles' },
        { name: 'Hauts', link: '/marketplace/femme/hauts' },
        { name: 'Shorts', link: '/marketplace/femme/shorts' },
        { name: 'Pantalons', link: '/marketplace/femme/pantalons' },
        { name: 'Jeans', link: '/marketplace/femme/jeans' },
        { name: 'Combinaisons', link: '/marketplace/femme/combinaisons' },
        { name: 'Lingerie', link: '/marketplace/femme/lingerie' },
        { name: 'Maillots de bain', link: '/marketplace/femme/maillots' },
        { name: 'Tous les vêtements', link: '/marketplace/femme/vetements' }
      ],
      chaussures: [
        { name: 'Nouveautés', link: '/marketplace/femme/chaussures/nouveautes' },
        { name: 'Chaussure à talons', link: '/marketplace/femme/chaussures/talons' },
        { name: 'Bottines', link: '/marketplace/femme/chaussures/bottines' },
        { name: 'Bottes et bottines', link: '/marketplace/femme/chaussures/bottes' },
        { name: 'Sandales', link: '/marketplace/femme/chaussures/sandales' },
        { name: 'Espadrilles', link: '/marketplace/femme/chaussures/espadrilles' },
        { name: 'Mules et sabots', link: '/marketplace/femme/chaussures/mules' },
        { name: 'Baskets', link: '/marketplace/femme/chaussures/baskets' },
        { name: 'Mocassine', link: '/marketplace/femme/chaussures/mocassins' },
        { name: 'Derbies et richelieux', link: '/marketplace/femme/chaussures/derbies' },
        { name: 'Toutes les chaussures', link: '/marketplace/femme/chaussures' }
      ],
      sacs: [
        { name: 'Nouveautés', link: '/marketplace/femme/sacs/nouveautes' },
        { name: 'Sacs à main', link: '/marketplace/femme/sacs/main' },
        { name: 'Sacs portés épaule', link: '/marketplace/femme/sacs/epaule' },
        { name: 'Cabas', link: '/marketplace/femme/sacs/cabas' },
        { name: 'Sacs à bandoulière', link: '/marketplace/femme/sacs/bandouliere' },
        { name: 'Pochettes', link: '/marketplace/femme/sacs/pochettes' },
        { name: 'Sacs ceinture', link: '/marketplace/femme/sacs/ceinture' },
        { name: 'Sacs à dos', link: '/marketplace/femme/sacs/dos' },
        { name: 'Sacs de voyage', link: '/marketplace/femme/sacs/voyage' },
        { name: 'Sacoches', link: '/marketplace/femme/sacs/sacoches' },
        { name: 'Tous les sacs', link: '/marketplace/femme/sacs' }
      ],
      accessoires: [
        { name: 'Nouveautés', link: '/marketplace/femme/accessoires/nouveautes' },
        { name: 'Écharpes', link: '/marketplace/femme/accessoires/echarpes' },
        { name: 'Carrés de soie', link: '/marketplace/femme/accessoires/carres' },
        { name: 'Gants', link: '/marketplace/femme/accessoires/gants' },
        { name: 'Chapeaux', link: '/marketplace/femme/accessoires/chapeaux' },
        { name: 'Portefeuilles', link: '/marketplace/femme/accessoires/portefeuilles' },
        { name: 'Ceintures', link: '/marketplace/femme/accessoires/ceintures' },
        { name: 'Lunettes de soleil', link: '/marketplace/femme/accessoires/lunettes' },
        { name: 'Petite maroquinerie', link: '/marketplace/femme/accessoires/maroquinerie' },
        { name: 'Tous les accessoires', link: '/marketplace/femme/accessoires' }
      ]
    },
    enfant: {
      fille: [
        { name: 'Nouveautés', link: '/marketplace/enfant/fille/nouveautes' },
        { name: 'Robes', link: '/marketplace/enfant/fille/robes' },
        { name: 'Hauts', link: '/marketplace/enfant/fille/hauts' },
        { name: 'Pantalons', link: '/marketplace/enfant/fille/pantalons' },
        { name: 'Chaussures', link: '/marketplace/enfant/fille/chaussures' },
        { name: 'Accessoires', link: '/marketplace/enfant/fille/accessoires' },
        { name: 'Tout pour fille', link: '/marketplace/enfant/fille' }
      ],
      garcon: [
        { name: 'Nouveautés', link: '/marketplace/enfant/garcon/nouveautes' },
        { name: 'T-shirts', link: '/marketplace/enfant/garcon/tshirts' },
        { name: 'Pantalons', link: '/marketplace/enfant/garcon/pantalons' },
        { name: 'Vestes', link: '/marketplace/enfant/garcon/vestes' },
        { name: 'Chaussures', link: '/marketplace/enfant/garcon/chaussures' },
        { name: 'Accessoires', link: '/marketplace/enfant/garcon/accessoires' },
        { name: 'Tout pour garçon', link: '/marketplace/enfant/garcon' }
      ],
      bebe: [
        { name: 'Nouveautés', link: '/marketplace/enfant/bebe/nouveautes' },
        { name: 'Bodies', link: '/marketplace/enfant/bebe/bodies' },
        { name: 'Pyjamas', link: '/marketplace/enfant/bebe/pyjamas' },
        { name: 'Chaussures', link: '/marketplace/enfant/bebe/chaussures' },
        { name: 'Accessoires', link: '/marketplace/enfant/bebe/accessoires' },
        { name: 'Tout pour bébé', link: '/marketplace/enfant/bebe' }
      ]
    }
  }

  const genderOptions = [
    { key: 'all' as const, label: 'TOUT', display: 'Tout' },
    { key: 'homme' as const, label: 'HOMME', display: 'Homme' },
    { key: 'femme' as const, label: 'FEMME', display: 'Femme' },
    { key: 'enfant' as const, label: 'ENFANT', display: 'Enfant' }
  ]

  const handleGenderClick = (gender: 'all' | 'homme' | 'femme' | 'enfant') => {
    if (gender !== 'all') {
      window.location.href = `/marketplace/${gender}`
    } else {
      onGenderChange(gender)
    }
  }

  return (
    <div className={`relative flex items-center justify-center space-x-8 py-4 ${className}`}>
      {genderOptions.map((option, index) => (
        <React.Fragment key={option.key}>
          <div 
            className="relative"
            onMouseEnter={() => setHoveredCategory(option.key)}
            onMouseLeave={(e) => {
              // Delay pour permettre la navigation vers le menu
              setTimeout(() => {
                const menuElement = e.currentTarget.querySelector('[data-dropdown-menu]')
                if (!menuElement?.matches(':hover')) {
                  setHoveredCategory(null)
                }
              }, 100)
            }}
          >
            <button
              onClick={() => handleGenderClick(option.key)}
              className={`text-sm md:text-base font-medium tracking-[0.15em] transition-all duration-300 hover:text-trueme-gold ${
                selectedGender === option.key
                  ? 'text-trueme-gold border-b-2 border-trueme-gold pb-1'
                  : 'text-trueme hover:scale-105'
              }`}
            >
              {option.label}
            </button>

            {/* Dropdown Menu */}
            {hoveredCategory === option.key && option.key !== 'all' && (
              <div 
                data-dropdown-menu
                className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 w-screen max-w-6xl bg-white/95 backdrop-blur-xl shadow-2xl border border-trueme-gold/20 rounded-lg z-50"
                onMouseEnter={() => setHoveredCategory(option.key)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="p-8">
                  <div className={`grid ${option.key === 'enfant' ? 'grid-cols-3' : 'grid-cols-4'} gap-8`}>
                    {Object.entries(categoryMenus[option.key as keyof typeof categoryMenus]).map(([categoryName, items]) => (
                      <div key={categoryName}>
                        <h3 className="font-semibold text-trueme mb-4 uppercase tracking-wide text-sm">
                          {categoryName === 'vetements' ? 'Vêtements' :
                           categoryName === 'chaussures' ? 'Chaussures' :
                           categoryName === 'sacs' ? 'Sacs' :
                           categoryName === 'accessoires' ? 'Accessoires' :
                           categoryName === 'fille' ? 'Fille' :
                           categoryName === 'garcon' ? 'Garçon' :
                           categoryName === 'bebe' ? 'Bébé' : categoryName}
                        </h3>
                        <div className="space-y-2">
                          {items.map((item) => (
                            <Link
                              key={item.name}
                              href={`/marketplace/${option.key}?category=${categoryName}&subcategory=${encodeURIComponent(item.name.toLowerCase().replace(/\s+/g, '-'))}`}
                              className="block text-sm text-trueme-light hover:text-trueme-gold transition-colors duration-200 py-1"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {index < genderOptions.length - 1 && (
            <span className="text-trueme-gold/40 text-sm">|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default GenderFilterWithDropdown
