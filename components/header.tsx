// components/hero.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { CSSProperties } from "react";

import LogoMark from "@/public/logo2.png"; // logo artwork (transparent)
import LogoBg from "@/public/bg2.png";     // background photo/art

// ===== Quick knobs =====
type Variant = "SIDE" | "BEHIND_SOFT" | "CORNER";
const HERO_VARIANT: Variant = "SIDE";

const COVER_SCALE = 1.2;   // background zoom to avoid edges on ultra-wide
const BG_OPACITY  = 0.36;  // visibility of the background image
const LOGO_OPACITY = 0.32; // visibility of the logo accent

export function Hero() {
  // Legibility overlay with faint brand tint (darker so the title pops)
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

      {/* ================== CONTENT VARIANTS ================== */}
      {HERO_VARIANT === "SIDE" && (
        <div className="relative z-10 mx-auto w-full max-w-6xl px-2">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(260px,38%)_1fr] items-center gap-8 lg:gap-12">
            {/* Logo to the side on large screens, below on mobile */}
            <div className="order-last lg:order-first justify-self-center lg:justify-self-end">
              <Image
                src={LogoMark}
                alt=""
                priority
                width={520}
                height={520}
                className="pointer-events-none select-none"
                style={{
                  width: "min(44vw, 520px)",
                  height: "auto",
                  opacity: LOGO_OPACITY,
                  filter: "saturate(0.7) brightness(1.05) drop-shadow(0 10px 28px rgba(0,255,136,.25))",
                }}
              />
            </div>

            {/* Text block */}
            <div className="text-center lg:text-left">
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
          </div>
        </div>
      )}

      {HERO_VARIANT === "BEHIND_SOFT" && (
        <div className="relative z-10 mx-auto max-w-4xl">
          {/* Softer, smaller logo behind the title */}
          <div className="relative inline-block">
            <Image
              src={LogoMark}
              alt=""
              priority
              width={760}
              height={760}
              className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40"
              style={{
                width: "min(72vw, 760px)",
                height: "auto",
                filter: "saturate(0.55) brightness(1.0) contrast(1.05) drop-shadow(0 6px 24px rgba(0,255,136,.22))",
                mixBlendMode: "soft-light" as any
              }}
            />
            <h1 className="relative ed-title ed-title-soft font-black mb-6 text-[clamp(2.75rem,6.5vw,6rem)]">
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
      )}

      {HERO_VARIANT === "CORNER" && (
        <>
          {/* Quiet watermark in the corner */}
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
        </>
      )}
      {/* ================== /CONTENT VARIANTS ================== */}
    </section>
  );
}
