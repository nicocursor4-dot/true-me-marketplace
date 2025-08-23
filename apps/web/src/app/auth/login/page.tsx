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
    <main className="min-h-screen bg-[#FCFAF7] flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-block mb-8">
            <div className="w-16 h-16 bg-[#1A1A1A] rounded-[16px] flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-white">TM</span>
            </div>
          </Link>
          <h1 className="heading-secondary mb-4">Connexion</h1>
          <p className="text-minimal text-lg">Accédez à votre espace TRUE ME</p>
        </div>

        {/* Form */}
        <div className="card-minimal p-8 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#1A1A1A] mb-3">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-[#F8F8F8] border border-[#F0F0F0] rounded-[12px] text-[#1A1A1A] placeholder-minimal focus:outline-none focus:border-[#1A1A1A] transition-all duration-300"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#1A1A1A] mb-3">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-[#F8F8F8] border border-[#F0F0F0] rounded-[12px] text-[#1A1A1A] placeholder-minimal focus:outline-none focus:border-[#1A1A1A] transition-all duration-300"
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
                  className="w-5 h-5 text-[#1A1A1A] bg-[#F8F8F8] border-[#F0F0F0] rounded-[4px] focus:ring-[#1A1A1A] focus:ring-2"
                />
                <span className="ml-3 text-sm text-minimal">Se souvenir de moi</span>
              </label>
              <Link href="/auth/forgot-password" className="text-sm text-[#1A1A1A] hover:opacity-70 transition-opacity duration-300">
                Mot de passe oublié ?
              </Link>
            </div>

            <button type="submit" className="btn-primary w-full py-4">
              Se connecter
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="flex-1 border-t border-[#F0F0F0]"></div>
            <span className="px-6 text-sm text-minimal">ou</span>
            <div className="flex-1 border-t border-[#F0F0F0]"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-4">
            <button className="w-full bg-[#F8F8F8] border border-[#F0F0F0] text-[#1A1A1A] py-4 rounded-[12px] font-medium hover:bg-[#F0F0F0] transition-all duration-300 flex items-center justify-center space-x-3">
              <span>🔍</span>
              <span>Continuer avec Google</span>
            </button>
            <button className="w-full bg-[#F8F8F8] border border-[#F0F0F0] text-[#1A1A1A] py-4 rounded-[12px] font-medium hover:bg-[#F0F0F0] transition-all duration-300 flex items-center justify-center space-x-3">
              <span>📱</span>
              <span>Continuer avec Apple</span>
            </button>
          </div>
        </div>

        {/* Register Link */}
        <div className="text-center">
          <p className="text-minimal mb-6">
            Pas encore de compte ?{' '}
            <Link href="/auth/register" className="text-[#1A1A1A] font-medium hover:opacity-70 transition-opacity duration-300">
              Créer un compte
            </Link>
          </p>
          <Link href="/" className="text-minimal hover:text-[#1A1A1A] transition-colors duration-300">
            ← Retour à l'accueil
          </Link>
        </div>

      </div>
    </main>
  );
}
