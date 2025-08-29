'use client'

import React, { useState } from 'react'
import Link from 'next/link'

interface GenderFilterProps {
  selectedGender: 'all' | 'homme' | 'femme' | 'enfant'
  onGenderChange: (gender: 'all' | 'homme' | 'femme' | 'enfant') => void
  className?: string
}

interface QuickLink {
  label: string
  href: string
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
  } as const

  // Quick access curated links - 2 de chaque côté avec design élégant
  const leftQuickLinks: QuickLink[] = [
    { label: "Sélection d'été", href: "/marketplace/femme?category=selections&subcategory=S%C3%A9lection%20d'%C3%A9t%C3%A9" },
    { label: 'Promotions', href: '/marketplace/homme?category=selections&subcategory=Promotions' }
  ]

  const rightQuickLinks: QuickLink[] = [
    { label: 'Les incontournables', href: '/marketplace/femme?category=selections&subcategory=Les%20incontournables' },
    { label: 'Pré-owned de luxe', href: '/marketplace/homme?category=selections&subcategory=Pr%C3%A9-owned%20de%20luxe' }
  ]
  

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
    <div className={`relative z-[999999] isolate overflow-visible px-2 sm:px-4 py-2 sm:py-3 border-b border-trueme-gold/20 ${className}`}>
      {/* Design élégant avec séparateurs - responsive */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 flex-wrap max-w-7xl mx-auto">
        
        {/* Desktop layout - Catégories visibles uniquement sur grands écrans */}
        <div className="hidden lg:flex items-center justify-center gap-6 lg:gap-8 w-full">
          
          {/* Catégories de gauche */}
          {leftQuickLinks.map((link: QuickLink, index) => (
            <div key={link.label} className="flex items-center">
              <Link
                href={link.href}
                className="text-xs lg:text-sm font-medium text-trueme/80 hover:text-trueme border-b-2 border-transparent hover:border-trueme-gold transition-all duration-300 pb-1 whitespace-nowrap"
              >
                {link.label.toUpperCase()}
              </Link>
              {index < leftQuickLinks.length - 1 && (
                <div className="w-px h-4 bg-trueme-gold/30 ml-6 lg:ml-8"></div>
              )}
            </div>
          ))}

          {/* Séparateur avant les genres */}
          <div className="w-px h-4 bg-trueme-gold/30"></div>

          {/* Boutons genres - Desktop */}
          {genderOptions.map((option, index) => {
            const isActive = selectedGender === option.key
            const hasDropdown = true

            return (
              <div key={option.key} className="flex items-center">
                <div 
                  className="relative pb-2"
                  onMouseEnter={() => hasDropdown && setHoveredCategory(option.key)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <button
                    onClick={() => handleGenderClick(option.key)}
                    className={`
                      text-xs lg:text-sm font-medium transition-all duration-300 pb-1 whitespace-nowrap
                      ${
                        isActive
                          ? 'text-trueme border-b-2 border-trueme-gold'
                          : 'text-trueme/80 hover:text-trueme border-b-2 border-transparent hover:border-trueme-gold'
                      }
                    `}
                  >
                    {option.label}
                  </button>

                  {/* Desktop Dropdown Menu */}
                  {hasDropdown && hoveredCategory === option.key && (
                    <div className="hidden lg:block">
                      <div 
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-0 z-[1000000]"
                        onMouseEnter={() => setHoveredCategory(option.key)}
                        onMouseLeave={() => setHoveredCategory(null)}
                      >
                        <div className="bg-white/95 backdrop-blur-lg rounded-lg shadow-xl border border-trueme-gold/20 p-6 min-w-[800px] max-w-6xl relative">
                          <div className="grid grid-cols-3 xl:grid-cols-4 gap-6">
                            {Object.entries(categoryMenus[option.key as keyof typeof categoryMenus] || {})
                              .filter(([categoryName]) => categoryName !== 'selections')
                              .map(([categoryName, items]) => (
                              <div key={categoryName} className="space-y-3">
                                <h4 className="font-semibold text-trueme text-sm xl:text-base capitalize border-b border-trueme-gold/30 pb-2">
                                  {categoryName}
                                </h4>
                                <ul className="space-y-1.5">
                                  {(items as { name: string }[]).map((item: { name: string }) => (
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

                {/* Séparateur après chaque genre sauf le dernier */}
                {index < genderOptions.length - 1 && (
                  <div className="w-px h-4 bg-trueme-gold/30 ml-6 lg:ml-8"></div>
                )}
              </div>
            )
          })}

          {/* Séparateur après les genres */}
          <div className="w-px h-4 bg-trueme-gold/30"></div>

          {/* Catégories de droite */}
          {rightQuickLinks.map((link: QuickLink, index) => (
            <div key={link.label} className="flex items-center">
              <Link
                href={link.href}
                className="text-xs lg:text-sm font-medium text-trueme/80 hover:text-trueme border-b-2 border-transparent hover:border-trueme-gold transition-all duration-300 pb-1 whitespace-nowrap"
              >
                {link.label.toUpperCase()}
              </Link>
              {index < rightQuickLinks.length - 1 && (
                <div className="w-px h-4 bg-trueme-gold/30 ml-6 lg:ml-8"></div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile/Tablet layout - Menu simplifié */}
        <div className="lg:hidden flex items-center justify-between w-full">
          
          {/* Menu hamburger avec recherche */}
          <div className="flex items-center gap-3">
            <button className="p-2 text-trueme/80 hover:text-trueme transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button className="p-2 text-trueme/80 hover:text-trueme transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
              </svg>
            </button>
          </div>

          {/* Boutons genres centrés - Mobile */}
          <div className="flex items-center gap-4 sm:gap-6">
            {genderOptions.map((option) => {
              const isActive = selectedGender === option.key
              
              return (
                <button
                  key={option.key}
                  onClick={() => handleGenderClick(option.key)}
                  className={`
                    text-xs sm:text-sm font-medium transition-all duration-300 pb-1 whitespace-nowrap
                    ${
                      isActive
                        ? 'text-trueme border-b-2 border-trueme-gold'
                        : 'text-trueme/80 hover:text-trueme border-b-2 border-transparent hover:border-trueme-gold'
                    }
                  `}
                >
                  {option.label}
                </button>
              )
            })}
          </div>

          {/* Espace pour équilibrer */}
          <div className="w-[68px]"></div>
        </div>
      </div>

      {/* Mobile Category Links - Only show when a gender is selected */}
      {selectedGender !== 'all' && (
        <div className="lg:hidden w-full mt-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {Object.entries(categoryMenus[selectedGender as keyof typeof categoryMenus] || {})
              .filter(([categoryName]) => categoryName !== 'selections')
              .map(([categoryName]) => (
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
