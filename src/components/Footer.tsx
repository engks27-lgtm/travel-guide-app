import React from 'react';
import { Compass, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 mt-20 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-white">
              <Compass className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg text-white tracking-tight">트립파인더 (TripFinder)</span>
          </div>

          <p className="text-xs text-slate-400 text-center md:text-right max-w-md">
            Next.js + TypeScript + Tailwind CSS로 제작된 맞춤 여행지 추천 서비스입니다.<br />
            실제 API 연동 전 로컬 데이터 기반 인터랙션 프론트엔드로 동작합니다.
          </p>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 TripFinder. All rights reserved.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for Travelers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
