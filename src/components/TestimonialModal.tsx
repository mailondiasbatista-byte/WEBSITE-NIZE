import React, { useState } from 'react';
import { X, Star, Send } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTestimonial: (newReview: Testimonial) => void;
}

export const TestimonialModal: React.FC<TestimonialModalProps> = ({ isOpen, onClose, onAddTestimonial }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('Cliente do Atelier');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment) return;

    const initials = name
      .split(' ')
      .map((part) => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();

    const newReview: Testimonial = {
      id: Date.now().toString(),
      name,
      role,
      comment,
      rating,
      initials: initials || 'CS',
      date: 'Recente',
    };

    onAddTestimonial(newReview);
    setName('');
    setComment('');
    setRole('Cliente do Atelier');
    setRating(5);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#181615] border border-neutral-800 rounded-3xl w-full max-w-lg p-6 sm:p-8 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-neutral-400 hover:text-white p-2 rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-xs font-mono uppercase text-[#D4AF37] tracking-widest block">
            // Experiência no Atelier
          </span>
          <h3 className="font-title text-2xl font-bold mt-1 text-[#FAF8F5]">Deixar seu Depoimento</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">Seu Nome Completo</label>
            <input
              type="text"
              required
              placeholder="Ex: Patricia Souza"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">Tipo de Serviço Realizado</label>
            <input
              type="text"
              placeholder="Ex: Cliente de Balayage, Corte Visagista..."
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">Avaliação</label>
            <div className="flex gap-2 p-2 bg-neutral-900 border border-neutral-800 rounded-xl">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className="p-1 transition-transform hover:scale-110 cursor-pointer"
                >
                  <Star
                    className={`w-6 h-6 ${
                      star <= rating ? 'text-[#D4AF37] fill-[#D4AF37]' : 'text-neutral-600'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">Seu Depoimento</label>
            <textarea
              required
              rows={3}
              placeholder="Conte como foi sua transformação no Atelier..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-[#FAF8F5] hover:bg-[#D4AF37] text-[#181615] font-bold rounded-xl uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer mt-2"
          >
            <Send className="w-4 h-4" /> Enviar Depoimento
          </button>
        </form>
      </div>
    </div>
  );
};
