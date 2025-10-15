// components/hero.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { CSSProperties } from "react";

import { Ultra } from "next/font/google";
const ultra = Ultra({ weight: "400", subsets: ["latin"] });

import LogoMask from "@/public/logot1.png"; // transparent logo used as mask
import LogoBg from "@/public/bg2.png";      // background artwork

// Background tuning
const COVER_SCALE = 1.2;
const BG_OPACITY = 0.36;

export function Hero() {
  // Legibility overlay
  const overlay: CSSProperties = {
    background:
      "radial-gradient(ellipse at 50% 42%, rgba(0,255,136,0.05), rgba(0,0,0,0.52) 60%, rgba(0,0,0,0.78))",
  };

  // Ultra for the H1 only
  const titleFontVar = { ["--font-title" as any]: ultra.style.fontFamily } as CSSProperties;

  // Shared mask styles for both glow and base layers
  const maskBase: CSSProperties = {
    WebkitMaskImage: `url(${LogoMask.src})`,
    maskImage: `url(${LogoMask.src})`,
    WebkitMaskSize: "contain",
    maskSize: "contain",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
    backgroundColor: "var(--brand-neon)", // exact same color as title
    position: "absolute",
    inset: 0,
    mixBlendMode: "screen",
  };

  return (
    <section
      id="home"
      className="relative h-[90vh] md:h-screen flex items-center text-center px-4 overflow-hidden bg-black"
    >
      {/* Background image */}
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

      {/* Overlay */}
      <div aria-hidden className="absolute inset-0" style={overlay} />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-2">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(260px,38%)_1fr] items-center gap-8 lg:gap-12">
          {/* NEON LOGO (two layers: glow + crisp) */}
          <div className="order-last lg:order-first justify-self-center lg:justify-self-end">
            <div
              className="relative pointer-events-none select-none"
              style={{
                width: "min(44vw, 520px)",
                aspectRatio: "1 / 1",
              }}
            >
              {/* Glow layer */}
              <div
                aria-hidden
                style={{
                  ...maskBase,
                  opacity: "var(--hero-logo-glow, .38)", // stronger visibility knob
                  filter: "blur(10px) brightness(1.35) saturate(1.1)",
                }}
              />
              {/* Crisp layer */}
              <div
                aria-hidden
                style={{
                  ...maskBase,
                  opacity: "var(--hero-logo-opacity, .55)", // main intensity knob
                  filter: "drop-shadow(0 0 14px rgba(0,255,136,.24))",
                }}
              />
            </div>
          </div>

          {/* Text block */}
          <div className="text-center lg:text-left">
            <h1
              style={titleFontVar}
              className="ed-title ed-title-muted mb-6 text-[clamp(2.25rem,5.2vw,5rem)]"
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
        </div>
      </div>
    </section>
  );
}
