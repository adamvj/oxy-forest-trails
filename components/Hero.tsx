export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=80')"}}
      />
      <div className="absolute inset-0 bg-primary/30 z-10" />
      <div className="relative z-20 max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-6">
          Welcome to Oxy-Forest Trails
        </h1>
        <p className="text-xl text-white mb-8">
          Experience sustainable living in the heart of Wayanad's lush landscapes.
          Invest in nature, invest in your future.
        </p>
       </div>
    </section>
  )
}

