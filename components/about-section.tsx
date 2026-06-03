import Image from "next/image"
import { Clock, Shield, Recycle, Truck } from "lucide-react"

const beneficios = [
  {
    icon: Truck,
    titulo: "Entrega Rápida",
    descricao: "Entregamos a caçamba em até 24 horas após a confirmação do pedido",
  },
  {
    icon: Clock,
    titulo: "Atendimento Comercial",
    descricao: "Disponíveis para atender você de Segunda a Sábado, das 9h às 18h, para tirar dúvidas e realizar orçamentos",
  },
  {
    icon: Shield,
    titulo: "Empresa Licenciada",
    descricao: "Todas as licenças ambientais em dia para descarte correto do entulho",
  },
  {
    icon: Recycle,
    titulo: "Descarte Responsável",
    descricao: "Destinação correta dos resíduos seguindo todas as normas ambientais",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Imagem/Visual */}
          <div className="relative">
            <div className="aspect-square w-full max-w-2xl mx-auto lg:max-w-4xl overflow-hidden bg-transparent">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/40 via-transparent to-amber-50/40" />
              <div className="absolute inset-0 flex items-center justify-center p-1 md:p-2">
                <div className="relative w-full h-full max-w-xl max-h-xl">
                  <Image
                    src="/images/photo-about.png"
                    alt="MBS Entulhos"
                    fill
                    className="object-contain p-0 drop-shadow-lg"
                    sizes="(max-width: 1024px) 100vw, 840px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div>
            <span className="text-primary font-semibold text-sm md:text-base uppercase tracking-wider">
              Sobre Nós
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mt-2 mb-6 text-balance">
              ENTULHO FÁCIL
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                A Entulho Fácil nasceu da necessidade de oferecer um serviço de qualidade 
                para quem precisa descartar entulho de obras e reformas.
              </p>
              <p>
                Com mais de 10 anos de experiência no mercado, nos tornamos referência 
                em aluguel de caçambas na região, sempre priorizando a satisfação do cliente 
                e o respeito ao meio ambiente.
              </p>
              <p>
                Contamos com uma frota moderna e equipe treinada para atender sua demanda 
                com agilidade e eficiência. Trabalhamos com caçambas de diversos tamanhos 
                para atender desde pequenas reformas até grandes construções.
              </p>
              <p className="font-semibold text-foreground">
                Equipe Entulho Fácil
              </p>
            </div>

            {/* Benefícios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {beneficios.map((beneficio) => (
                <div key={beneficio.titulo} className="flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <beneficio.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{beneficio.titulo}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{beneficio.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
