import Header from "@/components/header"
import Hero from "@/components/hero"
import ResearchSection from "@/components/research-section"
import CommunitySection from "@/components/community-section"
import SubstackSection from "@/components/substack-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="text-center">
        <Hero />
        <div className="max-w-5xl mx-auto px-4 py-16 md:px-8 space-y-24">
          <ResearchSection />
          <CommunitySection />
          <SubstackSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
