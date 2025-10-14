// components/header.tsx
"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

// Transparent logo to use as a background watermark
import LogoBg from "@/public/logo2.png";

/**
 * Choose where the background logo sits:
 *  - "right"   big on the right side
 *  - "center"  centered watermark
 *  - "tile"    faint repeating pattern
 */
const BG_MODE: "right" | "center" | "tile" = "right";

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

  const padY = isScrolled ? "py-3 md:py-4" : "py-4 md:py-5";

  // Base background style for the watermark
  const baseBg: CSSProperties = {
    backgroundImage: `url('${LogoBg.src}')`,
    backgroundRepeat: "no-repeat",
    opacity: 0.12,               // 0.06–0.18 if you want weaker/stronger
    filter: "blur(0px)"
  };

  let bgStyle: CSSProperties;
  switch (BG_MODE) {
    case "center":
      bgStyle = { ...baseBg, backgroundPosition: "center", backgroundSize: "min(80%, 900px)" };
      break;
    case "tile":
      bgStyle = { ...baseBg, backgroundRepeat: "repeat", backgroundSize: "220px 220px", opacity: 0.05 };
      break;
    default: // "right"
      bgStyle = { ...baseBg, backgroundPosition: "90% center", backgroundSize: "min(70%, 780px)" };
  }

  // Dark overlay to keep links readable
  const overlay: CSSProperties = {
    background: "linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.72))"
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${padY}`}>
      {/* Watermark layer behind everything */}
      <div aria-hidden className="absolute inset-0 pointer-events-none select-none" style={bgStyle} />
      {/* Legibility overlay */}
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={overlay} />

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <div className="text-[#00ff88] font-extrabold tracking-wide text-lg md:text-xl">
            ELITE DETAILING
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navlinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/90 hover:text-[#00ff88] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          <button
            aria-label="Open Menu"
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg border border-white/10 text-white/90"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${isMenuOpen ? "max-h-96" : "max-h-0"}`}>
        <nav className="relative container mx-auto px-4 py-2">
          <ul className="flex flex-col divide-y divide-white/10">
            {navlinks.map((link) => (
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
