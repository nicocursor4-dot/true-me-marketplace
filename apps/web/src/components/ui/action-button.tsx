"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ActionButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  icon?: LucideIcon;
  variant?: 'primary' | 'secondary';
  className?: string;
  fullWidth?: boolean;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  onClick,
  href,
  icon: Icon,
  variant = 'primary',
  className = '',
  fullWidth = true
}) => {
  const baseClasses = `
    relative overflow-hidden rounded-full font-medium text-sm
    transition-all duration-300 ease-out
    flex items-center justify-between gap-3
    px-6 py-4
    ${fullWidth ? 'w-full' : ''}
  `;

  const variants = {
    primary: 'bg-trueme-gold hover:bg-trueme-gold/90 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-white hover:bg-gray-50 text-trueme border border-gray-200 hover:border-trueme-gold/30'
  };

  const ButtonContent = () => (
    <motion.div
      className={`${baseClasses} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-trueme-gold/20 to-trueme-gold/0"
        initial={{ x: '-100%', opacity: 0 }}
        whileHover={{ x: '100%', opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4" />}
        {children}
      </span>
      
      {/* Arrow with animation */}
      <motion.div
        className="relative z-10"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        <ArrowRight className="w-4 h-4" />
      </motion.div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        <ButtonContent />
      </a>
    );
  }

  return (
    <button onClick={onClick} className="block">
      <ButtonContent />
    </button>
  );
};
