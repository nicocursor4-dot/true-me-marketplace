import React from 'react';
import { BrandCollection } from '@/mocks/userCollection';
import { TrendingUp, Package, Euro, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CollectionChart } from '@/components/ui/collection-chart';

interface BrandDetailsPanelProps {
    brand: BrandCollection | null;
}

export const BrandDetailsPanel = ({ brand }: BrandDetailsPanelProps) => {
    if (!brand) {
        return (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 text-trueme-secondary">
                <div className="w-16 h-16 rounded-full bg-trueme-cream flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-trueme-gold" />
                </div>
                <h3 className="font-serif text-xl text-trueme-black mb-2">Sélectionnez une Maison</h3>
                <p className="text-sm max-w-[200px]">Cliquez sur une marque pour voir les détails, l'évolution et vos pièces.</p>
            </div>
        );
    }

    // Mock chart data for this brand (simplified for demo)
    const chartData = {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
        values: Array.from({ length: 6 }, () => Math.floor(brand.totalValue * (0.8 + Math.random() * 0.4)))
    };

    return (
        <motion.div
            key={brand.brand}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
        >
            {/* Header Card */}
            <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-white/60 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                    <span className="text-9xl font-serif text-trueme-black">{brand.brand.charAt(0)}</span>
                </div>

                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <span className="inline-block px-3 py-1 rounded-full bg-trueme-black text-white text-xs font-medium mb-2">
                                Statut {brand.tier}
                            </span>
                            <h2 className="text-3xl font-serif text-trueme-black">{brand.brand}</h2>
                        </div>
                        <div className="text-right">
                            <div className="text-2xl font-serif text-trueme-black">{brand.totalValue.toLocaleString()} €</div>
                            <div className="text-green-600 text-sm font-medium flex items-center justify-end gap-1">
                                <TrendingUp className="w-3 h-3" />
                                +{brand.avgEvolution}%
                            </div>
                        </div>
                    </div>

                    {/* Mini Chart */}
                    <div className="h-32 w-full mb-8 relative z-0">
                        <CollectionChart
                            values={chartData.values}
                            labels={chartData.labels}
                            height={128}
                            purchasesByMonth={[] as any} // Not needed for mini chart
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 relative z-10 bg-white/80 backdrop-blur-sm pt-2">
                        <Button className="w-full bg-trueme-black text-white hover:bg-trueme-gold rounded-full">
                            Estimer une pièce
                        </Button>
                        <Button variant="outline" className="w-full border-trueme-black/10 hover:bg-trueme-cream rounded-full">
                            Vendre
                        </Button>
                    </div>
                </div>
            </div>

            {/* Progress Card */}
            <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-white/60">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-serif text-lg text-trueme-black">Prochain Palier</h3>
                    <span className="text-xs font-medium text-trueme-secondary">
                        {brand.tier === 'Gold' ? 'Platinum' : brand.tier === 'Silver' ? 'Gold' : brand.tier === 'Bronze' ? 'Silver' : 'Max'}
                    </span>
                </div>
                <div className="mb-2 flex justify-between text-sm">
                    <span>Progression</span>
                    <span className="font-medium">{brand.progressPct}%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden mb-4">
                    <div className="h-full bg-trueme-gold transition-all duration-500" style={{ width: `${brand.progressPct}%` }} />
                </div>
                <p className="text-xs text-trueme-secondary text-center">
                    Plus que 3 achats pour atteindre le statut Platinum et débloquer les invitations aux défilés.
                </p>
            </div>

            {/* Top Items */}
            <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-white/60">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-serif text-lg text-trueme-black">Pièces Phares</h3>
                    <Button variant="ghost" size="sm" className="text-xs h-8">Voir tout</Button>
                </div>
                <div className="space-y-3">
                    {brand.items.slice(0, 3).map((item) => (
                        <div key={item.id} className="flex items-center gap-3 p-2 rounded-xl hover:bg-trueme-cream/30 transition-colors cursor-pointer group">
                            <div className="w-12 h-12 rounded-lg bg-gray-50 relative overflow-hidden flex-shrink-0">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-sm text-trueme-black truncate">{item.name}</h4>
                                <p className="text-xs text-trueme-secondary">{item.currentValue.toLocaleString()} €</p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-trueme-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
