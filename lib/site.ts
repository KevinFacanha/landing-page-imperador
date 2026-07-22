// Configurações de contato do Imperador do Turismo.
// Altere estes valores para atualizar todos os links do site.

export const WHATSAPP_NUMBER = "5583998048936";
export const INSTAGRAM_URL = "https://instagram.com/imperadordoturismo";

/**
 * Gera um link do WhatsApp com mensagem pré-preenchida.
 */
export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Mensagens padrão reutilizáveis.
export const WHATSAPP_MESSAGES = {
  geral: "Olá! Encontrei o Imperador do Turismo pelo site e gostaria de mais informações sobre os passeios.",
  reserva:
    "Olá! Encontrei o Imperador do Turismo pelo site e gostaria de reservar um passeio.",
  reservaPasseio: (nome: string) =>
    `Olá! Encontrei o Imperador do Turismo pelo site e gostaria de consultar disponibilidade para o passeio ${nome}.`,
  recomendacao:
    "Olá! Gostaria de receber ajuda para escolher um passeio. Minha viagem será no dia [DATA] e estaremos em [QUANTIDADE] pessoas.",
  duvidas:
    "Olá! Encontrei o Imperador do Turismo pelo site e gostaria de tirar algumas dúvidas sobre os passeios.",
};
