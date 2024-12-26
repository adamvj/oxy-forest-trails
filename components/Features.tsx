import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TreesIcon as Tree, Leaf, Mountain, Shield, Home } from 'lucide-react'

const features = [
  {
    title: "Nature-Friendly",
    description: "Designed to coexist with Wayanad's rich biodiversity.",
    icon: Tree,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    title: "Sustainable Living",
    description: "Eco-friendly practices and materials for a greener future.",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    title: "Scenic Beauty",
    description: "Surrounded by breathtaking views of Kerala's landscape.",
    icon: Mountain,
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    title: "Peaceful Environment",
    description: "A tranquil oasis away from the hustle and bustle of city life.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&h=600&q=80"
  },
  {
    title: "Fully Managed",
    description: "Hassle-free living with our comprehensive management services.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1525113990976-399835c43838?auto=format&fit=crop&w=800&h=600&q=80"
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Why Choose OxyForest Trails?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <feature.icon className="w-10 h-10 text-secondary mb-2" />
                <CardTitle className="text-primary">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

