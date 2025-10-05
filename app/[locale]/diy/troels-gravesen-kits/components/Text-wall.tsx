"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ExternalLink, Sparkles, Wrench } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const TroelsTextWall = () => {
  const t = useTranslations("Troels_texwtwall");

  return (
    <motion.section
      className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-gray-200/30 to-gray-300/30 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-gray-100/30 to-gray-200/30 rounded-full blur-3xl"
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
        <motion.div className="text-center space-y-6 mb-16" variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            {t("main_title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("desc")}</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          <motion.div
            className="group relative bg-white backdrop-blur-sm p-8 rounded-2xl border border-gray-200 hover:border-gray-400 transition-all duration-500 shadow-lg hover:shadow-xl"
            variants={fadeInUp}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300/0 via-gray-400/0 to-gray-300/0 group-hover:from-gray-300/20 group-hover:via-gray-400/20 group-hover:to-gray-300/20 rounded-2xl blur-xl transition-all duration-500" />

            <div className="relative space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-gray-300">
                <Sparkles className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-gray-700 group-hover:to-gray-900 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {t("title1")}
              </h3>
              <p className="text-gray-600 leading-relaxed">{t("section1")}</p>
              <Link
                href={
                  "http://www.troelsgravesen.dk/Diy_Loudspeaker_Projects.htm"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-black border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-white transition-all duration-300 group/btn">
                  <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-45 transition-transform duration-300" />
                  {t("button1")}
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="group relative bg-white backdrop-blur-sm p-8 rounded-2xl border border-gray-200 hover:border-gray-400 transition-all duration-500 shadow-lg hover:shadow-xl"
            variants={fadeInUp}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300/0 via-gray-400/0 to-gray-300/0 group-hover:from-gray-300/20 group-hover:via-gray-400/20 group-hover:to-gray-300/20 rounded-2xl blur-xl transition-all duration-500" />

            <div className="relative space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-gray-300">
                <Wrench className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-gray-700 group-hover:to-gray-900 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {t("title2")}
              </h3>
              <p className="text-gray-600 leading-relaxed">{t("section2")}</p>
            </div>
          </motion.div>

          <motion.div
            className="group relative bg-white backdrop-blur-sm p-8 rounded-2xl border border-gray-200 hover:border-gray-400 transition-all duration-500 shadow-lg hover:shadow-xl"
            variants={fadeInUp}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300/0 via-gray-400/0 to-gray-300/0 group-hover:from-gray-300/20 group-hover:via-gray-400/20 group-hover:to-gray-300/20 rounded-2xl blur-xl transition-all duration-500" />

            <div className="relative space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-gray-300">
                <ExternalLink className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-gray-700 group-hover:to-gray-900 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {t("title3")}
              </h3>
              <p className="text-gray-600 leading-relaxed">{t("section3")}</p>
              <Link
                href={"https://jantzen-audio.com"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-black border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-white transition-all duration-300 group/btn">
                  <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-45 transition-transform duration-300" />
                  {t("button2")}
                </Button>
              </Link>
            </div>
          </motion.div>

          {[4, 5, 6].map((num) => (
            <motion.div
              key={num}
              className="group relative bg-white backdrop-blur-sm p-8 rounded-2xl border border-gray-200 hover:border-gray-400 transition-all duration-500 shadow-lg hover:shadow-xl"
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-300/0 via-gray-400/0 to-gray-300/0 group-hover:from-gray-300/20 group-hover:via-gray-400/20 group-hover:to-gray-300/20 rounded-2xl blur-xl transition-all duration-500" />

              <div className="relative space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-gray-300">
                  <Sparkles className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-gray-700 group-hover:to-gray-900 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {t(`title${num}`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`section${num}`)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TroelsTextWall;
