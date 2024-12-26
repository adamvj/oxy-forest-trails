'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Oxy-Forest Trails
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link>
            <Link href="#layout" className="text-muted-foreground hover:text-primary transition-colors">Layout</Link>
            <Link href="#plans" className="text-muted-foreground hover:text-primary transition-colors">Plans</Link>
            <Link href="#amenities" className="text-muted-foreground hover:text-primary transition-colors">Amenities</Link>
            <Link 
              href="https://wa.me/919846220534" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/90 h-10 px-4 py-2"
            >
              Contact Us
            </Link>
          </div>
          <button className="md:hidden z-20" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4 absolute top-full left-0 right-0 bg-white p-4 z-10 border-b border-border">
            <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link>
            <Link href="#layout" className="text-muted-foreground hover:text-primary transition-colors">Layout</Link>
            <Link href="#plans" className="text-muted-foreground hover:text-primary transition-colors">Plans</Link>
            <Link href="#amenities" className="text-muted-foreground hover:text-primary transition-colors">Amenities</Link>
            <Link 
              href="https://wa.me/919846220534" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/90 h-10 px-4 py-2"
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

