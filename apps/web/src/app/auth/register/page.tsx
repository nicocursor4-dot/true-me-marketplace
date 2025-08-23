'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    emirate: '',
    acceptTerms: false,
    acceptMarketing: false
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const emirates = [
    'Abu Dhabi',
    'Dubai',
    'Sharjah',
    'Ajman',
    'Umm Al-Quwain',
    'Ras Al Khaimah',
    'Fujairah'
  ];

  const validateForm = () => {
    const newErrors: string[] = [];

    if (!formData.firstName.trim()) newErrors.push('Le prénom est requis');
    if (!formData.lastName.trim()) newErrors.push('Le nom est requis');
    if (!formData.email.trim()) newErrors.push('L\'email est requis');
    if (!formData.phone.trim()) newErrors.push('Le téléphone est requis');
    if (!formData.password) newErrors.push('Le mot de passe est requis');
    if (formData.password.length < 8) newErrors.push('Le mot de passe doit contenir au moins 8 caractères');
    if (formData.password !== formData.confirmPassword) newErrors.push('Les mots de passe ne correspondent pas');
    if (!formData.emirate) newErrors.push('L\'émirat est requis');
    if (!formData.acceptTerms) newErrors.push('Vous devez accepter les conditions d\'utilisation');

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      // TODO: Implement registration logic
      console.log('Registration attempt:', formData);
      setTimeout(() => setIsLoading(false), 2000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-trueme-cream p-8">
      <div className="w-full max-w-3xl">
        <form onSubmit={handleSubmit} className="glass-premium p-20 space-y-12 fade-in">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🌟</div>
            <h1 className="text-4xl font-bold text-trueme mb-4">TRUE ME</h1>
            <p className="text-trueme-light text-xl">Créer votre compte</p>
          </div>

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="firstName" className="block text-lg font-semibold text-trueme mb-4">
                Prénom
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-6 py-5 glass-morphism border-0 rounded-2xl text-trueme placeholder-trueme-light focus:outline-none focus:ring-2 focus:ring-trueme-gold transition-all duration-400 text-lg"
                placeholder="Votre prénom"
                required
              />
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-lg font-semibold text-trueme mb-4">
                Nom
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-6 py-5 glass-morphism border-0 rounded-2xl text-trueme placeholder-trueme-light focus:outline-none focus:ring-2 focus:ring-trueme-gold transition-all duration-400 text-lg"
                placeholder="Votre nom"
                required
              />
            </div>
          </div>

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
            <label htmlFor="phone" className="block text-lg font-semibold text-trueme mb-4">
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-6 py-5 glass-morphism border-0 rounded-2xl text-trueme placeholder-trueme-light focus:outline-none focus:ring-2 focus:ring-trueme-gold transition-all duration-400 text-lg"
              placeholder="+971 XX XXX XXXX"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            
            <div>
              <label htmlFor="confirmPassword" className="block text-lg font-semibold text-trueme mb-4">
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-6 py-5 glass-morphism border-0 rounded-2xl text-trueme placeholder-trueme-light focus:outline-none focus:ring-2 focus:ring-trueme-gold transition-all duration-400 text-lg"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="emirate" className="block text-lg font-semibold text-trueme mb-4">
              Émirat
            </label>
            <select
              id="emirate"
              name="emirate"
              value={formData.emirate}
              onChange={handleChange}
              className="w-full px-6 py-5 glass-morphism border-0 rounded-2xl text-trueme focus:outline-none focus:ring-2 focus:ring-trueme-gold transition-all duration-400 text-lg"
              required
            >
              <option value="">Sélectionnez votre émirat</option>
              {emirates.map((emirate) => (
                <option key={emirate} value={emirate}>
                  {emirate}
                </option>
              ))}
            </select>
          </div>

          {/* Terms and Conditions */}
          <div className="glass-morphism p-8 rounded-2xl space-y-6">
            <label className="flex items-start space-x-4">
              <input 
                type="checkbox" 
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="mt-1 w-5 h-5" 
                required 
              />
              <span className="text-lg text-trueme-light leading-relaxed">
                J'accepte les{' '}
                <a href="#" className="text-trueme-gold font-semibold hover:text-trueme luxury-hover">
                  conditions d'utilisation
                </a>
                {' '}et la{' '}
                <a href="#" className="text-trueme-gold font-semibold hover:text-trueme luxury-hover">
                  politique de confidentialité
                </a>
              </span>
            </label>
            
            <label className="flex items-start space-x-4">
              <input 
                type="checkbox" 
                name="acceptMarketing"
                checked={formData.acceptMarketing}
                onChange={handleChange}
                className="mt-1 w-5 h-5" 
              />
              <span className="text-lg text-trueme-light leading-relaxed">
                Je souhaite recevoir les actualités et offres exclusives TRUE ME
              </span>
            </label>
          </div>

          {/* Error Messages */}
          {errors.length > 0 && (
            <div className="glass-morphism p-6 border border-red-300 rounded-2xl">
              {errors.map((error, index) => (
                <p key={index} className="text-red-600 text-lg">{error}</p>
              ))}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full btn-primary py-6 text-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Création du compte...' : 'Créer mon compte'}
          </button>

          {/* Footer */}
          <div className="text-center">
            <p className="text-trueme-light text-lg">
              Déjà un compte ?{' '}
              <Link href="/auth/login" className="text-trueme-gold hover:text-trueme font-semibold luxury-hover">
                Se connecter
              </Link>
            </p>
          </div>
          
        </form>
      </div>
    </main>
  );
}
