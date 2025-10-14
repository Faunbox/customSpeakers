import type { Metadata } from "next"
import OEMHero from "./components/hero"
import OEMStats from "./components/stats"
import OEMSEOText from "./components/seo-text"
import OEMProcess from "./components/process"
import OEMContact from "./components/contact"
import OEMCapabilities from "./components/capabilities"

export const metadata: Metadata = {
  title: "OEM Manufacturing | MF Custom Speakers",
  description:
    "Premium OEM speaker manufacturing services. Custom audio solutions with precision engineering, quality control, and scalable production for your brand.",
}

export default async function OEMManufacturingPage() {
  return (
    <main className="min-h-screen">
      <OEMHero />
      <OEMStats />
      <OEMCapabilities />
      <OEMSEOText />
      <OEMProcess />
      <OEMContact />
    </main>
  )
}
