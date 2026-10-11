"use client";

import Image from "next/image";
import Link from "next/link";
import {
  INSTAGRAM_URL,
  whatsappLink,
  WHATSAPP_MESSAGES,
} from "@/lib/site";

const footerLinks = {
  explore: [
    { label: "Passeios", href: "#products" },
    { label: "Experiências", href: "#technology" },
    { label: "Galeria", href: "#gallery" },
    { label: "Outros destinos", href: "#accessories" },
  ],
  about: [
    { label: "Sobre nós", href: "#about" },
    { label: "Litoral Sul", href: "#products" },
    { label: "Litoral Norte", href: "#products" },
    { label: "Piscinas naturais", href: "#products" },
  ],
  service: [
    { label: "Falar no WhatsApp", href: whatsappLink(WHATSAPP_MESSAGES.geral) },
    { label: "Reservar passeio", href: whatsappLink(WHATSAPP_MESSAGES.reserva) },
    { label: "Tirar dúvidas", href: whatsappLink(WHATSAPP_MESSAGES.duvidas) },
    { label: "Instagram", href: INSTAGRAM_URL },
  ],
};

export function FooterSection() {
  return (
    <footer className="bg-background">
      {/* Main Footer Content */}
      <div className="relative isolate overflow-hidden border-t border-white/10 px-6 py-20 md:px-12 md:py-24 lg:px-16 lg:py-28">
        <Image
          src="/images/jp/hero-catamara.png"
          alt="Catamarã navegando diante da orla de João Pessoa ao entardecer"
          fill
          sizes="100vw"
          className="-z-20 object-cover object-[center_68%] md:object-[center_72%]"
        />
        <div
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,37,64,0.88)_0%,rgba(11,37,64,0.74)_48%,rgba(11,37,64,0.62)_100%)]"
          aria-hidden="true"
        />
        <div className="mx-auto grid w-full max-w-[1360px] grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-[minmax(300px,1.6fr)_repeat(3,minmax(140px,0.75fr))] lg:gap-x-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="relative block size-40"
              aria-label="Imperador do Turismo — início"
            >
              <Image
                src="/images/logo-imp-transparent.png"
                alt="Imperador do Turismo"
                fill
                sizes="160px"
                className="object-contain"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Passeios terrestres e náuticos em João Pessoa e região. Experiências para conhecer o melhor da Paraíba com praticidade, segurança e atendimento próximo.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-white">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-white">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-white">Service</h4>
            <ul className="space-y-3">
              {footerLinks.service.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border px-6 py-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            2026 Imperador do Turismo. Todos os direitos reservados.
          </p>

          

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              YouTube
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
