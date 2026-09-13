'use client';

import React from 'react';
import { Compass, Bookmark, Sparkles } from 'lucide-react';

interface HeaderProps {
  savedCount: number;
  onOpenSaved: () => void;
  onReset: () => void;
}

export const Header: React.FC<HeaderProps> = ({ savedCount, onOpenSaved, onReset }) => {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={onReset}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
            <Compass className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight text-slate-800">트립파인더</span>
              <span className="bg-sky-100 text-sky-700 text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Mock AI
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium hidden sm:block">나만의 맞춤 여행지 가이드</p>
          </div>
        </div>

        {/* Right Nav */}
        <div className="flex items-center gap-3">
          <button
            onClick={onReset}
            className="text-sm font-medium text-slate-600 hover:text-sky-600 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors hidden sm:block"
          >
            추천 시작
          </button>
          
          <button
            onClick={onOpenSaved}
            className="relative flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-100 hover:bg-slate-200/80 text-slate-700 text-sm font-medium transition-all"
          >
            <Bookmark className="w-4 h-4 text-sky-600" />
            <span>저장한 여행지</span>
            {savedCount > 0 && (
              <span className="bg-sky-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                {savedCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
