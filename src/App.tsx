import React, { lazy, Suspense, useState } from "react";
import { HeroBanner } from "./screens/hero-banner/HeroBanner";
import { ChatOverlay } from './components/ChatOverlay';
import type { ProviderRecommendation, UserPreferences } from './components/ChatOverlay';
import {
  INSURANCE_PLANS,
  COST_DATA,
  PLAN_DETAILS_DATA,
  USER_OPINION_DATA,
  CLAIMS_DATA
} from './data/insurance-providers';

// Lazy load heavy components for better performance
const BestPetsCarousel = lazy(() => import("./screens/BestPetsCarousel/BestPetsCarousel").then(module => ({ default: module.BestPetsCarousel })));
const ElementPc = lazy(() => import("./screens/ElementsPC/ElementPc").then(module => ({ default: module.ElementPc })));

export const App = (): JSX.Element => {
  const [recommendations, setRecommendations] = useState<ProviderRecommendation[] | null>(null);
  const [userPrefs, setUserPrefs] = useState<UserPreferences | null>(null);

  const handleRecommendations = (recs: ProviderRecommendation[], preferences: UserPreferences) => {
    console.log('Recommendations:', recs);
    setRecommendations(recs);
    setUserPrefs(preferences);
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroBanner />
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading carousel...</div>}>
        <BestPetsCarousel />
      </Suspense>
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading content...</div>}>
        <ElementPc />
      </Suspense>
      <ChatOverlay
        plans={INSURANCE_PLANS}
        costData={COST_DATA}
        planDetails={PLAN_DETAILS_DATA}
        userOpinions={USER_OPINION_DATA}
        claimsData={CLAIMS_DATA}
        onRecommendations={handleRecommendations}
      />
    </div>
  );
};