import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Experience OxyForest Trails?</h2>
        <p className="text-xl mb-8">Invest in your future. Live in harmony with nature.</p>
        <Button size="lg" variant="default">Schedule a Visit</Button>
      </div>
    </section>
  )
}

