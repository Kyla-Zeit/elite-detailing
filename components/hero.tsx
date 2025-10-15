// components/hero.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { CSSProperties } from "react";

// Square logo artwork on black
import LogoBg from "@/public/bg2.png";

/**
 * Tweak these without touching the rest of the code.
 * - COVER_SCALE: scale up a bit to avoid letterboxing on ultra-wide screens.
 * - BG_OPACITY: how visible the artwork is behind the overlay.
 */
const COVER_SCALE = 1.25; // 1.0 = exact cover, 1.25 = zoom-in a touch
const BG_OPACITY = 0.40;  // 0.06–0.40 depending how loud you want it

export function Hero() {
  // Legibility overlay with a faint brand tint
  const overlay: CSSProperties = {
    background:
      "radial-gradient(ellipse at 50% 42%, rgba(0,255,136,0.10), rgba(0,0,0,0.55) 58%, rgba(0,0,0,0.82))"
  };

  return (
    <section
      id="home"
      className="relative h-[90vh] md:h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-black"
    >
      {/* Full-bleed image layer */}
      <div className="absolute inset-0">
        <Image
          src={LogoBg}
          alt=""
          priority
          fill
          // Cover = fill the area completely, cropping as needed (no letterboxing)
          className="object-cover"
          // Make the lines pop a bit and scale to avoid edges showing on ultra-wide
          style={{
            opacity: BG_OPACITY,
            transform: `scale(${COVER_SCALE})`,
            filter: "brightness(1.35) contrast(1.35) saturate(1.1)",
          }}
        />
      </div>

      {/* Overlay for readability */}
      <div aria-hidden className="absolute inset-0" style={overlay} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
<h1
  className="ed-title font-black mb-6 drop-shadow-none
             text-[clamp(2.75rem,6.5vw,6rem)]"
>
  ELITE DETAILING
</h1>

        <p className="text-2xl md:text-3xl mb-8 text-white/90">
          Premium Mobile Car Care Services
        </p>
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
  );
}
