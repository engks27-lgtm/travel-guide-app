import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '트립파인더 (TripFinder) | AI 맞춤 여행지 추천 서비스',
  description: '여행 스타일, 예산, 기간, 동행자에 따라 나에게 딱 맞는 여행지를 추천받고 상세 일정을 확인해보세요.',
  keywords: ['여행', '여행지 추천', '제주도', '발리', '다낭', '삿포로', '오사카', '스위스', '여행가이드'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
