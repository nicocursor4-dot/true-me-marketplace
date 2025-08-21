import { Header } from '@/components/layout/Header'
import { StatusCard } from '@/components/ui/StatusCard'
import { AdvantageCard } from '@/components/ui/AdvantageCard'
import { Timeline } from '@/components/ui/Timeline'

// BLOC 1 - Dashboard Statut Global
export default function DashboardPage() {
  const advantages = [
    {
      icon: '🚀',
      title: 'Authentification Express',
      description: 'Vérification en 24h garantie',
      status: 'active' as const
    },
    {
      icon: '💎',
      title: 'Accès VIP Marketplace',
      description: 'Articles exclusifs avant les autres',
      status: 'active' as const
    },
    {
      icon: '🛡️',
      title: 'Assurance Premium',
      description: 'Couverture complète incluse',
      status: 'active' as const
    },
    {
      icon: '📱',
      title: 'Support Prioritaire',
      description: 'Réponse en moins de 2h',
      status: 'active' as const
    },
    {
      icon: '🎯',
      title: 'Recommandations IA',
      description: 'Suggestions personnalisées',
      status: 'active' as const
    },
    {
      icon: '👥',
      title: 'Événements Exclusifs',
      description: 'Invitation aux ventes privées',
      status: 'soon' as const
    }
  ]

  const timelineEvents = [
    {
      date: 'Juillet 2025',
      title: 'Inscription TRUE ME',
      status: 'completed' as const
    },
    {
      date: 'Août 2025',
      title: 'Statut Bronze atteint (15 articles)',
      status: 'completed' as const
    },
    {
      date: 'Octobre 2025',
      title: 'Statut Silver atteint (35 articles)',
      status: 'completed' as const
    },
    {
      date: 'Janvier 2026',
      title: 'Statut Gold atteint (67 articles)',
      status: 'current' as const
    },
    {
      date: 'Mars 2026',
      title: 'Statut Platinum (75 articles)',
      status: 'future' as const
    },
    {
      date: '2027',
      title: 'Statut Diamond (150 articles)',
      status: 'future' as const
    }
  ]

  return (
    <div className="min-h-screen bg-trueme-cream">
      <Header />
      
      {/* Main content with top padding for fixed header */}
      <main className="pt-24 pb-8">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Welcome section */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-trueme-black mb-2">
              Bonjour John
            </h1>
            <div className="flex items-center justify-center space-x-2">
              <span className="px-3 py-1 bg-gradient-to-r from-level-gold to-trueme-gold text-white text-sm font-semibold rounded-full">
                Membre Gold
              </span>
              <span className="text-trueme-secondary text-sm">
                Depuis le 12 juillet 2025
              </span>
            </div>
          </div>

          {/* Main Status Card */}
          <div className="mb-8 flex justify-center">
            <StatusCard
              level="gold"
              currentArticles={67}
              targetArticles={75}
              progress={89} // 67/75 = 89%
              totalValue="AED 127,850"
              authenticityScore={94}
            />
          </div>

          {/* Avantages Gold Section */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-trueme-black mb-6 text-center">
              Vos avantages Gold
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {advantages.map((advantage, index) => (
                <AdvantageCard
                  key={index}
                  icon={advantage.icon}
                  title={advantage.title}
                  description={advantage.description}
                  status={advantage.status}
                />
              ))}
            </div>
          </div>

          {/* Progression vers Platinum */}
          <div className="mb-12">
            <div className="bg-glass-cream backdrop-blur-glass border border-glass-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-trueme-black mb-4">Vers Platinum</h3>
              <div className="space-y-3">
                <p className="text-trueme-black">
                  <span className="font-semibold">8 articles manquants</span>
                </p>
                <div className="space-y-2 text-sm text-trueme-secondary">
                  <p>• 1 sac Hermès ou Chanel</p>
                  <p>• 1 accessoire de luxe</p>
                  <p>• 1 article haute couture</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-trueme-secondary">
                    ETA: 2-3 mois à votre rythme
                  </span>
                  <button className="px-4 py-2 bg-glass-white backdrop-blur-sm border border-glass-border rounded-lg text-trueme-gold text-sm hover:bg-trueme-gold hover:text-white transition-colors">
                    Voir opportunités
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-8">
            <Timeline events={timelineEvents} />
          </div>

        </div>
      </main>
    </div>
  )
}
