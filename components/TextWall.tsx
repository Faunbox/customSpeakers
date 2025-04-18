"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Volume2, Music, Mic, Radio } from "lucide-react"

const TextWall = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const paragraphs = [
    {
      icon: <Volume2 className="w-8 h-8 text-purple-500" />,
      title: "Pasja",
      content:
        "Kolumny na zamówienie - pomysł zrodził się z pasji do muzyki i technologii. MF Customs jest owocem wieloletniej dedykacji do uzyskania naturalnego i angażującego dzwięku oraz chęci dostarczenia efektu sonicznego w ciekawej i nieszablonowej formie.",
    },
    {
      icon: <Music className="w-8 h-8 text-purple-500" />,
      title: "Misja",
      content:
        "Naszą misją jest dostarczenie kolumny na zamówienie, które wypełnią Twoje pomieszczenie dzwiękiem prawdziwym ale i nie pozbawionym emocji. Oprócz dźwięku jest również forma wizualna - piękne i niepowtarzalne obudowy głośnikowe. Jakość i przywiązanie do detali - to nasze motto.",
    },
    {
      icon: <Mic className="w-8 h-8 text-purple-500" />,
      title: "Komponenty",
      content:
        "W naszych kolumnach na zamówienie stosujemy komponenty liderów rynku. Przetworniki pochodzą od producentów zapewniających stałe i powtarzalne  parametry oraz najwyższą jakość wykonania. Przebieramy w modelach stawiając na te, które potrafią przedstawić muzykę jak najwierniej i dopiero z nich te, które nie zapominają o ekspresji i emocji.",
    },
    {
      icon: <Radio className="w-8 h-8 text-purple-500" />,
      title: "Jakość",
      content:
        "Nasze obudowy na są w całości wytwarzane przez nas, dzięki czemu mamy pełną kontrolę nad procesem produkcji. Stosujemy materiały najwyższej jakości. Dzięki maszynom cnc, mamy pewność że cięcia będą wykonane z dużą dokładnością i powtarzalnością. Zawsze dbamy o optymalizację obudowy pod kątem jej sztywności, fal stojących, dyfrakcji na ostrych krawędziach, wytłumienia i rozmieszczenia głośników.",
    },
  ]

  return (
    <section id="historia" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 opacity-50" />
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=800')] bg-cover bg-center opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Nasza historia
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          {paragraphs.map((paragraph, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className="flex items-center mb-4"
                initial={{ x: -20 }}
                animate={{ x: hoveredIndex === index ? 0 : -20 }}
              >
                {/* {paragraph.icon} */}
                <h3 className="text-2xl font-semibold ml-4 text-purple-300">{paragraph.title}</h3>
              </motion.div>
              <p className="text-gray-300 leading-relaxed">{paragraph.content}</p>
              <motion.div
                className="mt-4 h-1 bg-gradient-to-r from-purple-500 to-pink-500"
                initial={{ width: 0 }}
                animate={{ width: hoveredIndex === index ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TextWall

