import Image from "next/image"
import { Clock, ShieldCheck, Recycle, Truck } from "lucide-react"
import { sitePath } from "@/lib/site-path"

const features = [
  { icon: Truck, t: "Entrega Rápida", d: "Caçamba na sua obra em até 24h após a confirmação." },
  { icon: Clock, t: "Atendimento Direto", d: "Segunda a sábado, das 9h às 18h." },
  { icon: ShieldCheck, t: "Empresa Licenciada", d: "Todas as licenças e descarte responsável." },
  { icon: Recycle, t: "Descarte Correto", d: "Destinação responsável seguindo as normas." },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-background text-foreground">
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="w-full overflow-hidden bg-cream">
              <div className="relative h-72 md:h-[420px] lg:h-[540px] p-4 md:p-6 flex items-center justify-center">
                <Image
                  src={sitePath("/images/photo-about.png")}
                  fill
                  alt="Frota MBS"
                  className="object-contain p-2 md:p-4"
                  sizes="(max-width: 1024px) 100vw, 1200px"
                  priority
                />
              </div>
            </div>
          </div>

          <div>
            <span className="text-primary font-semibold text-sm md:text-base uppercase tracking-wider">Sobre nós</span>
            <h2 className="text-4xl md:text-6xl mt-4">12 anos limpando obras na região.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              A MBS Entulhos nasceu para oferecer um serviço de qualidade para quem precisa descartar entulho de obras e reformas. Frota moderna, equipe treinada e respeito pelo prazo do cliente.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {features.map(({ icon: Icon, t, d }) => (
                <div key={t} className="flex gap-4 items-start">
                  <Icon className="w-8 h-8 text-primary mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-semibold text-foreground">{t}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
