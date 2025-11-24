'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import LegacyNavbar from '@/components/LegacyNavbar'
import RichFooter from '@/components/layout/RichFooter'
import { Mail, Phone, MapPin, Clock, Shield, Award, Users, CheckCircle, MessageCircle, Send, ArrowRight } from 'lucide-react'

export default function ContactPage() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    requestType: 'general'
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [contextBanner, setContextBanner] = useState<null | { title: string; subtitle?: string }>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    console.log('Contact form submitted:', formData)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Prefill form based on context from query params (from, service, tier)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const from = params.get('from')
    const service = params.get('service')
    const tier = params.get('tier')

    if (from === 'vip' && service === 'premium-international') {
      setFormData(prev => ({
        ...prev,
        requestType: 'vip',
        subject: prev.subject || 'Demande de devis — Premium International',
        message: prev.message || "Bonjour, je souhaite obtenir un devis pour le service VIP Premium International. Merci de me recontacter."
      }))
      setContextBanner({ title: 'Demande de devis', subtitle: 'Premium International' })
    } else if (from === 'auth-premium' && service === 'premium') {
      setFormData(prev => ({
        ...prev,
        requestType: 'authentification',
        subject: prev.subject || "Authentification Premium — prise de contact",
        message: prev.message || "Bonjour, je souhaite échanger au sujet de l’Authentification Premium (3–5 jours)."
      }))
      setContextBanner({ title: 'Authentification Premium', subtitle: 'Prise de contact' })
    } else if (from === 'auth-express' && service === 'express') {
      setFormData(prev => ({
        ...prev,
        requestType: 'authentification',
        subject: prev.subject || 'Authentification Express — prise de contact',
        message: prev.message || "Bonjour, je souhaite échanger au sujet de l’Authentification Express (24h)."
      }))
      setContextBanner({ title: 'Authentification Express', subtitle: 'Prise de contact' })
    } else if (from === 'auth-complete' && service === 'complete') {
      setFormData(prev => ({
        ...prev,
        requestType: 'authentification',
        subject: prev.subject || 'Authentification Complète — prise de contact',
        message: prev.message || "Bonjour, je souhaite échanger au sujet de l’Authentification Complète (2–3 jours)."
      }))
      setContextBanner({ title: 'Authentification Complète', subtitle: 'Prise de contact' })
    } else if (from === 'vip' && tier) {
      setFormData(prev => ({
        ...prev,
        requestType: 'vip',
        subject: prev.subject || `Inscription VIP — ${tier.toUpperCase()}`
      }))
      setContextBanner({ title: 'Inscription VIP', subtitle: tier.toUpperCase() })
    } else {
      setContextBanner(null)
    }
  }, [])

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adresse",
      details: [
        "True Me Luxury Marketplace",
        "Dubai Marina Mall, Level 2",
        "Dubai Marina, Dubai",
        "Émirats Arabes Unis"
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      details: [
        "+971 4 XXX XXXX",
        "WhatsApp: +971 50 XXX XXXX",
        "Urgences: +971 55 XXX XXXX"
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: [
        "contact@trueme.ae",
        "vip@trueme.ae",
        "authentification@trueme.ae",
        "support@trueme.ae"
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horaires",
      details: [
        "Lundi - Vendredi: 9h - 21h",
        "Samedi: 10h - 22h",
        "Dimanche: 12h - 20h",
        "Support 24/7 pour les membres VIP"
      ]
    }
  ]

  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Authentification",
      description: "Questions sur nos services d'authentification et certification",
      email: "authentification@trueme.ae"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Service VIP",
      description: "Assistance dédiée pour nos membres VIP et Platinum",
      email: "vip@trueme.ae"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Partenariats",
      description: "Collaborations et opportunités d'affaires",
      email: "partenariats@trueme.ae"
    }
  ]

  return (
    <main className="min-h-screen bg-trueme-cream selection:bg-trueme-gold/20">
      <LegacyNavbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-trueme-gold/10 via-transparent to-transparent opacity-50"></div>
        </div>

        <div className="max-w-[1600px] mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50 mb-8">
              <MessageCircle className="w-4 h-4 text-trueme-gold" />
              <span className="text-sm font-medium text-trueme-black uppercase tracking-wider">Contactez-nous</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-serif text-trueme-black mb-8 leading-tight">
              Parlons <br />
              <span className="text-trueme-gold italic">Ensemble</span>
            </h1>

            <p className="text-xl md:text-2xl text-trueme-secondary max-w-3xl mx-auto font-light leading-relaxed">
              Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions et vous accompagner dans votre expérience True Me.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100">
                <h2 className="text-3xl font-serif text-trueme-black mb-8">Envoyez-nous un message</h2>

                {contextBanner && (
                  <div className="mb-8 flex items-center justify-between p-4 rounded-2xl border border-trueme-gold/20 bg-trueme-gold/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-trueme-gold/20 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-trueme-gold" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-trueme-gold uppercase tracking-wider">Contexte</p>
                        <p className="text-trueme-black text-sm font-medium">{contextBanner.title}{contextBanner.subtitle ? ` — ${contextBanner.subtitle}` : ''}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setContextBanner(null)
                        window.history.replaceState({}, document.title, window.location.pathname)
                      }}
                      className="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-trueme-secondary hover:bg-gray-50 transition-colors"
                    >
                      Effacer
                    </button>
                  </div>
                )}

                {isSubmitted ? (
                  <div className="text-center py-20">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-3xl font-serif text-trueme-black mb-4">Message envoyé !</h3>
                    <p className="text-trueme-secondary mb-8 font-light">
                      Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-8 py-4 bg-trueme-black text-white rounded-full hover:bg-trueme-gold transition-colors font-medium"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-bold text-trueme-black uppercase tracking-wider mb-2">
                          Prénom *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-trueme-gold/20 focus:border-trueme-gold transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-bold text-trueme-black uppercase tracking-wider mb-2">
                          Nom *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-trueme-gold/20 focus:border-trueme-gold transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-trueme-black uppercase tracking-wider mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-trueme-gold/20 focus:border-trueme-gold transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-trueme-black uppercase tracking-wider mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-trueme-gold/20 focus:border-trueme-gold transition-all"
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="requestType" className="block text-sm font-bold text-trueme-black uppercase tracking-wider mb-2">
                        Type de demande *
                      </label>
                      <div className="relative">
                        <select
                          id="requestType"
                          name="requestType"
                          value={formData.requestType}
                          onChange={handleChange}
                          className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-trueme-gold/20 focus:border-trueme-gold transition-all appearance-none"
                          required
                        >
                          <option value="general">Question générale</option>
                          <option value="authentification">Authentification</option>
                          <option value="vip">Service VIP</option>
                          <option value="sell">Vendre un article</option>
                          <option value="buy">Acheter un article</option>
                          <option value="partnership">Partenariat</option>
                          <option value="technical">Support technique</option>
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                          <ArrowRight className="w-4 h-4 text-gray-400 rotate-90" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-bold text-trueme-black uppercase tracking-wider mb-2">
                        Sujet *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-trueme-gold/20 focus:border-trueme-gold transition-all"
                        placeholder="Résumez votre demande"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-trueme-black uppercase tracking-wider mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-trueme-gold/20 focus:border-trueme-gold transition-all resize-none"
                        placeholder="Décrivez votre demande en détail..."
                        required
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-trueme-black text-white font-medium rounded-full hover:bg-trueme-gold transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
                    >
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12 sticky top-32"
            >
              <div>
                <h2 className="text-4xl font-serif text-trueme-black mb-6">Informations</h2>
                <p className="text-trueme-secondary text-lg font-light leading-relaxed">
                  Nous sommes là pour vous accompagner à chaque étape de votre parcours avec True Me.
                  Contactez-nous par le moyen qui vous convient le mieux.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-6 p-8 bg-white rounded-[2rem] shadow-sm hover:shadow-md transition-all duration-300 border border-gray-50"
                  >
                    <div className="w-12 h-12 rounded-full bg-trueme-gold/10 flex items-center justify-center flex-shrink-0 text-trueme-gold">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-trueme-black mb-3">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-trueme-secondary font-light">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {services.slice(0, 2).map((service, index) => (
                  <div key={index} className="bg-trueme-black text-white p-8 rounded-[2rem]">
                    <div className="text-trueme-gold mb-4">
                      {service.icon}
                    </div>
                    <h3 className="font-serif text-lg mb-2">{service.title}</h3>
                    <a href={`mailto:${service.email}`} className="text-sm text-white/60 hover:text-white transition-colors">
                      {service.email}
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white rounded-t-[4rem] -mt-10 relative z-20">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-[3rem] aspect-video overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero/prompt1.png"
                  alt="Showroom TRUE ME — Dubai Marina"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full">
                  <p className="font-serif text-trueme-black">Dubai Marina Mall, Level 2</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-serif text-trueme-black mb-6">Notre Showroom</h2>
                <p className="text-trueme-secondary text-lg font-light leading-relaxed">
                  Venez découvrir notre collection dans notre showroom premium à Dubai Marina.
                  Un espace dédié à l'excellence où nos experts vous accueillent sur rendez-vous.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50">
                  <Clock className="w-6 h-6 text-trueme-gold" />
                  <span className="text-trueme-black font-medium">Consultation sur rendez-vous uniquement</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50">
                  <Shield className="w-6 h-6 text-trueme-gold" />
                  <span className="text-trueme-black font-medium">Service d'authentification sur place</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50">
                  <Award className="w-6 h-6 text-trueme-gold" />
                  <span className="text-trueme-black font-medium">Espace VIP dédié aux membres Premium</span>
                </div>
              </div>

              <Link
                href="/contact/appointment"
                className="inline-flex items-center gap-3 px-8 py-4 bg-trueme-black text-white rounded-full hover:bg-trueme-gold transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
              >
                Prendre rendez-vous
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <RichFooter />
    </main>
  )
}
