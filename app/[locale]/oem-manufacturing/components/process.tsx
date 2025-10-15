"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Lightbulb, FileText, Cog, TestTube, Package, Rocket } from "lucide-react"
import { useRef } from "react"

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
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-gradient-to-b from-black via-stone-900 to-black overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-gray-400/30 to-gray-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-gray-500/30 to-gray-700/20 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.6, 0.4, 0.6],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-gray-300/20 to-gray-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gray-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            Our Manufacturing Process
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            A streamlined workflow from concept to delivery
          </p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-10 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-gray-400 via-gray-300 to-gray-400 rounded-full"
              style={{ height: lineHeight }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-gray-300 via-gray-200 to-gray-300 blur-md" />
            </motion.div>
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="flex mb-20 last:mb-0 group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mr-6 md:mr-8 relative z-10 shadow-2xl group-hover:border-gray-300 transition-all duration-500"
                whileHover={{ scale: 1.15, rotate: 360 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                {/* Multiple glow layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-400/40 to-gray-600/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300/30 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <motion.div
                  className="absolute -inset-2 rounded-full border border-gray-400/0 group-hover:border-gray-400/60"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -inset-4 rounded-full border border-gray-400/0 group-hover:border-gray-400/40"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
                <motion.div whileHover={{ rotate: -360 }} transition={{ duration: 0.6 }}>
                  <step.icon className="w-8 h-8 md:w-10 md:h-10 text-gray-400 group-hover:text-gray-100 transition-colors duration-500 relative z-10" />
                </motion.div>
              </motion.div>

              <motion.div
                className="flex-1 bg-gradient-to-br from-gray-900/80 via-black/60 to-gray-900/80 backdrop-blur-md border-2 border-gray-700 rounded-2xl p-6 md:p-8 shadow-2xl group-hover:border-gray-400 group-hover:shadow-gray-400/40 transition-all duration-500 relative overflow-hidden"
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-500/0 via-gray-400/0 to-gray-500/0 group-hover:from-gray-500/30 group-hover:via-gray-400/30 group-hover:to-gray-500/30 transition-all duration-500 blur-xl"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                />

                {/* Ring glow effect */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-gray-400/0 via-gray-300/0 to-gray-400/0 group-hover:from-gray-400/40 group-hover:via-gray-300/40 group-hover:to-gray-400/40 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-400/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gray-400/20 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-300/20 to-transparent rounded-bl-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 flex items-center text-white">
                    <motion.span
                      className="w-10 h-10 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 rounded-full flex items-center justify-center text-base font-bold mr-4 text-black shadow-lg group-hover:shadow-gray-300/60 transition-all duration-500"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {index + 1}
                    </motion.span>
                    <motion.span
                      className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent group-hover:from-gray-100 group-hover:via-white group-hover:to-gray-200 transition-all duration-500"
                      whileHover={{ x: 5 }}
                    >
                      {step.title}
                    </motion.span>
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed ml-14 group-hover:text-gray-200 transition-colors duration-500">
                    {step.description}
                  </p>
                </div>

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  initial={false}
                  animate={{
                    background: [
                      "linear-gradient(90deg, transparent 0%, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%, transparent 100%)",
                      "linear-gradient(90deg, transparent 0%, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%, transparent 100%)",
                    ],
                    backgroundPosition: ["-200% 0", "200% 0"],
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
