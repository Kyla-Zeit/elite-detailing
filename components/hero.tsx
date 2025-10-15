// components/hero.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { CSSProperties } from "react";
import LogoBg from "@/public/bg1.png"; // your neon car on black

export function Hero() {
  // Make the background LOGO visible
  const bgLogo: CSSProperties = {
    backgroundColor: "#000",
    backgroundImage: `url('${LogoBg.src}')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "min(95%, 1200px)", // bigger
    opacity: 0.28,                      // was 0.12 — turn it up
    // punch the green lines so they read behind the overlay
    filter: "brightness(1.35) contrast(1.35) saturate(1.15)"
  };

  // Ease up the black overlay so you don’t bury the art
  const overlay: CSSProperties = {
    background:
      "radial-gradient(ellipse at 50% 42%, rgba(0,255,136,0.10), rgba(0,0,0,0.55) 58%, rgba(0,0,0,0.78))"
  };

  // Optional: subtle green glow over the center to tie brand color
  const brandGlow: CSSProperties = {
    background:
      "radial-gradient(circle at 50% 48%, rgba(0,255,136,0.18), rgba(0,255,136,0) 40%)",
    mixBlendMode: "screen",
    pointerEvents: "none"
  };

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden"
    >
      {/* Background logo */}
      <div aria-hidden className="absolute inset-0" style={bgLogo} />
      {/* Legibility overlay */}
      <div aria-hidden className="absolute inset-0" style={overlay} />
      {/* Subtle on-brand glow */}
      <div aria-hidden className="absolute inset-0" style={brandGlow} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#00ff88] tracking-wider uppercase drop-shadow-[0_0_30px_rgba(0,255,136,0.7)]">
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
