import React from 'react';
import { BrandCollection } from '@/mocks/userCollection';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Package, Euro } from 'lucide-react';
import { motion } from 'framer-motion';

interface BrandCardProps {
    brand: BrandCollection;
    onClick: () => void;
    index: number;
}

const TierBadge = ({ tier }: { tier: string }) => {
    const styles: Record<string, string> = {
        bronze: "bg-[#fbf3e8] text-[#7d5e39] border-[#c6a57a]",
        silver: "bg-gray-50 text-gray-600 border-gray-200",
        gold: "bg-[#f9f3e2] text-[#7c6320] border-[#d5bf86]",
        platinum: "bg-white text-trueme-black border-gray-200 shadow-sm",
    };

    return (
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${styles[tier.toLowerCase()] || styles.silver}`}>
            {tier}
        </span>
    );
};

export const BrandCard = ({ brand, onClick, index }: BrandCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -5 }}
            className="h-full"
        >
            <Card
                className="h-full bg-white border border-white/60 shadow-sm hover:shadow-xl transition-all duration-300 rounded-[2rem] overflow-hidden cursor-pointer group relative"
                onClick={onClick}
            >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="text-8xl font-serif text-trueme-black">{brand.brand.charAt(0)}</span>
                </div>

                <div className="p-6 h-full flex flex-col justify-between relative z-10">
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <TierBadge tier={brand.tier} />
                            <div className="flex items-center gap-1 text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded-full">
                                <TrendingUp className="w-3 h-3" />
                                +{brand.avgEvolution}%
                            </div>
                        </div>

                        <h3 className="text-2xl font-serif text-trueme-black mb-1 group-hover:text-trueme-gold transition-colors">
                            {brand.brand}
                        </h3>
                        <p className="text-trueme-secondary text-sm mb-6">
                            {brand.items.length} articles dans votre collection
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-trueme-cream/30 p-3 rounded-xl">
                                <div className="flex items-center gap-2 text-trueme-secondary text-xs mb-1">
                                    <Euro className="w-3 h-3" />
                                    Valeur
                                </div>
                                <span className="font-medium text-trueme-black">{brand.totalValue.toLocaleString()} €</span>
                            </div>
                            <div className="bg-trueme-cream/30 p-3 rounded-xl">
                                <div className="flex items-center gap-2 text-trueme-secondary text-xs mb-1">
                                    <Package className="w-3 h-3" />
                                    Articles
                                </div>
                                <span className="font-medium text-trueme-black">{brand.totalItems}</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between text-xs text-trueme-secondary mb-1">
                            <span>Progression {brand.tier}</span>
                            <span>{brand.progressPct}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-trueme-gold transition-all duration-500"
                                style={{ width: `${brand.progressPct}%` }}
                            />
                        </div>

                        <div className="pt-4 flex items-center text-trueme-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                            Voir les détails <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
};
