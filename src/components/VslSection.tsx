import React, { useEffect } from 'react';

export const VslSection: React.FC = () => {
  // Carregamento assíncrono e otimizado do script da API do Vimeo sem bloquear a renderização
  useEffect(() => {
    const scriptSrc = 'https://player.vimeo.com/api/player.js';
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="vsl" className="pb-12 md:pb-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Moldura centralizada otimizada para o formato vertical (9:16 - 177.78%) */}
        <div className="max-w-[360px] sm:max-w-[400px] md:max-w-[420px] mx-auto rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-200 bg-black">
          
          {/* Container responsivo exato do Vimeo com padding-top 177.78% */}
          <div style={{ padding: '177.78% 0 0 0', position: 'relative' }}>
            <iframe
              src="https://player.vimeo.com/video/1224319502?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              title="vsl"
              loading="eager"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
