const { PrismaClient } = require('@prisma/client');
require('dotenv').config({ path: './apps/api/.env' });

async function testConnection() {
  console.log('🔍 Test de connexion Prisma à Supabase...');
  console.log('DATABASE_URL:', process.env.DATABASE_URL);
  
  const prisma = new PrismaClient();
  
  try {
    await prisma.$connect();
    console.log('✅ Connexion Prisma réussie !');
    
    // Test d'une requête simple
    const result = await prisma.$queryRaw`SELECT version();`;
    console.log('📊 Version PostgreSQL:', result[0].version);
    
  } catch (error) {
    console.error('❌ Erreur de connexion:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
