import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-trueme-cream via-bg-trueme-cream to-trueme-gold/5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            
            {/* Brand Mark */}
            <div className="mb-12 fade-in">
              <div className="inline-flex items-center space-x-3">
                <div className="w-3 h-3 bg-trueme-gold rounded-full"></div>
                <span className="text-sm font-medium text-trueme-gold tracking-[0.2em] uppercase">Émirats Arabes Unis</span>
                <div className="w-3 h-3 bg-trueme-gold rounded-full"></div>
              </div>
            </div>
            
            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light mb-6 fade-in text-trueme tracking-tight" style={{animationDelay: '0.1s'}}>
              TRUE ME
            </h1>
            
            {/* Signature */}
            <h2 className="text-2xl md:text-3xl font-light mb-16 fade-in text-trueme-gold tracking-wide" style={{animationDelay: '0.2s'}}>
              Not a Style. A Signature
            </h2>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-trueme-light mb-16 max-w-4xl mx-auto leading-relaxed fade-in" style={{animationDelay: '0.3s'}}>
              La première maison d'authentification et marketplace de luxe dédiée aux connaisseurs
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24 fade-in" style={{animationDelay: '0.4s'}}>
              <Link href="/auth/register" className="btn-primary px-10 py-4 text-lg font-medium">
                Rejoindre TRUE ME
              </Link>
              <Link href="/marketplace" className="btn-secondary px-10 py-4 text-lg font-medium">
                Découvrir la Collection
              </Link>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-1 max-w-5xl mx-auto">
              
              {/* Feature 1 */}
              <div className="text-center p-8 fade-in" style={{animationDelay: '0.5s'}}>
                <div className="w-16 h-16 bg-trueme-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-trueme-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-trueme">Authentification</h3>
                <p className="text-trueme-light text-sm leading-relaxed">
                  Certification garantie par nos experts
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center p-8 fade-in" style={{animationDelay: '0.6s'}}>
                <div className="w-16 h-16 bg-trueme-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-trueme-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-trueme">Curation</h3>
                <p className="text-trueme-light text-sm leading-relaxed">
                  Sélection exclusive des plus belles pièces
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center p-8 fade-in" style={{animationDelay: '0.7s'}}>
                <div className="w-16 h-16 bg-trueme-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-trueme-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-trueme">Expérience</h3>
                <p className="text-trueme-light text-sm leading-relaxed">
                  Service personnalisé digne du luxe
                </p>
              </div>
              
            </div>

          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-trueme-cream/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-trueme">Nos Services</h2>
            <p className="text-xl text-trueme-light max-w-3xl mx-auto leading-relaxed">
              Une approche sur-mesure du luxe contemporain
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Service 1 - Dashboard */}
            <Link href="/dashboard" className="group">
              <div className="glass-morphism p-10 text-left luxury-hover h-full">
                <div className="w-12 h-12 bg-trueme-gold/20 rounded-lg flex items-center justify-center mb-8">
                  <svg className="w-6 h-6 text-trueme-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-trueme">Dashboard Personnel</h3>
                <p className="text-trueme-light leading-relaxed mb-6">
                  Tableau de bord intuitif avec suivi de vos collections, statuts privilège et recommandations personnalisées.
                </p>
                <span className="text-trueme-gold font-medium group-hover:text-trueme transition-colors">Découvrir →</span>
              </div>
            </Link>

            {/* Service 2 - Brands */}
            <Link href="/brands" className="group">
              <div className="glass-morphism p-10 text-left luxury-hover h-full">
                <div className="w-12 h-12 bg-trueme-gold/20 rounded-lg flex items-center justify-center mb-8">
                  <svg className="w-6 h-6 text-trueme-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-trueme">Marques Partenaires</h3>
                <p className="text-trueme-light leading-relaxed mb-6">
                  Accès privilégié aux plus grandes maisons de luxe avec programmes fidélité et avantages exclusifs.
                </p>
                <span className="text-trueme-gold font-medium group-hover:text-trueme transition-colors">Explorer →</span>
              </div>
            </Link>

            {/* Service 3 - Marketplace */}
            <Link href="/marketplace" className="group">
              <div className="glass-morphism p-10 text-left luxury-hover h-full">
                <div className="w-12 h-12 bg-trueme-gold/20 rounded-lg flex items-center justify-center mb-8">
                  <svg className="w-6 h-6 text-trueme-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM6 12a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-trueme">Marketplace Privé</h3>
                <p className="text-trueme-light leading-relaxed mb-6">
                  Collection curated de pièces authentifiées avec service de conciergerie et garantie d'authenticité.
                </p>
                <span className="text-trueme-gold font-medium group-hover:text-trueme transition-colors">Parcourir →</span>
              </div>
            </Link>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gradient-to-t from-trueme-cream/20 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-morphism p-12 rounded-3xl">
            <div className="text-center">
              <div className="mb-10">
                <div className="text-3xl font-light mb-4 text-trueme tracking-wide">TRUE ME</div>
                <div className="text-trueme-gold font-light text-lg tracking-[0.1em]">Not a Styl. A Signature.</div>
              </div>
              
              <div className="flex justify-center space-x-8 mb-8 text-sm text-trueme-light">
                <Link href="/about" className="hover:text-trueme-gold transition-colors">À propos</Link>
                <Link href="/contact" className="hover:text-trueme-gold transition-colors">Contact</Link>
                <Link href="/terms" className="hover:text-trueme-gold transition-colors">Conditions</Link>
                <Link href="/privacy" className="hover:text-trueme-gold transition-colors">Confidentialité</Link>
              </div>
              
              <p className="text-trueme-light text-sm">
                &copy; 2025 TRUE ME. Tous droits réservés. Émirats Arabes Unis.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
