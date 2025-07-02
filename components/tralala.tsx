"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Volume2 } from "lucide-react"

export const menuArray = [
  { key: "home", href: "/" },
  { key: "about", href: "#o-nas" },
  { key: "offer", href: "#oferta" },
  { key: "gallery", href: "#galeria" },
  { key: "history", href: "#historia" },
  { key: "contact", href: "#kontakt" }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [language, setLanguage] = useState("PL")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = (lang: string) => {
    setLanguage(lang)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? "bg-gray-900/90 backdrop-blur-md" : "bg-transparent"
      } transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
            <Volume2 className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold">CustomSpeakers</span>
          </motion.div>

          {/* Language Selector */}
          <motion.div
            className="ml-6 flex items-center space-x-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              className={`px-2 py-1 rounded-md text-sm font-medium transition-colors ${
                language === "PL" ? "bg-purple-600 text-white" : "text-gray-400 hover:text-white"
              }`}
              onClick={() => toggleLanguage("PL")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              PL
            </motion.button>
            <motion.button
              className={`px-2 py-1 rounded-md text-sm font-medium transition-colors ${
                language === "ENG" ? "bg-purple-600 text-white" : "text-gray-400 hover:text-white"
              }`}
              onClick={() => toggleLanguage("ENG")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ENG
            </motion.button>
          </motion.div>
        </div>

        <ul className="flex space-x-6">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-purple-400 transition-colors">
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}

export default Navbar
