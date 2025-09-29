import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Metadata } from "next"
import TroelsContent from "./components/wholePage"

export const metadata: Metadata = {
  title: "Obudowy Troels Gravesen na zamówienie – MF Customs",
  description:
    "Produkujemy obudowy kolumn do projektów Troelsa Gravesena. Rekomendacja Jantzen Audio. Precyzja CNC, estetyczne wykończenia i terminowość realizacji.",
  keywords: "Troels kits, DIY speakers, CNO model, Nextel model, Troels DIY, audio DIY, obudowy Troels Gravesen",
  openGraph: {
    title: "Obudowy Troels Gravesen na zamówienie – MF Customs",
    description: "Premium DIY speaker kits with professional support and detailed instructions.",
    type: "website",
  },
}

export default function TroelsKitsPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <TroelsContent/>
      <Footer />
    </main>
  )
}
