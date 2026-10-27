import React from 'react';
import { MapPin, Clock, Phone, MessageCircle, Navigation, Mail } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 border-t border-neutral-800/60 bg-[#2A2624]/20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Side Details */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h2 className="font-title text-4xl font-bold text-[#FAF8F5]">Venha nos Visitar</h2>
            </div>

            <div className="space-y-6 text-neutral-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-xl text-[#D4AF37] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#FAF8F5]">Endereço</h4>
                  <p className="text-sm text-neutral-400 mt-0.5 leading-relaxed">
                    {SALON_INFO.address}<br />
                    {SALON_INFO.cityState}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-xl text-[#D4AF37] shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#FAF8F5]">Horários de Atendimento</h4>
                  <p className="text-sm text-neutral-400 mt-0.5 leading-relaxed">
                    {SALON_INFO.hoursWeekdays}<br />
                    {SALON_INFO.hoursWeekend}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-xl text-[#D4AF37] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#FAF8F5]">Contato Direto</h4>
                  <p className="text-sm text-neutral-400 mt-0.5 leading-relaxed flex flex-col gap-1">
                    <span>WhatsApp: {SALON_INFO.phoneDisplay}</span>
                    <span className="flex items-center gap-1.5 text-xs text-neutral-400">
                      <Mail className="w-3.5 h-3.5 text-[#D4AF37]" /> {SALON_INFO.email}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${SALON_INFO.phoneRaw}?text=${encodeURIComponent('Olá! Gostaria de tirar uma dúvida sobre o Atelier.')}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full text-xs uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg shadow-emerald-600/10 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" /> Falar no WhatsApp
              </a>
              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 border border-neutral-700 hover:border-[#FAF8F5] text-white font-bold rounded-full text-xs uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-[#D4AF37]" /> Abrir no Maps
              </a>
            </div>
          </div>

          {/* Right Side Embedded Map Container */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-neutral-800 min-h-[380px] h-full relative bg-neutral-900 shadow-2xl">
            <iframe
              title="Localização do Salão no Google Maps"
              src={SALON_INFO.mapsEmbedSrc}
              className="w-full h-full min-h-[380px] border-0 grayscale contrast-125 opacity-85 hover:opacity-100 transition-opacity duration-300"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
