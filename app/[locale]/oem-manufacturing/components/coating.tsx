"use client"

import { motion } from "framer-motion"
import { Sparkles, CheckCircle2, Layers } from "lucide-react"
import Image from "next/image"

export default function PremiumCoatings() {
  const coatings = [
    {
      title: "Premium Lacquering",
      subtitle: "Professional Partnership",
      icon: Sparkles,
      image: "/glossy-lacquer-finish-mirror-shine.jpg",
      description:
        "We partner with industry-leading lacquering specialists to deliver flawless, showroom-quality finishes.",
      features: [
        "Mirror-like gloss finishes",
        "Expert color matching and custom tints",
        "Multi-layer application process",
        "Professional surface preparation",
        "Long-lasting protection and beauty",
      ],
      badge: "Outsourced",
      gradient: "from-gray-300 via-gray-400 to-gray-300",
    },
    {
      title: "Wood Veneering",
      subtitle: "High Gloss UV Protection",
      icon: Layers,
      image: "/wood-veneer-high-gloss-uv-finish.jpg",
      description:
        "Premium wood veneering services with high-gloss UV protection, delivered by specialized craftsmen for exceptional results.",
      features: [
        "Natural wood aesthetics with modern protection",
        "High-gloss UV-cured finish",
        "Scratch and fade resistant",
        "Wide selection of wood species",
        "Expert application and finishing",
      ],
      badge: "Outsourced",
      gradient: "from-gray-400 via-gray-500 to-gray-400",
    },
  ]

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Decorative background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-gray-400/30 to-gray-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gradient-to-l from-gray-300/30 to-gray-400/30 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 bg-clip-text text-transparent">
              Premium Finishing Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Elevate your products with our professional coating solutions, combining in-house expertise with
            industry-leading partnerships
          </p>
        </motion.div>

        {/* Coatings grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {coatings.map((coating, index) => (
            <motion.div
              key={coating.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden transition-all duration-500 hover:border-gray-600 hover:shadow-2xl hover:shadow-gray-500/10">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400/0 via-gray-400/5 to-gray-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                {/* Image section */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={coating.image || "/placeholder.svg"}
                    alt={coating.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content section */}
                <div className="p-6">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${coating.gradient} p-0.5 mb-4`}
                  >
                    <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center">
                      <coating.icon className="w-7 h-7 text-gray-300" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-1">{coating.title}</h3>
                  <p
                    className={`text-xs font-medium bg-gradient-to-r ${coating.gradient} bg-clip-text text-transparent mb-3`}
                  >
                    {coating.subtitle}
                  </p>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{coating.description}</p>

                  {/* Features list */}
                  <ul className="space-y-2">
                    {coating.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                        className="flex items-start gap-2 text-gray-300 text-xs"
                      >
                        <CheckCircle2 className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Decorative corner element */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    <div className={`w-full h-full bg-gradient-to-br ${coating.gradient} rounded-tl-3xl`} />
                  </div>
                </div>
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
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-lg">
            Need a custom finish? <span className="text-gray-300 font-semibold">Contact us</span> to discuss your
            specific requirements
          </p>
        </motion.div>
      </div>
    </section>
  )
}
