import React from 'react';
import { salesContent } from '../config/content';

export const HeroSection: React.FC = () => {
  const { product } = salesContent;

  return (
    <section id="hero" className="pt-10 pb-6 md:pt-16 md:pb-8 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Headline Principal - Curta, Forte e Direta para Corretores */}
        <h1 
          id="hero-headline"
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-5 sm:mb-6 md:mb-7 text-balance"
        >
          {product.headline}
        </h1>

        {/* Subtexto em Destaque */}
        <p 
          id="hero-subheadline"
          className="text-xl sm:text-2xl md:text-3xl text-[#1F4E79] font-bold tracking-tight leading-snug max-w-2xl mx-auto text-balance"
        >
          {product.subheadline}
        </p>
      </div>
    </section>
  );
};
