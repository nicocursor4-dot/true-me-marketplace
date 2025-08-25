'use client';

import React from 'react';
import Link from 'next/link';
import TrueMeNavbar from '@/components/TrueMeNavbar';

const GOLD = "#b08a2e"; // teinte or cohérente TRUE ME

const DATA = {
  brands: [
    { id: 1, name: "LOUIS VUITTON", tier: "Bronze", progressPct: 30 },
    { id: 2, name: "CHANEL", tier: "Silver", progressPct: 60 },
    { id: 3, name: "Dior", tier: "Gold", progressPct: 80 },
    { id: 4, name: "HERMÈS", tier: "Gold", progressPct: 75 },
    { id: 5, name: "BALENCIAGA", tier: "Gold", progressPct: 72 },
    { id: 6, name: "BURBERRY", tier: "Bronze", progressPct: 30 },
  ],
  // Historique générique. Remplacez par l'historique réel de la marque sélectionnée.
  history: [
    { id: "h1", date: "APRIL 2021", brand: "SILVER", tier: "SILVER" },
    { id: "h2", date: "FEB 2021", brand: "CHANEL", tier: "GOLD" },
    { id: "h3", date: "JAN 2021", brand: "DIOR", tier: "GOLD" },
    { id: "h4", date: "JAN 2021", brand: "HERMES", tier: "GOLD" },
  ],
};

