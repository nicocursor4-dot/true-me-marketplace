'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, X } from 'lucide-react'

interface LuxuryFilterMenuProps {
  isOpen: boolean
  onClose: () => void
  onNavbarToggle: (hidden: boolean) => void
  initialGender?: string
  isMobile?: boolean
}

type MenuLevel = 'gender' | 'categories' | 'subcategories'

interface CategoryData {
  [key: string]: {
    [subcategory: string]: string[]
  }
}

const LuxuryFilterMenu: React.FC<LuxuryFilterMenuProps> = ({
  isOpen,
  onClose,
  onNavbarToggle,
  initialGender,
  isMobile = false
}) => {
  const [currentLevel, setCurrentLevel] = useState<MenuLevel>('gender')
  const [selectedGender, setSelectedGender] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  // Categories data structure - same as PC menu
  const categoriesData: CategoryData = {
    homme: {
      'Vêtements': [
        'Costumes & Smoking',
        'Blazers & Vestes', 
        'Manteaux & Trenchs',
        'Pulls & Mailles',
        'Chemises',
        'T-shirts & Polos',
        'Pantalons & Chinos',
        'Jeans & Denim',
        'Shorts'
      ],
      'Chaussures': [
        'Sneakers',
        'Chaussures de ville',
        'Bottes & Bottines',
        'Mocassins & Loafers',
        'Sandales'
      ],
      'Accessoires': [
        'Sacs & Maroquinerie',
        'Montres',
        'Bijoux',
        'Ceintures',
        'Écharpes & Foulards',
        'Lunettes de soleil'
      ]
    },
    femme: {
      'Vêtements': [
        'Robes',
        'Hauts & Blouses',
        'Vestes & Blazers',
        'Manteaux',
        'Jupes',
        'Pantalons',
        'Jeans',
        'Lingerie'
      ],
      'Chaussures': [
        'Escarpins',
        'Sandales', 
        'Bottes',
        'Sneakers',
        'Ballerines'
      ],
      'Sacs': [
        'Sacs à main',
        'Sacs à dos',
        'Pochettes',
        'Sacs de soirée'
      ],
      'Accessoires': [
        'Bijoux',
        'Montres',
        'Foulards',
        'Lunettes de soleil'
      ]
    },
    enfant: {
      'Fille': [
        'Robes',
        'Hauts',
        'Pantalons',
        'Chaussures'
      ],
      'Garçon': [
        'T-shirts',
        'Pantalons',
        'Vestes',
        'Chaussures'
      ],
      'Bébé': [
        'Bodies',
        'Pyjamas',
        'Accessoires'
      ]
    }
  }

  // Hide navbar when menu opens (only on mobile)
  useEffect(() => {
    if (isMobile) {
      onNavbarToggle(isOpen)
    }
    
    if (isOpen) {
      if (isMobile) {
        document.body.style.overflow = 'hidden'
      }
      // Set initial state based on initialGender
      if (initialGender) {
        setSelectedGender(initialGender)
        setCurrentLevel('categories')
      } else {
        setCurrentLevel('gender')
        setSelectedGender('')
      }
    } else {
      if (isMobile) {
        document.body.style.overflow = ''
      }
      // Reset when closing
      setCurrentLevel('gender')
      setSelectedGender('')
      setSelectedCategory('')
    }

    return () => {
      if (isMobile) {
        document.body.style.overflow = ''
      }
    }
  }, [isOpen, onNavbarToggle, initialGender, isMobile])

  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender)
    setCurrentLevel('categories')
  }

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
    setCurrentLevel('subcategories')
  }

  const handleBack = () => {
    if (currentLevel === 'subcategories') {
      setCurrentLevel('categories')
      setSelectedCategory('')
    } else if (currentLevel === 'categories') {
      setCurrentLevel('gender')
      setSelectedGender('')
    }
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  }

  const renderGenderSelection = () => (
    <motion.div
      key="gender"
      custom={0}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="flex flex-col h-full justify-center items-center space-y-12"
    >
      {['homme', 'femme', 'enfant'].map((gender) => (
        <button
          key={gender}
          onClick={() => handleGenderSelect(gender)}
          className="text-black text-4xl font-light tracking-wide hover:text-gray-600 transition-colors duration-300 capitalize"
        >
          {gender}
        </button>
      ))}
    </motion.div>
  )

  const renderCategories = () => (
    <motion.div
      key="categories" 
      custom={1}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="flex flex-col h-full justify-center items-center space-y-8"
    >
      <h2 className="text-black text-2xl font-light tracking-wide uppercase mb-8">
        {selectedGender}
      </h2>
      {Object.keys(categoriesData[selectedGender] || {}).map((category) => (
        <button
          key={category}
          onClick={() => handleCategorySelect(category)}
          className="text-black text-3xl font-light tracking-wide hover:text-gray-600 transition-colors duration-300"
        >
          {category}
        </button>
      ))}
    </motion.div>
  )

  const renderSubcategories = () => (
    <motion.div
      key="subcategories"
      custom={2}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="flex flex-col h-full justify-center items-center space-y-6"
    >
      <h2 className="text-black text-xl font-light tracking-wide uppercase mb-6">
        {selectedGender} / {selectedCategory}
      </h2>
      <div className="max-h-96 overflow-y-auto space-y-4 scrollbar-hide">
        {(categoriesData[selectedGender]?.[selectedCategory] || []).map((subcategory) => (
          <button
            key={subcategory}
            onClick={() => {
              // Navigate to filtered results
              window.location.href = `/marketplace/${selectedGender}?category=${selectedCategory}&subcategory=${subcategory}`
            }}
            className="text-black text-2xl font-light tracking-wide hover:text-gray-600 transition-colors duration-300 block"
          >
            {subcategory}
          </button>
        ))}
      </div>
    </motion.div>
  )

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: isMobile ? '100%' : -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: isMobile ? '100%' : -10 }}
          transition={{ duration: 0.2 }}
          className={`
            ${isMobile 
              ? 'fixed inset-0 bg-trueme-cream z-[70000] flex flex-col' 
              : 'absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-b-2xl shadow-2xl z-50 max-h-96'
            }
          `}
        >
          {/* Header */}
          {isMobile && (
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              {currentLevel !== 'gender' && (
                <button
                  onClick={handleBack}
                  className="p-2 hover:bg-gray-50 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-black" />
                </button>
              )}
              {currentLevel === 'gender' && <div />}
              
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-50 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-black" />
              </button>
            </div>
          )}

          {/* Content */}
          <div className={`${isMobile ? 'flex-1 relative overflow-hidden' : 'p-4 overflow-y-auto'}`}>
            {isMobile ? (
              <AnimatePresence mode="wait" custom={currentLevel}>
                {currentLevel === 'gender' && renderGenderSelection()}
                {currentLevel === 'categories' && renderCategories()}
                {currentLevel === 'subcategories' && renderSubcategories()}
              </AnimatePresence>
            ) : (
              <div className="grid grid-cols-3 gap-8">
                {/* Desktop Layout: 3 columns for homme, femme, enfant */}
                {['homme', 'femme', 'enfant'].map((gender) => (
                  <div key={gender} className="space-y-4">
                    <h3 className="text-lg font-semibold text-trueme capitalize border-b border-gray-200 pb-2">
                      {gender}
                    </h3>
                    <div className="space-y-2">
                      {Object.keys(categoriesData[gender] || {}).map((category) => (
                        <button
                          key={category}
                          onClick={() => {
                            window.location.href = `/marketplace/${gender}?category=${category}`
                          }}
                          className="block text-left text-sm text-gray-700 hover:text-trueme hover:bg-gray-50 px-2 py-1 rounded transition-colors w-full"
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LuxuryFilterMenu
