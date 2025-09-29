"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const speakerShowcase = [
  {
    id: "discovery",
    name: "Discovery",
    type: "2-Way Bookshelf",
    image: "/images/11.webp",
    description:
      "Perfect entry-level design with exceptional clarity and balanced sound reproduction. Features high-quality drivers in a compact bookshelf format.",
    link: "/diy/troels-kits",
    gallery: [
      "/images/11.webp",
      "images/4.webp",
      "images/5.webp",
      "images/6.webp",
    ],
  },
  {
    id: "cno",
    name: "CNO",
    type: "Compact Monitor",
    image: "/cno-speaker-model-front-view.jpg",
    description:
      "Premium midrange performance in compact form factor. Engineered for studio monitoring with exceptional detail and accuracy.",
    link: "/diy/troels-kits",
    gallery: [
      "/cno-speaker-model-front-view.jpg",
      "/cno-speaker-model-side-view.jpg",
      "/cno-speaker-model-internal-components.jpg",
      "/cno-speaker-model-assembly-process.jpg",
    ],
  },
  {
    id: "nextel",
    name: "NeXTel",
    type: "3-Way Tower",
    image: "/nextel-speaker-model-front-view.jpg",
    description:
      "Advanced tower with ribbon tweeter technology delivering pristine highs and dynamic midrange performance in an elegant floorstanding design.",
    link: "/diy/troels-kits",
    gallery: [
      "/nextel-speaker-model-front-view.jpg",
      "/nextel-speaker-model-side-view.jpg",
      "/nextel-speaker-model-drivers-closeup.jpg",
      "/nextel-speaker-model-finished-pair.jpg",
    ],
  },
  {
    id: "ekta",
    name: "EKTA",
    type: "High-End Floorstanding",
    image: "/ekta-speaker-front-view.jpg",
    description:
      "Flagship design with Illuminator drivers providing reference-level performance. The ultimate expression of acoustic engineering excellence.",
    link: "/diy/troels-kits",
    gallery: [
      "/ekta-speaker-front-view.jpg",
      "/ekta-speaker-side-view.jpg",
      "/ekta-speaker-drivers.jpg",
      "/ekta-speaker-assembly.jpg",
    ],
  },
  {
    id: "jenzen",
    name: "JENZEN",
    type: "Compact 2-Way",
    image: "/jenzen-speaker-front-view.jpg",
    description:
      "Exceptional imaging and natural sound reproduction in a compact 2-way design. Perfect balance of size and performance.",
    link: "/diy/troels-kits",
    gallery: [
      "/jenzen-speaker-front-view.jpg",
      "/jenzen-speaker-side-view.jpg",
      "/jenzen-speaker-components.jpg",
      "/jenzen-speaker-build.jpg",
    ],
  },
  {
    id: "quattro",
    name: "QUATTRO",
    type: "4-Way System",
    image: "/quattro-speaker-tower-front.jpg",
    description:
      "Ultimate detail and dynamic performance with 4-way driver configuration. Uncompromising design for the most demanding audiophiles.",
    link: "/diy/troels-kits",
    gallery: [
      "/quattro-speaker-tower-front.jpg",
      "/quattro-speaker-side-profile.jpg",
      "/quattro-speaker-driver-array.jpg",
      "/quattro-speaker-crossover.jpg",
    ],
  },
];

