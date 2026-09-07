/**
 * Configuração de Conteúdo da Página de Vendas (Low Ticket)
 * Todos os textos, preços, links de checkout e configurações de VSL
 * podem ser editados facilmente neste arquivo.
 */

export interface ProductOffer {
  name: string;
  tag: string;
  price: string;
  headline: string;
  description: string;
  features: string[];
  buttonText: string;
  checkoutUrl?: string;
}

export interface SalesPageConfig {
  product: {
    headline: string;
    subheadline: string;
    vsl: {
      videoUrl: string | null;
      placeholderTitle: string;
      placeholderDuration: string;
    };
  };
  offersSection: {
    title: string;
    subtitle: string;
    offer: ProductOffer;
  };
  guarantee: {
    text: string;
    subtext: string;
  };
  footer: {
    copyrightText: string;
    disclaimer: string;
  };
}

export const salesContent: SalesPageConfig = {
  product: {
    headline: "Venda 5 imóveis por mês",
    subheadline: "Assista o vídeo para saber como",
    vsl: {
      videoUrl: "https://player.vimeo.com/video/1224319502?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
      placeholderTitle: "Assista ao vídeo para entender o processo de atendimento e follow-up",
      placeholderDuration: "3 min",
    },
  },
  offersSection: {
    title: "Acesse o Script de Atendimento",
    subtitle: "Material prático para aplicar no seu próximo atendimento",
    offer: {
      name: "Script de Atendimento",
      tag: "ACESSO IMEDIATO",
      price: "R$ 10,00",
      headline: "Perguntas estratégicas para conduzir melhor seus leads.",
      description: "Conduza o primeiro contato com segurança, entenda o que o cliente procura e identifique oportunidades com maior potencial de avançar.",
      features: [
        "Perguntas estratégicas para o primeiro contato",
        "Roteiro de qualificação rápida do lead",
        "Identificação de compradores com real potencial",
        "Acesso digital imediato",
      ],
      buttonText: "QUERO VENDER 5 IMÓVEIS",
      checkoutUrl: "https://pay.cakto.com.br/q2f8yj4_1087377",
    },
  },
  guarantee: {
    text: "Garantia de 7 dias",
    subtext: "Acesse o material e teste no seu atendimento. Se não fizer sentido para você, solicite o reembolso integral em até 7 dias.",
  },
  footer: {
    copyrightText: "Processo de Atendimento para Corretores de Imóveis. Todos os direitos reservados.",
    disclaimer: "Material profissional voltado para corretores e profissionais do mercado imobiliário.",
  },
};
