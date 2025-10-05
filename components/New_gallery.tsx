"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X, ImageIcon } from "lucide-react"
import { useTranslations } from "next-intl"

const MODAL_IMAGE_HEIGHT = "70vh"



export default function HorizontalGalleryNew() {
const t = useTranslations("Gallery")
const speakerShowcase = [
  {
    id: "Altec",
    name: "Altec 816",
    type: "Tube subwoofer",
    image: "/images/12.webp",
    description:
      t("altec"),
    link: "/diy/troels-kits",
    gallery: ["/images/12.webp", "images/altec/2.jpg", "images/altec/3.jpg", "images/altec/4.jpg"],
  },
  {
    id: "M1",
    name: "M1 model",
    type: "Bookshelf Monitor",
    image: "/images/m1/1.jpg",
    description:
      t("m1"),
    link: "/diy/troels-kits",
    gallery: [
      "/images/m1/1.jpg",
      "/images/m1/2.jpg",
      "/images/m1/3.jpg",
      "/images/m1/4.jpg",
    ],
  },
  {
    id: "Cs1a",
    name: "KEF CS1A",
    type: "Studio monitor",
    image: "/images/ls3/1.jpg",
    description:
      t("ls3"),
    link: "/diy/troels-kits",
    gallery: [
      "/images/ls3/1.jpg",
      "/images/ls3/2.jpg",
      "/images/ls3/3.jpg",
      "/images/ls3/4.jpg",
    ],
  },
  {
    id: "Jaspa",
    name: "Custom Jasper MK2",
    type: "Floor-standing speakers",
    image: "/images/jaspa/1.jpg",
    description:
      t("jaspa"),
    link: "/diy/troels-kits",
    gallery: [
      "/images/jaspa/1.jpg",
      "/images/jaspa/2.jpg",
      "/images/jaspa/3.jpg",
      "/images/jaspa/4.jpg",
    ],
  },
  {
    id: "Klipsch",
    name: "Custom Klipsch RF7 MK3",
    type: "Floor-standing speakers",
    image: "/images/klipsch/1.jpg",
    description:
      t("klipsch"),
    link: "/diy/troels-kits",
    gallery: [
      "/images/klipsch/1.jpg",
      "/images/klipsch/2.jpg",
      "/images/klipsch/3.jpg",
      "/images/klipsch/4.jpg",
    ],
  },
]

  const [selectedSpeaker, setSelectedSpeaker] = useState<(typeof speakerShowcase)[0] | null>(speakerShowcase[0])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const [modalOpen, setModalOpen] = useState(false)
  const [modalSpeaker, setModalSpeaker] = useState<(typeof speakerShowcase)[0] | null>(null)
  const [modalImageIndex, setModalImageIndex] = useState(0)

  const selectSpeaker = (speaker: (typeof speakerShowcase)[0]) => {
    setSelectedSpeaker(speaker)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedSpeaker) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedSpeaker.gallery.length)
    }
  }

  const prevImage = () => {
    if (selectedSpeaker) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedSpeaker.gallery.length) % selectedSpeaker.gallery.length)
    }
  }

  const openModal = (speaker: (typeof speakerShowcase)[0], imageIndex = 0) => {
    setModalSpeaker(speaker)
    setModalImageIndex(imageIndex)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setModalSpeaker(null)
    setModalImageIndex(0)
  }

  const nextModalImage = () => {
    if (modalSpeaker) {
      setModalImageIndex((prev) => (prev + 1) % modalSpeaker.gallery.length)
    }
  }

  const prevModalImage = () => {
    if (modalSpeaker) {
      setModalImageIndex((prev) => (prev - 1 + modalSpeaker.gallery.length) % modalSpeaker.gallery.length)
    }
  }

  return (
    <section className="py-24 bg-stone-900" id="galeria">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text">{t("title")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("description")}
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
                <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-500 h-full group overflow-hidden">
                    <div
                      className="relative aspect-square overflow-hidden cursor-pointer"
                      onClick={() => openModal(speaker, 0)}
                    >
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
                      <p className="text-sm text-muted-foreground line-clamp-2">{speaker.description}</p>
                      <Button
                        className="w-full group bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/30 hover:border-primary transition-all duration-300"
                        onClick={() => openModal(speaker, 0)}
                      >
                        <ImageIcon className="w-4 h-4 mr-2" />
                        <span>{t("button")}</span>
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
                      className={`glass border-primary/20 hover:border-primary/40 transition-all duration-500 h-full group overflow-hidden  ${
                        selectedSpeaker?.id === speaker.id ? "border-primary ring-2 ring-primary/20" : ""
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

          <div className="w-1/2">
            <AnimatePresence mode="wait">
              {selectedSpeaker && (
                <motion.div
                  key={selectedSpeaker.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                  className="sticky top-24"
                >
                  <Card className="glass border-primary/20 overflow-hidden">
                    <div
                      className="relative aspect-[4/3] overflow-hidden cursor-pointer group"
                      onClick={() => openModal(selectedSpeaker, currentImageIndex)}
                    >
                      <motion.img
                        key={currentImageIndex}
                        src={selectedSpeaker.gallery[currentImageIndex]}
                        alt={`${selectedSpeaker.name} - Image ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                      />

                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                          <ImageIcon className="w-6 h-6 text-black" />
                        </div>
                      </div>

                      {selectedSpeaker.gallery.length > 1 && (
                        <>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white z-10"
                            onClick={(e) => {
                              e.stopPropagation()
                              prevImage()
                            }}
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </Button>

                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white z-10"
                            onClick={(e) => {
                              e.stopPropagation()
                              nextImage()
                            }}
                          >
                            <ChevronRight className="w-6 h-6" />
                          </Button>

                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                            {currentImageIndex + 1} / {selectedSpeaker.gallery.length}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Details */}
                    <CardContent className="p-6 space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="text-3xl font-bold gradient-text">{selectedSpeaker.name}</h3>
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                            {selectedSpeaker.type}
                          </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{selectedSpeaker.description}</p>
                      </div>

                      {selectedSpeaker.gallery.length > 1 && (
                        <div className="space-y-3">
                          <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                            Gallery
                          </h4>
                          <div className="flex gap-2 overflow-x-auto pb-2">
                            {selectedSpeaker.gallery.map((image, index) => (
                              <button
                                key={index}
                                onClick={() => openModal(selectedSpeaker, index)}
                                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all hover:scale-110 ${
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
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && modalSpeaker && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/10 z-10"
                onClick={closeModal}
              >
                <X className="w-6 h-6" />
              </Button>

              <div
                className="relative w-full bg-black rounded-lg overflow-hidden"
                style={{ maxHeight: MODAL_IMAGE_HEIGHT }}
              >
                <motion.img
                  key={modalImageIndex}
                  src={modalSpeaker.gallery[modalImageIndex]}
                  alt={`${modalSpeaker.name} - Image ${modalImageIndex + 1}`}
                  className="w-full h-full object-contain"
                  style={{ maxHeight: MODAL_IMAGE_HEIGHT }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {modalSpeaker.gallery.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                      onClick={prevModalImage}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                      onClick={nextModalImage}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </Button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium">
                      {modalImageIndex + 1} / {modalSpeaker.gallery.length}
                    </div>
                  </>
                )}
              </div>

              <div className="mt-4 text-center space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold text-white">{modalSpeaker.name}</h3>
                <p className="text-sm text-white/70">{modalSpeaker.type}</p>
                <p className="text-sm md:text-base text-white/80 max-w-3xl mx-auto">{modalSpeaker.description}</p>
              </div>

              {modalSpeaker.gallery.length > 1 && (
                <div className="mt-4 flex gap-2 justify-center overflow-x-auto pb-2">
                  {modalSpeaker.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setModalImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        modalImageIndex === index
                          ? "border-primary ring-2 ring-primary/50"
                          : "border-white/20 hover:border-white/50"
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
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
