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
            <Link
              href="https://seansimonini.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Substack"
            >
              <img
                src="https://substackcdn.com/image/fetch/w_80,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack.com%2Fimg%2Fsubstack.png"
                alt="Substack"
                className="w-5 h-5 filter grayscale"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
