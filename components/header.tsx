"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/site";

const navItems = [
  { label: "Início", href: "#" },
  { label: "Passeios", href: "#products" },
  { label: "Experiências", href: "#technology" },
  { label: "Galeria", href: "#gallery" },
  { label: "Sobre nós", href: "#about" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-3 left-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 rounded-[1.5rem] bg-[#315d78]/85 shadow-[0_6px_20px_rgba(11,37,64,0.12)] backdrop-blur-md transition-all duration-300 md:top-4 md:w-[90%] md:rounded-none md:bg-transparent md:shadow-none md:backdrop-blur-none ${
        isScrolled
          ? "md:rounded-full md:bg-background/80 md:backdrop-blur-md"
          : ""
      }`}
      style={{
        boxShadow: isScrolled ? "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px" : "none"
      }}
    >
      <div className="flex items-center justify-between px-2 py-1.5 pl-3 transition-all duration-300 md:py-2 md:pl-5">
        {/* Logo */}
        <Link
          href="#"
          className={`relative block h-12 w-16 shrink-0 overflow-hidden rounded-full transition-all duration-300 md:h-20 md:w-24 ${
            isScrolled
              ? "bg-transparent md:bg-primary md:shadow-[0_6px_18px_rgba(11,37,64,0.18)]"
              : "bg-transparent"
          }`}
          aria-label="Imperador do Turismo — início"
        >
          <Image
            src="/images/logo-imp-transparent.png"
            alt="Imperador do Turismo"
            fill
            sizes="(min-width: 768px) 96px, 64px"
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-6 md:flex">
          <a
            href={whatsappLink(WHATSAPP_MESSAGES.reserva)}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 text-sm font-medium transition-all rounded-full ${isScrolled ? "bg-foreground text-background hover:opacity-80" : "bg-white text-foreground hover:bg-white/90"}`}
          >
            Reservar passeio
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white transition-colors hover:text-white/75 md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="rounded-b-[1.5rem] border-t border-white/15 bg-[#315d78]/95 px-6 py-7 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-lg text-white transition-colors hover:text-white/70"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappLink(WHATSAPP_MESSAGES.reserva)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-full bg-white px-5 py-3 text-center text-sm font-medium text-primary transition-colors hover:bg-white/90"
              onClick={() => setIsMenuOpen(false)}
            >
              Reservar passeio
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
