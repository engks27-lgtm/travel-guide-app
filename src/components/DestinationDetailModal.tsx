'use client';

import React from 'react';
import Image from 'next/image';
import { RecommendationResult } from '@/types/travel';
import { 
  X, 
  MapPin, 
  Sparkles, 
  Calendar, 
  Wallet, 
  Sun, 
  Heart, 
  CheckCircle,
  Lightbulb,
  Clock
} from 'lucide-react';

interface DestinationDetailModalProps {
  result: RecommendationResult | null;
  isOpen: boolean;
  isSaved: boolean;
  onClose: () => void;
  onToggleSave: (id: string) => void;
}

export const DestinationDetailModal: React.FC<DestinationDetailModalProps> = ({
  result,
  isOpen,
  isSaved,
  onClose,
  onToggleSave,
}) => {
  if (!isOpen || !result) return null;

  const { destination, score, reason } = result;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl my-8 max-h-[90vh] flex flex-col border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/50 hover:bg-slate-950/80 text-white flex items-center justify-center backdrop-blur-md transition-colors"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Header */}
        <div className="relative h-64 sm:h-80 w-full shrink-0 bg-slate-900">
          <Image
            src={destination.imageUrl}
            alt={destination.name}
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

          {/* Top Info */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-sky-500 text-white font-black text-xs shadow-md">
                {score}% 맞춤 추천
              </span>
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-medium text-xs flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                {destination.region}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {destination.name}
            </h2>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">

          {/* Quick Meta Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-sky-100 text-sky-700">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-bold block uppercase">추천 여행 기간</span>
                <span className="font-bold text-slate-800 text-xs sm:text-sm">{destination.recommendedDurations.join(', ')}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-100 text-indigo-700">
                <Wallet className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-bold block uppercase">예상 경비 (1인)</span>
                <span className="font-bold text-slate-800 text-xs sm:text-sm">{destination.estimatedCostText}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 col-span-2 sm:col-span-1 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-100 text-amber-700">
                <Sun className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-bold block uppercase">최적 방문 시기</span>
                <span className="font-bold text-slate-800 text-xs sm:text-sm">{destination.bestSeason}</span>
              </div>
            </div>
          </div>

          {/* Recommendation Reason */}
          <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 text-sm text-sky-900 leading-relaxed font-medium flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block text-sky-800 mb-1">AI 맞춤 추천 사유</span>
              {reason}
            </div>
          </div>

          {/* Overview Description */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">여행지 개요</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {destination.description}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">핵심 포인트 & 인기 명소</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {destination.highlights.map((highlight, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-teal-50/70 border border-teal-100 text-teal-900 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sample Itinerary Day-by-Day */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-sky-500" />
              <span>추천 일자별 코스 (Sample Itinerary)</span>
            </h3>

            <div className="space-y-4">
              {destination.sampleItinerary.map((plan) => (
                <div key={plan.day} className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-sky-300 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-xl bg-sky-600 text-white font-black text-xs flex items-center justify-center shadow-sm">
                      Day {plan.day}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      {plan.title}
                    </h4>
                  </div>

                  {/* Spots List */}
                  <ul className="pl-4 space-y-1.5 border-l-2 border-slate-200 ml-4 mb-3">
                    {plan.spots.map((spot, sIdx) => (
                      <li key={sIdx} className="text-xs sm:text-sm text-slate-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                        <span>{spot}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tip Box */}
                  {plan.tip && (
                    <div className="ml-4 p-2.5 rounded-xl bg-amber-50 border border-amber-200/70 text-xs text-amber-900 flex items-center gap-2 font-medium">
                      <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
                      <span><strong>여행 팁:</strong> {plan.tip}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-4">
          <button
            onClick={() => onToggleSave(destination.id)}
            className={`px-5 py-3 rounded-xl border text-sm font-bold flex items-center gap-2 transition-colors ${
              isSaved
                ? 'border-rose-200 bg-rose-50 text-rose-600 hover:bg-rose-100'
                : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
            <span>{isSaved ? '보관함에서 제거' : '보관함에 저장'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors"
          >
            닫기
          </button>
        </div>

      </div>

    </div>
  );
};
