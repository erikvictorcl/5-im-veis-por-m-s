/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HeroSection } from './components/HeroSection';
import { VslSection } from './components/VslSection';
import { OffersSection } from './components/OffersSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-[#1F4E79]">
      <main className="flex-1">
        {/* 1. HEADLINE / HERO */}
        <HeroSection />

        {/* 2. VSL (VÍDEO DE APRESENTAÇÃO) */}
        <VslSection />

        {/* 3. OFERTAS (PRODUTO 1 & PRODUTO 2 - R$ 10,00 CADA) */}
        <OffersSection />

        {/* 4. GARANTIA DE 7 DIAS */}
        <GuaranteeSection />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
