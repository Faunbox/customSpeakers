"use client"

import { motion } from "framer-motion"
import { CheckCircle, Award, Zap, Shield, Users, TrendingUp } from "lucide-react"

export default function OEMSEOText() {
  const features = [
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "Proven expertise in precision acoustic engineering and speaker manufacturing",
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "Rigorous testing and quality control procedures for every unit",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Efficient production processes from prototype to full-scale manufacturing",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated engineering team providing technical expertise throughout",
    },
  ]

  const benefits = [
    "State-of-the-art manufacturing facility",
    "Flexible production capabilities",
    "Comprehensive design consultation",
    "Supply chain management",
    "Material sourcing expertise",
    "After-sales service support",
  ]

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gray-300/20 rounded-full blur-3xl top-20 left-1/4 -translate-x-1/2" />
        <div className="absolute w-96 h-96 bg-gray-400/20 rounded-full blur-3xl bottom-20 right-1/4 translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 bg-clip-text text-transparent">
            Your Trusted OEM Speaker Manufacturing Partner
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                At MF Custom Speakers, we specialize in premium OEM speaker manufacturing services that bring your audio
                vision to life. With over 15 years of experience in precision acoustic engineering, we partner with
                brands worldwide to deliver exceptional audio products that exceed expectations.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our state-of-the-art manufacturing facility combines traditional craftsmanship with cutting-edge
                technology. From initial concept and prototyping to full-scale production, we provide comprehensive OEM
                solutions tailored to your specific requirements.
              </p>
            </div>
            <div className="relative">
              <div className="bg-white border-2 border-gray-300 rounded-2xl p-8 shadow-xl">
                <TrendingUp className="w-12 h-12 text-gray-700 mb-4" />
                <blockquote className="text-2xl font-bold text-gray-900 mb-4">
                  &quot;Excellence in every speaker, precision in every detail&quot;
                </blockquote>
                <p className="text-gray-600">
                  Our commitment to quality and innovation has made us the preferred OEM partner for leading audio
                  brands worldwide.
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl -z-10" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Manufacturing Solutions</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Quality is at the heart of everything we do. Every speaker unit undergoes rigorous testing and quality
                control procedures, ensuring consistent performance and reliability. Our experienced engineering team
                works closely with clients throughout the development process.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We provide technical expertise and innovative solutions to achieve optimal acoustic performance,
                ensuring your products stand out in the competitive audio market.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl">
              <h4 className="text-xl font-bold text-white mb-6">What We Offer</h4>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="bg-white border-2 border-gray-300 rounded-2xl p-10 shadow-xl">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              We understand that successful OEM partnerships require more than just manufacturing capability. Thats why
              we offer comprehensive support including design consultation, material sourcing, supply chain management,
              and after-sales service.
            </p>
            <p className="text-lg font-semibold text-gray-900">
              Our commitment to excellence and customer satisfaction has made us the preferred OEM partner for leading
              audio brands across the globe.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
