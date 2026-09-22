'use client';

import React, { useState } from 'react';
import { 
  TravelStyle, 
  TravelDuration, 
  TravelBudget, 
  TravelCompanion, 
  TravelPreference,
  AccommodationType,
  TravelMonth
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
  Sparkles,
  Search,
  Plane,
  Building,
  Sun,
  SlidersHorizontal
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
  { label: '50만원 이하', desc: '가성비와 실속을 챙기는 알뜰형' },
  { label: '100만원 이하', desc: '볼거리와 맛집을 편히 즐기는 편안형' },
  { label: '150만원 이하', desc: '럭셔리 리조트와 액티비티 풀패키지' },
];

const COMPANIONS: { label: TravelCompanion; icon: React.FC<{ className?: string }>; desc: string }[] = [
  { label: '혼자', icon: User, desc: '나만의 페이스로 떠나는 솔로 라이프' },
  { label: '친구', icon: Users, desc: '웃음과 추억이 넘치는 신나는 투어' },
  { label: '연인', icon: Heart, desc: '로맨틱하고 낭만적인 둘만의 시간' },
  { label: '가족', icon: Home, desc: '남녀노소 모두가 즐거운 따뜻한 유대' },
];

const ACCOMMODATIONS: AccommodationType[] = [
  '풀빌라/리조트',
  '4~5성급 호텔',
  '전통 료칸/한옥',
  '감성 펜션/에어비앤비',
  '실속 게스트하우스/호스텔'
];

