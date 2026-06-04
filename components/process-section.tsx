"use client"

const steps = [
  { n: "01", t: "Solicite", d: "Mande mensagem pelo WhatsApp com o endereço e o tamanho desejado." },
  { n: "02", t: "Confirme", d: "Recebe o orçamento na hora e confirma a entrega para o dia escolhido." },
  { n: "03", t: "Use", d: "Caçamba posicionada na sua obra em até 24h, pronta para uso." },
  { n: "04", t: "Retiramos", d: "Avisa quando terminar — retiramos e damos destino correto ao entulho." },
]

export function ProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Como funciona</span>
          <h2 className="text-4xl md:text-6xl mt-4 max-w-2xl">Simples assim. Do pedido à retirada.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {steps.map((step) => (
            <div key={step.n} className="bg-cream p-8">
              <div className="font-display text-6xl text-primary">{step.n}</div>
              <h3 className="mt-6 text-xl text-foreground">{step.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}