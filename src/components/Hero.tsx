import React from 'react';
import { Calendar, ArrowUpRight, Award, Users, Star } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="min-h-[88vh] flex items-center justify-center relative px-6 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column Text Content */}
        <div className="lg:col-span-7 space-y-8">
          <h1 className="font-title text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-[#FAF8F5]">
            Arte & Trançado de Alta Precisão.
          </h1>

          <p className="text-neutral-300 text-lg sm:text-xl font-light max-w-xl leading-relaxed">
            Especialista em <strong className="font-semibold text-white">Box Braids, Tranças Nagô, Knotless, Twists e Penteados Afro</strong>. Revelando a beleza e a identidade dos seus cabelos no <strong className="text-[#D4AF37]">{SALON_INFO.fullName}</strong>.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 bg-[#FAF8F5] text-[#181615] font-bold rounded-full text-sm uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#181615] transition-all duration-300 shadow-xl shadow-[#FAF8F5]/5 flex items-center gap-2 cursor-pointer active:scale-98"
            >
              <Calendar className="w-4 h-4" />
              Agendar com Suainize
            </button>
            <a
              href="#portfolio"
              className="px-8 py-4 border border-neutral-700 text-[#FAF8F5] font-bold rounded-full text-sm uppercase tracking-wider hover:border-[#FAF8F5] hover:bg-neutral-800/40 transition-colors flex items-center gap-2 group"
            >
              Ver Trabalhos Reais
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-neutral-800/80">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-[#D4AF37]" /> Especialidade
              </div>
              <span className="font-title text-2xl sm:text-3xl font-bold block text-[#FAF8F5]">Tranças Afro</span>
              <span className="text-xs text-neutral-400 font-mono">Sem dor e com acabamento limpo</span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-wider">
                <Users className="w-3.5 h-3.5 text-[#D4AF37]" /> Local
              </div>
              <span className="font-title text-2xl sm:text-3xl font-bold block text-[#FAF8F5]">Settat</span>
              <span className="text-xs text-neutral-400 font-mono">Lycée Technique</span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-wider">
                <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" /> Avaliações
              </div>
              <span className="font-title text-2xl sm:text-3xl font-bold block text-[#FAF8F5]">5.0★</span>
              <span className="text-xs text-neutral-400 font-mono">Clientes Satisfeitas</span>
            </div>
          </div>
        </div>

        {/* Right Column Showcase Image with Suainize's Work */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 aspect-[3/4] shadow-2xl group">
            <img
              src="/assets/aistudio/WhatsApp_Image_2026-10-27_at_22.17.23_96bd736b.jpeg"
              alt="Trabalho real de Knotless Box Braids por Suainize"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181615] via-transparent to-transparent opacity-85" />

            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#181615]/90 backdrop-blur-md border border-neutral-800/90 shadow-lg">
              <p className="font-title text-lg font-bold text-[#FAF8F5]">Knotless Box Braids Impecáveis</p>
              <p className="text-xs text-neutral-400 mt-1">Foto real de cliente atendida por Suainize no salão Nize em Settat.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
