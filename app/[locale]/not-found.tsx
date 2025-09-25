"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Volume2, VolumeX } from "lucide-react"

// Fake i18n function - replace with your actual translation function
const t = (key: string) => {
  const translations: Record<string, string> = {
    "404.title": "404",
    "404.subtitle": "Sound Not Found",
    "404.description": "Oops! The audio track you're looking for seems to have gone silent.",
    "404.returnHome": "Return to Home",
    "404.copyright": "MF Customs © {year} | Elevating Your Sound Experience",
  }
  return translations[key] || key
}

export default function LocalizedNotFound() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="flex justify-center items-center mb-8">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          >
            <Volume2 className="w-16 h-16 text-purple-500 mr-4" />
          </motion.div>
          <VolumeX className="w-16 h-16 text-red-500" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">{t("404.title")}</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">{t("404.subtitle")}</h2>
        <p className="text-xl text-gray-400 mb-8">{t("404.description")}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/")}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
        >
          {t("404.returnHome")}
        </motion.button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-16 text-gray-500"
      >
        <p>{t("404.copyright").replace("{year}", new Date().getFullYear().toString())}</p>
      </motion.div>
    </div>
  )
}
