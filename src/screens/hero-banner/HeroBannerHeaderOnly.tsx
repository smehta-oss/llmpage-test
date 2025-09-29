import React from "react";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { CustomNavigationSection } from "./sections/CustomNavigationSection/CustomNavigationSection";

export const HeroBannerHeaderOnly = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full min-w-[378px] flex flex-col">
      <div className="grouped-header">
        <HeaderSection />
        <CustomNavigationSection />
      </div>
    </div>
  );
};
