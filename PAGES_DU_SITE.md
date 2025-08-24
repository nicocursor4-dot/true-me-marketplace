# TRUE ME - Liste des Pages du Site

## Pages Principales

### 🏠 Page d'Accueil
- **Route:** `/`
- **Fichier:** `apps/web/src/app/page.tsx`
- **Description:** Landing page principale avec hero section, présentation des services
- **Status:** ✅ Active

### 🛒 Marketplace
- **Route:** `/marketplace`
- **Fichier:** `apps/web/src/app/marketplace/page.tsx`
- **Description:** Page de la marketplace avec articles de luxe
- **Status:** ✅ Active

### 🏷️ Marques
- **Route:** `/brands`
- **Fichier:** `apps/web/src/app/brands/page.tsx`
- **Description:** Page dédiée aux marques de luxe partenaires
- **Status:** ✅ Active

### 📊 Dashboard
- **Route:** `/dashboard`
- **Fichier:** `apps/web/src/app/dashboard/page.tsx`
- **Description:** Tableau de bord utilisateur principal
- **Status:** ✅ Active

### 📈 Dashboard Evolution
- **Route:** `/dashboard/evolution`
- **Fichier:** `apps/web/src/app/dashboard/evolution/page.tsx`
- **Description:** Suivi de l'évolution du statut utilisateur
- **Status:** ✅ Active

### 🏆 Statut Marques
- **Route:** `/statut-marques`
- **Fichier:** `apps/web/src/app/statut-marques/page.tsx`
- **Description:** Page de statut par marque pour les utilisateurs
- **Status:** ✅ Active

## Pages d'Authentification

### 🔐 Connexion
- **Route:** `/auth/login`
- **Fichier:** `apps/web/src/app/auth/login/page.tsx`
- **Description:** Page de connexion utilisateur
- **Status:** ✅ Active

### 📝 Inscription
- **Route:** `/auth/register`
- **Fichier:** `apps/web/src/app/auth/register/page.tsx`
- **Description:** Page d'inscription nouvel utilisateur
- **Status:** ✅ Active

## Pages de Test et Développement

### 🧪 Test Bibliothèques
- **Route:** `/test-bibliotheques`
- **Fichier:** `apps/web/src/app/test-bibliotheques/page.tsx`
- **Description:** Page de validation des bibliothèques UI intégrées
- **Status:** ✅ Active (développement uniquement)

### 🗄️ Test Base de Données
- **Route:** `/test-db`
- **Fichier:** `apps/web/src/app/test-db/page.tsx`
- **Description:** Interface de test pour la base de données Supabase
- **Status:** ⚠️ Active (nécessite configuration Supabase)

## Composants Globaux

### Navigation
- **Fichier:** `apps/web/src/components/Navigation.tsx`
- **Description:** Barre de navigation principale avec menu mobile
- **Status:** ✅ Active

### Header
- **Fichier:** `apps/web/src/components/layout/Header.tsx`
- **Description:** En-tête alternatif (actuellement non utilisé)
- **Status:** 📦 Disponible

## Configuration

### Layout Principal
- **Fichier:** `apps/web/src/app/layout.tsx`
- **Description:** Layout racine avec métadonnées et structure HTML
- **Status:** ✅ Active

### Styles Globaux
- **Fichier:** `apps/web/src/app/globals.css`
- **Description:** Styles CSS globaux, Tailwind, themes PrimeReact
- **Status:** ✅ Active

### Configuration Tailwind
- **Fichier:** `apps/web/tailwind.config.ts`
- **Description:** Configuration Tailwind CSS avec palette TRUE ME
- **Status:** ✅ Active

## Statistiques
- **Total des pages:** 10 pages
- **Pages principales:** 6
- **Pages d'authentification:** 2
- **Pages de test:** 2
- **Dernière mise à jour:** 24 août 2025

## Notes Techniques
- **Framework:** Next.js 14.2.0 avec App Router
- **Styling:** Tailwind CSS + DaisyUI + PrimeReact + Material-UI
- **Animations:** Framer Motion
- **Déploiement:** Vercel (automatique via GitHub)
