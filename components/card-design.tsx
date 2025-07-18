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
      description: "Basic tier classification and recommendations",
    },
    {
      title: "LOAN MATCHING", 
      subtitle: "Loan Category Analysis",
      icon: Target,
      gradient: "from-orange-400 via-orange-500 to-orange-600",
      description: "Analyze eligibility across loan categories",
    },
    {
      title: "DETAILED SHAP REPORT",
      subtitle: "Comprehensive Report", 
      icon: BarChart3,
      gradient: "from-slate-700 via-slate-800 to-slate-900",
      description: "Complete AI analysis with explanations",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
              transition={{ duration: 0.3, delay: index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02, 
             
                transition: { 
                  type: 'spring', 
                  stiffness: 180, 
                  damping: 10,
                  mass: 0.6
                } 
              }}
              className="relative group cursor-pointer will-change-transform"
              style={{ transformOrigin: 'center' }}
            >
              <div
                className={`bg-gradient-to-br ${card.gradient} rounded-3xl p-8 text-white shadow-xl min-h-[320px] flex flex-col relative overflow-hidden`}
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

                {/* Central content area */}
                <div className="flex-1 flex items-center justify-center px-4">
                  <div className="text-center max-w-xs">
                    <p className="text-lg text-white/90 leading-relaxed font-medium">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Background decoration */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
