'use client';

import React from 'react';
import { Compass, Bookmark, Sparkles, Star, Share2 } from 'lucide-react';

interface HeaderProps {
  savedCount: number;
  onOpenSaved: () => void;
  onReset: () => void;
  onShareApp: () => void;
}

export const Header: React.FC<HeaderProps> = ({ savedCount, onOpenSaved, onReset, onShareApp }) => {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-[#e5e7eb] shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={onReset}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-[12px] bg-[#0cefd3] flex items-center justify-center text-[#222222] shadow-md shadow-[#0cefd3]/30 group-hover:scale-105 transition-transform">
            <Compass className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight text-[#222222]">트립파인더</span>
              <span className="bg-[#e6fdfa] text-[#007a6c] text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1 border border-[#0cefd3]/40">
                <Sparkles className="w-3 h-3 text-[#0cefd3]" /> Mock AI
              </span>
            </div>
            <p className="text-[11px] text-[#6c6d6f] font-medium hidden sm:block">나만의 맞춤 여행지 가이드</p>
          </div>
        </div>

        {/* Live Trust Metrics Badge (Center/Nav) */}
        <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f3f4f5] border border-[#e5e7eb] text-xs font-bold text-[#222222]">
          <div className="flex items-center text-amber-500">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span className="ml-1 font-extrabold text-[#222222]">4.9</span>
          </div>
          <span className="text-[#a6a7a9]">|</span>
          <span className="text-[#6c6d6f]">12,400+ 만족 추천 완료</span>
        </div>

        {/* Right Nav */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onShareApp}
            className="p-2.5 rounded-[12px] bg-[#f3f4f5] hover:bg-[#e6fdfa] text-[#222222] hover:text-[#007a6c] transition-colors border border-[#e5e7eb] flex items-center gap-1.5 text-xs font-bold"
            title="앱 공유하기"
          >
            <Share2 className="w-4 h-4 text-[#00a894]" />
            <span className="hidden sm:inline">공유</span>
          </button>
          
          <button
            onClick={onOpenSaved}
            className="relative flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-[12px] bg-[#f3f4f5] hover:bg-[#e8e9eb] text-[#222222] text-xs sm:text-sm font-bold transition-all border border-[#e5e7eb]"
          >
            <Bookmark className="w-4 h-4 text-[#00a894]" />
            <span className="hidden sm:inline">저장한 여행지</span>
            {savedCount > 0 && (
              <span className="bg-[#0cefd3] text-[#222222] text-xs font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                {savedCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
