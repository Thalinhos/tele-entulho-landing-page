import { Header } from "@/components/header"
import { HeroBanner } from "@/components/hero-banner"
import { AboutSection } from "@/components/about-section"
import { ServicosSection } from "@/components/servicos-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Header fixo */}
      <Header />
      
      {/* Hero Banner com carrossel */}
      <HeroBanner />
      
      {/* Seção Sobre Nós */}
      <AboutSection />

      {/* Seção de Serviços */}
      <ServicosSection />
      
      {/* Seção de Contato */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
