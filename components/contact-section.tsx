"use client"

import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const whatsappNumber = "555199970887" // Substitua pelo número real
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para aluguel de caçamba.")

  return (
    <section id="contato" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Título */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Entre em Contato
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Solicite um orçamento sem compromisso. Respondemos rapidamente!
            </p>
          </div>

          {/* Cards de contato */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Telefone */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                <p className="text-muted-foreground text-lg">(51) 3407-2987</p>
                <p className="text-muted-foreground text-lg">(51) 99997-0887</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                <p className="text-muted-foreground text-lg">mbsentulho@hotmail.com</p>
              </div>
            </div>

            {/* Endereço */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                <p className="text-muted-foreground">
                  Rua Trópicos, 149 , Porto Alegre, RS, Brasil<br />
                </p>
              </div>
            </div>

            {/* Horário */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Horário</h3>
                <p className="text-muted-foreground">
                  Seg-Sex: 09:00 - 18:00<br />
                </p>
              </div>
            </div>
          </div>

          {/* Botão WhatsApp */}
          <div className="flex justify-center">
            <Button
              size="sm"
              className="bg-green-500 hover:bg-green-600 text-white font-bold text-sm md:text-base px-6 py-4 md:px-8 md:py-6 rounded-full shadow-lg whitespace-normal text-center h-auto min-h-0"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 leading-tight"
              >
                <MessageCircle className="w-5 h-5 md:w-5 md:h-5 shrink-0" />
                <span>Solicitar Orçamento via WhatsApp</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
