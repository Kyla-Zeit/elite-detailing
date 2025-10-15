// components/header.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

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

  return (
    <header
      className={`fixed top-0 w-full z-50 border-b
      transition-[background,box-shadow,backdrop-filter] duration-300
      ${isScrolled
        ? "bg-black/80 backdrop-blur-xl border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
        : "bg-gradient-to-b from-black/70 to-black/45 backdrop-blur-md border-white/10"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Lock the header height so nothing shifts */}
        <div className="h-16 md:h-20 flex items-center justify-center">
          {/* Desktop Nav (centered) */}
          <ul className="hidden md:flex items-center gap-10">
            {navlinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/90 text-lg tracking-wide hover:text-[#00ff88] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button (right) */}
          <button
            aria-label="Open Menu"
            onClick={() => setIsMenuOpen(p => !p)}
            className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg border border-white/10 text-white/90"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300
        ${isMenuOpen ? "max-h-96" : "max-h-0"}`}
      >
        <nav className="container mx-auto px-4 py-3">
          <ul className="flex flex-col divide-y divide-white/10 rounded-xl bg-black/85 backdrop-blur-xl border border-white/10">
            {navlinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3.5 px-3 text-white/90 text-base hover:text-[#00ff88] transition-colors"
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
