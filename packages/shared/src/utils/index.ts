/**
 * Shared utilities for TRUE ME marketplace platform
 */

import { Status } from '../types';
import { STATUS_THRESHOLDS } from '../constants';

/**
 * Calculate status based on article count
 */
export function calculateGlobalStatus(articleCount: number): Status {
  const thresholds = STATUS_THRESHOLDS.GLOBAL;
  
  if (articleCount >= thresholds.DIAMOND.min) return Status.DIAMOND;
  if (articleCount >= thresholds.PLATINUM.min) return Status.PLATINUM;
  if (articleCount >= thresholds.GOLD.min) return Status.GOLD;
  if (articleCount >= thresholds.SILVER.min) return Status.SILVER;
  return Status.BRONZE;
}

/**
 * Calculate brand status based on article count for specific brand
 */
export function calculateBrandStatus(articleCount: number): Status {
  const thresholds = STATUS_THRESHOLDS.BRAND;
  
  if (articleCount >= thresholds.DIAMOND.min) return Status.DIAMOND;
  if (articleCount >= thresholds.PLATINUM.min) return Status.PLATINUM;
  if (articleCount >= thresholds.GOLD.min) return Status.GOLD;
  if (articleCount >= thresholds.SILVER.min) return Status.SILVER;
  return Status.BRONZE;
}

/**
 * Get articles needed for next status level
 */
export function getArticlesNeededForNextStatus(
  currentCount: number,
  isGlobal: boolean = true
): number {
  const thresholds = isGlobal ? STATUS_THRESHOLDS.GLOBAL : STATUS_THRESHOLDS.BRAND;
  const currentStatus = isGlobal 
    ? calculateGlobalStatus(currentCount)
    : calculateBrandStatus(currentCount);

  switch (currentStatus) {
    case Status.BRONZE:
      return thresholds.SILVER.min - currentCount;
    case Status.SILVER:
      return thresholds.GOLD.min - currentCount;
    case Status.GOLD:
      return thresholds.PLATINUM.min - currentCount;
    case Status.PLATINUM:
      return thresholds.DIAMOND.min - currentCount;
    case Status.DIAMOND:
      return 0; // Already at max level
    default:
      return 0;
  }
}

/**
 * Calculate progress percentage for current status level
 */
export function calculateProgressPercentage(
  currentCount: number,
  isGlobal: boolean = true
): number {
  const thresholds = isGlobal ? STATUS_THRESHOLDS.GLOBAL : STATUS_THRESHOLDS.BRAND;
  const currentStatus = isGlobal 
    ? calculateGlobalStatus(currentCount)
    : calculateBrandStatus(currentCount);

  let currentMin = 0;
  let currentMax = 0;

  switch (currentStatus) {
    case Status.BRONZE:
      currentMin = thresholds.BRONZE.min;
      currentMax = thresholds.BRONZE.max;
      break;
    case Status.SILVER:
      currentMin = thresholds.SILVER.min;
      currentMax = thresholds.SILVER.max;
      break;
    case Status.GOLD:
      currentMin = thresholds.GOLD.min;
      currentMax = thresholds.GOLD.max;
      break;
    case Status.PLATINUM:
      currentMin = thresholds.PLATINUM.min;
      currentMax = thresholds.PLATINUM.max;
      break;
    case Status.DIAMOND:
      return 100; // Max level reached
  }

  if (currentMax === Infinity) return 100;
  
  const progress = ((currentCount - currentMin) / (currentMax - currentMin + 1)) * 100;
  return Math.min(Math.max(progress, 0), 100);
}

/**
 * Format price with currency
 */
export function formatPrice(price: number, currency: string = 'AED'): string {
  return new Intl.NumberFormat('en-AE', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(price);
}

/**
 * Generate slug from string
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Generate QR code data for user profile
 */
export function generateQRCodeData(userId: string, username?: string, baseUrl?: string): string {
  const appUrl = baseUrl || 'https://trueme.app';
  return `${appUrl}/profile/${username || userId}`;
}
