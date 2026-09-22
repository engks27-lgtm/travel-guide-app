'use client';

import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastAlertProps {
  message: string | null;
  onClose: () => void;
  duration?: number;
}

export const ToastAlert: React.FC<ToastAlertProps> = ({
  message,
  onClose,
  duration = 3000,
}) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3.5 rounded-[12px] bg-[#222222] text-white text-xs sm:text-sm font-bold shadow-2xl border border-[#0cefd3]/40 animate-bounce-short">
      <CheckCircle2 className="w-5 h-5 text-[#0cefd3] shrink-0" />
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-2 p-1 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        aria-label="닫기"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
