import Link from "next/link"
import { Linkedin, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden mb-8">
            <img
              src="https://kypvuzcntmcqdlg6.public.blob.vercel-storage.com/IMG_6165%20-%20Edited-a9fpTwyAiUkZYYD6pKFoX2aWDwOLUT.jpg"
              alt="Sean Simonini"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="space-y-6 max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Sean Simonini</h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-700">Neuroscience and Biotechnology Policy</h2>
            <p className="text-base md:text-lg text-gray-600">
              Working on regenerative therapies for patients suffering from neurodegenerative diseases such as ALS and
              conditions such as Traumatic Brain Injuries.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="https://www.linkedin.com/in/seanrsimonini/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-gray-600 transition-colors"
              >
                <Linkedin size={18} />
                <span>linkedin.com/in/seanrsimonini</span>
              </Link>
              <div className="flex items-center gap-2 text-sm">
                <Mail size={18} />
                <span>
                  seanrsimonini {"{at}"} gmail {"{dot}"} com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
