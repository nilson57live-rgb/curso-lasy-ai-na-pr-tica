import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LASY AI na Prática — Do Zero à Renda com Apps de Inteligência Artificial',
  description: 'Aprenda a criar e vender apps com IA usando a Lasy AI. Curso completo do zero à renda.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="font-inter antialiased">{children}</body>
    </html>
  )
}
