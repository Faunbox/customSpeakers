"use client"

import { motion } from "framer-motion"
import { Sparkles, Clock, Wrench } from "lucide-react"

export default function CustomDesignsPage() {
  return (
    <main className="relative bg-black text-white min-h-screen overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>


      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-20">
        <div className="text-center space-y-8 max-w-4xl">
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <div className="relative">
              <motion.div
                className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border border-gray-700"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Wrench className="w-12 h-12 text-gray-300" />
              </motion.div>
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-400/20 to-gray-300/20 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-100 via-gray-300 to-gray-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
           Custom cabinet designs
          </motion.h1>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-2xl md:text-3xl text-gray-200 max-w-2xl mx-auto font-light">
              We&apos;re working on something amazing for you
            </p>
            <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto">
              This section will be available soon. Stay tuned!
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[
              { icon: Sparkles, title: "Premium Quality", desc: "High-end components" },
              { icon: Clock, title: "Coming Soon", desc: "Worth the wait" },
              { icon: Wrench, title: "Custom Built", desc: "Made for you" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400/0 via-gray-400/5 to-gray-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl" />
                <div className="relative z-10">
                  <item.icon className="w-8 h-8 text-gray-400 mx-auto mb-3 group-hover:text-gray-300 transition-colors duration-300" />
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </main>
  )
}
