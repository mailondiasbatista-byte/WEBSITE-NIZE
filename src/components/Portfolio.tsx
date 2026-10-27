import React, { useState } from 'react';
import { GALLERY_DATA } from '../data/salonData';
import { GalleryItem } from '../types';
import { LightboxModal } from './LightboxModal';
import { Maximize2 } from 'lucide-react';

interface PortfolioProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = ['todos', 'Balayage', 'Mechas', 'Corte', 'Atelier Signature'];

  const filteredGallery = GALLERY_DATA.filter(
    (item) => activeCategory === 'todos' || item.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-24 border-t border-neutral-800/60 bg-[#2A2624]/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header and Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-title text-4xl font-bold text-[#FAF8F5]">Galeria de Resultados</h2>
          </div>

          <div className="flex flex-wrap gap-1.5 bg-neutral-900/80 p-1.5 rounded-full border border-neutral-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#FAF8F5] text-[#181615] shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="gallery-card relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 aspect-[3/4] group cursor-pointer shadow-lg"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="gallery-img w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-[#181615]/80 backdrop-blur-md border border-neutral-700/60 text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider">
                  {item.tag}
                </span>
              </div>

              {/* Top Zoom Icon */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-[#181615]/80 text-[#FAF8F5]">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#181615] via-[#181615]/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h4 className="font-title text-xl font-bold text-white leading-tight">{item.title}</h4>
                <p className="text-xs text-neutral-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity line-clamp-2 duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeItem}
        onClose={() => setActiveItem(null)}
        onOpenBooking={onOpenBooking}
      />
    </section>
  );
};
