"use client"

import { motion } from "framer-motion"
import { Cpu, Zap, Shield, Layers, Settings, TrendingUp } from "lucide-react"

const capabilities = [
  {
    icon: Cpu,
    title: "Precision Engineering",
    description: "State-of-the-art CNC machining and precision assembly for perfect acoustic performance",
  },
  {
    icon: Layers,
    title: "Custom Solutions",
    description: "Tailored designs from concept to production, matching your exact specifications",
  },
  {
    icon: Shield,
    title: "Quality Control",
    description: "Rigorous testing protocols ensuring every unit meets the highest standards",
  },
  {
    icon: TrendingUp,
    title: "Scalable Production",
    description: "From prototypes to mass production, flexible capacity for any order size",
  },
  {
    icon: Settings,
    title: "Advanced Technology",
    description: "Latest manufacturing equipment and acoustic measurement systems",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Efficient processes and streamlined workflows for quick delivery times",
  },
]

export default function OEMCapabilities() {
  return (
    <section
      id="capabilities"
      className="relative py-24 bg-gradient-to-b from-black via-stone-900 to-black overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gray-400/10 rounded-full blur-3xl top-20 -left-48 animate-pulse" />
        <div className="absolute w-96 h-96 bg-gray-500/10 rounded-full blur-3xl bottom-20 -right-48 animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 bg-clip-text text-transparent">
            Manufacturing Excellence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive OEM services backed by cutting-edge technology and decades of expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(156,163,175,0.2)]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-400/0 via-gray-500/0 to-gray-400/0 group-hover:from-gray-400/20 group-hover:via-gray-500/20 group-hover:to-gray-400/20 transition-all duration-300 blur-xl" />

              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <capability.icon className="w-7 h-7 text-gray-300" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-gray-100 group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {capability.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">{capability.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
