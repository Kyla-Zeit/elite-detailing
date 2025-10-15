// components/hero.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { CSSProperties } from "react";

import LogoMark from "@/public/logot1.png"; // transparent logo
import LogoBg from "@/public/bg2.png";     // background artwork

// === Quick knobs ===
const COVER_SCALE = 1.2;   // background zoom to avoid edges on ultra-wide
const BG_OPACITY  = 0.36;  // visibility of the background image

export function Hero() {
  // Legibility overlay with a faint brand tint (a bit darker for contrast)
  const overlay: CSSProperties = {
    background:
      "radial-gradient(ellipse at 50% 42%, rgba(0,255,136,0.05), rgba(0,0,0,0.52) 60%, rgba(0,0,0,0.78))"
  };

  return (
    <section
      id="home"
      className="relative h-[90vh] md:h-screen flex items-center text-center px-4 overflow-hidden bg-black"
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
            filter: "brightness(1.25) contrast(1.25) saturate(1.0)",
          }}
        />
      </div>

      {/* Overlay for readability */}
      <div aria-hidden className="absolute inset-0" style={overlay} />

      {/* ===== CONTENT: CORNER VARIANT ===== */}
      {/* Quiet watermark in the corner, above overlay but behind content */}
      <Image
        src={LogoMark}
        alt=""
        priority
        width={540}
        height={540}
        className="pointer-events-none select-none absolute right-[6%] bottom-[8%]"
        style={{
          width: "min(40vw, 420px)",
          height: "auto",
          opacity: 0.22,
          filter: "saturate(0.6) brightness(1.0) drop-shadow(0 8px 24px rgba(0,255,136,.2))",
          mixBlendMode: "soft-light" as any
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="ed-title ed-title-soft font-black mb-6 text-[clamp(2.75rem,6.5vw,6rem)]">
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
      {/* ===== /CONTENT ===== */}
    </section>
  );
}
