import type { Metadata } from "next"
import OEMHero from "./components/hero"
import OEMSEOText from "./components/seo-text"
import OEMProcess from "./components/process"
import OEMContact from "./components/contact"
import OEMCapabilities from "./components/capabilities"
import PremiumCoatings from "./components/coating"

export const metadata: Metadata = {
  title: "OEM Manufacturing | MF Custom Speakers",
  description:
    "Premium OEM speaker manufacturing services. Custom audio solutions with precision engineering, quality control, and scalable production for your brand.",
alternates: {
    canonical: "https://mfcustoms.pl/oem-manufacturing",
  },
}

export default async function OEMManufacturingPage() {
  return (
    <main className="min-h-screen">
      <OEMHero />
      {/* <OEMStats /> */}
      <OEMCapabilities />
      <OEMSEOText />
      {/* <ProAudio /> */}
      <PremiumCoatings />
      <OEMProcess />
      <OEMContact />
    </main>
  )
}
