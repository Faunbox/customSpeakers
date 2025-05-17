"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Hero = () => {
const t = useTranslations('Hero');

  return (
    <section
      id="start"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/gramofon.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <div className="container mx-auto px-4 z-20">
        <motion.h2
          className="text-5xl md:text-7xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t('headline')}
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t('subheadline')}
        </motion.p>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#oferta"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
          >
            {t('cta')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
