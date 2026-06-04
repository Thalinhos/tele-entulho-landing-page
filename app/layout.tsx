import type { Metadata } from 'next'
import { Archivo_Black, Inter } from 'next/font/google'
import './globals.css'
import { sitePath } from '@/lib/site-path'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
})

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-archivo-black',
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
    <html lang="pt-BR" className={`${inter.variable} ${archivoBlack.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
