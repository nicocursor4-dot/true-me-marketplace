# TRUE ME Marketplace

> **"Not a Style, a Signature"**

Une plateforme digitale de luxe pour l'authenticité et la vérification d'articles de prestige, conçue pour le marché des Émirats arabes unis.

## 🚀 Démarrage rapide

### Prérequis

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation

```bash
# Cloner le projet
git clone git@github.com:nicocursor4-dot/true-me-marketplace.git
cd true-me-marketplace

# Installer les dépendances
pnpm install

# Copier les variables d'environnement
cp .env.example .env

# Démarrer en développement
pnpm dev
```

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

## 🛠️ Technologies

* **Frontend** : Next.js 14, React 18, TypeScript, Tailwind CSS
* **Animations** : Framer Motion
* **UI Components** : Radix UI, Lucide Icons
* **Backend** : Node.js, Express.js, TypeScript
* **Base de données** : Supabase (PostgreSQL) avec Prisma ORM
* **Authentification** : Clerk
* **Stockage** : Cloudinary
* **Paiements** : Stripe Connect
* **Déploiement** : Vercel (Frontend) + Render (Backend)

## 📦 Scripts disponibles

```bash
# Développement
pnpm dev                 # Démarrage de tous les services en mode dev

# Build
pnpm build              # Build de tous les packages

# Qualité de code
pnpm lint               # Linting de tous les packages
pnpm type-check         # Vérification TypeScript

# Workspace spécifique
pnpm --filter @trueme/web dev      # Next dev (port 3002)
pnpm --filter @trueme/web build    # next build
pnpm --filter @trueme/web start    # next start
```

## 🎨 Design System

### Couleurs TRUE ME

```css
/* Couleurs principales */
--trueme: #1C1C1E;           /* Noir principal */
--trueme-gold: #B8860B;      /* Or TRUE ME */
--trueme-cream: #F5F2E8;     /* Crème de fond */
--trueme-secondary: #6B6B6B; /* Gris secondaire */
```

### Composants UI

Tous les composants UI sont dans `/apps/web/src/components/ui/` :

- **Avatar** : Composant avatar avec fallback personnalisé
- **Badge** : Badges avec variantes (default, outline, secondary, destructive)
- **Button** : Boutons avec variantes TRUE ME
- **Card** : Cartes modernisées avec CardAction
- **Progress** : Barres de progression
- **Dock** : Menu navigation type macOS
- **FAQ** : Accordéons animés
- **Bento Grid** : Grille de fonctionnalités
- **Animated Card** : Cartes avec graphiques animés

## 📄 Pages Principales

### Dashboard (`/dashboard`)

Le dashboard TRUE ME comprend :

- **Hero Section** : Carte d'identité utilisateur avec avatar et badge de statut
- **Compteurs Animés** : Points TRUE ME et Total Achats avec animations
- **Progression Circulaire** : Graphique de progression vers statut Platinum
- **Avantages Gold** : Grille des bénéfices du statut actuel
- **Actions Rapides** : Liens vers marketplace et collection
- **Ma Collection** : Graphique en barres de l'évolution
- **Dock Menu** : Navigation fixe en bas de page

### Marketplace (`/marketplace`)

Parcourez les articles de luxe authentifiés.

### Brands (`/brands`)

Découvrez les marques partenaires et votre collection.

## 🎯 Fonctionnalités Clés

### Compteurs Animés

Utilise Framer Motion pour des animations fluides des chiffres :

```tsx
<AnimatedCounter value={3840} />
```

### Graphique Circulaire

Progression animée avec SVG :

```tsx
<CircularProgress percentage={64} />
```

### Dock Navigation

Menu interactif avec effet de magnification :

```tsx
<Dock>
  <DockItem>
    <DockLabel>Accueil</DockLabel>
    <DockIcon><Home /></DockIcon>
  </DockItem>
</Dock>
```

## 🔒 Variables d'Environnement

Créez un fichier `.env` à la racine avec :

```env
# Base de données
DATABASE_URL="postgresql://..."

# Authentification
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_..."
CLERK_SECRET_KEY="sk_..."

# Stockage
CLOUDINARY_CLOUD_NAME="..."
CLOUDINARY_API_KEY="..."
CLOUDINARY_API_SECRET="..."

# Paiements
STRIPE_SECRET_KEY="sk_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_..."
```

## 📝 Conventions de Code

- **TypeScript** : Strict mode activé
- **ESLint** : Configuration Next.js + prettier
- **Commits** : Conventional commits (feat, fix, docs, style, refactor, test, chore)
- **Branches** : `main` pour la production, feature branches pour le développement

## 🚀 Déploiement

### Frontend (Vercel)

Le frontend est automatiquement déployé sur Vercel à chaque push sur `main`.

URL de production : https://true-me-marketplace-web-ten.vercel.app

### Backend (Render)

Le backend API est déployé sur Render.

## 🤝 Contribution

1. Fork du projet
2. Création d'une branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit des modifications (`git commit -am 'feat: Ajout nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Création d'une Pull Request

## 📄 License

Ce projet est la propriété de TRUE ME. Tous droits réservés.

---

**TRUE ME** - Révolutionner l'authenticité dans le luxe 🔥