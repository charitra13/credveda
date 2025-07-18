"use client"

import { motion } from "framer-motion"
import { Shield, Bell, Network, Scale } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "AI Profile Analyser",
      description: "Get complete credit analysis with SHAP explanations and tier classification",
    },
    {
      icon: Bell,
      title: "EMI Reminder System",
      description: "Set up WhatsApp/SMS reminders for all your loan payments across providers",
    },
    {
      icon: Network,
      title: "NBFC & DSA Network",
      description: "Connect with 500+ advisors and NBFCs for personalized loan recommendations",
    },
    {
      icon: Scale,
      title: "Loan Comparison",
      description: "Compare interest rates across different loan types and providers",
    },
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=200&fit=crop)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">One Solution to All Your Credit Needs</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#0192dd]/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-[#0192dd]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
