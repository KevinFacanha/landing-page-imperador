"use client";

import { FadeImage } from "@/components/fade-image";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/site";

const tours = [
  {
    id: 1,
    name: "Litoral Sul 2",
    category: "Litoral",
    description: "Praias tranquilas, falésias, mirantes e o encontro do rio com o mar.",
    price: "R$ 150",
    image: "/images/jp/c-litoral-sul-2.png",
  },
  {
    id: 2,
    name: "Areia Vermelha",
    category: "Piscinas naturais",
    description: "Banco de areia com piscinas naturais de águas cristalinas na maré baixa.",
    price: "R$ 100",
    image: "/images/jp/c-areia-vermelha.png",
  },
  {
    id: 3,
    name: "Cabaceiras — Roliúde Nordestina",
    category: "Cultura",
    description: "Cenários de cinema, construções históricas e a cultura do Cariri Paraibano.",
    price: "R$ 300",
    image: "/images/jp/c-cabaceiras.png",
  },
  {
    id: 4,
    name: "Recife e Olinda",
    category: "Interestadual",
    description: "Duas cidades históricas do Nordeste em um único dia de passeio.",
    price: "R$ 160",
    image: "/images/jp/c-recife-olinda.png",
  },
  {
    id: 5,
    name: "Porto de Galinhas",
    category: "Interestadual",
    description: "Águas cristalinas, piscinas naturais e praias paradisíacas.",
    price: "R$ 160",
    image: "/images/jp/c-porto-galinhas.png",
  },
  {
    id: 6,
    name: "Pipa",
    category: "Interestadual",
    description: "Falésias, mirantes e mar azul no Rio Grande do Norte.",
    price: "R$ 160",
    image: "/images/jp/c-pipa.png",
  },
];

export function CollectionSection() {
  return (
    <section id="accessories" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 md:px-12 lg:px-20 md:py-10">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Explore outros destinos do Nordeste
        </h2>
      </div>

      {/* Tours Grid/Carousel */}
      <div className="pb-24">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {tours.map((tour) => (
            <div key={tour.id} className="group flex-shrink-0 w-[75vw] snap-center">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                  {tour.category}
                </p>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">
                      {tour.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {tour.description}
                    </p>
                  </div>
                  <span className="text-lg font-medium text-foreground">
                    {tour.price}
                  </span>
                </div>
                <a
                  href={whatsappLink(WHATSAPP_MESSAGES.reservaPasseio(tour.name))}
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

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 md:px-12 lg:px-20">
          {tours.map((tour) => (
            <div key={tour.id} className="group">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                  {tour.category}
                </p>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">
                      {tour.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {tour.description}
                    </p>
                  </div>
                  <span className="font-medium text-foreground text-2xl">
                    {tour.price}
                  </span>
                </div>
                <a
                  href={whatsappLink(WHATSAPP_MESSAGES.reservaPasseio(tour.name))}
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
      </div>
    </section>
  );
}
