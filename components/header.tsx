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

  // Navbar: keep your textured bar
  const overlayAlpha = isScrolled ? 0.72 : 0.62;
  const texturedBg: React.CSSProperties = {
    backgroundImage: `linear-gradient(rgba(0,0,0,${overlayAlpha}), rgba(0,0,0,${overlayAlpha})), url('${Texture.src}')`,
    backgroundRepeat: "repeat",
    backgroundSize: "256px 256px",
    backgroundBlendMode: "overlay",
    filter: "contrast(112%) brightness(104%)"
  };

  // Black chip behind the logo
  const logoChipBlack: React.CSSProperties = {
    backgroundColor: "#000",
    borderRadius: 18,
    padding: 6,
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), 0 6px 18px rgba(0,0,0,0.35)"
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
            <div style={logoChipBlack}>
              <Image
                src={LogoPng}
                alt="Elite Detailing Logo"
                width={50}
                height={50}
                className="rounded-[14px]"
                priority
              />
            </div>
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

      {/* Mobile Drawer */}
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
