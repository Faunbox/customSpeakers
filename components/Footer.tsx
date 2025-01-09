'use client'

import { motion } from 'framer-motion'
import { Volume2, Facebook, Instagram, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import { menuArray } from './Navbar'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { Icon: Facebook, label: 'Facebook', href: '#' },
    { Icon: Instagram, label: 'Instagram', href: '#' },
    { Icon: Mail, label: 'Email', href: 'mailto:info@customspeakers.com' },
    { Icon: Phone, label: 'WhatsApp', href: 'https://wa.me/1234567890' }
  ]

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
              <span className="text-xl font-bold">CustomSpeakers</span>
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
              {menuArray.map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="hover:text-purple-400 transition-colors duration-300">
                    {item}
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
          <p>&copy; {currentYear} MF Customs. All rights reserved.</p>
          <a 
            href="/privacy-policy.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-purple-400 transition-colors duration-300"
          >
            Polityka prywatności
          </a>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

