"use client";

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
      <div className="border-t border-border px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link href="/" className="text-lg font-medium text-foreground">
              Imperador do Turismo
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Passeios terrestres e náuticos em João Pessoa e região. Experiências para conhecer o melhor da Paraíba com praticidade, segurança e atendimento próximo.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Service</h4>
            <ul className="space-y-3">
              {footerLinks.service.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
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
