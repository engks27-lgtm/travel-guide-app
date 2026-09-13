export type TravelStyle = '휴양' | '맛집' | '관광' | '자연' | '액티비티';

export type TravelDuration = '2박 3일' | '3박 4일' | '4박 5일';

export type TravelBudget = '50만원 이하' | '100만원 이하' | '150만원 이하';

export type TravelCompanion = '혼자' | '친구' | '연인' | '가족';

export interface TravelPreference {
  style: TravelStyle;
  duration: TravelDuration;
  budget: TravelBudget;
  companion: TravelCompanion;
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
