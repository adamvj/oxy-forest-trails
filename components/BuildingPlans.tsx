'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const plans = [
  { 
    name: "Evergreen Cottage", 
    size: "1200 sq ft", 
    bedrooms: 2, 
    description: "A cozy retreat perfect for small families or couples.",
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=800&h=600&q=80"
  },
  { 
    name: "Banyan Villa", 
    size: "1800 sq ft", 
    bedrooms: 3, 
    description: "Spacious living with a perfect blend of indoor and outdoor spaces.",
    image: "https://images.unsplash.com/photo-1520608760-eff2c44afa2b?auto=format&fit=crop&w=800&h=600&q=80"
  },
  { 
    name: "Teak Mansion", 
    size: "2500 sq ft", 
    bedrooms: 4, 
    description: "Luxurious living with panoramic views of the surrounding nature.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&h=600&q=80"
  },
  { 
    name: "Bamboo Bungalow", 
    size: "1500 sq ft", 
    bedrooms: 2, 
    description: "Eco-friendly design with a modern twist.",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&h=600&q=80"
  },
  { 
    name: "Cedar Heights", 
    size: "2200 sq ft", 
    bedrooms: 3, 
    description: "Elevated living with treetop views and spacious balconies.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&h=600&q=80"
  }
]

export default function BuildingPlans() {
  const [selectedPlan, setSelectedPlan] = useState('plan-0')

  return (
    <section id="plans" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Choose Your Dream Home</h2>
        
        {/* Mobile view: Dropdown */}
        <div className="md:hidden mb-8">
          <Select onValueChange={(value) => setSelectedPlan(value)} defaultValue={selectedPlan}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a home" />
            </SelectTrigger>
            <SelectContent>
              {plans.map((plan, index) => (
                <SelectItem key={index} value={`plan-${index}`}>{plan.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Desktop view: Tabs */}
        <div className="hidden md:block">
          <Tabs value={selectedPlan} onValueChange={setSelectedPlan} className="w-full">
            <TabsList className="flex flex-wrap justify-center mb-8">
              {plans.map((plan, index) => (
                <TabsTrigger 
                  key={index} 
                  value={`plan-${index}`}
                  className="px-4 py-2 m-1"
                >
                  {plan.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Content */}
        {plans.map((plan, index) => (
          <div key={index} className={selectedPlan === `plan-${index}` ? 'block' : 'hidden'}>
            <Card className="bg-white transition-all duration-300 ease-in-out hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-primary">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{plan.size} | {plan.bedrooms} Bedrooms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <Image
                    src={plan.image}
                    alt={plan.name}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                  <div>
                    <p className="mb-4 text-foreground">{plan.description}</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Sustainable materials</li>
                      <li>Energy-efficient design</li>
                      <li>Smart home features</li>
                      <li>Large windows for natural light</li>
                      <li>Private garden space</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}

