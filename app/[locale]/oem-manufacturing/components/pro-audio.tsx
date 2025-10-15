"use client"

import { motion } from "framer-motion"
import { Music, Radio, Mic2, Globe2 } from "lucide-react"

export default function ProAudio() {
  const features = [
    {
      icon: Music,
      title: "Speaker Systems",
      description: "Custom speaker cabinets and complete audio systems",
    },
    {
      icon: Radio,
      title: "Audio Equipment",
      description: "Professional-grade audio components and enclosures",
    },
    {
      icon: Mic2,
      title: "Studio Solutions",
      description: "Precision-engineered studio monitoring systems",
    },
    {
      icon: Globe2,
      title: "Global Standards",
      description: "Meeting international quality and safety requirements",
    },
  ]

  const regions = [
    { country: "USA", flag: "🇺🇸" },
    { country: "UK", flag: "🇬🇧" },
    { country: "Austria", flag: "🇦🇹" },
  ]

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-20 -left-20 w-64 h-64 bg-gray-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-gray-300 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full border border-gray-300">
              <Music className="w-4 h-4 text-gray-700" />
              <span className="text-sm font-medium text-gray-700">Pro-Audio Excellence</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            Professional Audio OEM Manufacturing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted partner for renowned pro-audio brands worldwide, delivering precision-engineered solutions that meet
            the highest industry standards
          </p>
        </motion.div>

        {/* International Partnerships */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Trusted by Leading Brands</h3>
                <p className="text-gray-600 leading-relaxed">
                  We proudly collaborate with well-known professional audio brands from around the globe, providing OEM
                  manufacturing services that meet their exacting specifications and quality standards.
                </p>
              </div>
              <div className="flex items-center gap-6">
                {regions.map((region, index) => (
                  <motion.div
                    key={region.country}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {region.flag}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{region.country}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl hover:border-gray-300 transition-all duration-300">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-gray-700" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200 px-8 py-6">
            <p className="text-gray-700 text-lg font-medium">
              Join the ranks of industry leaders who trust us with their manufacturing needs
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
