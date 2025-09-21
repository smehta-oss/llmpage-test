import React, { lazy, Suspense } from "react";
import { HeroBanner } from "./screens/hero-banner/HeroBanner";

// Lazy load heavy components for better performance
const BestPetsCarousel = lazy(() => import("./screens/BestPetsCarousel/BestPetsCarousel").then(module => ({ default: module.BestPetsCarousel })));
const ElementPc = lazy(() => import("./screens/ElementsPC/ElementPc").then(module => ({ default: module.ElementPc })));

export const App = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-white">
      <HeroBanner />
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading carousel...</div>}>
        <BestPetsCarousel />
      </Suspense>
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading content...</div>}>
        <ElementPc />
      </Suspense>
    </div>
  );
};