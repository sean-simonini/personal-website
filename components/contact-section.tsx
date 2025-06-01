import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20">
      <div className="space-y-4 mb-8 text-center">
        <h2 className="text-3xl font-bold">Get In Touch</h2>
        <div className="w-20 h-1 bg-gray-900 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="text-center md:text-left">
          <p className="text-lg mb-6">
            Feel free to reach out if you're interested in my research, community initiatives, or potential
            collaborations.
          </p>

          <div className="space-y-4 mt-8">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="bg-gray-100 p-3 rounded-full">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p>
                  seanrsimonini {"{at}"} gmail {"{dot}"} com
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="bg-gray-100 p-3 rounded-full">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/seanrsimonini/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/seanrsimonini
                </a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="bg-gray-100 p-3 rounded-full">
                <img
                  src="https://substackcdn.com/image/fetch/w_80,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack.com%2Fimg%2Fsubstack.png"
                  alt="Substack"
                  className="h-5 w-5 filter grayscale"
                />
              </div>
              <div>
                <p className="text-sm text-gray-500">Substack</p>
                <a
                  href="https://seansimonini.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  seansimonini.substack.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form className="space-y-4">
            <div>
              <Input type="text" placeholder="Name" className="w-full" />
            </div>
            <div>
              <Input type="email" placeholder="Email" className="w-full" />
            </div>
            <div>
              <Input type="text" placeholder="Subject" className="w-full" />
            </div>
            <div>
              <Textarea placeholder="Message" className="w-full min-h-[120px]" />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
