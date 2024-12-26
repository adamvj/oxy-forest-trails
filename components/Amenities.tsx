import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Utensils, TheaterIcon as Theatre, TreesIcon as Tree, Dumbbell, Coffee } from 'lucide-react'

const amenities = [
  { 
    name: "Central Kitchen & Restaurant", 
    description: "Farm-to-table dining experience", 
    icon: Utensils,
    image: "https://images.unsplash.com/photo-1466220549276-aef9ce186540?auto=format&fit=crop&w=800&h=600&q=80"
  },
  { 
    name: "Amphitheatre", 
    description: "Host community events and performances", 
    icon: Theatre,
    image: "https://images.unsplash.com/photo-1508997449629-303059a039c0?auto=format&fit=crop&w=800&h=600&q=80"
  },
  { 
    name: "Nature Trails", 
    description: "Explore the rich flora and fauna", 
    icon: Tree,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&h=600&q=80"
  },
  { 
    name: "Fitness Center", 
    description: "State-of-the-art equipment for your wellness", 
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&h=600&q=80"
  },
  { 
    name: "Community Center", 
    description: "Socialize and relax with your neighbors", 
    icon: Coffee,
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&h=600&q=80"
  }
]

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Lifestyle Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <Card key={index} className="bg-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img src={amenity.image} alt={amenity.name} className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <amenity.icon className="w-10 h-10 text-secondary mb-2" />
                <CardTitle className="text-primary">{amenity.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{amenity.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

