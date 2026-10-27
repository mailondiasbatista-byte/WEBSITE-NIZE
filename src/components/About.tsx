import React from 'react';
import { CheckCircle2, Award, Heart, Sparkles } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 border-t border-neutral-800/60 bg-[#2A2624]/20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Information */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-title text-4xl sm:text-5xl font-bold leading-tight text-[#FAF8F5]">
              {SALON_INFO.ownerName}
            </h2>
            <p className="text-neutral-300 leading-relaxed font-light text-base sm:text-lg">
              Fundadora do <strong className="font-semibold text-white">{SALON_INFO.fullName}</strong> em Settat (próximo ao Liceu Técnico), <strong className="font-semibold text-[#D4AF37]">{SALON_INFO.ownerName}</strong> é reconhecida pela técnica impecável, leveza e simetria no trançado afro. Cada cliente recebe um atendimento atencioso e personalizado para transformar a autoestima.
            </p>

            <div className="pt-2 space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-900/40 border border-neutral-800/50">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <p className="text-sm text-neutral-300 font-light">
                  <strong className="font-semibold text-[#FAF8F5]">Trançado Leve Sem Dor:</strong> Técnica knotless que preserva o couro cabeludo e os fios naturais.
                </p>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-900/40 border border-neutral-800/50">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <p className="text-sm text-neutral-300 font-light">
                  <strong className="font-semibold text-[#FAF8F5]">Geometria & Divisão Perfeita:</strong> Quadros bem alinhados e acabamento profissional.
                </p>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-900/40 border border-neutral-800/50">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <p className="text-sm text-neutral-300 font-light">
                  <strong className="font-semibold text-[#FAF8F5]">Atendimento VIP em Settat:</strong> Espaço privativo e aconchegante perto do Liceu Técnico.
                </p>
              </div>
            </div>

            {/* Micro Pillars */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-800/60 text-center">
              <div className="p-3 bg-neutral-900/50 rounded-xl border border-neutral-800/60">
                <Award className="w-5 h-5 text-[#D4AF37] mx-auto mb-1" />
                <span className="text-xs font-semibold block text-[#FAF8F5]">Simetria</span>
                <span className="text-[11px] text-neutral-400">Divisão Limpa</span>
              </div>
              <div className="p-3 bg-neutral-900/50 rounded-xl border border-neutral-800/60">
                <Sparkles className="w-5 h-5 text-[#D4AF37] mx-auto mb-1" />
                <span className="text-xs font-semibold block text-[#FAF8F5]">Durabilidade</span>
                <span className="text-[11px] text-neutral-400">Trança Perfeita</span>
              </div>
              <div className="p-3 bg-neutral-900/50 rounded-xl border border-neutral-800/60">
                <Heart className="w-5 h-5 text-[#D4AF37] mx-auto mb-1" />
                <span className="text-xs font-semibold block text-[#FAF8F5]">Carinho</span>
                <span className="text-[11px] text-neutral-400">Saúde do Fio</span>
              </div>
            </div>
          </div>

          {/* Image Showcase Pair with Suainize's Real Portrait and Braiding Art */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] border border-neutral-800 bg-neutral-900 shadow-xl group relative">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-10-27_at_22.15.18_623e0d2b.jpeg"
                alt={`Suainize, fundadora do salão ${SALON_INFO.fullName}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-sm p-2 rounded-lg text-center">
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase block font-bold">Suainize</span>
                <span className="text-[9px] text-neutral-300 block">Hair Specialist & Fundadora</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-[4/5] border border-neutral-800 bg-neutral-900 shadow-xl mt-8 group relative">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-10-27_at_22.17.23__1__efb279a0.jpeg"
                alt="Trança Nagô radial criada por Suainize"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-sm p-2 rounded-lg text-center">
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase block font-bold">Trançado Radial</span>
                <span className="text-[9px] text-neutral-300 block">Trabalho real no salão {SALON_INFO.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
