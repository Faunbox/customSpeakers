'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl';
import Image from 'next/image'

const About = () => {
  const t = useTranslations('About');
  return (
    <section id="o-nas" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t('title')}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">{t('experience')}</h3>
            <p className="text-gray-300 mb-6">
            {t('description')}
            </p>
            <p className="text-gray-300">
            {t('goal')}
            </p>
          </motion.div>
          <motion.div
            className="relative h-80"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-80">
              <Image
                src="/images/frezowanie.webp"
                alt="Custom Speaker Workshop"
                fill
                className="object-cover rounded-lg shadow-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

