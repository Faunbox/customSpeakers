"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { useTranslations } from "next-intl"

const floatingAnimation = {
  animate: {
    y: [-20, 20, -20],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

const Hero = () => {
  const t = useTranslations("Troels_hero")
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-gray-400/20 to-gray-600/20 rounded-full blur-3xl"
          {...floatingAnimation}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-gray-300/20 to-gray-500/20 rounded-full blur-3xl"
          {...floatingAnimation}
          animate={{
            y: [20, -20, 20],
            transition: {
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            },
          }}
        />
      </div>

      <div className="relative z-10 text-center space-y-8 px-4 max-w-6xl mx-auto">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            <motion.span
              className="block bg-gradient-to-r from-gray-100 via-gray-300 to-gray-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Troels Gravesen
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-gray-200 via-gray-400 to-gray-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {t("h1")}
            </motion.span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">{t("desc")}</p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="text-lg px-8 py-4 bg-black border border-gray-700 hover:border-gray-400 hover:bg-gray-900 text-white group transition-all duration-300"
              onClick={() => {
                document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <motion.div
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Mail className="w-5 h-5 mr-2" />
                {t("button")}
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
