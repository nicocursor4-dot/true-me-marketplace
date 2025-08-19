-- TRUE ME Database Schema
-- Execute this SQL directly in Supabase SQL Editor

-- Create enums
CREATE TYPE "Status" AS ENUM ('BRONZE', 'SILVER', 'GOLD', 'PLATINUM', 'DIAMOND');
CREATE TYPE "ArticleStatus" AS ENUM ('PRIVATE', 'PENDING_VERIFICATION', 'FOR_SALE', 'SOLD', 'REJECTED');
CREATE TYPE "Condition" AS ENUM ('NEW', 'EXCELLENT', 'GOOD', 'FAIR');
CREATE TYPE "ListingType" AS ENUM ('STANDARD', 'VIP');
CREATE TYPE "VerificationStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- Create users table
CREATE TABLE "users" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "clerkId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT,
    "profileImageUrl" TEXT,
    "slogan" TEXT,
    "globalStatus" "Status" NOT NULL DEFAULT 'BRONZE',
    "isVip" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastActiveAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- Create articles table
CREATE TABLE "articles" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrls" TEXT[],
    "brand" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "size" TEXT,
    "condition" "Condition" NOT NULL DEFAULT 'EXCELLENT',
    "ownerId" TEXT NOT NULL,
    "status" "ArticleStatus" NOT NULL DEFAULT 'PRIVATE',
    "certificateUrl" TEXT,
    "price" DECIMAL(10,2),
    "listingType" "ListingType" NOT NULL DEFAULT 'STANDARD',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "articles_pkey" PRIMARY KEY ("id")
);

-- Create brand_statuses table
CREATE TABLE "brand_statuses" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "userId" TEXT NOT NULL,
    "brandName" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'BRONZE',
    "articleCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "brand_statuses_pkey" PRIMARY KEY ("id")
);

-- Create verification_requests table
CREATE TABLE "verification_requests" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "articleId" TEXT NOT NULL,
    "status" "VerificationStatus" NOT NULL DEFAULT 'PENDING',
    "rejectionReason" TEXT,
    "reviewedAt" TIMESTAMP(3),
    "reviewedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "verification_requests_pkey" PRIMARY KEY ("id")
);

-- Create unique constraints
CREATE UNIQUE INDEX "users_clerkId_key" ON "users"("clerkId");
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");
CREATE UNIQUE INDEX "brand_statuses_userId_brandName_key" ON "brand_statuses"("userId", "brandName");
CREATE UNIQUE INDEX "verification_requests_articleId_key" ON "verification_requests"("articleId");

-- Add foreign key constraints
ALTER TABLE "articles" ADD CONSTRAINT "articles_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("clerkId") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "brand_statuses" ADD CONSTRAINT "brand_statuses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("clerkId") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "verification_requests" ADD CONSTRAINT "verification_requests_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "articles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
