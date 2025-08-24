'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { GlassCard } from '@/components/ui/GlassCard';
import { Shield } from 'lucide-react';

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
    <main className="min-h-screen flex items-center justify-center bg-trueme-cream p-8">
      <div className="w-full max-w-lg">
        <form onSubmit={handleSubmit} className="glass-premium p-16 space-y-10 fade-in">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <Shield className="w-16 h-16 mx-auto text-trueme-gold" />
            </div>
            <h1 className="text-4xl font-bold text-trueme mb-4">TRUE ME</h1>
            <p className="text-trueme-light text-xl">Connexion à votre compte</p>
          </div>

          {/* Form Fields */}
          <div className="space-y-8">
            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-trueme mb-4">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-5 glass-morphism border-0 rounded-2xl text-trueme placeholder-trueme-light focus:outline-none focus:ring-2 focus:ring-trueme-gold transition-all duration-400 text-lg"
                placeholder="votre@email.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-lg font-semibold text-trueme mb-4">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-6 py-5 glass-morphism border-0 rounded-2xl text-trueme placeholder-trueme-light focus:outline-none focus:ring-2 focus:ring-trueme-gold transition-all duration-400 text-lg"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          {/* Options */}
          <div className="flex items-center justify-between">
            <label className="flex items-center text-trueme-light text-lg">
              <input 
                type="checkbox" 
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="mr-3 w-5 h-5" 
              />
              Se souvenir de moi
            </label>
            <a href="#" className="text-trueme-gold hover:text-trueme font-medium text-lg luxury-hover">
              Mot de passe oublié ?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full btn-primary py-6 text-xl font-bold"
          >
            Se connecter
          </button>

          {/* Footer */}
          <div className="text-center">
            <p className="text-trueme-light text-lg">
              Pas encore de compte ?{' '}
              <Link href="/auth/register" className="text-trueme-gold hover:text-trueme font-semibold luxury-hover">
                Créer un compte
              </Link>
            </p>
          </div>
          
        </form>
      </div>
    </main>
  );
}
