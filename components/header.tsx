// components/header.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

// basePath-safe static imports
import LogoPng from "@/public/logo.png";
import Texture from "@/public/texture.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navlinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" }
  ];

  // Teal-charcoal tint to match the logo's background plate
  const overlayAlpha = isScrolled ? 0.72 : 0.62; // black overlay
  const tintAlpha    = isScrolled ? 0.28 : 0.22; // teal tint
  const tintHex      = "#0f1e1c";                // cold teal-charcoal

  const texturedBg: React.CSSProperties = {
    backgroundImage: `
      linear-gradient(${hexToRgba(tintHex, tintAlpha)}, ${hexToRgba(tintHex, tintAlpha)}),
      linear-gradient(rgba(0,0,0,${overlayAlpha}), rgba(0,0,0,${overlayAlpha})),
      url('${Texture.src}')
    `,
    backgroundRepeat: "repeat, no-repeat, repeat",
    backgroundSize: "256px 256px, cover, 256px 256px",
    backgroundPosition: "top left, center, top left",
    backgroundBlendMode: "multiply, overlay",
    filter: "contrast(112%) brightness(104%)"
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-3 md:py-4" : "py-4 md:py-5"
      }`}
      style={texturedBg}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link href="#home" className="flex items-center gap-3">
            <Image
              src={LogoPng}
              alt="Elite Detailing Logo"
              width={50}
              height={50}
              className="rounded-[14px]"
              priority
            />
            <span className="text-xl md:text-2xl font-extrabold tracking-wide text-[#00ff88] drop-shadow-[0_0_12px_rgba(0,255,136,0.45)]">
              ELITE DETAILING
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navlinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/90 hover:text-[#00ff88] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            aria-label="Open Menu"
            onClick={() => setIsMenuOpen(p => !p)}
            className="md:hidden p-2 rounded-lg border border-white/10 text-white/90"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer (same texture/tint) */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
        style={texturedBg}
      >
        <nav className="container mx-auto px-4 py-2">
          <ul className="flex flex-col divide-y divide-white/10">
            {navlinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 text-white/90 hover:text-[#00ff88] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function hexToRgba(hex: string, alpha = 1) {
  const h = hex.replace("#", "");
  const v = h.length === 3 ? h.split("").map(c => c + c).join("") : h;
  const bigint = parseInt(v, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
