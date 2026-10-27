import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle, Calendar, Clock, Sparkles } from 'lucide-react';
import { SALON_INFO, SERVICES_DATA, TIME_SLOTS_BY_SHIFT } from '../data/salonData';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  preSelectedService?: string;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  preSelectedService = 'Balayage & Blond Design',
  onClose,
  onShowToast,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    service: preSelectedService,
    date: new Date().toISOString().split('T')[0],
    shift: 'Manhã (09h - 12h)',
    timeSlot: '10:00',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preSelectedService) {
      setFormData((prev) => ({ ...prev, service: preSelectedService }));
    }
  }, [preSelectedService]);

  if (!isOpen) return null;

  const handleShiftChange = (newShift: string) => {
    const defaultSlot = TIME_SLOTS_BY_SHIFT[newShift]?.[0] || '10:00';
    setFormData((prev) => ({
      ...prev,
      shift: newShift,
      timeSlot: defaultSlot,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedDate = new Date(formData.date + 'T00:00:00').toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    const message = `Olá! Gostaria de agendar um horário no ${SALON_INFO.fullName}.%0A%0A*Nome:* ${formData.name}%0A*Telefone:* ${formData.phone}%0A*Serviço:* ${formData.service}%0A*Data:* ${formattedDate}%0A*Turno:* ${formData.shift} (${formData.timeSlot})${
      formData.notes ? `%0A*Observações:* ${formData.notes}` : ''
    }`;

    const whatsappUrl = `https://wa.me/${SALON_INFO.phoneRaw}?text=${message}`;

    setIsSubmitted(true);
    onShowToast('Solicitação processada! Abrindo WhatsApp...');

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#181615] border border-neutral-800 rounded-3xl w-full max-w-xl p-6 sm:p-8 relative shadow-2xl max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-6 right-6 text-neutral-400 hover:text-white p-2 rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
          aria-label="Fechar modal de agendamento"
        >
          <X className="w-6 h-6" />
        </button>

        {!isSubmitted ? (
          <>
            <div className="mb-6">
              <span className="text-xs font-mono uppercase text-[#D4AF37] tracking-widest block">
                // Agendamento Rápido
              </span>
              <h3 className="font-title text-2xl font-bold mt-1 text-[#FAF8F5]">Reserve Seu Horário</h3>
              <p className="text-xs text-neutral-400 mt-1">
                Preencha seus dados para enviar a pré-reserva direto ao WhatsApp do Atelier.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">Seu Nome Completo</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Ana Silva"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">WhatsApp de Contato</label>
                <input
                  type="tel"
                  required
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">Serviço Desejado</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                >
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.title}>
                      {srv.title} ({srv.price})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">Data Preferencial</label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">Turno</label>
                  <select
                    value={formData.shift}
                    onChange={(e) => handleShiftChange(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Manhã (09h - 12h)">Manhã (09h - 12h)</option>
                    <option value="Tarde (13h - 17h)">Tarde (13h - 17h)</option>
                    <option value="Fim de Tarde (17h - 19h)">Fim de Tarde (17h - 19h)</option>
                  </select>
                </div>
              </div>

              {/* Specific Time Slot Selector */}
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" /> Horário Preferencial Estimado
                </label>
                <div className="flex flex-wrap gap-2">
                  {(TIME_SLOTS_BY_SHIFT[formData.shift] || []).map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setFormData({ ...formData, timeSlot: slot })}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                        formData.timeSlot === slot
                          ? 'bg-[#D4AF37] text-[#181615] font-bold'
                          : 'bg-neutral-900 border border-neutral-800 text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Observações ou Histórico Capilar (Opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex: Cabelo com tinta preta antiga, mechas anteriores, etc."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#FAF8F5] hover:bg-[#D4AF37] text-[#181615] font-bold rounded-xl uppercase tracking-wider text-xs transition-colors mt-4 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#FAF8F5]/5"
              >
                <Send className="w-4 h-4" /> Confirmar e Enviar via WhatsApp
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8 space-y-5 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="font-title text-2xl font-bold text-[#FAF8F5]">Solicitação Processada!</h4>
            <p className="text-neutral-300 text-sm max-w-md mx-auto leading-relaxed">
              Estamos redirecionando você para o WhatsApp oficial do <strong className="text-white">{SALON_INFO.fullName}</strong> para confirmar sua vaga na agenda.
            </p>

            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 text-left text-xs space-y-2 text-neutral-300 font-mono">
              <div className="flex justify-between border-b border-neutral-800 pb-1">
                <span className="text-neutral-500">Serviço:</span>
                <span className="text-[#D4AF37] font-semibold">{formData.service}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-800 pb-1">
                <span className="text-neutral-500">Data/Horário:</span>
                <span>{formData.date} às {formData.timeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Cliente:</span>
                <span>{formData.name}</span>
              </div>
            </div>

            <div className="pt-2 space-y-3">
              <button
                onClick={() => {
                  const formattedDate = new Date(formData.date + 'T00:00:00').toLocaleDateString('pt-BR');
                  const message = `Olá! Gostaria de agendar um horário no ${SALON_INFO.fullName}.%0A%0A*Nome:* ${formData.name}%0A*Telefone:* ${formData.phone}%0A*Serviço:* ${formData.service}%0A*Data:* ${formattedDate}%0A*Turno:* ${formData.shift} (${formData.timeSlot})${
                    formData.notes ? `%0A*Observações:* ${formData.notes}` : ''
                  }`;
                  window.open(`https://wa.me/${SALON_INFO.phoneRaw}?text=${message}`, '_blank');
                }}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                Reabrir WhatsApp
              </button>
              <button
                onClick={resetAndClose}
                className="w-full py-2.5 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                Concluir e Voltar ao Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
