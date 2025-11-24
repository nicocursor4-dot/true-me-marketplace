'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const categories = [
    {
        id: 'maroquinerie',
        title: 'Maroquinerie',
        subtitle: 'Sacs iconiques',
        image: '/images/products/PHOTOS SITE TM/1.jpeg',
        link: '/marketplace?category=sacs',
        count: '256 articles'
    },
    {
        id: 'chaussures',
        title: 'Chaussures',
        subtitle: 'Escarpins de luxe',
        image: '/images/products/PHOTOS SITE TM/2.jpeg',
        link: '/marketplace?category=chaussures',
        count: '189 articles'
    },
    {
        id: 'bijoux',
        title: 'Bijoux',
        subtitle: 'Joaillerie d\'exception',
        image: '/images/products/PHOTOS SITE TM/3.jpeg',
        link: '/marketplace?category=bijoux',
        count: '167 articles'
    },
    {
        id: 'accessoires',
        title: 'Accessoires',
        subtitle: 'Ceintures, foulards & lunettes',
        image: '/images/products/PHOTOS SITE TM/4.jpeg',
        link: '/marketplace?category=accessoires',
        count: '212 articles'
    }
]

export default function CategoriesSection() {
    return (
        <section className="py-24 md:py-32 bg-trueme-cream relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-trueme-gold/20 to-transparent" />
            <div className="max-w-7xl mx-auto px-4 md:px-16 pb-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-xs font-medium tracking-[0.2em] text-trueme-gold uppercase mb-4 block">Collections</span>
                    <h2 className="font-serif text-4xl md:text-6xl text-trueme-black mb-6">Notre Sélection</h2>
                    <p className="text-trueme-secondary text-lg font-light max-w-2xl mx-auto leading-relaxed">
                        Explorez nos catégories exclusives, où chaque pièce raconte une histoire d'élégance et d'authenticité.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category, index) => (
                        <Link key={category.id} href={category.link}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
                            >
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    className="object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500" />

                                <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center">
                                    <h3 className="font-serif text-2xl text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {category.title}
                                    </h3>
                                    <p className="text-white/80 text-sm font-light mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        {category.subtitle}
                                    </p>
                                    <div className="w-8 h-px bg-white/50 group-hover:w-16 transition-all duration-500" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
