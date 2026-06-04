import { Header } from "@/components/header"
import { HeroBanner } from "@/components/hero-banner"
import { AboutSection } from "@/components/about-section"
import { HeroCarousel } from "@/components/hero-carousel"
import { ProcessSection } from "@/components/process-section"
import { ServicosSection } from "@/components/servicos-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroBanner />
      <HeroCarousel />
      <AboutSection />
      <ProcessSection />
      <ServicosSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
