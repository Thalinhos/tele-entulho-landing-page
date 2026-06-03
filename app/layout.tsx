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
  title: 'MBS Entulhos - Aluguel de Caçambas para Entulho',
  description: 'Aluguel de caçambas para entulho em sua região. Serviço rápido, preço justo e atendimento de qualidade.',
  icons: {
    icon: '/images/photo-about.png',
    apple: '/images/photo-about.png',
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
