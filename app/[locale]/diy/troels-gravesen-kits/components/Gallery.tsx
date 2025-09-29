'use client'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import { ExternalLink } from "lucide-react"


const speakerModels = [
  {
    id: "discovery",
    name: "Discovery",
    description:
      "Entry-level 2-way bookshelf speaker perfect for beginners. Features ScanSpeak drivers and simple crossover design.",
    troelsLink: "http://www.troelsgravesen.dk/Discovery.htm",
    images: [
      "/11.webp",
      "/discovery-speaker-side-view.jpg",
      "/discovery-speaker-components.jpg",
      "/discovery-speaker-assembly.jpg",
    ],
  },
  {
    id: "cno",
    name: "CNO",
    description: "Compact 2-way monitor with exceptional midrange clarity. Uses premium ScanSpeak Revelator drivers.",
    troelsLink: "http://www.troelsgravesen.dk/CNO.htm",
    images: [
      "/cno-speaker-model-front-view.jpg",
      "/cno-speaker-model-side-view.jpg",
      "/cno-speaker-model-internal-components.jpg",
      "/cno-speaker-model-assembly-process.jpg",
    ],
  },
  {
    id: "nextel",
    name: "NeXTel",
    description: "Advanced 3-way tower speaker with ribbon tweeter and dual woofers for exceptional bass response.",
    troelsLink: "http://www.troelsgravesen.dk/NeXTel.htm",
    images: [
      "/nextel-speaker-model-front-view.jpg",
      "/nextel-speaker-model-side-view.jpg",
      "/nextel-speaker-model-drivers-closeup.jpg",
      "/nextel-speaker-model-finished-pair.jpg",
    ],
  },
  {
    id: "ekta",
    name: "EKTA",
    description: "High-end 3-way floorstanding speaker with ScanSpeak Illuminator drivers and sophisticated crossover.",
    troelsLink: "http://www.troelsgravesen.dk/EKTA.htm",
    images: [
      "/ekta-speaker-front-view.jpg",
      "/ekta-speaker-side-view.jpg",
      "/ekta-speaker-drivers.jpg",
      "/ekta-speaker-assembly.jpg",
    ],
  },
  {
    id: "jenzen",
    name: "JENZEN",
    description: "Compact 2-way design with excellent imaging and natural sound reproduction using premium components.",
    troelsLink: "http://www.troelsgravesen.dk/JENZEN.htm",
    images: [
      "/jenzen-speaker-front-view.jpg",
      "/jenzen-speaker-side-view.jpg",
      "/jenzen-speaker-components.jpg",
      "/jenzen-speaker-build.jpg",
    ],
  },
  {
    id: "quattro",
    name: "QUATTRO",
    description:
      "4-way tower speaker system with exceptional detail and dynamics. Features multiple ScanSpeak drivers.",
    troelsLink: "http://www.troelsgravesen.dk/QUATTRO.htm",
    images: [
      "/quattro-speaker-tower-front.jpg",
      "/quattro-speaker-side-profile.jpg",
      "/quattro-speaker-driver-array.jpg",
      "/quattro-speaker-crossover.jpg",
    ],
  },
  {
    id: "illuminator",
    name: "Illuminator",
    description: "Premium 3-way design featuring ScanSpeak's flagship Illuminator drivers for ultimate sound quality.",
    troelsLink: "http://www.troelsgravesen.dk/Illuminator.htm",
    images: [
      "/illuminator-speaker-elegant-front.jpg",
      "/illuminator-speaker-side-angle.jpg",
      "/illuminator-driver-closeup.jpg",
      "/placeholder.svg?height=400&width=300",
    ],
  },
  {
    id: "seas-27tbfc",
    name: "SEAS 27TBFC",
    description: "Monitor speaker using SEAS Excel drivers with exceptional transparency and detail resolution.",
    troelsLink: "http://www.troelsgravesen.dk/SEAS_27TBFC.htm",
    images: [
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
    ],
  },
]

const TroelsImageGallery = () => {
     const [selectedModel, setSelectedModel] = useState("discovery")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const currentModel = speakerModels.find((model) => model.id === selectedModel)
    return ( 
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Available Troels Gravesen Models</h2>

        {/* Model Selection */}
        <div className="flex flex-wrap justify-center gap-2">
          {speakerModels.map((model) => (
            <Button
              key={model.id}
              variant={selectedModel === model.id ? "default" : "outline"}
              onClick={() => {
                setSelectedModel(model.id)
                setCurrentImageIndex(0)
              }}
              className="px-4 py-2 text-sm"
            >
              {model.name}
            </Button>
          ))}
        </div>

        {/* Selected Model Display */}
        {currentModel && (
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden">
                <Image
                  src={currentModel.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${currentModel.name} - View ${currentImageIndex + 1}`}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {currentModel.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square bg-gray-800 rounded-lg overflow-hidden border-2 transition-colors ${
                      currentImageIndex === index ? "border-purple-400" : "border-transparent hover:border-gray-600"
                    }`}
                  >
                    <Image
                    width={150}
                    height={150}
                      src={image || "/placeholder.svg"}
                      alt={`${currentModel.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Model Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold">{currentModel.name}</h3>
                <p className="text-gray-300 mt-2">{currentModel.description}</p>
              </div>

              <div className="space-y-4">
                <Button size="lg" className="w-full" onClick={() => window.open(currentModel.troelsLink, "_blank")}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View {currentModel.name} on Troels Gravesen
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full bg-transparent"
                  onClick={() => window.open("https://jantzen-audio.com", "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Buy Electronic Kit from Jantzen Audio
                </Button>
              </div>

              <div className="text-sm text-gray-400 space-y-1">
                <p>• Cabinet construction service available</p>
                <p>• Electronic components from Jantzen Audio</p>
                <p>• Professional finishing options</p>
                <p>• Coordination with your kit purchase</p>
              </div>
            </div>
          </div>
        )}
      </section> );
}
 
export default TroelsImageGallery;