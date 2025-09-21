import React from "react";
import { MainContentSection } from "../MainContentSection/MainContentSection";
import { PetsBestCard1 } from "../PetsBestSection/PetsBestCard1";
import { PetsBestCard2 } from "../PetsBestSection/PetsBestCard2";
import { PetsBestCard3 } from "../PetsBestSection/PetsBestCard3";
import { PetsBestCard4 } from "../PetsBestSection/PetsBestCard4";
import { PetsBestCard5 } from "../PetsBestSection/PetsBestCard5";
import { PetsBestCard6 } from "../PetsBestSection/PetsBestCard6";

export const DetailedInfoSection = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen">
      <div className="max-w-[1016px] mx-auto">
        <div className="grid grid-cols-12 gap-5 pt-16">
          <div className="col-span-12 flex flex-col gap-10">
            <MainContentSection />
            <div className="flex flex-col gap-6">
              <PetsBestCard1 />
              <PetsBestCard2 />
              <PetsBestCard3 />
              <PetsBestCard4 />
              <PetsBestCard5 />
              <PetsBestCard6 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};