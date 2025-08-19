'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

interface User {
  id: string;
  clerkId: string;
  email: string;
  username: string;
  globalStatus: string;
  isVip: boolean;
  createdAt: string;
}

interface Article {
  id: string;
  name: string;
  brand: string;
  condition: string;
  status: string;
  price: number;
  ownerId: string;
}

export default function TestDbPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Fetch users
      const { data: usersData, error: usersError } = await supabase
        .from('users')
        .select('*')
        .order('createdAt', { ascending: false });

      if (usersError) throw usersError;

      // Fetch articles
      const { data: articlesData, error: articlesError } = await supabase
        .from('articles')
        .select('*')
        .order('createdAt', { ascending: false });

      if (articlesError) throw articlesError;

      setUsers(usersData || []);
      setArticles(articlesData || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createTestUser = async () => {
    const testUser = {
      clerkId: `test_user_${Date.now()}`,
      email: `user_${Date.now()}@trueme.com`,
      username: `user${Date.now()}`,
      globalStatus: 'PLATINUM',
      isVip: true
    };

    const { error } = await supabase
      .from('users')
      .insert(testUser);

    if (error) {
      setError(error.message);
    } else {
      fetchData();
    }
  };

  const createTestArticle = async () => {
    if (users.length === 0) {
      setError('Créez d\'abord un utilisateur');
      return;
    }

    const testArticle = {
      name: `Article Test ${Date.now()}`,
      description: 'Article de test pour vérifier le système',
      imageUrls: ['https://example.com/test.jpg'],
      brand: ['Chanel', 'Hermès', 'Louis Vuitton', 'Dior'][Math.floor(Math.random() * 4)],
      category: 'Test',
      condition: ['NEW', 'EXCELLENT', 'GOOD'][Math.floor(Math.random() * 3)],
      ownerId: users[0].clerkId,
      status: 'FOR_SALE',
      price: Math.floor(Math.random() * 10000) + 100
    };

    const { error } = await supabase
      .from('articles')
      .insert(testArticle);

    if (error) {
      setError(error.message);
    } else {
      fetchData();
    }
  };

  const getStatusColor = (status: string) => {
    const colors = {
      BRONZE: 'text-orange-600 bg-orange-100',
      SILVER: 'text-gray-600 bg-gray-100',
      GOLD: 'text-yellow-600 bg-yellow-100',
      PLATINUM: 'text-purple-600 bg-purple-100',
      DIAMOND: 'text-blue-600 bg-blue-100'
    };
    return colors[status as keyof typeof colors] || 'text-gray-600 bg-gray-100';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">🔄 Chargement des données...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
          🎯 TRUE ME - Test Base de Données
        </h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            <strong>Erreur:</strong> {error}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {/* Section Utilisateurs */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">👥 Utilisateurs ({users.length})</h2>
              <button
                onClick={createTestUser}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                + Créer Utilisateur
              </button>
            </div>

            <div className="space-y-4">
              {users.map((user) => (
                <div key={user.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{user.username}</h3>
                      <p className="text-gray-600 text-sm">{user.email}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(user.globalStatus)}`}>
                        {user.globalStatus}
                      </span>
                      {user.isVip && (
                        <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium">
                          VIP ✨
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">
                    Créé: {new Date(user.createdAt).toLocaleString('fr-FR')}
                  </p>
                </div>
              ))}

              {users.length === 0 && (
                <p className="text-gray-500 text-center py-8">
                  Aucun utilisateur. Cliquez sur "Créer Utilisateur" pour commencer.
                </p>
              )}
            </div>
          </div>

          {/* Section Articles */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">👜 Articles ({articles.length})</h2>
              <button
                onClick={createTestArticle}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
              >
                + Créer Article
              </button>
            </div>

            <div className="space-y-4">
              {articles.map((article) => (
                <div key={article.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{article.name}</h3>
                      <p className="text-gray-600 text-sm">{article.brand}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">
                        {article.price ? `${article.price}€` : 'Prix non défini'}
                      </div>
                      <div className="text-sm text-gray-500">{article.condition}</div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      article.status === 'FOR_SALE' ? 'bg-green-100 text-green-800' :
                      article.status === 'PRIVATE' ? 'bg-gray-100 text-gray-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {article.status.replace('_', ' ')}
                    </span>
                  </div>
                </div>
              ))}

              {articles.length === 0 && (
                <p className="text-gray-500 text-center py-8">
                  Aucun article. Cliquez sur "Créer Article" pour commencer.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Section Statistiques */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📊 Statistiques</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600">{users.length}</div>
              <div className="text-sm text-blue-600">Utilisateurs</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600">{articles.length}</div>
              <div className="text-sm text-green-600">Articles</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600">
                {users.filter(u => u.isVip).length}
              </div>
              <div className="text-sm text-purple-600">Utilisateurs VIP</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-3xl font-bold text-yellow-600">
                {articles.filter(a => a.status === 'FOR_SALE').length}
              </div>
              <div className="text-sm text-yellow-600">Articles en vente</div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={fetchData}
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            🔄 Actualiser les données
          </button>
        </div>
      </div>
    </div>
  );
}
