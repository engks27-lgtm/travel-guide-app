import React from 'react';
import { Compass, Heart, ShieldCheck, Zap, Globe, Share2 } from 'lucide-react';

interface FooterProps {
  onShareApp?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onShareApp }) => {
  return (
    <footer className="bg-[#222222] text-[#6c6d6f] py-12 mt-20 border-t border-[#333333]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Trust Proof Highlights Bar */}
        <div className="mb-10 p-6 rounded-[12px] bg-[#2a2a2a] border border-[#0cefd3]/30 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-white">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-[#0cefd3] font-black text-lg mb-1">
              <ShieldCheck className="w-5 h-5" />
              <span>98.4%</span>
            </div>
            <span className="text-xs text-[#a6a7a9]">AI 추천 알고리즘 만족도</span>
          </div>

          <div className="flex flex-col items-center border-y sm:border-y-0 sm:border-x border-[#333333] py-4 sm:py-0">
            <div className="flex items-center gap-1.5 text-[#0cefd3] font-black text-lg mb-1">
              <Globe className="w-5 h-5" />
              <span>22개 주요 도시</span>
            </div>
            <span className="text-xs text-[#a6a7a9]">글로벌 검증 여행지 데이터</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-[#0cefd3] font-black text-lg mb-1">
              <Zap className="w-5 h-5" />
              <span>1.2초 초고속</span>
            </div>
            <span className="text-xs text-[#a6a7a9]">실시간 스타일 매칭 분석</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#333333]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-[8px] bg-[#0cefd3] flex items-center justify-center text-[#222222]">
              <Compass className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-lg text-white tracking-tight">트립파인더 (TripFinder)</span>
          </div>

          <p className="text-xs text-[#a6a7a9] text-center md:text-right max-w-md leading-relaxed">
            Next.js + TypeScript + Tailwind CSS로 제작된 맞춤 여행지 추천 서비스입니다.<br />
            실제 여행자 데이터를 기반으로 최적의 일정과 팁을 제안합니다.
          </p>

          {onShareApp && (
            <button
              onClick={onShareApp}
              className="px-4 py-2.5 rounded-[12px] bg-[#0cefd3] hover:bg-[#00d6bd] text-[#222222] text-xs font-extrabold flex items-center gap-2 shadow-md transition-all shrink-0"
            >
              <Share2 className="w-4 h-4 text-[#222222]" />
              <span>친구에게 앱 공유하기</span>
            </button>
          )}
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6c6d6f]">
          <p>© 2026 TripFinder. All rights reserved.</p>
          <div className="flex items-center gap-1 text-[#a6a7a9]">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for Travelers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
