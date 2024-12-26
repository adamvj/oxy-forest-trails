import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">OxyForest Trails</h3>
            <p className="text-muted-foreground">Sustainable living in the heart of Wayanad, Kerala.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="#layout" className="text-muted-foreground hover:text-primary transition-colors">Layout</Link></li>
              <li><Link href="#plans" className="text-muted-foreground hover:text-primary transition-colors">Building Plans</Link></li>
              <li><Link href="#amenities" className="text-muted-foreground hover:text-primary transition-colors">Amenities</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Contact Us</h3>
            <p className="text-muted-foreground">Email: info@oxyforesttrails.com</p>
            <p className="text-muted-foreground">Phone: +91 123 456 7890</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          © {new Date().getFullYear()} OxyForest Trails. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

