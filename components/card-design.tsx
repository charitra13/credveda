"use client"

import { motion } from "framer-motion"
import { TrendingUp, Target, BarChart3 } from "lucide-react"

export function CardDesign() {
  const cards = [
    {
      title: "CREDIT HEALTH",
      subtitle: "Credit Tier Analysis",
      icon: TrendingUp,
      gradient: "from-green-400 to-green-600",
      visual: "GREEN TIER",
      features: "Basic tier classification and recommendations",
      accent: "green",
    },
    {
      title: "LOAN MATCHING",
      subtitle: "Loan Category Analysis",
      icon: Target,
      gradient: "from-[#E29E21] to-orange-600",
      visual: "Personal/Home/Business",
      features: "Analyze eligibility across loan categories",
      accent: "orange",
    },
    {
      title: "DETAILED SHAP REPORT",
      subtitle: "Comprehensive Report",
      icon: BarChart3,
      gradient: "from-gray-800 to-gray-900",
      visual: "AI Analytics",
      features: "Complete AI analysis with explanations",
      accent: "dark",
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
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Choose Your Analysis Type</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative group cursor-pointer"
            >
              <div
                className={`bg-gradient-to-br ${card.gradient} rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[400px] flex flex-col`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                    <p className="text-white/80 text-sm">{card.subtitle}</p>
                  </div>
                  <card.icon className="w-8 h-8 text-white/80" />
                </div>

                {/* Visual Element */}
                <div className="flex-1 flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-2xl font-bold">{card.visual.split("/")[0]}</span>
                    </div>
                    <p className="text-lg font-semibold">{card.visual}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-auto">
                  <p className="text-white/90 leading-relaxed">{card.features}</p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="md:hidden text-center mt-8"
        >
          <p className="text-gray-500 text-sm">Swipe to see all options →</p>
        </motion.div>
      </div>
    </section>
  )
}
