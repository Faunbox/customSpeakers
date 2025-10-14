"use client"

import { motion } from "framer-motion"
import { Lightbulb, FileText, Cog, TestTube, Package, Rocket } from "lucide-react"

const steps = [
  {
    icon: Lightbulb,
    title: "Consultation",
    description: "Discuss your vision, requirements, and specifications",
  },
  {
    icon: FileText,
    title: "Design & Planning",
    description: "Create detailed designs and production plans",
  },
  {
    icon: TestTube,
    title: "Prototyping",
    description: "Build and test prototypes for validation",
  },
  {
    icon: Cog,
    title: "Manufacturing",
    description: "Precision production with quality control",
  },
  {
    icon: Package,
    title: "Quality Assurance",
    description: "Rigorous testing and final inspection",
  },
  {
    icon: Rocket,
    title: "Delivery",
    description: "Packaging and shipping to your location",
  },
]

export default function OEMProcess() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-stone-900 to-black overflow-hidden">
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
            Our Manufacturing Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">A streamlined workflow from concept to delivery</p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-700 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(156,163,175,0.2)] group">
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 text-black flex items-center justify-center font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-gray-300" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>

                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
