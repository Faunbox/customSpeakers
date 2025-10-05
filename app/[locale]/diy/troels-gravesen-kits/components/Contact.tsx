"use client"

import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Phone } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import {  whatsApp } from "@/components/New_Contct"
import { Link } from "@/i18n/navigation"

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const Contact = () => {
  const contactRef = useRef(null)
  const contactInView = useInView(contactRef, { once: true, margin: "-100px" })

  const t = useTranslations("Troels_contact")

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-gray-200/30 to-gray-400/30 rounded-full blur-3xl"
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

      <motion.div
        id="contact-section"
        ref={contactRef}
        initial="hidden"
        animate={contactInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="max-w-4xl mx-auto px-4 relative z-10"
      >
        <Card className="bg-white border-gray-200 hover:border-gray-400 hover:shadow-2xl transition-all duration-500">
          <motion.div
            className="p-12 text-center space-y-8"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="space-y-4">
              <motion.h2
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {t("title")}
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {t("desc")}
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href={"/#kontakt"}>
                  <Button
                    size="lg"
                    className="text-lg px-8 py-4 bg-black hover:bg-gray-900 text-white border border-gray-700 hover:border-gray-400 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    {t("button_email")}
                  </Button>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href={ `https://wa.me/${whatsApp}`} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 border-gray-300 hover:border-gray-400 transition-all duration-300"
                  >
                  <Phone className="w-5 h-5 mr-2" />
                  {t("button_whatsapp")}
                </Button>
                  </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </Card>
      </motion.div>
    </section>
  )
}

export default Contact
