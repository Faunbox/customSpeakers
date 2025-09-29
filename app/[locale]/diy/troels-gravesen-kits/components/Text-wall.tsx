"use client"

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

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
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const TroelsTextWall = () => {
    const t = useTranslations("Troels_texwtwall");
  return (
       <motion.section
        className="py-24 bg-slate-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center space-y-6 mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-white">{t("main_title")}</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {t("desc")}
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center" variants={staggerContainer}>
            <motion.div
              className="space-y-4 bg-slate-800 p-8 rounded-2xl border border-slate-700"
              variants={fadeInUp}
              whileHover={{ scale: 1.02, borderColor: "rgb(148 163 184)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">{t("title1")}</h3>
              <p className="text-slate-300 leading-relaxed">
                {t("section1")}
              </p>
              <motion.div className="relative group mt-6" whileHover={{ scale: 1.02 }}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <Button
                  className="relative w-full bg-slate-700 hover:bg-slate-600 text-white border-0"
                  onClick={() => window.open("http://www.troelsgravesen.dk", "_blank")}
                >
                  {t("button1")}
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-4 bg-slate-800 p-8 rounded-2xl border border-slate-700"
              variants={fadeInUp}
              whileHover={{ scale: 1.02, borderColor: "rgb(148 163 184)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">{t("title2")}</h3>
              <p className="text-slate-300 leading-relaxed">
               {t("section2")}
              </p>
            </motion.div>

            <motion.div
              className="space-y-4 bg-slate-800 p-8 rounded-2xl border border-slate-700"
              variants={fadeInUp}
              whileHover={{ scale: 1.02, borderColor: "rgb(148 163 184)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">{t("title3")}</h3>
              <p className="text-slate-300 leading-relaxed">
         {t("section3")}
              </p>
              <motion.div className="relative group mt-6" whileHover={{ scale: 1.02 }}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <Button
                  className="relative w-full bg-slate-700 hover:bg-slate-600 text-white border-0"
                  onClick={() => window.open("https://jantzen-audio.com", "_blank")}
                >
                  {t("button2")}
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-4 bg-slate-800 p-8 rounded-2xl border border-slate-700"
              variants={fadeInUp}
              whileHover={{ scale: 1.02, borderColor: "rgb(148 163 184)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">{t("title4")}</h3>
              <p className="text-slate-300 leading-relaxed">
                {t("section4")}
              </p>
            </motion.div>

            <motion.div
              className="space-y-4 bg-slate-800 p-8 rounded-2xl border border-slate-700"
              variants={fadeInUp}
              whileHover={{ scale: 1.02, borderColor: "rgb(148 163 184)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">{t("title5")}</h3>
              <p className="text-slate-300 leading-relaxed">
                {t("section5")}
              </p>
            </motion.div>

            <motion.div
              className="space-y-4 bg-slate-800 p-8 rounded-2xl border border-slate-700"
              variants={fadeInUp}
              whileHover={{ scale: 1.02, borderColor: "rgb(148 163 184)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">{t("title6")}</h3>
              <p className="text-slate-300 leading-relaxed">
                {t("section6")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
  );
};

export default TroelsTextWall;
