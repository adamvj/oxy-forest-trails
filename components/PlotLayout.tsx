import Image from 'next/image'

export default function PlotLayout() {
  return (
    <section id="layout" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">OxyForest Trails Layout</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <Image
            src="https://s3.amazonaws.com/conservationtools-production/ckeditor-uploads/images/123/content_g_natareasdelineation.jpg"
            alt="Blueprint of OxyForest Trails Layout"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg"
          />
          <p className="mt-4 text-center text-muted-foreground">
            Our thoughtfully designed layout features cottages along the outer perimeter, 
            with a central kitchen and fitness center at the heart of the community. 
            Scenic walking trails weave through the forest, connecting all areas of the resort.
          </p>
        </div>
      </div>
    </section>
  )
}

