'use client'
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone } from "lucide-react"
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useTranslations } from "next-intl";

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

   const t = useTranslations("Troels_contact");

  return (
    <Card>
    <motion.section
      id="contact-section"
      ref={contactRef}
      initial="hidden"
      animate={contactInView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      <motion.div
        className="glass rounded-3xl p-12 border border-primary/20 text-center space-y-8"
        whileHover={{ scale: 1.01, borderColor: "hsl(var(--primary) / 0.4)" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="space-y-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold gradient-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t("title")}
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
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
              className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 group bg-purple-600 hover:bg-purple-700"
              >
              <Mail className="w-5 h-5 mr-2" />
                {t("button_email")}
            </Button>
                </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 glass border-accent/50 hover:bg-accent/10 group bg-transparent text-purple-600 hover:text-black"
            >
              <Phone className="w-5 h-5 mr-2" />
                {t("button_whatsapp")}
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
    </Card>
  );
};

export default Contact;
