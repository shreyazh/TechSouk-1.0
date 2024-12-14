import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TechSouk - Empowering Algerian Businesses',
  description: 'A hub for Algerian businesses to access cutting-edge technology solutions and drive digital transformation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-100">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

