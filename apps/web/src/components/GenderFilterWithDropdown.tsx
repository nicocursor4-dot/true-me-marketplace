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
            onMouseLeave={() => {
              // Delay pour permettre la navigation vers le menu
              setTimeout(() => {
                setHoveredCategory(null)
              }, 150)
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
                className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 w-screen max-w-6xl bg-white shadow-2xl border border-trueme-gold/30 rounded-lg z-50 transition-all duration-300 ease-out"
                onMouseEnter={() => setHoveredCategory(option.key)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="p-8 bg-gradient-to-br from-white to-gray-50/30">
                  <div className={`grid ${option.key === 'enfant' ? 'grid-cols-3' : 'grid-cols-4'} gap-8`}>
                    {Object.entries(categoryMenus[option.key as keyof typeof categoryMenus]).map(([categoryName, items]) => (
                      <div key={categoryName}>
                        <h3 className="font-bold text-black mb-4 uppercase tracking-wide text-sm border-b border-trueme-gold/30 pb-2">
                          {categoryName === 'vetements' ? 'Vêtements' :
                           categoryName === 'chaussures' ? 'Chaussures' :
                           categoryName === 'sacs' ? 'Sacs' :
                           categoryName === 'accessoires' ? 'Accessoires' :
                           categoryName === 'fille' ? 'Fille' :
                           categoryName === 'garcon' ? 'Garçon' :
                           categoryName === 'bebe' ? 'Bébé' :
                           categoryName}
                        </h3>
                        <ul className="space-y-3">
                          {items.map((item, index) => (
                            <li key={index}>
                              <Link
                                href={`/marketplace/${option.key}?category=${categoryName}&subcategory=${item.name.toLowerCase().replace(/\s+/g, '-').replace(/[àâä]/g, 'a').replace(/[éèêë]/g, 'e').replace(/[îï]/g, 'i').replace(/[ôö]/g, 'o').replace(/[ùûü]/g, 'u').replace(/[ç]/g, 'c').replace(/[&]/g, '').replace(/[œ]/g, 'oe')}`}
                                className="text-gray-700 hover:text-trueme-gold hover:font-medium transition-all duration-200 text-sm block py-1 hover:pl-2 hover:border-l-2 hover:border-trueme-gold"
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