export default function HorizontalGallery() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<
    (typeof speakerShowcase)[0] | null
  >(speakerShowcase[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const selectSpeaker = (speaker: (typeof speakerShowcase)[0]) => {
    setSelectedSpeaker(speaker);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedSpeaker) {
      setCurrentImageIndex(
        (prev) => (prev + 1) % selectedSpeaker.gallery.length
      );
    }
  };

  const prevImage = () => {
    if (selectedSpeaker) {
      setCurrentImageIndex(
        (prev) =>
          (prev - 1 + selectedSpeaker.gallery.length) %
          selectedSpeaker.gallery.length
      );
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/10">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text">
            Featured Speaker Designs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our collection of precision-crafted Troels Gravesen speaker
            cabinets
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="lg:hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {speakerShowcase.map((speaker, index) => (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-500 h-full group overflow-hidden">
                    <div className="relative aspect-square overflow-hidden">
                      <motion.div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <motion.img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      <motion.div
                        className="absolute top-2 right-2 z-20"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <div className="bg-primary/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-primary-foreground">
                          {speaker.type}
                        </div>
                      </motion.div>
                    </div>

                    <CardContent className="p-4 space-y-3">
                      <motion.h3
                        className="text-lg font-bold gradient-text"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        {speaker.name}
                      </motion.h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {speaker.description}
                      </p>
                      <Button
                        className="w-full group bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/30 hover:border-primary transition-all duration-300"
                        asChild
                      >
                        <a href={speaker.link}>
                          <span>Explore Design</span>
                          <motion.div
                            className="ml-2"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex gap-8">
          {/* Gallery Grid */}
          <div className="w-1/2">
            <div className="grid grid-cols-2 gap-4">
              {speakerShowcase.map((speaker, index) => (
                <motion.div
                  key={speaker.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="cursor-pointer"
                    onClick={() => selectSpeaker(speaker)}
                  >
                    <Card
                      className={`glass border-primary/20 hover:border-primary/40 transition-all duration-500 h-full group overflow-hidden ${
                        selectedSpeaker?.id === speaker.id
                          ? "border-primary ring-2 ring-primary/20"
                          : ""
                      }`}
                    >
                      <div className="relative aspect-square overflow-hidden">
                        <motion.div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <motion.img
                          src={speaker.image}
                          alt={speaker.name}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />
                        <motion.div
                          className="absolute top-2 right-2 z-20"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          <div className="bg-primary/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-primary-foreground">
                            {speaker.type}
                          </div>
                        </motion.div>
                      </div>

                      <CardContent className="p-4 space-y-2">
                        <motion.h3
                          className="text-lg font-bold gradient-text"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          {speaker.name}
                        </motion.h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Details Panel - Always shows selected speaker (first by default) */}
          <div className="w-1/2">
            <AnimatePresence mode="wait">
              {selectedSpeaker && (
                <motion.div
                  key={selectedSpeaker.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                  className="sticky top-8"
                >
                  <Card className="glass border-primary/20 overflow-hidden">
                    {/* Main Image Display */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <motion.img
                        key={currentImageIndex}
                        src={selectedSpeaker.gallery[currentImageIndex]}
                        alt={`${selectedSpeaker.name} - Image ${
                          currentImageIndex + 1
                        }`}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      />

                      {selectedSpeaker.gallery.length > 1 && (
                        <>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                            onClick={prevImage}
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </Button>

                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                            onClick={nextImage}
                          >
                            <ChevronRight className="w-6 h-6" />
                          </Button>

                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                            {currentImageIndex + 1} /{" "}
                            {selectedSpeaker.gallery.length}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Details */}
                    <CardContent className="p-6 space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="text-3xl font-bold gradient-text">
                            {selectedSpeaker.name}
                          </h3>
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                            {selectedSpeaker.type}
                          </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {selectedSpeaker.description}
                        </p>
                      </div>

                      {/* Thumbnail Gallery */}
                      {selectedSpeaker.gallery.length > 1 && (
                        <div className="space-y-3">
                          <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                            Gallery
                          </h4>
                          <div className="flex gap-2 overflow-x-auto pb-2">
                            {selectedSpeaker.gallery.map((image, index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                                  currentImageIndex === index
                                    ? "border-primary"
                                    : "border-transparent hover:border-primary/50"
                                }`}
                              >
                                <img
                                  src={image || "/placeholder.svg"}
                                  alt={`Thumbnail ${index + 1}`}
                                  className="w-full h-full object-cover"
                                />
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      <Button
                        className="w-full group bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/30 hover:border-primary transition-all duration-300"
                        asChild
                      >
                        <a href={selectedSpeaker.link}>
                          <span>View Full Details</span>
                          <motion.div
                            className="ml-2"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
