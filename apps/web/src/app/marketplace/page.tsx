'use client';

import React from 'react';
import TrueMeNavbar from '@/components/TrueMeNavbar';
import { Heart } from 'lucide-react';

export default function TrueMeMarketplace() {
  const featuredProducts = [
    {
      id: 1,
      brand: 'Chanel',
      name: 'Sac 2.55 Classic Flap',
      price: 'AED 12,500',
      image: '/images/products/chanel-classic-flap.jpg',
      condition: 'Excellent'
    },
    {
      id: 2,
      brand: 'Hermès',
      name: 'Birkin 35 Togo Étoupe',
      price: 'AED 45,000',
      image: '/images/products/hermes-birkin-35.jpg',
      condition: 'Comme neuf'
    },
    {
      id: 3,
      brand: 'Louis Vuitton',
      name: 'Speedy 30 Monogram',
      price: 'AED 3,200',
      image: '/images/products/lv-speedy-30.jpg',
      condition: 'Très bon'
    },
    {
      id: 4,
      brand: 'Dior',
      name: 'Lady Dior Medium',
      price: 'AED 8,900',
      image: '/images/products/dior-lady-medium.jpg',
      condition: 'Excellent'
    }
  ];

  return (
    <div className="min-h-screen bg-trueme-cream text-trueme antialiased">
      <TrueMeNavbar />

      {/* Main Content */}
      <main className="pt-20 px-4 md:px-6 mx-auto w-full max-w-[1280px] 2xl:max-w-[1400px] py-10">
        {/* Page title & search row */}
        <section aria-label="Recherche et tri" className="mb-8">
          <div className="flex flex-wrap items-end gap-4 justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif tracking-wide text-trueme">MARKETPLACE</h1>
              <p className="mt-2 text-sm text-trueme-secondary">Sélection curatée. Pièces authentifiées. Service conciergerie.</p>
            </div>
            <div className="flex w-full md:w-auto items-center gap-3">
              {/* Search */}
              <label htmlFor="search" className="sr-only">Rechercher</label>
              <div className="relative w-full md:w-[420px]">
                <input
                  id="search"
                  type="search"
                  placeholder="Rechercher une pièce, marque, référence..."
                  className="w-full rounded-full border border-gray-300 bg-white px-5 py-3 pr-11 text-[15px] shadow-[0_4px_18px_-10px_rgba(0,0,0,0.25)] outline-none placeholder:text-gray-400 focus:border-trueme-gold focus:ring-0"
                />
                <svg aria-hidden viewBox="0 0 24 24" className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm11 3l-5.2-5.2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
              {/* Sort */}
              <div className="relative">
                <select aria-label="Tri" className="appearance-none rounded-full border border-gray-300 bg-white px-4 py-3 pr-9 text-[15px] focus:border-trueme-gold focus:ring-0">
                  <option defaultValue="">Trier par</option>
                  <option>Prix (croissant)</option>
                  <option>Prix (décroissant)</option>
                  <option>Nouveautés</option>
                  <option>Popularité</option>
                </select>
                <svg aria-hidden viewBox="0 0 20 20" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-600">
                  <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Content grid: filters + products */}
        <section className="grid grid-cols-12 gap-8">
          {/* Sidebar filters (sticky on desktop) */}
          <aside className="col-span-12 lg:col-span-3">
            <div className="sticky top-24 space-y-6">
              {/* Card */}
              <div className="rounded-3xl bg-white ring-1 ring-black/5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.12)]">
                <header className="px-6 pt-6">
                  <h2 className="text-xl font-serif text-trueme">Affiner</h2>
                </header>
                <div className="p-6 pt-4 space-y-6 text-[15px]">
                  {/* Brand */}
                  <div>
                    <div className="font-medium text-trueme">Marques</div>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {['Chanel','Gucci','Saint Laurent','Dior','Hermès','Bottega'].map((b)=> (
                        <label key={b} className="inline-flex items-center gap-2">
                          <input type="checkbox" className="rounded border-gray-300 text-trueme-gold focus:ring-trueme-gold" />
                          <span className="text-trueme">{b}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  {/* Category */}
                  <div>
                    <div className="font-medium text-trueme">Catégories</div>
                    <div className="mt-3 space-y-2">
                      {['Sacs','Chaussures','Prêt-à-porter','Accessoires','Montres & Joaillerie'].map((c)=> (
                        <label key={c} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded border-gray-300 text-trueme-gold focus:ring-trueme-gold" />
                          <span className="text-trueme">{c}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  {/* Price */}
                  <div>
                    <div className="font-medium text-trueme">Prix (AED)</div>
                    <div className="mt-3 flex items-center gap-3">
                      <input placeholder="Min" className="w-1/2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-trueme-gold focus:ring-0" />
                      <span className="text-gray-400">—</span>
                      <input placeholder="Max" className="w-1/2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-trueme-gold focus:ring-0" />
                    </div>
                  </div>
                  {/* Condition */}
                  <div>
                    <div className="font-medium text-trueme">État</div>
                    <div className="mt-3 space-y-2">
                      {['Neuf','Excellent','Très bon','Bon'].map((s)=> (
                        <label key={s} className="flex items-center gap-2">
                          <input type="radio" name="cond" className="border-gray-300 text-trueme-gold focus:ring-trueme-gold" />
                          <span className="text-trueme">{s}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <button className="w-full rounded-full bg-trueme hover:bg-trueme/90 px-5 py-3 text-white transition-colors duration-200">Appliquer les filtres</button>
                </div>
              </div>

              {/* Concierge banner */}
              <div className="rounded-3xl bg-gradient-to-br from-white to-trueme-cream ring-1 ring-trueme-gold/30 p-6">
                <div className="font-serif text-lg text-trueme">Conciergerie</div>
                <p className="mt-2 text-sm text-trueme-secondary">Vous recherchez une pièce rare ? Notre équipe vous assiste et authentifie chaque article.</p>
                <button className="mt-4 rounded-full border border-trueme-gold bg-white px-4 py-2 text-sm text-trueme hover:bg-trueme-gold/5 transition-colors duration-200">Contacter</button>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <section className="col-span-12 lg:col-span-9">
            {/* Hint bar */}
            <div className="mb-4 flex items-center justify-between text-sm text-trueme-secondary">
              <span>4 résultats</span>
              <button className="rounded-full border border-gray-300 bg-white px-4 py-2 hover:bg-gray-50 lg:hidden">Filtres</button>
            </div>

            {/* Products: 3 columns desktop, 2 tablet, 1 mobile */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <li key={product.id} className="group rounded-3xl bg-white ring-1 ring-black/5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.12)] overflow-hidden">
                  {/* Image wrapper (16:10 ratio) */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      src={product.image}
                    />
                    <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs tracking-wide text-trueme">Authentifié</div>
                  </div>
                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="truncate font-serif text-xl leading-tight text-trueme">{product.brand}</h3>
                        <div className="mt-1 text-sm text-trueme-secondary">{product.name}</div>
                      </div>
                      <button aria-label="Ajouter aux favoris" className="rounded-full border border-gray-300 bg-white p-2 hover:bg-gray-50">
                        <Heart className="h-4 w-4 text-trueme" />
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="text-[15px] font-medium text-trueme-gold">{product.price}</div>
                      <a href="#" className="rounded-full bg-trueme hover:bg-trueme/90 px-4 py-2 text-sm text-white transition-colors duration-200">Voir</a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Pagination */}
            <div className="mt-8 flex items-center justify-center gap-2">
              {['Préc.', '1', '2', '3', 'Suiv.'].map((l) => (
                <button key={l} className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm hover:bg-gray-50 disabled:opacity-50" disabled={l==='1'}>
                  {l}
                </button>
              ))}
            </div>

            {/* Blog teaser */}
            <section aria-labelledby="blog" className="mt-12">
              <h2 id="blog" className="text-2xl font-serif text-trueme">Luxury Blog</h2>
              <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1,2,3].map((k)=> (
                  <article key={k} className="group rounded-3xl bg-white ring-1 ring-black/5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.12)] overflow-hidden">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img alt="Article" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl leading-tight text-trueme">The timeless appeal of Chanel bags</h3>
                      <p className="mt-1 text-sm text-trueme-secondary">April 05, 2024</p>
                      <a href="#" className="mt-4 inline-block rounded-full border border-gray-300 bg-white px-4 py-2 text-sm hover:bg-gray-50 text-trueme">Lire</a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </section>
        </section>

        {/* Footer */}
        <footer className="mt-14 pb-10 text-xs text-trueme-secondary">
          <div className="mx-auto w-full max-w-[960px] text-center leading-relaxed">
            Ventes soumises à authentification. Les prix affichés incluent les frais standards. © TRUE ME 2025.
          </div>
        </footer>
      </main>
    </div>
  );
}
