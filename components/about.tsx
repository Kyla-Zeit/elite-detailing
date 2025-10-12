import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#00ff88] uppercase tracking-wider">
          About Elite Detailing
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="flex-1 rounded-lg overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <Image
              src="https://picsum.photos/seed/detailingteam/600/400.jpg"
              alt="Elite Detailing Team"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-[#00ff88]">Passion for Perfection</h3>
            <p className="text-[#a0a0a0] leading-relaxed">
              At Elite Detailing, we&apos;re not just car enthusiasts – we&apos;re perfectionists dedicated to
              preserving and enhancing the beauty of your vehicle. With years of experience in the automotive detailing
              industry, our team combines technical expertise with premium products to deliver exceptional results.
            </p>
            <p className="text-[#a0a0a0] leading-relaxed">
              Our mobile detailing service brings professional-grade car care directly to your location, whether at home
              or work. We use only the finest products and techniques to ensure your vehicle receives the treatment it
              deserves.
            </p>
            <p className="text-[#a0a0a0] leading-relaxed">
              From daily drivers to luxury vehicles, we treat every car with the same level of care and attention to
              detail, because we believe every vehicle deserves to look its best.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
