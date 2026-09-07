import React from 'react';
import { Check } from 'lucide-react';
import { salesContent } from '../config/content';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export const OffersSection: React.FC = () => {
  const { offersSection } = salesContent;
  const { offer } = offersSection;

  const handleCheckoutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const checkoutUrl = offer.checkoutUrl || "https://pay.cakto.com.br/q2f8yj4_1087377";

    // Dispara o evento InitiateCheckout no Meta Pixel
    try {
      if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
        window.fbq('track', 'InitiateCheckout', {
          content_name: offer.name,
          value: 10.00,
          currency: 'BRL',
        });
      }
    } catch (error) {
      console.error('Erro ao registrar InitiateCheckout:', error);
    }

    // Navega para o checkout garantindo tempo para o disparo da requisição do pixel
    setTimeout(() => {
      window.location.href = checkoutUrl;
    }, 150);
  };

  return (
    <section id="ofertas" className="py-12 md:py-16 bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-xl mx-auto text-center mb-10">
          <h2 
            id="offers-section-title"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-2"
          >
            {offersSection.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            {offersSection.subtitle}
          </p>
        </div>

        {/* Card Único do Produto Centralizado com Acabamento Premium */}
        <div className="max-w-md sm:max-w-lg mx-auto">
          <div 
            id="offer-card-1"
            className="relative bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#1F4E79] shadow-lg hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden"
          >
            {/* Linha superior de destaque em Azul Terno */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#1F4E79]" />

            <div>
              {/* Header do Card */}
              <div className="mb-4">
                <span className="text-xs font-mono font-semibold uppercase text-[#1F4E79] tracking-wider block mb-1">
                  {offer.tag}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  {offer.name}
                </h3>
              </div>

              {/* Preço */}
              <div className="mb-4 pb-4 border-b border-slate-100">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight">
                    {offer.price}
                  </span>
                </div>
                <span className="text-xs text-slate-500 font-medium block mt-1">
                  Pagamento único • Acesso imediato
                </span>
              </div>

              {/* Headline & Descrição em Box de Destaque */}
              <div 
                id="offer-1-highlight-box"
                className="bg-[#F0F6FB] border border-[#D0E1F0] rounded-xl p-3.5 mb-5"
              >
                <p className="text-sm font-bold text-[#1F4E79] mb-1">
                  {offer.headline}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  {offer.description}
                </p>
              </div>

              {/* Lista de Recursos com Ícones Sólidos */}
              <ul className="space-y-3 mb-6">
                {offer.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                    <div className="w-4 h-4 rounded-full bg-[#1F4E79] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white stroke-[2.5]" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Botão de Compra */}
            <div className="pt-2">
              <a
                id="offer-1-cta-button"
                href={offer.checkoutUrl || "https://pay.cakto.com.br/q2f8yj4_1087377"}
                onClick={handleCheckoutClick}
                className="block text-center w-full py-4 px-6 rounded-xl bg-[#1F4E79] hover:bg-[#183E62] text-white font-bold text-base tracking-wide transition-all shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer"
              >
                {offer.buttonText}
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
