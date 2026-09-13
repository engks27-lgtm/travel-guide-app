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
    id: 'bali',
    name: '발리',
    region: '인도네시아',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop',
    primaryStyle: '휴양',
    styles: ['휴양', '자연', '액티비티'],
    budgetCategory: '150만원 이하',
    recommendedDurations: ['3박 4일', '4박 5일'],
    suitableCompanions: ['연인', '친구', '혼자'],
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
    id: 'cebu',
    name: '세부',
    region: '필리핀',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop',
    primaryStyle: '액티비티',
    styles: ['액티비티', '휴양', '자연'],
    budgetCategory: '100만원 이하',
    recommendedDurations: ['3박 4일', '4박 5일'],
    suitableCompanions: ['친구', '연인', '가족'],
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
    id: 'bangkok',
    name: '방콕',
    region: '태국',
    imageUrl: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1000&auto=format&fit=crop',
    primaryStyle: '맛집',
    styles: ['맛집', '관광', '액티비티'],
    budgetCategory: '50만원 이하',
    recommendedDurations: ['3박 4일', '4박 5일'],
    suitableCompanions: ['친구', '혼자', '연인'],
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
