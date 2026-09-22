import { Destination } from '@/types/travel';

export const mockDestinations: Destination[] = [
  {
    id: 'jeju',
    name: '제주도',
    region: '대한민국',
    imageUrl: 'https://images.unsplash.com/photo-1548115184-bc6544d06a58?q=80&w=1000&auto=format&fit=crop',
    primaryStyle: '휴양',
    styles: ['휴양', '자연', '맛집'],
    budgetCategory: '50만원 이하',
    recommendedDurations: ['2박 3일', '3박 4일'],
    suitableCompanions: ['연인', '가족', '혼자', '친구'],
    flightTimeHours: 1,
    accommodationTypes: ['풀빌라/리조트', '감성 펜션/에어비앤비', '4~5성급 호텔'],
    bestMonths: [4, 5, 9, 10],
    description: '에메랄드빛 바다와 한라산, 감성 카페와 신선한 흑돼지 해산물 먹거리가 가득한 힐링 섬.',
    highlights: ['협재 해수욕장 노을 감상', '서귀포 흑돼지 & 해산물 투어', '애월 해안도로 드라이브'],
    estimatedCostText: '약 35만원 ~ 48만원 (1인 기준)',
    bestSeason: '봄, 가을 (4~5월, 9~10월)',
    sampleItinerary: [
      {
        day: 1,
        title: '제주 공항 도착 & 애월 감성 힐링',
        spots: ['애월 해안도로 드라이브', '한담해변 산책로', '흑돼지 구이 저녁 식사'],
        tip: '렌터카는 공항 도착 후 바로 수령하면 동선이 편리합니다.'
      },
      {
        day: 2,
        title: '서귀포 자연 탐방 & 맛집 기행',
        spots: ['협재 해수욕장', '오설록 티 뮤지엄', '중문 해수욕장 감성 카페'],
        tip: '해질녘 협재 해변에서 일몰 사진을 남겨보세요.'
      },
      {
        day: 3,
        title: '동쪽 코스 & 시장 투어 후 귀가',
        spots: ['동문시장 야시장 구경', '함덕 서우봉 오름', '제주 공항 출발'],
        tip: '동문시장에서 제주 기념품과 오메기떡을 선물로 구매하기 좋습니다.'
      }
    ]
  },
  {
    id: 'tokyo',
    name: '도쿄',
    region: '일본',
    imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000&auto=format&fit=crop',
    primaryStyle: '관광',
    styles: ['관광', '맛집', '액티비티'],
    budgetCategory: '100만원 이하',
    recommendedDurations: ['3박 4일', '4박 5일'],
    suitableCompanions: ['친구', '혼자', '연인'],
    flightTimeHours: 2,
    accommodationTypes: ['4~5성급 호텔', '실속 게스트하우스/호스텔', '전통 료칸/한옥'],
    bestMonths: [3, 4, 10, 11, 12],
    description: '화려한 도쿄 타워 야경, 신주쿠와 시부야의 미식 거리, 아키하바라와 도쿄 디즈니랜드가 선사하는 트렌디 도시 투어.',
    highlights: ['도쿄 타워 & 스카이트리 야경', '시부야 스크램블 교차로', '도쿄 디즈니랜드 / 디즈니씨'],
    estimatedCostText: '약 68만원 ~ 92만원 (1인 기준)',
    bestSeason: '봄, 가을, 겨울 (3~4월, 10~12월)',
    sampleItinerary: [
      {
        day: 1,
        title: '나리타/하네다 도착 & 신주쿠 밤거리',
        spots: ['하네다 공항 도착', '신주쿠 꼬치 골목(오모이데 요코초)', '도쿄 도청 무료 전망대'],
        tip: '공항에서 시내 이동 시 넥스(N’EX)나 스카이라이너를 추천합니다.'
      },
      {
        day: 2,
        title: '시부야 핫플 & 아사쿠사 전통 탐방',
        spots: ['시부야 스카이 전망대', '아사쿠사 센소지 사원', '긴자 고급 라멘 다이닝'],
        tip: '시부야 스카이는 석양 시간대 예약이 일찍 마감됩니다.'
      },
      {
        day: 3,
        title: '도쿄 디즈니 테마파크 하루 뽀개기',
        spots: ['도쿄 디즈니씨 탐방', '디즈니 불꽃놀이', '미식 야시장'],
        tip: '디즈니 앱을 미리 다운로드하여 DPA(디즈니 프리미어 액세스)를 활용하세요.'
      }
    ]
  },
  {
    id: 'taipei',
    name: '타이베이',
    region: '대만',
    imageUrl: 'https://images.unsplash.com/photo-1508248467877-a70446979679?q=80&w=1000&auto=format&fit=crop',
    primaryStyle: '맛집',
    styles: ['맛집', '관광', '휴양'],
    budgetCategory: '50만원 이하',
    recommendedDurations: ['2박 3일', '3박 4일'],
    suitableCompanions: ['친구', '가족', '혼자', '연인'],
    flightTimeHours: 2.5,
    accommodationTypes: ['4~5성급 호텔', '실속 게스트하우스/호스텔', '감성 펜션/에어비앤비'],
    bestMonths: [10, 11, 12, 1, 2, 3],
    description: '스린 야시장의 지파이와 딘타이펑 우육면, 지우펀의 붉은 등불과 예류 지질공원의 웅장한 자연.',
    highlights: ['지우펀 홍등 거리 센과 치히로 배경', '스린 야시장 먹방 투어', '타이베이 101 타워 야경'],
    estimatedCostText: '약 45만원 ~ 65만원 (1인 기준)',
    bestSeason: '가을~봄 (10월~3월)',
    sampleItinerary: [
      {
        day: 1,
        title: '타오위안 공항 도착 & 딤섬 미식',
        spots: ['공항 MRT 탑승', '딘타이펑 본점 소롱포', '타이베이 101 타워 야경'],
        tip: '이지카드(EasyCard)를 구매하면 대중교통과 편의점 결제가 모두 가능합니다.'
      },
      {
        day: 2,
        title: '예스진지 택시/버스 일일 투어',
        spots: ['예류 지질공원 여왕머리 바위', '스펀 천등 띄우기', '지우펀 홍등 산책로'],
        tip: '지우펀은 밤 7시 이후 홍등에 불이 들어와 가장 예쁩니다.'
      },
      {
        day: 3,
        title: '시먼딩 거리 & 야시장 털기',
        spots: ['시먼딩 곱창국수', '스린 야시장 지파이 & 버블티', '공항 출국'],
        tip: '망고 빙수는 삼형매 빙수집을 추천합니다.'
      }
    ]
  },
  {
    id: 'guam',
    name: '괌',
    region: '미국',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop',
    primaryStyle: '휴양',
    styles: ['휴양', '액티비티', '자연'],
    budgetCategory: '150만원 이하',
    recommendedDurations: ['3박 4일', '4박 5일'],
    suitableCompanions: ['가족', '연인', '친구'],
    flightTimeHours: 4,
    accommodationTypes: ['풀빌라/리조트', '4~5성급 호텔'],
    bestMonths: [12, 1, 2, 3, 4, 5],
    description: '투몬비치의 투명한 에메랄드 바다와 면세 쇼핑, 돌핀 크루즈와 럭셔리 오션뷰 리조트의 완성형 휴양지.',
    highlights: ['투몬비치 에메랄드 스노클링', '돌핀 와칭 크루즈 체험', 'T갤러리아 면세 쇼핑'],
    estimatedCostText: '약 105만원 ~ 138만원 (1인 기준)',
    bestSeason: '건기 (12월~5월)',
    sampleItinerary: [
      {
        day: 1,
        title: '괌 공항 도착 & 투몬비치 릴렉스',
        spots: ['괌 공항 도착', '투몬비치 석양 감상', '괌 수제버거 저녁 식사'],
        tip: '괌은 렌터카 이동 시 운전면허증만 있으면 편리하게 투어가 가능합니다.'
      },
      {
        day: 2,
        title: '돌핀 와칭 크루즈 & 스노클링',
        spots: ['야생 돌고래 와칭 크루즈', '바다 스노클링 & 바나나보트', '사랑의 절벽 감상'],
        tip: '사랑의 절벽 자물쇠를 챙겨가면 낭만적인 추억을 만들 수 있습니다.'
      },
      {
        day: 3,
        title: '괌 남부 투어 & 면세 쇼핑',
        spots: ['솔레다드 Fort 전망대', '메리조 피어 인생샷', 'T갤러리아 면세점 쇼핑'],
        tip: '괌 특산 구찌나 명품 브랜드 쇼핑 혜택을 꼭 챙기세요.'
      }
    ]
  },
  {
    id: 'singapore',
    name: '싱가포르',
    region: '싱가포르',
    imageUrl: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1000&auto=format&fit=crop',
    primaryStyle: '관광',
    styles: ['관광', '휴양', '맛집'],
    budgetCategory: '150만원 이하',
    recommendedDurations: ['3박 4일', '4박 5일'],
    suitableCompanions: ['가족', '연인', '친구'],
    flightTimeHours: 6,
    accommodationTypes: ['4~5성급 호텔', '풀빌라/리조트'],
    bestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    description: '마리나 베이 샌즈 인피니티 풀, 가든스 바이 더 베이의 환상적인 슈퍼트리 쇼와 칠리크랩 미식의 청정 도시.',
    highlights: ['마리나 베이 샌즈 인피니티 풀', '가든스 바이 더 베이 슈퍼트리쇼', '점보 시푸드 칠리크랩 먹방'],
    estimatedCostText: '약 120만원 ~ 155만원 (1인 기준)',
    bestSeason: '연중 내내 (사계절)',
    sampleItinerary: [
      {
        day: 1,
        title: '창이 공항 쥬얼 탐방 & 클락키 야경',
        spots: ['세계 최우수 창이공항 실내폭포', '클락키 리버 크루즈', '칠리크랩 & 시리얼 새우 저녁'],
        tip: '리버 크루즈는 해질녘 7시 30분 탑승을 추천합니다.'
      },
      {
        day: 2,
        title: '센토사 섬 액티비티 & 루지 체험',
        spots: ['유니버설 스튜디오 싱가포르', '센토사 루지 & 케이블카', '실로소 비치 휴식'],
        tip: '센토사 루지는 3회권 이상 탑승해야 제대로 재미를 느낄 수 있습니다.'
      },
      {
        day: 3,
        title: '가든스 바이 더 베이 & 인피니티 풀',
        spots: ['플라워 돔 & 클라우드 포레스트', '슈퍼트리 라이트 쇼', '마리나베이 스카이파크'],
        tip: '슈퍼트리 쇼는 저녁 7:45, 8:45에 무료 진행됩니다.'
      }
    ]
  },
  {
    id: 'kota',
    name: '코타키나발루',
    region: '말레이시아',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop',
    primaryStyle: '휴양',
    styles: ['휴양', '자연', '액티비티'],
    budgetCategory: '100만원 이하',
    recommendedDurations: ['3박 4일', '4박 5일'],
    suitableCompanions: ['연인', '가족', '친구'],
    flightTimeHours: 5,
    accommodationTypes: ['풀빌라/리조트', '4~5성급 호텔'],
    bestMonths: [1, 2, 3, 4, 5],
    description: '세계 3대 선셋으로 손꼽히는 붉은 노을, 반딧불이 투어의 몽환적인 정글 경험과 섬 호핑 스노클링.',
    highlights: ['탄중아루 비치 세계 3대 선셋', '반딧불이 정글 투어', '마무틱/만타나니 섬 호핑투어'],
    estimatedCostText: '약 70만원 ~ 95만원 (1인 기준)',
    bestSeason: '건기 (1월~5월)',
    sampleItinerary: [
      {
        day: 1,
        title: '코타키나발루 도착 & 핑크모스크',
        spots: ['사바 주립 사원(핑크모스크)', '리카스 시티모스크(블루모스크)', '워터프론트 씨푸드 식사'],
        tip: '모스크 입장 시 히잡/가운 대여가 가능합니다.'
      },
      {
        day: 2,
        title: '마누칸/마무틱 섬 호핑 & 해양스포츠',
        spots: ['스피드보트 섬 이동', '에메랄드 스노클링', '씨워킹 & 패러세일링'],
        tip: '구명조끼와 오리발을 챙기면 깊은 바다 스노클링이 더욱 즐겁습니다.'
      },
      {
        day: 3,
        title: '반딧불이 투어 & 탄중아루 선셋',
        spots: ['탄중아루 석양 감상', '크리스마스트리 반딧불이 배 체험', '야시장 쇼핑'],
        tip: '반딧불이 투어 시 얇은 긴팔 옷과 모기 퇴치제를 지참하세요.'
      }
    ]
  },
  {
    id: 'chiangmai',
    name: '치앙마이',
    region: '태국',
    imageUrl: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1000&auto=format&fit=crop',
    primaryStyle: '휴양',
    styles: ['휴양', '자연', '맛집'],
    budgetCategory: '50만원 이하',
    recommendedDurations: ['3박 4일', '4박 5일'],
    suitableCompanions: ['혼자', '연인', '친구'],
    flightTimeHours: 5.5,
    accommodationTypes: ['감성 펜션/에어비앤비', '실속 게스트하우스/호스텔', '4~5성급 호텔'],
    bestMonths: [11, 12, 1, 2],
    description: '한 달 살기의 성지, 아기자기한 감성 올드타운 카페, 올리브나무 산속 힐링과 코끼리 보호구역.',
    highlights: ['올드타운 감성 카페 투어', '도이수텝 사원 야경', '코끼리 보호구역 바바 케어'],
    estimatedCostText: '약 48만원 ~ 68만원 (1인 기준)',
    bestSeason: '건기 (11월~2월)',
    sampleItinerary: [
      {
        day: 1,
        title: '치앙마이 도착 & 올드타운 감성',
        spots: ['올드타운 체크인', '타패문 비둘기 인증샷', '카오소이 태국 국수 점심'],
        tip: '치앙마이 올드타운은 자전거나 도보로 둘러보기 매우 좋습니다.'
      },
      {
        day: 2,
        title: '도이수텝 절경 & 님만해민 핫플',
        spots: ['도이수텝 황금 사원', '님만해민 원님만 쇼핑몰', '라이브 펍 저녁 식사'],
        tip: '도이수텝 사원 엘리베이터를 이용하면 편하게 탑에 오를 수 있습니다.'
      },
      {
        day: 3,
        title: '코끼리 에코 케어 & 쿠킹클래스',
        spots: ['친환경 코끼리 보호구역', '태국 수제 쿠킹클래스', '선데이 야시장'],
        tip: '선데이 야시장은 일요일 저녁에만 열리므로 일정을 꼭 맞추세요.'
      }
    ]
  },
  {
    id: 'hongkong',
    name: '홍콩',
    region: '중국 홍콩',
    imageUrl: 'https://images.unsplash.com/photo-1506970845246-18f21d533b20?q=80&w=1000&auto=format&fit=crop',
    primaryStyle: '관광',
    styles: ['관광', '맛집', '액티비티'],
    budgetCategory: '100만원 이하',
    recommendedDurations: ['2박 3일', '3박 4일'],
    suitableCompanions: ['친구', '연인', '혼자'],
    flightTimeHours: 3.5,
    accommodationTypes: ['4~5성급 호텔', '실속 게스트하우스/호스텔'],
    bestMonths: [10, 11, 12, 1, 2],
    description: '빅토리아 피크의 화려한 스카이라인, 미슐랭 딤섬과 센트럴의 미드레벨 에스컬레이터 감성.',
    highlights: ['빅토리아 피크트램 스카이라인 야경', '미드레벨 에스컬레이터 & 소호거리', '심포니 오브 라이트 레이저쇼'],
    estimatedCostText: '약 72만원 ~ 98만원 (1인 기준)',
    bestSeason: '가을, 겨울 (10월~2월)',
    sampleItinerary: [
      {
        day: 1,
        title: '홍콩 도착 & 침사추이 수변 산책',
        spots: ['옥토퍼스 카드 수령', '침사추이 스타의 거리', '심포니 오브 라이트(밤 8시)'],
        tip: '옥토퍼스 카드로 홍콩 MTR, 페리, 트램을 모두 이용 가능합니다.'
      },
      {
        day: 2,
        title: '센토사 소호거리 & 피크트램 야경',
        spots: ['미드레벨 에스컬레이터', '타이청 베이커리 에그타르트', '빅토리아 피크 피크트램'],
        tip: '피크트램은 패스트트랙 티켓을 사전 구매하면 대기 시간을 크게 줄일 수 있습니다.'
      },
      {
        day: 3,
        title: '디즈니랜드 or 디저트 딤섬 미식',
        spots: ['팀호완/팀딤섬 미슐랭 딤섬', '몽콕 야시장', '공항 출국'],
        tip: '제니 베이커리 마약 쿠키는 조기 품절되므로 오전에 방문하세요.'
      }
    ]
  },
  {
    id: 'hawaii',
    name: '하와이',
    region: '미국',
    imageUrl: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=1000&auto=format&fit=crop',
    primaryStyle: '휴양',
    styles: ['휴양', '자연', '액티비티'],
    budgetCategory: '150만원 이하',
    recommendedDurations: ['4박 5일'],
    suitableCompanions: ['연인', '가족', '친구'],
    flightTimeHours: 8,
    accommodationTypes: ['풀빌라/리조트', '4~5성급 호텔'],
    bestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    description: '와이키키 해변의 환상적인 서핑, 다이아몬드 헤드의 오션 트레킹, 럭셔리 휴양과 스쿠버다이빙의 낙원.',
    highlights: ['와키키 해변 석양 서핑', '다이아몬드 헤드 하이킹', '하나우마 베이 전설의 스노클링'],
    estimatedCostText: '약 150만원 ~ 195만원 (1인 기준)',
    bestSeason: '연중 내내 (사계절)',
    sampleItinerary: [
      {
        day: 1,
        title: '호놀룰루 공항 도착 & 와이키키 비치',
        spots: ['호놀룰루 공항 입국', '와이키키 해변 산책', '하와이안 아사이볼 & 포케 저녁'],
        tip: '와이키키 해변 로열 하와이안 센터 주차가 편리합니다.'
      },
      {
        day: 2,
        title: '다이아몬드 헤드 & 하나우마 베이',
        spots: ['다이아몬드 헤드 일출 등반', '하나우마 베이 산호초 스노클링', '쿠알로아 랜치 영화 촬영지'],
        tip: '하나우마 베이는 온라인 사전 예약이 필수입니다.'
      },
      {
        day: 3,
        title: '오후아 드라이브 & 노스쇼어 서핑',
        spots: ['노스쇼어 서핑 비치', '지오반니 새우 트럭 먹방', '와이켈레 프리미엄 아울렛'],
        tip: '새우 트럭 갈릭 버터 새우는 필수 추천 메뉴입니다.'
      },
      {
        day: 4,
        title: '하와이 쇼핑 & 마무선셋 크루즈',
        spots: ['알라모아나 쇼핑센터', '선셋 카타마란 세일링 크루즈', '공항 이동'],
        tip: '선셋 크루즈에서 무지개를 만나볼 확률이 높습니다.'
      }
    ]
  },
  {
    id: 'paris',
    name: '파리',
    region: '프랑스',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop',
    primaryStyle: '관광',
    styles: ['관광', '맛집', '자연'],
    budgetCategory: '150만원 이하',
    recommendedDurations: ['4박 5일'],
    suitableCompanions: ['연인', '친구', '혼자'],
    flightTimeHours: 12,
    accommodationTypes: ['4~5성급 호텔', '감성 펜션/에어비앤비'],
    bestMonths: [5, 6, 7, 8, 9],
    description: '에펠탑의 낭만과 루브르 박물관의 대작 예술, 센강 유람선의 야경과 파리 라탱 지구 크루아상 미식.',
    highlights: ['에펠탑 샤르드마르스 공원 피크닉', '루브르 & 오르세 미술관 투어', '센강 바토무슈 야경 유람선'],
    estimatedCostText: '약 148만원 ~ 185만원 (1인 기준)',
    bestSeason: '봄~가을 (5월~9월)',
    sampleItinerary: [
      {
        day: 1,
        title: '파리 샤를드골 공항 도착 & 에펠탑 야경',
        spots: ['샤를드골 공항 도착', '샤요 궁전 에펠탑 인생샷', '프랑스 어니언 스프 저녁'],
        tip: '샤요 궁전 계단 위가 에펠탑이 가장 예쁘게 찍히는 명당입니다.'
      },
      {
        day: 2,
        title: '루브르 박물관 & 샹젤리제 거리',
        spots: ['루브르 박물관 모나리자 관람', '튈르리 정원 산책', '개선문 전망대 오르기'],
        tip: '뮤지엄 패스를 활용하면 주요 미술관 입장이 수월합니다.'
      },
      {
        day: 3,
        title: '몽마르트르 언덕 & 센강 유람선',
        spots: ['사크레쾨르 대성당', '몽마르트르 화가의 거리', '바토무슈 센강 야경 유람선'],
        tip: '바토무슈 탑승 시 정각에 켜지는 반짝이는 에펠탑 조명을 노려보세요.'
      },
      {
        day: 4,
        title: '마레 지구 쇼핑 & 오르세 미술관',
        spots: ['마레 지구 감성 편집샵', '오르세 미술관 인상파 회화', '귀국 항공편'],
        tip: '마레 지구의 메르시(Merci) 에코백이 선물로 인기가 높습니다.'
      }
    ]
  },
  {
    id: 'london',
    name: '런던',
    region: '영국',
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop',
    primaryStyle: '관광',
    styles: ['관광', '맛집', '자연'],
    budgetCategory: '150만원 이하',
    recommendedDurations: ['4박 5일'],
    suitableCompanions: ['친구', '연인', '혼자'],
    flightTimeHours: 12.5,
    accommodationTypes: ['4~5성급 호텔', '실속 게스트하우스/호스텔'],
    bestMonths: [5, 6, 7, 8, 9],
    description: '빅벤과 런던아이의 웅장함, 대영박물관과 웨스트엔드 뮤지컬, 버킹엄 궁전 근위병 교대식.',
    highlights: ['빅벤 & 런던아이 야경', '웨스트엔드 캣츠/라이온킹 뮤지컬', '대영박물관 무료 관람'],
    estimatedCostText: '약 145만원 ~ 180만원 (1인 기준)',
    bestSeason: '여름 (5월~9월)',
    sampleItinerary: [
      {
        day: 1,
        title: '히드로 공항 도착 & 템즈강 피카딜리',
        spots: ['히드로 익스프레스 탑승', '피카딜리 서커스 야경', '영국 피쉬 앤 칩스 저녁'],
        tip: '컨택리스 신용카드를 사용하면 트래블카드 없이 런던 지하철(Tube)을 탈 수 있습니다.'
      },
      {
        day: 2,
        title: '버킹엄 궁전 & 대영박물관',
        spots: ['버킹엄 궁전 근위병 교대식', '대영박물관 로제타석 관람', '코벤트 가든 마켓'],
        tip: '근위병 교대식은 오전 11시에 시작하므로 10시 30분까지 도착해야 합니다.'
      },
      {
        day: 3,
        title: '타워브릿지 & 웨스트엔드 뮤지컬',
        spots: ['런던 탑 & 타워브릿지 산책', '버러 마켓 스트리트 푸드', '웨스트엔드 뮤지컬 관람'],
        tip: '버러 마켓의 몬머스 커피와 빠에야가 아주 유명합니다.'
      },
      {
        day: 4,
        title: '하이드파크 & 노팅힐 포토벨로',
        spots: ['하이드파크 호수 산책', '노팅힐 파스텔톤 집 포토벨로 마켓', '공항 이동'],
        tip: '노팅힐 영화 배경가게를 찾아 예쁜 스냅 사진을 촬영해보세요.'
      }
    ]
  },
  {
    id: 'sydney',
    name: '시드니',
    region: '호주',
    imageUrl: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1000&auto=format&fit=crop',
    primaryStyle: '자연',
    styles: ['자연', '관광', '휴양'],
    budgetCategory: '150만원 이하',
    recommendedDurations: ['4박 5일'],
    suitableCompanions: ['가족', '연인', '친구'],
    flightTimeHours: 10.5,
    accommodationTypes: ['4~5성급 호텔', '풀빌라/리조트'],
    bestMonths: [9, 10, 11, 12, 1, 2, 3],
    description: '오페라하우스와 하버브릿지 웅장한 뷰, 본다이비치 서핑과 블루마운틴 국립공원의 대자연.',
    highlights: ['오페라하우스 썬셋 라이브 펍', '본다이 비치 아이스버그 수영장', '블루마운틴 궤도열차 산책'],
    estimatedCostText: '약 138만원 ~ 175만원 (1인 기준)',
    bestSeason: '봄, 여름 (9월~3월)',
    sampleItinerary: [
      {
        day: 1,
        title: '시드니 도착 & 서큘러 키 페리',
        spots: ['킹스포드 스미스 공항 도착', '오페라 하우스 외관 감상', '서큘러 키 선셋 페리 탑승'],
        tip: '오팔 카드(Opal Card)를 지참하면 대중교통 이용이 매우 수월합니다.'
      },
      {
        day: 2,
        title: '블루마운틴 대자연 일일 투어',
        spots: ['세자매 봉 절경', '시닉월드 궤도열차', '페더데일 야생 동물원 카구루 만남'],
        tip: '동물원에서 코알라, 캥거루와 직접 셀카를 남길 수 있습니다.'
      },
      {
        day: 3,
        title: '본다이 비치 & 갭파크 절벽',
        spots: ['본다이 비치 해안 산책로', '아이스버그 오션 해수 풀장', '갭파크 바다 절벽'],
        tip: '아이스버그 풀장은 본다이 비치 바다 바로 옆에서 헤엄칠 수 있는 인스타 핫플입니다.'
      },
      {
        day: 4,
        title: '달링하버 야경 & 귀국',
        spots: ['달링하버 럭셔리 다이닝', '하버브릿지 클라이밍/도보 건너기', '공항 이동'],
        tip: '달링하버 주말 불꽃놀이 일정을 미리 체크하세요.'
      }
    ]
  },
  {
    id: 'barcelona',
    name: '바르셀로나',
    region: '스페인',
    imageUrl: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=1000&auto=format&fit=crop',
    primaryStyle: '관광',
    styles: ['관광', '맛집', '휴양'],
    budgetCategory: '150만원 이하',
    recommendedDurations: ['4박 5일'],
    suitableCompanions: ['연인', '친구', '혼자'],
    flightTimeHours: 13,
    accommodationTypes: ['4~5성급 호텔', '감성 펜션/에어비앤비'],
    bestMonths: [4, 5, 6, 9, 10],
    description: '가우디 사그라다 파밀리아 성당의 경이로움, 구엘 공원과 바르셀로네타 해변, 빠에야와 타파스 미식.',
    highlights: ['사그라다 파밀리아 성당 건축', '구엘 공원 동화 같은 가우디 작품', '람블라스 거리 & 타파스 투어'],
    estimatedCostText: '약 142만원 ~ 178만원 (1인 기준)',
    bestSeason: '봄, 가을 (4~6월, 9~10월)',
    sampleItinerary: [
      {
        day: 1,
        title: '엘프라트 공항 도착 & 람블라스 거리',
        spots: ['공항 버스 Aerobus 탑승', '람블라스 거리 거닐기', '보케리아 전통 시장 타파스'],
        tip: '보케리아 시장에서 생과일 주스와 하몽 꼬치를 맛보세요.'
      },
      {
        day: 2,
        title: '가우디 건축 투어 하루 완파',
        spots: ['사그라다 파밀리아 성당 내부', '구엘 공원 헨젤과 그레텔 과자의 집', '카사 바트요 야경'],
        tip: '사그라다 파밀리아는 최소 2~3주 전 한국에서 오디오 가이드를 미리 예약하세요.'
      },
      {
        day: 3,
        title: '몬세라트 수도원 & 바르셀로네타',
        spots: ['몬세라트 절벽 수도원 산악열차', '바르셀로네타 해변 지중해 산책', '해물 빠에야 석식'],
        tip: '스페인 하몽과 샹그리아를 함께 곁들이면 완벽한 석식이 됩니다.'
      },
      {
        day: 4,
        title: '고딕 지구 미로 골목 산책 & 출국',
        spots: ['바르셀로나 대성당', '고딕 지구 감성 소품샵', '공항 이동 및 출국'],
        tip: '고딕 지구 골목골목에서 스페인 수제 가죽제품을 만나볼 수 있습니다.'
      }
    ]
  },
  {
    id: 'cebu',
    name: '세부',
    region: '필리핀',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop',
    primaryStyle: '액티비티',
    styles: ['액티비티', '휴양', '자연'],
    budgetCategory: '100만원 이하',
    recommendedDurations: ['3박 4일', '4박 5일'],
    suitableCompanions: ['친구', '연인', '가족'],
    flightTimeHours: 4.5,
    accommodationTypes: ['풀빌라/리조트', '4~5성급 호텔'],
    bestMonths: [12, 1, 2, 3, 4, 5],
    description: '고래상어와 함께하는 스노클링, 가와산 캐녀닝의 다이빙 액티비티, 투명한 막탄 해변 리조트.',
    highlights: ['오슬롭 고래상어 스노클링', '가와산 계곡 캐녀닝 액티비티', '막탄섬 호핑투어 & 스쿠버다이빙'],
    estimatedCostText: '약 60만원 ~ 82만원 (1인 기준)',
    bestSeason: '건기 (12월~5월)',
    sampleItinerary: [
      {
        day: 1,
        title: '막탄 공항 심야 도착 & 리조트 휴식',
        spots: ['막탄 공항 입국', '리조트 픽업 서비스', '오션뷰 수영장 릴렉스'],
        tip: '공항 픽업을 샌딩 업체와 함께 예약하면 밤늦게도 안심 이동이 가능합니다.'
      },
      {
        day: 2,
        title: '오슬롭 고래상어 & 투말록 폭포',
        spots: ['고래상어와 와일드 스노클링', '영화 아바타 배경 투말록 폭포', '알로그인산 뱀부 라프팅'],
        tip: '고래상어 투어는 새벽 일찍 출발하므로 차량 내 수면 안대를 챙기세요.'
      },
      {
        day: 3,
        title: '막탄 방글라 호핑투어 & 해산물 바비큐',
        spots: ['날루수안 섬 스노클링', '힐루뚱안 바다낚시', '씨푸드 뷔페 & 리조트 마사지'],
        tip: '방수팩과 아쿠아슈즈를 꼭 지참하여 스노클링을 마음껏 즐기세요.'
      },
      {
        day: 4,
        title: '세부 시내 쇼핑 & 나이트 투어',
        spots: ['SM 몰 / 아얄라 몰 쇼핑', '시라오 가든 꽃밭 인생샷', '막탄 공항 출국'],
        tip: '망고 말린 과자와 카라바오 망고잼은 기념품 1위 품목입니다.'
      }
    ]
  },
  {
    id: 'bali',
    name: '발리',
    region: '인도네시아',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop',
    primaryStyle: '휴양',
    styles: ['휴양', '자연', '액티비티'],
    budgetCategory: '150만원 이하',
    recommendedDurations: ['3박 4일', '4박 5일'],
    suitableCompanions: ['연인', '친구', '혼자'],
    flightTimeHours: 7,
    accommodationTypes: ['풀빌라/리조트', '감성 펜션/에어비앤비', '4~5성급 호텔'],
    bestMonths: [4, 5, 6, 7, 8, 9, 10],
    description: '우붓의 울창한 정글 리조트와 스미냑의 힙한 비치클럽, 환상적인 서핑 명소가 어우러진 신들의 섬.',
    highlights: ['우붓 정글 풀빌라 휴식', '스미냑 포테이토헤드 비치클럽', '바투르 산 일출 트레킹'],
    estimatedCostText: '약 110만원 ~ 145만원 (1인 기준)',
    bestSeason: '건기 (4월~10월)',
    sampleItinerary: [
      {
        day: 1,
        title: '발리 입국 & 스미냑 럭셔리 휴식',
        spots: ['덴파사르 공항 도착', '스미냑 석양 비치클럽', '해변 칵테일 다이닝'],
        tip: '공항 환전소보다는 인증된 시내 환전소를 이용하는 것이 유리합니다.'
      },
      {
        day: 2,
        title: '우붓 예술 & 정글 스파 힐링',
        spots: ['우붓 라이스 테라스', '몽키 포레스트', '정글 뷰 전통 스파 마사지'],
        tip: '우붓 라이스 테라스에서는 인생샷 요가 포즈를 도전해보세요.'
      },
      {
        day: 3,
        title: '울루와투 절벽 사원 & 해양 스포츠',
        spots: ['울루와투 절벽 사원', '바닷가 서핑 레슨', '짐바란 해산물 바비큐'],
        tip: '짐바란 선셋 바비큐는 예약하고 방문하면 더 좋은 자리를 겟할 수 있습니다.'
      },
      {
        day: 4,
        title: '쿠타 쇼핑 & 공항 이동',
        spots: ['쿠타 시내 쇼핑몰', '전통 공예품 시장', '귀국 항공편 탑승'],
        tip: '우붓 목공예품과 수제 오일 스파용품이 인기가 높습니다.'
      }
    ]
  },
  {
    id: 'danang',
    name: '다낭 & 호이안',
    region: '베트남',
    imageUrl: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=1000&auto=format&fit=crop',
    primaryStyle: '휴양',
    styles: ['휴양', '맛집', '관광'],
    budgetCategory: '100만원 이하',
    recommendedDurations: ['3박 4일', '4박 5일'],
    suitableCompanions: ['가족', '연인', '친구'],
    flightTimeHours: 4.5,
    accommodationTypes: ['풀빌라/리조트', '4~5성급 호텔'],
    bestMonths: [2, 3, 4, 5, 6, 7, 8],
    description: '가성비 최강의 5성급 바닷가 리조트, 등불로 물드는 낭만의 호이안 올드타운, 반미와 쌀국수의 천국.',
    highlights: ['바나힐 골든브릿지 케이블카', '호이안 야경 등불 배 체험', '미케비치 럭셔리 리조트 스파'],
    estimatedCostText: '약 65만원 ~ 85만원 (1인 기준)',
    bestSeason: '건기 (2월~8월)',
    sampleItinerary: [
      {
        day: 1,
        title: '다낭 도착 & 미케비치 산책',
        spots: ['다낭 공항 도착', '미케비치 해변 거닐기', '핑크성당 & 한시장 탐방'],
        tip: '한시장에서 맞춤 아오자이나 휴양지 원피스를 저렴하게 구매할 수 있습니다.'
      },
      {
        day: 2,
        title: '바나힐 테마파크 & 골든 브릿지',
        spots: ['세계 최장 케이블카', '골든 브릿지 인생샷', '프랑스 마을 테마파크'],
        tip: '오전에 일찍 출발하면 안개 없이 맑은 골든 브릿지를 감상할 수 있습니다.'
      },
      {
        day: 3,
        title: '호이안 올드타운 낭만 야경',
        spots: ['호이안 올드타운 투어', '소원배 등불 띄우기', '쿠킹클래스 & 쿠킹 체험'],
        tip: '호이안의 야경은 밤 7시~9시 사이에 가장 화려하고 아름답습니다.'
      },
      {
        day: 4,
        title: '1일 1마사지 힐링 & 쇼핑',
        spots: ['베트남 전신 마사지', '마블마운틴(오행산)', '다낭 공항 출국'],
        tip: '공항 가기 전 짐 보관이 가능한 샌딩 마사지 샵을 활용하세요.'
      }
    ]
  },
  {
    id: 'sapporo',
    name: '삿포로',
    region: '일본 홋카이도',
    imageUrl: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1000&auto=format&fit=crop',
    primaryStyle: '자연',
    styles: ['자연', '맛집', '관광'],
    budgetCategory: '100만원 이하',
    recommendedDurations: ['3박 4일', '4박 5일'],
    suitableCompanions: ['연인', '친구', '혼자', '가족'],
    flightTimeHours: 2.5,
    accommodationTypes: ['전통 료칸/한옥', '4~5성급 호텔'],
    bestMonths: [12, 1, 2, 7, 8],
    description: '하얀 설경과 온천, 징기스칸 양고기와 삿포로 시원한 맥주, 비에이의 환상적인 언덕 풍경.',
    highlights: ['비에이 패치워크 언덕버스 투어', '삿포로 맥주 박물관 수제 맥주', '스스키노 징기스칸 양고기'],
    estimatedCostText: '약 75만원 ~ 98만원 (1인 기준)',
    bestSeason: '겨울 (12월~2월) / 여름 (7월~8월)',
    sampleItinerary: [
      {
        day: 1,
        title: '신치토세 공항 도착 & 삿포로 시내 탐방',
        spots: ['오도리 공원', '삿포로 TV타워', '스스키노 징기스칸 미식 저녁'],
        tip: '신치토세 공항 쾌속 에어포트 열차로 삿포로역까지 37분만에 이동 가능합니다.'
      },
      {
        day: 2,
        title: '비에이 & 후라노 감성 힐링 투어',
        spots: ['청의 호수(아오이이케)', '흰수염 폭포', '비에이 크리스마스트리'],
        tip: '비에이 일일 일일버스 투어를 예약하면 겨울 산길 운전 부담 없이 최고입니다.'
      },
      {
        day: 3,
        title: '오타루 운하 & 글래스 공예',
        spots: ['오타루 운하 산책', '오타루 오르골당', '카이센동(해산물 덮밥) 점심'],
        tip: '오타루 운하의 야경 조명이 켜지는 해질녘 시간대가 사진 촬영에 가장 좋습니다.'
      },
      {
        day: 4,
        title: '조잔케이 료칸 온천 & 귀국',
        spots: ['조잔케이 온천 마을 족욕', '삿포로 라멘 공화국', '신치토세 공항 기념품'],
        tip: '공항에 홋카이도 특산 과자(시로이 코이비토) 매장이 매우 다양합니다.'
      }
    ]
  },
  {
    id: 'osaka',
    name: '오사카',
    region: '일본',
    imageUrl: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?q=80&w=1000&auto=format&fit=crop',
    primaryStyle: '맛집',
    styles: ['맛집', '관광', '액티비티'],
    budgetCategory: '50만원 이하',
    recommendedDurations: ['2박 3일', '3박 4일'],
    suitableCompanions: ['친구', '혼자', '연인'],
    flightTimeHours: 1.5,
    accommodationTypes: ['4~5성급 호텔', '실속 게스트하우스/호스텔'],
    bestMonths: [3, 4, 5, 10, 11],
    description: '타코야키, 오코노미야키 등 길거리 미식 투어와 유니버설 스튜디오 재팬의 스릴만점 액티비티.',
    highlights: ['도톤보리 글리코상 야경', '유니버설 스튜디오 재팬(USJ)', '쿠로몬 시장 미식 뽀개기'],
    estimatedCostText: '약 48만원 ~ 68만원 (1인 기준)',
    bestSeason: '봄, 가을 (3~5월, 10~11월)',
    sampleItinerary: [
      {
        day: 1,
        title: '간사이 공항 도착 & 도톤보리 스트리트',
        spots: ['도톤보리 글리코상 인증샷', '신사이바시 쇼핑', '갓 구운 타코야키 미식'],
        tip: '라피트 특급열차를 이용하면 난바역까지 38분 만에 편리하게 도착합니다.'
      },
      {
        day: 2,
        title: '유니버설 스튜디오 재팬 하루 완파',
        spots: ['슈퍼 닌텐도 월드', '위저딩 월드 오브 해리포터', '해질녘 오사카성'],
        tip: 'USJ 닌텐도 월드는 확약권(익스프레스 또는 정리권) 확보가 필수입니다.'
      },
      {
        day: 3,
        title: '교토 당일치기 or 우메다 전망대',
        spots: ['우메다 공중정원 전망대', '한큐 백화점 쇼핑', '간사이 공항 출국'],
        tip: '시간 여유가 있다면 아라시야마 대나무 숲을 반나절 코스로 다녀올 수 있습니다.'
      }
    ]
  },
  {
    id: 'interlaken',
    name: '인터라켄',
    region: '스위스',
    imageUrl: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1000&auto=format&fit=crop',
    primaryStyle: '자연',
    styles: ['자연', '액티비티', '관광'],
    budgetCategory: '150만원 이하',
    recommendedDurations: ['4박 5일'],
    suitableCompanions: ['연인', '친구', '혼자'],
    flightTimeHours: 13,
    accommodationTypes: ['감성 펜션/에어비앤비', '4~5성급 호텔'],
    bestMonths: [6, 7, 8, 9],
    description: '유럽의 지붕 융프라우요흐, 에메랄드 빛 툰 호수와 스카이다이빙·패러글라이딩 액티비티의 성지.',
    highlights: ['융프라우 산악열차 탑승', '알프스 패러글라이딩 액티비티', '그린델발트 피르스트 트레킹'],
    estimatedCostText: '약 145만원 ~ 190만원 (1인 기준)',
    bestSeason: '여름 (6월~9월)',
    sampleItinerary: [
      {
        day: 1,
        title: '취리히/제네바 도착 & 인터라켄 입성',
        spots: ['스위스 패스 기차 탑승', '인터라켄 회에베그 공원 산책', '치즈 퐁듀 석식'],
        tip: '스위스 트래블 패스를 소지하면 산악열차 할인 혜택을 받을 수 있습니다.'
      },
      {
        day: 2,
        title: '융프라우요흐 유럽의 지붕 탐방',
        spots: ['아이거 익스프레스 곤돌라', '융프라우 얼음궁전', '신라면 정상 먹방'],
        tip: '정상 날씨 웹캠을 아침 일찍 확인하고 출발하는 것을 추천합니다.'
      },
      {
        day: 3,
        title: '그린델발트 피르스트 액티비티',
        spots: ['클리프 워크 거닐기', '피르스트 플라이어 & 카트', '바흐알프제 호수 하이킹'],
        tip: '마운틴 카트는 인기가 많으므로 피르스트 도착하자마자 번호표를 받으세요.'
      },
      {
        day: 4,
        title: '툰 호수 유람선 & 패러글라이딩',
        spots: ['인터라켄 알프스 패러글라이딩', '툰 호수 유람선 투어', '샤프하우젠 마을'],
        tip: '패러글라이딩 비행 중 고화질 사진 및 영상 촬영 옵션을 추가하세요.'
      }
    ]
  },
  {
    id: 'bangkok',
    name: '방콕',
    region: '태국',
    imageUrl: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1000&auto=format&fit=crop',
    primaryStyle: '맛집',
    styles: ['맛집', '관광', '액티비티'],
    budgetCategory: '50만원 이하',
    recommendedDurations: ['3박 4일', '4박 5일'],
    suitableCompanions: ['친구', '혼자', '연인'],
    flightTimeHours: 5.5,
    accommodationTypes: ['4~5성급 호텔', '실속 게스트하우스/호스텔'],
    bestMonths: [11, 12, 1, 2],
    description: '팟타이와 똠얌꿍 미식의 천국, 화려한 왕궁과 카오산로드의 열기, 루프탑 바 야경이 매력적인 도시.',
    highlights: ['카오산로드 밤거리 배낭여행 열기', '티추카 루프탑 바 야경 감상', '짜오프라야 강 디너 크루즈'],
    estimatedCostText: '약 49만원 ~ 69만원 (1인 기준)',
    bestSeason: '건기 (11월~2월)',
    sampleItinerary: [
      {
        day: 1,
        title: '수완나품 공항 도착 & 카오산로드',
        spots: ['체크인 & 카오산로드 스트리트', '길거리 팟타이 & 땡모반(수박주스)', '발 마사지 받기'],
        tip: '볼트(Bolt)나 그랩(Grab) 앱을 설치하면 방콕 시내 택시를 바가지 없이 타기 좋습니다.'
      },
      {
        day: 2,
        title: '왕궁 & 왓 아룬 뷰 카페 투어',
        spots: ['방콕 에메랄드 사원 왕궁', '왓 아룬(새벽사원) 배경 카페', '아이콘시암 쑥시암 야시장'],
        tip: '왕궁 방문 시 억울한 복장 제재를 피하기 위해 민소매와 반바지는 피하세요.'
      },
      {
        day: 3,
        title: '방콕 핫플 통로 스쿰빗 & 루프탑',
        spots: ['통로 카페거리 감성 카페', '태국 럭셔리 스파 마사지', '티추카 루프탑바 야경'],
        tip: '루프탑바는 스마트 캐주얼 드레스코드가 요구될 수 있으므로 슬리퍼는 자제하세요.'
      },
      {
        day: 4,
        title: '담넌사두억 수상시장 & 출국',
        spots: ['수상시장 배 체험', '빅씨마트 똠얌 라면 쇼핑', '공항 이동 후 출국'],
        tip: '빅씨마트에서 옥수수 젤리와 태국 밀크티 파우더를 챙겨보세요.'
      }
    ]
  },
  {
    id: 'yeosu',
    name: '여수',
    region: '대한민국',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop',
    primaryStyle: '휴양',
    styles: ['휴양', '맛집', '자연'],
    budgetCategory: '50만원 이하',
    recommendedDurations: ['2박 3일'],
    suitableCompanions: ['연인', '가족', '혼자'],
    flightTimeHours: 0.5,
    accommodationTypes: ['감성 펜션/에어비앤비', '4~5성급 호텔'],
    bestMonths: [4, 5, 9, 10],
    description: '여수 밤바다의 낭만과 돌산대교 야경, 게장 백반과 삼합 미식이 함께하는 감성 해안 도시.',
    highlights: ['여수 해양케이블카 바다건너기', '낭만포차 거리 삼합 맛보기', '돌산대교 선셋 야경'],
    estimatedCostText: '약 28만원 ~ 38만원 (1인 기준)',
    bestSeason: '봄, 가을 (4~5월, 9~10월)',
    sampleItinerary: [
      {
        day: 1,
        title: '여수 엑스포역 도착 & 낭만포차',
        spots: ['여수 해양 케이블카 탑승', '돌산공원 야경 감상', '낭만포차 해물삼합 저녁'],
        tip: '케이블카 크리스탈 캐빈을 선택하면 바닥이 투명하여 더 아찔한 뷰를 즐길 수 있습니다.'
      },
      {
        day: 2,
        title: '오동도 동백나무숲 & 게장 미식',
        spots: ['오동도 동백열차 & 산책', '여수 간장게장 & 양념게장 정식', '고소동 천사벽화마을'],
        tip: '고소동 벽화마을 정상 카페에 오르면 여수 앞바다가 한눈에 내려다보입니다.'
      },
      {
        day: 3,
        title: '향일암 일출 & 귀가',
        spots: ['향일암 바위 절경', '여수 갓김치 기념품 구매', '여수 엑스포역 KTX 출발'],
        tip: '향일암 올라가는 길 경사가 다소 높으니 편한 운동화를 착용하세요.'
      }
    ]
  },
  {
    id: 'fukuoka',
    name: '후쿠오카',
    region: '일본',
    imageUrl: 'https://images.unsplash.com/photo-1578637387939-43c525550085?q=80&w=1000&auto=format&fit=crop',
    primaryStyle: '맛집',
    styles: ['맛집', '휴양', '관광'],
    budgetCategory: '50만원 이하',
    recommendedDurations: ['2박 3일', '3박 4일'],
    suitableCompanions: ['혼자', '친구', '연인'],
    flightTimeHours: 1.2,
    accommodationTypes: ['전통 료칸/한옥', '4~5성급 호텔', '실속 게스트하우스/호스텔'],
    bestMonths: [10, 11, 12, 1, 2],
    description: '돈코츠 라멘의 본고장, 하카타 야타이(포장마차) 감성, 유후인 온천 료칸까지 짧고 굵게 다녀오기 좋은 도시.',
    highlights: ['하카타 나카스 야타이 포장마차', '이치란 라멘 본점 식사', '유후인 온천 마을 당일치기'],
    estimatedCostText: '약 42만원 ~ 58만원 (1인 기준)',
    bestSeason: '가을, 겨울 (10월~2월)',
    sampleItinerary: [
      {
        day: 1,
        title: '후쿠오카 공항 도착 & 나카스 야타이',
        spots: ['후쿠오카 공항 도착', '텐진 지하상가 쇼핑', '나카스 야타이 포장마차 라멘'],
        tip: '공항에서 시내(하카타/텐진)까지 지하철로 10~15분으로 접근성이 최고입니다.'
      },
      {
        day: 2,
        title: '유후인 온천 마을 힐링 투어',
        spots: ['유후인 긴린코 호수 산책', '유후인 아기자기 상점가', '유후인 료칸 온천 족욕'],
        tip: '유후인 버스(유후인 호)는 예약이 빠르므로 한국에서 미리 정해두는 것이 좋습니다.'
      },
      {
        day: 3,
        title: '모모치 해변 & 돈키호테 쇼핑 후 귀국',
        spots: ['후쿠오카 타워 & 모모치 해변', '돈키호테 쇼핑몰 털기', '후쿠오카 공항 출국'],
        tip: '모모치 해변의 인공 모래사장과 서양식 건물 배경으로 기념 사진을 남겨보세요.'
      }
    ]
  }
];
