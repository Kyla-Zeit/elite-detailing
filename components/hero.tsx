// components/hero.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { CSSProperties } from "react";

// basePath-safe import so it works on GitHub Pages
import LogoBg from "@/public/logo2.png";

export function Hero() {
  // background: giant centered logo, no photo nonsense
  const bgLogo: CSSProperties = {
    backgroundColor: "#000",                     // solid black base
    backgroundImage: `url('${LogoBg.src}')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "min(85%, 1100px)",         // tweak size as you like
    opacity: 0.12,                               // 0.06–0.18 depending how loud you want it
    filter: "blur(0px)"
  };

  // overlay for legibility + subtle green vibe
  const overlay: CSSProperties = {
    background:
      "radial-gradient(ellipse at 50% 40%, rgba(0,255,136,0.10), rgba(0,0,0,0.78) 55%, rgba(0,0,0,0.9))"
  };

  return (
    <section id="home" className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Background logo replaces the old photo */}
      <div aria-hidden className="absolute inset-0" style={bgLogo} />
      {/* Legibility/brand-tint overlay */}
      <div aria-hidden className="absolute inset-0" style={overlay} />

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
