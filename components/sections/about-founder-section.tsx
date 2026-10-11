import Image from "next/image";
import { whatsappLink } from "@/lib/site";

const whatsappMessage =
  "Olá, Júlio! Encontrei o Imperador do Turismo pelo site e gostaria de receber ajuda para escolher um passeio.";

const highlights = [
  "Atendimento direto e personalizado",
  "Conhecimento dos destinos e roteiros locais",
  "Orientação antes da confirmação do passeio",
];

export function AboutFounderSection() {
  return (
    <section id="about" className="bg-background px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
          <Image
            src="/images/jp/foto-julio.jpeg"
            alt="Júlio César, responsável pelo Imperador do Turismo"
            fill
            sizes="(min-width: 1280px) 528px, (min-width: 768px) 44vw, calc(100vw - 48px)"
            className="object-cover object-center"
          />
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Quem está por trás do Imperador
          </p>

          <h2 className="mt-6 text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Prazer, eu sou Júlio César.
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              O Imperador do Turismo nasceu da minha conexão com João Pessoa, com o litoral
              paraibano e com as pessoas que chegam até aqui querendo aproveitar cada momento
              da viagem.
            </p>
            <p>
              Hoje, ajudo casais, famílias e grupos a encontrarem passeios que realmente
              combinem com o estilo de viagem que desejam viver.
            </p>
            <p>
              Mais do que indicar destinos, meu objetivo é oferecer informações claras,
              atendimento próximo e orientação desde o primeiro contato até o dia do passeio.
            </p>
          </div>

          <p className="mt-8 border-l-2 border-foreground pl-5 text-lg font-medium leading-relaxed text-foreground">
            Você escolhe como deseja conhecer João Pessoa. O Imperador ajuda a cuidar do
            caminho.
          </p>

          <ul className="mt-10 border-y border-border">
            {highlights.map((highlight, index) => (
              <li
                key={highlight}
                className="flex items-center gap-4 border-b border-border py-4 last:border-b-0"
              >
                <span className="text-xs font-medium text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-foreground">{highlight}</span>
              </li>
            ))}
          </ul>

          <a
            href={whatsappLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            Falar com Júlio pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
