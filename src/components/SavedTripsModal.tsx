'use client';

import React from 'react';
import Image from 'next/image';
import { Destination } from '@/types/travel';
import { mockDestinations } from '@/data/mockDestinations';
import { X, Bookmark, Trash2, ExternalLink, MapPin } from 'lucide-react';

interface SavedTripsModalProps {
  savedIds: string[];
  isOpen: boolean;
  onClose: () => void;
  onRemoveSave: (id: string) => void;
  onOpenDetail: (dest: Destination) => void;
}

export const SavedTripsModal: React.FC<SavedTripsModalProps> = ({
  savedIds,
  isOpen,
  onClose,
  onRemoveSave,
  onOpenDetail,
}) => {
  if (!isOpen) return null;

  const savedDestinations = mockDestinations.filter((d) => savedIds.includes(d.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-xl bg-white rounded-[12px] overflow-hidden shadow-2xl my-8 max-h-[85vh] flex flex-col border border-[#e5e7eb]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-6 border-b border-[#e5e7eb] flex items-center justify-between bg-[#f3f4f5]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-[12px] bg-[#0cefd3] text-[#222222] shadow-sm">
              <Bookmark className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-[#222222] text-lg">보관한 여행지</h3>
              <p className="text-xs text-[#6c6d6f]">총 {savedDestinations.length}개의 여행지가 저장되어 있습니다.</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 text-[#222222] flex items-center justify-center transition-colors border border-[#e5e7eb]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {savedDestinations.length === 0 ? (
            <div className="py-12 text-center text-[#6c6d6f]">
              <Bookmark className="w-12 h-12 mx-auto mb-3 text-[#a6a7a9] stroke-1" />
              <p className="font-bold text-[#222222] mb-1 text-sm">아직 저장한 여행지가 없습니다.</p>
              <p className="text-xs text-[#6c6d6f]">추천 결과 하트 아이콘을 눌러 저장해보세요!</p>
            </div>
          ) : (
            savedDestinations.map((dest) => (
              <div
                key={dest.id}
                className="p-3.5 rounded-[12px] border border-[#e5e7eb] bg-white hover:border-[#0cefd3] transition-all flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative w-16 h-16 rounded-[12px] overflow-hidden shrink-0 bg-[#f3f4f5]">
                    <Image
                      src={dest.imageUrl}
                      alt={dest.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#e6fdfa] text-[#007a6c] border border-[#0cefd3]/30">
                        {dest.primaryStyle}
                      </span>
                      <span className="text-xs text-[#6c6d6f] flex items-center gap-0.5">
                        <MapPin className="w-3 h-3 text-[#6c6d6f]" />
                        {dest.region}
                      </span>
                    </div>
                    <h4 className="font-bold text-[#222222] text-base truncate">{dest.name}</h4>
                    <p className="text-xs text-[#6c6d6f] truncate">{dest.estimatedCostText}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenDetail(dest);
                    }}
                    className="p-2 rounded-[8px] bg-[#f3f4f5] hover:bg-[#0cefd3] text-[#222222] transition-colors"
                    title="상세 보기"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onRemoveSave(dest.id)}
                    className="p-2 rounded-[8px] bg-[#f3f4f5] hover:bg-rose-50 text-[#6c6d6f] hover:text-rose-500 transition-colors"
                    title="삭제"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#e5e7eb] bg-[#f3f4f5] text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-[12px] bg-[#222222] text-white font-bold text-xs"
          >
            닫기
          </button>
        </div>

      </div>
    </div>
  );
};
