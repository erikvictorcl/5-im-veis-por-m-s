import React from 'react';
import { salesContent } from '../config/content';

export const Footer: React.FC = () => {
  const { footer } = salesContent;

  return (
    <footer className="bg-[#0F2236] text-slate-400 py-6 sm:py-8 border-t border-[#1F4E79]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-xs space-y-1.5">
        <p className="font-medium text-slate-200">
          {footer.copyrightText}
        </p>
        <p className="text-slate-400 text-[11px] leading-relaxed">
          {footer.disclaimer}
        </p>
      </div>
    </footer>
  );
};
