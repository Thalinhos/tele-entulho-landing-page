import { Truck, Phone, Mail, MapPin, AtSign } from "lucide-react"
import Link from "next/link"

const quickLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
  { href: "#sobre", label: "Sobre Nós" },
]

// const legalLinks = [
//   { href: "#", label: "Termos de Uso" },
//   { href: "#", label: "Política de Privacidade" },
//   { href: "#", label: "Política de Cookies" },
// ]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo e descrição */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Truck className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary">Entulho Fácil</span>
              </div>
            </Link>
            <p className="text-background/70 text-sm mb-4">
              Especializados em aluguel de caçambas para obras, reformas e limpezas. 
              Atendimento de qualidade e preço justo.
            </p>
            <p className="text-background/70 text-sm">
              Atendendo com excelência desde 2014
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold text-background mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="text-primary">+</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div className="text-sm">
                  <p className="text-background/70">(51) 3407-2987</p>
                  <p className="text-background/70">(51) 9997-0887</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <p className="text-background/70 text-sm">mbsentulho@hotmail.com</p>
              </li>
              <li className="flex items-start gap-2">
                <AtSign className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <p className="text-background/70 text-sm">mbsentulho@hotmail.com</p>
              </li>
            </ul>
          </div>

          {/* Dados da Empresa */}
          <div>
            <h4 className="font-semibold text-background mb-4">Dados da Empresa</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <strong className="text-background/90">Razão Social:</strong><br />
                MBS Entulhos Ltda
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>
                  Rua Trópicos, 149 , Porto Alegre, RS, Brasil
                </span>
              </li>
              <li>
                <strong className="text-background/90">Horário:</strong><br />
                Seg-Sáb: 08:00 - 18:00
              </li>
            </ul>

            {/* Legal Links */}
            {/* <div className="mt-6">
              <h5 className="font-semibold text-background mb-2 text-sm">Legal</h5>
              <ul className="space-y-1">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-background/70 hover:text-primary transition-colors text-xs flex items-center gap-1"
                    >
                      <span className="text-primary">+</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-background/50">
            <p>&copy; {new Date().getFullYear()} MBS Entulhos. Todos os direitos reservados.</p>
            <p>CNPJ: 21.338.754/0001-26</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
