export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-6xl font-bold mb-4">
          TRUE ME
        </h1>
        <p className="text-xl mb-8 text-trueme-gold font-medium">
          Not a Style, a Signature
        </p>
        <p className="text-lg mb-12 text-gray-600">
          Luxury marketplace platform with authentication and gamification
        </p>
        
        <div className="space-y-4">
          <button className="btn-trueme mr-4">
            Explore Marketplace
          </button>
          <button className="btn-vip">
            VIP Services
          </button>
        </div>
      </div>
    </main>
  )
}
