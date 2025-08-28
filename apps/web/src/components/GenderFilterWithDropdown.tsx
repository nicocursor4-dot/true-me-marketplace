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
      selections: [
        { name: 'Sélection d\'été' },
        { name: 'Promotions' },
        { name: 'Les incontournables' },
        { name: 'Pré-owned de luxe' }
      ],
      vetements: [
        { name: 'Nouveautés' },
        { name: 'Costumes & Smoking' },
        { name: 'Blazers & Vestes' },
        { name: 'Manteaux & Trenchs' },
        { name: 'Pulls & Mailles' },
        { name: 'Chemises' },
        { name: 'T-shirts & Polos' },
        { name: 'Pantalons & Chinos' },
        { name: 'Jeans & Denim' },
        { name: 'Shorts' },
        { name: 'Sous-vêtements' },
        { name: 'Maillots de bain' },
        { name: 'Tous les vêtements' }
      ],
      chaussures: [
        { name: 'Nouveautés' },
        { name: 'Sneakers' },
        { name: 'Derbies & Richelieux' },
        { name: 'Mocassins & Loafers' },
        { name: 'Boots & Bottines' },
        { name: 'Bottes' },
        { name: 'Sandales' },
        { name: 'Chaussures de sport' },
        { name: 'Chaussures habillées' },
        { name: 'Toutes les chaussures' }
      ],
      sacs: [
        { name: 'Nouveautés' },
        { name: 'Sacs à dos' },
        { name: 'Sacoches & Messagers' },
        { name: 'Sacs de voyage' },
        { name: 'Sacs de sport' },
        { name: 'Pochettes homme' },
        { name: 'Porte-documents' },
        { name: 'Sacs ceinture' },
        { name: 'Tous les sacs' }
      ],
      accessoires: [
        { name: 'Nouveautés' },
        { name: 'Montres' },
        { name: 'Bijoux' },
        { name: 'Ceintures' },
        { name: 'Portefeuilles' },
        { name: 'Cravates & Nœuds' },
        { name: 'Foulards & Écharpes' },
        { name: 'Lunettes' },
        { name: 'Chapeaux & Casquettes' },
        { name: 'Gants' },
        { name: 'Boutons de manchette' },
        { name: 'Tous les accessoires' }
      ]
    },
    femme: {
      selections: [
        { name: 'Sélection d\'été' },
        { name: 'Promotions' },
        { name: 'Les incontournables' },
        { name: 'Vintage de luxe' }
      ],
      vetements: [
        { name: 'Nouveautés' },
        { name: 'Robes' },
        { name: 'Manteaux & Trenchs' },
        { name: 'Blazers & Vestes' },
        { name: 'Pulls & Mailles' },
        { name: 'Chemisiers & Tops' },
        { name: 'T-shirts & Débardeurs' },
        { name: 'Jupes' },
        { name: 'Pantalons' },
        { name: 'Jeans & Denim' },
        { name: 'Shorts' },
        { name: 'Combinaisons & Ensembles' },
        { name: 'Lingerie & Sous-vêtements' },
        { name: 'Maillots de bain' },
        { name: 'Tous les vêtements' }
      ],
      chaussures: [
        { name: 'Nouveautés' },
        { name: 'Escarpins' },
        { name: 'Sandales à talons' },
        { name: 'Ballerines' },
        { name: 'Mocassins & Loafers' },
        { name: 'Sneakers' },
        { name: 'Boots & Bottines' },
        { name: 'Bottes' },
        { name: 'Sandales plates' },
        { name: 'Mules & Sabots' },
        { name: 'Espadrilles' },
        { name: 'Chaussures de sport' },
        { name: 'Toutes les chaussures' }
      ],
      sacs: [
        { name: 'Nouveautés' },
        { name: 'Sacs à main' },
        { name: 'Sacs portés épaule' },
        { name: 'Sacs à bandoulière' },
        { name: 'Cabas & Tote bags' },
        { name: 'Pochettes & Clutchs' },
        { name: 'Sacs à dos' },
        { name: 'Sacs ceinture' },
        { name: 'Sacs de soirée' },
        { name: 'Sacs de voyage' },
        { name: 'Mini sacs' },
        { name: 'Tous les sacs' }
      ],
      accessoires: [
        { name: 'Nouveautés' },
        { name: 'Bijoux' },
        { name: 'Montres' },
        { name: 'Foulards & Carrés' },
        { name: 'Écharpes & Châles' },
        { name: 'Ceintures' },
        { name: 'Chapeaux & Bonnets' },
        { name: 'Lunettes' },
        { name: 'Gants' },
        { name: 'Portefeuilles & Porte-monnaie' },
        { name: 'Broches & Épingles' },
        { name: 'Accessoires cheveux' },
        { name: 'Tous les accessoires' }
      ]
    },
    enfant: {
      selections: [
        { name: 'Sélection d\'été' },
        { name: 'Promotions' },
        { name: 'Les incontournables' },
        { name: 'Mini-me luxury' }
      ],
      fille: [
        { name: 'Nouveautés' },
        { name: 'Robes & Jupes' },
        { name: 'Tops & T-shirts' },
        { name: 'Pantalons & Leggings' },
        { name: 'Manteaux & Vestes' },
        { name: 'Pulls & Gilets' },
        { name: 'Chaussures' },
        { name: 'Accessoires' },
        { name: 'Tout pour fille' }
      ],
      garcon: [
        { name: 'Nouveautés' },
        { name: 'T-shirts & Polos' },
        { name: 'Chemises' },
        { name: 'Pantalons & Shorts' },
        { name: 'Manteaux & Vestes' },
        { name: 'Pulls & Sweats' },
        { name: 'Chaussures' },
        { name: 'Accessoires' },
        { name: 'Tout pour garçon' }
      ],
      bebe: [
        { name: 'Nouveautés' },
        { name: 'Bodies & Grenouillères' },
        { name: 'Pyjamas & Gigoteuses' },
        { name: 'Robes & Ensembles' },
        { name: 'Chaussons & Chaussures' },
        { name: 'Bonnets & Accessoires' },
        { name: 'Tout pour bébé' }
      ]
    }
  }

  const genderOptions = [
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
    <div className={`relative z-[999999] isolate overflow-visible flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-2 sm:px-4 py-4 sm:py-6 bg-white/50 backdrop-blur-sm border-b border-trueme-gold/20 ${className}`}>
      {genderOptions.map((option) => {
        const isActive = selectedGender === option.key
        const hasDropdown = true
        
        return (
          <div 
            key={option.key}
            className="relative group"
            onMouseEnter={() => hasDropdown && setHoveredCategory(option.key)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <button
              onClick={() => handleGenderClick(option.key)}
              className={`
                px-3 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-base font-medium transition-all duration-300 ease-in-out whitespace-nowrap
                ${
                  isActive
                    ? 'bg-trueme text-white shadow-lg transform scale-105'
                    : 'bg-white/80 text-trueme border border-trueme/20 hover:border-trueme hover:bg-trueme/5 hover:shadow-md'
                }
              `}
            >
              {option.label}
            </button>

            {/* Desktop Dropdown Menu */}
            {hasDropdown && hoveredCategory === option.key && (
              <div className="hidden lg:block">
                <div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-[999999] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto"
                  onMouseEnter={() => setHoveredCategory(option.key)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <div className="bg-white/95 backdrop-blur-lg rounded-lg shadow-xl border border-trueme-gold/20 p-6 min-w-[600px] max-w-4xl relative z-[1000000]">
                    <div className="grid grid-cols-2 xl:grid-cols-3 gap-6">
                      {Object.entries(categoryMenus[option.key as keyof typeof categoryMenus] || {}).map(([categoryName, items]) => (
                        <div key={categoryName} className="space-y-3">
                          <h4 className="font-semibold text-trueme text-sm xl:text-base capitalize border-b border-trueme-gold/30 pb-2">
                            {categoryName}
                          </h4>
                          <ul className="space-y-1.5">
                            {items.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={`/marketplace/${option.key}?category=${categoryName}&subcategory=${encodeURIComponent(item.name)}`}
                                  className="block text-xs xl:text-sm text-trueme/80 hover:text-trueme-gold transition-colors duration-200 py-1 hover:translate-x-1 transform transition-transform"
                                  onClick={() => setHoveredCategory(null)}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      })}
      
      {/* Mobile Category Links - Only show when a gender is selected */}
      {selectedGender !== 'all' && (
        <div className="lg:hidden w-full mt-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {Object.entries(categoryMenus[selectedGender as keyof typeof categoryMenus] || {}).map(([categoryName]) => (
              <Link
                key={categoryName}
                href={`/marketplace/${selectedGender}?category=${categoryName}`}
                className="px-3 py-1.5 text-xs font-medium bg-trueme-gold/10 text-trueme rounded-full border border-trueme-gold/30 hover:bg-trueme-gold/20 transition-colors capitalize"
              >
                {categoryName}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default GenderFilterWithDropdown
