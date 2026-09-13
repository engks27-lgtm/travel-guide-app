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

  const rankBadgeColors = [
    'from-amber-500 to-amber-600 text-white shadow-amber-500/30', // 1위 금메달 느낌
    'from-sky-500 to-sky-600 text-white shadow-sky-500/30',       // 2위
    'from-indigo-500 to-indigo-600 text-white shadow-indigo-500/30' // 3위
  ];

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
      
      {/* Image Header */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
        <Image
          src={destination.imageUrl}
          alt={destination.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />

        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

        {/* Rank Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className={`px-3.5 py-1.5 rounded-full bg-gradient-to-r ${rankBadgeColors[rank - 1] || 'bg-slate-800 text-white'} text-xs font-black tracking-wider uppercase shadow-md flex items-center gap-1.5`}>
            <Award className="w-4 h-4" />
            <span>TOP {rank} 추천</span>
          </span>
        </div>

        {/* Heart / Save Button */}
        <button
          onClick={() => onToggleSave(destination.id)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md hover:bg-white text-slate-700 flex items-center justify-center transition-transform active:scale-90 shadow-md"
          aria-label="보관함에 저장"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isSaved ? 'text-rose-500 fill-rose-500' : 'text-slate-600 hover:text-rose-500'
            }`}
          />
        </button>

        {/* Score & Destination Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-medium text-slate-200 flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-lg">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              {destination.region}
            </span>

            {/* Score Pill */}
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-white font-extrabold text-xs shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3 fill-white" />
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
        <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 text-xs sm:text-sm text-sky-950 leading-relaxed font-medium flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-sky-800 block mb-0.5">추천 이유:</span>
            {reason}
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
          {destination.description}
        </p>

        {/* Key Info Badges */}
        <div className="grid grid-cols-2 gap-2 text-xs pt-1">
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-sky-500 shrink-0" />
            <div>
              <span className="text-[10px] text-slate-400 block font-semibold">추천 기간</span>
              <span className="font-bold text-slate-800">{destination.recommendedDurations.join(', ')}</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
            <Wallet className="w-4 h-4 text-indigo-500 shrink-0" />
            <div>
              <span className="text-[10px] text-slate-400 block font-semibold">예상 비용</span>
              <span className="font-bold text-slate-800 line-clamp-1">{destination.estimatedCostText}</span>
            </div>
          </div>
        </div>

        {/* Highlights List */}
        <div>
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">여행 대표 하이라이트</span>
          <ul className="space-y-1.5">
            {destination.highlights.map((item, idx) => (
              <li key={idx} className="text-xs text-slate-700 flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                <span className="line-clamp-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card Action Button */}
        <div className="pt-2">
          <button
            onClick={() => onOpenDetail(result)}
            className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-sky-600 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2 group/btn shadow-sm"
          >
            <span>상세 3일 일정 & 팁 보기</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

    </div>
  );
};
