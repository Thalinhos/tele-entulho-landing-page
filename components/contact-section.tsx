"use client"

import { Clock, Mail, MapPin, MessageCircle, Send } from "lucide-react"

export function ContactSection() {
  const whatsappBase = "https://wa.me/5551999970887"

  return (
    <section id="contato" className="py-24 md:py-32 bg-background text-foreground">
      <div className="container">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Contato</span>
            <h2 className="text-4xl md:text-6xl mt-4">Vamos falar.</h2>
            <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
              Solicite um orçamento sem compromisso. Atendimento direto, sem intermediário.
            </p>

            <div className="mt-10 divide-y divide-border border-y border-border">
              <Info icon={Mail} label="E-mail" lines={ ["mbsentulho@hotmail.com"] } />
              <Info icon={MapPin} label="Endereço" lines={["Rua Trópicos, 149", "Porto Alegre, RS"]} />
              <Info icon={Clock} label="Horário" lines={["Seg–Sex: 9h – 18h", "Sábado: 9h – 13h"]} />
            </div>
          </div>

          <form
            className="bg-ink text-cream p-8 md:p-10 space-y-5"
            onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.currentTarget)
              const nome = String(formData.get("nome") ?? "").trim()
              const endereco = String(formData.get("endereco") ?? "").trim()
              const mensagem = String(formData.get("mensagem") ?? "").trim()

              const parts = [
                "Olá! Gostaria de solicitar um orçamento para aluguel de caçamba.",
                nome ? `Nome: ${nome}` : null,
                endereco ? `Endereço da obra: ${endereco}` : null,
                mensagem ? `Mensagem: ${mensagem}` : null,
              ].filter(Boolean)

              const whatsappHref = `${whatsappBase}?text=${encodeURIComponent(parts.join("\n"))}`
              window.open(whatsappHref, "_blank")
            }}
          >
            <div className="flex items-center gap-3 text-primary">
              <Send className="w-5 h-5" />
              <h3 className="text-2xl text-cream">Peça seu orçamento</h3>
            </div>
            <Field name="nome" label="Nome" placeholder="Seu nome completo" />
            <Field name="endereco" label="Endereço da obra" placeholder="Rua, bairro, cidade" />
            <div>
              <label className="text-xs uppercase tracking-widest text-cream/60">Mensagem</label>
              <textarea
                name="mensagem"
                rows={4}
                placeholder="Tipo de obra, tamanho desejado..."
                className="mt-2 w-full bg-transparent border border-cream/20 px-4 py-3 text-cream placeholder:text-cream/30 focus:border-primary focus:outline-none"
              />
            </div>
            <button type="submit" className="w-full cursor-pointer bg-primary text-primary-foreground py-4 font-semibold hover:bg-cream transition-colors inline-flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Enviar via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Info({ icon: Icon, label, lines }: { icon: typeof Mail; label: string; lines: string[] }) {
  return (
    <div className="flex gap-5 py-5">
      <Icon className="w-5 h-5 text-primary mt-1 shrink-0" strokeWidth={1.5} />
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        {lines.map((line) => (
          <div key={line} className="text-base text-foreground">
            {line}
          </div>
        ))}
      </div>
    </div>
  )
}

function Field({ name, label, placeholder }: { name: string; label: string; placeholder: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-cream/60">{label}</label>
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        className="mt-2 w-full bg-transparent border border-cream/20 px-4 py-3 text-cream placeholder:text-cream/30 focus:border-primary focus:outline-none"
      />
    </div>
  )
}
