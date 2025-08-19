# TRUE ME Marketplace

> **"Not a Style, a Signature"**

Une plateforme digitale de luxe pour l'authenticité et la vérification d'articles de prestige, conçue pour le marché des Émirats arabes unis.

## 🏗️ Architecture

Ce projet utilise une architecture **monorepo** avec pnpm workspaces :

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
└── docs/            # Documentation
```

## 🚀 Démarrage rapide

### Prérequis

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation

```bash
# Cloner le projet
git clone <repository-url>
cd true-me-marketplace

# Installer les dépendances
pnpm install

# Copier les variables d'environnement
cp .env.example .env

# Démarrer en développement
pnpm dev
```

## 🛠️ Scripts disponibles

```bash
# Développement
pnpm dev                 # Démarrage de tous les services en mode dev

# Build
pnpm build              # Build de tous les packages

# Qualité de code
pnpm lint               # Linting de tous les packages
pnpm type-check         # Vérification TypeScript
pnpm format             # Formatage avec Prettier

# Tests
pnpm test               # Tests de tous les packages

# Nettoyage
pnpm clean              # Suppression des dossiers de build
```

## 📦 Packages

### Applications

- **`apps/api`** - Backend Express.js avec TypeScript
- **`apps/web`** - Frontend Next.js avec TypeScript

### Packages partagés

- **`@trueme/shared`** - Types, constantes et utilitaires partagés
- **`@trueme/ui`** - Composants UI réutilisables
- **`@trueme/eslint-config`** - Configuration ESLint partagée
- **`@trueme/typescript-config`** - Configuration TypeScript partagée

## 🔧 Technologies

- **Frontend** : Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend** : Node.js, Express.js, TypeScript
- **Base de données** : Supabase (PostgreSQL) avec Prisma ORM
- **Authentification** : Clerk
- **Stockage** : Cloudinary
- **Paiements** : Stripe Connect
- **Recherche** : Algolia (Phase 5)
- **Déploiement** : Vercel (Frontend) + Render (Backend)

## 🎯 Fonctionnalités principales

### Bloc 1 - Statut Global TRUE ME
- Système de progression par paliers (Bronze → Diamond)
- QR Code personnel et Style Card partageable
- Timeline d'évolution et badges

### Bloc 2 - Statut par Marque  
- Progression spécifique par marque de luxe
- Missions et gamification
- Galerie communautaire

### Bloc 3 - Marketplace Authentifiée
- Processus de vérification rigoureux
- Services Standard et VIP
- Paiements sécurisés

## 📝 Plan de développement

Le développement suit un plan en 5 phases :

- **Phase 0** : Fondation technique (Monorepo, Backend, Frontend, BDD)
- **Phase 1** : Dressing digital (Gestion des articles)
- **Phase 2** : Authentification (Clerk, gestion des utilisateurs)
- **Phase 3** : Marketplace (Vérification, back-office)
- **Phase 4** : Gamification (Statuts, progression)
- **Phase 5** : Monétisation (Paiements, VIP, Algolia)

## 📚 Documentation

Consultez le dossier `/docs` pour la documentation détaillée :

- [Plan de développement détaillé](../PLAN_DETAILLE.md)
- [Architecture technique](./docs/architecture.md)
- [Guide de contribution](./docs/contributing.md)

## 🤝 Contribution

1. Fork du projet
2. Création d'une branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit des modifications (`git commit -am 'Ajout nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Création d'une Pull Request

## 📄 License

Ce projet est la propriété de TRUE ME. Tous droits réservés.

---

**TRUE ME** - Révolutionner l'authenticité dans le luxe 🔥
