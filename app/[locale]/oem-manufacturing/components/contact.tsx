"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function OEMContact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gray-200/50 rounded-full blur-3xl top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-96 h-96 bg-gray-200/50 rounded-full blur-3xl top-1/2 right-0 translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 bg-clip-text text-transparent">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team to discuss your OEM manufacturing needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
                  <a
                    href="mailto:oem@mfcustomspeakers.com"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    oem@mfcustomspeakers.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-gray-900 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Us</h3>
                  <p className="text-gray-600">
                    123 Manufacturing Street
                    <br />
                    Industrial District, City 12345
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 text-white flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-400 bg-clip-text text-transparent">
              Let&quot;s Build Something Amazing
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Whether you need a single prototype or large-scale production, our team is ready to bring your audio
              products to life with precision and excellence.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] w-fit"
            >
              Contact Our Team
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
