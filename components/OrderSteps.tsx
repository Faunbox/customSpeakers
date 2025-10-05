"use client"

import { motion } from "framer-motion"
import { MessageSquare, Settings, DollarSign, Truck, Drill } from "lucide-react"
import { useTranslations } from "next-intl"

const OrderSteps = () => {
  const t = useTranslations("OrderProcess")

  const steps = [
    {
      number: "1",
      icon: MessageSquare,
      title: t("steps.consultation.title"),
      description: t("steps.consultation.description"),
    },
    {
      number: "2",
      icon: Settings,
      title: t("steps.projectAndQuote.title"),
      description: t("steps.projectAndQuote.description"),
    },
    {
      number: "3",
      icon: DollarSign,
      title: t("steps.payment.title"),
      description: t("steps.payment.description"),
    },
    {
      number: "4",
      icon: Drill,
      title: t("steps.production.title"),
      description: t("steps.production.description"),
    },
    {
      number: "5",
      icon: Truck,
      title: t("steps.shipping.title"),
      description: t("steps.shipping.description"),
    },
  ]

  return (
    <section id="order-steps" className="relative min-h-screen py-24 bg-black overflow-hidden flex items-center">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      {/* Animated silver orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-gray-400/20 to-gray-600/10 rounded-full blur-3xl"
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
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-gray-500/20 to-gray-700/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            {t("title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-10 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-600 via-gray-400 to-gray-600">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-400 via-gray-300 to-gray-400 blur-sm opacity-50" />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex mb-16 last:mb-0 group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-gray-900 to-black border-2 border-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mr-6 md:mr-8 relative z-10 shadow-2xl group-hover:border-gray-400 group-hover:shadow-gray-400/50 transition-all duration-500"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-400/30 to-gray-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-gray-400/0 group-hover:border-gray-400/50 transition-all duration-500"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <step.icon className="w-8 h-8 md:w-10 md:h-10 text-gray-400 group-hover:text-gray-200 transition-colors duration-500 relative z-10" />
              </motion.div>

              <motion.div
                className="flex-1 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border-2 border-gray-700 rounded-2xl p-6 md:p-8 shadow-2xl group-hover:border-gray-400 group-hover:shadow-gray-400/30 transition-all duration-500 relative overflow-hidden"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-500/0 via-gray-400/0 to-gray-500/0 group-hover:from-gray-500/20 group-hover:via-gray-400/20 group-hover:to-gray-500/20 transition-all duration-500 -z-10 blur-xl" />

                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-gray-400/0 via-gray-300/0 to-gray-400/0 group-hover:from-gray-400/30 group-hover:via-gray-300/30 group-hover:to-gray-400/30 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-20" />

                <h3 className="text-xl md:text-2xl font-semibold mb-3 flex items-center text-white">
                  <span className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-base font-bold mr-4 text-black shadow-lg group-hover:shadow-gray-400/50 group-hover:scale-110 transition-all duration-500">
                    {step.number}
                  </span>
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-gray-200 group-hover:to-white transition-all duration-500">
                    {step.title}
                  </span>
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed ml-14 group-hover:text-gray-300 transition-colors duration-500">
                  {step.description}
                </p>

                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-300/10 to-transparent rounded-bl-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Decorative bottom element */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-8 py-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-full backdrop-blur-sm">
            <p className="text-gray-400 text-sm">
              {t("subtitle") || "Simple, transparent process from start to finish"}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OrderSteps
