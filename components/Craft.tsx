"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"


const fadeInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
}

const fadeInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
}

export default function CustomCabinetShowcase() {
  const t = useTranslations("About")
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="o-nas"
      className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-300 via-gray-200 to-gray-300"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-40 w-96 h-96 bg-gray-300/20 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 -right-40 w-96 h-96 bg-gray-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInLeft}
          >
            <motion.div className="space-y-6">
              <motion.div
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-sm font-semibold tracking-wider uppercase text-gray-600">
                  {t("badge")}
                </span>
              </motion.div>

              <motion.h2
                className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {t("title")}
              </motion.h2>

              <motion.div
                className="h-1 w-24 bg-gradient-to-r from-gray-600 via-gray-800 to-gray-600"
                initial={{ width: 0, opacity: 0 }}
                animate={isInView ? { width: 96, opacity: 1 } : { width: 0, opacity: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              />
            </motion.div>

            <motion.div
              className="space-y-6 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <p className="text-xl text-gray-900">
                {t("description1")}
              </p>
              <p className="text-gray-700">
                {t("description2")}
              </p>
              <p className="text-gray-700">
                {t("description3")}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="#kontakt">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-black text-white hover:bg-gradient-to-r hover:from-gray-800 hover:via-gray-900 hover:to-gray-800 transition-all duration-500 group relative overflow-hidden"
                  >
                  <span className="relative flex items-center">
                    {t("button_cta")}
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </span>
                </Button>
                      </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="#galeria">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 border-gray-300 hover:border-gray-500 bg-transparent group relative overflow-hidden"
                  >
                  <motion.span
                    className="relative bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      backgroundSize: "200% 100%",
                    }}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    >
                    {t("button_gallery")}
                  </motion.span>
                  <span className="absolute inset-0 flex items-center justify-center text-black group-hover:opacity-0 transition-opacity duration-300">
                    {t("button_gallery")}
                  </span>
                </Button>
                    </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              {[
                { number: "10", label: `${t("experience")}` },
                { number: "500+", label: `${t("cabinets")}` },
                { number: "100%", label: `${t("satisfaction")}` },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className="relative"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInRight}
          >
            <motion.div
              className="relative aspect-[4/5] rounded-2xl overflow-hidden glass border border-gray-300 group"
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gray-400/20 via-transparent to-gray-300/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />

              {/* Main image */}
              <motion.img
                src="/images/12.webp"
                alt="Custom speaker cabinet craftsmanship"
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={isInView ? { scale: 1 } : { scale: 1.1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
              />

              {/* Bottom info card */}
              <motion.div
                className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md rounded-xl p-6 border border-gray-300 z-20"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600">{t("realisation")}</div>
                    <div className="text-xl font-bold text-black">Custom Altec 816</div>
                  </div>
                  <Link href="#kontakt">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    >
                    <ArrowRight className="w-6 h-6 text-gray-700" />
                  </motion.div>
                    </Link>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-8 -left-8 w-32 h-32 border-2 border-gray-400 rounded-full -z-10"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute -bottom-8 -right-8 w-40 h-40 border-2 border-gray-500 rounded-full -z-10"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 25,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
