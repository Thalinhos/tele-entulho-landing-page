"use client"

const items = [
  "Reforma Residencial",
  "Construção Civil",
  "Demolição",
  "Limpeza de Terreno",
  "Indústria",
  "Manutenção Predial",
]

export function HeroCarousel() {
  const repeated = [...items, ...items, ...items]

  return (
    <div className="w-full overflow-hidden border-t border-b border-border bg-primary text-primary-foreground">
      <div className="container">
        <div className="relative">
          <div className="marquee whitespace-nowrap flex gap-12 py-3">
            {repeated.map((it, i) => (
              <span key={i} className="font-display text-sm uppercase tracking-widest inline-flex items-center gap-4">
                {it} <span className="text-primary-foreground/30">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .marquee { animation: scroll 30s linear infinite; }
        .marquee:hover { animation-play-state: paused; }
        @keyframes scroll { from { transform: translateX(0%); } to { transform: translateX(-33.333%); } }
      `}</style>
    </div>
  )
}
