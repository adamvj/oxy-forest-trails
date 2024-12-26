import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import PlotLayout from '@/components/PlotLayout'
import BuildingPlans from '@/components/BuildingPlans'
import Amenities from '@/components/Amenities'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <PlotLayout />
        <BuildingPlans />
        <Amenities />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

