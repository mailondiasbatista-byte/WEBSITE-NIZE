import React, { useEffect } from 'react';
import { Sparkles, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-[#181615] border border-[#D4AF37]/60 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-md">
        <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0 animate-pulse" />
        <span className="text-xs font-medium">{message}</span>
        <button
          onClick={onClose}
          className="ml-2 text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-neutral-800 transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
