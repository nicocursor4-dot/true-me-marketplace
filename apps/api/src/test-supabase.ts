/**
 * Test de connectivité et insertion de données de test
 */

import { supabase } from './config/supabase';

async function testSupabaseConnection() {
  try {
    console.log('🔍 Test de connexion Supabase...');
    
    // Test 1: Vérifier les tables créées
    const { data: tables, error: tablesError } = await supabase
      .from('users')
      .select('id')
      .limit(1);
    
    if (tablesError) {
      console.error('❌ Erreur accès table users:', tablesError);
      return false;
    }
    
    console.log('✅ Table users accessible !');
    
    // Test 2: Insérer un utilisateur test
    const { data: user, error: userError } = await supabase
      .from('users')
      .insert({
        clerkId: 'test_user_1',
        email: 'test@trueme.com',
        username: 'testuser',
        globalStatus: 'GOLD'
      })
      .select()
      .single();
    
    if (userError && userError.code !== '23505') { // Ignore duplicate error
      console.error('❌ Erreur création user:', userError);
      return false;
    }
    
    console.log('✅ Utilisateur créé/existant:', user?.username || 'testuser');
    
    // Test 3: Insérer un article test
    const { data: article, error: articleError } = await supabase
      .from('articles')
      .insert({
        name: 'Test Hermès Birkin',
        description: 'Sac Hermès Birkin 35cm en cuir Epsom noir',
        imageUrls: ['https://example.com/birkin.jpg'],
        brand: 'Hermès',
        category: 'Sacs',
        condition: 'EXCELLENT',
        ownerId: 'test_user_1',
        status: 'FOR_SALE',
        price: 12500.00
      })
      .select()
      .single();
    
    if (articleError && articleError.code !== '23505') {
      console.error('❌ Erreur création article:', articleError);
      return false;
    }
    
    console.log('✅ Article créé/existant:', article?.name || 'Test Hermès Birkin');
    
    // Test 4: Vérifier les status
    const { data: userData, error: statusError } = await supabase
      .from('users')
      .select('globalStatus, isVip')
      .eq('clerkId', 'test_user_1')
      .single();
    
    if (statusError) {
      console.error('❌ Erreur récupération status:', statusError);
      return false;
    }
    
    console.log('✅ Status système fonctionnel:');
    console.log('  - Status global:', userData.globalStatus);
    console.log('  - VIP:', userData.isVip);
    
    console.log('\n🎉 TOUS LES TESTS RÉUSSIS - Base de données opérationnelle !');
    return true;
    
  } catch (error) {
    console.error('❌ Erreur de connexion Supabase:', error);
    return false;
  }
}

testSupabaseConnection();
