// components/hero.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { CSSProperties } from "react";
import LogoMark from "@/public/logot1.png";   // <- logo behind the title
import LogoBg from "@/public/bg2.png";       // background artwork

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
      "radial-gradient(ellipse at 50% 42%, rgba(0,255,136,0.08), rgba(0,0,0,0.40) 60%, rgba(0,0,0,0.72))"
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
          className="object-cover"
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
        {/* Title with logo layered behind it */}
        <div className="relative inline-block mx-auto">
          <Image
            src={LogoMark}
            alt=""
            priority
            width={900}
            height={900}
            sizes="(min-width: 1024px) 52vw, 70vw"
            className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-2deg] opacity-60 [filter:drop-shadow(0_6px_28px_rgba(0,255,136,.35))]"
            style={{ width: "min(900px, 52vw)", height: "auto" }}
          />

          <h1
            className="relative ed-title font-black mb-6 drop-shadow-none
                       text-[clamp(2.75rem,6.5vw,6rem)]"
          >
            ELITE DETAILING
          </h1>
        </div>

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
