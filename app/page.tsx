"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { CardDesign } from "@/components/card-design"
import { Analysis } from "@/components/analysis"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      <Header />
      <Hero />
      <Features />
      <CardDesign />
      <Analysis />
      <Footer />
      <MobileCTA />
    </motion.div>
  )
}
