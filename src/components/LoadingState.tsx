'use client';

import React, { useEffect, useState } from 'react';
import { Compass, Sparkles, MapPin, Search } from 'lucide-react';

const MESSAGES = [
  '선택하신 조건(스타일, 예산, 기간)을 확인하고 있습니다...',
  '10여 개 인기 여행지의 최신 미식·힐링 명소를 스캔하고 있습니다...',
  '동행 유형에 따른 최고 만족도 추천 코스를 매칭 중입니다...',
  '분석 완료! 최고의 맞춤 여행지를 가져옵니다 ✨'
];

export const LoadingState: React.FC = () => {
  const [msgIdx, setMsgIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setMsgIdx((prev) => (prev + 1) % MESSAGES.length);
    }, 450);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center">
      <div className="bg-white rounded-[12px] p-10 border border-[#e5e7eb] shadow-xl flex flex-col items-center">
        
        {/* Animated Icon Container */}
        <div className="relative mb-8">
          <div className="w-24 h-24 rounded-[12px] bg-[#0cefd3] p-1 animate-spin-slow shadow-xl shadow-[#0cefd3]/30">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
              <Compass className="w-12 h-12 text-[#0cefd3] animate-pulse" />
            </div>
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0cefd3] text-[#222222] flex items-center justify-center shadow-md animate-bounce font-black">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="absolute -bottom-1 -left-2 w-8 h-8 rounded-full bg-[#222222] text-[#0cefd3] flex items-center justify-center shadow-md">
            <MapPin className="w-4 h-4" />
          </div>
        </div>

        {/* Progress Text */}
        <h3 className="text-xl font-extrabold text-[#222222] mb-2 flex items-center gap-2">
          <span>AI 맞춤 여행지 분석 중</span>
          <Search className="w-5 h-5 text-[#00bfa8] animate-pulse" />
        </h3>

        <div className="h-12 flex items-center justify-center">
          <p className="text-sm font-medium text-[#6c6d6f] animate-fade-in transition-all">
            {MESSAGES[msgIdx]}
          </p>
        </div>

        {/* Loading Bar */}
        <div className="w-full max-w-xs bg-[#f3f4f5] h-2 rounded-full overflow-hidden mt-4 border border-[#e5e7eb]">
          <div className="bg-[#0cefd3] h-full rounded-full animate-loading-bar" />
        </div>
      </div>
    </div>
  );
};
