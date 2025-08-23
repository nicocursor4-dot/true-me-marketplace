'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
    newsletter: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'Le prénom est requis';
    if (!formData.lastName.trim()) newErrors.lastName = 'Le nom est requis';
    if (!formData.email.trim()) newErrors.email = 'L\'email est requis';
    if (!formData.password) newErrors.password = 'Le mot de passe est requis';
    if (formData.password.length < 8) newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    if (!formData.acceptTerms) newErrors.acceptTerms = 'Vous devez accepter les conditions d\'utilisation';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // TODO: Implement registration logic
      console.log('Registration attempt:', formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <main className="min-h-screen bg-[#F5F2E8]">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="max-w-md mx-auto px-4">
          
          {/* Register Form */}
          <div className="bg-[rgba(255,255,255,0.4)] backdrop-blur-[15px] border border-[rgba(255,255,255,0.3)] rounded-[20px] p-8 shadow-[0_8px_32px_rgba(184,134,11,0.12)]">
            
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">TM</span>
              </div>
              <h1 className="text-2xl font-bold text-[#1C1C1E] mb-2">Créer un compte</h1>
              <p className="text-[#6B6B6B]">Rejoignez la communauté TRUE ME</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-[#1C1C1E] mb-2">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[rgba(255,255,255,0.6)] backdrop-blur-[10px] border rounded-lg text-[#1C1C1E] placeholder-[#6B6B6B] focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition-all duration-300 ${
                      errors.firstName ? 'border-red-300' : 'border-[rgba(255,255,255,0.3)]'
                    }`}
                    placeholder="John"
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-[#1C1C1E] mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[rgba(255,255,255,0.6)] backdrop-blur-[10px] border rounded-lg text-[#1C1C1E] placeholder-[#6B6B6B] focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition-all duration-300 ${
                      errors.lastName ? 'border-red-300' : 'border-[rgba(255,255,255,0.3)]'
                    }`}
                    placeholder="Doe"
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>

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
                  className={`w-full px-4 py-3 bg-[rgba(255,255,255,0.6)] backdrop-blur-[10px] border rounded-lg text-[#1C1C1E] placeholder-[#6B6B6B] focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition-all duration-300 ${
                    errors.email ? 'border-red-300' : 'border-[rgba(255,255,255,0.3)]'
                  }`}
                  placeholder="votre@email.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
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
                  className={`w-full px-4 py-3 bg-[rgba(255,255,255,0.6)] backdrop-blur-[10px] border rounded-lg text-[#1C1C1E] placeholder-[#6B6B6B] focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition-all duration-300 ${
                    errors.password ? 'border-red-300' : 'border-[rgba(255,255,255,0.3)]'
                  }`}
                  placeholder="••••••••"
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#1C1C1E] mb-2">
                  Confirmer le mot de passe
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[rgba(255,255,255,0.6)] backdrop-blur-[10px] border rounded-lg text-[#1C1C1E] placeholder-[#6B6B6B] focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition-all duration-300 ${
                    errors.confirmPassword ? 'border-red-300' : 'border-[rgba(255,255,255,0.3)]'
                  }`}
                  placeholder="••••••••"
                />
                {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
              </div>

              <div className="space-y-3 pt-2">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#B8860B] bg-[rgba(255,255,255,0.6)] border-[rgba(255,255,255,0.3)] rounded focus:ring-[#B8860B] focus:ring-2 mt-1"
                  />
                  <span className="ml-2 text-sm text-[#6B6B6B]">
                    J'accepte les{' '}
                    <Link href="/legal/terms" className="text-[#B8860B] hover:underline">
                      conditions d'utilisation
                    </Link>
                    {' '}et la{' '}
                    <Link href="/legal/privacy" className="text-[#B8860B] hover:underline">
                      politique de confidentialité
                    </Link>
                  </span>
                </label>
                {errors.acceptTerms && <p className="text-red-500 text-xs">{errors.acceptTerms}</p>}

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#B8860B] bg-[rgba(255,255,255,0.6)] border-[rgba(255,255,255,0.3)] rounded focus:ring-[#B8860B] focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-[#6B6B6B]">
                    Je souhaite recevoir les actualités TRUE ME
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-white py-3 rounded-lg font-medium hover:shadow-[0_6px_20px_rgba(184,134,11,0.3)] hover:scale-[1.02] transition-all duration-300 mt-6"
              >
                Créer mon compte
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-[rgba(255,255,255,0.3)]"></div>
              <span className="px-4 text-sm text-[#6B6B6B]">ou</span>
              <div className="flex-1 border-t border-[rgba(255,255,255,0.3)]"></div>
            </div>

            {/* Social Registration */}
            <div className="space-y-3">
              <button className="w-full bg-[rgba(255,255,255,0.6)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.3)] text-[#1C1C1E] py-3 rounded-lg font-medium hover:bg-[rgba(255,255,255,0.8)] transition-all duration-300 flex items-center justify-center space-x-2">
                <span>🔍</span>
                <span>S'inscrire avec Google</span>
              </button>
              <button className="w-full bg-[rgba(255,255,255,0.6)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.3)] text-[#1C1C1E] py-3 rounded-lg font-medium hover:bg-[rgba(255,255,255,0.8)] transition-all duration-300 flex items-center justify-center space-x-2">
                <span>📱</span>
                <span>S'inscrire avec Apple</span>
              </button>
            </div>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-[#6B6B6B]">
                Déjà un compte ?{' '}
                <Link href="/auth/login" className="text-[#B8860B] font-medium hover:underline">
                  Se connecter
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
