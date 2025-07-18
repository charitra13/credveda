"use client"

import * as React from "react"
import { MessageCircle, Send, X, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion, AnimatePresence } from "framer-motion"
import { faqData } from "@/lib/faq-data"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export function FloatingChat() {
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: 1,
      text: "Hello! Welcome to CredVeda. I'm here to help you with your credit analysis questions. You can click on any FAQ above or type your own question!",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = React.useState("")
  const [isOpen, setIsOpen] = React.useState(false)

  // Handle ESC key to close chat
  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen])

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: "Thank you for your message! Our team will get back to you shortly. In the meantime, you can explore our AI-powered credit analysis features.",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  const handleFAQClick = (faqItem: typeof faqData[0]) => {
    // Add user's question to chat
    const userMessage: Message = {
      id: messages.length + 1,
      text: faqItem.question,
      sender: "user",
      timestamp: new Date(),
    }

    // Add bot's answer to chat
    const botMessage: Message = {
      id: messages.length + 2,
      text: faqItem.answer,
      sender: "bot",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage, botMessage])
  }

    return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg transition-all duration-200 hover:scale-105"
      >
        <MessageCircle className="h-6 w-6 text-white" />
        <span className="sr-only">Open chat</span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/25 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Chat Window */}
            <motion.div
              initial={{ 
                opacity: 0,
                x: 100,
                scale: 0.95
              }}
              animate={{ 
                opacity: 1,
                x: 0,
                scale: 1
              }}
              exit={{ 
                opacity: 0,
                x: 100,
                scale: 0.95
              }}
              transition={{ 
                type: "spring",
                damping: 25,
                stiffness: 300,
                duration: 0.3
              }}
              className="fixed bottom-28 right-6 w-full max-w-md h-[600px] bg-background border rounded-lg shadow-xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="p-4 pb-2 border-b flex justify-between items-center flex-shrink-0">
                <div>
                  <h3 className="text-lg font-semibold">Chat with CredVeda</h3>
                  <p className="text-sm text-muted-foreground">
                    Get instant help with your credit analysis
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>

              {/* FAQ Quick Access Section */}
              <div className="p-4 pb-2 border-b flex-shrink-0">
                <div className="flex items-center gap-2 mb-3">
                  <HelpCircle className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">Frequently Asked Questions</span>
                </div>
                <div className="grid grid-cols-1 gap-2 max-h-32 overflow-y-auto">
                  {faqData.map((faq) => (
                    <motion.button
                      key={faq.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleFAQClick(faq)}
                      className="text-left p-2 text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-md transition-colors border border-blue-200 truncate"
                    >
                      {faq.question}
                    </motion.button>
                  ))}
                </div>
              </div>
              
              {/* Messages Area */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex ${
                        message.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                          message.sender === "user"
                            ? "bg-blue-600 text-white"
                            : "bg-muted text-foreground"
                        }`}
                      >
                        {message.text}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
              
              {/* Input Area */}
              <div className="border-t p-4 flex-shrink-0">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Type your message..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1"
                  />
                  <Button 
                    size="icon" 
                    onClick={handleSendMessage}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Send message</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
} 