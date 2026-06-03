"use client"

import { Wrench, Building2, Trash2, HardHat, Home, Factory } from "lucide-react"

const servicos = [
  {
    icon: Home,
    titulo: "Reforma Residencial",
    descricao: "Caçambas para reformas de casas e apartamentos de todos os tamanhos.",
  },
  {
    icon: Building2,
    titulo: "Construção Civil",
    descricao: "Atendemos construtoras e empreiteiras com caçambas de grande porte.",
  },
  {
    icon: Trash2,
    titulo: "Limpeza de Terreno",
    descricao: "Remoção de entulho, terra e resíduos de limpeza de terrenos.",
  },
  {
    icon: HardHat,
    titulo: "Demolição",
    descricao: "Caçambas especiais para resíduos de demolição e desmonte.",
  },
  {
    icon: Wrench,
    titulo: "Manutenção Predial",
    descricao: "Serviço para condomínios e empresas de manutenção predial.",
  },
  {
    icon: Factory,
    titulo: "Indústria",
    descricao: "Soluções para descarte de resíduos industriais não perigosos.",
  },
]

export function ServicosSection() {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Oferecemos soluções completas para descarte de entulho em diversos segmentos
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicos.map((servico) => (
            <div
              key={servico.titulo}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-start justify-between gap-4 mb-2 md:mb-4">
                <h3 className="text-lg font-semibold text-foreground leading-tight">
                  {servico.titulo}
                </h3>
                <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <servico.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                {servico.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
