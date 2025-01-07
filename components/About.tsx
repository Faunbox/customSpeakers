'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">15 Years of Excellence</h3>
            <p className="text-gray-300 mb-6">
              With over 15 years of experience in the speaker industry, we've honed our craft to deliver unparalleled sound quality. Our journey began with a passion for audio and has evolved into a commitment to creating custom speakers that exceed expectations.
            </p>
            <p className="text-gray-300">
              Today, we're proud to work with pro audio equipment, bringing studio-quality sound to homes and venues across the country. Our expertise spans from vintage restorations to cutting-edge designs, ensuring that every project is tailored to our clients' unique needs.
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
                src="/placeholder.svg"
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

