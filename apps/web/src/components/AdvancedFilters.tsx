'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface FilterOption {
  value: string
  label: string
  count?: number
}

interface AdvancedFiltersProps {
  selectedGender: 'all' | 'homme' | 'femme' | 'enfant'
  selectedCategory: string
  selectedBrand: string
  onCategoryChange: (category: string) => void
  onBrandChange: (brand: string) => void
  className?: string
}

// Données des filtres organisées par genre
const filterData = {
  categories: {
    all: [
      { value: 'all', label: 'Toutes catégories', count: 30 },
      { value: 'sac', label: 'Sacs', count: 15 },
      { value: 'bijou', label: 'Bijoux', count: 8 },
      { value: 'chaussure', label: 'Chaussures', count: 7 }
    ],
    homme: [
      { value: 'all', label: 'Toutes catégories', count: 8 },
      { value: 'sac', label: 'Sacs', count: 3 },
      { value: 'chaussure', label: 'Chaussures', count: 3 },
      { value: 'bijou', label: 'Montres', count: 2 }
    ],
    femme: [
      { value: 'all', label: 'Toutes catégories', count: 20 },
      { value: 'sac', label: 'Sacs', count: 12 },
      { value: 'bijou', label: 'Bijoux', count: 6 },
      { value: 'chaussure', label: 'Chaussures', count: 2 }
    ],
    enfant: [
      { value: 'all', label: 'Toutes catégories', count: 2 },
      { value: 'chaussure', label: 'Chaussures', count: 2 }
    ]
  },
  brands: {
    all: [
      { value: 'all', label: 'Toutes marques', count: 30 },
      { value: 'Louis Vuitton', label: 'Louis Vuitton', count: 8 },
      { value: 'Hermès', label: 'Hermès', count: 6 },
      { value: 'Chanel', label: 'Chanel', count: 5 },
      { value: 'Dior', label: 'Dior', count: 4 },
      { value: 'Gucci', label: 'Gucci', count: 3 },
      { value: 'Cartier', label: 'Cartier', count: 2 },
      { value: 'Van Cleef & Arpels', label: 'Van Cleef & Arpels', count: 2 }
    ],
    homme: [
      { value: 'all', label: 'Toutes marques', count: 8 },
      { value: 'Louis Vuitton', label: 'Louis Vuitton', count: 3 },
      { value: 'Hermès', label: 'Hermès', count: 2 },
      { value: 'Gucci', label: 'Gucci', count: 2 },
      { value: 'Dior', label: 'Dior', count: 1 }
    ],
    femme: [
      { value: 'all', label: 'Toutes marques', count: 20 },
      { value: 'Louis Vuitton', label: 'Louis Vuitton', count: 5 },
      { value: 'Hermès', label: 'Hermès', count: 4 },
      { value: 'Chanel', label: 'Chanel', count: 5 },
      { value: 'Dior', label: 'Dior', count: 3 },
      { value: 'Cartier', label: 'Cartier', count: 2 },
      { value: 'Van Cleef & Arpels', label: 'Van Cleef & Arpels', count: 1 }
    ],
    enfant: [
      { value: 'all', label: 'Toutes marques', count: 2 },
      { value: 'Gucci', label: 'Gucci', count: 1 },
      { value: 'Dior', label: 'Dior', count: 1 }
    ]
  }
}

const FilterDropdown = ({
  label,
  options,
  selectedValue,
  onSelect,
  placeholder
}: {
  label: string
  options: FilterOption[]
  selectedValue: string
  onSelect: (value: string) => void
  placeholder: string
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const selectedOption = options.find(opt => opt.value === selectedValue)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full min-w-[200px] px-4 py-3 bg-white border border-trueme-gold/20 rounded-lg hover:border-trueme-gold/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-trueme-gold/20"
      >
        <div className="flex flex-col items-start">
          <span className="text-xs text-trueme-secondary font-medium uppercase tracking-wide">
            {label}
          </span>
          <span className="text-sm text-trueme font-medium">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>
        <ChevronDown 
          className={`w-4 h-4 text-trueme-gold transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-trueme-gold/20 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto"
          >
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onSelect(option.value)
                  setIsOpen(false)
                }}
                className={`w-full text-left px-4 py-3 hover:bg-trueme-gold/5 transition-colors duration-150 flex items-center justify-between ${
                  selectedValue === option.value ? 'bg-trueme-gold/10 text-trueme-gold' : 'text-trueme'
                }`}
              >
                <span className="font-medium">{option.label}</span>
                {option.count && (
                  <span className="text-xs text-trueme-secondary bg-trueme-gold/10 px-2 py-0.5 rounded-full">
                    {option.count}
                  </span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function AdvancedFilters({
  selectedGender,
  selectedCategory,
  selectedBrand,
  onCategoryChange,
  onBrandChange,
  className = ''
}: AdvancedFiltersProps) {
  const currentCategories = filterData.categories[selectedGender] || filterData.categories.all
  const currentBrands = filterData.brands[selectedGender] || filterData.brands.all

  return (
    <motion.div 
      className={`bg-white/50 backdrop-blur-sm border-t border-trueme-gold/10 py-6 ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2 text-sm text-trueme-secondary">
            <span className="font-medium">Filtres avancés :</span>
          </div>
          
          <FilterDropdown
            label="Catégorie"
            options={currentCategories}
            selectedValue={selectedCategory}
            onSelect={onCategoryChange}
            placeholder="Choisir une catégorie"
          />

          <FilterDropdown
            label="Marque"
            options={currentBrands}
            selectedValue={selectedBrand}
            onSelect={onBrandChange}
            placeholder="Choisir une marque"
          />

          {(selectedCategory !== 'all' || selectedBrand !== 'all') && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => {
                onCategoryChange('all')
                onBrandChange('all')
              }}
              className="px-4 py-2 text-sm text-trueme-gold hover:text-trueme border border-trueme-gold/30 hover:border-trueme-gold rounded-lg transition-all duration-200"
            >
              Réinitialiser les filtres
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
