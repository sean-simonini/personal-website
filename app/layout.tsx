import type React from "react"
import type { Metadata, Viewport } from "next"
import { Newsreader } from "next/font/google"
import "./globals.css"

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sean Simonini",
  description: "Mind Mending. Neuroscience, policy, and writing on ending the immutability of neuronal loss.",
}

export const viewport: Viewport = {
  themeColor: "#200000",
  colorScheme: "dark",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={newsreader.variable}>
      <body>{children}</body>
    </html>
  )
}
