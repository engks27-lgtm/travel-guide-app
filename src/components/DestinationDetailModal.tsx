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
  Clock,
  Plane,
  Home,
  Copy,
  Share2,
  Star
} from 'lucide-react';

const ACCOMMODATION_LABELS: Record<string, string> = {
  hotel: '호텔',
  resort: '리조트',
  pension: '펜션/풀빌라',
  guesthouse: '게스트하우스',
  camping: '캠핑/글램핑',
};

interface DestinationDetailModalProps {
  result: RecommendationResult | null;
  isOpen: boolean;
  isSaved: boolean;
  onClose: () => void;
  onToggleSave: (id: string) => void;
  onCopyItinerary?: (msg: string) => void;
  onShareLink?: (msg: string) => void;
}

export const DestinationDetailModal: React.FC<DestinationDetailModalProps> = ({
  result,
  isOpen,
  isSaved,
  onClose,
  onToggleSave,
  onCopyItinerary,
  onShareLink,
}) => {
  if (!isOpen || !result) return null;

  const { destination, score, reason } = result;

  const handleCopyItineraryText = () => {
    let text = `[트립파인더] ${destination.name} 3일 추천 일정\n지역: ${destination.region}\n예상 경비: ${destination.estimatedCostText}\n\n`;
    destination.sampleItinerary.forEach((plan) => {
      text += `📌 Day ${plan.day}: ${plan.title}\n`;
      plan.spots.forEach((spot) => {
        text += `  - ${spot}\n`;
      });
      if (plan.tip) text += `  💡 팁: ${plan.tip}\n`;
      text += `\n`;
    });

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
    if (onCopyItinerary) {
      onCopyItinerary(`'${destination.name}' 3일 상세 일정이 복사되었습니다.`);
    }
  };

  const handleShareDestination = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
    }
    if (onShareLink) {
      onShareLink(`'${destination.name}' 여행지 추천 링크가 복사되었습니다.`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-3xl bg-white rounded-[12px] overflow-hidden shadow-2xl my-8 max-h-[90vh] flex flex-col border border-[#e5e7eb]"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-colors"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Header */}
        <div className="relative h-64 sm:h-80 w-full shrink-0 bg-[#222222]">
          <Image
            src={destination.imageUrl}
            alt={destination.name}
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          {/* Top Info */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-[#0cefd3] text-[#222222] font-extrabold text-xs shadow-md">
                {score}% 맞춤 추천
              </span>
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-medium text-xs flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#0cefd3]" />
                {destination.region}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-amber-400 font-bold text-xs flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span className="text-white">4.9 (1.2k)</span>
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
            <div className="p-3.5 rounded-[12px] bg-[#f3f4f5] border border-[#e5e7eb] flex items-center gap-3">
              <div className="p-2.5 rounded-[12px] bg-[#e6fdfa] text-[#00a894]">
                <Plane className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-[#6c6d6f] font-bold block uppercase">비행 시간</span>
                <span className="font-bold text-[#222222] text-xs sm:text-sm">약 {destination.flightTimeHours}시간</span>
              </div>
            </div>

            <div className="p-3.5 rounded-[12px] bg-[#f3f4f5] border border-[#e5e7eb] flex items-center gap-3">
              <div className="p-2.5 rounded-[12px] bg-[#e6fdfa] text-[#00a894]">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-[#6c6d6f] font-bold block uppercase">추천 여행 기간</span>
                <span className="font-bold text-[#222222] text-xs sm:text-sm">{destination.recommendedDurations.join(', ')}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-[12px] bg-[#f3f4f5] border border-[#e5e7eb] flex items-center gap-3">
              <div className="p-2.5 rounded-[12px] bg-[#e6fdfa] text-[#00a894]">
                <Wallet className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-[#6c6d6f] font-bold block uppercase">예상 경비 (1인)</span>
                <span className="font-bold text-[#222222] text-xs sm:text-sm">{destination.estimatedCostText}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-[12px] bg-[#f3f4f5] border border-[#e5e7eb] flex items-center gap-3">
              <div className="p-2.5 rounded-[12px] bg-[#e6fdfa] text-[#00a894]">
                <Sun className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-[#6c6d6f] font-bold block uppercase">추천 방문월</span>
                <span className="font-bold text-[#222222] text-xs sm:text-sm">
                  {destination.bestMonths.map(m => `${m}월`).join(', ')} ({destination.bestSeason})
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-[12px] bg-[#f3f4f5] border border-[#e5e7eb] col-span-2 sm:col-span-2 flex items-center gap-3">
              <div className="p-2.5 rounded-[12px] bg-[#e6fdfa] text-[#00a894]">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-[#6c6d6f] font-bold block uppercase">추천 숙소 형태</span>
                <span className="font-bold text-[#222222] text-xs sm:text-sm">
                  {destination.accommodationTypes.map(t => ACCOMMODATION_LABELS[t] || t).join(' · ')}
                </span>
              </div>
            </div>
          </div>

          {/* Recommendation Reason */}
          <div className="p-4 rounded-[12px] bg-[#e6fdfa] border border-[#0cefd3]/40 text-sm text-[#222222] leading-relaxed font-medium flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#00a894] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block text-[#007a6c] mb-1">AI 맞춤 추천 사유</span>
              {reason}
            </div>
          </div>

          {/* Overview Description */}
          <div>
            <h3 className="text-lg font-bold text-[#222222] mb-2">여행지 개요</h3>
            <p className="text-[#6c6d6f] text-sm leading-relaxed">
              {destination.description}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-lg font-bold text-[#222222] mb-3">핵심 포인트 & 인기 명소</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {destination.highlights.map((highlight, idx) => (
                <div key={idx} className="p-3.5 rounded-[12px] bg-[#e6fdfa] border border-[#0cefd3]/30 text-[#222222] text-xs font-bold flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00bfa8] shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sample Itinerary Day-by-Day */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <h3 className="text-lg font-bold text-[#222222] flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#00a894]" />
                <span>추천 일자별 코스 (Sample Itinerary)</span>
              </h3>

              {/* Copy Itinerary Action */}
              <button
                onClick={handleCopyItineraryText}
                className="px-3.5 py-1.5 rounded-[8px] bg-[#e6fdfa] hover:bg-[#0cefd3] text-[#007a6c] hover:text-[#222222] font-bold text-xs transition-colors flex items-center gap-1.5 border border-[#0cefd3]/40 self-start sm:self-auto"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>3일 일정 텍스트 전체 복사</span>
              </button>
            </div>

            <div className="space-y-4">
              {destination.sampleItinerary.map((plan) => (
                <div key={plan.day} className="p-5 rounded-[12px] border border-[#e5e7eb] bg-white shadow-sm hover:border-[#0cefd3] transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-[8px] bg-[#0cefd3] text-[#222222] font-black text-xs flex items-center justify-center shadow-sm">
                      Day {plan.day}
                    </span>
                    <h4 className="font-bold text-[#222222] text-sm sm:text-base">
                      {plan.title}
                    </h4>
                  </div>

                  {/* Spots List */}
                  <ul className="pl-4 space-y-1.5 border-l-2 border-[#e5e7eb] ml-4 mb-3">
                    {plan.spots.map((spot, sIdx) => (
                      <li key={sIdx} className="text-xs sm:text-sm text-[#222222] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0cefd3]" />
                        <span>{spot}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tip Box */}
                  {plan.tip && (
                    <div className="ml-4 p-2.5 rounded-[12px] bg-[#f3f4f5] border border-[#e5e7eb] text-xs text-[#222222] flex items-center gap-2 font-medium">
                      <Lightbulb className="w-4 h-4 text-[#00a894] shrink-0" />
                      <span><strong>여행 팁:</strong> {plan.tip}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#f3f4f5] border-t border-[#e5e7eb] flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSave(destination.id)}
              className={`px-4 sm:px-5 py-3 rounded-[12px] border text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors ${
                isSaved
                  ? 'border-rose-200 bg-rose-50 text-rose-600 hover:bg-rose-100'
                  : 'border-[#e5e7eb] bg-white text-[#222222] hover:bg-[#e8e9eb]'
              }`}
            >
              <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
              <span>{isSaved ? '보관함 제거' : '보관함 저장'}</span>
            </button>

            <button
              onClick={handleShareDestination}
              className="px-4 py-3 rounded-[12px] border border-[#e5e7eb] bg-white hover:bg-[#e6fdfa] text-[#222222] hover:text-[#007a6c] font-bold text-xs sm:text-sm transition-colors flex items-center gap-1.5"
            >
              <Share2 className="w-4 h-4 text-[#00a894]" />
              <span>공유하기</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-6 py-3 rounded-[12px] bg-[#222222] hover:bg-black text-white font-bold text-xs sm:text-sm transition-colors"
          >
            닫기
          </button>
        </div>

      </div>

    </div>
  );
};
