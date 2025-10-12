import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-[#1a1a1a] text-center">
      <div className="container mx-auto">
        <div className="flex justify-center gap-6 mb-6">
          <Link
            href="#"
            className="w-10 h-10 rounded-full bg-[#0a0a0a] text-[#00ff88] flex items-center justify-center hover:bg-[#00ff88] hover:text-[#0a0a0a] transition-all hover:-translate-y-1"
          >
            <Facebook className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 rounded-full bg-[#0a0a0a] text-[#00ff88] flex items-center justify-center hover:bg-[#00ff88] hover:text-[#0a0a0a] transition-all hover:-translate-y-1"
          >
            <Instagram className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 rounded-full bg-[#0a0a0a] text-[#00ff88] flex items-center justify-center hover:bg-[#00ff88] hover:text-[#0a0a0a] transition-all hover:-translate-y-1"
          >
            <Twitter className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 rounded-full bg-[#0a0a0a] text-[#00ff88] flex items-center justify-center hover:bg-[#00ff88] hover:text-[#0a0a0a] transition-all hover:-translate-y-1"
          >
            <Youtube className="w-5 h-5" />
          </Link>
        </div>
        <p className="text-[#a0a0a0] text-sm">
          &copy; {new Date().getFullYear()} Elite Detailing. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
