"use client";

import { motion } from "framer-motion";
import {
  Volume2,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MessageSquareMore,
} from "lucide-react";
import Link from "next/link";
import { menuArray } from "./Navbar";
import { email, phone_number, whatsApp } from "./Contact";
import { useTranslations } from "next-intl";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations('Navigation');
  const tt = useTranslations('Footer');

  const socialLinks = [
    { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61575753504835" },
    { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/mf_customs_audio/" },
    { Icon: Mail, label: "Email", href: `mailto:${email}` },
    { Icon: Phone, label: "Phone", href: `tel:${phone_number}` },
    { Icon: MessageSquareMore, label: "WhatsApp", href: (`https://wa.me/${whatsApp}`) },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <motion.div
              className="flex items-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Volume2 className="w-8 h-8 text-purple-500 mr-2" />
              <span className="text-xl font-bold">MF Custom Speakers</span>
            </motion.div>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {socialLinks.map(({ Icon, label, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </motion.div>
          </div>
          <motion.nav
            className="mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
              {menuArray.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="hover:text-purple-400 transition-colors duration-300"
                  >
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        </div>
        <motion.div
          className="text-center mt-8 text-sm text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>&copy; {currentYear} MF Custom Speakers. All rights reserved.</p>
          <a
            href="/privacy-policy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            {tt('privacyPolicy')}
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
