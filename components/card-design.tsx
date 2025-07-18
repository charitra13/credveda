"use client"

import { motion } from "framer-motion"
import { Shield, Target, BarChart3 } from "lucide-react"

export function CardDesign() {
  const cards = [
    {
      title: "CREDIT HEALTH",
      subtitle: "Credit Tier Analysis",
      icon: Shield,
      gradient: "from-emerald-400 via-green-500 to-teal-600",
      circleText: "GREEN TIER",
      bottomText: "GREEN TIER",
      description: "Basic tier classification and recommendations",
    },
    {
      title: "LOAN MATCHING", 
      subtitle: "Loan Category Analysis",
      icon: Target,
      gradient: "from-orange-400 via-orange-500 to-orange-600",
      circleText: "Personal",
      bottomText: "Personal/Home/Business",
      description: "Analyze eligibility across loan categories",
    },
    {
      title: "DETAILED SHAP REPORT",
      subtitle: "Comprehensive Report", 
      icon: BarChart3,
      gradient: "from-slate-700 via-slate-800 to-slate-900",
      circleText: "AI Analytics",
      bottomText: "AI Analytics",
      description: "Complete AI analysis with explanations",
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
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your{" "}
            <span className="text-[#0192dd]">Analysis Type</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                className={`bg-gradient-to-br ${card.gradient} rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[500px] flex flex-col relative overflow-hidden`}
              >
                {/* Header with icon */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 tracking-wide">{card.title}</h3>
                    <p className="text-white/80 text-sm font-medium">{card.subtitle}</p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Central circular element */}
                <div className="flex-1 flex flex-col items-center justify-center space-y-6">
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <span className="text-lg font-bold text-center leading-tight px-2">
                      {card.circleText}
                    </span>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-xl font-bold tracking-wide">
                      {card.bottomText}
                    </p>
                  </div>
                </div>

                {/* Description at bottom */}
                <div className="mt-auto pt-6">
                  <p className="text-white/90 leading-relaxed text-center font-medium">
                    {card.description}
                  </p>
                </div>

                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
