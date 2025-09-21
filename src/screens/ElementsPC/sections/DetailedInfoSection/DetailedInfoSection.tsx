import React from "react";
import { MainContentSection } from "../MainContentSection/MainContentSection";
import { PetsBestDetailsSection } from "../PetsBestSection/PetsBestDetailsSection";

export const DetailedInfoSection = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen">
      <div className="max-w-[1016px] mx-auto">
        <div className="grid grid-cols-12 gap-5 pt-16">
          <div className="col-span-12 flex flex-col gap-10">
            <MainContentSection />
            <PetsBestDetailsSection />
          </div>
        </div>
      </div>
    </div>
  );
};