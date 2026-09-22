'use client';

import React from 'react';
import { Compass, Sparkles, MapPin, DollarSign, Calendar, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onStart: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStart }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 bg-[#f6f6f6]">
      {/* Background Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0cefd3]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-[#0cefd3]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e6fdfa] border border-[#0cefd3]/40 text-[#007a6c] text-xs sm:text-sm font-bold mb-6 shadow-sm animate-fade-in">
          <Sparkles className="w-4 h-4 text-[#00bfa8]" />
          <span>취향과 예산에 딱 맞는 여행지를 찾아드릴게요</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#222222] tracking-tight leading-tight sm:leading-tight mb-6">
          나에게 딱 맞는 완벽한<br />
          <span className="text-[#0cefd3] [text-shadow:_0_1px_2px_rgba(0,0,0,0.1)]">
            여행지를 추천받아보세요 ✈️
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#6c6d6f] mb-10 leading-relaxed font-normal">
          여행 스타일, 기간, 예산, 동행자 유형만 선택해보세요.<br className="hidden sm:inline" />
          알맞은 여행지와 함께 상세 추천 이유와 3일간의 추천 일정을 한 번에 확인하실 수 있습니다.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={onStart}
            className="w-full sm:w-auto px-8 py-4 rounded-[12px] bg-[#0cefd3] hover:bg-[#00d6bd] text-[#222222] font-extrabold text-base shadow-lg shadow-[#0cefd3]/25 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2.5 group"
          >
            <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
            <span>지금 추천 시작하기</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Feature Grid Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <div className="p-5 rounded-[12px] bg-white border border-[#e5e7eb] shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 text-left">
            <div className="p-3 rounded-[12px] bg-[#e6fdfa] text-[#00a894] shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-[#222222] text-sm mb-1">다양한 여행지 데이터</h3>
              <p className="text-xs text-[#6c6d6f] leading-relaxed">국내 제주·여수부터 유럽 스위스까지 알찬 명소 정보</p>
            </div>
          </div>

          <div className="p-5 rounded-[12px] bg-white border border-[#e5e7eb] shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 text-left">
            <div className="p-3 rounded-[12px] bg-[#e6fdfa] text-[#00a894] shrink-0">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-[#222222] text-sm mb-1">예산 및 일정 맞춤</h3>
              <p className="text-xs text-[#6c6d6f] leading-relaxed">50만원 알뜰 여행부터 150만원 힐링 여행까지 정밀 매칭</p>
            </div>
          </div>

          <div className="p-5 rounded-[12px] bg-white border border-[#e5e7eb] shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 text-left">
            <div className="p-3 rounded-[12px] bg-[#e6fdfa] text-[#00a894] shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-[#222222] text-sm mb-1">일자별 맞춤 코스</h3>
              <p className="text-xs text-slate-500 leading-relaxed">상세 일정 모달로 일차별 명소와 여행 꿀팁 제공</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
