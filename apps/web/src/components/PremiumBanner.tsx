"use client";

import React from 'react'

const PremiumBanner: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`w-full border-y ${className}`}
      style={{ borderColor: '#C89F5B', backgroundColor: 'hsl(var(--background))' }}
      aria-label="Bandeau premium TRUE ME"
    >
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-2 md:py-3 text-center">
        <p className="font-lora italic text-[#0A0A0A] text-[20px] md:text-[28px] leading-relaxed">
          « Un écosystème authentifié, une communauté sélective, un label de confiance mondiale. »
        </p>
      </div>
    </div>
  )
}

export default PremiumBanner
