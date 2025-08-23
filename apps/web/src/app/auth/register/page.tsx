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
    <main className="min-h-screen bg-[#FCFAF7] flex items-center justify-center p-8">
      <div className="w-full max-w-lg">
        
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-block mb-8">
            <div className="w-16 h-16 bg-[#1A1A1A] rounded-[16px] flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-white">TM</span>
            </div>
          </Link>
          <h1 className="heading-secondary mb-4">Créer un compte</h1>
          <p className="text-minimal text-lg">Rejoignez la communauté TRUE ME</p>
        </div>

        {/* Form */}
        <div className="card-minimal p-8 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-[#1A1A1A] mb-3">
                  Prénom
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 bg-[#F8F8F8] border rounded-[12px] text-[#1A1A1A] placeholder-minimal focus:outline-none focus:border-[#1A1A1A] transition-all duration-300 ${
                    errors.firstName ? 'border-red-300' : 'border-[#F0F0F0]'
                  }`}
                  placeholder="John"
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-2">{errors.firstName}</p>}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-[#1A1A1A] mb-3">
                  Nom
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 bg-[#F8F8F8] border rounded-[12px] text-[#1A1A1A] placeholder-minimal focus:outline-none focus:border-[#1A1A1A] transition-all duration-300 ${
                    errors.lastName ? 'border-red-300' : 'border-[#F0F0F0]'
                  }`}
                  placeholder="Doe"
                />
                {errors.lastName && <p className="text-red-500 text-xs mt-2">{errors.lastName}</p>}
              </div>
            </div>

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
                className={`w-full px-6 py-4 bg-[#F8F8F8] border rounded-[12px] text-[#1A1A1A] placeholder-minimal focus:outline-none focus:border-[#1A1A1A] transition-all duration-300 ${
                  errors.email ? 'border-red-300' : 'border-[#F0F0F0]'
                }`}
                placeholder="votre@email.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
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
                className={`w-full px-6 py-4 bg-[#F8F8F8] border rounded-[12px] text-[#1A1A1A] placeholder-minimal focus:outline-none focus:border-[#1A1A1A] transition-all duration-300 ${
                  errors.password ? 'border-red-300' : 'border-[#F0F0F0]'
                }`}
                placeholder="••••••••"
              />
              {errors.password && <p className="text-red-500 text-xs mt-2">{errors.password}</p>}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#1A1A1A] mb-3">
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-6 py-4 bg-[#F8F8F8] border rounded-[12px] text-[#1A1A1A] placeholder-minimal focus:outline-none focus:border-[#1A1A1A] transition-all duration-300 ${
                  errors.confirmPassword ? 'border-red-300' : 'border-[#F0F0F0]'
                }`}
                placeholder="••••••••"
              />
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-2">{errors.confirmPassword}</p>}
            </div>

            <div className="space-y-4 pt-2">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="w-5 h-5 text-[#1A1A1A] bg-[#F8F8F8] border-[#F0F0F0] rounded-[4px] focus:ring-[#1A1A1A] focus:ring-2 mt-1"
                />
                <span className="ml-3 text-sm text-minimal">
                  J'accepte les{' '}
                  <Link href="/legal/terms" className="text-[#1A1A1A] hover:opacity-70 transition-opacity duration-300 underline">
                    conditions d'utilisation
                  </Link>
                  {' '}et la{' '}
                  <Link href="/legal/privacy" className="text-[#1A1A1A] hover:opacity-70 transition-opacity duration-300 underline">
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
                  className="w-5 h-5 text-[#1A1A1A] bg-[#F8F8F8] border-[#F0F0F0] rounded-[4px] focus:ring-[#1A1A1A] focus:ring-2"
                />
                <span className="ml-3 text-sm text-minimal">
                  Je souhaite recevoir les actualités TRUE ME
                </span>
              </label>
            </div>

            <button type="submit" className="btn-primary w-full py-4 mt-8">
              Créer mon compte
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="flex-1 border-t border-[#F0F0F0]"></div>
            <span className="px-6 text-sm text-minimal">ou</span>
            <div className="flex-1 border-t border-[#F0F0F0]"></div>
          </div>

          {/* Social Registration */}
          <div className="space-y-4">
            <button className="w-full bg-[#F8F8F8] border border-[#F0F0F0] text-[#1A1A1A] py-4 rounded-[12px] font-medium hover:bg-[#F0F0F0] transition-all duration-300 flex items-center justify-center space-x-3">
              <span>🔍</span>
              <span>S'inscrire avec Google</span>
            </button>
            <button className="w-full bg-[#F8F8F8] border border-[#F0F0F0] text-[#1A1A1A] py-4 rounded-[12px] font-medium hover:bg-[#F0F0F0] transition-all duration-300 flex items-center justify-center space-x-3">
              <span>📱</span>
              <span>S'inscrire avec Apple</span>
            </button>
          </div>
        </div>

        {/* Register Link */}
        <div className="text-center">
          <p className="text-minimal mb-6">
            Déjà un compte ?{' '}
            <Link href="/auth/login" className="text-[#1A1A1A] font-medium hover:opacity-70 transition-opacity duration-300">
              Se connecter
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
