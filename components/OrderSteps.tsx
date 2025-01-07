'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Settings, DollarSign,  Headphones, Truck } from 'lucide-react'

const steps = [
  {
    number: '1',
    icon: MessageSquare,
    title: 'Initial Consultation',
    description: 'Schedule a consultation with our audio experts to discuss your needs, preferences, and space requirements.'
  },
  {
    number: '2',
    icon: Settings,
    title: 'Design & Planning',
    description: 'Our team creates a detailed design proposal including speaker specifications and room acoustics analysis.'
  },
  {
    number: '3',
    icon: DollarSign,
    title: 'Payment',
    description: 'Zapłać zaliczkę na konto: 34934000059349'
  },
  {
    number: '4',
    icon: Headphones,
    title: 'Production Phase',
    description: 'Your custom speakers are handcrafted by our skilled technicians, with rigorous quality testing at every stage.'
  },
  {
    number: '5',
    icon: Truck,
    title: 'Installation & Setup',
    description: 'We carefully deliver and install your speaker system, optimizing the setup for your space.'
  }
]

const OrderSteps = () => {
  return (
    <section id="order-steps" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          How to Order Your Custom Speakers
        </motion.h2>
        <div className="relative">
          <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-purple-500/30" />
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex mb-12 last:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mr-8 relative z-10">
                <step.icon className="w-12 h-12 text-purple-500" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 flex items-center">
                  <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    {step.number}
                  </span>
                  {step.title}
                </h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OrderSteps

