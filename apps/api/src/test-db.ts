/**
 * Script de test de connectivité à la base de données
 */

import { prisma } from './config/database';

async function testDatabaseConnection() {
  try {
    console.log('🔍 Test de connexion à la base de données...');
    
    // Test de connexion simple
    await prisma.$connect();
    console.log('✅ Connexion réussie !');
    
    // Test de requête basique
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    console.log('✅ Requête test réussie:', result);
    
    await prisma.$disconnect();
    console.log('✅ Déconnexion réussie !');
    
  } catch (error) {
    console.error('❌ Erreur de connexion:', error);
    process.exit(1);
  }
}

testDatabaseConnection();
