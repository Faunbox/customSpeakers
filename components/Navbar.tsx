"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { useRouter } from "next/navigation"

export const menuArray = [
  { key: "home", href: "/" },
  { key: "about", href: "/#o-nas" },
  { key: "offer", href: "/#oferta" },
  {
    key: "diy",
    href: "#",
    dropdown: [
      { key: "troels-kits", href: "/diy/troels-gravesen-kits" },
      { key: "custom-designs", href: "/diy/custom-designs" },
      { key: "mf-customs-kits", href: "/diy/mf-customs-kits" },
    ],
  },
  { key: "gallery", href: "/#galeria" },
  { key: "history", href: "/#historia" },
  { key: "contact", href: "/#kontakt" },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [language, setLanguage] = useState("pl")
  const t = useTranslations("Navigation")
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    const currentPath = window.location.pathname
    if (currentPath.startsWith("/en")) {
      setLanguage("en")
    } else {
      setLanguage("pl")
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key)
  }

  const closeDropdown = () => {
    setOpenDropdown(null)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-xl border-gray-800/50 shadow-lg shadow-gray-900/20"
          : "bg-black/40 backdrop-blur-sm border-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-24 -right-24 w-48 h-48 bg-gray-400/10 rounded-full blur-3xl"
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
          className="absolute -top-24 -left-24 w-48 h-48 bg-gray-300/10 rounded-full blur-3xl"
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

      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative z-10">
        <div className="flex items-center">
          <motion.a
            href="/"
            className="flex items-center space-x-3 group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              <Image src="/MF.png" alt="MF Custom Speakers" width={40} height={40} className="object-contain" />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400/20 to-gray-300/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
              MF Custom Speakers
            </span>
          </motion.a>
        </div>

        <div className="flex items-center">
          <div className="hidden lg:block mr-8">
            <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
              
              <button
                onClick={() => router.replace("/en")}
                className={`text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-300 ${
                  language === "en"
                    ? "bg-gradient-to-r from-gray-400 to-gray-300 text-black shadow-lg shadow-gray-400/20"
                    : "border border-gray-600 text-gray-300 hover:border-gray-400 hover:bg-gray-800/50"
                }`}
              >
                ENG
              </button>
              <button
                onClick={() => router.replace("/pl")}
                className={`text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-300 ${
                  language === "pl"
                    ? "bg-gradient-to-r from-gray-400 to-gray-300 text-black shadow-lg shadow-gray-400/20"
                    : "border border-gray-600 text-gray-300 hover:border-gray-400 hover:bg-gray-800/50"
                }`}
              >
                PL
              </button>
            </motion.div>
          </div>

          <div className="hidden lg:flex space-x-8" onClick={closeDropdown}>
            <ul className="flex space-x-8">
              {menuArray.map(({ key, href, dropdown }) => (
                <motion.li key={key} className="relative" whileHover={{ scale: 1.05 }}>
                  {dropdown ? (
                    <div className="relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleDropdown(key)
                        }}
                        className="flex items-center space-x-1 text-gray-200 hover:text-white transition-all duration-300 group"
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
                            className="absolute top-full left-0 mt-3 bg-black/95 backdrop-blur-xl border border-gray-800/50 rounded-xl shadow-2xl shadow-gray-900/50 min-w-[200px] overflow-hidden"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            {dropdown.map(({ key: subKey, href: subHref }) => (
                              <Link
                                key={subKey}
                                href={subHref}
                                className="block px-5 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-gray-700/50 transition-all duration-300 first:rounded-t-xl last:rounded-b-xl group relative"
                                onClick={closeDropdown}
                              >
                                <span className="relative z-10">{t(subKey)}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-400/0 via-gray-400/10 to-gray-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={href}
                      className="text-gray-200 hover:text-white transition-all duration-300 group relative"
                    >
                      <span className="relative">
                        {t(key)}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-300 group-hover:w-full transition-all duration-300" />
                      </span>
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>

          <button
            className="lg:hidden text-gray-200 hover:text-white transition-colors duration-300 p-2 hover:bg-gray-800/50 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800/50 absolute top-full left-0 right-0 shadow-2xl shadow-gray-900/50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="py-6 px-4 space-y-1">
              {menuArray.map(({ key, href, dropdown }) => (
                <motion.li
                  key={key}
                  className="relative overflow-hidden rounded-lg"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {dropdown ? (
                    <div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleDropdown(key)
                        }}
                        className="flex items-center justify-between w-full py-3 px-4 text-gray-200 hover:text-white hover:bg-gray-800/50 transition-all duration-300 rounded-lg group"
                      >
                        <span>{t(key)}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            openDropdown === key ? "rotate-180" : ""
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-400/0 via-gray-400/5 to-gray-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </button>
                      <AnimatePresence>
                        {openDropdown === key && (
                          <motion.div
                            className="ml-4 mt-2 space-y-1"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {dropdown.map(({ key: subKey, href: subHref }) => (
                              <Link
                                key={subKey}
                                href={subHref}
                                className="block py-2 pl-4 text-gray-300 hover:text-white transition-all duration-300 border-l-2 border-gray-700 hover:border-gray-400 rounded-r group relative"
                                onClick={() => {
                                  setOpenDropdown(null)
                                  setIsMobileMenuOpen(false)
                                }}
                              >
                                <span className="relative z-10">{t(subKey)}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-800/0 to-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={href}
                      className="block py-3 px-4 text-gray-200 hover:text-white hover:bg-gray-800/50 transition-all duration-300 rounded-lg group relative"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="relative z-10">{t(key)}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-400/0 via-gray-400/5 to-gray-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  )}
                </motion.li>
              ))}

              <motion.li className="pt-6 mt-4 border-t border-gray-800/50">
                <div className="flex items-center justify-center space-x-3">
                  <button
                    onClick={() => router.replace("/en")}
                    className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                      language === "en"
                        ? "bg-gradient-to-r from-gray-400 to-gray-300 text-black shadow-lg shadow-gray-400/20"
                        : "border border-gray-600 text-gray-300 hover:border-gray-400 hover:bg-gray-800/50"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => router.replace("/pl")}
                    className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                      language === "pl"
                        ? "bg-gradient-to-r from-gray-400 to-gray-300 text-black shadow-lg shadow-gray-400/20"
                        : "border border-gray-600 text-gray-300 hover:border-gray-400 hover:bg-gray-800/50"
                    }`}
                  >
                    Polski
                  </button>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
