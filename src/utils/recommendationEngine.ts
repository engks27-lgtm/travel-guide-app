import { Destination, TravelPreference, RecommendationResult, TravelBudget } from '@/types/travel';
import { mockDestinations } from '@/data/mockDestinations';

const budgetOrder: Record<TravelBudget, number> = {
  '50만원 이하': 1,
  '100만원 이하': 2,
  '150만원 이하': 3,
};

export function getRecommendations(
  preference: TravelPreference,
  allDestinations: Destination[] = mockDestinations
): RecommendationResult[] {

  // 0. 키워드 검색 필터링 (입력된 검색어가 있는 경우)
  let filtered = allDestinations;
  if (preference.searchKeyword && preference.searchKeyword.trim() !== '') {
    const kw = preference.searchKeyword.trim().toLowerCase();
    filtered = allDestinations.filter((dest) => 
      dest.name.toLowerCase().includes(kw) ||
      dest.region.toLowerCase().includes(kw) ||
      dest.description.toLowerCase().includes(kw) ||
      dest.styles.some((s) => s.toLowerCase().includes(kw))
    );

    // 검색 결과가 없는 경우 전체에서 추천
    if (filtered.length === 0) {
      filtered = allDestinations;
    }
  }

  const scoredList = filtered.map((dest) => {
    let score = 0;

    // 1. 여행 스타일 매칭 (최대 40점)
    if (dest.primaryStyle === preference.style) {
      score += 40;
    } else if (dest.styles.includes(preference.style)) {
      score += 25;
    } else {
      score += 10;
    }

    // 2. 예산 매칭 (최대 30점)
    const userBudgetVal = budgetOrder[preference.budget];
    const destBudgetVal = budgetOrder[dest.budgetCategory];

    if (destBudgetVal <= userBudgetVal) {
      score += 30; // 예산 범위 내
    } else if (destBudgetVal === userBudgetVal + 1) {
      score += 12; // 약간 초과
    } else {
      score += 0;
    }

    // 3. 비행시간 매칭 (최대 10점)
    if (preference.flightTimeMax !== undefined) {
      if (dest.flightTimeHours <= preference.flightTimeMax) {
        score += 10;
      } else if (dest.flightTimeHours <= preference.flightTimeMax + 2) {
        score += 4;
      } else {
        score += 1;
      }
    } else {
      score += 10;
    }

    // 4. 선호 숙소 & 여행 월 매칭 (최대 10점: 각 5점)
    if (preference.accommodation && dest.accommodationTypes.includes(preference.accommodation)) {
      score += 5;
    } else {
      score += 2;
    }

    if (preference.month && dest.bestMonths.includes(preference.month)) {
      score += 5;
    } else {
      score += 2;
    }

    // 5. 기간 & 동행 매칭 (최대 10점: 각 5점)
    if (dest.recommendedDurations.includes(preference.duration)) {
      score += 5;
    } else {
      score += 2;
    }

    if (dest.suitableCompanions.includes(preference.companion)) {
      score += 5;
    } else {
      score += 2;
    }

    // 점수 보정 (75~99% 범위 내)
    const finalScore = Math.min(99, Math.max(75, Math.floor(score)));

    // 맞춤 추천 이유 생성
    const reasonParts: string[] = [];

    reasonParts.push(`선택하신 **'${preference.style}'** 취향에 꼭 맞춘 대표 추천지입니다.`);
    
    if (destBudgetVal <= userBudgetVal) {
      reasonParts.push(`**'${preference.budget}'** 예산 범위 안에서 다녀오기 좋은 코스입니다.`);
    }

    if (preference.flightTimeMax !== undefined && dest.flightTimeHours <= preference.flightTimeMax) {
      reasonParts.push(`비행시간 약 **${dest.flightTimeHours}시간**으로 설정하신 시간 조건에 잘 맞습니다.`);
    }

    if (preference.month && dest.bestMonths.includes(preference.month)) {
      reasonParts.push(`**${preference.month}월**에 방문할 때 최적의 날씨와 풍경을 즐길 수 있습니다.`);
    }

    if (preference.accommodation && dest.accommodationTypes.includes(preference.accommodation)) {
      reasonParts.push(`선호하시는 **'${preference.accommodation}'** 스타일의 숙소가 다양하게 갖춰져 있습니다.`);
    }

    const fullReason = reasonParts.join(' ');

    return {
      destination: dest,
      score: finalScore,
      reason: fullReason,
    };
  });

  // 점수 높은 순 정렬 후 상위 3개 반환
  scoredList.sort((a, b) => b.score - a.score);
  return scoredList.slice(0, 3);
}
