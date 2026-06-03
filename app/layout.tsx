import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { sitePath } from '@/lib/site-path'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'MBS Entulhos - Aluguel de Caçambas para Entulho',
  description: 'Aluguel de caçambas para entulho em sua região. Serviço rápido, preço justo e atendimento de qualidade.',
  icons: {
    icon: sitePath('/images/photo-about.png'),
    apple: sitePath('/images/photo-about.png'),
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
      </body>
    </html>
  )
}
