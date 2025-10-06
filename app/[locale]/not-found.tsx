"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Home } from "lucide-react"
import Image from "next/image"

// Fake i18n function - replace with your actual translation function
const t = (key: string) => {
  const translations: Record<string, string> = {
    "404.title": "404",
    "404.subtitle": "Page Not Found",
    "404.description": "The page you're looking for doesn't exist or has been moved.",
    "404.returnHome": "Return to Home",
    "404.copyright": "MF Custom Speakers © {year}",
  }
  return translations[key] || key
}

export default function LocalizedNotFound() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-gray-400/10 to-gray-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-gray-400/10 to-gray-500/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center relative z-10"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <Image src="/MF.png" alt="MF Custom Speakers" width={200} height={60} className="opacity-50" />
        </motion.div>

        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-9xl md:text-[12rem] font-bold mb-4 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-400 bg-clip-text text-transparent"
        >
          {t("404.title")}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold mb-4 text-gray-200"
        >
          {t("404.subtitle")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-lg text-gray-400 mb-12 max-w-md mx-auto"
        >
          {t("404.description")}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/")}
          className="group relative bg-black border border-gray-700 hover:border-gray-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 overflow-hidden"
        >
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-400/0 via-gray-400/20 to-gray-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

          <span className="relative flex items-center gap-2">
            <Home className="w-5 h-5" />
            {t("404.returnHome")}
          </span>
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-16 text-gray-500 relative z-10"
      >
        <p>{t("404.copyright").replace("{year}", new Date().getFullYear().toString())}</p>
      </motion.div>
    </div>
  )
}
