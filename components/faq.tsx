"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is CredVeda?",
      answer:
        "CredVeda is an AI-powered financial credit analysis platform that helps you understand your credit profile, get personalized loan recommendations, and connect with financial advisors.",
    },
    {
      question: "How accurate is the credit analysis?",
      answer:
        "Our AI-powered analysis uses advanced SHAP (SHapley Additive exPlanations) methodology to provide highly accurate credit assessments with detailed explanations for each factor affecting your credit score.",
    },
    {
      question: "Can I compare loans from multiple NBFCs?",
      answer:
        "Yes, CredVeda connects you with 500+ NBFCs and financial advisors, allowing you to compare interest rates, terms, and conditions across multiple lenders to find the best deal.",
    },
    {
      question: "How do I connect with DSAs?",
      answer:
        "Through our platform, you can directly connect with verified Direct Selling Agents (DSAs) who can help you navigate the loan application process and secure better rates.",
    },
    {
      question: "Is my financial data secure?",
      answer:
        "Absolutely. We use bank-grade encryption and security measures to protect your financial data. Your information is never shared without your explicit consent.",
    },
    {
      question: "What documents do I need to upload?",
      answer:
        "You typically need your credit report, income statements, and basic identity documents. Our system will guide you through the specific requirements based on your analysis type.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors duration-200 ${
                  openIndex === index ? "bg-[#0192dd] text-white" : "bg-white hover:bg-gray-50"
                }`}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-gray-50 text-gray-700 leading-relaxed">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
