'use client';

import React, { useState } from 'react';
import { 
  TravelStyle, 
  TravelDuration, 
  TravelBudget, 
  TravelCompanion, 
  TravelPreference 
} from '@/types/travel';
import { 
  Palmtree, 
  UtensilsCrossed, 
  Compass, 
  Trees, 
  Zap, 
  Calendar, 
  Wallet, 
  User, 
  Users, 
  Heart, 
  Home,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface RecommendationFormProps {
  onSubmit: (preference: TravelPreference) => void;
  initialValues?: TravelPreference;
}

const STYLES: { label: TravelStyle; icon: React.FC<{ className?: string }>; desc: string }[] = [
  { label: '휴양', icon: Palmtree, desc: '여유로운 편안함과 릴렉스' },
  { label: '맛집', icon: UtensilsCrossed, desc: '지역 특산물과 핫플 미식 탐방' },
  { label: '관광', icon: Compass, desc: '랜드마크 및 역사 문화 체험' },
  { label: '자연', icon: Trees, desc: '산, 바다, 호수 등 청정 대자연' },
  { label: '액티비티', icon: Zap, desc: '서핑, 캐녀닝, 패러글라이딩' },
];

const DURATIONS: { label: TravelDuration; desc: string }[] = [
  { label: '2박 3일', desc: '주말을 활용한 알찬 힐링' },
  { label: '3박 4일', desc: '여유 있게 즐기는 밸런스 여행' },
  { label: '4박 5일', desc: '깊이 있게 떠나는 힐링 투어' },
];

const BUDGETS: { label: TravelBudget; desc: string }[] = [
  { label: '50만원 이하', desc: '가성비와 실속을 챙기는 실뜰형' },
  { label: '100만원 이하', desc: '볼거리와 맛집을 편히 즐기는 편안형' },
  { label: '150만원 이하', desc: '럭셔리 리조트와 액티비티 풀패키지' },
];

const COMPANIONS: { label: TravelCompanion; icon: React.FC<{ className?: string }>; desc: string }[] = [
  { label: '혼자', icon: User, desc: '나만의 페이스로 떠나는 솔로 라이프' },
  { label: '친구', icon: Users, desc: '웃음과 추억이 넘치는 신나는 투어' },
  { label: '연인', icon: Heart, desc: '로맨틱하고 낭만적인 둘만의 시간' },
  { label: '가족', icon: Home, desc: '남녀노소 모두가 즐거운 따뜻한 유대' },
];

export const RecommendationForm: React.FC<RecommendationFormProps> = ({ onSubmit, initialValues }) => {
  const [style, setStyle] = useState<TravelStyle>(initialValues?.style || '휴양');
  const [duration, setDuration] = useState<TravelDuration>(initialValues?.duration || '3박 4일');
  const [budget, setBudget] = useState<TravelBudget>(initialValues?.budget || '100만원 이하');
  const [companion, setCompanion] = useState<TravelCompanion>(initialValues?.companion || '연인');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ style, duration, budget, companion });
  };

  return (
    <div id="preference-form" className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="bg-white rounded-[12px] p-6 sm:p-10 border border-[#e5e7eb] shadow-md">
        
        {/* Form Header */}
        <div className="mb-8 text-center sm:text-left border-b border-[#f3f4f5] pb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#222222] tracking-tight flex items-center justify-center sm:justify-start gap-2.5 mb-2">
            <span>여행 조건 선택하기</span>
            <Sparkles className="w-6 h-6 text-[#0cefd3]" />
          </h2>
          <p className="text-[#6c6d6f] text-sm">
            원하시는 스타일과 조건을 선택하시면 맞춤 여행지를 실시간 계산해 드립니다.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          
          {/* 1. 여행 스타일 */}
          <div>
            <label className="block text-sm font-bold text-[#222222] mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#e6fdfa] text-[#007a6c] text-xs font-black flex items-center justify-center border border-[#0cefd3]/30">1</span>
              <span>선호하는 여행 스타일</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {STYLES.map((item) => {
                const IconComponent = item.icon;
                const isSelected = style === item.label;
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setStyle(item.label)}
                    className={`relative p-4 rounded-[12px] border text-left transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#0cefd3] bg-[#e6fdfa] text-[#222222] ring-2 ring-[#0cefd3]/40 shadow-sm'
                        : 'border-[#e5e7eb] hover:border-[#a6a7a9] bg-white text-[#222222] hover:bg-[#f3f4f5]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2.5 rounded-[12px] ${isSelected ? 'bg-[#0cefd3] text-[#222222]' : 'bg-[#f3f4f5] text-[#232324]'}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      {isSelected && <CheckCircle2 className="w-5 h-5 text-[#00bfa8] shrink-0" />}
                    </div>
                    <div>
                      <div className="font-bold text-sm mb-0.5">{item.label}</div>
                      <div className="text-[11px] text-[#6c6d6f] line-clamp-1">{item.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. 여행 기간 */}
          <div>
            <label className="block text-sm font-bold text-[#222222] mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#e6fdfa] text-[#007a6c] text-xs font-black flex items-center justify-center border border-[#0cefd3]/30">2</span>
              <span>희망 여행 기간</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {DURATIONS.map((item) => {
                const isSelected = duration === item.label;
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setDuration(item.label)}
                    className={`p-4 rounded-[12px] border text-left transition-all flex items-center justify-between ${
                      isSelected
                        ? 'border-[#0cefd3] bg-[#e6fdfa] text-[#222222] ring-2 ring-[#0cefd3]/40 shadow-sm'
                        : 'border-[#e5e7eb] hover:border-[#a6a7a9] bg-white text-[#222222] hover:bg-[#f3f4f5]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-[12px] ${isSelected ? 'bg-[#0cefd3] text-[#222222]' : 'bg-[#f3f4f5] text-[#232324]'}`}>
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-sm">{item.label}</div>
                        <div className="text-xs text-[#6c6d6f]">{item.desc}</div>
                      </div>
                    </div>
                    {isSelected && <CheckCircle2 className="w-5 h-5 text-[#00bfa8] shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. 예산 범위 */}
          <div>
            <label className="block text-sm font-bold text-[#222222] mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#e6fdfa] text-[#007a6c] text-xs font-black flex items-center justify-center border border-[#0cefd3]/30">3</span>
              <span>1인 기준 예산</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {BUDGETS.map((item) => {
                const isSelected = budget === item.label;
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setBudget(item.label)}
                    className={`p-4 rounded-[12px] border text-left transition-all flex items-center justify-between ${
                      isSelected
                        ? 'border-[#0cefd3] bg-[#e6fdfa] text-[#222222] ring-2 ring-[#0cefd3]/40 shadow-sm'
                        : 'border-[#e5e7eb] hover:border-[#a6a7a9] bg-white text-[#222222] hover:bg-[#f3f4f5]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-[12px] ${isSelected ? 'bg-[#0cefd3] text-[#222222]' : 'bg-[#f3f4f5] text-[#232324]'}`}>
                        <Wallet className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-sm">{item.label}</div>
                        <div className="text-xs text-[#6c6d6f]">{item.desc}</div>
                      </div>
                    </div>
                    {isSelected && <CheckCircle2 className="w-5 h-5 text-[#00bfa8] shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. 동행 유형 */}
          <div>
            <label className="block text-sm font-bold text-[#222222] mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#e6fdfa] text-[#007a6c] text-xs font-black flex items-center justify-center border border-[#0cefd3]/30">4</span>
              <span>누구와 떠나시나요?</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {COMPANIONS.map((item) => {
                const IconComponent = item.icon;
                const isSelected = companion === item.label;
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setCompanion(item.label)}
                    className={`p-4 rounded-[12px] border text-left transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#0cefd3] bg-[#e6fdfa] text-[#222222] ring-2 ring-[#0cefd3]/40 shadow-sm'
                        : 'border-[#e5e7eb] hover:border-[#a6a7a9] bg-white text-[#222222] hover:bg-[#f3f4f5]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2.5 rounded-[12px] ${isSelected ? 'bg-[#0cefd3] text-[#222222]' : 'bg-[#f3f4f5] text-[#232324]'}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      {isSelected && <CheckCircle2 className="w-5 h-5 text-[#00bfa8] shrink-0" />}
                    </div>
                    <div>
                      <div className="font-bold text-sm mb-0.5">{item.label}</div>
                      <div className="text-[11px] text-[#6c6d6f] line-clamp-1">{item.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-4 rounded-[12px] bg-[#0cefd3] hover:bg-[#00d6bd] text-[#222222] font-extrabold text-lg shadow-lg shadow-[#0cefd3]/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              <span>맞춤 여행지 추천 결과 보기</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
