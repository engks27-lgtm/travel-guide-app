'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { RecommendationForm } from '@/components/RecommendationForm';
import { LoadingState } from '@/components/LoadingState';
import { ResultSection } from '@/components/ResultSection';
import { DestinationDetailModal } from '@/components/DestinationDetailModal';
import { SavedTripsModal } from '@/components/SavedTripsModal';

import { TravelPreference, RecommendationResult, Destination } from '@/types/travel';
import { getRecommendations } from '@/utils/recommendationEngine';
import { mockDestinations } from '@/data/mockDestinations';

type ViewState = 'IDLE' | 'LOADING' | 'RESULTS';

export default function Home() {
  const [viewState, setViewState] = useState<ViewState>('IDLE');
  const [preference, setPreference] = useState<TravelPreference | null>(null);
  const [results, setResults] = useState<RecommendationResult[]>([]);
  
  // LocalStorage Saved Destinations
  const [savedIds, setSavedIds] = useState<string[]>([]);

  // Modals state
  const [detailResult, setDetailResult] = useState<RecommendationResult | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isSavedModalOpen, setIsSavedModalOpen] = useState(false);

  // Hydrate saved trips on client mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('saved_travel_ids');
      if (stored) {
        setSavedIds(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to parse saved_travel_ids', e);
    }
  }, []);

  const toggleSaveDestination = (id: string) => {
    setSavedIds((prev) => {
      let updated: string[];
      if (prev.includes(id)) {
        updated = prev.filter((item) => item !== id);
      } else {
        updated = [...prev, id];
      }
      try {
        localStorage.setItem('saved_travel_ids', JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to save to localStorage', e);
      }
      return updated;
    });
  };

  const handleFormSubmit = (pref: TravelPreference) => {
    setPreference(pref);
    setViewState('LOADING');

    // Simulate realistic 1.2s AI engine matching calculation
    setTimeout(() => {
      const recommended = getRecommendations(pref);
      setResults(recommended);
      setViewState('RESULTS');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1200);
  };

  const handleReset = () => {
    setViewState('IDLE');
    setTimeout(() => {
      const el = document.getElementById('preference-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleScrollToForm = () => {
    const el = document.getElementById('preference-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDetailModal = (resultOrDest: RecommendationResult | Destination) => {
    if ('score' in resultOrDest) {
      setDetailResult(resultOrDest);
    } else {
      // Find matching result or build dummy recommendation result
      const found = results.find((r) => r.destination.id === resultOrDest.id);
      if (found) {
        setDetailResult(found);
      } else {
        setDetailResult({
          destination: resultOrDest,
          score: 95,
          reason: `'${resultOrDest.name}'은(는) 다양함과 매력이 공존하는 최고의 맞춤 여행지입니다.`,
        });
      }
    }
    setIsDetailOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f6f6] text-[#222222]">
      
      {/* Navigation Header */}
      <Header
        savedCount={savedIds.length}
        onOpenSaved={() => setIsSavedModalOpen(true)}
        onReset={handleReset}
      />

      <main className="flex-1">
        {viewState === 'IDLE' && (
          <>
            <HeroSection onStart={handleScrollToForm} />
            <RecommendationForm
              onSubmit={handleFormSubmit}
              initialValues={preference || undefined}
            />
          </>
        )}

        {viewState === 'LOADING' && <LoadingState />}

        {viewState === 'RESULTS' && preference && (
          <ResultSection
            results={results}
            preference={preference}
            savedIds={savedIds}
            onToggleSave={toggleSaveDestination}
            onOpenDetail={handleOpenDetailModal}
            onReset={handleReset}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Detail Modal */}
      <DestinationDetailModal
        result={detailResult}
        isOpen={isDetailOpen}
        isSaved={detailResult ? savedIds.includes(detailResult.destination.id) : false}
        onClose={() => setIsDetailOpen(false)}
        onToggleSave={toggleSaveDestination}
      />

      {/* Saved Trips Drawer/Modal */}
      <SavedTripsModal
        savedIds={savedIds}
        isOpen={isSavedModalOpen}
        onClose={() => setIsSavedModalOpen(false)}
        onRemoveSave={toggleSaveDestination}
        onOpenDetail={(dest) => handleOpenDetailModal(dest)}
      />

    </div>
  );
}
