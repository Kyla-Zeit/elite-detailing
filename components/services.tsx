import { Sparkles, Church as Couch, Shield, Wand2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Sparkles,
    title: "Exterior Detailing",
    description:
      "Complete exterior wash, clay bar treatment, paint correction, and ceramic coating application for a showroom finish.",
  },
  {
    icon: Couch,
    title: "Interior Detailing",
    description:
      "Deep cleaning of upholstery, carpets, dashboard, and all interior surfaces. We restore that new car feeling.",
  },
  {
    icon: Shield,
    title: "Paint Protection",
    description:
      "Professional ceramic coating and paint protection film installation to preserve your vehicle's finish.",
  },
  {
    icon: Wand2,
    title: "Complete Detail",
    description:
      "Our comprehensive package combining all exterior and interior services for the ultimate transformation.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#00ff88] uppercase tracking-wider">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-[#1a1a1a] border-[#00ff88]/20 hover:border-[#00ff88] transition-all hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,255,136,0.2)]"
            >
              <CardHeader className="text-center">
                <service.icon className="w-12 h-12 mx-auto mb-4 text-[#00ff88]" />
                <CardTitle className="text-xl text-[#f0f0f0]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#a0a0a0] leading-relaxed text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
