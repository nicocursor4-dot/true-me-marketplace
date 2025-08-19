# Architecture Technique - TRUE ME

## Vue d'ensemble

TRUE ME utilise une architecture **monorepo** moderne avec pnpm workspaces, permettant de partager du code entre le frontend et le backend tout en maintenant une séparation claire des responsabilités.

## Structure du projet

```
true-me-marketplace/
├── apps/
│   ├── api/          # Backend Express.js + TypeScript
│   └── web/          # Frontend Next.js + TypeScript
├── packages/
│   ├── shared/       # Types, constantes et utilitaires partagés
│   ├── ui/           # Composants UI réutilisables
│   ├── eslint-config/# Configuration ESLint
│   └── typescript-config/ # Configuration TypeScript
├── docs/            # Documentation
├── scripts/         # Scripts utilitaires
└── _backups/        # Sauvegardes automatiques (local)
```

## Technologies principales

### Frontend (`apps/web`)
- **Next.js 14** avec App Router
- **React 18** avec TypeScript
- **Tailwind CSS** pour le styling
- **Clerk** pour l'authentification
- **Déploiement** : Vercel

### Backend (`apps/api`)
- **Node.js** avec Express.js
- **TypeScript** pour la sécurité des types
- **Prisma** comme ORM
- **Supabase** (PostgreSQL) comme base de données
- **Déploiement** : Render

### Services externes
- **Clerk** : Authentification et gestion des utilisateurs
- **Cloudinary** : Stockage et transformation d'images
- **Stripe Connect** : Paiements et marketplace
- **Algolia** : Recherche avancée (Phase 5)

## Packages partagés

### `@trueme/shared`
Contient tous les types, constantes et utilitaires partagés entre frontend et backend :
- Types TypeScript (User, Article, Status, etc.)
- Constantes (seuils de progression, marques, couleurs)
- Utilitaires (calcul de statuts, formatage, validation)

### `@trueme/ui`
Bibliothèque de composants UI réutilisables :
- Composants stylisés avec Tailwind CSS
- Respect de la palette TRUE ME (blanc, noir carbone, doré)
- Props typées avec TypeScript

### `@trueme/typescript-config`
Configurations TypeScript centralisées :
- `base.json` : Configuration de base
- `nextjs.json` : Configuration spécifique Next.js
- `node.json` : Configuration spécifique Node.js

### `@trueme/eslint-config`
Configurations ESLint pour la qualité de code :
- `base.js` : Règles de base TypeScript
- `nextjs.js` : Règles spécifiques React/Next.js
- `node.js` : Règles spécifiques Node.js

## Base de données

### Modèles principaux

```prisma
User {
  id: String
  clerkId: String (unique)
  email: String (unique)
  globalStatus: Status (BRONZE | SILVER | GOLD | PLATINUM | DIAMOND)
  isVip: Boolean
  // ... autres champs
}

Article {
  id: String
  name: String
  brand: String
  status: ArticleStatus (PRIVATE | PENDING_VERIFICATION | FOR_SALE | SOLD)
  ownerId: String (référence User.clerkId)
  // ... autres champs
}

BrandStatus {
  userId: String
  brandName: String
  status: Status
  articleCount: Int
  // ... autres champs
}
```

## Authentification et sécurité

- **Clerk** gère l'authentification complète (2FA, réseaux sociaux)
- **JWT tokens** pour la communication API
- **Webhooks** pour la synchronisation des données utilisateurs
- **Middleware** Express pour la protection des routes

## Déploiement

### Frontend (Vercel)
- Déploiement automatique sur push vers `main`
- Variables d'environnement configurées
- CDN global pour les performances

### Backend (Render)
- Service web avec déploiement automatique
- Variables d'environnement sécurisées
- Health checks automatiques

## Patterns et conventions

### Nomenclature
- **Fichiers** : camelCase pour JS/TS, kebab-case pour assets
- **Composants** : PascalCase
- **Fonctions** : camelCase
- **Constantes** : SCREAMING_SNAKE_CASE

### Structure des dossiers
- Groupement par fonctionnalité (`/modules` dans l'API)
- Séparation des responsabilités
- Index files pour les exports propres

### Types et interfaces
- Tous les types dans `@trueme/shared`
- Interfaces pour les objets, types pour les unions
- Suffixes explicites (`Request`, `Response`, `Config`)

## Monitoring et maintenance

### Qualité de code
- ESLint + Prettier pour le formatage
- TypeScript strict mode
- Tests unitaires et d'intégration

### Backup et sécurité
- Sauvegardes automatiques après chaque étape validée
- Variables d'environnement sécurisées
- Logs structurés pour le debugging

Cette architecture garantit la scalabilité, la maintenabilité et la performance de la plateforme TRUE ME.
