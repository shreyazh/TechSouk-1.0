import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="bg-teal-800 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">TechSouk</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/solutions">Solutions</Link></li>
            <li><Link href="/experts">Experts</Link></li>
            <li><Link href="/success-stories">Success Stories</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
        <Button variant="outline" className="text-white border-white hover:bg-teal-700">Get Started</Button>
      </div>
    </header>
  )
}

