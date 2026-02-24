import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Divisions } from "@/components/divisions"
import { WhyChoose } from "@/components/why-choose"
import { CaseStudies } from "@/components/case-studies"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Divisions />
      <WhyChoose />
      <CaseStudies />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
