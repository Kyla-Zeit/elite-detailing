import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    text: "Elite Detailing transformed my 5-year-old SUV into something that looks brand new. The attention to detail is incredible, and the convenience of their mobile service is unmatched.",
    author: "Michael Johnson",
    role: "Luxury SUV Owner",
    image: "https://picsum.photos/seed/person1/50/50.jpg",
  },
  {
    text: "I've tried many detailing services before, but Elite Detailing is on another level. The ceramic coating they applied has made maintaining my sports car so much easier. Highly recommend!",
    author: "Sarah Williams",
    role: "Sports Car Enthusiast",
    image: "https://picsum.photos/seed/person2/50/50.jpg",
  },
  {
    text: "As a busy professional, I appreciate how Elite Detailing comes to my office. They're always on time, incredibly thorough, and my car looks better than when I bought it. Worth every penny!",
    author: "David Chen",
    role: "Business Executive",
    image: "https://picsum.photos/seed/person3/50/50.jpg",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 px-4 bg-[#1a1a1a]">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#00ff88] uppercase tracking-wider">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-[#0a0a0a] border-[#00ff88]/10 relative overflow-hidden">
              <div className="absolute top-2 left-4 text-8xl text-[#00ff88] opacity-20 font-serif">&ldquo;</div>
              <CardContent className="pt-16 pb-6 px-6">
                <p className="text-[#a0a0a0] leading-relaxed italic mb-6">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="text-[#00ff88] font-bold">{testimonial.author}</h4>
                    <p className="text-[#a0a0a0] text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