function TierBadge({ tier }: { tier: string }) {
  const tone = tier.toLowerCase();
  const styles: Record<string, string> = {
    bronze:
      "border-[#c6a57a] text-[#7d5e39] bg-[#fbf3e8] ring-1 ring-[#e5d2b9]",
    silver:
      "border-neutral-300 text-neutral-700 bg-white ring-1 ring-neutral-200",
    gold: `border-[#d5bf86] text-[#7c6320] bg-[#f9f3e2] ring-1 ring-[#ead9aa]`,
    platinum:
      "border-neutral-300 text-neutral-800 bg-white ring-1 ring-neutral-200",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-0.5 text-xs tracking-wide ${
        styles[tone] ?? styles.silver
      }`}
    >
      <span className="inline-block h-2 w-2 rounded-full bg-current/80" />
      {tier}
    </span>
  );
}

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-2.5 w-full rounded-full bg-neutral-100 ring-1 ring-black/5">
      <div
        className="h-2.5 rounded-full bg-gradient-to-r from-[#f0d89d] via-[#d8b356] to-[#a8842c]"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}

export default function TrueMeBrandsStatus() {
  // Sélection initiale = première marque
  const selected = DATA.brands[0];

  return (
    <div className="min-h-screen bg-trueme-cream text-trueme antialiased selection:bg-black selection:text-white">
      <TrueMeNavbar />
      
      {/* Stage contraint pour grand écran */}
      <main className="mx-auto w-full max-w-[1280px] 2xl:max-w-[1400px] px-6 py-10 mt-24">
        {/* Titre + CTA marketplace */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif tracking-wide text-trueme">BRANDS</h1>
            <p className="mt-2 text-sm text-trueme-secondary">Votre niveau par maison. Avancées, manquants et historique.</p>
          </div>
          <Link
            href="/marketplace"
            className="rounded-full bg-trueme px-5 py-3 text-sm text-white hover:bg-trueme-secondary transition-colors"
          >
            Aller au Marketplace
          </Link>
        </div>

        {/* Grille principale 12 colonnes pour 16:9 */}
        <section className="grid grid-cols-12 gap-8">
          {/* Col. gauche — Aperçu statuts (filtres + métriques) */}
          <aside className="col-span-12 lg:col-span-3 space-y-6">
            <div className="rounded-3xl bg-white ring-1 ring-black/5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.12)] p-6">
              <h2 className="text-xl font-serif text-trueme">Niveaux</h2>
              <div className="mt-4 grid grid-cols-4 gap-2">
                {[
                  { k: "B", label: "Bronze" },
                  { k: "S", label: "Silver" },
                  { k: "G", label: "Gold" },
                  { k: "P", label: "Platinum" },
                ].map((t) => (
                  <button
                    key={t.k}
                    className="aspect-square rounded-full border border-neutral-300 bg-white text-sm hover:bg-neutral-50 text-trueme"
                    title={t.label}
                  >
                    {t.k}
                  </button>
                ))}
              </div>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center justify-between"><span className="text-trueme-secondary">Maisons suivies</span><span className="font-medium tabular-nums text-trueme">{DATA.brands.length}</span></div>
                <div className="flex items-center justify-between"><span className="text-trueme-secondary">Statut global</span><TierBadge tier="Bronze" /></div>
              </div>
            </div>

            {/* Carte mise en avant responsive */}
            <div className="rounded-3xl bg-gradient-to-br from-white to-trueme-cream ring-1 ring-trueme-gold p-6">
              <div className="font-serif text-lg text-trueme">Conciergerie</div>
              <p className="mt-2 text-sm text-trueme-secondary">Besoin de deux pièces pour passer Silver. Demandez une chasse personnalisée.</p>
              <button className="mt-4 inline-block rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm hover:bg-neutral-50 text-trueme">Contacter</button>
            </div>
          </aside>

          {/* Col. centre — Liste des marques */}
          <section className="col-span-12 lg:col-span-6">
            <div className="rounded-3xl bg-white ring-1 ring-black/5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.12)] overflow-hidden">
              <div className="p-6">
                {/* Barre utilitaire */}
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="relative w-full md:w-[360px]">
                    <input
                      type="search"
                      placeholder="Rechercher une maison"
                      className="w-full rounded-full border border-neutral-300 bg-white px-4 py-2.5 pr-10 text-sm outline-none placeholder:text-neutral-400 focus:border-trueme-gold"
                    />
                    <svg aria-hidden viewBox="0 0 24 24" className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm11 3l-5.2-5.2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-trueme-secondary">Trier</span>
                    <select className="rounded-full border border-neutral-300 bg-white px-3 py-2 text-sm text-trueme">
                      <option>Nom</option>
                      <option>Statut</option>
                      <option>Progression</option>
                    </select>
                  </div>
                </div>

                {/* Tableau stylisé (sans <table> pour plus de flexibilité) */}
                <ul className="divide-y divide-neutral-100">
                  {DATA.brands.map((b) => (
                    <li key={b.id} className="group p-4 md:p-5 hover:bg-neutral-50/60">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="h-10 w-10 shrink-0 rounded-full bg-neutral-100 ring-1 ring-black/5" />
                          <h3 className="truncate font-serif text-xl tracking-wide text-trueme">{b.name}</h3>
                        </div>
                        <TierBadge tier={b.tier} />
                      </div>
                      <div className="mt-3">
                        <ProgressBar value={b.progressPct} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Col. droite — Détails de la marque sélectionnée */}
          <aside className="col-span-12 lg:col-span-3 space-y-6">
            {/* Carte statut de la marque active */}
            <div className="rounded-3xl bg-white ring-1 ring-black/5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.12)] p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm tracking-wide text-trueme-secondary">Marque sélectionnée</div>
                  <div className="mt-1 font-serif text-2xl leading-tight text-trueme">{selected.name}</div>
                </div>
                <TierBadge tier={selected.tier} />
              </div>
              <div className="mt-6">
                <div className="flex items-center justify-between text-sm text-trueme-secondary">
                  <span>Évolution vers</span>
                  <span className="font-medium text-trueme">PLATINUM</span>
                </div>
                <div className="mt-3"><ProgressBar value={64} /></div>
                <div className="mt-2 text-xs text-trueme-secondary">64% — 2 articles pour Silver, 12 pour Gold</div>
              </div>
            </div>

            {/* Historique */}
            <div className="rounded-3xl bg-white ring-1 ring-black/5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.12)] p-6">
              <h2 className="text-xl font-serif text-trueme">Historique</h2>
              <ul className="mt-4 divide-y divide-neutral-100 text-[15px]">
                {DATA.history.map((h) => (
                  <li key={h.id} className="py-3 flex items-center justify-between">
                    <span className="text-trueme-secondary">{h.date}</span>
                    <span className="font-medium text-trueme-gold">{h.tier}</span>
                  </li>
                ))}
              </ul>
              <Link href="/marketplace" className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm hover:bg-neutral-50 text-trueme">Go to Marketplace</Link>
            </div>
          </aside>
        </section>

        {/* Footer discret */}
        <footer className="mt-12 pb-10 text-xs text-trueme-secondary">
          <div className="mx-auto w-full max-w-[960px] text-center leading-relaxed">
            Données affichées à titre indicatif. Consultez les conditions dans votre espace membre. © TRUE ME 2025.
          </div>
        </footer>
      </main>
    </div>
  );
}
