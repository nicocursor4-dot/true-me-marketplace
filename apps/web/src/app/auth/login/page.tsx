'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication logic
    console.log('Login attempt:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <main className="min-h-screen bg-[#F5F2E8]">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="max-w-md mx-auto px-4">
          
          {/* Login Form */}
          <div className="bg-[rgba(255,255,255,0.4)] backdrop-blur-[15px] border border-[rgba(255,255,255,0.3)] rounded-[20px] p-8 shadow-[0_8px_32px_rgba(184,134,11,0.12)]">
            
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">TM</span>
              </div>
              <h1 className="text-2xl font-bold text-[#1C1C1E] mb-2">Connexion</h1>
              <p className="text-[#6B6B6B]">Accédez à votre espace TRUE ME</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1C1C1E] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[rgba(255,255,255,0.6)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.3)] rounded-lg text-[#1C1C1E] placeholder-[#6B6B6B] focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition-all duration-300"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#1C1C1E] mb-2">
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[rgba(255,255,255,0.6)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.3)] rounded-lg text-[#1C1C1E] placeholder-[#6B6B6B] focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition-all duration-300"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#B8860B] bg-[rgba(255,255,255,0.6)] border-[rgba(255,255,255,0.3)] rounded focus:ring-[#B8860B] focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-[#6B6B6B]">Se souvenir de moi</span>
                </label>
                <Link href="/auth/forgot-password" className="text-sm text-[#B8860B] hover:underline">
                  Mot de passe oublié ?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-white py-3 rounded-lg font-medium hover:shadow-[0_6px_20px_rgba(184,134,11,0.3)] hover:scale-[1.02] transition-all duration-300"
              >
                Se connecter
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-[rgba(255,255,255,0.3)]"></div>
              <span className="px-4 text-sm text-[#6B6B6B]">ou</span>
              <div className="flex-1 border-t border-[rgba(255,255,255,0.3)]"></div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <button className="w-full bg-[rgba(255,255,255,0.6)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.3)] text-[#1C1C1E] py-3 rounded-lg font-medium hover:bg-[rgba(255,255,255,0.8)] transition-all duration-300 flex items-center justify-center space-x-2">
                <span>🔍</span>
                <span>Continuer avec Google</span>
              </button>
              <button className="w-full bg-[rgba(255,255,255,0.6)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.3)] text-[#1C1C1E] py-3 rounded-lg font-medium hover:bg-[rgba(255,255,255,0.8)] transition-all duration-300 flex items-center justify-center space-x-2">
                <span>📱</span>
                <span>Continuer avec Apple</span>
              </button>
            </div>

            {/* Register Link */}
            <div className="mt-6 text-center">
              <p className="text-[#6B6B6B]">
                Pas encore de compte ?{' '}
                <Link href="/auth/register" className="text-[#B8860B] font-medium hover:underline">
                  Créer un compte
                </Link>
              </p>
            </div>

          </div>

          {/* Back to Home */}
          <div className="text-center mt-6">
            <Link href="/" className="text-[#6B6B6B] hover:text-[#B8860B] transition-colors duration-300">
              ← Retour à l'accueil
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}
