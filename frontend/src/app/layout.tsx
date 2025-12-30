import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Together - Conectando Pessoas',
  description: 'Rede social focada em conexões por interesses e atividades em comum',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
