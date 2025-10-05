"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Facebook, Instagram, Mail, Phone, MessageSquareMore, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { email, phone_number, whatsApp } from "./Contact"
import { useTranslations } from "next-intl"
import { menuArray } from "./Navbar"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const t = useTranslations("Navigation")
  const tt = useTranslations("Footer")
  const ttt = useTranslations("Cookie")

  const socialLinks = [
    {
      Icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61575753504835",
    },
    {
      Icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/mf_customs_audio/",
    },
    { Icon: Mail, label: "Email", href: `mailto:${email}` },
    { Icon: Phone, label: "Phone", href: `tel:${phone_number}` },
    {
      Icon: MessageSquareMore,
      label: "WhatsApp",
      href: `https://wa.me/${whatsApp}`,
    },
  ]

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key)
  }

  return (
    <footer className="relative bg-black text-white py-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-32 w-64 h-64 bg-gray-400/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gray-300/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6 group">
              <div className="relative w-12 h-12 flex items-center justify-center mr-3">
                <Image src="/MF.png" alt="MF Custom Speakers" width={48} height={48} className="object-contain" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400/20 to-gray-300/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                MF Custom Speakers
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {tt("description")}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, label, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className="relative group"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative z-10 p-2 rounded-lg bg-gray-900/50 border border-gray-800 group-hover:border-gray-400/60 transition-all duration-300">
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-400/0 via-gray-400/20 to-gray-400/0 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.nav
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {tt("links")}
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {menuArray.map(({ key, href, dropdown }) => (
                <li key={key}>
                  {dropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(key)}
                        className="flex items-center space-x-1 text-gray-400 hover:text-white transition-all duration-300 group w-full text-left"
                      >
                        <span className="relative">
                          {t(key)}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-300 group-hover:w-full transition-all duration-300" />
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            openDropdown === key ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === key && (
                          <motion.div
                            className="absolute bottom-full left-0 mb-2 bg-black/95 backdrop-blur-sm border border-gray-800 rounded-lg p-3 min-w-[200px] shadow-xl z-50"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="space-y-2">
                              {dropdown.map(({ key: subKey, href: subHref }) => (
                                <Link
                                  key={subKey}
                                  href={subHref}
                                  className="block text-sm text-gray-400 hover:text-white transition-all duration-300 px-3 py-2 rounded-md hover:bg-gray-900/50 group relative"
                                >
                                  <span className="relative z-10">{t(subKey)}</span>
                                  <div className="absolute inset-0 bg-gradient-to-r from-gray-400/0 via-gray-400/10 to-gray-400/0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={href}
                      className="text-gray-400 hover:text-white transition-all duration-300 group relative inline-block"
                    >
                      <span className="relative">
                        {t(key)}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-300 group-hover:w-full transition-all duration-300" />
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.nav>
        </div>

        <motion.div
          className="pt-8 border-t border-gray-800/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">&copy; {currentYear} MF Custom Speakers. All rights reserved.</p>
            <a
              href={ttt("policyLink")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-300 transition-all duration-300 group relative"
            >
              <span className="relative">
                {tt("privacyPolicy")}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-300 group-hover:w-full transition-all duration-300" />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
