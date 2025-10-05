"use client"
import { motion } from "framer-motion"
import { Volume2, Music, Mic, Radio } from "lucide-react"
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

const TextWall = () => {
  const t = useTranslations("History")
  const paragraphs = [
    {
      icon: Volume2,
      title: t("passion.title"),
      content: t("passion.content"),
    },
    {
      icon: Music,
      title: t("mission.title"),
      content: t("mission.content"),
    },
    {
      icon: Mic,
      title: t("components.title"),
      content: t("components.content"),
    },
    {
      icon: Radio,
      title: t("quality.title"),
      content: t("quality.content"),
    },
  ]

  return (
    <section id="historia" className="py-24 px-4 bg-stone-900">
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
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Nasza historia i wartości</p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {paragraphs.map((paragraph, index) => {
            const Icon = paragraph.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400/20 via-gray-500/20 to-gray-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 group-hover:border-gray-400/50 rounded-2xl p-8 h-full transition-all duration-500">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-gray-400/20 to-gray-500/20 flex items-center justify-center group-hover:from-gray-400/30 group-hover:to-gray-500/30 transition-all duration-500"
                  >
                    <Icon className="w-8 h-8 text-gray-400 group-hover:text-gray-300 transition-colors duration-500" />
                  </motion.div>

                  <h3 className="text-xl font-bold mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-gray-300 group-hover:to-gray-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                    {paragraph.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-500">
                    {paragraph.content}
                  </p>

                  <div className="absolute bottom-4 right-4 w-8 h-0.5 bg-gray-400/50 group-hover:bg-gray-300 group-hover:w-12 transition-all duration-500" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default TextWall
