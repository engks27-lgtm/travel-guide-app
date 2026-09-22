'use client';

import React from 'react';
import { RecommendationResult, TravelPreference } from '@/types/travel';
import { DestinationCard } from './DestinationCard';
import { Sparkles, RotateCcw, SlidersHorizontal, MapPin } from 'lucide-react';

interface ResultSectionProps {
  results: RecommendationResult[];
  preference: TravelPreference;
  savedIds: string[];
  onToggleSave: (id: string) => void;
  onOpenDetail: (result: RecommendationResult) => void;
  onReset: () => void;
}

export const ResultSection: React.FC<ResultSectionProps> = ({
  results,
  preference,
  savedIds,
  onToggleSave,
  onOpenDetail,
  onReset,
}) => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      
      {/* Header Banner */}
      <div className="bg-[#222222] rounded-[12px] p-6 sm:p-8 text-white mb-10 shadow-xl relative overflow-hidden border border-[#0cefd3]/30">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#0cefd3]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0cefd3]/20 text-[#0cefd3] text-xs font-bold border border-[#0cefd3]/40 backdrop-blur-md mb-3">
              <Sparkles className="w-4 h-4 text-[#0cefd3]" />
              <span>AI 알고리즘 분석 완료</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white mb-2">
              고객님만을 위한 <span className="text-[#0cefd3]">BEST 3 여행지</span>
            </h2>
            
            <p className="text-xs sm:text-sm text-slate-300 flex flex-wrap items-center gap-2">
              <span className="bg-black/40 px-2.5 py-1 rounded-[8px] text-[#0cefd3] font-bold border border-[#0cefd3]/30">
                #{preference.style}
              </span>
              <span className="bg-black/40 px-2.5 py-1 rounded-[8px] text-[#0cefd3] font-bold border border-[#0cefd3]/30">
                #{preference.duration}
              </span>
              <span className="bg-black/40 px-2.5 py-1 rounded-[8px] text-[#0cefd3] font-bold border border-[#0cefd3]/30">
                #{preference.budget}
              </span>
              <span className="bg-black/40 px-2.5 py-1 rounded-[8px] text-[#0cefd3] font-bold border border-[#0cefd3]/30">
                #{preference.companion} 동행
              </span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onReset}
              className="px-5 py-3.5 rounded-[12px] bg-[#0cefd3] hover:bg-[#00d6bd] text-[#222222] font-extrabold text-sm shadow-md transition-all flex items-center gap-2 active:scale-95"
            >
              <RotateCcw className="w-4 h-4 text-[#222222]" />
              <span>조건 수정 / 다시 추천받기</span>
            </button>
          </div>
        </div>
      </div>

      {/* Recommended Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
        {results.map((item, idx) => (
          <DestinationCard
            key={item.destination.id}
            result={item}
            rank={idx + 1}
            isSaved={savedIds.includes(item.destination.id)}
            onToggleSave={onToggleSave}
            onOpenDetail={onOpenDetail}
          />
        ))}
      </div>

      {/* Bottom Floating Bar / Re-evaluate Callout */}
      <div className="bg-white rounded-[12px] p-6 border border-[#e5e7eb] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-[12px] bg-[#e6fdfa] text-[#00a894]">
            <SlidersHorizontal className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-[#222222] text-sm">마음에 드는 여행지가 없으신가요?</h4>
            <p className="text-xs text-[#6c6d6f]">예산이나 기간, 여행 스타일을 변경하여 다시 추천받아보세요.</p>
          </div>
        </div>

        <button
          onClick={onReset}
          className="px-6 py-3 rounded-[12px] bg-[#f3f4f5] hover:bg-[#e8e9eb] text-[#222222] font-bold text-sm transition-colors shrink-0 flex items-center gap-2 border border-[#e5e7eb]"
        >
          <RotateCcw className="w-4 h-4 text-[#00a894]" />
          <span>조건 새로 입력하기</span>
        </button>
      </div>

    </section>
  );
};
