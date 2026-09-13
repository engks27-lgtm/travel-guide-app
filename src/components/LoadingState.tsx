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
      <div className="bg-white rounded-3xl p-10 border border-slate-200/80 shadow-2xl flex flex-col items-center">
        
        {/* Animated Icon Container */}
        <div className="relative mb-8">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-teal-400 p-1 animate-spin-slow shadow-xl shadow-sky-500/20">
            <div className="w-full h-full bg-white rounded-[22px] flex items-center justify-center">
              <Compass className="w-12 h-12 text-sky-600 animate-pulse" />
            </div>
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-amber-400 text-white flex items-center justify-center shadow-md animate-bounce">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="absolute -bottom-1 -left-2 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
            <MapPin className="w-4 h-4" />
          </div>
        </div>

        {/* Progress Text */}
        <h3 className="text-xl font-extrabold text-slate-900 mb-2 flex items-center gap-2">
          <span>AI 맞춤 여행지 분석 중</span>
          <Search className="w-5 h-5 text-sky-500 animate-pulse" />
        </h3>

        <div className="h-12 flex items-center justify-center">
          <p className="text-sm font-medium text-slate-600 animate-fade-in transition-all">
            {MESSAGES[msgIdx]}
          </p>
        </div>

        {/* Loading Bar */}
        <div className="w-full max-w-xs bg-slate-100 h-2 rounded-full overflow-hidden mt-4">
          <div className="bg-gradient-to-r from-sky-500 to-indigo-600 h-full rounded-full animate-loading-bar" />
        </div>
      </div>
    </div>
  );
};
