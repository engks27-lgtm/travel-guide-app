export type TravelStyle = '휴양' | '맛집' | '관광' | '자연' | '액티비티';

export type TravelDuration = '2박 3일' | '3박 4일' | '4박 5일';

export type TravelBudget = '50만원 이하' | '100만원 이하' | '150만원 이하';

export type TravelCompanion = '혼자' | '친구' | '연인' | '가족';

export type AccommodationType = 
  | '풀빌라/리조트' 
  | '4~5성급 호텔' 
  | '전통 료칸/한옥' 
  | '감성 펜션/에어비앤비' 
  | '실속 게스트하우스/호스텔';

export type TravelMonth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface TravelPreference {
  style: TravelStyle;
  duration: TravelDuration;
  budget: TravelBudget;
  companion: TravelCompanion;
  flightTimeMax?: number; // 최대 비행시간 (시간 단위: 1~15시간)
  accommodation?: AccommodationType;
  month?: TravelMonth;
  searchKeyword?: string;
}

export interface DayPlan {
  day: number;
  title: string;
  spots: string[];
  tip?: string;
}

export interface Destination {
  id: string;
  name: string;
  region: string;
  imageUrl: string;
  primaryStyle: TravelStyle;
  styles: TravelStyle[];
  budgetCategory: TravelBudget;
  recommendedDurations: TravelDuration[];
  suitableCompanions: TravelCompanion[];
  flightTimeHours: number; // 비행시간 (시간) - 국내선은 0.5~1시간
  accommodationTypes: AccommodationType[];
  bestMonths: TravelMonth[]; // 최적 방문 월
  description: string;
  highlights: string[];
  estimatedCostText: string;
  bestSeason: string;
  sampleItinerary: DayPlan[];
}

export interface RecommendationResult {
  destination: Destination;
  score: number;
  reason: string;
}
