"use client"

import { motion } from "framer-motion"
import { MessageCircle, Mail, Users } from "lucide-react"

export function Support() {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Chat Support",
      description: "Get instant help from our support team",
      action: "Start Chat",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us your questions and concerns",
      action: "Send Email",
    },
    {
      icon: Users,
      title: "Community",
      description: "Join our community of financial experts",
      action: "Join Community",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Have More Questions?</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {supportOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 rounded-xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-[#0192dd] rounded-full flex items-center justify-center mx-auto">
                  <option.icon className="w-8 h-8 text-white" />
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                  <p className="text-gray-300 mb-6">{option.description}</p>
                </div>

                <button className="bg-[#0192dd] hover:bg-[#0192dd]/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105">
                  {option.action}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
