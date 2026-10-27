import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['sobre', 'servicos', 'portfolio', 'depoimentos', 'contato'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#sobre', label: 'SOBRE', id: 'sobre' },
    { href: '#servicos', label: 'SERVIÇOS', id: 'servicos' },
    { href: '#portfolio', label: 'GALERIA', id: 'portfolio' },
    { href: '#depoimentos', label: 'DEPOIMENTOS', id: 'depoimentos' },
    { href: '#contato', label: 'CONTATO', id: 'contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#181615]/90 backdrop-blur-md border-b border-neutral-800/80 shadow-lg py-3'
          : 'bg-[#181615]/80 backdrop-blur-md border-b border-neutral-800/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="font-title text-xl sm:text-2xl font-bold tracking-tight text-[#FAF8F5] hover:text-[#D4AF37] transition-colors flex items-center gap-2 group"
        >
          {SALON_INFO.name}
          <span className="text-xs font-normal tracking-widest text-neutral-400 block sm:inline font-body uppercase">
            / {SALON_INFO.subtitle}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`transition-colors relative py-1 ${
                activeSection === link.id
                  ? 'text-[#D4AF37] font-semibold'
                  : 'text-neutral-300 hover:text-[#FAF8F5]'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37] rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="relative group overflow-hidden rounded-full bg-[#FAF8F5] px-5 py-2.5 text-xs font-bold text-[#181615] tracking-wider uppercase transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#181615] active:scale-95 shadow-md shadow-[#FAF8F5]/5 cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#181615]" />
              Agendar Horário
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-neutral-300 hover:text-white p-2 rounded-lg hover:bg-neutral-800/50 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-[#181615] px-6 py-5 space-y-4 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-sm font-medium transition-colors py-2 border-b border-neutral-800/40 ${
                activeSection === link.id
                  ? 'text-[#D4AF37] font-bold pl-2 border-l-2 border-[#D4AF37]'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-[#D4AF37] text-[#181615] font-bold rounded-full text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Agendar Atendimento
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
