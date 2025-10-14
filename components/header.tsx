"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

// Static import = no broken logo under basePath/assetPrefix
import LogoPng from "@/public/logo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navlinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" }
  ];

  // Respect basePath in production (GitHub Pages)
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const textureUrl = `url('${prefix}/texture.png')`;

  // Keep the bar readable; increase overlay slightly on scroll
  const overlayAlpha = isScrolled ? 0.72 : 0.6;

  // Shared textured background style
  const texturedBg: React.CSSProperties = {
    backgroundImage: `linear-gradient(rgba(0,0,0,${overlayAlpha}), rgba(0,0,0,${overlayAlpha})), ${textureUrl}`,
    backgroundRepeat: "repeat",
    backgroundSize: "256px 256px", // visible grain, not blurry “cover”
    backgroundPosition: "top left",
    backgroundBlendMode: "overlay", // pulls out highlights in the texture
    // Give the texture a tiny punch so it doesn’t look like plain black
    filter: "contrast(112%) brightness(103%)",
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
              className="rounded-full"
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

      {/* Mobile Drawer (also textured to match) */}
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
