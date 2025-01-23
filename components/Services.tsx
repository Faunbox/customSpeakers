'use client'

import { motion } from 'framer-motion'
import { Speaker, Mic, Music, Settings } from 'lucide-react'

const services = [
  {
    icon: <Speaker className="w-12 h-12 text-purple-500" />,
    title: 'Customowe rozwiązania audio',
    description: 'Tworzymy unikalne systemy audio dopasowane do Twoich potrzeb i preferencji, niezależnie od tego czy jest to salon, biuro czy sypialnia. Bierzemy pod uwagę docelowe środowisko, w którym pracować będą Twoje przyszłe kolumny, Twój obecny wzmacniacz oraz upodobania brzmieniowe.'
  },
  {
    icon: <Mic className="w-12 h-12 text-purple-500" />,
    title: 'Projektowanie zwrotnic',
    description: 'Nasze doświadczenie i wiedza pozwalają nam wykonywać zwrotnice spełniające preferencje brzmieniowe Zamawiającego. Jest to serce systemu, nadające charakter, barwę i ogólny odbiór dźwięku generowanego przez kolumny.'
  },
  {
    icon: <Music className="w-12 h-12 text-purple-500" />,
    title: 'Dobór przetworników i ich aplikacja',
    description: 'Znając parametry Twojego obecnego systemu, pomożemy dobrać głośniki, układ oraz ich konfigurację.'
  },
  {
    icon: <Settings className="w-12 h-12 text-purple-500" />,
    title: 'Usługi CNC',
    description: 'Dzięki temu możemy realizować nawet najbardziej wymagające projekty, dostosowując każdy detal do Twoich oczekiwań.'
  }
]

const Services = () => {
  return (
    <section id="oferta" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Oferta
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

