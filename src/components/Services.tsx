import React, { useState } from 'react';
import { Sparkles, Scissors, Droplet, Palette, Wind, HeartHandshake, Clock, ChevronRight, Search } from 'lucide-react';
import { SERVICES_DATA } from '../data/salonData';
import { ServiceCategory } from '../types';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'scissors':
        return <Scissors className="w-5 h-5" />;
      case 'droplet':
        return <Droplet className="w-5 h-5" />;
      case 'palette':
        return <Palette className="w-5 h-5" />;
      case 'wind':
        return <Wind className="w-5 h-5" />;
      case 'heart-handshake':
        return <HeartHandshake className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory = selectedCategory === 'todos' || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="servicos" className="py-24 border-t border-neutral-800/60 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header and Filter Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div>
            <h2 className="font-title text-4xl font-bold text-[#FAF8F5]">Experiências Capilares</h2>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar serviço..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-neutral-900/80 border border-neutral-800 rounded-full pl-10 pr-4 py-2 text-xs text-[#FAF8F5] focus:outline-none focus:border-[#D4AF37] w-full sm:w-48 transition-all"
              />
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-1.5 bg-neutral-900/80 p-1.5 rounded-full border border-neutral-800">
              <button
                onClick={() => setSelectedCategory('todos')}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  selectedCategory === 'todos'
                    ? 'bg-[#FAF8F5] text-[#181615] shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                TODOS
              </button>
              <button
                onClick={() => setSelectedCategory('coloracao')}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  selectedCategory === 'coloracao'
                    ? 'bg-[#FAF8F5] text-[#181615] shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                COLORAÇÃO & MECHAS
              </button>
              <button
                onClick={() => setSelectedCategory('cortes')}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  selectedCategory === 'cortes'
                    ? 'bg-[#FAF8F5] text-[#181615] shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                CORTES
              </button>
              <button
                onClick={() => setSelectedCategory('tratamentos')}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  selectedCategory === 'tratamentos'
                    ? 'bg-[#FAF8F5] text-[#181615] shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                TRATAMENTOS
              </button>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-neutral-900/50 border border-neutral-800/80 rounded-2xl p-6 hover:border-neutral-700 hover:bg-neutral-900/80 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="p-3 rounded-xl bg-neutral-800/80 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#181615] transition-colors shadow-inner">
                      {getIcon(service.iconName)}
                    </span>
                    <span className="font-title text-xl font-bold text-[#D4AF37]">{service.price}</span>
                  </div>
                  <h3 className="font-title text-xl font-bold mb-2 text-[#FAF8F5] group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 text-sm font-light mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-neutral-800/60 pt-4 text-xs text-neutral-400">
                  <span className="flex items-center gap-1.5 font-mono">
                    <Clock className="w-4 h-4 text-[#D4AF37]" /> {service.duration}
                  </span>
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="font-bold text-[#FAF8F5] hover:text-[#D4AF37] transition-colors flex items-center gap-1 group/btn cursor-pointer py-1 px-3 rounded-full hover:bg-neutral-800/60"
                  >
                    Agendar
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-[#D4AF37]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-neutral-900/30 border border-neutral-800/60 rounded-2xl">
            <p className="text-neutral-400 font-light">Nenhum serviço encontrado com os filtros selecionados.</p>
            <button
              onClick={() => {
                setSelectedCategory('todos');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2 bg-neutral-800 text-[#D4AF37] font-semibold text-xs rounded-full hover:bg-neutral-700 transition-colors"
            >
              Limpar Filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
