'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Shield } from 'lucide-react'
import { products } from '@/data/realProducts'

export default function FeaturedProducts() {
    const featuredProducts = products.slice(0, 8)

    return (
        <section className="py-24 md:py-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 md:px-16 pb-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                >
                    <div className="text-left">
                        <span className="text-xs font-medium tracking-[0.2em] text-trueme-gold uppercase mb-4 block">Nouveautés</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-trueme-black">Dernières Arrivées</h2>
                    </div>
                    <Link href="/marketplace" className="group flex items-center gap-2 text-trueme-black hover:text-trueme-gold transition-colors duration-300">
                        <span className="text-sm font-medium tracking-widest uppercase">Tout voir</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </motion.div>

                <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
                    {featuredProducts.map((product, index) => (
                        <motion.li
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            className="group cursor-pointer"
                        >
                            <Link href={`/product/${product.id}`}>
                                <div className="relative aspect-[4/5] bg-trueme-cream mb-6 overflow-hidden rounded-sm">
                                    <Image
                                        src={product.images[0]}
                                        alt={product.name}
                                        fill
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {product.condition === 'Comme neuf' && (
                                        <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-trueme-black text-[10px] font-medium tracking-widest uppercase border border-black/5">
                                            Comme neuf
                                        </span>
                                    )}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                                </div>

                                <div className="space-y-2 text-center md:text-left">
                                    <h3 className="font-serif text-lg text-trueme-black group-hover:text-trueme-gold transition-colors duration-300">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-trueme-secondary font-light truncate uppercase tracking-wider">{product.brand}</p>
                                    <div className="flex items-center justify-center md:justify-between pt-2 border-t border-black/5 mt-4">
                                        <span className="text-base font-medium text-trueme-black">{product.price}</span>
                                        {product.certified && (
                                            <div className="hidden md:flex items-center gap-1.5 text-[10px] text-trueme-gold tracking-wider uppercase">
                                                <Shield className="w-3 h-3" />
                                                <span>Authentifié</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
