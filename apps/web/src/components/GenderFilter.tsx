'use client'

import React from 'react'

interface GenderFilterProps {
  selectedGender: 'all' | 'homme' | 'femme' | 'enfant'
  onGenderChange: (gender: 'all' | 'homme' | 'femme' | 'enfant') => void
  className?: string
}

const GenderFilter: React.FC<GenderFilterProps> = ({ 
  selectedGender, 
  onGenderChange,
  className = ""
}) => {
  const genderOptions = [
    { key: 'all' as const, label: 'TOUT', display: 'Tout' },
    { key: 'homme' as const, label: 'HOMME', display: 'Homme' },
    { key: 'femme' as const, label: 'FEMME', display: 'Femme' },
    { key: 'enfant' as const, label: 'ENFANT', display: 'Enfant' }
  ]

  return (
    <div className={`flex items-center justify-center space-x-8 py-6 ${className}`}>
      {genderOptions.map((option, index) => (
        <React.Fragment key={option.key}>
          <button
            onClick={() => onGenderChange(option.key)}
            className={`text-sm md:text-base font-medium tracking-[0.15em] transition-all duration-300 hover:text-trueme-gold ${
              selectedGender === option.key
                ? 'text-trueme-gold border-b-2 border-trueme-gold pb-1'
                : 'text-trueme hover:scale-105'
            }`}
          >
            {option.label}
          </button>
          {index < genderOptions.length - 1 && (
            <span className="text-trueme-gold/40 text-sm">|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default GenderFilter
