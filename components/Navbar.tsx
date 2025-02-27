"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, Menu, X } from "lucide-react";

export const menuArray = ["Start", "O nas", "Oferta", "Galeria", "Historia", "Kontakt"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <Volume2 className="w-8 h-8 text-purple-500" />
          <a href="#start">
          <span className="text-xl font-bold">MF Custom Speakers</span>
          </a>
        </motion.div>
        <ul className="hidden md:flex space-x-6">
          {menuArray.map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-400 transition-colors"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-gray-900 absolute top-full left-0 right-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="py-4 px-4 space-y-2">
              {menuArray.map((item) => (
                <motion.li
                  key={item}
                  className="relative overflow-hidden"
                  whileHover={{ x: 10 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block py-2 hover:text-purple-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                  <motion.div
                    className="absolute top-0 right-0 bottom-0 w-1 bg-purple-500"
                    initial={{ x: 10 }}
                    whileHover={{ x: 0 }}
                  />
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
