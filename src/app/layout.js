import 'bootstrap/dist/css/bootstrap.css';
import './globals.scss'


import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Samuel Máximo',
  description: 'Samuel Máximo is a programmer...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
