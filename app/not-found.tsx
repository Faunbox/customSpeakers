"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Volume2, VolumeX } from "lucide-react"

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    // This ensures that the 404 page is rendered for any non-existent route
    router.replace("/404", undefined)
  }, [router])

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
        <h1 className="text-5xl md:text-7xl font-bold mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Strona nie znaleziona!</h2>
        <p className="text-xl text-gray-400 mb-8">
          Ups! Strona której szukasz nie istnieje.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/")}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
        >
          Powrót na stronę główną
        </motion.button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-16 text-gray-500"
      >
        <p>MF Custom Speakers © {new Date().getFullYear()} | Głośniki na zamówienie</p>
      </motion.div>
    </div>
  )
}

