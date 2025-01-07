'use client'

import { motion } from 'framer-motion'
import { Volume2, Facebook, Instagram, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="flex items-center mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Volume2 className="w-8 h-8 text-purple-500 mr-2" />
            <span className="text-xl font-bold">CustomSpeakers</span>
          </motion.div>
          <div className="flex flex-col md:flex-row items-center">
            <motion.nav 
              className="mb-4 md:mb-0 md:mr-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ul className="flex flex-wrap justify-center space-x-6">
                {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link href={`#${item.toLowerCase()}`} className="hover:text-purple-400 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
            <motion.div 
              className="flex space-x-4 mb-4 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {[
                { Icon: Facebook, label: 'Facebook', href: '#' },
                { Icon: Instagram, label: 'Instagram', href: '#' },
                { Icon: Mail, label: 'Email', href: 'mailto:info@customspeakers.com' },
                { Icon: Phone, label: 'WhatsApp', href: 'https://wa.me/1234567890' }
              ].map(({ Icon, label, href }, index) => (
                <a 
                  key={index} 
                  href={href} 
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
        <motion.div 
          className="text-center mt-8 text-sm text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>&copy; {currentYear} CustomSpeakers. All rights reserved.</p>
          <a 
            href="/privacy-policy.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-purple-400 transition-colors"
          >
            Privacy Policy
          </a>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

