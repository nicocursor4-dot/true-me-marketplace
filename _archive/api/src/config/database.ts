/**
 * Database configuration with Prisma Client
 */

import { PrismaClient } from '@prisma/client';

// Singleton Prisma client
declare global {
  var __prisma: PrismaClient | undefined;
}

export const prisma = global.__prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.__prisma = prisma;
}

export const databaseConfig = {
  url: process.env.DATABASE_URL || '',
};
