import Image from "next/image";

const certificateSrc = "/images/cadastur/cadastur.png";

export function CadasturSection() {
  return (
    <section className="bg-background px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Agência regularizada
        </p>

        <h2 className="mt-6 text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Viaje com mais confiança.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          O Imperador do Turismo é uma agência cadastrada no Cadastur, sistema oficial de
          cadastro dos prestadores de serviços turísticos do Ministério do Turismo.
        </p>

        <a
          href={certificateSrc}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir o certificado Cadastur em tamanho ampliado"
          className="mx-auto mt-12 block w-full max-w-4xl overflow-hidden rounded-xl border border-border"
        >
          <Image
            src={certificateSrc}
            alt="Certificado Cadastur do Imperador do Turismo"
            width={1117}
            height={791}
            sizes="(min-width: 1024px) 896px, calc(100vw - 48px)"
            className="h-auto w-full object-contain"
          />
        </a>

        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          Cadastro nº 67.630.354/0001-90 — válido de 14/07/2026 a 14/07/2028.
        </p>
      </div>
    </section>
  );
}
