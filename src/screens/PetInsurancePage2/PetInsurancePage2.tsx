import React, { lazy, Suspense } from "react";
import { HeroBannerHeaderOnly } from "../hero-banner/HeroBannerHeaderOnly";
import { QuestionCardsSection } from "../../components/QuestionCardsSection";

// Lazy load heavy components for better performance
const BestPetsCarousel2 = lazy(() => import("../BestPetsCarousel/BestPetsCarousel2").then(module => ({ default: module.BestPetsCarousel2 })));
const ElementPc2 = lazy(() => import("../ElementsPC2/ElementPc2").then(module => ({ default: module.ElementPc2 })));

export const PetInsurancePage2 = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header and sub-header only - content sections removed */}
      <HeroBannerHeaderOnly />
      
      {/* Content with just enough padding for the fixed header */}
      <div className="pt-[136px]">
        {/* Using the customized BestPetsCarousel2 for Page 2 */}
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading carousel...</div>}>
          <BestPetsCarousel2 />
        </Suspense>
      </div>
      
      {/* Fixed bottom question cards section */}
      <QuestionCardsSection />
    </div>
  );
};
