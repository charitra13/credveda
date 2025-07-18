import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CredVeda - AI-Powered Credit Analysis Platform",
  description:
    "Analyze your credit profile with AI. Get personalized loan recommendations and connect with 500+ financial advisors to secure the best rates.",
  keywords: "credit analysis, loan recommendations, financial advisors, NBFC, credit score, AI analysis",
  authors: [{ name: "CredVeda" }],
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  openGraph: {
    title: "CredVeda - AI-Powered Credit Analysis Platform",
    description:
      "Analyze your credit profile with AI. Get personalized loan recommendations and connect with 500+ financial advisors.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CredVeda - AI-Powered Credit Analysis Platform",
    description:
      "Analyze your credit profile with AI. Get personalized loan recommendations and connect with 500+ financial advisors.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
