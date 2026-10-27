import React from 'react';
import { X, Calendar, Sparkles } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onOpenBooking }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#181615] border border-neutral-800 rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl relative grid grid-cols-1 md:grid-cols-12 max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-neutral-400 hover:text-white p-2 rounded-full bg-neutral-900/80 border border-neutral-800 transition-colors cursor-pointer"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Preview Area */}
        <div className="md:col-span-7 bg-black flex items-center justify-center overflow-hidden relative min-h-[300px]">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover max-h-[70vh]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Content Details Area */}
        <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-mono uppercase text-[#D4AF37] tracking-wider block mb-1">
                // {item.category}
              </span>
              <h3 className="font-title text-2xl font-bold text-[#FAF8F5]">{item.title}</h3>
              <p className="text-xs font-medium text-neutral-400 mt-1">{item.tag}</p>
            </div>

            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              {item.description}
            </p>

            {item.technique && (
              <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800/80 text-xs">
                <span className="font-semibold text-[#D4AF37] flex items-center gap-1 mb-1">
                  <Sparkles className="w-3.5 h-3.5" /> Técnica Aplicada:
                </span>
                <span className="text-neutral-300">{item.technique}</span>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-neutral-800 space-y-3">
            <button
              onClick={() => {
                onClose();
                onOpenBooking(item.tag);
              }}
              className="w-full py-3.5 bg-[#FAF8F5] hover:bg-[#D4AF37] text-[#181615] font-bold rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Calendar className="w-4 h-4" /> Agendar Resultado Semelhante
            </button>
            <button
              onClick={onClose}
              className="w-full py-2.5 text-xs text-neutral-400 hover:text-white transition-colors text-center"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
