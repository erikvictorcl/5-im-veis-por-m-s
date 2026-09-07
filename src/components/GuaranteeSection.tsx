import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { salesContent } from '../config/content';

export const GuaranteeSection: React.FC = () => {
  const { guarantee } = salesContent;

  return (
    <section id="garantia" className="py-8 bg-white border-t border-slate-200">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Indicação Visual Limpa e Profissional de Garantia de 7 Dias */}
        <div 
          id="guarantee-compact-badge"
          className="inline-flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 py-2 px-4 rounded-xl text-slate-700"
        >
          <div className="w-8 h-8 rounded-full bg-[#EBF3FA] border border-[#D0E1F0] flex items-center justify-center text-[#1F4E79] shrink-0">
            <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
          </div>
          <div className="text-center sm:text-left">
            <span className="font-bold text-slate-900 text-sm block">
              {guarantee.text}
            </span>
            <span className="text-xs text-slate-500 font-normal block">
              {guarantee.subtext}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
