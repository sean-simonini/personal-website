"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Sean Simonini
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#research" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Research
            </Link>
            <Link href="#community" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Community
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Contact
            </Link>
            <Button variant="outline" size="sm" className="ml-4 bg-transparent" asChild>
              <a
                href="https://www.canva.com/design/DAG7LOd5YNg/phfa7Q4Pfn0lzFCjZy63dA/view?utm_content=DAG7LOd5YNg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hba2373b857"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 px-4 py-6 bg-white border-t">
            <Link
              href="#research"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
              onClick={toggleMenu}
            >
              Research
            </Link>
            <Link
              href="#community"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
              onClick={toggleMenu}
            >
              Community
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
              <a
                href="https://www.canva.com/design/DAG7LOd5YNg/phfa7Q4Pfn0lzFCjZy63dA/view?utm_content=DAG7LOd5YNg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hba2373b857"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
