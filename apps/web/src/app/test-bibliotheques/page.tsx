'use client'

import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { Button as PrimeButton } from 'primereact/button';
import { motion } from 'framer-motion';

export default function TestBibliothecques() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
          🧪 Page de Validation des Bibliothèques UI
        </h1>

        {/* DaisyUI Section */}
        <hr className="my-8 border-gray-300" />
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">1. DaisyUI</h2>
          <div className="space-y-4">
            <button className="btn btn-primary">Bouton Primary DaisyUI</button>
            <button className="btn btn-secondary">Bouton Secondary DaisyUI</button>
            <button className="btn btn-accent">Bouton Accent DaisyUI</button>
          </div>
          <p className="mt-4 text-gray-600">✅ DaisyUI installé et configuré avec Tailwind CSS</p>
        </section>

        {/* Material-UI Section */}
        <hr className="my-8 border-gray-300" />
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">2. Material-UI (MUI)</h2>
          <div className="space-x-4">
            <MuiButton variant="contained" color="primary">
              Bouton MUI Primary
            </MuiButton>
            <MuiButton variant="outlined" color="secondary">
              Bouton MUI Outlined
            </MuiButton>
            <MuiButton variant="text" color="success">
              Bouton MUI Text
            </MuiButton>
          </div>
          <p className="mt-4 text-gray-600">✅ Material-UI installé avec @emotion/react et @emotion/styled</p>
        </section>

        {/* PrimeReact Section */}
        <hr className="my-8 border-gray-300" />
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">3. PrimeReact</h2>
          <div className="space-x-4">
            <PrimeButton label="Bouton PrimeReact" className="p-button-primary" />
            <PrimeButton label="Bouton Secondary" className="p-button-secondary" />
            <PrimeButton label="Avec Icône" icon="pi pi-check" className="p-button-success" />
          </div>
          <p className="mt-4 text-gray-600">✅ PrimeReact installé avec thème lara-light-indigo et PrimeIcons</p>
        </section>

        {/* Framer Motion Section */}
        <hr className="my-8 border-gray-300" />
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">4. Framer Motion (pour Magic Bento)</h2>
          <div className="space-y-4">
            <motion.div
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-2">Animation Framer Motion</h3>
              <p>Cette carte s'anime au chargement de la page</p>
            </motion.div>
            
            <motion.button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Bouton avec Animation Hover
            </motion.button>
          </div>
          <p className="mt-4 text-gray-600">✅ Framer Motion installé et prêt pour les animations Magic Bento</p>
        </section>

        {/* Aceternity UI Section */}
        <hr className="my-8 border-gray-300" />
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">5. Aceternity UI</h2>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
            <p className="text-yellow-700">
              ⚠️ Note: Aceternity UI utilise des composants à copier/coller plutôt qu'une CLI npm.
              Les dépendances nécessaires (Framer Motion, Tailwind CSS) sont installées.
            </p>
          </div>
          <p className="mt-4 text-gray-600">✅ Dépendances préparées pour l'intégration de composants Aceternity UI</p>
        </section>

        {/* Summary Section */}
        <hr className="my-8 border-gray-300" />
        <section className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h2 className="text-2xl font-semibold mb-4 text-green-800">📊 Résumé de l'Installation</h2>
          <ul className="space-y-2 text-green-700">
            <li>✅ <strong>DaisyUI:</strong> Installé et configuré dans Tailwind CSS</li>
            <li>✅ <strong>Material-UI:</strong> Installé avec Emotion React/Styled</li>
            <li>✅ <strong>PrimeReact:</strong> Installé avec thème et icônes</li>
            <li>✅ <strong>Framer Motion:</strong> Installé pour Magic Bento</li>
            <li>⚠️ <strong>Aceternity UI:</strong> Dépendances prêtes (composants à copier/coller)</li>
          </ul>
          <div className="mt-4 p-4 bg-white rounded border border-green-300">
            <p className="text-sm text-gray-600">
              <strong>Stack Technique:</strong> Next.js 14.2.0 + TypeScript + Tailwind CSS + pnpm
            </p>
          </div>
        </section>

        {/* Instructions */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Cette page est accessible uniquement via l'URL directe /test-bibliotheques
            <br />
            Elle ne fait pas partie de la navigation principale du site
          </p>
        </div>
      </div>
    </div>
  );
}