const MONTHS: TravelMonth[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const RecommendationForm: React.FC<RecommendationFormProps> = ({ onSubmit, initialValues }) => {
  const [style, setStyle] = useState<TravelStyle>(initialValues?.style || '휴양');
  const [duration, setDuration] = useState<TravelDuration>(initialValues?.duration || '3박 4일');
  const [budget, setBudget] = useState<TravelBudget>(initialValues?.budget || '100만원 이하');
  const [companion, setCompanion] = useState<TravelCompanion>(initialValues?.companion || '연인');
  
  // 신규 상세 필터 상태
  const [flightTimeMax, setFlightTimeMax] = useState<number>(initialValues?.flightTimeMax || 6);
  const [accommodation, setAccommodation] = useState<AccommodationType | undefined>(initialValues?.accommodation || '4~5성급 호텔');
  const [month, setMonth] = useState<TravelMonth | undefined>(initialValues?.month || 10);
  const [searchKeyword, setSearchKeyword] = useState<string>(initialValues?.searchKeyword || '');

  const [showAdvanced, setShowAdvanced] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ 
      style, 
      duration, 
      budget, 
      companion,
      flightTimeMax,
      accommodation,
      month,
      searchKeyword
    });
  };

  return (
    <div id="preference-form" className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="bg-white rounded-[12px] p-6 sm:p-10 border border-[#e5e7eb] shadow-md">
        
        {/* Form Header */}
        <div className="mb-8 text-center sm:text-left border-b border-[#f3f4f5] pb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#222222] tracking-tight flex items-center justify-center sm:justify-start gap-2.5">
              <span>여행 조건 선택하기</span>
              <Sparkles className="w-6 h-6 text-[#0cefd3]" />
            </h2>

            {/* Keyword Search Input */}
            <div className="relative max-w-xs w-full">
              <Search className="w-4 h-4 text-[#6c6d6f] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="도쿄, 제주, 괌 등 검색..."
                className="w-full pl-9 pr-4 py-2.5 rounded-[12px] bg-[#f3f4f5] border border-[#e5e7eb] focus:border-[#0cefd3] focus:bg-white text-xs text-[#222222] outline-none transition-all"
              />
            </div>
          </div>

          <p className="text-[#6c6d6f] text-sm">
            원하시는 스타일, 비행시간, 숙소, 여행 월을 선택하시면 22개 인기 여행지 중 최적의 장소를 추천합니다.
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

          {/* Advanced Filters Section Toggle */}
          <div className="pt-4 border-t border-[#f3f4f5]">
            <button
              type="button"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center justify-between w-full p-4 rounded-[12px] bg-[#f3f4f5] hover:bg-[#e8e9eb] text-[#222222] font-bold text-sm transition-all"
            >
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#00a894]" />
                <span>상세 맞춤 조건 (비행시간, 숙소, 여행 월)</span>
              </div>
              <span className="text-xs text-[#007a6c] bg-[#e6fdfa] px-2.5 py-1 rounded-[8px] border border-[#0cefd3]/40">
                {showAdvanced ? '접기 ▲' : '펼치기 ▼'}
              </span>
            </button>
          </div>

          {/* Advanced Filters Content */}
          {showAdvanced && (
            <div className="space-y-8 p-6 rounded-[12px] bg-[#f8fafc] border border-[#e5e7eb] animate-fade-in">
              
              {/* 비행시간 슬라이더 */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-bold text-[#222222] flex items-center gap-2">
                    <Plane className="w-4 h-4 text-[#00a894]" />
                    <span>최대 허용 비행시간</span>
                  </label>
                  <span className="text-sm font-extrabold text-[#007a6c] bg-[#e6fdfa] px-3 py-1 rounded-full border border-[#0cefd3]/40">
                    최대 {flightTimeMax}시간 이내
                  </span>
                </div>
                
                <input
                  type="range"
                  min={1}
                  max={15}
                  step={1}
                  value={flightTimeMax}
                  onChange={(e) => setFlightTimeMax(Number(e.target.value))}
                  className="w-full h-2 bg-[#e5e7eb] rounded-lg appearance-none cursor-pointer accent-[#0cefd3]"
                />
                <div className="flex justify-between text-[11px] text-[#6c6d6f] mt-2 font-medium">
                  <span>1시간 (국내/일본)</span>
                  <span>5시간 (동남아)</span>
                  <span>8시간 (하와이)</span>
                  <span>15시간 (유럽)</span>
                </div>
              </div>

              {/* 선호 숙소 유형 */}
              <div>
                <label className="block text-sm font-bold text-[#222222] mb-3 flex items-center gap-2">
                  <Building className="w-4 h-4 text-[#00a894]" />
                  <span>선호하는 숙소 유형</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {ACCOMMODATIONS.map((acc) => {
                    const isSelected = accommodation === acc;
                    return (
                      <button
                        key={acc}
                        type="button"
                        onClick={() => setAccommodation(isSelected ? undefined : acc)}
                        className={`px-3.5 py-2 rounded-[12px] text-xs font-bold transition-all border ${
                          isSelected
                            ? 'bg-[#0cefd3] text-[#222222] border-[#0cefd3] shadow-sm'
                            : 'bg-white text-[#6c6d6f] border-[#e5e7eb] hover:bg-[#f3f4f5]'
                        }`}
                      >
                        {acc}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 희망 여행 월 선택 */}
              <div>
                <label className="block text-sm font-bold text-[#222222] mb-3 flex items-center gap-2">
                  <Sun className="w-4 h-4 text-[#00a894]" />
                  <span>희망하는 여행 월 (최적 시즌 매칭)</span>
                </label>
                <div className="grid grid-cols-6 sm:grid-cols-12 gap-2">
                  {MONTHS.map((m) => {
                    const isSelected = month === m;
                    return (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setMonth(isSelected ? undefined : m)}
                        className={`py-2 rounded-[8px] text-xs font-extrabold transition-all border text-center ${
                          isSelected
                            ? 'bg-[#0cefd3] text-[#222222] border-[#0cefd3] shadow-sm'
                            : 'bg-white text-[#6c6d6f] border-[#e5e7eb] hover:bg-[#f3f4f5]'
                        }`}
                      >
                        {m}월
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          )}

          {/* Form Submit */}
          <div className="pt-2">
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
