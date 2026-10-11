"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Como funciona a reserva?",
    answer:
      "Escolha o passeio desejado e fale com nossa equipe pelo WhatsApp, informando a data da viagem e a quantidade de pessoas. Confirmaremos a disponibilidade, o roteiro, os horários e todas as orientações antes da reserva.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Depois da confirmação da disponibilidade, nossa equipe informará pelo WhatsApp as formas e as condições de pagamento disponíveis para o passeio escolhido.",
  },
  {
    question: "Posso cancelar?",
    answer:
      "As condições de cancelamento podem variar conforme o passeio, a antecedência e o parceiro responsável pela operação. Todas as regras serão informadas antes da confirmação da reserva.",
  },
  {
    question: "O transporte está incluído?",
    answer:
      "A inclusão do transporte e o local de saída dependem do passeio escolhido. Nossa equipe confirmará essas informações durante o atendimento pelo WhatsApp.",
  },
  {
    question: "Existem taxas extras?",
    answer:
      "Alguns passeios podem possuir despesas opcionais ou taxas cobradas diretamente no local. Antes da reserva, informaremos claramente o que está ou não incluído no valor.",
  },
  {
    question: "Quanto tempo dura cada passeio?",
    answer:
      "A duração depende do roteiro escolhido. Existem passeios de aproximadamente 3 horas, meio período, 7 horas e opções de bate e volta. A duração aparece em cada passeio e também será confirmada no atendimento.",
  },
  {
    question: "O que devo levar?",
    answer:
      "Recomendamos levar documento pessoal, protetor solar, água, roupas confortáveis, traje de banho e os itens pessoais necessários. Orientações específicas serão enviadas antes do passeio.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="bg-background px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-24">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Dúvidas</p>

          <h2 className="mt-6 text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Perguntas frequentes
          </h2>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Encontre respostas para as principais dúvidas antes de escolher seu passeio.
          </p>
        </div>

        <div className="border-t border-border">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;
            const buttonId = `faq-question-${index}`;

            return (
              <div key={item.question} className="border-b border-border">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left text-base font-medium text-foreground transition-opacity hover:opacity-70 md:text-lg"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                </h3>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 pr-10 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
