import React from 'react';
import { BrandCollection } from '@/mocks/userCollection';
import { TrendingUp, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface BrandRowProps {
    brand: BrandCollection;
    isActive: boolean;
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
        <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium border uppercase tracking-wide ${styles[tier.toLowerCase()] || styles.silver}`}>
            {tier}
        </span>
    );
};

export const BrandRow = ({ brand, isActive, onClick, index }: BrandRowProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.03 }}
        >
            <div
                onClick={onClick}
                className={clsx(
                    "group relative p-4 rounded-2xl cursor-pointer transition-all duration-300 border",
                    isActive
                        ? "bg-white border-trueme-gold shadow-md z-10 scale-[1.02]"
                        : "bg-white/50 border-transparent hover:bg-white hover:shadow-sm hover:scale-[1.01]"
                )}
            >
                <div className="flex items-center justify-between gap-4">
                    {/* Left: Logo & Name */}
                    <div className="flex items-center gap-4 min-w-0 flex-1">
                        <div className={clsx(
                            "w-12 h-12 rounded-full flex items-center justify-center text-xl font-serif transition-colors duration-300",
                            isActive ? "bg-trueme-black text-white" : "bg-trueme-cream text-trueme-black group-hover:bg-trueme-black group-hover:text-white"
                        )}>
                            {brand.brand.charAt(0)}
                        </div>

                        <div className="min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                                <h3 className={clsx("font-serif text-lg truncate transition-colors", isActive ? "text-trueme-black" : "text-trueme-black/80")}>
                                    {brand.brand}
                                </h3>
                                <TierBadge tier={brand.tier} />
                            </div>
                            <div className="flex items-center gap-3 text-xs text-trueme-secondary">
                                <span>{brand.totalItems} articles</span>
                                <span className="w-1 h-1 rounded-full bg-trueme-secondary/30" />
                                <span className="font-medium text-trueme-black">{brand.totalValue.toLocaleString()} €</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Stats & Arrow */}
                    <div className="flex items-center gap-6">
                        <div className="hidden md:block text-right">
                            <div className="text-xs text-trueme-secondary mb-1">Progression</div>
                            <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-trueme-gold transition-all duration-500"
                                    style={{ width: `${brand.progressPct}%` }}
                                />
                            </div>
                        </div>

                        <div className={clsx(
                            "flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300",
                            isActive ? "bg-trueme-gold text-white rotate-90" : "text-trueme-secondary group-hover:text-trueme-gold group-hover:translate-x-1"
                        )}>
                            <ChevronRight className="w-5 h-5" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
