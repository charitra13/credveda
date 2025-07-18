"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function MobileCTA() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 p-4 shadow-lg"
    >
      <Button className="w-full bg-[#0192dd] hover:bg-[#0192dd]/90 text-white font-semibold py-4 rounded-lg text-lg transition-all duration-200 hover:scale-105 shadow-lg">
        ANALYSE PROFILE
      </Button>
    </motion.div>
  )
}
