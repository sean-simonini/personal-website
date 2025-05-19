import Link from "next/link"
import { Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t text-center">
      <div className="max-w-5xl mx-auto px-4 py-12 md:px-8">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Sean Simonini. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://www.linkedin.com/in/seanrsimonini/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="mailto: seanrsimonini{(at)}gmail{dot}com"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
