import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="luxury-container">
          <div className="max-w-5xl mx-auto">
            <h1 className="mb-12 fade-in">
              TRUE ME
            </h1>
            <p className="text-2xl md:text-3xl text-minimal mb-16 font-light tracking-wide fade-in" style={{animationDelay: '0.2s'}}>
              NOT A STYLE. A SIGNATURE.
            </p>
            <p className="text-xl text-minimal mb-20 max-w-2xl mx-auto leading-relaxed fade-in" style={{animationDelay: '0.4s'}}>
              La plateforme digitale qui valorise votre authenticité 
              à travers des articles de luxe certifiés.
            </p>
            
            {/* Minimal CTA */}
            <div className="fade-in" style={{animationDelay: '0.6s'}}>
              <Link 
                href="/auth/signup"
                className="inline-block bg-black text-white px-12 py-4 text-lg font-medium subtle-hover border border-black"
              >
                Commencer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Three Blocs Section */}
      <section className="section-spacing-lg">
        <div className="luxury-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-20 text-center fade-in">Trois univers</h2>
            
            <div className="grid grid-cols-1 gap-16">
              {/* Bloc 1 */}
              <div className="card-minimal p-12 fade-in">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                  <div className="flex-1">
                    <h3 className="mb-6">01 — Statut Global</h3>
                    <p className="text-minimal mb-8 leading-relaxed">
                      Votre niveau d'authenticité valorisé selon votre collection totale. 
                      De Bronze à Diamant, chaque article compte.
                    </p>
                    <Link 
                      href="/dashboard"
                      className="inline-block text-black font-medium subtle-hover underline"
                    >
                      Voir mon statut
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bloc 2 */}
              <div className="card-minimal p-12 fade-in">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                  <div className="flex-1">
                    <h3 className="mb-6">02 — Statut par Marque</h3>
                    <p className="text-minimal mb-8 leading-relaxed">
                      Progressez avec vos marques favorites. Chanel, Hermès, Dior. 
                      Développez votre expertise par maison.
                    </p>
                    <Link 
                      href="/brands"
                      className="inline-block text-black font-medium subtle-hover underline"
                    >
                      Mes marques
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bloc 3 */}
              <div className="card-minimal p-12 fade-in">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                  <div className="flex-1">
                    <h3 className="mb-6">03 — Marketplace VIP</h3>
                    <p className="text-minimal mb-8 leading-relaxed">
                      Achetez et vendez en toute confiance. Service VIP avec collecte, 
                      shooting professionnel et expertise incluse.
                    </p>
                    <Link 
                      href="/marketplace"
                      className="inline-block text-black font-medium subtle-hover underline"
                    >
                      Explorer
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="section-spacing border-t border-minimal">
        <div className="luxury-container">
          <div className="text-center">
            <div className="mb-8">
              <div className="text-lg font-bold mb-2">TRUE ME</div>
              <div className="text-minimal">NOT A STYLE. A SIGNATURE.</div>
            </div>
            <p className="text-minimal">
              &copy; 2024 TRUE ME. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
