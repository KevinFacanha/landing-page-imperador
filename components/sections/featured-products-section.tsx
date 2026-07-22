"use client";

import { FadeImage } from "@/components/fade-image";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/site";

const tours = [
  {
    title: "Litoral Sul 1",
    category: "Litoral",
    duration: "Aprox. 7 horas",
    price: "R$ 150 / pessoa",
    image: "/images/jp/tour-litoral-sul-1.png",
  },
  {
    title: "Litoral Norte Completo",
    category: "Litoral",
    duration: "Aprox. 7 horas",
    price: "R$ 200 / pessoa",
    image: "/images/jp/tour-litoral-norte.png",
  },
  {
    title: "Piscinas Naturais do Seixas",
    category: "Piscinas naturais",
    duration: "Aprox. 3 horas",
    price: "R$ 100 / pessoa",
    image: "/images/jp/tour-seixas.png",
  },
  {
    title: "Buggy Litoral Sul",
    category: "Aventura",
    duration: "Aprox. 7 horas",
    price: "A partir de R$ 600",
    image: "/images/jp/tour-buggy.png",
  },
  {
    title: "Combo Casal ou Dupla",
    category: "Experiência exclusiva",
    duration: "Dia inteiro",
    price: "R$ 400 / duas pessoas",
    image: "/images/jp/tour-combo.png",
  },
  {
    title: "City Tour João Pessoa",
    category: "Cultura",
    duration: "Meio período",
    price: "R$ 100 / pessoa",
    image: "/images/jp/tour-city.png",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="technology" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 text-center md:px-12 md:py-28 lg:px-20 lg:py-32 lg:pb-20">
        <h2 className="mx-auto max-w-4xl text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
          Escolha como você quer
          <br />
          viver essa experiência
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground">
          De praias paradisíacas a roteiros históricos, encontre o passeio que combina
          com o seu momento e aproveite João Pessoa com mais praticidade.
        </p>
      </div>

      {/* Tours Grid */}
      <div className="grid grid-cols-1 gap-4 px-6 pb-20 md:grid-cols-3 md:px-12 lg:px-20">
        {tours.map((tour) => (
          <div key={tour.title} className="group">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <FadeImage
                src={tour.image || "/placeholder.svg"}
                alt={tour.title}
                fill
                className="object-cover group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="py-6">
              <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                {tour.category}
              </p>
              <h3 className="text-foreground text-xl font-semibold">
                {tour.title}
              </h3>
              <div className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
                <span>{tour.duration}</span>
                <span aria-hidden="true">•</span>
                <span className="font-medium text-foreground">{tour.price}</span>
              </div>
              <a
                href={whatsappLink(WHATSAPP_MESSAGES.reservaPasseio(tour.title))}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-medium text-foreground underline underline-offset-4 transition-opacity hover:opacity-70"
              >
                Reservar pelo WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Aviso sobre valores */}
      <div className="flex justify-center px-6 pb-28 md:px-12 lg:px-20">
        <p className="mx-auto max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
          Valores, roteiros e disponibilidade podem variar conforme a data, a maré, as
          condições climáticas, a capacidade dos veículos e a operação dos parceiros.
          Consulte nossa equipe antes de confirmar a reserva.
        </p>
      </div>
    </section>
  );
}
