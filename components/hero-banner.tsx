"use client"

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useCallback } from "react"
import { sitePath } from "@/lib/site-path"

const bannerSlides = [

  {
    id: 1,
    image: "/images/1.avif",
    title: "Entrega Rápida",
    subtitle: "Em até 24 horas na sua obra",
  },
  {
    id: 2,
    image: "/images/2.avif",
    title: "Aluguel de Caçambas",
    subtitle: "Para obra, reforma ou limpeza",
  },
  {
    id: 3,
    image: "/images/3.avif",
    title: "Atendimento Profissional",
    subtitle: "Equipe pronta para sua demanda",
  },
  {
    id: 4,
    image: "/images/1.avif",
    title: "Solução Em Entulho",
    subtitle: "Serviço rápido, limpo e seguro",
  },
  {
    id: 5,
    image: "/images/2.avif",
    title: "Caçambas Para Toda Obra",
    subtitle: "Tamanhos ideais para cada projeto",
  },
  {
    id: 6,
    image: "/images/3.avif",
    title: "Atendimento Profissional",
    subtitle: "Equipe pronta para sua demanda",
  },
]

export function HeroBanner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section id="inicio" className="relative pt-16 md:pt-20">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {bannerSlides.map((slide) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0">
              <div className="h-[300px] md:h-[450px] lg:h-[500px] relative overflow-hidden">
                <Image
                  src={sitePath(slide.image)}
                  alt={slide.title}
                  fill
                  className="object-cover scale-110 blur-sm"
                  sizes="100vw"
                  priority={slide.id === 1}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/20" />
                <div className="relative z-10 h-full flex items-center justify-center text-white px-4">
                  <div className="text-center max-w-3xl rounded-3xl px-6 py-5 md:px-10 md:py-7">
                    <h1
                      className="text-3xl md:text-5xl lg:text-6xl font-bold text-balance"
                      style={{
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.75)',
                      }}
                    >
                      {slide.title}
                    </h1>
                    <p
                      className="mt-4 text-lg md:text-xl lg:text-2xl opacity-90 text-balance"
                      style={{
                        textShadow: '0 2px 3px rgba(0, 0, 0, 0.7)',
                      }}
                    >
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-20"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-20"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
      </button> */}
    </section>
  )
}
