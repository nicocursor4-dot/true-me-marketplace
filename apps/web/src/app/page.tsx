import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F2E8]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-7xl md:text-9xl font-bold text-[#1C1C1E] mb-6 tracking-tight">
              TRUE ME
            </h1>
            <p className="text-2xl md:text-3xl text-[#B8860B] mb-8 tracking-wider font-light">
              NOT A STYLE. A SIGNATURE.
            </p>
            <p className="text-xl text-[#6B6B6B] mb-12 max-w-3xl mx-auto leading-relaxed">
              La plateforme digitale innovante née à Dubaï qui valorise votre authenticité 
              à travers des articles de luxe certifiés. Découvrez vos trois univers exclusifs.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="/auth/signup"
                className="bg-[#1C1C1E] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#B8860B] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Activer mon statut TRUE ME
              </Link>
              <Link 
                href="/marketplace"
                className="bg-[rgba(255,255,255,0.4)] backdrop-blur-[15px] border border-[rgba(255,255,255,0.3)] text-[#1C1C1E] px-10 py-4 rounded-full text-lg font-medium hover:bg-[rgba(184,134,11,0.1)] transition-all duration-300 transform hover:scale-105"
              >
                Explorer la Marketplace
              </Link>
            </div>
          </div>

          {/* Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {/* Bloc 1 Preview */}
            <div className="bg-[rgba(255,255,255,0.5)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.3)] rounded-[20px] p-8 shadow-[0_8px_24px_rgba(184,134,11,0.12)] hover:shadow-[0_12px_32px_rgba(184,134,11,0.2)] transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[rgba(184,134,11,0.1)] rounded-full flex items-center justify-center mb-6">
                <div className="text-2xl">🏆</div>
              </div>
              <h3 className="text-2xl font-bold text-[#1C1C1E] mb-4">Statut Global</h3>
              <p className="text-[#6B6B6B] mb-6 leading-relaxed">
                Votre niveau d'authenticité valorisé selon votre collection totale. 
                De Bronze à Diamant, chaque article compte.
              </p>
              <Link 
                href="/dashboard"
                className="text-[#B8860B] font-medium hover:underline inline-flex items-center"
              >
                Voir mon statut
                <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Bloc 2 Preview */}
            <div className="bg-[rgba(255,255,255,0.5)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.3)] rounded-[20px] p-8 shadow-[0_8px_24px_rgba(184,134,11,0.12)] hover:shadow-[0_12px_32px_rgba(184,134,11,0.2)] transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[rgba(184,134,11,0.1)] rounded-full flex items-center justify-center mb-6">
                <div className="text-2xl">🏷️</div>
              </div>
              <h3 className="text-2xl font-bold text-[#1C1C1E] mb-4">Statut par Marque</h3>
              <p className="text-[#6B6B6B] mb-6 leading-relaxed">
                Progressez avec vos marques favorites. Chanel, Hermès, Dior... 
                Développez votre expertise par maison.
              </p>
              <Link 
                href="/brands"
                className="text-[#B8860B] font-medium hover:underline inline-flex items-center"
              >
                Mes marques
                <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Bloc 3 Preview */}
            <div className="bg-[rgba(255,255,255,0.5)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.3)] rounded-[20px] p-8 shadow-[0_8px_24px_rgba(184,134,11,0.12)] hover:shadow-[0_12px_32px_rgba(184,134,11,0.2)] transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-[rgba(184,134,11,0.1)] rounded-full flex items-center justify-center mb-6">
                <div className="text-2xl">💎</div>
              </div>
              <h3 className="text-2xl font-bold text-[#1C1C1E] mb-4">Marketplace VIP</h3>
              <p className="text-[#6B6B6B] mb-6 leading-relaxed">
                Achetez et vendez en toute confiance. Service VIP avec collecte, 
                shooting professionnel et expertise incluse.
              </p>
              <Link 
                href="/marketplace"
                className="text-[#B8860B] font-medium hover:underline inline-flex items-center"
              >
                Explorer
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Brands Section */}
      <section className="py-24 bg-[rgba(245,242,232,0.8)]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#1C1C1E] mb-6">Marques Partenaires</h2>
          <p className="text-xl text-[#6B6B6B] mb-16">
            Les plus grandes maisons de luxe authentifiées par TRUE ME
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {['CHANEL', 'HERMÈS', 'DIOR', 'LOUIS VUITTON', 'BALENCIAGA', 'BURBERRY'].map((brand) => (
              <div key={brand} className="bg-[rgba(255,255,255,0.6)] backdrop-blur-[15px] border border-[rgba(255,255,255,0.3)] rounded-[16px] p-6 text-center">
                <div className="text-lg font-bold text-[#1C1C1E]">{brand}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Glassmorphisme */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-[rgba(255,255,255,0.4)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.3)] rounded-[24px] p-12 shadow-[0_12px_32px_rgba(184,134,11,0.15)]">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#1C1C1E] mb-4">TRUE ME en Chiffres</h2>
              <p className="text-xl text-[#6B6B6B]">La communauté de l'authenticité</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#B8860B] mb-2">15,247</div>
                <div className="text-[#6B6B6B] text-lg">Articles authentifiés</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#B8860B] mb-2">AED 2.1M</div>
                <div className="text-[#6B6B6B] text-lg">Valeur échangée</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#B8860B] mb-2">99.8%</div>
                <div className="text-[#6B6B6B] text-lg">Score authenticité</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#B8860B] mb-2">1,230</div>
                <div className="text-[#6B6B6B] text-lg">Membres actifs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C1C1E] text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl font-bold">TM</div>
                <div>
                  <div className="text-sm font-semibold">TRUE ME</div>
                  <div className="text-xs text-[#B8860B]">NOT A STYLE. A SIGNATURE.</div>
                </div>
              </div>
              <p className="text-gray-400">
                Authentifiez votre style, valorisez votre collection.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Marketplace</h4>
              <div className="space-y-2 text-gray-400">
                <div>Femmes</div>
                <div>Hommes</div>
                <div>Enfants</div>
                <div>Services VIP</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Mon Compte</h4>
              <div className="space-y-2 text-gray-400">
                <div>Mon Statut</div>
                <div>Mes Marques</div>
                <div>Mes Ventes</div>
                <div>Paramètres</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-gray-400">
                <div>Centre d'aide</div>
                <div>Authentification</div>
                <div>Contact</div>
                <div>CGU</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TRUE ME. Tous droits réservés. Made in Dubai with authenticity.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
