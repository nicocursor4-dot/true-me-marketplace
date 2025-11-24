import React from 'react';
import { BrandCollection } from '@/mocks/userCollection';
import { Modal } from '@/components/ui/modal';
import Image from 'next/image';
import { TrendingUp, Package, Euro, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BrandDetailsModalProps {
    brand: BrandCollection | null;
    isOpen: boolean;
    onClose: () => void;
}

export const BrandDetailsModal = ({ brand, isOpen, onClose }: BrandDetailsModalProps) => {
    if (!brand) return null;

    return (
        <Modal.Modal active={isOpen} onClickOutside={onClose} className="max-w-4xl">
            <Modal.Body className="p-0 overflow-hidden">
                {/* Header with Background */}
                <div className="relative h-48 bg-trueme-black overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-trueme-black via-trueme-black/80 to-transparent z-10" />
                    <div className="absolute -right-20 -top-20 text-[12rem] font-serif text-white/5 select-none">
                        {brand.brand.charAt(0)}
                    </div>

                    <div className="relative z-20 p-8 h-full flex flex-col justify-end">
                        <div className="flex justify-between items-end">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-trueme-gold/20 text-trueme-gold text-xs font-medium border border-trueme-gold/20 mb-3">
                                    Statut {brand.tier}
                                </span>
                                <h2 className="text-4xl font-serif text-white mb-1">{brand.brand}</h2>
                                <p className="text-white/60 text-sm">Collection démarrée en 2023</p>
                            </div>
                            <div className="text-right">
                                <div className="text-3xl font-serif text-white">{brand.totalValue.toLocaleString()} €</div>
                                <div className="text-green-400 text-sm font-medium flex items-center justify-end gap-1">
                                    <TrendingUp className="w-3 h-3" />
                                    +{brand.avgEvolution}% cette année
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-8">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-6 mb-8">
                        <div className="bg-trueme-cream/30 p-4 rounded-2xl border border-trueme-gold/10">
                            <div className="text-trueme-secondary text-xs uppercase tracking-wider mb-1">Articles</div>
                            <div className="text-2xl font-serif text-trueme-black">{brand.totalItems}</div>
                        </div>
                        <div className="bg-trueme-cream/30 p-4 rounded-2xl border border-trueme-gold/10">
                            <div className="text-trueme-secondary text-xs uppercase tracking-wider mb-1">Progression</div>
                            <div className="text-2xl font-serif text-trueme-black">{brand.progressPct}%</div>
                            <div className="h-1 w-full bg-gray-200 rounded-full mt-2">
                                <div className="h-full bg-trueme-gold rounded-full" style={{ width: `${brand.progressPct}%` }} />
                            </div>
                        </div>
                        <div className="bg-trueme-cream/30 p-4 rounded-2xl border border-trueme-gold/10">
                            <div className="text-trueme-secondary text-xs uppercase tracking-wider mb-1">Prochain Palier</div>
                            <div className="text-2xl font-serif text-trueme-black">Platinum</div>
                            <div className="text-xs text-trueme-secondary mt-1">3 achats restants</div>
                        </div>
                    </div>

                    {/* Items List */}
                    <h3 className="font-serif text-xl text-trueme-black mb-4">Vos Pièces {brand.brand}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                        {brand.items.map((item) => (
                            <div key={item.id} className="flex items-center gap-4 p-3 rounded-xl border border-gray-100 hover:border-trueme-gold/30 hover:bg-trueme-cream/10 transition-all group">
                                <div className="w-16 h-16 rounded-lg bg-gray-50 relative overflow-hidden flex-shrink-0">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-medium text-trueme-black truncate">{item.name}</h4>
                                    <p className="text-xs text-trueme-secondary">{item.purchaseDate}</p>
                                </div>
                                <div className="text-right">
                                    <div className="font-medium text-trueme-black">{item.currentValue.toLocaleString()} €</div>
                                    <div className="text-xs text-green-600 font-medium">+{item.evolution}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Modal.Body>
            <Modal.Actions className="border-t border-gray-100 p-6 bg-gray-50/50">
                <Modal.Action onClick={onClose} type="secondary">Fermer</Modal.Action>
                <Button className="rounded-full bg-trueme-black text-white hover:bg-trueme-gold transition-colors">
                    Voir sur le Marketplace <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
            </Modal.Actions>
        </Modal.Modal>
    );
};
