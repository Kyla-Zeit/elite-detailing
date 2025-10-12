"use client"

import { useState } from "react"
import Image from "next/image"

const galleryItems = [
  {
    src: "https://picsum.photos/seed/cardetail1/400/300.jpg",
    title: "Exterior Restoration",
    description: "Before: Scratches and dull finish",
  },
  {
    src: "https://picsum.photos/seed/cardetail2/400/300.jpg",
    title: "Exterior Restoration",
    description: "After: Mirror-like shine and protection",
  },
  {
    src: "https://picsum.photos/seed/cardetail3/400/300.jpg",
    title: "Interior Deep Clean",
    description: "Before: Stained seats and dirty carpets",
  },
  {
    src: "https://picsum.photos/seed/cardetail4/400/300.jpg",
    title: "Interior Deep Clean",
    description: "After: Pristine interior like new",
  },
  {
    src: "https://picsum.photos/seed/cardetail5/400/300.jpg",
    title: "Ceramic Coating",
    description: "Long-lasting protection and hydrophobic properties",
  },
  {
    src: "https://picsum.photos/seed/cardetail6/400/300.jpg",
    title: "Engine Bay Detailing",
    description: "Professional engine cleaning and dressing",
  },
]

export function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-20 md:py-28 px-4 bg-[#1a1a1a]">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#00ff88] uppercase tracking-wider">
          Our Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setLightboxImage(item.src)}
            >
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-[#00ff88] font-bold mb-1">{item.title}</h3>
                <p className="text-[#f0f0f0] text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative w-full max-w-4xl aspect-video">
            <Image
              src={lightboxImage || "/placeholder.svg"}
              alt="Gallery image"
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
}
