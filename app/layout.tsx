import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Entulho Fácil - Aluguel de Caçambas',
  description: 'Aluguel de caçambas para entulho em sua região. Serviço rápido, preço justo e atendimento de qualidade.',
  generator: 'v0.app',
  icons: {
    icon: '/images/logo-icon.png',
    apple: '/images/logo-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${roboto.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
