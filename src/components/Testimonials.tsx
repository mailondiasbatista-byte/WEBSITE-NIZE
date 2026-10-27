import React, { useState } from 'react';
import { Star, MessageSquarePlus, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/salonData';
import { Testimonial } from '../types';
import { TestimonialModal } from './TestimonialModal';

interface TestimonialsProps {
  onShowToast: (msg: string) => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onShowToast }) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(TESTIMONIALS_DATA);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddReview = (newReview: Testimonial) => {
    setTestimonials([newReview, ...testimonials]);
    onShowToast('Obrigada pelo carinho! Seu depoimento foi publicado.');
  };

  return (
    <section id="depoimentos" className="py-24 border-t border-neutral-800/60 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-title text-4xl font-bold text-[#FAF8F5]">O Que Dizem As Clientes</h2>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="self-start md:self-auto px-6 py-3 border border-neutral-700 hover:border-[#D4AF37] hover:bg-neutral-800/50 text-[#FAF8F5] rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4 text-[#D4AF37]" /> Deixar Depoimento
          </button>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 relative flex flex-col justify-between hover:border-neutral-700 transition-all duration-300 shadow-xl group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-neutral-800/80 group-hover:text-[#D4AF37]/20 transition-colors pointer-events-none" />

              <div className="space-y-4">
                <div className="flex gap-1 text-[#D4AF37]">
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-neutral-300 font-light text-sm italic leading-relaxed">
                  "{review.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-[#D4AF37] border border-neutral-700/60 font-title text-sm">
                  {review.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#FAF8F5]">{review.name}</h4>
                  <span className="text-xs text-neutral-500 font-mono block">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Form Modal */}
      <TestimonialModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTestimonial={handleAddReview}
      />
    </section>
  );
};
