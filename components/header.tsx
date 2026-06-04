import Link from "next/link"
import { Clock, MapPin, Phone } from "lucide-react"

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#tamanhos", label: "Caçambas" },
  { href: "#contato", label: "Contato" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background hairline">
      <div className="bg-ink text-cream text-[0.72rem]">
        <div className="container flex items-center justify-between py-2.75">
          <div className="flex items-center gap-4">
            <span className="flex items-center text-xs md:text-sm gap-1.5 whitespace-nowrap leading-none">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              Seg–Sáb · 9h–18h
            </span>
            <span className="hidden items-center text-xs md:text-sm gap-1.5 whitespace-nowrap leading-none sm:flex">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Porto Alegre, RS
            </span>
          </div>

          <a href="tel:+555199970887" className="flex text-xs md:text-sm items-center gap-1.5 whitespace-nowrap leading-none transition-colors hover:text-primary">
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            (51) 99997-0887
          </a>
        </div>
      </div>

      <div className="bg-background">
        <div className="container flex h-17.75 items-center justify-between">
          <a href="#" className="flex items-baseline gap-2">
            <span className="font-display text-[1.3rem] md:text-[1.4rem] leading-none">MBS</span>
            <span className=" text-xs md:text-[0.80rem] uppercase tracking-[0.2em] text-muted-foreground">Entulhos</span>
          </a>

          <nav className="hidden items-center gap-8 text-[1.03rem] font-medium md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href="https://wa.me/5551999970887?text=Ol%C3%A1%21%20Gostaria%20de%20um%20or%C3%A7amento%20de%20ca%C3%A7amba."
            target="_blank"
            rel="noreferrer"
            className="bg-primary px-1.5 text-[0.8rem] md:text-[0.9rem] md:px-6.5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-ink hover:text-cream"
          >
            Pedir Orçamento
          </a>
        </div>
      </div>
    </header>
  )
}
