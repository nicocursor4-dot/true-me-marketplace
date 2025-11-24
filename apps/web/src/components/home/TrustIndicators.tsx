'use client'

import { motion } from 'framer-motion'
import { Shield, Truck, RefreshCw, Award } from 'lucide-react'

export default function TrustIndicators() {
    return (
        <section className="py-24 bg-trueme-cream relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center group"
                    >
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-trueme-gold/5 flex items-center justify-center group-hover:bg-trueme-gold/10 transition-colors duration-300">
                            <Shield className="w-8 h-8 text-trueme-gold" />
                        </div>
                        <h3 className="font-serif text-lg text-trueme-black mb-3 tracking-wide">AUTHENTIFICATION</h3>
                        <p className="text-sm text-trueme-secondary font-light leading-relaxed">100% des produits certifiés par nos experts</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-center group"
                    >
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-trueme-gold/5 flex items-center justify-center group-hover:bg-trueme-gold/10 transition-colors duration-300">
                            <Truck className="w-8 h-8 text-trueme-gold" />
                        </div>
                        <h3 className="font-serif text-lg text-trueme-black mb-3 tracking-wide">LIVRAISON EXPRESS</h3>
                        <p className="text-sm text-trueme-secondary font-light leading-relaxed">Livraison en 24-48h à Dubai et UAE</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-center group"
                    >
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-trueme-gold/5 flex items-center justify-center group-hover:bg-trueme-gold/10 transition-colors duration-300">
                            <RefreshCw className="w-8 h-8 text-trueme-gold" />
                        </div>
                        <h3 className="font-serif text-lg text-trueme-black mb-3 tracking-wide">RETOUR GRATUIT</h3>
                        <p className="text-sm text-trueme-secondary font-light leading-relaxed">14 jours pour changer d&apos;avis</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-center group"
                    >
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-trueme-gold/5 flex items-center justify-center group-hover:bg-trueme-gold/10 transition-colors duration-300">
                            <Award className="w-8 h-8 text-trueme-gold" />
                        </div>
                        <h3 className="font-serif text-lg text-trueme-black mb-3 tracking-wide">GARANTIE QUALITÉ</h3>
                        <p className="text-sm text-trueme-secondary font-light leading-relaxed">Produits minutieusement vérifiés</p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
