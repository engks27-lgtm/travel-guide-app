---
name: add-destination
description: 새로운 여행지 데이터를 트립파인더(travel-guide-app) 프로젝트에 안전하게 추가하고 UI 프리뷰, 추천 알고리즘 연동, /grill-me 디자인 지침 및 빌드 검증까지 완료하는 초보자 가이드 스킬입니다.
---

# ✈️ /add-destination : 새로운 여행지 추가 & /grill-me 디자인 가이드

이 가이드는 **트립파인더 (TripFinder)** 애플리케이션에 새로운 여행지를 안전하게 추가하고, 추천 엔진 연동과 `/grill-me` 세션에서 도출된 **신뢰도 지표, CTA 구성, 배민 2.0 디자인 시스템 규격** 및 프로덕션 빌드 검증까지 완료하는 표준 작업 절차입니다.

---

## 🎨 /grill-me 도출 핵심 디자인 & 신뢰성 원칙

`/grill-me` 설계를 통해 확정된 프로젝트 UI/UX 및 신뢰성 규격입니다. 새 여행지 추가 시 항상 준수해야 합니다.

1. **배민 2.0 디자인 토큰 (Visual Consistency)**
   - **포인트 믹스**: Bright Mint (`#0cefd3`), Soft Mint Tint (`#e6fdfa`)
   - **다크 텍스트 & 패널**: Dark Charcoal (`#222222`), Panel Light (`#f6f6f6`)
   - **모서리 모듈**: `rounded-[12px]`
2. **신뢰성 지표 및 평점 뱃지 (Trust & Credibility)**
   - 모든 신규 여행지 카드는 `★ 4.9 (1.2k)` 평점 뱃지와 `TOP 추천` 뱃지를 기본 포함합니다.
   - 여행지가 추가되면 `Footer.tsx` 및 `Header.tsx`에 표출되는 전체 주요 도시 카운트(`22개 주요 도시`) 지표를 함께 갱신합니다.
3. **일정 복사 CTA 호환성 (CTA Optimization)**
   - `sampleItinerary` 3일 일자별 코스에는 3개 이상의 핵심 장소(`spots`)와 1개의 필수 여행 팁(`tip`)이 포함되어야 모달의 **'3일 일정 텍스트 전체 복사'** 기능과 100% 호환됩니다.
4. **토스트 피드백 검증 (`ToastAlert.tsx`)**
   - 저장/제거, 일정 복사, 링크 공유 시 화면 하단에 배민 2.0 스타일 플로팅 토스트 알림이 작동해야 합니다.

---

## 📌 1단계: 기존 여행지 데이터 구조 확인 (`src/types/travel.ts`)

새로운 여행지를 추가하기 전, 프로젝트에서 정의된 `Destination` 타입 인터페이스를 확인합니다.

