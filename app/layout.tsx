import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sean Simonini | Neuroscience and Biotechnology Policy",
  description:
    "Working on regenerative therapies for patients suffering from neurodegenerative diseases such as ALS and conditions such as Traumatic Brain Injuries.",
  icons: {
    icon: [
      {
        url: "https://media-hosting.imagekit.io/6c307bbea4094c1f/Logo%20Monograma%20Iniciales%20Licenciada%20Marketing%20Minimalista%20Rosa-2.png?Expires=1838852535&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=MzSdx3LoFsoqHexquiZeEpyKHXEqecd1RDWOS77zbq7ZIfLvMN4HQdsPp6H8vm~JG4euiFzk8lGg7bvuTugk-n42bV-n-TQcSOjFFRklhfetje3yaJJA~5Rn7cfXhlRTe-lWQUExKBAQigHPZ-6KJV4hQueut6pBhtIuABZpr-JP199~iOtrR0AarvZNKk~5-JjJRdRs2vUd2b3L57aI2i0mFwsB2bqwgJwRnX7iLa9NO5FdE4ECQq~BSkgqCJrCy~jhdLESc8MdpFpitksdTo16hQuQxufdrWleENLmzatel5Ye3ifVrFRKu-HE7ODy8cL63Vvi1SmlMPqq3gyUYw__",
        type: "image/png",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
