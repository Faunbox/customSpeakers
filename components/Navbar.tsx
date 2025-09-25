"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, Menu, X, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export const menuArray = [
  { key: "home", href: "/" },
  { key: "about", href: "#o-nas" },
  { key: "offer", href: "#oferta" },
  {
    key: "diy",
    href: "#",
    dropdown: [
      { key: "troels-kits", href: "/diy/troels-gravesen-kits" },
      { key: "custom-designs", href: "/diy/custom-designs" },
    ],
  },
  { key: "gallery", href: "#galeria" },
  { key: "history", href: "#historia" },
  { key: "contact", href: "#kontakt" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [language, setLanguage] = useState("pl");
  const t = useTranslations("Navigation");
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const currentPath = window.location.pathname;
    if (currentPath.startsWith("/en")) {
      setLanguage("en");
    } else {
      setLanguage("pl");
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

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
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Volume2 className="w-8 h-8 text-purple-500" />
            <a href="#start">
              <span className="text-xl font-bold">MF Custom Speakers</span>
            </a>
          </motion.div>
        </div>

        <div className="flex items-center">
          {/* Language selector for desktop */}
          <div className="hidden lg:block mr-6">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <button
                onClick={() => router.push("/en")}
                className={`text-sm font-medium px-2 py-1 rounded ${
                  language === "en"
                    ? "bg-purple-500 text-white"
                    : "border border-purple-500 hover:bg-purple-500/20"
                } transition-colors`}
              >
                ENG
              </button>
              <button
                onClick={() => router.push("/pl")}
                className={`text-sm font-medium px-2 py-1 rounded ${
                  language === "pl"
                    ? "bg-purple-500 text-white"
                    : "border border-purple-500 hover:bg-purple-500/20"
                } transition-colors`}
              >
                PL
              </button>
            </motion.div>
          </div>

          {/* Desktop menu container */}
          <div className="hidden lg:flex space-x-6" onClick={closeDropdown}>
            <ul className="flex space-x-6">
              {menuArray.map(({ key, href, dropdown }) => (
                <motion.li
                  key={key}
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                >
                  {dropdown ? (
                    <div className="relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleDropdown(key);
                        }}
                        className="flex items-center space-x-1 hover:text-purple-400 transition-colors"
                      >
                        <span>{t(key)}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openDropdown === key ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === key && (
                          <motion.div
                            className="absolute top-full left-0 mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg min-w-[180px]"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            {dropdown.map(({ key: subKey, href: subHref }) => (
                              <a
                                key={subKey}
                                href={subHref}
                                className="block px-4 py-2 hover:bg-gray-800 hover:text-purple-400 transition-colors first:rounded-t-lg last:rounded-b-lg"
                                onClick={closeDropdown}
                              >
                                {t(subKey)}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={href}
                      className="hover:text-purple-400 transition-colors"
                    >
                      {t(key)}
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
          <button
            className="lg:hidden text-white"
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
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-gray-900 absolute top-full left-0 right-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="py-4 px-4 space-y-2">
              {menuArray.map(({ key, href, dropdown }) => (
                <motion.li
                  key={key}
                  className="relative overflow-hidden"
                  whileHover={{ x: 10 }}
                >
                  {dropdown ? (
                    <div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleDropdown(key);
                        }}
                        className="flex items-center justify-between w-full py-2 hover:text-purple-400 transition-colors"
                      >
                        <span>{t(key)}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openDropdown === key ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === key && (
                          <motion.div
                            className="ml-4 mt-2 space-y-2"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {dropdown.map(({ key: subKey, href: subHref }) => (
                              <a
                                key={subKey}
                                href={subHref}
                                className="block py-1 pl-4 text-gray-300 hover:text-purple-400 transition-colors border-l border-gray-700"
                                onClick={() => {
                                  setOpenDropdown(null);
                                  setIsMobileMenuOpen(false);
                                }}
                              >
                                {t(subKey)}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={href}
                      className="block py-2 hover:text-purple-400 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t(key)}
                    </a>
                  )}
                  <motion.div
                    className="absolute top-0 right-0 bottom-0 w-1 bg-purple-500"
                    initial={{ x: 10 }}
                    whileHover={{ x: 0 }}
                  />
                </motion.li>
              ))}

              {/* Language selector in mobile menu */}
              <motion.li className="pt-4 border-t border-gray-800">
                <div className="flex items-center justify-center space-x-4">
                  <button
                    onClick={() => router.replace("/en")}
                    className={`text-sm font-medium px-3 py-1 rounded ${
                      language === "en"
                        ? "bg-purple-500 text-white"
                        : "border border-purple-500 hover:bg-purple-500/20"
                    } transition-colors`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => router.replace("/pl")}
                    className={`text-sm font-medium px-3 py-1 rounded ${
                      language === "pl"
                        ? "bg-purple-500 text-white"
                        : "border border-purple-500 hover:bg-purple-500/20"
                    } transition-colors`}
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
  );
};

export default Navbar;
