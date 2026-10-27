import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/salonData';

export const FAQ: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="py-20 border-t border-neutral-800/60 bg-[#2A2624]/10 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-title text-3xl sm:text-4xl font-bold text-[#FAF8F5]">
            Perguntas Frequentes
          </h2>
          <p className="text-neutral-400 text-sm mt-2 max-w-lg mx-auto font-light">
            Tudo o que você precisa saber antes de realizar o seu atendimento no Atelier.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#D4AF37]/50 bg-neutral-900/80 shadow-lg'
                    : 'border-neutral-800/80 bg-neutral-900/40 hover:border-neutral-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-title text-base font-bold text-[#FAF8F5]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-neutral-300 font-light border-t border-neutral-800/50 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
