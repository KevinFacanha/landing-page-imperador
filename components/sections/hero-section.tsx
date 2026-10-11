"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

import { GoogleRating } from "@/components/google-rating";
import { useGoogleReviews } from "@/components/google-reviews-provider";

export function HeroSection() {
  const { data } = useGoogleReviews();

  return (
    <section
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-[#0b3650] text-white"
      aria-labelledby="hero-title"
    >
      <Image
        src="/images/jp/img-jp.jpg"
        alt="Vista aérea da orla de João Pessoa e do mar azul da Paraíba"
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center"
        priority
      />

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(4,25,39,0.20)_0%,rgba(4,25,39,0.04)_35%,rgba(4,25,39,0.76)_100%)]" />

      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center px-5 pb-12 text-center sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
        <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-white/80 sm:text-xs">
          Paraíba, Brasil
        </p>

        <div className="mb-5 flex items-center gap-3 text-white" aria-label="Avaliações no Google">
          <GoogleRating
            rating={data?.averageRating ?? null}
            className="text-amber-300"
            starClassName="size-4"
          />
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/85">
            Avaliações no Google
            {data?.totalReviewCount != null && (
              <span className="ml-2 text-white/65">({data.totalReviewCount})</span>
            )}
          </span>
        </div>

        <h1
          id="hero-title"
          className="text-balance text-[clamp(4rem,12vw,10.5rem)] font-semibold leading-[0.78] tracking-[-0.07em]"
        >
          João Pessoa
        </h1>

        <p className="mt-7 max-w-xl text-balance text-base font-medium leading-relaxed text-white/90 sm:text-xl">
          Viva o melhor do litoral paraibano com passeios feitos para ficar na memória.
        </p>

        <Link
          href="#products"
          className="group mt-7 inline-flex min-h-13 items-center gap-5 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#0b2540] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Explorar passeios
          <ArrowDownRight
            aria-hidden="true"
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
          />
        </Link>
      </div>
    </section>
  );
}
