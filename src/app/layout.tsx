import type { Metadata } from 'next'
import { Inter, Dancing_Script } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const dancingScript = Dancing_Script({ 
  subsets: ['latin'], 
  variable: '--font-elegant',
  display: 'swap'
})

export const metadata: Metadata = {
  title: '15 Años de Isabella Rocío Tejada',
  description: 'Invitación a los 15 años de Isabella Rocío Tejada - 15 de Noviembre en Salón Alcazar',
  keywords: '15 años, quinceañera, Isabella Tejada, Punta Alta, invitación',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={dancingScript.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}