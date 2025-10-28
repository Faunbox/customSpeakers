"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Sparkles, ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useRef } from "react"
import { Link } from "@/i18n/navigation"

export default function MaterialsAndFinishings() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100])

  const t = useTranslations("Materials")

  const materials = [
    {
      name: t("plywood.title"),
      description: t("plywood.description"),
      image: "/images/plywood.jpg",
    },
    {
      name: "MDF",
      description: t("mdf.description"),
      image: "/images/mdf.jpg",
    },
    {
      name: t("wood.title"),
      description: t("wood.description"),
      image: "/images/solid.webp",
    },
  ]

  const finishings = [
    {
      name: t("lacquer.title"),
      image: "/images/lacquer.jpg",
      description: t("lacquer.description"),
    },
    {
      name: t("veneer.title"),
      image: "/images/fornir.jpg",
      description: t("veneer.description"),
    },
    {
      name: t("oil.title"),
      image: "/images/tung.jpg",
      description: t("oil.description"),
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-32 bg-black overflow-hidden" id="materials-and-finishings">
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 right-20 w-[600px] h-[600px] bg-gradient-to-br from-gray-400/20 via-gray-500/10 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-gradient-to-tr from-gray-500/20 via-gray-400/10 to-transparent rounded-full blur-3xl"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-gray-600/5 via-gray-400/10 to-gray-600/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-full mb-8 border border-gray-600 shadow-lg"
          >
            <Sparkles className="w-5 h-5 text-gray-300" />
            <span className="text-sm font-semibold text-gray-200 tracking-wide">{t("subtitle")}</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent leading-tight">
            {t("title")}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">{t("description")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-200 via-white to-gray-200 bg-clip-text text-transparent">
              {t("materials")}
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {materials.map((material, index) => (
              <motion.div
                key={material.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400/20 via-gray-500/20 to-gray-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-gray-800/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-700/50 group-hover:border-gray-400/50 transition-all duration-500 shadow-2xl">
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={material.image || "/placeholder.svg"}
                      alt={material.name}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6">
                      <motion.h4
                        className="text-3xl font-bold text-white mb-2 drop-shadow-lg"
                        whileHover={{ scale: 1.05 }}
                      >
                        {material.name}
                      </motion.h4>
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">{material.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-400/30 via-gray-500/30 to-gray-400/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 rounded-2xl p-10 border border-gray-600 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gray-500/20 to-transparent rounded-full blur-3xl" />
              <div className="relative z-10 text-center">
                <h4 className="text-3xl font-bold text-white mb-4">{t("question")}</h4>
                <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">{t("answer")}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-200 via-white to-gray-200 bg-clip-text text-transparent">
              {t("finishings")}
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {finishings.map((finishing, index) => (
              <motion.div
                key={finishing.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400/20 via-gray-500/20 to-gray-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-gray-800/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-700/50 group-hover:border-gray-400/50 transition-all duration-500 shadow-2xl h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={finishing.image || "/placeholder.svg"}
                      alt={finishing.name}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <h4 className="text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-gray-200 group-hover:via-white group-hover:to-gray-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                      {finishing.name}
                    </h4>
                    <p className="text-gray-300 mb-6 leading-relaxed flex-1">{finishing.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link href="#kontakt">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-white via-gray-100 to-white text-black rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 border border-gray-300"
              >
                <span>{t("button")}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