- **파일 위치**: [src/types/travel.ts](file:///c:/Users/engks/OneDrive/Desktop/truking%20in%20the%20boouking/src/types/travel.ts)
- **필수 속성 항목**:

| 필드명 | 타입 | 설명 | 예시 |
| :--- | :--- | :--- | :--- |
| `id` | `string` | 고유 식별자 (영문 소문자) | `'jeju'`, `'tokyo'` |
| `name` | `string` | 여행지 이름 (한글) | `'제주도'`, `'도쿄'` |
| `region` | `string` | 국가 및 도시/지역 | `'대한민국'`, `'일본'` |
| `imageUrl` | `string` | 대표 이미지 URL | Unsplash 고화질 URL |
| `primaryStyle` | `TravelStyle` | 대표 여행 스타일 | `'휴양'`, `'관광'`, `'맛집'` 등 |
| `styles` | `TravelStyle[]` | 포함된 여행 스타일 목록 | `['휴양', '자연', '맛집']` |
| `budgetCategory` | `TravelBudget` | 예산 범위 | `'50만원 이하'`, `'100만원 이하'`, `'150만원 이하'` |
| `recommendedDurations` | `TravelDuration[]` | 추천 일정 | `['2박 3일', '3박 4일']` |
| `suitableCompanions` | `TravelCompanion[]` | 추천 동행자 | `['연인', '가족', '혼자', '친구']` |
| `flightTimeHours` | `number` | 비행시간 (시간 단위) | `1` (국내 0.5~1, 해외 2~13) |
| `accommodationTypes` | `AccommodationType[]` | 추천 숙소 형태 | `['4~5성급 호텔', '풀빌라/리조트']` |
| `bestMonths` | `TravelMonth[]` | 최적 방문 월 (1~12) | `[4, 5, 9, 10]` |
| `description` | `string` | 여행지 한 줄 한글 설명 | 감성적인 설명 문구 |
| `highlights` | `string[]` | 대표 하이라이트 3가지 | `['협재 해변 일몰', '서귀포 흑돼지']` |
| `estimatedCostText` | `string` | 1인 기준 예상 경비 | `'약 35만원 ~ 48만원 (1인 기준)'` |
| `bestSeason` | `string` | 최적 방문 계절 문구 | `'봄, 가을 (4~5월, 9~10월)'` |
| `sampleItinerary` | `DayPlan[]` | 3일 일자별 코스 & 팁 | Day 1, Day 2, Day 3 객체 배열 |

---

## 📝 2단계: 새로운 여행지 데이터 작성 (`src/data/mockDestinations.ts`)

새 여행지 객체를 작성합니다. 

- **파일 위치**: [src/data/mockDestinations.ts](file:///c:/Users/engks/OneDrive/Desktop/truking%20in%20the%20boouking/src/data/mockDestinations.ts)

### 💡 데이터 작성 예시 (템플릿):
```typescript
{
  id: 'kyoto', // 영문 고유 ID
  name: '교토',
  region: '일본 킨키',
  imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop',
  primaryStyle: '관광',
  styles: ['관광', '자연', '맛집'],
  budgetCategory: '100만원 이하',
  recommendedDurations: ['3박 4일', '4박 5일'],
  suitableCompanions: ['연인', '가족', '친구', '혼자'],
  flightTimeHours: 1.5,
  accommodationTypes: ['전통 료칸/한옥', '4~5성급 호텔'],
  bestMonths: [3, 4, 10, 11],
  description: '천년 고도의 유서 깊은 신사와 전통 가옥, 단풍과 벚꽃이 가득한 감성 전통 도시.',
  highlights: ['후시미 이나리 신사 붉은 도리이', '청수사(키요미즈데라) 계절 풍경', '아라시야마 대나무 숲 산책'],
  estimatedCostText: '약 58만원 ~ 82만원 (1인 기준)',
  bestSeason: '봄, 가을 (3~4월, 10~11월)',
  sampleItinerary: [
    {
      day: 1,
      title: '간사이 공항 도착 & 교토 가온 거리',
      spots: ['하루카 특급열차 탑승', '기온 거리 게이샤 감성 산책', '교토 전통 카이세키 석식'],
      tip: '간사이 공항에서 하루카 이코카 패스를 사전 예매하면 직통 이동이 편리합니다.'
    },
    {
      day: 2,
      title: '아라시야마 대나무 숲 & 청수사',
      spots: ['아라시야마 치쿠린 대나무 숲', '토게츠쿄 다리 유람', '청수사 석양 조망'],
      tip: '청수사는 일몰 1시간 전에 도착하면 붉은 노을 전경을 한눈에 담을 수 있습니다.'
    },
    {
      day: 3,
      title: '후시미 이나리 신사 & 교토 출국',
      spots: ['후시미 이나리 붉은 도리이 길', '니시키 시장 길거리 음식', '공항 이동 후 출국'],
      tip: '도리이 산책로는 입구보다 중턱으로 올라갈수록 한적하여 사진 촬영하기 좋습니다.'
    }
  ]
}
```

---

## 🖼️ 3단계: 필요한 이미지 정보 추가

여행지 카드의 첫인상을 결정하는 대표 이미지를 설정합니다.

1. **Unsplash 고화질 이미지 검색**:
   - [Unsplash](https://unsplash.com/)에서 여행지 영문명(예: `kyoto`, `hawaii`, `danang`)을 검색합니다.
2. **권장 URL 포맷**:
   - 이미지 주소 뒤에 `?q=80&w=1000&auto=format&fit=crop` 파라미터를 붙여 최적화합니다.
3. **Image error 방지**:
   - URL이 깨지거나 빈 값이 되지 않도록 유효한 이미지 주소를 입력합니다.

---

## 🎯 4단계: 추천 조건 설정

사용자가 추천 폼(`RecommendationForm`)에서 선택한 필터와 정확히 매칭되도록 조건을 설정합니다.

- **스타일 (`styles`)**: 사용자 선호 스타일과 일치할 시 40점 가산.
- **예산 (`budgetCategory`)**: 사용자 예산과 일치 시 30점 가산.
- **비행시간 (`flightTimeHours`)**: 사용자 지정 `flightTimeMax`보다 작은 여행지에 10점 가산.
- **숙소 형태 (`accommodationTypes`)**: 선택한 숙소 형태 포함 시 가산점.
- **출발 월 (`bestMonths`)**: 선택한 출발 월 포함 시 가산점.

---

## 🖥️ 5단계: UI 프리뷰 및 홈화면 우선 노출 작업

추가된 신규 여행지가 앱 첫 화면이나 추천 결과 프리뷰 상단에 바로 노출되도록 작업합니다.

1. **배열 맨 앞에 배치**:
   - `src/data/mockDestinations.ts` 파일 내 `mockDestinations` 배열의 **맨 첫 번째 인덱스(`[0]`)** 위치에 신규 여행지 객체를 배치합니다.
   ```typescript
   export const mockDestinations: Destination[] = [
     {
       id: 'kyoto', // 🔥 새로 추가한 여행지를 맨 위에 배치!
       name: '교토',
       ...
     },
     // 기존 여행지들...
   ];
   ```
2. **신뢰성 카운트 지표 업데이트**:
   - 여행지가 늘어나면 [Footer.tsx](file:///c:/Users/engks/OneDrive/Desktop/truking%20in%20the%20boouking/src/components/Footer.tsx)의 `22개 주요 도시` 텍스트를 최신 개수로 갱신합니다.
3. **홈화면 확인**:
   - 개발 서버(`npm run dev`)를 실행하고 [http://localhost:3000](http://localhost:3000) 접속.
   - 새로 추가한 여행지가 TOP 1으로 노출되며 `★ 4.9` 평점과 배민 2.0 민트 컬러 뱃지가 예쁘게 뜨는지 확인합니다.

---

## 📱 6단계: 모바일 레이아웃 & CTA 검증

스마트폰 및 태블릿 모바일 화면에서도 깨짐 없이 예쁘게 노출되는지 검증합니다.

1. **크롬 개발자 도구 (F12)** 열기 -> **모바일 기기 모드 (Ctrl+Shift+M)** 전환.
2. **확인 항목**:
   - [ ] 여행지 카드 이미지 비율과 텍스트 줄바꿈이 정상인가?
   - [ ] 비행시간, 숙소 형태, 최적 월 뱃지가 화면 밖으로 삐져나가지 않는가?
   - [ ] '상세 3일 일정 & 팁 보기' 버튼 클릭 시 모달창이 터치 스크롤 가능한가?
   - [ ] 모달 내 '3일 일정 텍스트 전체 복사' 및 '공유하기' 클릭 시 `ToastAlert` 토스트 메시지가 하단에 뜨는가?

---

## 🛠️ 7단계: lint 및 next build 실행

최종적으로 타입 오류나 코드 구문 에러가 없는지 검증합니다.

1. **개발 서버 정지** (필요시 `Ctrl + C`).
2. **프로덕션 빌드 명령어 실행**:
   ```bash
   cmd /c "if exist .next rmdir /s /q .next && npx next build"
   ```
3. **검증 결과 확인**:
   - `✓ Compiled successfully`
   - `✓ Linting and checking validity of types`
   - `✓ Generating static pages (4/4)`
   - Exit code **0**이 나오면 완벽하게 완료된 것입니다!

---

## 🚀 /grill-me 준수 최종 체크리스트
- [ ] `src/types/travel.ts` 타입 규격에 모든 필드가 존재합니까?
- [ ] `src/data/mockDestinations.ts` 배열 상단에 추가되었습니까?
- [ ] `sampleItinerary`에 실전 여행 `tip`이 포함되어 일정 복사 CTA와 호환됩니까?
- [ ] 배민 2.0 민트 컬러 및 12px 둥근 모서리가 적용되었습니까?
- [ ] 저장/공유/일정복사 시 토스트 메시지가 나타납니까?
- [ ] `npx next build`가 오류 없이 성공했습니까?
