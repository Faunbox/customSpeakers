"use client"

import { motion } from "framer-motion"
import { Speaker, Mic, Music, Settings } from "lucide-react"
import { useTranslations } from "next-intl"



const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function ServicesShowcase() {
  const t = useTranslations("Offer")

  const services = [
    {
      icon: <Speaker className="w-8 h-8 text-gray-400 group-hover:text-gray-300 transition-colors duration-500" />,
      title: t("customSpeakers.title"),
      description: t("customSpeakers.description")
    },
    {
      icon: <Mic className="w-8 h-8 text-gray-400 group-hover:text-gray-300 transition-colors duration-500" />,
      title: t("crossoverDesign.title"),
      description: t("crossoverDesign.description")
    },
    {
      icon: <Music className="w-8 h-8 text-gray-400 group-hover:text-gray-300 transition-colors duration-500" />,
      title: t("driverSelection.title"),
      description: t("driverSelection.description")
    },
    {
      icon: <Settings className="w-8 h-8 text-gray-400 group-hover:text-gray-300 transition-colors duration-500" />,
      title: t("cncServices.title"),
      description: t("cncServices.description")
    }
  ];
  return (
    <section id="oferta" className="py-24 px-4 bg-black">
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 bg-clip-text text-transparent">
              {t("title")}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Card Background with Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-stone-500/20 via-stone-400/20 to-stone-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                {/* Card Content */}
                <div className="relative bg-stone-900 backdrop-blur-sm border border-gray-700/50 group-hover:border-gray-400/50 rounded-2xl p-8 h-full transition-all duration-500">
                  {/* Icon with Gradient Background */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-gray-400/20 to-gray-500/20 flex items-center justify-center group-hover:from-gray-400/30 group-hover:to-gray-500/30 transition-all duration-500"
                  >
                    <div className="">{service.icon}</div>
                  </motion.div>

                  {/* Title with Gradient on Hover */}
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-gray-300 group-hover:to-gray-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-500">
                    {service.description}
                  </p>

                  {/* Decorative Corner Element */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gray-400/50 group-hover:bg-gray-300 group-hover:scale-150 transition-all duration-500" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
