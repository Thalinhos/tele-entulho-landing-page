"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { sitePath } from "@/lib/site-path"

export function HeroBanner() {
  const image = sitePath("/images/1.avif")
  const WHATSAPP = "https://wa.me/5551999970887?text=Ol%C3%A1%21%20Gostaria%20de%20um%20or%C3%A7amento%20de%20ca%C3%A7amba."

  return (
    <section className="relative bg-ink text-cream overflow-hidden">
      <div className="absolute inset-0">
        <Image src={image} alt="hero" fill className="w-full h-full object-cover opacity-40" sizes="100vw" priority loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
      </div>

      <div className="relative container py-24 md:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 border border-primary text-primary px-3 py-1 text-xs uppercase tracking-[0.2em] mb-8">
            <span className="w-1.5 h-1.5 bg-primary" /> Entrega em até 24 horas
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-cream">
            Caçamba na obra <span className="text-primary">hoje.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-cream/70 max-w-xl leading-relaxed">
            Aluguel de caçambas para obras, reformas e demolições em Porto Alegre. Serviço rápido, limpo e licenciado.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="group bg-primary text-primary-foreground px-7 py-4 font-semibold inline-flex items-center gap-2 hover:bg-cream transition-colors">
              Solicitar agora <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#servicos" className="border border-cream/30 text-cream px-7 py-4 font-semibold hover:bg-cream hover:text-ink transition-colors">
              Ver serviços
            </a>
          </div>
          <div className="mt-4 text-sm text-cream/70">
            Entrega em até 24 horas para Porto Alegre · Atendimento Seg–Sáb 9h–18h
          </div>
        </div>
      </div>
    </section>
  )
}
