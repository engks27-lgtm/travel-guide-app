'use client';

import React from 'react';
import Image from 'next/image';
import { RecommendationResult } from '@/types/travel';
import { 
  Heart, 
  MapPin, 
  Calendar, 
  Wallet, 
  Sparkles, 
  ArrowRight,
  CheckCircle,
  Award
} from 'lucide-react';

interface DestinationCardProps {
  result: RecommendationResult;
  rank: number; // 1, 2, 3
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onOpenDetail: (result: RecommendationResult) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  result,
  rank,
  isSaved,
  onToggleSave,
  onOpenDetail,
}) => {
  const { destination, score, reason } = result;

  return (
    <div className="bg-white rounded-[12px] overflow-hidden border border-[#e5e7eb] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
      
      {/* Image Header */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#f3f4f5]">
        <Image
          src={destination.imageUrl}
          alt={destination.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />

        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Rank Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-full bg-[#222222] text-[#0cefd3] text-xs font-black tracking-wider uppercase shadow-md flex items-center gap-1.5 border border-[#0cefd3]/30">
            <Award className="w-4 h-4 text-[#0cefd3]" />
            <span>TOP {rank} 추천</span>
          </span>
        </div>

        {/* Heart / Save Button */}
        <button
          onClick={() => onToggleSave(destination.id)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-[#222222] flex items-center justify-center transition-transform active:scale-90 shadow-md"
          aria-label="보관함에 저장"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isSaved ? 'text-rose-500 fill-rose-500' : 'text-[#222222] hover:text-rose-500'
            }`}
          />
        </button>

        {/* Score & Destination Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-medium text-slate-200 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-[8px]">
              <MapPin className="w-3.5 h-3.5 text-[#0cefd3]" />
              {destination.region}
            </span>

            {/* Score Pill */}
            <span className="px-3 py-1 rounded-full bg-[#0cefd3] text-[#222222] font-extrabold text-xs shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3 fill-[#222222]" />
              {score}% 매칭
            </span>
          </div>

          <h3 className="text-2xl font-black tracking-tight text-white drop-shadow-sm">
            {destination.name}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        
        {/* Recommendation Reason Box */}
        <div className="p-4 rounded-[12px] bg-[#e6fdfa] border border-[#0cefd3]/40 text-xs sm:text-sm text-[#222222] leading-relaxed font-medium flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-[#00a894] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#007a6c] block mb-0.5">추천 이유:</span>
            {reason}
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#6c6d6f] line-clamp-2 leading-relaxed">
          {destination.description}
        </p>

        {/* Key Info Badges */}
        <div className="grid grid-cols-2 gap-2 text-xs pt-1">
          <div className="p-2.5 rounded-[12px] bg-[#f3f4f5] border border-[#e5e7eb] flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#00a894] shrink-0" />
            <div>
              <span className="text-[10px] text-[#6c6d6f] block font-semibold">추천 기간</span>
              <span className="font-bold text-[#222222]">{destination.recommendedDurations.join(', ')}</span>
            </div>
          </div>

          <div className="p-2.5 rounded-[12px] bg-[#f3f4f5] border border-[#e5e7eb] flex items-center gap-2">
            <Wallet className="w-4 h-4 text-[#00a894] shrink-0" />
            <div>
              <span className="text-[10px] text-[#6c6d6f] block font-semibold">예상 비용</span>
              <span className="font-bold text-[#222222] line-clamp-1">{destination.estimatedCostText}</span>
            </div>
          </div>
        </div>

        {/* Highlights List */}
        <div>
          <span className="text-[11px] font-bold text-[#6c6d6f] uppercase tracking-wider block mb-2">여행 대표 하이라이트</span>
          <ul className="space-y-1.5">
            {destination.highlights.map((item, idx) => (
              <li key={idx} className="text-xs text-[#222222] flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#00bfa8] shrink-0" />
                <span className="line-clamp-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card Action Button */}
        <div className="pt-2">
          <button
            onClick={() => onOpenDetail(result)}
            className="w-full py-3.5 px-4 rounded-[12px] bg-[#0cefd3] hover:bg-[#00d6bd] text-[#222222] font-extrabold text-sm transition-colors flex items-center justify-center gap-2 group/btn shadow-sm"
          >
            <span>상세 3일 일정 & 팁 보기</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

    </div>
  );
};
