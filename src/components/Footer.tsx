import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { Instagram, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-800 py-12 bg-[#181615]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-400">
        <div className="space-y-1 text-center md:text-left">
          <p className="font-semibold text-neutral-300">© 2026 {SALON_INFO.fullName}. Settat / Liceu Técnico.</p>
          <p className="text-[#D4AF37] text-[11px] font-mono flex items-center justify-center md:justify-start gap-1">
            <MapPin className="w-3 h-3 inline" /> {SALON_INFO.address}, {SALON_INFO.cityState}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href={SALON_INFO.instagram}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 font-medium"
          >
            <Instagram className="w-4 h-4 text-[#D4AF37]" />
            <span>Instagram: {SALON_INFO.instagramHandle}</span>
          </a>

          <a
            href={`https://wa.me/${SALON_INFO.phoneRaw}`}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 font-mono"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>WhatsApp: {SALON_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
