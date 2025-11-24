'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
    {
        id: 1,
        name: "Sophie Martin",
        location: "Dubai Marina",
        rating: 5,
        comment: "Service exceptionnel et produits authentiques. Mon sac Hermès est parfait!",
        image: "/images/hero/zara-al-rashid.png"
    },
    {
        id: 2,
        name: "Alexandra Chen",
        location: "Palm Jumeirah",
        rating: 5,
        comment: "La meilleure marketplace de luxe à Dubai. Certification impeccable.",
        image: "/images/hero/zara-al-rashid.png"
    },
    {
        id: 3,
        name: "Marcus Sterling",
        location: "Downtown Dubai",
        rating: 5,
        comment: "True Me a révolutionné mes achats de luxe. Qualité et authenticité garanties.",
        image: "/images/hero/marcus-sterling.png"
    }
]

export default function TestimonialsSection() {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)

    // Auto-rotation des témoignages
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-trueme-gold/5 via-transparent to-transparent opacity-50" />
            <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-xs font-medium tracking-[0.2em] text-trueme-gold uppercase mb-4 block">Témoignages</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-trueme-black mb-6">Ils nous font confiance</h2>
                    <div className="w-24 h-px bg-trueme-gold/30 mx-auto" />
                </motion.div>

                <div className="relative min-h-[300px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentTestimonialIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="text-center"
                        >
                            <div className="flex justify-center gap-1 mb-8">
                                {[...Array(testimonials[currentTestimonialIndex].rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-trueme-gold text-trueme-gold" />
                                ))}
                            </div>
                            <blockquote className="font-serif text-2xl md:text-4xl text-trueme-black leading-tight mb-10 max-w-3xl mx-auto">
                                &ldquo;{testimonials[currentTestimonialIndex].comment}&rdquo;
                            </blockquote>
                            <div className="flex flex-col items-center gap-4">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
                                    <Image
                                        src={testimonials[currentTestimonialIndex].image}
                                        alt={testimonials[currentTestimonialIndex].name}
                                        fill
                                        sizes="64px"
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <cite className="not-italic font-medium text-trueme-black tracking-wide block mb-1">
                                        {testimonials[currentTestimonialIndex].name}
                                    </cite>
                                    <span className="text-xs text-trueme-secondary uppercase tracking-widest">
                                        {testimonials[currentTestimonialIndex].location}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Indicateurs témoignages */}
                <div className="flex justify-center gap-3 mt-16">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentTestimonialIndex(index)}
                            className={`h-1 rounded-full transition-all duration-500 ${index === currentTestimonialIndex
                                ? 'w-12 bg-trueme-gold'
                                : 'w-2 bg-trueme-gold/20 hover:bg-trueme-gold/40'
                                }`}
                            aria-label={`Aller au témoignage ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
