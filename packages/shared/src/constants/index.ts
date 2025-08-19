/**
 * Shared constants for TRUE ME marketplace platform
 */

// Status progression thresholds
export const STATUS_THRESHOLDS = {
  GLOBAL: {
    BRONZE: { min: 0, max: 9 },
    SILVER: { min: 10, max: 19 },
    GOLD: { min: 20, max: 29 },
    PLATINUM: { min: 30, max: 49 },
    DIAMOND: { min: 50, max: Infinity }
  },
  BRAND: {
    BRONZE: { min: 0, max: 5 },
    SILVER: { min: 6, max: 10 },
    GOLD: { min: 11, max: 15 },
    PLATINUM: { min: 16, max: 20 },
    DIAMOND: { min: 21, max: Infinity }
  }
} as const;

// Brand categories
export const LUXURY_BRANDS = {
  ULTRA_LUXURY: [
    'Hermès', 'Chanel', 'Dior', 'Louis Vuitton', 'Balenciaga',
    'Bottega Veneta', 'Celine', 'Fendi', 'Givenchy', 'Loewe'
  ],
  PREMIUM: [
    'Sandro', 'The Kooples', 'Zadig & Voltaire', 'Hugo Boss',
    'Ralph Lauren', 'Maje', 'Isabel Marant', 'Ganni'
  ]
} as const;

// Categories
export const CATEGORIES = {
  WOMEN: ['Bags', 'Shoes', 'Clothing', 'Accessories', 'Jewelry'],
  MEN: ['Bags', 'Shoes', 'Clothing', 'Accessories', 'Watches'],
  KIDS: ['Clothing', 'Shoes', 'Accessories']
} as const;

// TRUE ME color palette
export const COLORS = {
  WHITE: '#FFFFFF',
  BLACK: '#1C1C1E',
  GOLD: '#D4AF37',
  GRAY: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827'
  }
} as const;

// Commission rates
export const COMMISSION_RATES = {
  STANDARD: 0.20, // 20%
  VIP: 0.20 // 20% + 50 AED service fee
} as const;

// VIP service fee
export const VIP_SERVICE_FEE = 50; // AED

// Pagination defaults
export const PAGINATION = {
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100
} as const;

// File upload limits
export const UPLOAD_LIMITS = {
  MAX_IMAGES_PER_ARTICLE: 4,
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp']
} as const;

// Inactivity thresholds (in months)
export const INACTIVITY_THRESHOLDS = {
  WARNING: 3,
  REGRESSION: 6
} as const;
