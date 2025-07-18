"use client"

import { motion } from "framer-motion"
import { Shield, Bell, Network, Scale } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "AI Profile Analyser",
      description: "Get complete credit analysis with SHAP explanations and tier classification",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Bell,
      title: "EMI Reminder System",
      description: "Set up WhatsApp/SMS reminders for all your loan payments across providers",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Network,
      title: "NBFC & DSA Network",
      description: "Connect with 500+ advisors and NBFCs for personalized loan recommendations",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: Scale,
      title: "Loan Comparison",
      description: "Compare interest rates across different loan types and providers",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ]

  return (
    <section id="features" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900">One Solution to </span>
            <span style={{ color: '#0192dd' }}>All Your Credit Needs</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.03, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02, 
                y: -2,
                transition: { 
                  type: 'spring', 
                  stiffness: 200, 
                  damping: 12,
                  mass: 0.8
                } 
              }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md will-change-transform"
              style={{ transformOrigin: 'center' }}
            >
              <div className="mb-4">
                <div className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
