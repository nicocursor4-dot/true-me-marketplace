/**
 * Shared types for TRUE ME marketplace platform
 */

// User Status Enums
export enum Status {
  BRONZE = 'BRONZE',
  SILVER = 'SILVER',
  GOLD = 'GOLD',
  PLATINUM = 'PLATINUM',
  DIAMOND = 'DIAMOND'
}

export enum ArticleStatus {
  PRIVATE = 'PRIVATE',
  PENDING_VERIFICATION = 'PENDING_VERIFICATION',
  FOR_SALE = 'FOR_SALE',
  SOLD = 'SOLD',
  REJECTED = 'REJECTED'
}

export enum Condition {
  NEW = 'NEW',
  EXCELLENT = 'EXCELLENT',
  GOOD = 'GOOD',
  FAIR = 'FAIR'
}

export enum ListingType {
  STANDARD = 'STANDARD',
  VIP = 'VIP'
}

export enum VerificationStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED'
}

// Core Interfaces
export interface User {
  id: string;
  clerkId: string;
  email: string;
  username?: string;
  profileImageUrl?: string;
  slogan?: string;
  globalStatus: Status;
  isVip: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastActiveAt: Date;
}

export interface Article {
  id: string;
  name: string;
  description: string;
  imageUrls: string[];
  brand: string;
  category: string;
  size?: string;
  condition: Condition;
  ownerId: string;
  status: ArticleStatus;
  certificateUrl?: string;
  price?: number;
  listingType: ListingType;
  createdAt: Date;
  updatedAt: Date;
}

export interface BrandStatus {
  id: string;
  userId: string;
  brandName: string;
  status: Status;
  articleCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface VerificationRequest {
  id: string;
  articleId: string;
  status: VerificationStatus;
  rejectionReason?: string;
  reviewedAt?: Date;
  reviewedBy?: string;
  createdAt: Date;
}

// API Request/Response Types
export interface CreateArticleRequest {
  name: string;
  description: string;
  brand: string;
  category: string;
  size?: string;
  condition: Condition;
  imageUrls: string[];
  certificateUrl?: string;
}

export interface UpdateArticleRequest {
  name?: string;
  description?: string;
  brand?: string;
  category?: string;
  size?: string;
  condition?: Condition;
  imageUrls?: string[];
  certificateUrl?: string;
}

export interface ListForSaleRequest {
  price: number;
  size?: string;
  condition: Condition;
  listingType: ListingType;
  certificateUrl?: string;
}

export interface MarketplaceQuery {
  page?: number;
  limit?: number;
  brand?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  condition?: Condition;
  sortBy?: 'createdAt' | 'price' | 'brand';
  sortOrder?: 'asc' | 'desc';
}

// Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface BrandStatusWithProgress {
  brandName: string;
  currentStatus: Status;
  articleCount: number;
  articlesNeededForNext: number;
  progressPercentage: number;
}

export interface UserProfileResponse {
  id: string;
  email: string;
  username?: string;
  profileImageUrl?: string;
  slogan?: string;
  globalStatus: Status;
  isVip: boolean;
  totalVerifiedArticles: number;
  articlesNeededForNext: number;
  brandStatuses: BrandStatusWithProgress[];
  badges: string[];
}
