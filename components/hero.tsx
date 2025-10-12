import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex flex-col justify-center items-center text-center px-4">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.7)), url('https://picsum.photos/seed/luxurycar/1920/1080.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.1)_0%,rgba(10,10,10,0.8)_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#00ff88] tracking-wider uppercase animate-pulse drop-shadow-[0_0_30px_rgba(0,255,136,0.8)]">
          Elite Detailing
        </h1>
        <p className="text-2xl md:text-3xl mb-8 text-[#f0f0f0]">Premium Mobile Car Care Services</p>
        <Link href="#contact">
          <Button
            size="lg"
            className="bg-[#00ff88] text-[#0a0a0a] hover:bg-[#00cc6a] font-bold uppercase tracking-wider rounded-full px-8 py-6 text-lg shadow-[0_5px_15px_rgba(0,255,136,0.3)] hover:shadow-[0_8px_20px_rgba(0,255,136,0.4)] hover:-translate-y-1 transition-all"
          >
            Book Now
          </Button>
        </Link>
      </div>
    </section>
  )
}
