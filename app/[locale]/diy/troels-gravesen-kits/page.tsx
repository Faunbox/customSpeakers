import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function TroelsKitsPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="text-center space-y-6 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Cabinets for Troels Gravesen Kits</h1>
          <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">We are working on something amazing for you</p>
          <p className="text-lg text-gray-400">This section will be available soon. Stay tuned!</p>
        </div>
      </div>
      <Footer />
      
    </main>
  )
}
