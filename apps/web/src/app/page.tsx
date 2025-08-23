import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="hero-section">
        <div className="luxury-container px-8">
          <div className="text-center max-w-6xl mx-auto">
            
            {/* Main Title */}
            <h1 className="heading-primary mb-8 fade-in text-trueme">
              TRUE ME
              <br />
              <span className="text-trueme-gold font-light">Marketplace</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-2xl text-trueme-light mb-16 max-w-4xl mx-auto leading-relaxed fade-in" style={{animationDelay: '0.2s'}}>
              La première plateforme d'authentification et de vente de produits de luxe aux Émirats Arabes Unis
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24 fade-in" style={{animationDelay: '0.4s'}}>
              <Link href="/dashboard" className="btn-primary px-12 py-5 text-lg">
                Accéder au Dashboard
              </Link>
              <Link href="/marketplace" className="btn-secondary px-12 py-5 text-lg">
                Explorer le Marketplace
              </Link>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              
              {/* Card 1 - Dashboard */}
              <Link href="/dashboard" className="group">
                <div className="glass-premium p-12 text-center luxury-hover h-full fade-in" style={{animationDelay: '0.6s'}}>
                  <div className="text-7xl mb-8">📊</div>
                  <h3 className="text-2xl font-bold mb-6 text-trueme">01 — Dashboard</h3>
                  <p className="text-trueme-light text-lg leading-relaxed">
                    Tableau de bord complet avec statut global, suivi par marques et programmes fidélité
                  </p>
                </div>
              </Link>

              {/* Card 2 - Brands */}
              <Link href="/brands" className="group">
                <div className="glass-premium p-12 text-center luxury-hover h-full fade-in" style={{animationDelay: '0.8s'}}>
                  <div className="text-7xl mb-8">👑</div>
                  <h3 className="text-2xl font-bold mb-6 text-trueme">02 — Marques</h3>
                  <p className="text-trueme-light text-lg leading-relaxed">
                    Gestion des marques de luxe avec avantages et statuts personnalisés
                  </p>
                </div>
              </Link>

              {/* Card 3 - Marketplace */}
              <Link href="/marketplace" className="group">
                <div className="glass-premium p-12 text-center luxury-hover h-full fade-in" style={{animationDelay: '1s'}}>
                  <div className="text-7xl mb-8">🛒</div>
                  <h3 className="text-2xl font-bold mb-6 text-trueme">03 — Marketplace</h3>
                  <p className="text-trueme-light text-lg leading-relaxed">
                    Achat et vente d'articles authentifiés avec services VIP premium
                  </p>
                </div>
              </Link>
              
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="section-spacing glass-morphism mx-8 mb-8">
        <div className="luxury-container">
          <div className="text-center">
            <div className="mb-8">
              <div className="text-xl font-bold mb-2 text-trueme">TRUE ME</div>
              <div className="text-trueme-gold font-medium">NOT A STYLE. A SIGNATURE.</div>
            </div>
            <p className="text-trueme-light">
              &copy; 2024 TRUE ME. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
