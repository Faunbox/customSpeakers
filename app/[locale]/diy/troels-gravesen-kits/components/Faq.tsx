"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

const Faq = () => {
  const t = useTranslations("Troels_faq")

  const faqData = [
    { question: "q1", answer: "a1" },
    { question: "q2", answer: "a2" },
    { question: "q3", answer: "a3" },
    { question: "q4", answer: "a4" },
    { question: "q5", answer: "a5" },
    { question: "q6", answer: "a6" },
  ]

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-gray-400/10 to-gray-600/10 rounded-full blur-3xl"
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
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("title")}
        </motion.h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-gray-600 rounded-lg px-6 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-white hover:text-gray-300 transition-colors duration-300">
                  {t(`${faq.question}`)}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">{t(`${faq.answer}`)}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default Faq
