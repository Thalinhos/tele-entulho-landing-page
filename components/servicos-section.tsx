"use client"

import { Hammer, Building2, Trees, Wrench, Factory } from "lucide-react"

const services = [
  { icon: Hammer, t: "Reforma Residencial", d: "Caçambas para reformas de casas e apartamentos de todos os tamanhos." },
  { icon: Building2, t: "Construção Civil", d: "Atendemos construtoras e empreiteiras com caçambas de grande porte." },
  { icon: Trees, t: "Limpeza de Terreno", d: "Remoção de entulho, terra e resíduos de limpeza de terrenos." },
  { icon: Wrench, t: "Demolição", d: "Caçambas especiais para resíduos de demolição e desmonte." },
  { icon: Building2, t: "Manutenção Predial", d: "Serviço para condomínios e empresas de manutenção predial." },
  { icon: Factory, t: "Indústria", d: "Soluções para descarte de resíduos industriais não perigosos." },
]

export function ServicosSection() {
  const WHATSAPP_BASE = "https://wa.me/5551999970887"

  return (
    <section id="servicos" className="py-24 md:py-32 bg-ink text-cream">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Serviços</span>
            <h2 className="text-4xl md:text-6xl mt-4 text-cream max-w-2xl">Para cada tipo de obra, a caçamba certa.</h2>
          </div>
          <a href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Olá! Gostaria de um orçamento de caçamba.")}`} target="_blank" rel="noreferrer" className="text-sm font-semibold border-b-2 border-primary pb-1 hover:text-primary transition-colors w-fit">
            Falar com especialista →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-cream/10">
          {services.map(({ icon: Icon, t, d }, i) => {
            const msg = encodeURIComponent(`Olá! Gostaria de um orçamento para: ${t}`)
            const href = `${WHATSAPP_BASE}?text=${msg}`
            return (
              <a key={t} href={href} target="_blank" rel="noreferrer" className="group block">
                <div className="bg-ink p-8 hover:bg-primary hover:text-primary-foreground transition-colors">
                  <div className="flex items-start justify-between">
                    <Icon className="w-8 h-8 text-primary group-hover:text-ink transition-colors" strokeWidth={1.5} />
                    <span className="font-display text-xs text-cream/40 group-hover:text-ink/60">0{i + 1}</span>
                  </div>
                  <h3 className="mt-8 text-xl text-cream group-hover:text-ink">{t}</h3>
                  <p className="mt-3 text-sm text-cream/60 group-hover:text-ink/80 leading-relaxed">{d}</p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
