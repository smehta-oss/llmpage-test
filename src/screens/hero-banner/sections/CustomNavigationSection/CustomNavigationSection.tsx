import React from "react";

export const CustomNavigationSection = (): JSX.Element => {
  const navigationItems = [
    "All Insurance",
    "Car Insurance", 
    "Travel Insurance",
    "Pet Insurance",
    "Life Insurance",
    "Home Insurance",
    "Renters Insurance",
    "Business Insurance",
    "Health Insurance",
  ];

  const getFontSize = (itemName: string) => {
    switch (itemName) {
      case "All Insurance": return "text-[13.89px]";
      case "Car Insurance": return "text-[13.67px]";
      case "Health Insurance": return "text-[13.67px]";
      default: return "text-[13.56px]";
    }
  };

  return (
    <div className="sub-header-nav fixed top-14 left-0 w-full z-[2] py-px pr-6 bg-white border-t border-b border-[#EDEDED] flex flex-col justify-center items-start">
      <div className="self-stretch flex-1 overflow-hidden justify-between items-center inline-flex">
        <div className="pl-6 pr-[21px] border-r border-[#D7DCE5] flex-col justify-start items-start inline-flex">
          <div className="justify-center flex flex-col text-[#1E2125] text-2xl font-inter font-semibold leading-[29px] break-words">
            Insurance
          </div>
        </div>
        <div className="pl-5 flex-col justify-start items-start inline-flex">
          <div className="justify-start items-start gap-6 inline-flex">
            {navigationItems.map((item, index) => (
              <div key={index} className="self-stretch flex-col justify-start items-start inline-flex">
                <div className="py-[18px] px-2 bg-white justify-start items-center inline-flex cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className={`justify-center flex flex-col text-black ${getFontSize(item)} font-graphik font-normal capitalize leading-4 break-words`}>
                    {item}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};