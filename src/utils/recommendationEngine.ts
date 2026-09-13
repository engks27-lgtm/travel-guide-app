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
  const scoredList = allDestinations.map((dest) => {
    let score = 50; // 기본 점수

    // 1. 여행 스타일 매칭 (최대 40점)
    if (dest.primaryStyle === preference.style) {
      score += 40;
    } else if (dest.styles.includes(preference.style)) {
      score += 25;
    } else {
      score += 5;
    }

    // 2. 예산 매칭 (최대 25점)
    const userBudgetVal = budgetOrder[preference.budget];
    const destBudgetVal = budgetOrder[dest.budgetCategory];

    if (destBudgetVal <= userBudgetVal) {
      score += 25; // 예산 내 충족
    } else if (destBudgetVal === userBudgetVal + 1) {
      score += 10; // 약간 초과
    } else {
      score += 0;
    }

    // 3. 기간 매칭 (최대 20점)
    if (dest.recommendedDurations.includes(preference.duration)) {
      score += 20;
    } else {
      score += 8;
    }

    // 4. 동행 유형 매칭 (최대 15점)
    if (dest.suitableCompanions.includes(preference.companion)) {
      score += 15;
    } else {
      score += 5;
    }

    // 약간의 디테일감을 위한 점수 보정 (90~99% 범위 내로 맞춤)
    const finalScore = Math.min(99, Math.max(75, Math.floor(score)));

    // 맞춤 추천 이유 생성
    const reasonParts: string[] = [];

    reasonParts.push(`선택하신 **'${preference.style}'** 여행 스타일에 매우 부합하는 대표 인기 여행지입니다.`);
    
    if (destBudgetVal <= userBudgetVal) {
      reasonParts.push(`**'${preference.budget}'** 예산 기준에 맞춰 알뜰하게 다녀오실 수 있는 가성비 코스입니다.`);
    }

    if (dest.recommendedDurations.includes(preference.duration)) {
      reasonParts.push(`**'${preference.duration}'** 일정으로 핵심 하이라이트를 모두 둘러보기에 딱 좋은 동선입니다.`);
    }

    if (dest.suitableCompanions.includes(preference.companion)) {
      reasonParts.push(`**'${preference.companion}'**(와)과 함께 방문할 때満足도가 특히 높은 장소입니다.`);
    }

    const fullReason = reasonParts.join(' ');

    return {
      destination: dest,
      score: finalScore,
      reason: fullReason,
    };
  });

  // 점수 높은 순으로 정렬 후 상위 3개 반환
  scoredList.sort((a, b) => b.score - a.score);
  return scoredList.slice(0, 3);
}
