import React from "react";
import { ContentSection } from "./sections/ContentSection/ContentSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { CustomNavigationSection } from "./sections/CustomNavigationSection/CustomNavigationSection";

export const HeroBanner = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full min-w-[1440px] min-h-[790px] flex flex-col">
      <div className="grouped-header">
        <HeaderSection />
        <CustomNavigationSection />
      </div>
      <ContentSection />
    </div>
  );
};
